import React from 'react';
const Persons = [
    {firstname : "Nivetha", lastname: "Vajjiravel"},
    {firstname : "Karthick", lastname: "Rajan"},
    {firstname : "Arul", lastname: "Murugan"}
  ];
  
  Persons.map(getFullName);
  

  export function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

export default Persons;
