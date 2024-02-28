import Panel from "./components/Panel";
import "./stylesheets/App.scss";

export default function App() {
  return (
    <div id="app">
      <h1>FAQ</h1>
      <div className="container">
        <Panel
          heading={"What payment methods do you accept?"}
          text={
            "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. Additionally, we also accept PayPal for online transactions."
          }
        />
        <Panel
          heading={"How can I track my order?"}
          text={
            "Once your order has been processed and shipped, you will receive a confirmation email containing a tracking number. You can use this tracking number to monitor the status and location of your package."
          }
        />
        <Panel
          heading={"Do you offer international shipping?"}
          text={
            "Yes, we offer international shipping to most countries around the world. Shipping rates and delivery times may vary depending on the destination. Please refer to our shipping policy for more information."
          }
        />
        <Panel
          heading={"What is your return policy?"}
          text={
            "We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, you may return it within 30 days for a full refund or exchange. Please see our return policy for detailed instructions on how to initiate a return."
          }
        />
        <Panel
          heading={"How can I contact customer support?"}
          text={
            "If you have any questions, concerns, or issues, our customer support team is here to help. You can reach us via email at support@example.com or by phone at 1-800-123-4567. Our support hours are Monday through Friday, 9:00 AM to 5:00 PM EST."
          }
        />
      </div>
    </div>
  );
}
