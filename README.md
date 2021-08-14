# Graphql MongoMemoryServer example

NodeJS GraphQL MongoMemoryServer test example.

## Installation

    npm install

## Run the application

    npm run start

## GraphQL

Playground:

    http://localhost:4000/playground

Get all users query:

    query {
        users {
            name
            email
            posts {
                title
                published
            }
        }
    }

Get single user:

    query {
        user(id: 1) {
            name
            email
            posts {
                title
                published
            }
        }
    }

Mutations

    mutation {
        editUser(user: { id: 112, name: "Andrea", email: "a@a.it" } ) {
            name
            email
        }
    }

## Tools

- GraphQL
- NodeJS
- [MongoDb memory server](https://nodkz.github.io/mongodb-memory-server/)

## TODO

- Run MongoMemoryServer as unit test with Jest
- Customize GraphQL error messages
