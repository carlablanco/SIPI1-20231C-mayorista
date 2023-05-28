import { Cadence } from "@/enums/enums";
import { ISubscription } from "@/types/responses";

// Subscription component
interface SubscriptionProps {
    subscription: ISubscription;
    updateCadence: (subscriptionId: string, cadebce: Cadence) => void;
    updateQuantity: (subscriptionId: string, quantity: number) => void;
  }
  
  const SubscriptionComponent: React.FC<SubscriptionProps> = ({
    subscription,
    updateCadence,
    updateQuantity,
  }) => {
    const handleCadenceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateCadence(subscription.subscriptionId, e.target.value as Cadence);
    };
  
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const quantity = parseInt(e.target.value);
      updateQuantity(subscription.subscriptionId, quantity);
    };
  
    return (
      <div className="">
        <img src={subscription.imgUrl} alt={subscription.productName} />
        <p>Pack: {subscription.productName}</p>
        <p>Frecuencia:</p>
        <select value={subscription.cadence} onChange={handleCadenceChange}>
          <option value="WEEKLY">Semanal</option>
          <option value="BIWEEKLY">2 veces x semana</option>
          <option value="BIMONTHLY">Quincenal</option>
          <option value="MONTHLY">Mensual</option>
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