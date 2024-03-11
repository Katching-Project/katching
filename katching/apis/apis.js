// TODO: Change the endpoints to actual ones once backend API endpoints are supported

const SAVE_USER_ENDPOINT = 'Replace this with actual endpoint';

export const saveUser = async (inputValue) => {
  try {
    const response = await fetch(SAVE_USER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: inputValue }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};