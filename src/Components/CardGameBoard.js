import React from 'react';
import { drawCard, shuffle, all_cards } from '../Game/deck';
import { CardLayout } from './Layout.components';
import ButtonsTab from './ButtonsTab';
import { DrawnCards } from './DrawnCards';

export default class CardGameBoard extends React.Component {
    state = {
        drawIndex: 0,
        deck: shuffle([...all_cards]),
        previousCard: null,
        nextCard: null,
        drawnCards: []
    }

    componentDidMount = () => {
        const index = this.state.drawIndex++;
        this.setState({
            drawIndex: index,
            nextCard: drawCard(this.state.deck)
        });
    }

    onDraw = () => {
        const index = this.state.drawIndex++;
        const previousCard = this.state.nextCard;
        this.state.drawnCards.push(previousCard);
        this.setState({
            drawIndex: index,
            previousCard: previousCard,
            nextCard: drawCard(this.state.deck)
        })
    }

    onReset = () => {
        this.setState({
            drawIndex: 0,
            deck: shuffle([...all_cards]),
            previousCard: null,
            nextCard: drawCard(this.state.deck),
            drawnCards: []
        })
    }

    render() {
        return(
            <CardLayout>
                <p>{this.state.nextCard?.name}</p>
                <img src={this.state.nextCard?.image} alt='This is your card' />
                <ButtonsTab onDraw={this.onDraw} onReset={this.onReset} />
                <DrawnCards cards={this.state.drawnCards}></DrawnCards>
            </CardLayout>
        )
    }
}
