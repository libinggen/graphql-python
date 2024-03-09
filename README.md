# graphql-python

## backend

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


# Write your query or mutation here
query AllPosts {
  listPosts {
    success
    errors
    posts {
      id
      title
      description
      created_at
    }
  }
}

query GetPost {
  getPost(id: "1") {
    post {
      id
      title
      description
    }
    success
    errors
  }
}

mutation CreateNewPost {
  createPost(title: "New Blog Post", description: "Some Description") {
    post {
      id
      title
      description
      created_at
    }
    success
    errors
  }
}

mutation UpdatePost {
  updatePost(
    id: "2"
    title: "Hello title2"
    description: "updated description"
  ) {
    post {
      id
      title
      description
    }
    success
    errors
  }
}

mutation DeletePost{
  deletePost(id: "5") {
    post {
      id
      title
      description
    }
    success
    errors
  }
}


## frontend

sudo npm cache clean --force

brew update                  
brew upgrade

npx create-react-app frontend

sudo lsof -i :3000

sudo lsof -ti:3000 | xargs sudo kill -9


