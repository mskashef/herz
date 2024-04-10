import { useRef, useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline, IoMdCheckmark } from "react-icons/io";

const scrollToElement = (el, smooth = true, offset = -8) => {
  if (!el) return;
  const elementRect = el.getBoundingClientRect();
  const elementTop = elementRect.top + window.scrollY;
  const options = {
    top: elementTop + offset,
  };
  if (smooth) options.behavior = "smooth";
  window.scrollTo(options);
};

export const Quran = (props) => {
  const { text, title, onEnd, onNotEnd } = props;
  const [c, setC] = useState(0);
  const [open, setOpen] = useState(true);
  const elRef = useRef();
  return (
    <div className="quran-text" ref={elRef}>
      <div className="title quran-text" onClick={() => {
        setOpen(true);
        onNotEnd()
      }}>
        {title}
        <div className={`animated-icon ${!open && "visible"}`}>
          <div className="animated-icon-self">
            <IoMdCheckmark color="green" size={32} />
          </div>
        </div>
      </div>
      {open && (
        <>
          {text.split("\n").map((line) => {
            return <div className="ayah">{line}</div>;
          })}
          <div className="toolbar">
            {c === 7 && (
              <IoIosCheckmarkCircleOutline
                size={50}
                color="green"
                onClick={() => {
                  setOpen(false)
                  scrollToElement(elRef.current, false);
                  onEnd()
                }}
              />
            )}
            <FaCirclePlus
              color="green"
              size={40}
              onClick={() => {
                setC((c) => {
                  const newC = c + 1;
                  if (newC > 7) return c;
                  if (newC !== 7)
                    setTimeout(() => scrollToElement(elRef.current), 500);
                  return newC;
                });
              }}
            />
            <div style={{ width: 32, textAlign: "center" }}>{c}</div>
            <FaCircleMinus
              color="#ff000099"
              size={40}
              onClick={() => setC((c) => (c <= 1 ? 0 : c - 1))}
            />
          </div>
        </>
      )}

      <style jsx>{`
        .animated-icon {
          position: absolute;
          right: 24px;
        }
        .animated-icon .animated-icon-self {
          opacity: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.7s ease-in-out;
          transform: scale(2);
        }

        .animated-icon.visible .animated-icon-self {
          opacity: 1;
          transform: scale(1);
        }
        .quran-text {
          background: #ece48c;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 16px;
        }
        .ayah {
          padding: 16px;
          text-align: justify;
        }
        .ayah:nth-child(even) {
          background: #00000011;
        }
        .toolbar {
          display: flex;
          align-items: center;
          height: 72px;
          gap: 16px;
          padding: 0 16px;
          background: #00000022;
        }
        .title {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
      `}</style>
    </div>
  );
};
