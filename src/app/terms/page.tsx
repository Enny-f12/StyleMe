import React from 'react';
import { Scale, FileText, UserCheck, AlertCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
          Terms of <span className="text-primary italic">Service</span>
        </h1>
        <p className="text-foreground/60 mb-16 leading-relaxed">
          By using StyleMe, you agree to the following terms. Please read them carefully.
        </p>

        <div className="grid gap-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-foreground/5 shadow-sm">
            <h2 className="flex items-center gap-3 text-xl font-bold mb-4 font-montserrat">
              <UserCheck className="text-primary" /> 1. User Accounts
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed">
              You are responsible for maintaining the confidentiality of your account. You must be at least 13 years old to use StyleMe.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-foreground/5 shadow-sm">
            <h2 className="flex items-center gap-3 text-xl font-bold mb-4 font-montserrat">
              <FileText className="text-primary" /> 2. Content Ownership
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed">
              You retain all rights to the photos you upload. By uploading, you grant StyleMe a license to process those images strictly for providing styling services to you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-foreground/5 shadow-sm">
            <h2 className="flex items-center gap-3 text-xl font-bold mb-4 font-montserrat">
              <AlertCircle className="text-primary" /> 3. Prohibited Conduct
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Users may not upload illegal, offensive, or infringing content. We reserve the right to terminate accounts that violate our community standards.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-secondary rounded-[2.5rem] text-secondary-foreground">
           <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
             <Scale size={20} className="text-primary" /> Governing Law
           </h3>
           <p className="opacity-70 text-sm">
             These terms are governed by the laws of the jurisdiction in which StyleMe operates.
           </p>
        </div>
      </div>
    </main>
  );
}