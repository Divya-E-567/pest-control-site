import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function FloatingWidgets() {

  // AI Chat States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am Eco-Bot. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);


  // AI Chat replies
  const handleChatOptionClick = (question, answer) => {
    // Add user message
    setChatMessages(prev => [...prev, { sender: 'user', text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, { sender: 'bot', text: answer }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating AI Chat Assistant */}
      <div className="floating-chat-container" style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 1050 }}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ffd166 0%, #ffc03d 100%)',
            color: '#0b3025',
            border: 'none',
            boxShadow: '0 8px 24px rgba(255, 192, 61, 0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '26px',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease'
          }}
          title="Eco Pest Chat Assistant"
        >
          {isChatOpen ? '×' : '💬'}
        </button>

        {/* Chat Window */}
        {isChatOpen && (
          <div className="chat-window" style={{
            position: 'absolute',
            bottom: '76px',
            left: 0,
            width: '350px',
            height: '460px',
            background: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 15px 40px rgba(11, 41, 64, 0.15)',
            border: '1px solid rgba(220, 239, 227, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{ background: '#08271e', padding: '18px 20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#25d366' }}></div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.98rem', fontFamily: 'Outfit', color: '#ffffff' }}>Eco-Safe Chat Agent</h4>
                <span style={{ fontSize: '0.72rem', color: '#a5c2b9' }}>Typically replies instantly</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fbfc' }}>
              {chatMessages.map((msg, index) => (
                <div key={index} style={{
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  fontSize: '0.88rem',
                  lineHeight: '1.4',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.sender === 'user' ? '#0f8d59' : '#ffffff',
                  color: msg.sender === 'user' ? '#fff' : '#16324f',
                  boxShadow: msg.sender === 'user' ? 'none' : '0 2px 8px rgba(0,0,0,0.03)',
                  border: msg.sender === 'user' ? 'none' : '1px solid #edf4f2',
                  borderTopLeftRadius: msg.sender === 'bot' ? '2px' : '16px',
                  borderTopRightRadius: msg.sender === 'user' ? '2px' : '16px'
                }}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '10px 16px', borderRadius: '16px', border: '1px solid #edf4f2', fontSize: '0.88rem', color: '#8898a8', borderTopLeftRadius: '2px' }}>
                  Typing...
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            {/* Quick replies panel */}
            <div style={{ padding: '12px 16px', background: '#fff', borderTop: '1px solid #edf4f2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: '#8898a8', fontWeight: 'bold', textTransform: 'uppercase' }}>Select a Question:</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <button
                  onClick={() => handleChatOptionClick(
                    'Termite Treatment Price?',
                    'Termite treatments start from ₹2,999 depending on area size and warranty. We offer free on-site inspections to give exact quotes!'
                  )}
                  style={{ background: '#f0fbf6', border: '1px solid #dcefe3', color: '#0f8d59', padding: '6px 10px', borderRadius: '8px', fontSize: '0.78rem', cursor: 'pointer', fontWeight: '500' }}
                >
                  💰 Termite Price?
                </button>
                <button
                  onClick={() => handleChatOptionClick(
                    'Is it safe for pets?',
                    'Yes, our chemicals are eco-friendly, odorless, and certified safe for homes with children and pets. We will give you clear prep guidelines before the service!'
                  )}
                  style={{ background: '#f0fbf6', border: '1px solid #dcefe3', color: '#0f8d59', padding: '6px 10px', borderRadius: '8px', fontSize: '0.78rem', cursor: 'pointer', fontWeight: '500' }}
                >
                  🐶 Safe for pets?
                </button>
                <button
                  onClick={() => handleChatOptionClick(
                    'How fast can you arrive?',
                    'We offer same-day support across Kochi and Ernakulam if you contact us before 2:00 PM!'
                  )}
                  style={{ background: '#f0fbf6', border: '1px solid #dcefe3', color: '#0f8d59', padding: '6px 10px', borderRadius: '8px', fontSize: '0.78rem', cursor: 'pointer', fontWeight: '500' }}
                >
                  ⚡ Arrival speed?
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsChatOpen(false)}
                  style={{ background: '#fff4e5', border: '1px solid #ffeeba', color: '#b8860b', padding: '6px 10px', borderRadius: '8px', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}
                >
                  📅 Book Free Inspection
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Call & WhatsApp Buttons */}
      <div className="floating-cta" aria-label="Quick contact panel">
        <a className="floating-btn primary" href="tel:+919020040009">Call Now</a>
        <a className="floating-btn secondary" href="https://wa.me/919020040009?text=Hi%20Eco%20Pest%20Control%20Kochi%2C%20I%20would%20like%20to%20book%20a%20pest%20control%20service%20or%20request%20an%20inspection.%20Please%20contact%20me%20back." target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </>
  );
}

export default FloatingWidgets;
