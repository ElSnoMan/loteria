import React from 'react';

export class DrawnCards extends React.Component {
    render() {
        let items = null;
        if (this.props.cards.length === 0) {
            items = [];
        }
        else {
            if (this.props.cards[0] !== null || undefined)
            {
                items = this.props.cards.map((d) => <li key={d.name}>{d.name}</li>);
            }
        }

        return (
            <div>
                <ol>
                    {items}
                </ol>
            </div>
        );
    }
}
