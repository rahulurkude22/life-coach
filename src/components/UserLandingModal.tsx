type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function UserLandingModal({ isOpen, setIsOpen }: Props) {
  const challenges = [
    "Heavy Workload",
    "Long Working Hours",
    "Job Insecurity",
    "Lack of Work-Life Balance",
    "Unfulfilled Expectations",
    "Poor Work Relationships",
    "Career Stagnation",
    "Personal Financial Stress",
    "Personal and Family Challenges",
    "Lack of Quality Family Time",
    "Pressures of being a Parent",
    "Social Isolation",
    "Health Issues",
    "Emotional Exhaustion",
    "Loss of Personal Identity",
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setIsOpen(false)} />
          <div className={`modal-container ${isOpen ? "modal-open" : ""}`}>
            <div className="modal-content">
              <button
                onClick={() => setIsOpen(false)}
                className="modal-close"
                aria-label="Close modal"
              >
                ×
              </button>

              <h2 className="modal-title">
                Are you experiencing any of these challenges?
              </h2>

              <div className="modal-list">
                {challenges.map((challenge, index) => (
                  <div key={index} className="list-item">
                    <span className="bullet">•</span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://topmate.io/unfoldwith_alisha"
                className="modal-cta"
                target="_blank"
              >
                Book 1-on-1 Session
              </a>
            </div>
          </div>
        </>
      )}

      <style>{`
        

        * {
          box-sizing: border-box;
        }

        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 999;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -120%);
          z-index: 1000;
          width: 90%;
          max-width: 900px;
          max-height: 85vh;
          opacity: 0;
          transition: all 0.4s ease-out;
        }

        .modal-container.modal-open {
          opacity: 1;
          transform: translate(-50%, -50%);
        }

        .modal-content {
          background: #f5f3f0;
          border-radius: 2px;
          padding: 3rem 2.5rem 2.5rem;
          position: relative;
          overflow-y: auto;
          max-height: 85vh;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 1.2rem;
          right: 1.5rem;
          background: none;
          border: none;
          font-size: 2rem;
          line-height: 1;
          cursor: pointer;
          transition: color 0.2s, transform 0.2s;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          padding-top:15px;
          font-family: 'inherit';
          font-size: 2rem;
          font-weight: 400;
          color: #2c2c2c;
          margin: 0 0 2rem 0;
          line-height: 1.4;
          text-align: center;
        }

        .modal-list {
          margin-bottom: 2.5rem;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem 2rem;
        }

        .list-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #4a4a4a;
          line-height: 1.6;
        }

        .bullet {
          margin-right: 0.75rem;
          color: #8b7355;
          font-size: 1.2rem;
          line-height: 1.4;
        }

        .modal-cta {
          display: block;
          width: 100%;
          padding: 0.9rem 2rem;
          background: #000;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .modal-cta:hover {
          color: #fff;
          background: #2c2c2c;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .modal-content {
            padding: 2.5rem 1.5rem 2rem;
            max-height: 90vh;
          }

          .modal-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .modal-list {
            grid-template-columns: 1fr;
            gap: 0.85rem;
            padding: 0 0.5rem;
            margin-bottom: 2rem;
          }

          .list-item {
            font-size: 0.9rem;
          }

          .modal-close {
            top: 1rem;
            right: 1rem;
            font-size: 1.75rem;
          }

          .modal-cta {
            padding: 0.85rem 1.5rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .modal-container {
            width: 95%;
            
          }

          .modal-content {
            padding: 2rem 1.25rem 1.75rem;
          }

          .modal-title {
            font-size: 1.35rem;
          }

          .list-item {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
}

export default UserLandingModal;
