import React from 'react';
import langIcons from '@src/components/Problem/base';

export interface LangIconProps {
  lang?: 'c' | 'c++' | 'java' | 'rust' | 'python' | 'kotlin';
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
    case 'kotlin': {
      return <img src={langIcons.kotlin} alt="kotlin" style={{ width: 16, height: 16 }} />
    }
    default: {
      return null;
    }
  }
}