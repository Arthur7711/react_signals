import { useLayoutEffect } from "react";
import { HeadWarning } from "./components/headWarning/HeadWarning";
import MacTabs from "./components/tabs/MacTabs";

const MacWarning = () => {
  useLayoutEffect(() => {
    document.getElementById("root")!.classList.add("hide-scroll");
    document.querySelector("html")?.classList.add("hide-scroll");
  }, []);
  return (
    <>
      <HeadWarning />
      <MacTabs />
    </>
  );
};

export default MacWarning;
