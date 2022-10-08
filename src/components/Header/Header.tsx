import React from 'react';
import html2canvas from 'html2canvas';


export const Header: React.FC = () => {

  const onClickCaptureButton = () => {
    html2canvas(
      document.getElementById('profile-capture') as HTMLElement,
      {},
    ).then(canvas => {
      canvas.toBlob((blob) => {
        const b = blob as Blob;
        navigator.clipboard.write([
          new ClipboardItem(
            Object.defineProperty({}, b.type, {
              value: blob,
              enumerable: true,
            })
          )
        ]).then(() => window.alert('프로필 내역이 캡처되었습니다. (클립보드)'));
      });
    });
  };

  return (
    <header>
      <nav className="w-full flex justify-end">
        <button
          className="button capture text-sm"
          onClick={onClickCaptureButton}
        >
          <i className="fa-solid fa-camera pr-1.5" />
          Capture
        </button>
      </nav>

      <section>
        <h1 className="
        text-4xl md:text-6xl  font-noto w-[200px] md:w-[300px] leading-relaxed
        md:leading-snug font-bold pb-5
      ">
          Alg Study Helper
        </h1>
      </section>
    </header>
  );
};

