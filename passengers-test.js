const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
    // get passengers names
  const passengerNames = passengers.map((passenger) => passenger.passengerName);
  console.log(passengerNames);

  // get only vegetarian/vegan passenger names
  const vegPassengers = passengers.filter((passenger) => passenger.isVegetarianOrVegan).map((passenger) => passenger.passengerName);
  console.log(vegPassengers);

  // sort passengers by number of connecting flights
  const numberOfFlights = passengers.sort((passenger1, passenger2) => passenger2.connectedFlights - passenger1.connectedFlights);
  console.log(numberOfFlights);