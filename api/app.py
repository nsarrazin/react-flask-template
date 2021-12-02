from flask import Flask
from flask_socketio import SocketIO

import eventlet

eventlet.monkey_patch()

app = Flask(__name__)
io = SocketIO()
io.init_app(app, cors_allowed_origins="*", async_mode="eventlet")

@app.route("/")
def index():
    return "Index Page API"

n = 0

@io.on("connect")
def socketio_hello():
    global n 
    n+=1
    io.send(n, broadcast=True)

if __name__ == "__main__":
    io.run(app, debug=True)
