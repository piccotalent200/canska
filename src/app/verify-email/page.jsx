export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-[#6F2DAE1A] p-8 text-center">
        <div className="w-16 h-16 bg-[#5E17EB]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#5E17EB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl font-semibold text-[#0A0A0A] mb-4">
          Email Verified!
        </h1>
        
        <p className="text-[#0A0A0A99] mb-6">
          Your email has been successfully verified. You can now access your account.
        </p>
        
        <button className="w-full bg-[#5E17EB] hover:bg-[#5E17EB]/90 text-white py-3 px-6 rounded-full font-medium transition-all">
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
}