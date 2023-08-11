const API_KEY = import.meta.env.VITE_API_KEY
console.log(import.meta.env.VITE_API_KEY, "here")

export const getFood = async (query: string) => {
  const url = `https://api.api-ninjas.com/v1/nutrition?query=${query}`;
  const headers = {
    method: "GET",
    headers: { "X-Api-Key": `${API_KEY}` },
    contentType: "application/json",
  };
  const res = await fetch(url, headers);
  if (!res.ok) {
    console.log(res)
    throw new Error("Unable to fetch macros");
  }
  return res.json();
};
