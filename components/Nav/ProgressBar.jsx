"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
  return (
    <ProgressBar height="4px"
    color="#E36C0A"
    options={{ showSpinner: false, easing: 'ease', }}
    shallowRouting />
  );
};

export default ProgressBar;
