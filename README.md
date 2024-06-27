# Simple Shopping Website 🛒
A simple shopping website using Express.js, MongoDB, HTML5 and EJS. Endpoint description below.

## How to run

- Clone this repository to the preferred location. Make sure Node.js is installed on your device
- Open a new terminal and run the command `npm install` to install all the dependencies.
- The Mongo URI provided in the `app.js` file is no longer available. Replace it with a URI of a cluster that is working.
- Run `node app.js` then open a new browser tab and go to `http://localhost:3000`.

Good luck on your shopping spree! 🥳


## Developed by a lovely team of five 💖💖💖💖💖
Tarteel Elattar (Me)

[Dina Ayman](https://github.com/DinaAymann)

[Nora Osama](https://github.com/NoraOsama)

[Bassant Tarek](https://github.com/bassantTarekk)

[Salma Khaled](https://github.com/salmakhaled11234)

## Endpoints
| **Endpoint** | **Method** | **Inputs** | **Expected Output** |
|--------------|------------|------------|---------------------|
| `/` | GET | None | Renders `login` view with empty message |
| `/homego` | POST | None | Renders `home` view |
| `/logingo` | POST | None | Redirects to `/` |
| `/return` | POST | None | Renders the view stored in `req.session.site` |
| `/search` | POST | `Search` (string) | Renders `searchresults` view with matching products or "not found" |
| `/gcart` | GET | None | Adds "Galaxy S21 Ultra" to the user's cart or renders `carterror` if already present, otherwise renders `galaxy` |
| `/bcart` | GET | None | Adds "Boxing Bag" to the user's cart or renders `carterror` if already present, otherwise renders `boxing` |
| `/ipcart` | GET | None | Adds "iPhone 13 Pro" to the user's cart or renders `carterror` if already present, otherwise renders `iphone` |
| `/lcart` | GET | None | Adds "Leaves of Grass" to the user's cart or renders `carterror` if already present, otherwise renders `leaves` |
| `/tcart` | GET | None | Adds "Tennis Racket" to the user's cart or renders `carterror` if already present, otherwise renders `tennis` |
| `/scart` | GET | None | Adds "The Sun and Her Flowers" to the user's cart or renders `carterror` if already present, otherwise renders `sun` |
| `/` | POST | `username`, `password` | Validates login credentials, sets `req.session.usersession`, and renders `home` if successful, otherwise renders `login` with error message |
| `/registration` | GET | None | Renders `registration` view with empty message |
| `/register` | POST | `username`, `password` | Registers a new user, creates a user collection, sets `req.session.usersession`, and renders `home` if successful, otherwise renders `registration` with error message |
| `/phones` | GET | None | Renders `phones` view |
| `/galaxy` | GET | None | Renders `galaxy` view |
| `/iphone` | GET | None | Renders `iphone` view |
| `/cart` | GET | None | Renders `cart` view with products in the user's cart or "not found" if empty |
| `/books` | GET | None | Renders `books` view |
| `/sports` | GET | None | Renders `sports` view |
| `/leaves` | GET | None | Renders `leaves` view |
| `/sun` | GET | None | Renders `sun` view |
| `/boxing` | GET | None | Renders `boxing` view |
| `/tennis` | GET | None | Renders `tennis` view |
