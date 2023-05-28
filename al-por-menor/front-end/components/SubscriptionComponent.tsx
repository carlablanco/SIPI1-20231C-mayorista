import { Cadence } from "@/enums/enums";
import { ISubscription } from "@/types/responses";

// Subscription component
interface SubscriptionProps {
  subscription: ISubscription;
  updateCadence: (subscriptionId: string, cadebce: Cadence) => void;
  updateNumberOfPeople: (subscriptionId: string, quantity: number) => void;
  deleteSubscription: (subscriptionId: string) => void;
}

const SubscriptionComponent: React.FC<SubscriptionProps> = ({
  subscription,
  updateCadence,
  updateNumberOfPeople,
  deleteSubscription,
}) => {
  const handleCadenceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateCadence(subscription.subscriptionId, e.target.value as Cadence);
  };

  const handleNumberOfPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    updateNumberOfPeople(subscription.subscriptionId, quantity);
  };

  const confirmDelete = () => {
    if (window.confirm("¿Está seguro que desea eliminar la subscripción?")) {
      deleteSubscription(subscription.subscriptionId);
    }
  };

  return (
    <div className="">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img className="h-full w-full object-cover object-center group-hover:opacity-75" src={subscription.imgUrl} alt={subscription.productName} />
      </div>
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
        value={subscription.numberOfPeople}
        onChange={handleNumberOfPeopleChange}
      />
      <p>Precio: {subscription.price}</p>
      <button className="btn text-white bg-red-600 hover:bg-red-700 w-full sm:w-auto sm:ml-4" onClick={confirmDelete}>Eliminar Subscripcion</button>
    </div>
  );
};

export default SubscriptionComponent;