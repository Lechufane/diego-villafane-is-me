import { data } from "./constants/data.js";

const DataServices = {
  getData: () => {
    return { ok: true, data: data.EN };
  },
};

export default DataServices;
