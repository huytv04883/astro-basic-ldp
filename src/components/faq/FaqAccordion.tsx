import { useState } from 'react';

const faqs = [
  {
    q: 'How does membership management software work?',
    a: 'Our membership management software automates renewals, tracks payments, and manages member data in one central system. You can set up automated email reminders, handle online payments, and generate reports easily.',
  },
  {
    q: 'Can I import my existing membership data?',
    a: 'Yes! We support CSV and Excel imports so you can migrate your existing member database quickly. Our onboarding team will help you through the process.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'Absolutely. We offer a 30-day free trial with full access to all features — no credit card required. Sign up today and see how Nexcent can transform your organisation.',
  },
  {
    q: 'What payment methods do you support?',
    a: 'We support all major credit cards, PayPal, direct debit, and bank transfers. Custom payment gateways can also be configured for enterprise clients.',
  },
  {
    q: 'Do you offer customer support?',
    a: 'We provide 24/7 email support, live chat during business hours, and a comprehensive knowledge base. Enterprise plans include a dedicated account manager.',
  },
];

export default function FaqAccordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((item, i) => (
        <div key={i} className="py-4">
          <button
            className="w-full flex items-center justify-between text-left gap-4"
            onClick={() => setActive(active === i ? null : i)}
          >
            <span className="text-base font-semibold text-dark">{item.q}</span>
            <svg
              className={`w-5 h-5 text-primary shrink-0 transition-transform ${active === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {active === i && (
            <p className="mt-3 text-sm text-gray leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
