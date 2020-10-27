export const checkLogin = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const response = await axios.post("", {
      //   headers: {
      //     Authorization: `Bearer ${payload}`,
      //   },
      // });
      resolve({
        name: "thanh",
      });
      // resolve(null);
    } catch (error) {
      reject(error);
    }
  });
};
