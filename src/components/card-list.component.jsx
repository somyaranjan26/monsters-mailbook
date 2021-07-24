import React from 'react'

import { Card } from './card.component';

export const CardList = props => {
return (
    <div className="flex flex-col md:flex-row flex-wrap ">
        {props.monsters.map(i => (
            <div className="p-4 md:w-1/3">
              <Card key={i.id} monster={i} />
            </div>
          ))}
    </div>
    )
}