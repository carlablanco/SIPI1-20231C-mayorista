import { Frequency } from "@/enums/enums";
import { ISubscription } from "@/types/responses";

// Subscription component
interface SubscriptionProps {
    subscription: ISubscription;
    updateFrequency: (subscriptionId: string, frequency: Frequency) => void;
    updateQuantity: (subscriptionId: string, quantity: number) => void;
  }
  
  const SubscriptionComponent: React.FC<SubscriptionProps> = ({
    subscription,
    updateFrequency,
    updateQuantity,
  }) => {
    const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateFrequency(subscription.subscriptionId, e.target.value as Frequency);
    };
  
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const quantity = parseInt(e.target.value);
      updateQuantity(subscription.subscriptionId, quantity);
    };
  
    return (
      <div>
        <img src={subscription.imgUrl} alt={subscription.productName} />
        <p>Pack: {subscription.productName}</p>
        <p>Frecuencia:</p>
        <select value={subscription.frequency} onChange={handleFrequencyChange}>
          <option value="Monthly">Mensual</option>
          <option value="Weekly">Semanal</option>
          <option value="Bimonthly">Bi-mensual</option>
          <option value="Quarterly">Tri-mestral</option>
          <option value="Annual">Anual</option>
        </select>
        <p>Cantidad: </p>
        <input
          type="number"
          value={subscription.quantity}
          onChange={handleQuantityChange}
        />
        <p>Precio: {subscription.price}</p>
      </div>
    );
  };

  export default SubscriptionComponent;