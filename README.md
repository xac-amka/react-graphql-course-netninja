## React and Graphql tutorial

## What is GraphQL?
 - GraphQL is a powerful query language
 - Allows for a more flexible & efficient approach than REST

## 01 Server Side
 - **Step 1 - Installation**
 ```shell
 npm i --save express graphql express-graphql
 ```
 - **Step 2 - Schema**
    - Schema describes: 
        - data on this graph, 
        - object types, 
        - relation between object types,
        - how can we reach into graph,
        - retrieve data,
        - mutate or change data
 - **Step 3 - RootQuery**
    - RootQuery is how we initially jump into graph and grab data
 - **Step 4 - SchemaTypes**
    - GraphQLID
    > Special behavior which takes both int and string and convert to string
    - GraphQLSchema
    > For exporting created Query or graphqlType
    - GraphQLObjectType
    > For creating custom type of graphql 
    - GraphQLList
    > Returns list of object types
    - GraphQLString
    - GraphQLInt

 - **Step 5 - Type Relations**
    - Nested GraphqlObjectType in another GraphQlObjecType.

 - **Step 6 - Create MongoDB database**
    - Create cluster and get connection link

 - **Step 7 - Connect express with MongoDB**
    - install mongoose and connect it.
    - Create mongoDB type schema with mongoose. 
    > _That mongoose schema name become mongodb collection name_
    - Then import it to Graphql __schema__ file.

 - **Step 8 - GraphQL Mutations**
    - Change or mutate data from database. /add, delete, update../

## 02 Client Side

 - **Step 1 - Create react-app**
    - Create frontend UI with react
    ```shell
    npx create-react-app frontend
    cd frontend
    npm run start
    ```

 - **Step 2 - Create appollo-server**
    - ApolloClient is gonna help us connecting express-grapql and react-app
    - Install ApolloClient from [here](https://www.apollographql.com/docs/react/get-started/)

## 03 Start both Client and Server at same time
 ```shell
 npm i -g concurrency
 npm i concurrency
 ```
 then add it in package.json
 ```js
   "scripts": {
      "start": "pwd && concurrently \"cd ./frontend && npm run start\"  \"cd ./backend && npm run server\" "
   },
 ```
 
 ## References
  - [react-apollo](https://github.com/apollographql/react-apollo)
  - [howtographql-react&apollo](https://www.howtographql.com/react-apollo/0-introduction/)
  - []()

