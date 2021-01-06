import { useEffect } from "react";
import { TITLE } from "./constants";
/**
 * Update the document title with provided string
 * @param titleOrFn can be a String or a function.
 * @param deps? if provided, the title will be updated when one of these values changes
 */
function useTitle(titleOrFn) {
  useEffect(() => {
    document.title = `${
      typeof titleOrFn === "function" ? titleOrFn() : titleOrFn
    } - ${TITLE}`;
  });
}

export default useTitle;
