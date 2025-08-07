import axios from "axios";
import { API_URL } from "../Server/Server";

export const fetchAllMenus = async () => {
  try {
    const res = await axios.get(`${API_URL}menu/getAllMenu`);
    console.log("Fetched menus:", res.data);
    return res.data.data;
  } catch (error) {
    console.error("Failed to fetch menus:", error);
    return [];
  }
};
