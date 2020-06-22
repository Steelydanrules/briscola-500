# briscola-500
JS version of Briscola (500 rules: 4 players, 5 cards, no auto-brisc, first team to 500 wins)

# Background
Briscola is the most popular card game in Italy.  I am re-creating the classic game's 500 version.  The basic rules goes as follows: 

There are 4 players on 2 teams--1 human and 3 computers.  Your partner sits directly across from you.  Each player is dealt 5 cards (there are 4 suits: denari (yellow gold/coins), spade (blue swords), coppe (red cups), bastoni (green bats)).  The point of the game is to keep on playing until 1 team gets 500 points; this usually means 5-7 rounds.  

A card is thrown by the lead player; the only way for a team to win the hand is for the to throw a higher point value card of the SAME suit, or any card of the called BRISCOLA suit.  The rounds are initialized with no BRISCOLA suit (unlike the conventional form of the game).  The only way for a BRISCOLA to come into effect is one player has to have the King & Queen of the same suit in their hand and show it to the rest of the players in the game on their own turn.  That team is also granted 40 points.  Any subsequent BRISCOLA call grants your team 20 points but does not change the current BRISCOLA suit. 

Calling a BRISCOLA means that the suit shown is now the "trump" suit.  For instance: if a BRISCOLA of denari is called, and one leads with an ace of coppes, a 2 of denari will win the hand if it's thrown on top.  The only cards that can beat a BRISCOLA are higher cards of the same suit.  If the deck is empty and a BRISCOLA is in effect, teammates can show one another their cards at the begging of one's turn.  Once all cards are thrown/collected, the points are counted and the deck is re-dealt.   Point values & rankings are as follows:

|Point Value|Card|
|---|---|
|11|Ace|
|10|3|
|4|King/Re (Bearded Man)|
|3|Queen (Horse)|
|2|Jack/Fante|
|0|7|
|0|6|
|0|5|
|0|4|
|0|2|


# MVP 1
Game logic 1-2 days

# MVP 2
Computer players 1 day

# MVP 3
Draw cards 1 day

# MVP 4
Add animations 1 day
