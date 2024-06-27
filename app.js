
var express = require('express');
var path = require('path');
//require word is keyword for importing packages
const session = require('express-session');

var app = express();
//app is our server and we use app. whenever we want anything from server
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//telling server that all html files will be in views folder setting path for the views
//telling server if u want to find the views go to myApp directory/views (as __dirname is file directory)
app.set('view engine', 'ejs');
//handle views as ejs not just plain html


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.get('/', function (req, res) {
  res.render('login', { msg: '' });
});


app.post('/homego', function (req, res) {
  res.render('home');
})

app.post('/logingo', function (req, res) {
  res.redirect('/');
})


app.post('/return', function (req, res) {
  res.render(req.session.site);
})

app.post('/search', function (req, res) {
  var item = String(req.body.Search).toLowerCase();
  var AllProducts = ["Galaxy S21 Ultra",
    "iPhone 13 Pro",
    "Leaves of Grass",
    "The Sun and Her Flowers",
    "Boxing Bag",
    "Tennis Racket"
  ];
  var textt = [];
  for (var i = 0; i < AllProducts.length; i++) {

    if (item != "" && item != " " && AllProducts[i].toLowerCase().includes(item) == true) {
      textt.push(AllProducts[i]);
    }
  }

  if (textt.length == 0) {
    textt.push("not found");
  }
  console.log(textt);
  res.render('searchresults', { x: textt });
})







app.get('/gcart', async function (req, res) {
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var name = req.session.usersession + "collection";
  var output = await client.db('powerpuff').collection(name).find().toArray();
  var flag = false;
  for (var i = 0; i < output.length; i++) {

    if (output[i].product == "Galaxy S21 Ultra") {
      flag = true;
      break;
    }

  }
  if (flag == false) {
    var us = { product: "Galaxy S21 Ultra" };
    await client.db('powerpuff').collection(name).insertOne(us);
    res.render('galaxy');
  }
  if (flag == true) {
    req.session.site = 'galaxy';
    res.render('carterror');
  }
})



app.get('/bcart', async function (req, res) {
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var name = req.session.usersession + "collection";
  var output = await client.db('powerpuff').collection(name).find().toArray();
  var flag = false;
  for (var i = 0; i < output.length; i++) {

    if (output[i].product == "Boxing Bag") {
      flag = true;
      break;
    }


  }
  if (flag == false) {
    var us = { product: "Boxing Bag" }
    await client.db('powerpuff').collection(name).insertOne(us);
    res.render('boxing');
  }
  if (flag == true) {
    req.session.site = 'boxing';
    res.render('carterror');
  }
})




app.get('/ipcart', async function (req, res) {
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var name = req.session.usersession + "collection";
  var output = await client.db('powerpuff').collection(name).find().toArray();
  var flag = false;
  for (var i = 0; i < output.length; i++) {

    if (output[i].product == "iPhone 13 Pro") {
      flag = true;
      break;
    }


  }
  if (flag == false) {
    var us = { product: "iPhone 13 Pro" }
    await client.db('powerpuff').collection(name).insertOne(us);
    res.render('iphone');
  }
  if (flag == true) {
    req.session.site = 'iphone';
    res.render('carterror');
  }
})




app.get('/lcart', async function (req, res) {
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var name = req.session.usersession + "collection";
  var output = await client.db('powerpuff').collection(name).find().toArray();
  var flag = false;
  for (var i = 0; i < output.length; i++) {

    if (output[i].product == "Leaves of Grass") {
      flag = true;
      break;
    }


  }
  if (flag == false) {
    var us = { product: "Leaves of Grass" }
    await client.db('powerpuff').collection(name).insertOne(us);
    res.render('leaves');
  }
  if (flag == true) {
    req.session.site = 'leaves';
    res.render('carterror');
  }
})



