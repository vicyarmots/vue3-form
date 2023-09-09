import { computed } from "vue";
import { IUser } from "../models/user-models";

export default function useSubmitButtonState(
  user: IUser & string,
  errors: string[]
) {
  const isSignupButtonDisabled = computed(() => {
    let disabled = true;
    for (let prop in user) {
      if (!user[prop] || errors[prop]) {
        disabled = true;
        break;
      }
      disabled = false;
    }
    return disabled;
  });

  return { isSignupButtonDisabled };
}
