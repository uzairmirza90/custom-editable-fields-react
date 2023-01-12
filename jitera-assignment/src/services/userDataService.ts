// To get users data
export const getUsersListService = async () => {
  const fetchUsersList = await fetch(
    process.env.REACT_APP_USER_LIST_API_URL as string
  );
  const getUsersList = await fetchUsersList.json();
  return getUsersList;
};

// To get user avatars
export const getUsersAvatars = (id: number): string => {
  return `https://avatars.dicebear.com/v2/avataaars/${id}.svg?options[mood][]=happy`;
};
