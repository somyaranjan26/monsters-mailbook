import React from 'react';

export const Card = props => (
    <div className="border-2 text-center bg-gradient-to-b from-pink-900 to-gray-900  border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-110">
        <img className="mx-auto w-2/5" src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster" />
        <div className="pt-6">{props.monster.name}</div>
        <div className="pb-6">{props.monster.email}</div>
    </div>
)