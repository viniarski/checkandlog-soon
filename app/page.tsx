import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary-50 px-4">
      <SectionWrapper className="text-center">
        <div className="flex justify-center mb-10">
          <Image
            src="/check_logo.png"
            alt="Check and Log"
            width={200}
            height={60}
            className="w-auto h-auto object-contain max-w-45"
            priority
          />
        </div>

        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-primary-100 rounded-full">
          Launching Soon
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Digital Food Safety <br />
          <span className="text-primary">Made Simple.</span>
        </h1>

        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          We're putting the finishing touches on the complete digital logbook 
          for UK food businesses. Stay compliant, save time, and ditch the paperwork.
        </p>
        
        {/* Contact info */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm text-gray-500">
            Questions? Contact us at{" "}
            <a href="mailto:info@checkandlog.com" className="text-primary hover:underline font-medium">
              info@checkandlog.com
            </a>
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}