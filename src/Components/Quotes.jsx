import React, { useState } from 'react'
import { useEffect } from 'react';

function Quotes() {
    
    //random quote generator: 
    //first create an array of quotes (strings)
    const quotes = [
        'There is virture in work and there is virtue in rest. Use both and overlook neither. -Alan Cohen',
        'What gets measured gets managed. -Peter Drucker',
        'Start where you are. Use what you have. Do what you can. -Arthur Ashe',
        'Deciding what not to do is as important as deciding what to do. -Steve Jobs',
        'If you think you’re too small to have an impact, try going to bed with a mosquito. -Anita Roddick',
        'The most important thing about art is to do work. Nothing else matters except sitting down every day and trying. -Steven Pressfield',
        'Consider everything an experiment. -Corita Kent',
        'Continuous imporvement is better than delayed perfection. -Mark Twain',
        'What we fear most is usually what we most need to do. -Tim Ferriss',
        'Move your focus away from finding the right work, toward working right, and eventually build a love for what you do. -Cal Newport',
        'Hofstadter’s Law: It always takes longer than you expect, even when youtake into account Hofstadter’s law. -Douglas R. Hofstadter',
        'Simplicity boils down to two steps: Identify the essential. Eliminate the rest. -Leo Babauta',
        'The way to achieve your own success is to be willing to help somebody else get it first. -Iyanla Vanzantt',
        'When people are placed in positions slightly above what they expect, they are apt to excel. -Margaret Wheatley',
        'An inventor fails 999 times and if he succeeds once, he’s in. He treats his failures simply as practice shots. -Charles F. Kettering',
        'Never neglect details. When everyone’s mind is dulled or distracted the leader must be doubly vigilant. -Colin Powell',
        'The work that we find most fulfilling is almost always a recreation and extension of youthful play. -Stuart Brown',
        'Every strike brings me closer to the next home run. -Babe Ruth',
        'An alley cat can stay lean when food is scarce; the trick is to stay lean during good times. -Ricardo Semler',
        'You were bron to win, but to be a winner, you must plan to win, prepare to win, and expect to win. -Zig Ziglar',
        'In the end, it\'s not the years in your life that count. It\'s the life in your years. -Abraham Lincoln',
        'The question yuo shoyld be asking isn\'t, \"What do I want?\", or \"What are my goals?\" but \"What would excite me?\". -Tim Ferriss',
        'My best successes came on the heels of failures. -Barbara Corcoran',
        'The true price of anything is the amount of time you pay for it. -Henry David Thoreau',
        'Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau',
        'I have learned this at least by my experiment: that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours. -Henry David Thoreau',
        'Two thing define you. Your patience when you have nothing, and your attitude when you have everything. -George Bernard Shaw',
        'He who has a why to live for can bear with almost any how. -Friedrich Nietzsche',
        'Yesterday I was so clever, so I wanted to change the world. Today I am wise, so I am changing myself. -Rumi',
        'Doing the best at this moment puts you in the best place for the next moment. -Oprah Winfrey',
        'What would you be glad you did- even if you failed? -Brene Brown',
        'Your time is limited. Don\'t waste it living someone else\'s life. -Steve Jobs',
        'You can not understand what is happening today, without understanding what came before. -Steve Jobs',
        'Quality means doing it right when no one is looking. -Henry Ford',
        'To live is the rarest thing in the world. Most people exist.. that is all. -Oscar Wilde',
        'Nothing is impossible; the word itself says \'I\'m possible\'! -Audrey Hepburn',
        'Fall seven times, stand up eight. -Japanese Proverb',
        'The future belongs to those who learn more skills and combine them in creative ways. -Robert Greene',
        'Your potential, the absolute best you\'re capable of-- that\'s the metric to measure yourself against. -Ryan Holiday',
        'Perfect, is the enemy of the good. -Voltaire',
        'Action cures fear. Indecision, postponement on the other hand, fertilize fear. -David J. Schwartz',
        'Think of many things; do one. -Portuguese Proverb',
        'Knowing where you came from is no less important than knowing where you are going. -Neil Degrasse Tyson',
        'We have a strategic plan. It\'s called doing things. -Herb Kelleher',
        'Don\'t lament so much about how your career is going to turn out. You don\'t have a career. You have a life. -Cheryl Strayed',
        'To succeed in your mission, you must have single-minded devotion to your goal. -A. P.J. Abdul Kalam',
        'Self-esteem comes from achieving something important when it\'s hard to do. -Clayton M. Christensen',
        'It\'s all very well to know it intellectually, but how do you feel about it? What is your experience of this? -Jamgon Kongtrul',
        'The best way to improve your self-control is to see how any why you lose control. -Kelly McGonigal',
        'Whenever you find yourself on the side of the majority, it is time to pause and reflect. -Mark Twain',
        'Courage is like a muscle, we strengthen it by use. -Ruth Gordon',
        'I can\'t understand why people are frightened of new ideas. I\m frightened of the old ones. -John Cage',
        'Better to live one year as a tiger, than a hundred as a sheep. -Madonna',
        'Never give up, for that is just the place and time that the tide will turn. -Harriet Beecher Stowe',
        'You can be the ripest, juciest peach in the world, and there\'s still going to be somebody who hates peaches. -Dita von Teese',
        'Don\'t justify your dreams, execute on them. -Gary Vaynerchuk',
        'A society grows great when old men plant trees who shade they know they shall never sit in. -Greek Proverb',
        'Don\'t waste your time chasing butterflies. Mend your garden, and the butterflies will come. -Mario Quintana',
        'I\'m a success today because I had a friend who believed in me, and I didn\'t have the heart to let him down. -Abraham Lincoln',
        'Everything should be as simple as it can be, but not simpler. -Albert Einstein',
        'It is possible to commmit no mistakes and still lose. That is not a weakness, that is life. -Captain Jean-Luc Picard',
        'Don\'t tell people your dreams.  -Show them. -anon',
        'A worker without genius is better than a genius who won\'t work. -Leopold Auer',
        'You have power over your mind, not outside events. Realize this, and you will find strength. -Marcus Aurelius',
        'It\'s always the hard part that creates value. -Seth Godin',
        'If one is lucky, a solitary fantasty can totally transform one million realities. -Maya Angelou',
        'Luck is preparation meeting opportunity. -Oprah Winfrey',
        'The more you eliminate the inefficient use of information, the better it is for productivity. -Mitch Kapor',
        'If you want to make an easy job seem mighty hard, just keep putting off doing it. -Olin Miller',
        'To the degree we\'re not living our dreams; our comfort zone has more control of us than we have over ourselves. -Peter McWilliams',
        'Nothing is less productive than to make more efficient what should not be done at all. -Peter Drucker',
        'I honestly think it is better to be a failure at something you love than to be a success at something you hate. -George Burns',
        'How you climb a mountain is more important than reaching the top. -Yvon Chouinard',
        'Do the best you can until you know better. Then when you know better, do better. -Maya Angelou',
        'Nothing is a mistake. There\'s no win and no fail. There\'s only make. -Corita Kent',
        'If you have a time to whine then you have time to find a solution. -Dee Dee Artner',
        'When all things seem to fail, stand on your inner strenght, shovel today\'s challenges for your tomorrow\'s freedom. -Aniekee Tochukwu Ezekiel',
        'You failed, but you lived. The sooner you own up to it, the faster you evolve. -Mimi Ikonn',
        'The best time to plant a tree was twenty years ago. The second best time is now. -Chinese Proverb',
        'To think too long about doing a thing often becomes it\'s undoing. -Eva Young',
        'You miss 100% of the shots you don\'t take. -Wayne Gretzky',
        'You always have two choices: Your committment versus your fear. -Sammy Davis Jr.',
        'We are emotional, irrational beasts who are emotional and irrational in predictable oattern filled ways. Using that knowledge is only, well, rational. -Chris Voss',
        'The journey of a thousand miles begins with a single step. -Lao Tzu',
        'Ordinary people think merely of spending time, great people think of using it. -Arthur Schopenhauer',
        'Think not long; but do; do not long, but think. -Confucius',
        'You can not swim for new horizons until you have courage to lose sight of the shore. -William Faulkner',
        'The most common way people give up their power is by thinking they don\;t have any. -Alice Walker',
        'You can have results or excuses but not both. -Gov. Arnold Schwarzenegger',
        'Give me six hours to chop down a tree and I will spend the first four sharpening the axe. -Woodsman',
        'Better a diamond with a flaw than a pebble without. -Confucius',
        'To be successful you have to enjoy doing your best while at the same time contributing to something beyond yourself. -Mihaly Csikszentmihalyi',
        'Challenges are what make life interesting and overcoming them is what makes life meaningful. -Joshua J. Marine',
        'Only those who attempt the absurd will achieve the impossible. -Miguel De Unamuno',
        'The reason you\'re suffereing is you\'re focused on yourself. -Tony Robbins',
        'Perfection is attained not when there is nothing more to add, but when there is nothing more to remove. -Antoine De Saint Exupéry',
        'The essence of self-discipline is to do the important thing rather than the urgent thing. -Barry Werner',
        'Not knowing you can\'t do something is sometimes all it takes to do it. -Ally Carter',
        'The world is changed by your example, not by your opinion. -Paulo Coelho',
        'Great minds discuss ideas, average minds discuss events, small minds discuss people. -Eleanor Roosevelt',
        'I cultivate empty space as a way of life for the creative process. -Josh Waitzkin',
        'One of the secrets to staying young is to always do things you don\'t know how to do, to keep learning. -Ruth Reichl',
        'You must want to be a butterfly so badly, you are willing to give up being a caterpillar. - Trina Paulus',
        'The rule is; the basics are the basics, and you can\'t beat the basics. -Charles Poliquin',
        'Hard decisions are only hard when you\'re in the process of making them. -Debbie Millman',
        'The great thing in this world is not so much where you stand, as in what direction you are moving. -Oliver Wendell Holmes',
        'Everyone\'s looking for rules to follow, and the sooner you realize there aren\'t any, the better art can be. -Jerrod Carmichael',
        'If we can learn to deal with our discomfort and just relax into it we\'ll have a better life. -Mellody Hobson',
        'The key is not to prioritize what\'s on your schedule but to schedule your priorities. -Stephen Covey',
        'Remember, the universal language is not texted, emailed or spoken. It is felt. -Angela Ahrendts',
        'I\'ve failed over and over again in my life. And that\'s why I succeed. -Michael Jordan',
        'When we do the best that we can, we never know what miracle is wrought in our life, or the life of another. -Helen Keller',
        'It is easier to act yourself into a better way of feeling than to feel yourself into a bettwe way of action. -O.H. Mowrer',
        'Caring about the happiness of others, we find our own. -Plato',
        'Anything you want to ask a teacher, ask yourself, and wait for the answer in silece. -Byron Katie',
        'A gentle word, a kind look, a good-natured smile can work wonders and accomplish miracles. -William Hazlitt',
        'Power is not given to you. You have to take it. -Beyoncé',
        'Accept no one\s definition of your life: define yourself. -Harvey Fierstein',
        'Do not let making a loving prevent you from making a life. -John Wooden',
        'The mark of a great sportsman is not how good they are at their best, but how good they are at their worst. -Martina Navrátilová',
        'There are risks and costs to action. But they are far less than the long range risks of comfortable inaction. -John F. Kennedy',
        'If you have more than three priorities, than you don\'t have any. -Jim Collins',
        'Great vision without great people is irrelevant. - Jim Collins',
        'The moment that you begin to think \'we are great\' your slide toward mediocrity will have begun. -Jim Collins',
        'The greatest weapon against stress is our ability to choose one thought over another. -William James',
        'When I let go of what I am, I become what I might be. -Lao Tzu',
        'Strength does not come from ohysical capacity. It comes from an indomitable will. -Mahatma Gandhi',
        'Out of the strain of the doing, into the peace of the done. -Julia Louise Woodruff',
        'What you do is what matter, not what you think or say or plan. -Jason Fried',
        'Whoever loves much, performs much, and can accomplish much, and what is done in love is done well. -Vincent Van Gogh',
        'Do one thing every day that scares you. -Mary Schmich',
        'When someone tells me \"no,\" it doesn\'t mean I can\'t do it, it simply means I can\'t do it with them. -Karen E. Quinones Miller',
        'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending. -James R. Sherman',
        'Knowledge is power. Knowledge shared is power multiplied. -Bob Noyce',
        'Without strategy, execution is aimless. Without execution, strategy is useless. -Morris Chang',
        'Optimism is an essential ingredient of innovation. How else can the individual welcome change over security, adventure over staying in safe places? -Robert Noyce',
        'Don\'t be encumbered by history, just go out and do something wonderful. -Robert Noyce',
        'Start with a growing market. Swim in a stream that becomes a river and ultimately an ocean. Be a leader in that market, not a follower, and constantly build the best products possible. -Robert Noyce',
        'Innovation is everything. When you\'re on the forefront, you can see what the next innovation needs to be. When you\'re behind, you have to spend your energy catching up. -Robert Noyce',
        'I\'ve made much more money by choosing the right things to say no to than by choosing things to say yes to. -Danny Meyer',
        'Hospitality is present when something happens for you. It is absent when something happens to you. Those two simple prepositions - for and to - express it all. -Danny Meyer',
        'Do what you can, with what you have, where you are. It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. -Teddy Roosevelt'
      ];
      
      //generate a random integer between a low and high value
      function randInt(low, high) {
        //declare a constant variable rndDec and assign it Math.random() function
        const rndDec = Math.random();
        //calculate random integer within the specified range. Multiply the random decimal by the difference between the high and low values, 
        //add 1 to account for the inclusive low value round down the result using Math.floor(), and add the low value again to get the final random integer within the range
        const rndInt = Math.floor(rndDec * (high - low + 1) + low);
        //return the random integer
        return rndInt;
      }
      
      //retrieve a random quote from the 'quotes' array
      function getRandomQuote() {
        //generate a random index within the range of the quotes
        const randomIndex = randInt(0, quotes.length - 1);
        //return the quote at the random index
        return quotes[randomIndex];
      }
    
      const[quote, setQuote] = useState(getRandomQuote());
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setQuote(getRandomQuote());
        }, 10000);
    //unmount quotes component as necessary for switching between components/routes
        return () => clearInterval(intervalId);
      },[]);
      
    
        return (
            
            <aside id="wisdom">
                <span>
                    <p id="quote">{quote}</p>
                </span>
            </aside>
            )
        
    }
    
    export default Quotes