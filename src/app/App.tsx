import { useState, useEffect } from 'react';

type Event = {
  id: string;
  name: string;
  icon: string;
  available: number;
  total: number;
  gradient: string;
  glowColor: string;
};

const events: Event[] = [
  {
    id: '1',
    name: 'AI Hackathon',
    icon: '🤖',
    available: 23,
    total: 50,
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    glowColor: 'rgba(59, 130, 246, 0.5)'
  },
  {
    id: '2',
    name: 'Gaming Tournament',
    icon: '🎮',
    available: 8,
    total: 32,
    gradient: 'from-green-500 via-lime-500 to-yellow-500',
    glowColor: 'rgba(132, 204, 22, 0.5)'
  },
  {
    id: '3',
    name: 'Web3 Workshop',
    icon: '⛓️',
    available: 15,
    total: 40,
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    glowColor: 'rgba(236, 72, 153, 0.5)'
  },
  {
    id: '4',
    name: 'Design Sprint',
    icon: '🎨',
    available: 31,
    total: 45,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    glowColor: 'rgba(6, 182, 212, 0.5)'
  },
  {
    id: '5',
    name: 'Robotics Challenge',
    icon: '🦾',
    available: 12,
    total: 25,
    gradient: 'from-orange-500 via-amber-500 to-yellow-600',
    glowColor: 'rgba(249, 115, 22, 0.5)'
  },
  {
    id: '6',
    name: 'Cloud Computing',
    icon: '☁️',
    available: 19,
    total: 35,
    gradient: 'from-violet-600 via-fuchsia-600 to-pink-600',
    glowColor: 'rgba(168, 85, 247, 0.5)'
  },
];