app.get('/tcart', async function (req, res) {
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var name = req.session.usersession + "collection";
  var output = await client.db('powerpuff').collection(name).find().toArray();
  var flag = false;
  for (var i = 0; i < output.length; i++) {

    if (output[i].product == "Tennis Racket") {
      flag = true;
      break;
    }


  }
  if (flag == false) {
    var us = { product: "Tennis Racket" }
    await client.db('powerpuff').collection(name).insertOne(us);
    res.render('tennis');
  }
  if (flag == true) {
    req.session.site = 'tennis';
    res.render('carterror');
  }
})



app.get('/scart', async function (req, res) {
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var name = req.session.usersession + "collection";
  var output = await client.db('powerpuff').collection(name).find().toArray();
  var flag = false;
  for (var i = 0; i < output.length; i++) {

    if (output[i].product == "The Sun and Her Flowers") {
      flag = true;
      break;
    }


  }
  if (flag == false) {
    var us = { product: "The Sun and Her Flowers" }
    await client.db('powerpuff').collection(name).insertOne(us);
    res.render('sun');
  }
  if (flag == true) {
    req.session.site = 'sun';
    res.render('carterror');
  }
})




app.post('/', async function (req, res) {
  var user = req.body.username;
  var pass = req.body.password;

  //we connect to the database
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  //connection done
  var success = false;
  //ben5ally el collection array
  var output = await client.db('powerpuff').collection('firstcollection').find().toArray();

  for (var i = 0; i < output.length; i++) {

    if (output[i].username == user && output[i].password == pass) {
      console.log("login success");

      success = true;
      break;
    }
  }

  if (success == false) {
    res.render('login', { msg: 'wrong username or password' });
  }

  else if (success == true) {

    req.session.usersession = user;
    res.render('home');

  }

});



app.get('/registration', function (req, res) {

  res.render('registration', { message: '' });
});


app.post('/register', async function (req, res) {
  var usern = req.body.username;
  var passw = req.body.password;

  //TO CONNECT
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  var x = "";
  var output = await client.db('powerpuff').collection('firstcollection').find().toArray();

  //we check if the username is in the db
  for (var i = 0; i < output.length; i++) {

    if (output[i].username == usern) {
      x = "exists";
      break;
    }
  }

  if (x != "") {
    //if the user exists
    res.render('registration', { message: 'this username already exists' });
  }

  else {
    //the user is new, now we add it to the database
    var us = { username: usern, password: passw };
    await client.db('powerpuff').collection('firstcollection').insertOne(us);
    //the users collection for addToCart
    await client.db('powerpuff').createCollection(usern + "collection");
    req.session.usersession = usern;
    console.log("success");
    res.render('home');
  }

});

//REGISTER USER COMPONENT IS NOW DONE.





app.get('/phones', function (req, res) {
  res.render('phones');
});

app.get('/galaxy', function (req, res) {
  res.render('galaxy');
});
app.get('/iphone', function (req, res) {
  res.render('iphone');
});
app.get('/cart', async function (req, res) {
  //TO CONNECT
  var { MongoClient } = require("mongodb");
  var uri = "mongodb+srv://powerpuff:powerpuff503@cluster0.zk6st.mongodb.net/powerpuff?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  //get the collection
  var name = req.session.usersession + "collection";
  var output = await client.db('powerpuff').collection(name).find().toArray();
  //loop on the collection array and add element names into another array
  var objectNames = [];

  for (var i = 0; i < output.length; i++)
    objectNames.push(output[i].product);

  //to display "nothing is in the cart"  
  if (objectNames.length == 0)
    objectNames.push("not found");

  console.log(objectNames)


  res.render('cart', { x: objectNames });



})

app.get('/books', function (req, res) {
  res.render('books');
});
app.get('/sports', function (req, res) {
  res.render('sports');
});
app.get('/leaves', function (req, res) {
  res.render('leaves');
});
app.get('/sun', function (req, res) {
  res.render('sun');
});
app.get('/boxing', function (req, res) {
  res.render('boxing');
});
app.get('/tennis', function (req, res) {
  res.render('tennis');
});



if (process.env.PORT) {
  app.listen(process.env.PORT, function () { console.log('server started') });
}

else {
  app.listen(3000, function () { console.log('server started on port 3000') });

}


