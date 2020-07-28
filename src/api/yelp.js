import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer z_IMDJVFDTzUbE63t2LGOTw2pxzRemSyytCJewrYogRpG5dgHSJbXRFFF2U6kMTj4wOk067trVoHZHL00wY6p3cXzD8ZQbXjcRLQr7cDButAEMX4rcX21laSttgeX3Yx",
  },
});
