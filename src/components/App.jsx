import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
// import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        name="Jeff Anderson"
        imgURL="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-1/68668525_10214567349437082_6313390080153092096_n.jpg?stp=dst-jpg_p480x480&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fdugVeDk4aEAX-UAez7&_nc_ht=scontent-bos3-1.xx&oh=00_AT-3Yu3Qzd1BTQYALs4WWwdcgBqTL-Q6n9LkEjfG7ZBoXQ&oe=6245C51B"
      />
      <Card
        name="Jackie Anderson"
        imgURL="https://media-exp1.licdn.com/dms/image/C4E03AQGzbKOCG1elsA/profile-displayphoto-shrink_400_400/0/1642205525690?e=1651708800&v=beta&t=P8LTPsowypyyEbr-isrCDPisKRydmsh_oDSo0q0pgI8"
        tel="617-584-6029"
        email="jsanderson@reitmr.com"
      />
      <Card
        name="Jeff Anderson"
        imgURL="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-1/68668525_10214567349437082_6313390080153092096_n.jpg?stp=dst-jpg_p480x480&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fdugVeDk4aEAX-UAez7&_nc_ht=scontent-bos3-1.xx&oh=00_AT-3Yu3Qzd1BTQYALs4WWwdcgBqTL-Q6n9LkEjfG7ZBoXQ&oe=6245C51B"
        tel="617-365-1804"
        email="medfield.anderson@gmail.com"
      />
      <Card
        name="Emma Anderson"
        imgURL="https://media-exp1.licdn.com/dms/image/C4D03AQGPH-w8vpbNLg/profile-displayphoto-shrink_400_400/0/1636460722847?e=1651708800&v=beta&t=Wym1YaCEAY3URpLj8Sw-UmHB8BrpDzV4xU9H1re8yX0"
        tel="617-922-8804"
        email="ena@st-andrews.ac.uk"
      />
      <Card
        name="Kate Anderson"
        imgURL="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/122091803_1067083610399200_7322865676283406235_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=f04HHkmaWV8AX8d0-2k&_nc_ht=scontent-bos3-1.xx&oh=00_AT_TYR53ERzLeKWT0EypVHDzfLHVnLloZZKRiejdgivoKA&oe=6245E14B"
        tel="617-922-1847"
        email="medfield.kate@gmail.com"
      />
    </div>
  );
}

export default App;
