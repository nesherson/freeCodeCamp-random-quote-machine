import React from 'react';

const ShareQuoteBtn = (props) => {
  return (
    <a
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
      title={props.title}
      className={props.style}
      style={{ backgroundColor: props.color }}
    >
      {props.icon}
    </a>
  );
};

export default ShareQuoteBtn;
