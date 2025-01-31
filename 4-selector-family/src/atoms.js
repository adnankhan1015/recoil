import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        await new Promise((r) => setTimeout(r, 5000));
        // throw new Error("Backend call failed");
        const res = await axios.get(`http://localhost:3002/todo?id=${id}`);
        return res.data.todo;
      },
  }),
});

// export const todosAtomFamily1 = atomFamily({
//   key: "todosAtomFamily",
//   default: selectorFamily({
//     key: "todoSelectorFamily",
//     get: function (id) {
//       return async function ({ get }) {
//         const res = await axios.get(`http://localhost:3002/todo?id=${id}`);
//         return res.data.todo;
//       };
//     },
//   }),
// });
