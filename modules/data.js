const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhc3FjYnh5d3hpempmdHV4cmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE2ODQsImV4cCI6MjAyNjMyNzY4NH0.zFiJ3ZuEZ7qDGqLSHim92KJsArEuNj9N3JNlbtUjvGU";
const endPoint = 
"https://aasqcbxywxizjftuxrao.supabase.co/rest/v1/recipes"

export async function getRecipe() {
  let headersList = {
    Accept: "application/json",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: apikey,
    prefer: "return=representation",
  };

  let response = await fetch(
    endPoint,
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data)
  return data;
}

export async function postRecipe() {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/json",
    apikey: apikey,
    prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: "chokoladesovs"
  });

  let response = await fetch(
    endPoint,
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}

export async function delRecipe() {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/json",
    apikey: apikey,
    prefer: "return=representation",
  };

  let response = await fetch(
    endPoint + "?id=eq.4",
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}
export async function patchRecipe() {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/json",
    apikey: apikey,
    "Content-Type": "application/json",
    prefer: "return=representation",
  };

  let bodyContent = JSON.stringify({
    id: 3,
    created_at: "2024-04-02T09:03:49.108994+00:00",
    serves: 12,
  });

  let response = await fetch(
    endPoint + "?id=eq.3",
    {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}
