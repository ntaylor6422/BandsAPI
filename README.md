# BandAPI

Made during my time as a student at Code Chrysalis in Tokyo!

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

## Queries

```
query {
    bands {
        id
        name
        dateFormed
    }
}

query {
    band(name: "Led Zeppelin") {
        id
        name
        dateFormed
    }
}

query {
    comments {
        id
        comment
        rating
    }
}

```

## Mutations

```
mutations {
    createBand(
        data: {
            name: "Add name"
            dateFormed: "1988"
        }
    ) {
        id
        name
        dateFormed
    }
}

mutations {
    updateBand(
        name: "Led Zeppelin"
        data: {
            dateFormed: "1968"
        }
    )
}

mutations {
    createComment(
        data: {
            id: #
            comment: "Awesome Band!"
            rating: 5
        }
    ) {
        id
        name
        formedDate
    }
}

```
