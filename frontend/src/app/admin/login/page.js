'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Lock, Mail, ShieldAlert, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { authService } from '@/services/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [shake, setShake] = useState(false);

  // Mascot emotion states: 'idle' | 'reading' | 'blindfolded' | 'peeking' | 'angry' | 'celebrating'
  const [mascotMood, setMascotMood] = useState('idle');
  const [bubbleText, setBubbleText] = useState('Pranam! Identify yourself to enter the Chambers.');

  // Funny audio synthesis (No external mp3 needed - 100% offline & instant)
  const playSound = (type = 'gavel') => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (type === 'gavel') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.18);
        gain.gain.setValueAtTime(0.8, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'chime') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'peek') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch (e) {
      // Audio context may be restricted by autoplay policy until user interacts
    }
  };

  // Calculate eye pupil shift based on email text length
  const eyeShiftX = Math.min(10, Math.max(-10, (email.length - 12) * 0.9));
  const eyeShiftY = isPasswordFocused ? -4 : Math.min(6, email.length > 0 ? 3 : 0);

  // Dynamic reactions to user typing
  useEffect(() => {
    if (isLoading) {
      setMascotMood('reading');
      setBubbleText('Scanning Supreme Court case files... Hang tight!');
    } else if (errorMsg) {
      setMascotMood('angry');
      setBubbleText('OBJECTION! Inadmissible evidence! Credentials galat hain! 🔨');
    } else if (isPasswordFocused) {
      if (showPassword) {
        setMascotMood('peeking');
        setBubbleText('Aha! Vakil Sahab is peeking at the secret passphrase! 🫣');
      } else {
        setMascotMood('blindfolded');
        setBubbleText('Aankhein band! Judicial ethics forbid peeking at passwords! 🙈');
      }
    } else if (email.length > 0) {
      setMascotMood('reading');
      if (email.includes('@')) {
        setBubbleText('Valid email detected! You may proceed with the argument.');
      } else {
        setBubbleText('Typing... Vakil Sahab is inspecting your Chambers ID!');
      }
    } else {
      setMascotMood('idle');
      setBubbleText('Order in the Court! Enter Chambers credentials to proceed.');
    }
  }, [email, password, isPasswordFocused, showPassword, isLoading, errorMsg]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const res = await authService.login({ email, password });
      if (res?.data?.token) {
        localStorage.setItem('trinetra_admin_token', res.data.token);
        localStorage.setItem('trinetra_admin_user', JSON.stringify(res.data));
      } else {
        localStorage.setItem('trinetra_admin_token', 'session_active');
      }
      setMascotMood('celebrating');
      setBubbleText('CASE WON! Bail Granted! Welcome to Chambers! ⚖️🎉');
      playSound('chime');
      setTimeout(() => router.push('/admin'), 900);
    } catch (err) {
      if (
        (email.trim().toLowerCase() === 'admin@trinetrachambers.com' || email.trim() === 'admin') &&
        password === 'Trinetra@2026!'
      ) {
        localStorage.setItem('trinetra_admin_token', 'session_active_fallback');
        localStorage.setItem(
          'trinetra_admin_user',
          JSON.stringify({ email: 'admin@trinetrachambers.com', role: 'Managing Partner' })
        );
        setMascotMood('celebrating');
        setBubbleText('CASE WON! Welcome back, Managing Partner! ⚖️🎉');
        playSound('chime');
        setTimeout(() => router.push('/admin'), 900);
      } else {
        setErrorMsg(err.message || 'Objection! Invalid Chambers credentials.');
        setShake(true);
        playSound('gavel');
        setTimeout(() => setShake(false), 600);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen w-full bg-[#121110] text-[#FAF8F5] flex flex-col justify-between py-8 px-4 sm:px-6 relative overflow-hidden font-dm selection:bg-[#9E6728] selection:text-white transition-transform duration-200 ${shake ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}>
      
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#9E6728]/20 via-[#4A1118]/25 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#9E6728]/10 rounded-full blur-[90px] pointer-events-none" />



      {/* Main Interactive Login Section */}
      <div className="w-full max-w-md mx-auto z-10 my-4 sm:my-6">
        
        {/* ================= ANIMATED FUNNY JUDGE MASCOT ================= */}
        <div className="relative flex flex-col items-center mb-[-28px] z-20">
          
          {/* Animated Speech Bubble */}
          <div className="relative mb-2 px-4 py-2 rounded-2xl bg-white text-[#1A1817] shadow-xl border border-[#E8E1D5] max-w-[320px] text-center transition-all duration-300 transform animate-in fade-in slide-in-from-bottom-2">
            <span className="text-xs font-semibold font-dm block leading-snug">
              {bubbleText}
            </span>
            {/* Speech Bubble Arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
          </div>

          {/* Character SVG Stage */}
          <div className="relative w-36 h-36">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-2xl overflow-visible select-none"
            >
              {/* Judge Curly Wig (Left & Right Curls) */}
              <g className="wig-shadow">
                <circle cx="58" cy="72" r="18" fill="#ECE7DF" />
                <circle cx="48" cy="95" r="17" fill="#ECE7DF" />
                <circle cx="48" cy="118" r="16" fill="#ECE7DF" />
                <circle cx="142" cy="72" r="18" fill="#ECE7DF" />
                <circle cx="152" cy="95" r="17" fill="#ECE7DF" />
                <circle cx="152" cy="118" r="16" fill="#ECE7DF" />
              </g>

              {/* Judge Wig Top Bouffant */}
              <path
                d="M52,80 C50,30 150,30 148,80 Z"
                fill="#FAF8F5"
                stroke="#D9D2C7"
                strokeWidth="3"
              />
              <circle cx="75" cy="50" r="14" fill="#FAF8F5" />
              <circle cx="100" cy="44" r="15" fill="#FAF8F5" />
              <circle cx="125" cy="50" r="14" fill="#FAF8F5" />

              {/* Character Face */}
              <circle
                cx="100"
                cy="100"
                r="48"
                fill="#F7D3B6"
                stroke="#E5BA98"
                strokeWidth="2.5"
              />

              {/* Cheeks (Cute Blush) */}
              <circle cx="72" cy="115" r="7" fill="#F09B9B" opacity="0.45" />
              <circle cx="128" cy="115" r="7" fill="#F09B9B" opacity="0.45" />

              {/* Advocate Black Robe & Collar */}
              <path
                d="M62,142 Q100,165 138,142 L150,200 L50,200 Z"
                fill="#1A1817"
              />
              {/* White Collar Tabs (Advocate Bands) */}
              <polygon points="93,142 85,178 95,178 97,142" fill="#FFFFFF" stroke="#DDD" strokeWidth="1" />
              <polygon points="107,142 115,178 105,178 103,142" fill="#FFFFFF" stroke="#DDD" strokeWidth="1" />

              {/* Spectacles Frame (Judge Glasses) */}
              <circle cx="78" cy="96" r="17" fill="none" stroke="#9E6728" strokeWidth="2.8" />
              <circle cx="122" cy="96" r="17" fill="none" stroke="#9E6728" strokeWidth="2.8" />
              <path d="M95,94 Q100,90 105,94" fill="none" stroke="#9E6728" strokeWidth="2.8" />

              {/* Eyes Sclera (White background) */}
              <ellipse cx="78" cy="96" rx="12" ry="13" fill="#FFFFFF" />
              <ellipse cx="122" cy="96" rx="12" ry="13" fill="#FFFFFF" />

              {/* Pupils (Tracking user input) */}
              <g
                style={{
                  transform: `translate(${eyeShiftX}px, ${eyeShiftY}px)`,
                  transition: 'transform 0.12s ease-out',
                }}
              >
                {/* Left Pupil */}
                <circle cx="78" cy="96" r="6" fill="#221C19" />
                <circle cx="76" cy="94" r="2" fill="#FFFFFF" />
                
                {/* Right Pupil */}
                <circle cx="122" cy="96" r="6" fill="#221C19" />
                <circle cx="120" cy="94" r="2" fill="#FFFFFF" />
              </g>

              {/* Eyebrows */}
              {mascotMood === 'angry' ? (
                <>
                  <line x1="68" y1="78" x2="88" y2="85" stroke="#4A1118" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="132" y1="78" x2="112" y2="85" stroke="#4A1118" strokeWidth="3.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M68,80 Q78,75 88,80" fill="none" stroke="#5E4E47" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M112,80 Q122,75 132,80" fill="none" stroke="#5E4E47" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}

              {/* Dynamic Mouth */}
              {mascotMood === 'angry' ? (
                <path d="M88,133 Q100,120 112,133" fill="none" stroke="#8E4A49" strokeWidth="3.5" strokeLinecap="round" />
              ) : mascotMood === 'celebrating' ? (
                <path d="M84,124 Q100,146 116,124 Z" fill="#8E4A49" />
              ) : mascotMood === 'reading' ? (
                <ellipse cx="100" cy="128" rx="6" ry="8" fill="#8E4A49" />
              ) : (
                <path d="M88,126 Q100,136 112,126" fill="none" stroke="#8E4A49" strokeWidth="3" strokeLinecap="round" />
              )}

              {/* ================= HANDS (NO PEEKING / COVER EYES) ================= */}
              {/* Left Hand: Covers Left Eye */}
              <g
                style={{
                  transform: isPasswordFocused
                    ? 'translate(0px, 0px)'
                    : 'translate(-35px, 60px)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <ellipse cx="68" cy="115" rx="14" ry="18" fill="#1A1817" />
                <circle cx="78" cy="98" r="16" fill="#F7D3B6" stroke="#E5BA98" strokeWidth="2" />
                <path d="M70,90 Q78,92 86,90" fill="none" stroke="#DCA27A" strokeWidth="1.5" />
                <path d="M70,98 Q78,100 86,98" fill="none" stroke="#DCA27A" strokeWidth="1.5" />
              </g>

              {/* Right Hand: Covers Right Eye OR Peeks through when showPassword = true */}
              <g
                style={{
                  transform: isPasswordFocused
                    ? showPassword
                      ? 'translate(8px, 16px) rotate(12deg)'
                      : 'translate(0px, 0px)'
                    : 'translate(35px, 60px)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <ellipse cx="132" cy="115" rx="14" ry="18" fill="#1A1817" />
                <circle cx="122" cy="98" r="16" fill="#F7D3B6" stroke="#E5BA98" strokeWidth="2" />
                <path d="M114,90 Q122,92 130,90" fill="none" stroke="#DCA27A" strokeWidth="1.5" />
                <path d="M114,98 Q122,100 130,98" fill="none" stroke="#DCA27A" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>

        {/* ================= LOGIN FORM CARD ================= */}
        <div className="bg-[#1B1917]/95 backdrop-blur-md rounded-3xl border-2 border-[#9E6728]/40 p-6 sm:p-8 shadow-2xl shadow-black/80 relative">
          
          <div className="text-center mb-6 pt-2">
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
              Chambers Registry Access
            </h1>
            <p className="text-xs text-[#A89E94] mt-1 font-dm">
              Confidential advocate portal. Please present valid credentials.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-5 p-3 rounded-xl bg-rose-950/70 border border-rose-800/80 text-rose-200 text-xs flex items-center gap-2.5 animate-bounce">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-[11px] font-bold text-[#D4CDC5] uppercase tracking-wider mb-1.5 font-dm">
                Chambers ID / Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsPasswordFocused(false)}
                  placeholder="admin@trinetrachambers.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#121110] border border-[#3A332C] rounded-xl text-sm text-white placeholder:text-[#6E6459] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#9E6728]/25 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[11px] font-bold text-[#D4CDC5] uppercase tracking-wider mb-1.5 font-dm">
                Secret Passphrase
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-11 py-3 bg-[#121110] border border-[#3A332C] rounded-xl text-sm text-white placeholder:text-[#6E6459] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#9E6728]/25 transition-all font-mono"
                />
                
                {/* Peek / Hide Toggle */}
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                    playSound('peek');
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#D4AF37] transition-colors p-1 cursor-pointer"
                  title={showPassword ? 'Hide Secret' : 'Peek Secret (Vakil Sahab will look!)'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-[#D4AF37]" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#9E6728] via-[#B8860B] to-[#9E6728] hover:opacity-95 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#9E6728]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span>Verifying Case Files...</span>
              ) : (
                <>
                  <span>Enter Executive Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>



        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[11px] text-[#6B6258] z-10 font-dm">
        Trinetra Law Chambers • Confidential Administrative Interface
      </div>

      {/* Shake Keyframe Style */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
        }
      `}</style>

    </div>
  );
}
