import type { Component } from 'solid-js';

interface Props {
  textContent: string;
}

export const Heading: Component<Props> = (props) => {
  return <h1 className="text-5xl text-center">{props.textContent}</h1>;
};
