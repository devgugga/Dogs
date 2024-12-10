import { useEffect } from "react";

import PropTypes from "prop-types";

export function Head(props) {
  useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