export default function App() {
  const [step, setStep] = useState<'default' | 'select' | 'confirm' | 'success'>('default');
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (step === 'success') {
      const colors = ['#F72585', '#4CC9F0', '#3A0CA3', '#7209B7', '#F72585', '#4CC9F0'];
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: 20 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5
      }));
      setConfetti(newConfetti);
    }
  }, [step]);

  const toggleEvent = (event: Event) => {
    setSelectedEvents(prev =>
      prev.find(e => e.id === event.id)
        ? prev.filter(e => e.id !== event.id)
        : [...prev, event]
    );
  };

  const handleContinue = () => {
    setStep('select');
  };

  const handleSelectContinue = () => {
    if (selectedEvents.length > 0) {
      setStep('confirm');
    }
  };

  const handleConfirm = () => {
    setStep('success');
  };

  const handleReset = () => {
    setStep('default');
    setSelectedEvents([]);
  };

  return (
    <div className="relative w-[390px] h-[844px] mx-auto overflow-hidden bg-[#0A0118]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#2D1B69] to-[#0A0118]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3A0CA3]/30 via-transparent to-[#F72585]/20 animate-[pulse_8s_ease-in-out_infinite]"></div>
        </div>
      </div>

      {/* Particle Field */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#4CC9F0] rounded-full animate-[twinkle_3s_ease-in-out_infinite]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 4px #4CC9F0'
          }}
        ></div>
      ))}

      {/* Default View */}
      <div className="relative z-10 h-full flex flex-col p-6">
        {/* Floating Light Streaks */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F72585]/10 to-transparent blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>

        {/* Header */}
        <div className="mt-12 mb-8 relative">
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F72585] via-[#3A0CA3] to-[#4CC9F0] rounded-2xl animate-[spin_20s_linear_infinite] opacity-50 blur-md"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-[#F72585] via-[#3A0CA3] to-[#4CC9F0] rounded-2xl flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
          </div>
          <h1 className="text-[32px] font-bold leading-tight mb-2 bg-gradient-to-r from-white via-[#4CC9F0] to-[#F72585] bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
            College Tech Fest
          </h1>
          <p className="text-[#4CC9F0] text-[16px] tracking-widest">2026</p>
        </div>

        {/* User Profile Card - Glassmorphism */}
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F72585]/30 via-[#3A0CA3]/30 to-[#4CC9F0]/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-5 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F72585] to-[#4CC9F0] rounded-2xl animate-[spin_3s_linear_infinite] blur-sm"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#3A0CA3] to-[#2D1B69] rounded-2xl flex items-center justify-center text-white text-xl border-2 border-white/30">
                  AS
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[18px] mb-1 text-white">Alex Student</p>
                <p className="text-[#4CC9F0] text-[14px]">Computer Science • Year 3</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-md animate-pulse"></div>
                <div className="relative w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* CTAs */}
        <div className="space-y-4 mb-8">
          <button
            onClick={handleContinue}
            className="relative w-full h-16 rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F72585] via-[#3A0CA3] to-[#4CC9F0] animate-[gradient-shift_3s_ease_infinite]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4CC9F0] via-[#F72585] to-[#3A0CA3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 shadow-[0_0_30px_rgba(247,37,133,0.6)] group-active:shadow-[0_0_50px_rgba(247,37,133,0.8)] transition-all duration-200"></div>
            <span className="relative z-10 flex items-center justify-center h-full font-semibold text-white text-[17px] group-active:scale-95 transition-transform">
              Continue to Events
            </span>
          </button>
          <button className="relative w-full h-14 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 active:scale-95 transition-all">
            Scan College QR
          </button>
        </div>
      </div>

      {/* Overlay 1: Event Selection */}
      <div
        className={`absolute inset-0 z-20 transition-all duration-500 ${
          step === 'select' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setStep('default')}
        ></div>
        <div
          className={`absolute bottom-0 left-0 right-0 backdrop-blur-2xl bg-gradient-to-b from-[#1A0B2E]/95 to-[#0A0118]/95 border-t-2 border-white/20 rounded-t-[40px] transition-transform duration-500 ease-out ${
            step === 'select' ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ height: '78%' }}
        >
          <div className="flex flex-col h-full p-6">
            {/* Handle */}
            <div className="relative w-12 h-1.5 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F72585] to-[#4CC9F0] rounded-full blur-sm"></div>
              <div className="relative w-12 h-1.5 bg-white/40 rounded-full"></div>
            </div>

            {/* Header */}
            <h2 className="text-[26px] font-bold mb-2 bg-gradient-to-r from-white to-[#4CC9F0] bg-clip-text text-transparent">Select Your Events</h2>
            <p className="text-white/60 text-[14px] mb-5">Tap cards to select</p>

            {/* Selected chips */}
            {selectedEvents.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedEvents.map(event => (
                  <div key={event.id} className={`relative backdrop-blur-xl bg-gradient-to-r ${event.gradient} px-4 py-2 rounded-full text-[13px] font-medium flex items-center gap-2 shadow-lg animate-[slideIn_0.3s_ease-out]`}
                    style={{ boxShadow: `0 0 20px ${event.glowColor}` }}
                  >
                    <span>{event.icon}</span>
                    <span className="text-white">{event.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Event List */}
            <div className="flex-1 overflow-y-auto -mx-6 px-6 space-y-3 pb-4">
              {events.map(event => {
                const isSelected = selectedEvents.find(e => e.id === event.id);
                const percentage = (event.available / event.total) * 100;

                return (
                  <button
                    key={event.id}
                    onClick={() => toggleEvent(event)}
                    className={`relative w-full backdrop-blur-xl bg-white/5 border-2 rounded-2xl p-4 transition-all duration-300 group ${
                      isSelected ? 'scale-[1.02] border-white/40' : 'border-white/10 hover:border-white/20'
                    }`}
                    style={{
                      boxShadow: isSelected ? `0 0 30px ${event.glowColor}, inset 0 0 20px ${event.glowColor}` : '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    {isSelected && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-10 rounded-2xl animate-pulse`}></div>
                    )}
                    <div className="relative flex items-start gap-3 mb-3">
                      <div className={`text-2xl transform transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>{event.icon}</div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold text-[16px] mb-1 text-white">{event.name}</p>
                        <p className="text-white/50 text-[13px]">{event.available} seats available</p>
                      </div>
                      <div className={`relative w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isSelected ? 'border-white bg-white scale-110' : 'border-white/30 group-hover:border-white/50'
                      }`}>
                        {isSelected && (
                          <svg className={`w-4 h-4 bg-gradient-to-br ${event.gradient} bg-clip-text text-transparent animate-[checkmark_0.3s_ease-out]`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* Animated Progress bar */}
                    <div className="relative h-2 bg-black/30 rounded-full overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} rounded-full transition-all duration-500 animate-[shimmer_2s_ease-in-out_infinite]`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide_2s_ease-in-out_infinite]"></div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleSelectContinue}
              disabled={selectedEvents.length === 0}
              className={`relative w-full h-16 rounded-2xl font-semibold mt-4 transition-all duration-300 overflow-hidden ${
                selectedEvents.length > 0
                  ? 'active:scale-95'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              {selectedEvents.length > 0 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F72585] via-[#3A0CA3] to-[#4CC9F0] animate-[gradient-shift_3s_ease_infinite]"></div>
                  <div className="absolute inset-0 shadow-[0_0_40px_rgba(247,37,133,0.8)] animate-pulse"></div>
                </>
              )}
              {selectedEvents.length === 0 && (
                <div className="absolute inset-0 bg-white/10"></div>
              )}
              <span className="relative z-10 flex items-center justify-center h-full text-white text-[17px]">
                Continue ({selectedEvents.length})
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay 2: Confirmation */}
      <div
        className={`absolute inset-0 z-30 transition-all duration-500 ${
          step === 'confirm' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-xl"
          onClick={() => setStep('select')}
        ></div>
        <div
          className={`absolute bottom-0 left-0 right-0 backdrop-blur-2xl bg-gradient-to-b from-[#1A0B2E]/95 to-[#0A0118]/95 border-t-2 border-white/20 rounded-t-[40px] transition-transform duration-500 ease-out ${
            step === 'confirm' ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ height: '72%' }}
        >
          <div className="flex flex-col h-full p-6">
            {/* Handle */}
            <div className="relative w-12 h-1.5 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F72585] to-[#4CC9F0] rounded-full blur-sm"></div>
              <div className="relative w-12 h-1.5 bg-white/40 rounded-full"></div>
            </div>

            {/* Header */}
            <h2 className="text-[26px] font-bold mb-6 bg-gradient-to-r from-white to-[#4CC9F0] bg-clip-text text-transparent">Confirm Registration</h2>

            {/* User Details */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-4 mb-4">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CC9F0] to-transparent"></div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-white/50 text-[12px] tracking-wider">STUDENT INFO</p>
                <button className="text-[#4CC9F0] text-[13px] font-medium hover:text-[#F72585] transition-colors">Edit</button>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F72585] to-[#4CC9F0] rounded-xl blur-sm"></div>
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#3A0CA3] to-[#2D1B69] flex items-center justify-center text-white border border-white/30">
                    AS
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-[16px] text-white">Alex Student</p>
                  <p className="text-[#4CC9F0] text-[13px]">Computer Science • Year 3</p>
                </div>
              </div>
            </div>

            {/* Glowing Divider */}
            <div className="relative h-px my-4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F72585]/50 to-transparent blur-sm"></div>
            </div>

            {/* Selected Events */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-white/50 text-[12px] tracking-wider mb-3">SELECTED EVENTS ({selectedEvents.length})</p>
              <div className="space-y-3">
                {selectedEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl p-3 flex items-center gap-3 animate-[fadeIn_0.4s_ease-out]"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      boxShadow: `0 0 20px ${event.glowColor}`
                    }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[15px] text-white">{event.name}</p>
                      <p className="text-white/50 text-[12px]">{event.available} seats left</p>
                    </div>
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${event.gradient} flex items-center justify-center text-[13px] font-bold text-white shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Button with Pulsing Glow */}
            <button
              onClick={handleConfirm}
              className="relative w-full h-16 rounded-2xl font-semibold mt-6 overflow-hidden active:scale-95 transition-transform duration-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F72585] via-[#3A0CA3] to-[#4CC9F0] animate-[gradient-shift_3s_ease_infinite]"></div>
              <div className="absolute inset-0 shadow-[0_0_60px_rgba(247,37,133,1)] animate-[pulse_2s_ease-in-out_infinite]"></div>
              <span className="relative z-10 flex items-center justify-center h-full text-white text-[17px]">
                Confirm & Register ✨
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Success State */}
      <div
        className={`absolute inset-0 z-40 transition-all duration-700 ${
          step === 'success' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dynamic Gradient Waves Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#2D1B69] to-[#0A0118]">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,37,133,0.3),transparent_50%)] animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(76,201,240,0.3),transparent_50%)] animate-[pulse_5s_ease-in-out_infinite]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(58,12,163,0.3),transparent_50%)] animate-[pulse_6s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Confetti */}
        {confetti.map(item => (
          <div
            key={item.id}
            className="absolute top-0 w-2 h-2 rounded-full animate-[confetti_3s_ease-out_forwards]"
            style={{
              left: `${item.x}%`,
              backgroundColor: item.color,
              animationDelay: `${item.delay}s`,
              boxShadow: `0 0 10px ${item.color}`
            }}
          ></div>
        ))}

        <div className="relative flex flex-col items-center justify-center h-full p-6">
          {/* Success Icon with Particle Burst */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F72585] to-[#4CC9F0] rounded-full blur-2xl animate-[pulse_2s_ease-in-out_infinite]" style={{ width: '120px', height: '120px', marginLeft: '-10px', marginTop: '-10px' }}></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-2xl animate-[bounce_1s_ease-in-out_3]">
              <svg className="w-12 h-12 text-white animate-[checkmark_0.5s_ease-out]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-[36px] font-bold mb-3 bg-gradient-to-r from-white via-[#4CC9F0] to-[#F72585] bg-clip-text text-transparent animate-[shimmer_2s_ease-in-out_infinite]">
            You're In! ✨
          </h1>
          <p className="text-white/60 text-[15px] mb-10">Events confirmed successfully</p>

          {/* QR Code with Glowing Frame */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F72585] via-[#3A0CA3] to-[#4CC9F0] rounded-3xl blur-xl animate-[spin_20s_linear_infinite]"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border-2 border-white/30 rounded-3xl p-6 shadow-2xl">
              <div className="relative w-52 h-52 bg-white rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                <div className="absolute inset-0 animate-[qr-scan_3s_ease-in-out_infinite]" style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(76,201,240,0.3) 50%, transparent 100%)',
                  height: '20%'
                }}></div>
                <div className="grid grid-cols-8 gap-1 p-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-sm transition-all duration-300 ${
                        Math.random() > 0.5 ? 'bg-[#1A0B2E]' : 'bg-white'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-[11px] tracking-widest mb-1">EVENT PASS ID</p>
                <p className="font-mono text-[17px] font-bold bg-gradient-to-r from-[#4CC9F0] to-[#F72585] bg-clip-text text-transparent">
                  CTF-2026-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <button className="relative w-full h-14 rounded-2xl font-semibold overflow-hidden active:scale-95 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F72585] via-[#3A0CA3] to-[#4CC9F0] animate-[gradient-shift_3s_ease_infinite]"></div>
              <div className="absolute inset-0 shadow-[0_0_30px_rgba(247,37,133,0.6)]"></div>
              <span className="relative z-10 flex items-center justify-center h-full text-white">
                Download Pass 📥
              </span>
            </button>
            <button className="w-full h-14 rounded-2xl font-semibold backdrop-blur-xl bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 active:scale-95 transition-all">
              Share 🔗
            </button>
            <button
              onClick={handleReset}
              className="w-full h-12 text-white/60 text-[14px] font-medium mt-4 hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}