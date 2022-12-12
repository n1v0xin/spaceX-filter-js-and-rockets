// Please implement your solution in this file

export const prepareData = (filterParams) => (flights) => {
  // filter and sort flights
  const filteredFlights = flights
    .filter(
      (flight) =>
        /* 
          here we check for specific year and customer in known nested path
          if customers array could be in other unknown path,
          we could use condition with "hasOwnProperty" to check the entire tree for specific value
          https://thewebdev.info/2021/06/19/how-to-find-an-object-property-by-key-deep-in-a-nested-javascript-array/
        */
        flight.launch_year == filterParams.year &&
        flight.rocket.second_stage.payloads.some((payload) => {
          const customerNameRegex = new RegExp(filterParams.customerName);
          // select 1st key in array as this array has only one element
          if (payload.customers[0].match(customerNameRegex)) {
            return true;
          }
        })
    )
    .sort((a, b) => {
      /*
        first we check if payloads count is not the same for 2 elements
        then if they're the same, we return the bigger flight_number
        the bigger this number is, the more recent flight was
        as we need to sort it descendingly from latest one 
      */
      const payloadsCount =
        b.rocket.second_stage.payloads.length -
        a.rocket.second_stage.payloads.length;

      if (payloadsCount !== 0) {
        return payloadsCount;
      }

      return b.flight_number - a.flight_number;
    });

  // create empty array to push specific values of elements there
  // as we want to return only specific object values
  const res = [];
  for (let i in filteredFlights) {
    res.push({
      flight_number: filteredFlights[i].flight_number,
      mission_name: filteredFlights[i].mission_name,
      payloads_count: filteredFlights[i].rocket.second_stage.payloads.length,
    });
  }

  return res;
};

export const renderData = (data) => {
  document.getElementById('out').innerHTML = JSON.stringify(data, null, 2);
  return;
};
