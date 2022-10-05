import React from 'react';
import langIcons from '@src/components/Problem/base';

const langs = [
  'c',
  'c++',
  'java',
  'rust',
  'python',
] as const;


export interface LangIconProps {
  lang?: 'c' | 'c++' | 'java' | 'rust' | 'python';
}


export const LangIcon: React.FC<LangIconProps> = ({ lang }) => {
  switch (lang) {
    case 'c': {
      return <img src={langIcons.c} className="circle-lang__icon" alt="c" />;
    }
    case 'c++': {
      return <img src={langIcons['c++']} className="circle-lang__icon" alt="c++" />;
    }
    case 'java': {
      return <img src={langIcons.java} className="circle-lang__icon" alt="java" />;
    }
    case 'rust': {
      return <img src={langIcons.rust} className="circle-lang__icon" alt="rust" />;
    }
    case 'python': {
      return <img src={langIcons.python} className="circle-lang__icon" alt="python" />;
    }
    default: {
      return null;
    }
  }
}