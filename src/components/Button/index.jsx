import React from "react";

export default function Button(props) {
  return (
    <button className="bg-red-500 text-white my-4 py-3 px-6 rounded-full mx-auto">
      {props.text}
    </button>
  );
}
