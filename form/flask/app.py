from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def handle_submit():
    email = request.form.get("email")
    return f"Thanks for subscribing, {email}"


if __name__ == "__main__":
    app.run(debug=True)
