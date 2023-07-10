// Create a new component called RemainingTime that displays the remaining time in the format of minutes:seconds.

// Path: components\RemainingTime.tsx

import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface RemainingTimeProps {
    remainingTime: any
}

export const RemainingTime: React.FC<RemainingTimeProps> = ({remainingTime}) => {
    return (
        <div>
        { remainingTime?.days > 1 ? <h3 className="mt-1 text-xl font-bold text-gray-900"><AccessTimeIcon/> La proxima compra es en {remainingTime?.days} dias</h3> : null}
        { remainingTime?.days === 1 ? <h3 className="mt-1 text-xl font-bold text-gray-900"><AccessTimeIcon/> La proxima compra es en {remainingTime?.days} dia</h3> : null}
        { remainingTime?.days === 0 && remainingTime?.hours > 0 ? <h3 className="mt-1 text-xl font-bold text-gray-900"><AccessTimeIcon/> La proxima compra es en  {remainingTime?.hours} horas y {remainingTime?.minutes} minutos</h3> : null}
        { remainingTime?.days === 0 && remainingTime?.hours === 0  ? <h3 className="mt-1 text-xl font-bold text-gray-900"><AccessTimeIcon/> La proxima compra es en  {remainingTime?.minutes} minutos y {remainingTime?.seconds} segundos</h3> : null}
        { remainingTime?.days === 0 && remainingTime?.hours === 0 && remainingTime?.minutes === 0 && remainingTime?.seconds === 0 ? <h3 className="mt-1 text-xl font-bold text-gray-900"> Finalizó la promoción</h3> : null}
        </div>
    )
}

export default RemainingTime;