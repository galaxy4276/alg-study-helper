import React, { CSSProperties } from 'react';
import langIcons from '@src/components/Problem/base';

export interface LangIconProps {
  lang: 'c' | 'c++' | 'java' | 'rust' | 'python' | 'kotlin' | 'sql' | '';
}

const styles: CSSProperties = {
  width: 16,
  height: 16,
};

const IconImage: React.FC<{ src: string, alt: string }> = (
  {
    src,
    alt
  }
) =>
  <img
    src={src}
    className="circle-lang__icon"
    alt={alt}
    style={styles}
  />;

export const LangIcon: React.FC<LangIconProps> = ({ lang }) => {
  switch (lang) {
    case 'c': {
      return <IconImage src={langIcons.c} alt="c" />;
    }
    case 'c++': {
      return <IconImage src={langIcons['c++']} alt="c++" />;
    }
    case 'java': {
      return <IconImage src={langIcons.java} alt="java" />;
    }
    case 'rust': {
      return <IconImage src={langIcons.rust} alt="rust" />;
    }
    case 'python': {
      return <IconImage src={langIcons.python} alt="python" />;
    }
    case 'kotlin': {
      return <IconImage src={langIcons.kotlin} alt="kotlin" />
    }
    default: {
      return null;
    }
  }
}