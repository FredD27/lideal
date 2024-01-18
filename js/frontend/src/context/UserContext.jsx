import { createContext, useContext, useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const [connect, setConnect] = useState(false);
  const givenData = useLoaderData();
  const [user, setUser] = useState(givenData?.preloadUser?.data);

  const register = async (formData) => {
    try {
      setUser(await axios.post("http://localhost:3310/api/users/", formData));
      alert(`Bienvenu ${formData.firstName}, ton inscription est validée`);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const contextValue = useMemo(
    () => ({
      connect,
      setConnect,
      register,
      user,
    }),
    [connect]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };

export const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
