const BASE_URL = "http://localhost:8080/api/auth";  // Backend ka base URL

export const signup = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) {
    console.error("Signup failed:", error);
    return { error: "Signup request failed" };
  }
};
