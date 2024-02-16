import { signal } from "@preact/signals-react";
import { ISelf } from "../core/models/auth";

const useAuthInfo = () => {
  const selfState = signal<ISelf>({
    avatar_url: "",
    id: 0,
    samaccountname: "",
    displayname: "",
  });
  const setSelfState = (state: ISelf) => {
    selfState.value = state;
  };
  return { selfState, setSelfState };
};
export default useAuthInfo();
