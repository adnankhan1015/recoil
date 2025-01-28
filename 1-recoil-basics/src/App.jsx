import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atoms";
import { useMemo } from "react";
// RecoilRoot

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useMemo
  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount +
  //     jobAtomCount +
  //     notificationAtomCount +
  //     messagingAtomCount
  //   );
  // }, [
  //   networkNotificationCount,
  //   jobAtomCount,
  //   notificationAtomCount,
  //   messagingAtomCount,
  // ]);

  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
