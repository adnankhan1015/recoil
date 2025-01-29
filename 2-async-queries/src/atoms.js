import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "netwrokAtomSelector",
    get: async () => {
      //   await new Promise((r) => setTimeout(r, 5000)); // sleeps for 5 sec
      const res = await axios.get("http://localhost:3002/notifications");
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
