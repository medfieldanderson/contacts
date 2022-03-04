import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

const createCard = (contact) => {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      tel={contact.tel}
      email={contact.email}
    />
  );
};

function App() {
  return (
    <div className="app">
      <h1 className="heading">My Contacts</h1>
      <Avatar
        name="Jeff Anderson"
        imgURL="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-1/68668525_10214567349437082_6313390080153092096_n.jpg?stp=dst-jpg_p480x480&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fdugVeDk4aEAX-UAez7&_nc_ht=scontent-bos3-1.xx&oh=00_AT-3Yu3Qzd1BTQYALs4WWwdcgBqTL-Q6n9LkEjfG7ZBoXQ&oe=6245C51B"
      />
      {contacts.map((contact) => createCard(contact))}
    </div>
  );
}

export default App;
