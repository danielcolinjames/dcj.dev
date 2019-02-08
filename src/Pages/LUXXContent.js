// import styled from 'styled-components';
import React from 'react';

// import luxx from '../images/luxx.png';

import {
    ContentBackground,
    OverviewBarContainer,
    OverviewBarHeaderContainer,
    OverviewHeader,
    OverviewContent,
    OverviewUnderContainer,
    OverviewUnderContent,
    // OverviewTeamContainer,
    OverviewRoleContainer,
    OverviewTechContainer,
    MainContentContainer,
    HeaderTextSeparator,
    HeaderText,
    BodyText,
    BodyList,
    BodyListItem,
    // BodyCalloutText,
    // BodyImageContainer,
    // BodyImage,
    VimeoEmbed,
    BodyVideoContainer,
    SubHeaderText,
} from './ProjectContent';

export default (props) => {

    return (
        <ContentBackground
            bgc="#fff" >

            <OverviewBarContainer
                backgroundColour={props.themeColourLight}>
                <OverviewBarHeaderContainer>
                    <OverviewHeader>
                        Overview
                    </OverviewHeader>
                    <OverviewContent>
                        {props.projectOverview}
                    </OverviewContent>
                </OverviewBarHeaderContainer>
            </OverviewBarContainer>

            <OverviewUnderContainer
                colour={"white"}>
                <OverviewUnderContent>

                    <OverviewRoleContainer>
                        <OverviewHeader secondary>
                            My roles
                        </OverviewHeader>
                        <OverviewContent secondary>
                            Hardware engineering
                        </OverviewContent>
                        <OverviewContent secondary>
                            Network engineering
                        </OverviewContent>
                        <OverviewContent secondary>
                            Game design
                        </OverviewContent>
                    </OverviewRoleContainer>

                    <OverviewTechContainer>
                        <OverviewHeader secondary>
                            Tech & tools
                        </OverviewHeader>
                        <OverviewContent secondary>
                            Arduino
                        </OverviewContent>
                        <OverviewContent secondary>
                            xbee-arduino
                        </OverviewContent>
                        <OverviewContent secondary>
                            RFID
                        </OverviewContent>
                    </OverviewTechContainer>

                </OverviewUnderContent>
            </OverviewUnderContainer>




            <MainContentContainer>
                <HeaderText>
                    Final product — demonstration for the 29th Lieutenant Governor of Ontario
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    LUXX was created for a class during my undergraduate degree at York University, and we did such a good job that the school wanted to show it off to the visiting Lieutenant Governor of Ontario.
                </BodyText>
                <BodyVideoContainer>
                    <VimeoEmbed
                        video="239827744"
                        showTitle="false"
                        showByline="false"
                        showPortrait="false" >
                    </VimeoEmbed>
                </BodyVideoContainer>



                <HeaderText>
                    NOTE
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    This page is under construction, and I'm actively updating this page to be a complete and cohesive overview of the project. Some links and pictures are missing, but I'll have it updated soon!
                </BodyText>



                <HeaderText>
                    What is LUXX?
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    LUXX is a technology-enhanced version of tag that can be played by up to 10 people at a time. The game is played in a large, dark room. Participants are each given a suit to wear before entering the room. Each suit is equipped with technology that makes them capable of tagging and being tagged.
                </BodyText>


                <HeaderText>
                    An art installation turned game
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    A class of third-year Digital Media students were tasked with building an art installation to fill a large room. The only guideline we were given was that it had to match the theme of "darkness."
                </BodyText>
                <BodyText>
                    The most popular idea was a physical game that involved multiple teams made up of players wearing LED-equipped hoodies. This idea was the most ambitious, but also the most exciting.
                </BodyText>
                <BodyText>
                    LUXX is the eventual outcome of that idea.
                </BodyText>


                <HeaderText>
                    My roles and responsibilities
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    I was the technical lead on this project.
                </BodyText>
                <BodyText>
                    When I started working on LUXX, the basic idea had already been developed, and a rough prototype had been built.
                </BodyText>
                <BodyText>
                    Unfortunately, the prototype was just a single suit with LEDs along its sleeves, and it required a wired connection to a non-mobile power source, meaning that we essentially had to start from scratch.
                </BodyText>
                <BodyText>
                    It was my job to figure out how to use technology to bring this idea to life.
                </BodyText>
                <BodyText>
                    Some of my major tasks in the project were:
                </BodyText>
                <BodyList>
                    <BodyListItem>
                        figuring out what hardware we needed to make this idea work
                    </BodyListItem>
                    <BodyListItem>
                        developing the software that would run on each suit to control its hardware and allow it to communicate with the central computer
                    </BodyListItem>
                    <BodyListItem>
                        developing the software that would run on the central computer and take care of game logic, communicate with and control all the suits, handle tag events, and trigger audio and lighting

                    </BodyListItem>
                    <BodyListItem>
                        developing an interface that would allow us to start a game from the console and trigger lighting and audio effects on tag events
                    </BodyListItem>
                </BodyList>





                <HeaderText>
                    Hardware breakdown
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <SubHeaderText>
                    Suits
                </SubHeaderText>
                <BodyText>
                    Each suit is a hoodie equipped with 17 NeoPixel LEDs, an Arduino Uno, an RFID reader, a glove with an RFID tag, and an XBee to communicate wirelessly with the central console. The console is another Arduino Uno with an XBee and an XBee shield.
                </BodyText>
                <BodyText>
                    Each suit's mashup of electronic hardware is housed inside of a custom-built 3D case. We were lucky to find the RFIDuino, which is a shield that sits on top of the Arduino Uno and connects it to both an XBee and an RFID reader.
                </BodyText>
                <BodyText>
                    Pictured below is what the final version of each suit looked like.
                </BodyText>

                <SubHeaderText>
                    Console
                </SubHeaderText>
                <BodyText>
                    The console is just an Arduino with an XBee shield, plugged into a laptop. The console sends information through the laptop and into Max/MSP which generates audio and visuals.
                </BodyText>
                <BodyText>
                    When the RFID reader sees a tag, it consults its static array of tag numbers to identify the tagger. When it knows which suit tagged it, it sends a message to the console to ask whether or not it should change colour.
                </BodyText>

                <HeaderText>
                    Software breakdown
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <SubHeaderText>
                    Console
                </SubHeaderText>
                <BodyText>
                    Early on, we decided that since the suits already had to be wireless, the easiest way to control the game would be from a "command center" of sorts. We called it the "console" and the name stuck.
                </BodyText>
                <BodyText>
                    At the start of a game, the console sends out a ping message to all 10 suits. Since we don't know how many people are going to play in each game and which suits they are going to wear, this is a necessary step for dividing the teams evenly. Whichever suits respond to the ping message are marked as "active," and the active players are placed in their respective teams (depending on game mode). Then the console tells each suit "Hey, the game is starting, and you're [whatever colour they have been assigned]."
                </BodyText>
                <BodyText>
                    The console keeps a state array of 10 values: one for each suit's colour. When a suit changes colour (and confirms its colour change) the console updates its place in the state array. When a suit is tagged and sends its "I was tagged" message, the console checks the state array to compare the colours of the two players to figure out what instructions it should send. These instructions depend entirely on what game mode is currently being played.
                </BodyText>

                <SubHeaderText>
                    Suits
                </SubHeaderText>
                <BodyText>
                    Every suit knows the tag number of every other suit, so when the RFID reader sees a tag, it sends a message through the XBee to the console saying "I'm suit 4 and I was tagged by suit 9. Please advise." The console then replies saying "Okay suit 4, you need to change colour, to red," or "Okay suit 4, you and your tagger are the same colour, so just beep and flash your lights at the person who tagged you."
                </BodyText>
                <BodyText>
                    Thanks to the XBees and the wonderful xbee-arduino library, nearly every communication happens instantaneously and without packet loss.
                </BodyText>

                <HeaderText>
                    Different Game Modes
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <SubHeaderText>
                    Viral Tag
                </SubHeaderText>
                <BodyText>
                    The simplest and most rigorously tested game mode is Viral Tag. In a game of Viral Tag, the players are split into two equal teams. Every player on one team is assigned the same warm colour (chosen randomly from a set of 4) and every player on the opposing team is assigned the same cool colour (the pair of the randomly chosen warm colour).
                </BodyText>
                <BodyText>
                    It's really interesting to watch a game of Viral Tag play out. Sometimes there will be 9 green players and only 1 red, but red ends up winning by spreading their colour and avoiding getting tagged. The "push and pull" nature of this game mode is pretty fascinating to watch.
                </BodyText>

                <SubHeaderText>
                    Infected Tag
                </SubHeaderText>
                <BodyText>
                    Infected Tag is similar to Viral Tag, except that every player starts as a cool colour except one, and a player can only change from cool to warm. For everyone except the person designated as "it," Infected Tag is all about trying to stay alive. For the person who's "it," it's about trying to spread the disease to as many people as possible in as little time as possible.
                </BodyText>

                <SubHeaderText>
                    Chaos Tag
                </SubHeaderText>
                <BodyText>
                    In Chaos Tag, every player starts as a different colour. When a player is tagged, their suit changes colour to that of the player who tagged them. The game ends when everyone is the same colour.
                </BodyText>



                <HeaderText>
                    Challenges
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />

                <SubHeaderText>
                    Input and Output
                </SubHeaderText>
                <BodyText>
                    The first progress I made was getting the XBee to actually show up as available on the console end, through the shield. The code xbee.available() kept returning 0.
                </BodyText>
                <BodyText>
                    I noticed a line of text in the documentation for the console's XBee shield that I had previously neglected, saying that if you're using SoftwareSerial, you need to use the pins D2 - D13 for DIN and DOUT, instead of D0 and D1, which are reserved for the standard Serial (also known as hardware serial).
                </BodyText>
                <BodyText>
                    After setting the RX and TX (receiving and transmitting) pins on the console's XBee shield and in the Arduino code, I couldn't figure out why I was getting all sorts of random numbers from the console XBee when it should have been receiving the values sent by the suit XBee.
                </BodyText>
                <BodyText>
                    Eventually I tried swapping the DIN and DOUT pins on a whim, and the console was suddenly reading the char values sent from the other XBee!
                </BodyText>
                <BodyText>
                    That's when I realized that I had stupidly been thinking of DIN as receiving and DOUT as transmitting, instead of DIN as sending the values INTO the XBee to transmit, and DOUT as sending the values received OUT OF the serial port.
                </BodyText>
                <BodyText>
                    The suit Arduino was just running the following code inside the loop:
                </BodyText>
                <BodyText>
                    xbee.write(10);
                </BodyText>
                <BodyText>
                    xbee.write(20);
                </BodyText>
                <BodyText>
                    xbee.write(30);
                </BodyText>
                <BodyText>
                    Pictured below is the output and the code running on the console Arduino during this phase.
                </BodyText>





                <HeaderText>
                    Hardware Decisions
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    Our initial bundle of hardware for each suit was quite bulky and not very practical. I did some research and found the RFIDuino which had everything we needed built-in (an XBee slot and an RFID reader) as well as some extra goodies like a miniature buzzer and 2 built-in LEDs. On top of all that, it was actually cheaper than the alternative Frankenstein's Arduino we had put together.
                </BodyText>
                <BodyText>
                    The RFIDuino solved a lot of practical problems, but it meant rewriting a lot of the code I'd already written. The way that it reads RFID tags through Arduino is completely different from the RFID shield we had before, so I had to scrap that code.
                </BodyText>
                <BodyText>
                    Once I understood the example RFID code for the RFIDuino well enough, it wasn't difficult to implement it.
                </BodyText>
                <BodyText>
                    Pictured below is the final version of each suit's hardware. Not visible is the RFID panel or the NeoPixel strands.
                </BodyText>







                <BodyText>
                    Debugging an Arduino without the Serial monitor
                    Unfortunately, since the RFIDuino uses the hardware serial port to talk to the XBee, I couldn't use the serial monitor in Arduino to debug its code.
                </BodyText>
                <BodyText>
                    This presented a lot of difficulty, but I managed to get the XBee to XBee communication working (sort of) despite being unable to debug one side of the communication.
                </BodyText>
                <BodyText>
                    I had to use some workarounds in order to debug the suit code. At one point, I counted out 255 blinks on one of the RFIDuino's built-in LEDs in order to figure out that xbee.read() was returning -1.
                </BodyText>
                <BodyText>
                    Shortly after realizing I had actually just counted out 255 blinks of an LED in order to debug a problem, I decided that debugging both sides of the code would be necessary. With some help, I managed to rig up a third Arduino and attach it to a different USB port on my computer.
                </BodyText>
                <BodyText>
                    Next, I created a SoftwareSerial object on both the Arduino to debug and the Arduino that will print out the debugging messages. Only the Tx number (the pin that will be transmitting information) matters for the sending one, and only the Rx number (the pin that will be receiving information) matters for the receiving one.
                </BodyText>
                <BodyText>
                    Finally, I connected the ground pins of the two Arduinos together, and then the Tx pin of the Arduino we want to debug into the Rx pin of the one that will print out the debugging code.
                </BodyText>
                <BodyText>
                    Success! I now had debugging on both sides of the code. The debugging messages sometimes take a few seconds to come through, and can get bunched up if delivered in rapid succession, but it's better than no debugging at all. On the sending Arduino, all I needed was:
                </BodyText>
                <BodyText>
                    SoftwareSerial debugSerial (2, 3); // (rx, tx)
                </BodyText>
                <BodyText>
                    debugSerial.print("Debugging stuff: ");
                </BodyText>
                <BodyText>
                    debugSerial.println(valueToDebug);
                </BodyText>
                <BodyText>
                    and on the receiving Arduino, I needed the following inside the loop:
                </BodyText>
                <BodyText>
                    debugSerial.listen();
                </BodyText>
                <BodyText>
                    {/* while (debugSerial.available() > 0) {

                        Serial.println(debugSerial.readString());

                    } */}
                </BodyText>
                <BodyText>
                    Pictured below is one of many debugging sessions.
                </BodyText>








                <BodyText>
                    XBee: API mode vs Transparent Mode
                    While looking into some technical aspects of the XBee, a team member found an important piece of information. The XBee has two modes: API and Transparent. Transparent mode is the default, allowing simple read and write operations. With API mode, the developer has much more control over the XBee. Additionally, there is a fantastic Arduino library built for XBee to XBee communication in API mode.
                </BodyText>
                <BodyText>
                    Implementing API mode was a hassle because I had to rewrite all of the communication code for the suit and the console, but in the long run it was a welcome change because my code for transparent mode was extremely buggy as soon as there were 2 suits trying to talk to the console at the same time. API mode offers control over the address (can be changed on the fly) and the payload (an array of bytes). With Transparent Mode, it is only possible to send one byte at a time.
                </BodyText>
                <BodyText>
                    Being able to change the address on the fly is a huge advantage. Previously, we had decided to set the address of the console's XBee to 0x1 and then the address of every suit's XBee to 0x2. The idea was that the information in the packets sent would identify the sender and receiver of each message, and each suit would only enter a method if it saw its ID in a packet, because then it would know that the following packets were meant for it. This effectively meant that the suits would all have the same address, but would filter out any messages not meant for them. Being able to address each suit individually, being able to send information in packets is much more consistent and reliable.
                </BodyText>
                <BodyText>
                    At this point, I had begun testing both sides of the code from the same computer because it was easier to push changes to GitHub that way. Unfortunately, this was around the same time that I changed all the code to use API mode instead of Transparent Mode, so when I started to see things like false positives on TxStatus packets and packet delivery failures, I thought API mode was to blame. After lots of testing and communication code rewriting, I finally tested everything from multiple computers, and lo and behold, all my problems vanished.
                </BodyText>
                <BodyText>
                    Running Two Loops Simultaneously with Arduino
                    We decided early on that we wanted each suit to have its NeoPixels light up in a looping, one-by-one sequence. The reason is twofold: the NeoPixels consume less power if only one is on at a time, which stretches the battery life further, and it is also more visually interesting. We found that 100 milliseconds between lights was perfect; anything higher was too slow and anything lower was too fast.
                </BodyText>
                <BodyText>
                    The obvious way to do this is to write a (more complete) method like this:
                </BodyText>
                {/* <BodyText>
                    void stepThroughLights() {

                        light(i - 1) = off;

                    light(i) = on;
    
                    delay(100);
    
                   } */}
                <BodyText>
                    and then call that method from the loop. Unfortunately, the XBee has to always be listening, so if the lookForPacket() method takes roughly 10 milliseconds (I'm estimating) and there's a delay of 100 milliseconds every time the loop repeats, the code is 10 times more likely to be stuck between two lights than it is to be telling the XBee to listen for important packets.
                </BodyText>
                <BodyText>
                    Luckily we figured out a perfect solution to the problem. We thought we were going to have to implement and figure out a complicated multithreading library, but it turns out the built-in millis() function in Arduino can be used to effectively create a second loop in the Arduino code.
                </BodyText>
                <BodyText>
                    All we had to do was decide on an interval that we wanted something to happen at, and then tell the Arduino: "if your current time (millis()) minus the last time measurement you took is bigger than this interval, do the following." Once you're inside this loop, it's important to assign the last measurement as the current millis() so that the loop will work again the next time around.
                </BodyText>
                <BodyText>
                    The code looks like this:
                </BodyText>
                <BodyText>
                    {/* if ((millis() - prevMillis) > 100) {

                        prevMillis = millis();

                    // do the secondary loop things here without breaking the first one */}
                </BodyText>
                <BodyText>
                    Success! The secondary loop (stepThroughLights()) ran every 100 milliseconds without any delays blocking the XBee from listening. We ended up using this method for several other things in the suit's code so that it was never missing important packets (such as "game over").
                </BodyText>
                <BodyText>
                    XBee communication problems
                    One particularly persistent bug was the game start bug, which must have just snuck past my not-rigorous-enough testing of the game start command. It's also possible that testing with the suits sitting right next to me instead of across the room played a part.
                </BodyText>
                <BodyText>
                    Either way, it needed fixing. I did some research on the TX Status Response built into the XBee protocol. A TX Status Response is bascially a "message received" confirmation sent from the receiving XBee to the transmitting XBee, so that the transmitting XBee knows its message was received.
                </BodyText>
                <BodyText>
                    I previously overlooked the fact that the TX Status Response from the receiving XBee returned true even if that XBee wasn't the intended recipient of the message. What ends up happening is this: if the console sends a message to suit 5 and receives a TX Status Response that is positive, it thinks suit 5 is active, when in reality it was seeing suit 4's TX Status Response.
                </BodyText>
                <BodyText>
                    In order to make sure that every suit would receive the game start command, I added a 1 second delay to both the console after sending out each ping, and to each suit once it saw the "ping" message.
                </BodyText>

                <SubHeaderText>
                    Building an Interface
                </SubHeaderText>
                <BodyText>
                    Once I had all the game code working at almost 100 percent reliability, I decided I wanted a way to control the game through an interface.
                </BodyText>
                <BodyText>
                    The interface would need to be able to talk to Arduino easily and reliably, and it would have to have some sort of visual indication of how the game was going.
                </BodyText>
                <BodyText>
                    Since I've worked fairly extensively with Max/MSP in the past, I knew that it was probably the best, fastest, and most reliable way to build an interface.
                </BodyText>
                <BodyText>
                    I started by developing a communication protocol between Max and Arduino. Since the XBees needed to use the regular Serial port (hardware serial) on the Arduino to talk to each other, I had to use our hacked-together debugging method and have another Arduino relay messages between the console and Max.
                </BodyText>
                <BodyText>
                    Pretty soon, I had a fully-fledged game interface through which I could:
                </BodyText>
                <BodyList>
                    <BodyListItem>
                        see the current colour state of each suit by looking at a row of 10 square panels
                    </BodyListItem>

                    <BodyListItem>
                        send manual colour changes to each suit (I later removed this because it was mostly for testing, and because I decided to make the interface communication a one-way highway, from console to interface)
                    </BodyListItem>

                    <BodyListItem>
                        start a game by pressing a button (one button for each game mode)
                    </BodyListItem>
                </BodyList>

                <BodyText>
                    The communication setup that I had was reading a single byte at a time through Max. The easiest way to use this to my advantage was to use the numbers 0 through 99 to designate which suit was which colour. The number 5 (05) meant that suit 0 was colour 5. The number 63 meant that suit 6 was colour 3. The number 99 meant that suit 9 was colour 9. This obviously isn't a very scalable solution, but it worked well for a quick and dirty interface, and it made it easy to programatically determine what numbers to send into the interface.
                </BodyText>
                <BodyText>
                    Unfortunately, and somewhat inexplicably, having the game controlled from inside an interface introduced tons of new bugs. Now, at the start of the game, some suits would simply not get the message from the console. Additionally, there were all sorts of brand new weird behaviours that weren't present before the interface was added.
                </BodyText>
                <BodyText>
                    It was very difficult to trace the errors back to their sources because I was working on several different things at the same time and was unable to test every step due to time pressure (we had a public demonstration coming up). Due to some behaviour I had seen previously with our ad hoc debugging method, my best hunch was that the sketchy interface to console communication was largely responsible for the newfound problems.
                </BodyText>
                <BodyText>
                    Since the only communication that really needed to travel this way was the starting of different game modes, I rewrote the code on both ends (the console and the interface) and wired up a physical button for each game mode, and suddenly problems started disappearing.
                </BodyText>
                <BodyText>
                    The picture below shows the interface in action.
                </BodyText>







                <SubHeaderText>
                    Adding Lighting and Sound
                </SubHeaderText>

                <BodyText>
                    From the beginning, we wanted LUXX to have some auditory feedback when there was a tag event. We decided further down the pipeline that theatre lighting would be a great way to have tag events visually alter the game space. For several reasons, we decided that Max/MSP would be the best way to add audio and overhead lighting to the game. Namely:
                </BodyText>
                <BodyText>
                    Getting Max/MSP and Arduino talking to each other over a serial connection is relatively straightforward.
                </BodyText>
                <BodyText>
                    Getting Max/MSP hooked up to a theatre lighting and sound board is relatively easy.
                </BodyText>
                <BodyText>
                    We were already using Max for the interface, so it would just be a matter of adding some components to the existing interface so that certain commands from the console would trigger lighting and audio events.
                </BodyText>
                <BodyText>
                    After some tinkering, we had lighting and sound working after a couple hours. For the soundtrack, we used a remix of a song from the movie TRON: Legacy, with a computerized voice talking over top of it.
                </BodyText>
                <BodyText>
                    For the computer voice, we used an online service to download audio files of a robotic voice reading out our inputted text. We found some appropriate sound effects on a website that specializes in free sound effects and modified them slightly to make the tag event sounds. We also added a little bit of randomness so that the tag event sound effect had a random amount of reverberation and a slightly randomized pitch every time it was triggered.
                </BodyText>
                <BodyText>
                    Overall we found that the lighting and audio effects on the space added more to the game than we initially anticipated, and we realized that they had become as much a part of the LUXX experience as its hardware and rules.
                </BodyText>


                <HeaderText>
                    Future work & extensions
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <SubHeaderText>
                    Capture The Flag
                </SubHeaderText>

                <BodyText>
                    From the very start of this project, we had considered adding in something similar to Capture the Flag. Before our first few public demonstrations of the project, I didn't even consider adding another game mode, but throughout the project, I made a point of making all the communication protocols and game logic as modular and scalable as possible so that adding game modes in the future would be relatively simple.
                </BodyText>
                <BodyText>
                    The first mode I want to add is Capture The Flag. There would be two "flags": one on either side of the room. Each flag would have the exact same hardware bundle as each suit, minus the LEDs: an Arduino Uno with an RFIDuino shield, an XBee, and a glowing EL panel over top of the RFID panel to indicate an area that the player's glove can tag. These flag bases could be placed either on the walls, or on some sort of podium.
                </BodyText>
                <BodyText>
                    The players would be asked at the beginning of the game to stand on opposite sides of the room, next to their team's flag. When a player touches the opposing team's flag, the voice would announce that "Blue team has the flag," and that player's suit would be told by the console to display some sort of visual indication that they had the flag. Since the suits normally light up with one LED at a time, I think it would be cool if the flag carrier's suit had all its LEDs on except one, and the turned-off LED cycled repeatedly. It remains to be seen if this would be a clear enough indication or not.
                </BodyText>
                <BodyText>
                    If a flag carrier was tagged by a member of the team whose flag they were carrying, the voice would announce that "Blue team has dropped the flag," and the flag carrier's suit would return to its normal LED pattern. If the flag carrier touches their own "flag base" before the other team tagged them, the voice would announce that "Blue team has returned the flag," and Blue team's points would increase by one. I'm not sure how we'd display the score, but the best option is probably a projection of some sort, since dynamic voice generation seems like a daunting road to take.
                </BodyText>
                <BodyText>
                    The game would end after some arbitrary number of points had been accumulated by either team. I'm thinking 5 would be best, but maybe 3 if people get tired too quickly.
                </BodyText>

                <SubHeaderText>
                    LUXX + Heartbeat
                </SubHeaderText>
                <BodyText>
                    During the summer of 2016, I worked as a research assisstant for Mark-David Hosale in a week-long workshop called Movement and Emotion as Computational Interfaces, where I got the chance to hack one of the suits so that it would pulse in sync with its wearer's heartbeat.
                </BodyText>
                <BodyText>
                    A video demo can be seen below, and the code can be found here.
                </BodyText>

            </MainContentContainer>
        </ContentBackground >
    )
}