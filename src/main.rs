use rust_embed::RustEmbed;
use salvo::prelude::*;
use salvo::serve_static::static_embed;
use salvo::ws::WebSocketUpgrade;
use serde::{Deserialize, Serialize};
use std::process::Command;

#[derive(RustEmbed)]
#[folder = "dist"]
struct Assets;

#[derive(Debug, Clone, Deserialize, Serialize)]
struct User {
    id: usize,
    name: String,
}

#[handler]
async fn connect(req: &mut Request, res: &mut Response) -> Result<(), StatusError> {
    let user = req.parse_queries::<User>();
    WebSocketUpgrade::new()
        .upgrade(req, res, |mut ws| async move {
            println!("{:#?} ", user);
            while let Some(msg) = ws.recv().await {
                let msg = if let Ok(msg) = msg {
                    msg
                } else {
                    // client disconnected
                    return;
                };

                if ws.send(msg).await.is_err() {
                    // client disconnected
                    return;
                }
            }
        })
        .await
}

#[handler]
async fn api(res: &mut Response) {
    #[derive(Serialize, Debug)]
    struct Re {
        response: String,
    }
    let r = Re {
        response: String::from("Ok"),
    };
    res.render(Json(r));
}

#[tokio::main]
async fn main() {
    // compile frontend
    Command::new("deno")
        .arg("task")
        .arg("build")
        .spawn()
        .expect("Failed to comple frontend");
    // create router
    let router = Router::new()
        .push(Router::new().path("api").get(api))
        .push(Router::with_path("ws").handle(connect))
        .push(
            Router::with_path("<**path>").get(static_embed::<Assets>().with_fallback("index.html")),
        );
    // start server
    Server::new(TcpListener::bind("127.0.0.1:7878"))
        .serve(router)
        .await;
}
