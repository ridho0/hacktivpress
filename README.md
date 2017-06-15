# hacktivpress

merupakan blogging system sederhana dengan menggunakan framework Express JS, dan juga work database MongoDB.
Dalam blogging sistem ini setiap orang bisa melihat daftar keseluruhan artikel atau daftar artikel berdasar kategori. Namun hanya user yang ter-autentifikasi yang bisa membuat, mengedit, dan menghapus artikel.

to use
```
in server:
npm install
npm start

in client:
npm install
mpn run dev
```

##server route

| route             | http   | description                                             |   
|-------------------|--------|---------------------------------------------------------|
| /register         | post   | Register to create an user account                      |   
| /login            | post   | Login in while get an access token based on credentials |  
| /user/:id         | delete | delete user account                                     |   
| /article          | post   | create an article                                       |   
| /article          | get    | get all articles                                        |   
| /article/:author  | get    | get articles by author                                  |   
| /article/:category| get    | get articles by category                                |   
| /article/:id      | get    | get an article                                          |
| /article/:id      | put    | edit an article                                         |
| /article/:id      | delete | delete an article                                       |
