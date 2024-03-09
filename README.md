# graphql-python

python3 --version

virtualenv -p python3.9 venv

source venv/bin/activate

(deactivate)

pip install graphene

// pip install strawberry-graphql

// pip install rich 

// pip install typer

// pip install libcst

// pip install 'strawberry-graphql[debug-server]'

// strawberry server app

pip install flask ariadne flask-sqlalchemy flask-cors

pip install psycopg2

with app.app_context():
    db.create_all()

$ flask shell
>>> db.create_all()

Or push a context manually if using a plain python shell.
$ python
>>> from project import app, db
>>> app.app_context().push()
>>> db.create_all()


>>> from datetime import datetime
>>> from api.models import Post
>>> current_date = datetime.today().date()
>>> new_post = Post(title="A new morning", description="A new morning details", created_at=current_date)
>>> db.session.add(new_post)
>>> db.session.commit()


query AllPosts {
  listPosts {
    success
    errors
    post {
      id
      title 
      description
      created_at
    }
  }
}


