import React, { Component } from 'react';
import Board from './Board.js';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            card_name: null,
            card_type: null,
            card_image: null,
            showCardImage: false,
        }
    }

    componentWillMount() {
        this.getRandomCard();
    }

    getRandomCard() {
        //TODO: make call to scryfall
        var response = this.getLocalCard()
        this.setState({
            card_name: response.name.toUpperCase(),
            card_type: response.type_line.split('—')[0].toLocaleUpperCase(),
            card_image: response.image_uris.small, 
        });
    }

    getLocalCard() {
        //Returns AJAI, CALLER OF THE PRIDE
        return(
            {
                "object": "card",
                "id": "33e44e04-8330-49ca-906c-bb9bf0bc84ce",
                "oracle_id": "1d5ff280-7f4d-4801-aefd-9b6e6b1f2818",
                "multiverse_ids": [
                370680
                ],
                "mtgo_id": 49245,
                "mtgo_foil_id": 49246,
                "name": "Ajani, Caller of the Pride",
                "lang": "en",
                "uri": "https://api.scryfall.com/cards/m14/1",
                "scryfall_uri": "https://scryfall.com/card/m14/1?utm_source=api",
                "layout": "normal",
                "highres_image": true,
                "image_uris": {
                "small": "https://img.scryfall.com/cards/small/en/m14/1.jpg?1517813031",
                "normal": "https://img.scryfall.com/cards/normal/en/m14/1.jpg?1517813031",
                "large": "https://img.scryfall.com/cards/large/en/m14/1.jpg?1517813031",
                "png": "https://img.scryfall.com/cards/png/en/m14/1.png?1517813031",
                "art_crop": "https://img.scryfall.com/cards/art_crop/en/m14/1.jpg?1517813031",
                "border_crop": "https://img.scryfall.com/cards/border_crop/en/m14/1.jpg?1517813031"
                },
                "cmc": 3,
                "type_line": "Legendary Planeswalker — Ajani",
                "oracle_text": "+1: Put a +1/+1 counter on up to one target creature.\n−3: Target creature gains flying and double strike until end of turn.\n−8: Create X 2/2 white Cat creature tokens, where X is your life total.",
                "mana_cost": "{1}{W}{W}",
                "loyalty": "4",
                "colors": [
                "W"
                ],
                "color_identity": [
                "W"
                ],
                "legalities": {
                "standard": "not_legal",
                "future": "not_legal",
                "frontier": "not_legal",
                "modern": "legal",
                "legacy": "legal",
                "pauper": "not_legal",
                "vintage": "legal",
                "penny": "not_legal",
                "commander": "legal",
                "1v1": "legal",
                "duel": "legal",
                "brawl": "not_legal"
                },
                "reserved": false,
                "foil": true,
                "nonfoil": true,
                "oversized": false,
                "reprint": true,
                "set": "m14",
                "set_name": "Magic 2014",
                "set_uri": "https://api.scryfall.com/sets/m14",
                "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am14&unique=prints",
                "scryfall_set_uri": "https://scryfall.com/sets/m14?utm_source=api",
                "rulings_uri": "https://api.scryfall.com/cards/m14/1/rulings",
                "prints_search_uri": "https://api.scryfall.com/cards/search?order=set&q=%21%E2%80%9CAjani%2C+Caller+of+the+Pride%E2%80%9D&unique=prints",
                "collector_number": "1",
                "digital": false,
                "rarity": "mythic",
                "illustration_id": "ae1af69a-b4b8-4ad2-be74-5313b10a8a9c",
                "artist": "D. Alexander Gregory",
                "frame": "2003",
                "full_art": false,
                "border_color": "black",
                "timeshifted": false,
                "colorshifted": false,
                "futureshifted": false,
                "edhrec_rank": 1704,
                "usd": "4.89",
                "tix": "0.50",
                "eur": "4.46",
                "related_uris": {
                "gatherer": "http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=370680",
                "tcgplayer_decks": "http://decks.tcgplayer.com/magic/deck/search?contains=Ajani%2C+Caller+of+the+Pride&page=1&partner=Scryfall",
                "edhrec": "http://edhrec.com/route/?cc=Ajani%2C+Caller+of+the+Pride",
                "mtgtop8": "http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Ajani%2C+Caller+of+the+Pride"
                },
                "purchase_uris": {
                "amazon": "https://www.amazon.com/gp/search?ie=UTF8&index=toys-and-games&keywords=Ajani%2C+Caller+of+the+Pride&tag=scryfall-20",
                "ebay": "http://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5337966903&icep_catId=19107&icep_ff3=10&icep_sortBy=12&icep_uq=Ajani%2C+Caller+of+the+Pride&icep_vectorid=229466&ipn=psmain&kw=lg&kwid=902099&mtid=824&pub=5575230669&toolid=10001",
                "tcgplayer": "https://scryfall.com/s/tcgplayer/69874",
                "magiccardmarket": "https://scryfall.com/s/mcm/262248",
                "cardhoarder": "https://www.cardhoarder.com/cards/49245?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
                "card_kingdom": "https://www.cardkingdom.com/catalog/item/190613?partner=scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
                "mtgo_traders": "http://www.mtgotraders.com/deck/ref.php?id=49245&referral=scryfall",
                "coolstuffinc": "https://scryfall.com/s/coolstuffinc/2340536"
                }
                }
        );
    }

    showCardImage() {
        console.log("showCardImage()");
        this.setState({
            showCardImage: true,
        });
        this.forceUpdate();
    }




    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        // typeline={this.state.card_type}
                        typeline={this.state.card_type}
                        keyword={this.state.card_name}
                        showCardImage={() => this.showCardImage()}>
                    </Board>
                </div>
                <div className="card-pane-container">
                    {this.state.showCardImage ? 
                        <img src={this.state.card_image} alt={this.state.card_name}/> : null
                    }
                </div>
            </div>
        );
    }
  }