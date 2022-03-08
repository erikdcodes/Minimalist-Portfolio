const URL = `http://localhost:3000/api/hello`;
const getProjects = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export default getProjects;
