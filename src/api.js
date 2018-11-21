export const fetchSWHeroes = async () => {
  return fetch('https://swapi.co/api/people?page=1')
    .then(res => res.json())
    .catch(err => console.log(err, 'err'))
}
