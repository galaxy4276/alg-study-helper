import React, { CSSProperties } from 'react';

const style: CSSProperties = {
  background: 'linear-gradient(159.28deg, #B1B2FF 13.72%, #8C8EFF 87.96%)',
};

const Icon: React.FC<{ src: string, onClick: () => void }> = ({ src, onClick }) =>
  <img
    onClick={onClick}
    src={src}
    className="circle-lang__icon shadow-md cursor-pointer"
    alt="icon"
  />


export const Footer: React.FC = () => (
  <footer
    className="w-full flex justify-center py-10"
  >
    <section
      className="rounded-sm w-[236px] h-[120px] px-4 py-5"
      style={style}
    >
      <div className="w-full h-full p-2 bg-white rounded-md drop-shadow-md relative text-slate-700">
        <span
          className="
            font-bold text-xl absolute left-1/2 -translate-x-1/2 top-[-14px]
            rotate-[-12deg] drop-shadow-md
          "
        >
          Developers
        </span>

        <div className="flex flex-col justify-center pt-3">
          <div className="flex items-center gap-x-2">
            <img
              src="https://avatars.githubusercontent.com/u/50310464?v=4"
              className="circle-lang__icon shadow-md"
              alt="developer_image"
            />
            <span>galaxy4276</span>
            <Icon
              onClick={() => window.open('https://www.instagram.com/nabe80565/')}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            />
            <Icon
              onClick={() => window.open('https://github.com/galaxy4276')}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-2">
            <img
              src="https://avatars.githubusercontent.com/u/64721119?v=4"
              className="circle-lang__icon shadow-md"
              alt="developer_image"
            />
            <span>minesp3164</span>
            <Icon
              onClick={() => window.open('https://www.instagram.com/to_daybreak/')}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            />
            <Icon
              onClick={() => window.open('https://github.com/minesp3164')}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </div>
        </div>

      </div>
    </section>
  </footer>
);
