async function getPeopleList() {
  const apiUrl = "https://swapi.co/api";
  try {
    const response = await fetch(`${apiUrl}/people`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    // fetch will only reject a Promise if there is a network error.
    // so we have to throw error ourselves if the response is not in
    // the 2xx range
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  };
};

export default {
  getPeopleList
}