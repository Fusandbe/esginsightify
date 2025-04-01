
import FaqItem from "./FaqItem";

const FaqSection = () => {
  return (
    <div className="mt-24">
      <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <FaqItem
          question="How does the 14-day free trial work?"
          answer="You can sign up for any plan without providing credit card information. You'll have full access to all features in your chosen plan for 14 days. At the end of the trial, you can choose to subscribe or your account will be downgraded to a limited version."
        />
        <FaqItem
          question="Can I change plans later?"
          answer="Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the end of your current billing cycle."
        />
        <FaqItem
          question="What payment methods do you accept?"
          answer="We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also offer invoice-based payments."
        />
        <FaqItem
          question="Is there a discount for annual billing?"
          answer="Yes, we offer a 15% discount for annual billing on all plans. This is automatically applied when you select the annual billing option."
        />
        <FaqItem
          question="How do you handle my data?"
          answer="We take data security very seriously. All your data is encrypted both in transit and at rest. We never share your data with third parties without your explicit consent. For more information, please see our Privacy Policy."
        />
        <FaqItem
          question="What kind of support is included?"
          answer="All plans include email support with varying response times. The Mid-Size VC plan includes priority support with 8-hour response times. The Enterprise plan includes a dedicated account manager for personalized support."
        />
      </div>
    </div>
  );
};

export default FaqSection;
