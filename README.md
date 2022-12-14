# React Routing and Styling

For this activity, you will fulfill the following requirements:

## FIRST STEP:
Fork & clone this repository

## Repo Directions
- Create a new React application using `Create-React-App`.
    - `cd` into the new directory and run the commands `npm install react-router`, `npm install react-router-dom`, and `npm install styled-components`.
    - Run `npm start` to start the React server on port 3000.
- Open a new terminal tab and `cd` into the `server` directory. Run `npm start` to spin up the server on port 3001. This server will provide data based on the endpoint you send a request to.

## Project Specs

You will create the application following the instructions below:
* Recreate the images using hook based React components styled using the `styled-components` styling library.
* The main store page displaying all wallets should be displayed when visiting the `/` route.
    * The images for the wallets are contained within the `/images` directory
* Upon clicking a wallet, the user should be routed to a `/id/{idnumber}` page that will display the detailed specifications of the wallet.
* On the detailed view route, when the user clicks on one of the smaller images on the right hand side, the main image should switch to reflect the change, and the clicked small image should be highlighted.

### Endpoints

* `GET` `http://localhost:3001/` returns an object with property `wallets` that is an array of wallet objects

### Reference images

![bottega-home](/assets/bottega-react-home.png)
![bottega-item](/assets/bottega-react-item.png)
![walletgif](/assets/walletgif.gif)

## Stretch Goals
- Implement the ability to add wallets to a shopping cart
- Implement a checkout process with validated text fields that prevent users from continuing to the next page until all text fields are filled correctly
- Implement a mock confirmation page that displays submitted user shipping info and order confirmation
