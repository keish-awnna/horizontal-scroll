import React from "react";
import "./style.scss";

const Footer = () => {
  // creating an array of objects with contact info
  const addresses = [
    {
      town: "Long Beach",
      address: "150 West Ocean Blvd Long Beach, CA",
      phone: "562 555 1234",
      email: "noemail@gmail.com",
    },
    {
      town: "Long Beach",
      address: "1129 East Ocean Blvd Long Beach, CA",
      phone: "562 555 1234",
      email: "noemail@gmail.com",
    },
    {
      town: "Riverside",
      address: "21133 Newport Road Riverside, CA",
      phone: "562 555 1234",
      email: "noemail@gmail.com",
    },
  ];
  return (
    <div className="footer" data-scroll data-scroll-speed={-7}>
      <div className="contact-addresses">
        {/* map thru each address to get info and return an element with key=info for town */}
        {addresses.map((info) => (
          <div key={info.town}>
            <h1>{info.town}</h1>
            <div>
              {/* split the comma from the string and map to return a paragraph with the element*/}
              {info.address.split(",").map((element) => (
                <p key={element}>{element}</p>
              ))}
            </div>
            <p>{info.phone}</p>
            <p>{info.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
