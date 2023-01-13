/*global*/

const randomNumberGenerator = ( max ) =>
{
  return Math.floor( Math.random() * max );
}


let jokes = [ 

`Why did an old man fall in a well?
Because he couldn’t see that well!`,

  `Why did the actor fall through the floorboards?
They were going through a stage!`,

  `Why did a scarecrow win a Nobel prize?
He was outstanding in his field!`,

  `Why are peppers the best at archery?
Because they habanero!`,

  `What did the duck say after she bought chapstick?
Put it on my bill!`,

  `What do you call a fake noodle?
An impasta!`,

  `What did the three-legged dog say when he walked into a saloon?
“I’m looking for the man who shot my paw!”`,

  `How do you tell the difference between a bull and a cow?
It is either one or the udder!`,

  `What’s red and smells like blue paint?
Red paint!`,

  `What’s the difference between a hippo and a Zippo?
One is very heavy, the other is a little lighter!`,

  `  What do you call an illegally parked frog ?
  Toad!`,

  `Why can’t you send a duck to space ?
  Because the bill would be astronomical!`,

  `What does Jeff Bezos do before he goes to sleep ?
  He puts his PJ - Amazon!`,

  `What happened when the world's tongue-twister champion got arrested?
They gave him a tough sentence!`,

  `What did the mama cow say to the calf ?
  It’s pasture bedtime!`,

  `How does a vampire start a letter ?
  Tomb it may concern!`,

  `What did one plate say to the other ?
  Dinner is on me!`,

  `Why do hummingbirds hum ?
  Because they don’t know the words!`,

  `What do sprinters eat before a race ?
  Nothing.They fast!`,

  `Two muffins are baking in an oven.One of them looks to the other and says, 
"Phew, it's getting hot in here!" 
The other looks back and says, 
"Ack! A talking muffin!"`,

  `What kind of dog does a magician have ?
    A Labracadabrador!`,

  `What do you call an elephant that doesn’t matter ?
  An irrelephant!`,

  `What do you get when you cross a rabbit with shellfish ?
  An oyster bunny!`,

  `Where do polar bears keep their money ?
  In a snow bank!`,

  `Why did the pony get sent to his room ?
  He wouldn’t stop horsing around!`,

  `Where do cows go on Friday nights ?
  They go to the moo - vies!`,

  `Why couldn't the pony sing “Happy Birthday?”
Because she was just a little hoarse!`,

  `How do you make an octopus laugh ?
  With ten - tickles!`,

  `How do you keep a bull from charging ?
  Take away its credit card!`,

  `Why can’t a leopard hide ?
  Because he’s always spotted!`,

  `What do you get when you cross a snail with a porcupine ?
    A slowpoke!`,

  `What do frogs order at fast - food restaurants ?
  French flies!`,

  `What do you get from a pampered cow ?
  Spoiled milk!`,

  `What do you call an alligator who solves mysteries ?
  An investigator!`,

  `Why is a snake difficult to fool ?
  You can’t pull its leg!`,

  `What kind of socks do grizzlies wear ?
  None, they have bear feet!`,

  `What did the dog say when it sat on sandpaper ?
  "Ruff!"`,

  `What's a cat's favorite dessert ?
  Chocolate mouse!`,

  `What fish only swims at night ?
  Starfish!`,

  `What does a triceratops sit on ?
  Its tricera - bottom!`,

  ` Knock, knock.
    Who’s there ?
    Ice cream.
Ice cream who ?
    ICE CREAM SO YOU CAN HEAR ME!`,

  `Knock, knock.
    Who’s there ?
    Figs.
Figs who ?
    Figs the doorbell, I’ve been knocking forever!`,

  `Knock, knock.
    Who’s there ?
    Theodore.
Theodore who ?
    Theodore wasn’t opened so I knocked!`,

  `Knock, knock.
    Who’s there ?
    Tank.
Tank who ?
    You’re welcome!`,

  `Knock, knock.
    Who’s there ?
    Isabel.
Isabel who ?
    Isabel not working ?`,

  `Knock, knock.
    Who’s there ?
    Icy.
Icy who ?
    Icy you in there!`,

  `Knock, knock.
    Who’s there ?
    Dozen.
Dozen who ?
    Dozen anyone want to let me in?`,

  `Knock, knock.
    Who’s there ?
    Scold.
Scold who ?
    Scold outside, let me in !`,

  `Knock, knock.
    Who’s there ?
    Water.
Water who ?
    Water you asking so many questions for, just open up!`,

  `Knock, knock.
    Who’s there ?
      Cargo.
Cargo who ?
  Car go, “Toot toot, vroom, vroom!”`,

  `Knock, knock.
    Who’s there ?
    Owls go.
Owls go who ?
    That’s right!`,

  `Knock, knock.
    Who’s there ?
    Hatch.
Hatch who ?
    Bless you!`,

  `Knock, knock.
    Who’s there ?
    Annie.
Annie who ?
    Annie body home ?`,

  `Knock, knock.
    Who’s there ?
    Boo.
Boo who ?
    Don’t cry, it’s just a joke!`,

  `Knock, knock.
    Who’s there ?
    Lettuce.
Lettuce who ?
    Lettuce in, it’s cold out here!`,

  `Knock, knock.
    Who’s there ?
    An interrupting cow.
An interrupt—
  MOO!`,

  `Knock, knock.
    Who’s there ?
    A little old lady.
A little old lady who ?
    Hey, I didn’t know you could yodel!`,

  `Knock, knock.
    Who’s there ?
    Nana.
Nana who ?
    Nana your business!`,

  `Knock, knock.
    Who’s there ?
    Toodle
Toodle who ?
    Toodle - loo!`,

  `Knock, knock.
    Who’s there ?
    Spell.
Spell who ?
    Okay, W - H - O!`,


  ` Which vegetable do sailors hate the most ?
    Leeks!`,

  `What did the bunny say to the carrot ?
  It’s been nice gnawing you!`,

  `What do you call a sad strawberry ?
  A blueberry!`,

  `Why did the tomato blush ?
  Because it saw the salad dressing!`,

  `What did the pizza say to the topping ?
  I never sau - sage a pretty face!`,

  `What do you call a cheese that’s not yours ?
  Nacho cheese!`,

  `Why did the cookie go to the nurse ?
  Because he felt crummy!`,

  `What kind of room doesn’t have doors ?
  A mushroom!`,

  `What kind of key opens a banana ?
  A mon - key!`,

  `What happens when a grape gets run over crossing the street ?
  A traffic jam!`,


  `Why do bees have sticky hair ?
    They use honeycombs!`,

  `What does garlic do when it gets hot ?
  It takes its cloves off!`,

  `Where does fruit go on vacation ?
  Pear - is!`,

  `Why did the melons choose not to get married ?
  Because they cantaloupe!`,

  `What does a lemon say when it answers the phone ?
  Yellow!`,

  `What did one dried fruit say when another asked it to the movies ?
  It's a date!`,

  `What does a cow call an earthquake ?
  A milkshake!`,

  `Why did the man go to the yogurt museum ?
  To get a little culture!`,

  `Why couldn't the sesame seed climb up the hill?
Because it was on a roll!`,

  `Why can't you trust tacos?
Because they always spill the beans!`,

  `Did you hear about the rancher who had 97 cows in his field ?
    When he rounded them up, he had 100!`,

  `Why did two 4s skip dinner ?
    Because they already 8!`,

  `Did you hear about the mathematician who’s afraid of negative numbers ?
    He’ll stop at nothing to avoid them!`,

  `What did the triangle feel sorry for the circle ?
  Because it’s pointless!`,

  `Why was the math book sad ?
  It had too many problems!`,

  `Why couldn’t the angle get a loan ?
  Because his parents wouldn’t cosine!`,

  `What do you call a number that can’t stay in one place ?
  A roamin’ numeral!`,

  `Why should you never trust someone writing on graph paper ?
  Because they must be plotting something!`,

  `What do you call two guys who love math ?
  Algebros!`,

  `What do you get when you divide a Jack o' lantern by its diameter?
Pumpkin pi!`,

  `Why was 6 afraid of 7 ?
    Because 7, 8, 9!`,

  `What did the 90° angle say after an argument ?
    "It turns out, I was right!"`,

  `What tool do mathematicians use most ?
  Multi - pliers!`,

  `Why did the student get upset when their teacher called them average ?
  It was a mean thing to say!`,

  `If a math teacher had four apples in one hand and five apples in the other hand, what would they have altogether ?
  Really big hands!`,

  `What did the 0 say to the 8 ?
  Nice belt!`,

  `Why should you never start a conversation with pi ?
  It'll just go on forever!`,

  `What is a bird’s favorite type of math?
OWL - gebra!`,

  `Why do teenagers travel in groups of threes and fives ?
  Because they can’t even!`,

  `Did you hear about the the circle that kept going to school ?
  It has 360°!

    RELATED: Pi Day Jokes and Puns to Help You Celebrate on March 14`,

  `What do you call a huge pile of cats ?
    A meow - ntain!`,

  `Why does it take pirates a long time to learn the alphabet ?
  Because they can spend years at C!`,

  `What did one snowman say to the other snowman ?
  It smells like carrots over here!`,

  `What did one wall say to the other wall ?
  I’ll meet you at the corner!`,

  `Why did the kid throw his clock out the window ?
  Because he wanted to see time fly!`,

  `Why wouldn’t the shrimp share his treasure ?
  Because he was a little shellfish!`,

  `Why is Cinderella bad at soccer ?
  Because she’s always running away from the ball!`,

  `What does a rain cloud wear under its clothes ?
  Thunderwear!`,

  `Why do vampires seem sick all the time ?
  Because they’re always coffin!`,

  `How do you get an astronaut’s baby to stop crying ?
  You rocket!`,

  `Why did the student eat his homework ?
    Because his teacher told him it would be a piece of cake!`,

  `Why are ghosts bad liars ?
    Because you can see right through them!`,

  `Why are spiders so smart ?
    They can find everything on the web!`,

  `What are mummies' favorite lunches?
Wraps!`,

  `How does Darth Vader like his toast ?
    On the dark side!`,

  `Why are mountains so funny ?
    They're just hill areas!`,

  `What is the Easter bunny’s favorite type of music ?
    Hip - hop!`,

  `Why did Beethoven get rid of his chickens ?
    All they ever said was, “Bach, Bach, Bach!”`,

  `Why did the man name his dogs Rolex and Timex ?
    Because they were watchdogs!`,

  `Why is grass so dangerous ?
    Because it’s full of blades!`,


  `What’s the difference between a guitar and a fish ?
    You can tune a guitar, but you can’t tuna fish!`,

  `What kind of tree can fit in one hand ?
    A palm tree!`,

  `How do they keep the basketball arena cool ?
  They fill it with fans!`,

  `What does a book do to keep warm in the winter ?
  It puts on a jacket!`,

  `What did the lightbulb say to its sweetheart ?
  I wuv you a watt!`,

  `What did the fisherman say to the magician ?
  Pick a cod, any cod!`,

  `Why did the picture go to prison ?
  Because it was framed!`,

  `Why do bicycles fall over ?
  Because they’re two - tired!`,

  `If a seagull flies over the sea, what flies over the bay ?
  A bagel!`,

  `What does the ocean do when it sees its friends ?
  It waves!

RELATED: Egg - Cellent Easter Puns Every Bunny Will Love`,


  `How does the moon cut his hair ?
    Eclipse it!`,

  `Why did the golfer wear two pairs of pants ?
    Just in case he got a hole in one!`,

  `Why was the broom late ?
    It over - swept!`,

  `What did the paper say to the pencil ?
    Write on!`,

  `What do you call a belt made of watches ?
  A waist of time!`,

  `Where do sailboats go when they're sick?
To the dock!`,

  `What do you do when a lemon gets sick ?
  You give it lemon - aid!`,

  `What’s worse than raining cats and dogs ?
  Hailing taxis!`,

  `How can you tell if a tree is a dogwood tree ?
  By its bark!`,

  `What do astronauts do before throwing a party ?
  They planet!

RELATED: Clever Fall Puns That Will Leaf Your Friends in Stitches`,

  `What do pirates pay for corn ?
    A buck an ear!`,

  `Why are elevator jokes so good ?
  They work on many levels!`,

  `What's worse than finding a worm in your apple?
Finding half a worm in your apple!`,

  `What do you call a boomerang that doesn't come back?
A stick!`,

  `What do you call a bear with no ears ?
  A “B!”`,

  `Which hand is it better to write with?
  Neither, it’s better to write with a pencil!`,

  `What do you call a fish with no eye ?
  A fsh!`,

  `Why are balloons so expensive ?
  Inflation!`,

  `What breed of dog can jump higher than a skyscraper ?
  Any breed of dog.Skyscrapers can’t jump!`,

  `Why can't you trust atoms?
They make up everything!`,

  `Why can’t a hand be 12 inches long ?
    Because then it would be a foot!`,

  `Did you hear about the unemployed personal trainer ?
    They gave their too - weak notice!`,

  `What's brown and sticky?
A stick!`,

  `Why was the calendar afraid ?
    Its days were numbered!`,

  `What's E.T. short for?
Because he's only got little legs!`,

  `Did you hear about the guy who invented the knock - knock joke ?
    He won the "no-bell" prize!`,

  `Why is it hard to understand volunteers ?
    Because they make no cents!`,

  `How much does it cost Santa to park his sleigh ?
    Nothing, it's on the house!`,

  `How is it that I only know 25 letters of the alphabet ?
    I just don't know y!`,

  `When does a regular joke become a dad joke ?
    When it becomes apparent!`,

  `Where do pencils come from ?
    Pennsylvania!`,

  `Why can't you tell a joke to an egg?
It might crack up!`,

  `Why are fish so smart ?
  Because they live in schools!`,

  `What did the big flower say to the little flower ?
  Hi, bud!`,

  `How can you make a tissue dance ?
  Put a little boogie in it!`,

  `What did the buffalo say when his little boy left for school ?
  Bison!`,

  `What animal can you always find at a baseball game ?
  A bat!`,

  `Why did the boy throw a stick of butter out the window ?
  Because he wanted to see a butterfly!`,

  `What did Baby Corn say to Mama Corn ?
  "Where is Pop Corn?"`,

  `What do you call a train with a cold ?
  A - choo choo train!`,

  `Why did the teddy bear not ask for dessert ?
    Because he was already so stuffed!`,

  `Where do elephants pack their clothes ?
  In their trunks!`,

  `What do you call a fly without wings ?
  A walk!`,

  `What do you call a duck that gets straight - As ?
  A wise quacker!`,

  `Why do giraffes have such long necks ?
  Because they have smelly feet!`,

  `What did the cop say to their tummy ?
  You're under a vest!`,

  `Which bird is always out of breath ?
  A puffin!`,

  `What's a witch's favorite school subject ?
  Spelling!`,

  `How do you talk to a giant ?
  Use big words!`,

  `Where do sheep go to get their hair cut ?
  The baa - baa shop!`,


  `What gets wetter the more that it dries ?
    A towel!`,

  `What do you call a line of rabbits jumping backwards ?
  A receding hare - line!`,

  `What has four wheels and flies ?
  A garbage truck!`,

  `What did one eye say to the other eye ?
  Between us, something smells!`,

  `What did the sink say to the toilet ?
  Wow, you look really flushed!`,

  `What did the traffic light say to the car ?
  Look away, I’m about to change!`,

  `What can you catch, but never throw?
  A cold!`,

  `What has more letters than the alphabet ?
  The post office!`,

  `What's black and white and read all over?
A newspaper!`,

  `What's black and white and red all over?
A sunburned zebra!`,

  `What do you call a dinosaur with bad vision ?
    A Do - you - think - he - sarus!`,

  `What runs around a baseball field but never moves ?
  A fence!`,

  `What is brown and hairy and wears sunglasses ?
  A coconut on vacation!`,

  `Which dinosaur has the best vocabulary ?
  The thesaurus!`,

  `What time is it when an elephant sits on your fence ?
  Time to get a new fence!`,

  `What's the difference between boogers and broccoli?
Kids don't eat broccoli!`,

  `What did the apple say to the worm ?
  Nothing, apples can't talk!`,

  `What musical instrument can you find in the bathroom ?
  A tuba toothpaste!`,

  `What do you get when you cross a centipede with a parrot ?
  A walkie talkie!`,

  `What do you call two bananas ?
  A pair of slippers!`,

  "What do you call a bee that can’t make up its mind? A maybe.",

  "How much money does a pirate pay for corn? A buccaneer.",

  "What do you call a pig that does karate? A pork chop.",

  "What do you call an everyday potato? A commentator.",

  `What do you call an alligator in a vest ? An investigator.`,

  `What’s the difference between a hippo and a Zippo? A hippo is really heavy, and a Zippo is a little lighter.`,

  `What did the atom say after losing an electron? 'I really gotta keep an ion them.`,

  `Why did the scarecrow win an award? Because he was outstanding in his field.`,

  `Did you hear about the cheese factory that exploded in France? There was nothing left but de Brie.`,

  `Why did the can crusher quit his job? Because it was soda pressing.`,

  `How do astronomers organize a party? They planet.`,

  `What did the nut say while chasing the other nut? I’m a cashew.`,

  `When does a joke become a dad joke? When it’s apparent.`,

  `What do dentists call their x-rays? Tooth pics!`,

  `Why did the melon jump into the lake? It wanted to be a water-melon.`,

  `Why was 6 afraid of 7? Because 7 ate 9!`,

  `Grandma: Back in our days, you could buy bread, milk, soaps, spices, eggs, meat, all for a dollar.
Little Kid: You can’t do that now. They have CCTVs everywhere!`,
  
  `When your teacher asks “Where’s your homework?” It took a sick day. It had too many problems.`,

  `You can’t trust atoms. They make up everything!`,

  `Why won’t it hurt if you hit your friend with a 2-liter of soda? Because it’s a soft drink!`,

  `Why do mushrooms get invited to all the best parties? He was a fun-gi!`,

  `What has four wheels and flies? Garbage truck`,

  `I got fired from my job at the bank today. An old lady came in and asked me to check her balance, so I pushed her over.`,

  `What do you call an elephant that doesn’t matter? An irrelephant.`,

  `Dad, can you put my shoes on? No, I don’t think they’ll fit me.`,

  `Why do you smear peanut butter on the road? To go with the traffic jam.`,

  `Where did Napoleon keep his armies? In his sleevies.`,

  `Did you hear about the actor who fell through the floorboards? He was just going through a stage.`,

  `Did you hear about the claustrophobic astronaut? He just needed a little space.`,

  `Did you hear about the guy who stole a calendar? He got 12 months; they say his days are numbered.`,

  `I used to be addicted to soap, but I’m clean now.`,

  `There are two types of people in the world, those who can extrapolate from incomplete data.`,

  `What’s the best part about living in Switzerland? Not sure, but the flag is a big plus.`,

  `Why did the dog cross the road? To get to the barking lot!`,

  `What do you call a bear with no teeth? A gummy bear.`,

  `A nurse told me, “Sorry for the wait!” I replied, “It’s alright, I’m patient.”`,

  `Working in a mirror factory is something I could totally see myself doing.`,

  `I’m terrified of elevators, so I’m going to start taking steps to avoid them.`,

  `Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.`,

  `Why are pirates called pirates? Because they arrrr!`,

  `Helvetica and Times New Roman walk into a bar. “Get out of here!”, shouts the bartender. “We don’t serve your type.”`,

  `Can February March? No, but April May!`,

  `What do you call a cold dog? A chili dog!`,

  `Why was the torch happy? It was lit.`,

  `What gets more wet the more it dries? A towel!`,

  `Why did the banana go to the doctor? Because it did not peel well.`,

  `Why should you never trust stairs? They’re always up to something.`,

  `Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.`,

  `A bear walks into a bar and says, “Give me a whiskey and … cola.”
“Why the big pause?”, asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”`,
  
  `What did one ocean say to the other ocean? Nothing, they just waved.`,

  `Why were the parents so afraid of the energy drink? It was a Monster!`,

  `What kind of shorts do clouds wear? Thunder pants`,

  `Did you hear about the actor who fell through the floorboards? He was just going through a stage.`,

  `What do pampered cows produce? Spoiled milk.`,

  `Why did the cat run away from the tree? It was afraid of the bark!`,

  `What do you call an alligator in a vest? An investigator`,

  `What does a house wear? Address!`,

  `How do you fix a broken tomato? Tomato paste!`,

  `The first rule of the Alzheimer’s club is… Wait, where are we again?`,

  `How many tickles does it take to get an octopus to laugh? Ten tickles.`,

  `Why did the farmer win an award? He was out standing in his field!`,

  `I told my doctor that I had broken my arm in two places. He told me to stop going to those places.`,

  `Why do melons have weddings? Because they cantaloupe!`,

  `Just went to an emotional wedding — even the cake was in tiers.`,

  `My teachers told me I’d never amount to much since I procrastinate so much. I told them, “Just you wait!”`,

  `How much teddy bears never want to eat anything? Because they’re always stuffed.`,

  `What’s a plant’s favorite drink? Root beer!`,

  `Who cleans the ocean? Mer-maids!`,

  `A magician was driving down the road and turned into a driveway.`,

  `Just finished a box of Corn Flakes. You can check out my cereal killer Netflix special next Tuesday.`,

  `A horse walks into a bar. The bartender says, “Why the long face?”`,

  `I stayed up all night and tried to figure out where the sun was. Then it dawned on me.`,

  `I invented a new word! Plagiarism!`,

  `Knock! Knock! Who’s there? Candice. Candice who? Candice door open, or am I stuck out here?`,

  `Knock knock. Who’s there? Jimmy. Jimmy who? Jimmy crack corn, and I don’t care!`,

  `Knock knock. Who’s there? Amish. Amish who? Really? You don’t look like a shoe.`,

  `Knock, knock. Who’s there? Luke. Luke who? Luke through the peep hole and find out.`,

  `Knock, knock Who’s there? Nun Nun who? Nun of your business!`,

  `Knock knock. Who’s there? Lettuce. Lettuce who? Lettuce in it’s cold out here.`,

  `Knock knock. Who’s there? Snow. Snow who? Snow use. I forgot my name again!`,

  `Knock knock. Who’s there? Closure. Closure who? Closure mouth while you’re chewing!`,

  `Knock, knock. Who’s there? Alice. Alice who? Alice fair in love and war.`,

  `Knock knock. Who’s there? Olive. Olive who? Olive, you and I don’t care who knows it!`,

  `Knock! Knock! Who’s there? Robin. Robin who? Robin you—hand over the cash!`,

  `Knock, knock. Who’s there? Euripides. Euripides who? Euripides clothes, you pay for them!`,
  
  `Knock! Knock! Who’s there? Stopwatch Stopwatch who? Stopwatch you’re doing and pay attention!`,

  `Knock knock. Who’s there? Rhino! Rhino who? Rhino, every knock knock joke there is!`,

  `Knock knock. Who’s there? Broken pencil. Broken pencil who? Never mind, there’s no point!`,

  `What do you call the process of aging for snowmen? Evaporation.`,

  `A good friend can finish your sentences… a best friend will do the same, but make it sound 10 times dirtier`,

  `Father: Son, did you give fresh water to your pet goldfish?
Son: Nope. They are yet to finish the water which I gave to them last week!`,
  
  `Kid: Where do pirates go when they are sick?
Dad: Where?
Kid: They go to the dock!`,
  
  `Wife: Here, look at that drunk guy. We were supposed to get married 10 years ago.
Me: Wow, he is still celebrating. Lucky guy!`,
  
  `Boy: How many lips does a flower have?
Dad: How many?
Boy: Tu-lips!`,
  
  `Boy: How does a squid prepare itself for battle?
Me: How?
Boy: It goes to a battle well-armed!`,
  
  `Student: Do you know what you will get if you ever cross a vampire with a snowman?
Teacher: I don’t know? What will you get?
Student: You will get a frost bite!`,
  
  `What do you have when both your son and daughter text you to lend them $100 each? You have $200 and two unread messages on your cell phone!`,

  `What did I reply when my wife texted that she is having a terribly stressful day at work and is losing her entire mind? I texted back, ‘Relax. It’s just in your head’.`,

  `What did the college student do when he needed to get in-text citations for his paper on insurance and finance? He decided that he would get a quote!`,

  `Me: It’s movie night. Are we having any friends over?
Rick: Ten people are coming. We need thirteen more.
Me: Why?
Rick: Because it is a 13+ movie.`,
  
  `Father: Son, did you give fresh water to your pet goldfish?
Son: Nope. They are yet to finish the water which I gave to them last week!`,
  
  `Little boy: Which is the only instrument that is an absolute favorite among all skeletons?
Little girl: No idea. What is it?
Little boy: It is a trom-bone!`,
  
  `Husband: What is the best way to define a pile made out of simply cats?
Wife: What do you call it?
Husband: You must call it a meow-ntain!`,
  
  `A and C were going to prank their friend…But they just letter B.`,

  `Why was everyone so tired on April 1st? Because they just finished a long 31-day March.`,

  `What’s the biggest difference between Thanksgiving and April Fool’s Day? On one, you’re thankful, but on the other, you’re prankful.`,

  `I’m going to pull an April Fools’ Day prank on my landlord by not paying rent. Rent isn’t due today; you’re just kidding!`,

  `Who needs a day for the fools when you’re surrounded by them all year?`,

  `April 1 is named April Fools’ Day after Steve April. He was born on the 1st of April back in 1579. He ran many businesses and was actually quite prosperous in his ventures, but he lost all of his father’s assets late in his life. After this, everyone started calling him the father of fools. At one point, he even married a woman who’s older than him, and she divorced Steve because he was so foolish. He used to read and believe all kinds of fake stories, just like you are now. Happy April Fools’ Day, you gullible fool.`,

  `April Fools’ Day is canceled this year because everything after March of 2020 has been a prank.`,

  `I would wish you a happy birthday, but I can’t tell if you’re lying about being born on April 1.`,

  `Who needs April Fools’ when your whole life is a joke?`,

  `I don’t always joke on April Fools’ Day. Just kidding, I do.`,

  `The easiest targets to prank on April Fools’ Day? People born on March 31. Why? Because they were literally born yesterday.`,

  `April 1: The only day people question whether the internet is lying to them.`,

  `You should know that no one understood it was an April Fools’ joke… Because no one expected you to have a sense of humor.`,

  `What did April Fools’ Day say after it won an award? Prank you!`,

  `Which day of the year do monkeys like best? The first of Ape-ril!`,

  `Marriage is like going to a restaurant. You order what you want, then when you see what the other person has, you wish you had ordered that.`,

  `Why are husbands like lawn mowers? They’re hard to get started, emit foul odors and don’t work half the time!`,

  `What is the penalty for bigamy? Two mothers-in-law.`,

  `My wife says I can join your gang but I have to be home by 9.`,

  `Wife renewed me for another season.`,

  `Just asked my wife what she’s “burning up for dinner” and it turned out to be all of my personal belongings.`,

  `The groom is the kind of guy you don’t have to worry about introducing your parents to. That’s why (Bride) didn’t worry about introducing (Groom) to hers until today.`,

  `Wife: “Our new neighbor always kisses his wife when he leaves for work. Why don’t you do that?” Husband: “How can I? I don’t even know her.”`,

  `Marriage is like deleting all the apps on your phone except one.`,

  `I need to start paying closer attention to stuff. Found out today my wife and I have separate names for the cat.`,

  `At every party, there are two kinds of people: those who want to go home and those who don’t. The trouble is, they are usually married to each other.`,

  `Any husband who says, ‘My wife and I are completely equal partners’, is talking about either a law firm or a hand of bridge.`,

  `A retired husband is often a wife’s full-time job.`,

  `Marriage is when a man and woman become one. The trouble starts when they try to decide which one.`,

  `At the cocktail party, one woman said to another, “Aren’t you wearing your wedding ring on the wrong finger?” The other replied, “Yes, I am, I married the wrong man.”`,

  `My husband cooks for me like I’m a god – by placing burnt offerings before me every night.`,

  `My wife keeps telling everyone that she can read their minds, but she never can. She’s telepathetic.`,

  `When I first started dating my wife she asked me what some of my dreams were. I told her one was about a T-Rex who didn’t get a job because he couldn’t tie a tie. She meant goals.`,

  `My wife made me a green hamburger today to celebrate St Patrick’s Day. I asked her how she colored it and she said she didn’t know what I was talking about.`,

  `Man is incomplete until he is married. Then he is really finished.`,

  `When a newly married man looks happy, we know why. But when a ten-year married man looks happy, we wonder why.`,

  `Of course, the groom has always been incredibly image conscious, but this morning was particularly bad – he spent three hours in the bathroom! To get an idea of what that’s like, why not agree to make a wedding speech?`,

  `Marriage is full of surprises but it’s mostly just asking each other, “Do you have to do that right now?”`,

  `Do you know why the king of hearts married the Queen of hearts? They were perfectly suited for each other.`,

  `Whenever my wife packs me a salad for lunch all I wanna know is what I did wrong.`,

  `The five most essential words for a healthy, vital relationship are “I apologize” and “You are right.”`,

  `On my wedding day, my mom told my bride, “No refunds, no exchanges on sale items.”`,

  `My doctor told me I needed to break a sweat once a day so I told him I’d start lying to my wife..`,

  `Husband: “Why do you keep reading our marriage license?”
  Wife: “I’m looking for an expiration date.”`,

  `What are a married man’s two greatest assets? A closed mouth and an open wallet.`,

  `Arguing with your wife or husband is a lot like trying to read the ‘Terms of Use’ on the internet. In the end, you just give up and go ‘I agree.’`,

  `What do wives and hurricanes have in common? On arrival, they’re wet and wild. When they leave, they take the house and car with them.`,

  `How is a wife like bacon? They both look, smell, and taste amazing. They also both slowly kill you.`,

  `What’s the difference between “incomplete” and “finished”? A man without a wife feels incomplete. Once married, he’s finished.`,

  `I asked my wife to let me know next time she has an orgasm.
She said she doesn’t like to bother me when I’m at work.`,
  
  `What’s the difference between a relationship and a video game?
They both start off fun and easy, then get a litter harder. If you make it to the end without breaking, everyone is shocked.`,
  
  `Why do wives use twice as many words as their husbands? Because they always have to repeat themselves.`,

  `What do a wife and a grenade have in common? They both leave you hurt when you pull off the ring.`,

  `Wife: Let’s go out and have fun tonight!
Husband: Okay but, if you get back before me, leave the light on.`,
  
  `What’s the difference between a bride-to-be and groom-to-be? A bride-to-be wants a shower. A groom-to-be wants to get as dirty as possible before his Big Day.`,

  `Why didn’t the man speak to his wife for years on end? She told him never to interrupt.`,

  `What’s the secret to a happy marriage? Find a woman who can cook and clean. A woman who’s an animal in bed. A woman with lots of money. Make sure these three women never meet.`,

  `Wife: “I love you.” Husband: “Is that you or the wine talking?”`,

  `After a quarrel, a wife said to her husband, “You know, I was a fool when I married you.” The husband replied, “Yes, dear, but I was in love and didn’t notice.”`,

  `A trucker who has been out on the road for two months stops at a brothel outside Atlanta. He walks straight up to the Madam, drops down $500 and says, “I want your ugliest woman and a grilled cheese sandwich!” The Madam is astonished. “But sir, for that kind of money you could have one of my prettiest ladies and a three-course meal.” The trucker replies, “Listen darlin’, I’m not horny – I’m just homesick.”`,

  `I belong to Bridegrooms Anonymous. Whenever I feel like getting married they send over a lady in a housecoat and curlers to burn my toast for me.`,

  `The most dangerous food is wedding cake.`,

  `My wife Mary and I have been married for forty-seven years, and not once have we argued serious enough to consider divorce; murder, yes, but divorce, never.`,

  `An old couple is ready to go to sleep. The old man lies on the bed, but the old woman lies down on the floor. The old man asks, ”Why are you going to sleep on the floor?” The old woman says, “Because I want to feel something hard for a change.”`,

  `It was a perfect marriage. She didn’t want to, and he couldn’t.`,

  `How do you keep your husband from reading your e-mail? Rename the mail folder “Instruction Manuals.”`,

  `Q: What is the difference between Tiger Woods and Santa Claus?
A: Santa stops after three hos.`,
  
  `A man inserted an ad’ in the classified: “Wife wanted”. Next day he received a hundred letters. They all said the same thing: “You can have mine.”`,

  `How do most men define a wedding? An expensive way to get laundry done for free.`,

  `What is the ideal marriage? One between a deaf man and a blind woman`,

  `Wife: Why are you home so early? Husband: My boss told me to go to hell.`,

  `Q: What kind of institution is marriage?
A: One where a man loses his Bachelor’s Degree and the woman gets her Masters.`,
  
  `Why is marriage like a nice suit? At first, it’s a perfect fit, but after a while, you need alterations.`,

  `How hard is it to lose a wife? Nowadays, it is almost impossible!`,

  `The difference between marriage and death? Dead people are free.`,

  `Marriage is what kind of sport? One where the trapped animal has to buy the license!`,

  `The boss says to his worker: “Marcus, I know that your salary is not enough to get married … but you must believe me that one day you will thank me.”`,

  `Wife: “How would you describe me?”
Husband: “ABCDEFGHIJK.”
Wife: “What does that mean?”
Husband: “Adorable, beautiful, cute, delightful, elegant, fashionable, gorgeous, and hot.”
Wife: “Aw, thank you, but what about IJK?”
Husband: “I’m just kidding!”`,
  
  `Is Google male or female?
A: Female, because it doesn’t let you finish a sentence before making a suggestion.`,
  
  `A lady comes home from her doctor’s appointment grinning from ear to ear. Her husband asks, “Why are you so happy?” The wife says, “The doctor told me that for a forty-five-year-old woman, I have the breasts of a eighteen year old.” “Oh yeah?” quipped her husband, “What did he say about your forty-five-year-old ass?” She said, “Your name never came up in the conversation.”`,

  `Wife: “In my dream, I saw you in a jewelry store and you bought me a diamond ring.”
Husband: “I had the same dream and I saw your dad paying the bill.”`,
  
  `Just read that 4,153,237 people got married last year, not to cause any trouble but shouldn’t that be an even number?`,

  `I asked my wife if she ever fantasizes about me, she said yes – about me taking out the trash, mowing the lawn, and doing the dishes.`,

  `A little boy asked his father, “Daddy, how much does it cost to get married?” Father replied, “I don’t know son, I’m still paying.”`,

  `Women might be able to fake orgasms, but men can fake a whole relationship.`,

  `A married couple are out one night at a dance club. There’s a guy on the dance floor giving it large: break dancing, moon walking, back flips, the works. The wife turns to her husband and says, “See that guy? Twenty years ago he proposed to me and I turned him down.” The husband says, “Looks like he’s still celebrating!”`,

  `One day, a man came home and was greeted by his wife dressed in stunningly sexy lingerie. “Tie me up,” she purred, “And you can do anything you want.” So he tied her up and went golfing.`,

  `A man approached a very beautiful woman in a large supermarket and said, “I’ve lost my wife here in the supermarket. Can you talk to me for a couple of minutes?”
“Why do you want to talk to me?” she asked puzzled. “Because every time I talk to a beautiful woman, my wife appears out of nowhere.`,
  
  `If a wife is laughing at her husband’s jokes, it means they have guests.`,

  `A husband asks his wife, “Will you marry after I die?” The wife responds, “No, I will live with my sister.” The wife asks him back, “Will you marry after I die?” The husband responds, “No, I will also live with your sister.”`,

  `My wife’s an Earth sign. I’m a Water sign. Together we make mud!`,

  `A man and a woman are sleeping together when suddenly there is a noise in the house, and the woman rolls over and says, “It’s my husband, you have to leave!” The man jumps out of bed, jumps through the window, crawls through the bushes, and out on the street, when he realizes something. He goes back to the house and says to the woman, “Wait, I’m your husband!” She replies giving him a dirty look, “So why did you run?”`,

  `In my house I’m the boss. My wife is just the decision maker.`,

  `The best way to get most husbands to do something is to suggest that perhaps they’re too old to do it.`,

  `A husband, who has six children, begins to call his wife “mother of six” rather than by her first name. The wife, amused at first, chuckles. A few years down the road, the wife has grown tired of this. “Mother of six,” he would say, “what’s for dinner tonight? Get me a beer!” She gets very frustrated. Finally, while attending a party with her husband, he jokingly yells out, “Mother of six, I think it’s time to go!” The wife immediately shouts back, “I’ll be right with you, father of four!”`,

  `A man goes to see a wizard and says, “Can you lift a curse that a priest put on me years ago?” “Maybe,” says the wizard, “Can you remember the exact words of the curse?” The man replies, “I pronounce you man and wife.”`,

  `If a man opens the car door for his wife, you can be sure of one thing: either the car is new or the wife.`,

  `A bachelor is a guy who never made the same mistake once.`,

  `My mother buried three husbands, and two of them were just napping.`,

  `My wife and I were happy for twenty years. Then we met.`,

  `What’s the difference between a boyfriend and a husband?
About 30 pounds.`,
  
  `Never go to bed mad. Stay up and fight.`,

  `Marriage is a three-ring circus. First the engagement ring, then the wedding ring, then the suffering.`,

  `My wife is a light eater … as soon as it’s light, she starts to eat.`,

  `A good wife always forgives her husband when she’s wrong.`,

  `Husbands are like fires, they go out when unattended.`,

  `I think men who have a pierced ear are better prepared for marriage. They’ve experienced pain and bought jewelry.`,

  `A husband is what’s left of the lover after the nerve has been extracted.`,

  `I found my wife in bed naked one day next to a Vietnamese guy and a black guy. I took a picture and sent it to Benetton. You never know.`,

  `We sleep in separate rooms, we have dinner apart, we take separate vacations – we’re doing everything we can to keep our marriage together.`,

  `A doctor tells a woman she can no longer touch anything alcoholic. So she gets a divorce.`,

  `Marriage is the triumph of imagination over intelligence. Second marriage is the triumph of hope over experience.`,

  `I just saw two nuclear technicians getting married. The bride was radiant and the groom was glowing.`,

  `What do you call two spiders that just got married? Newly-webs.`,

  `Did you hear about the two bed bugs that were lovers? They got married in the spring.`,

  `Marriages are made in heaven. Then again, so are thunder, lightning, tornadoes, and hail.`,

  `Today’s wedding is a love match, pure as simple. She’s pure, and he’s simple.`,

  `My wife and I always compromise. I admit I’m wrong and she agrees with me.`,

  `Why did the moth stick to the bride’s face? Because she was glowing.`,

  `Did you hear about the newlyweds who stayed up all night waiting for their sexual relations to arrive?`,

  `The bride looks absolutely stunning, and the groom looks absolutely stunned!`,

  `Only after getting married you realize that those husband-wife jokes were not just jokes.`,

  `Some people say their wedding was the best day of their lives. I guess they’ve never had two candy bars fall out of the vending machine simultaneously.`,

  `Wife (in front of the mirror): “I feel ugly. Compliment me to make me feel better.”
Husband: “Your vision is absolutely perfect.”`,
  
  `Single guys often dream about having a smart, beautiful, caring wife. So do most married men.`,

  `My wife asked for her Chapstick, but I accidentally handed her the glue stick. She is not talking to me yet.`,

  `Being married to my wife is the best feeling ever because she is the only person who loves to steal my hoodies and blankets from me, leaving me cold.`,

  `How are marriages like fat people? Most of them don’t work out.`,

  `Two spiders got married today, right here. I also heard that they had met each other on the web.`,

  `I’ve spent five years searching for my husband’s killer. Still can’t find anyone to do it.`,

  `“Honey, I heard the jumper cables are getting divorced. Now ask why?”
“Why?”
“Because they did not have the same spark as before.”`,
  
  `I have quite poor eyesight in general, so once I asked my husband if I looked fat, he replied that my eyesight had improved apparently.`,

  `A wife once told his husband, “If a ship was sinking and there was only one life vest in the entire ship, I would miss you dearly, honey.”`,

  `Do you know why our society forbids you to get married twice? Because it would be cruel and unjust to go through the same torture twice.`,

  `Potato Man is the perfect husband for any woman. He is cute, funny, and if he looks at any other woman, you can quickly rearrange his face.`,

  `Do you know a common thing a grenade and my wife share? If I remove the ring, the whole house will turn to dust.`,

  `A magician made her husband vanish into thin air. How you may ask? Simple, she asked for the truth.`,

  `The husband wanted space from his wife. The wife told him, join NASA.`,

  `I think I married another person’s soul mate; I wish they’d come and take her away.`,
  
  `The secret to turning a fox into an elephant is to marry it.`,

  `Men are dumb… and it has been quite clear to me for some time now that I married their President.`,

  `If you want to marry a rich, smart, and beautiful woman—you will end up marrying three times.`,

`My wife has permitted me to join a biker gang, but my curfew is at 9.`,

  `The main difference between a person’s wife and a battery is that the battery contains a positive side.`,

  `You are giving a reasonable answer for once, this means I have to increase my medicine dosages.`,

`Before telling my wife about a mistake that I have made, I tend to take both of her hands to hold her, that way, she won’t have anything to hit me with.`,
  
  `It’s a punishment to love your wife and a sin to love another man’s wife.`,

  `My neighbor and his wife were arguing for the past couple of hours about whether they were fighting or not.`,

  `Congratulating someone on their marriage is like congratulating them on a mistake.`,

  `Love is a lot of chemistry, so if your wife considers you toxic waste, you now know why.`,

  `I saw my wife putting on her sexy underwear this morning. This can only mean one thing.
It’s laundry day.`,
  
  `My wife and I always compromise. I admit I’m wrong, and she agrees with me.`,

  `What’s the best way to love thy neighbor? When her husband’s away on business.`,

  `I had my credit card stolen the other day, but I didn’t bother to report it because the thief spends less than my wife.`,

  `What four letter words can still shock the most progressive of today’s brides? Iron, dust, wash, cook and bake.`,

  `Everyone asks me what the secret to a long, happy marriage is. To that, I reply, “I am still figuring out the secret myself.`,

  `Dude: My wife left me for my best friend.
Dude’s buddy: I thought I was your best friend.
Dude: Now he is, obviously.`,
  
  `Your husband is the only “child” who ends up not moving out after “growing up.”`,

  `I agree this has been quite an emotional day for all of us, so emotional that even the wedding cake is in “tiers.”`,

  `There is only a teeny tiny difference between marriage and love, where love tends to be blind, marriage is certainly the eye-opener that everyone requires.`,

  `How did the Queen Bee end up getting married? The answer is simple, she ended up finding her honey.`,

  `Women get married to men because they believe they can change someday, but men get married to women because they think they will never change. The coincidence lies in the fact that they are both wrong.`,

  `Yesterday I asked my husband where he wants to go for our upcoming anniversary. To which he replies, “Somewhere new, somewhere where I haven’t yet been.” I told him, “Well then, how about going to the kitchen?”`,

  `Christmas was around the corner, so I had to ask my wife what she wanted. She then told me that nothing in this world would make her happier than a pair of diamond earrings. So, I got her nothing.`,

  `If marriage is an institution and love is blind, then is love marriage similar to going to a blind institution?`,

  `A wife saw her husband standing on a weight scale. He sucked up his stomach to look down. The wife exclaimed, “Ha ha, that’s never going to help.” The husband said, “of course it does, this way, I can see what is on the scale.”`,

  `A man broke out of the prison after five long years, and he finally goes back home all exhausted and filthy, his wife asks, “Oh no, darling where have you been all this time? You had escaped seven hours ago!”`,

  `What keeps running but doesn’t reach the destination? A fridge.`,

  `Which factory always sells good products? Satis-factory.`,

  `Birds have the super power of sticking to each other using Vel-cro.`,

  `The person who irons clothes, is called? Super hero. How? Because he is Iron man.`,

  `Egg’s jokes don’t land on time because they crack mid-way.`,

  `Bees have sticky hair? Because they use honeycombs.`,

  `Where can you find a grandma in a hurry? Insta-gram!`,

  `Why won't it hurt if you hit your friend with a 2-liter of soda? Because it's a soft drink!`,

  `What's an android's favorite dessert? First it was a cupcake, then a donut, then eclair, then froyo, gingerbread, honeycomb, ice cream sandwich, jelly bean, kit kat, lollipop, marshmallow, nougat, oreo, then pie, but now it doesn't like dessert at all!`,

  `When does a joke stop being funny? When it becomes apparent.`,

  `Which dinosaur has smaller arms than a T-Rex? A thesaurus.`,

  `What do you call the process of aging for snowmen? Evaporation.`,

  `What did the teacher shout when she opened the classroom on the first day of school? Supplies!`,

  `What's gray and rocky? A rock.`,

  `When your teacher asks "Where's your homework?" It took a sick day. It had too many problems.`,

  `Why did the cloud drop music notes instead of raindrops? It was a SoundCloud.`,

  `Why can't I finish this joke? I died.`,

  `What kind of shoes can fit a lot of feet in them? Vans.`,

  `Why was the torch happy? It was lit.`,

  `Why were the parents so afraid of the energy drink? It was a Monster!`,

  `Can you call my phone? I lost it. Sure, but it's not going to answer.`,

  `Just finished a box of Corn Flakes. You can check out my cereal killer Netflix special next Tuesday.`,

  `Why would anyone want to be the tiger king when you could be the lion king? I bet Carole killed Mufasa!`,

  `I'm so good at math, I can take this class with my eyes closed.`,

  `I watched so many episodes of the Mandalorian, I'm feeling Dizzney!`,

  `That awkward moment when you get a hand cramp and end up waving at your teacher in the middle of a lecture.`,

  `That embarrassing moment when you stretch, and it looks like you dabbed.`,

  `I'm thinking of changing my name to (insert first name) the creator. Friends: "What did you create?" My new name.`,

  `When someone does a dab, say "Don't do that again, I can only handle a little dab."`,

  `I made my bed. Now I have to sleep on the couch so I never have to make it again.`,

  `Luke comes home from his first day of school, and his mother asks, “What did you learn today?”
“Not enough,” Luke replies. “They said I have to go back tomorrow.”`,
  
  `Nate: Why was school easier for cave people?
Kate: Why?
Nate: Because there was no history to study!`,
  
  `A book never written: “The Best Subject in School” by Jim Class.`,

  `David: Why did the broom get a poor grade in school?
Dan: I don’t know. Why?
David: Because it was always sweeping during class!`,
  
  `Luke: Why did the M&M go to school?
Stan: I’m stumped.
Luke: Because he really wanted to be a Smartie!`,
  
  `Chad: Why do magicians do so well in school?
Josh: I don’t know. Why?
Chad: They’re good at trick questions.`,
  
  `Jacob: Why was the teacher wearing sunglasses to school?
Leonard: Why?
Jacob: She had bright students!`,
  
  `A book never written: “High School Math” by Cal Q. Luss.`,

  `Joe: What’s the king of all school supplies?
Moe: I don’t know. What?
Joe: The ruler.`,
  
  `Tom Swiftie: “We have too many quizzes in school!” Tom said testily.`,

  `Teacher: Class, we will have only half a day of school this morning.
Class: Hooray!
Teacher: We will have the other half this afternoon.`,
  
  `Stevie: Hey, Mom, I got a hundred in school today!
Mom: That’s great. What in?
Stevie: A 40 in Reading and a 60 in Spelling.`,
  
  `Hunter: What has given Mr. Bubbles nightmares since elementary school?
Josh: Beats me.
Hunter: Pop quizzes!`,
  
  `What kind of school do you go to if you’re…
…an ice cream man? Sundae school.
…a giant? High school.
…a surfer? Boarding school.
…King Arthur? Knight school.`,
  
  `Mom: What did you do at school today?
Mark: We did a guessing game.
Mom: But I thought you were having a math exam.
Mark: That’s right!`,
  
  `Teacher: Donald, what is the chemical formula for water?
Donald: H-I-J-K-L-M-N-O.
Teacher: What are you talking about?
Donald: Yesterday you said it was H to O.`,
  
  `Teacher: Daniel, I’ve had to send you to the principal every day this week. What do you have to say for yourself?
Daniel: I’m glad it’s Friday!`,
  
  `Phil: What makes a Cyclops such an effective teacher?
Cheryl: I don’t know.
Phil: He has only one pupil.`,
  
  `Teacher: Where are the Great Plains located?
Tommy: At the great airports!`,
  
  `Teacher: If you had 13 apples, 12 grapes, 3 pineapples and 3 strawberries, what would you have?
Billy: A delicious fruit salad.`,
  
  `Math teacher: A man from Los Angeles drove toward New York at 250 miles per hour and a man from New York drove toward Los Angeles at 150 m.p.h. Where did they meet?
Johnny: In jail!`,
  
  `Teacher: Tommy, can you tell us where the Declaration of Independence was signed?
Tommy: Yes, ma’am. At the bottom.`,
  
  `Jordan: My teacher says I have to write more clearly.
Mom: That’s a good idea, Jordan.
Jordan: No, it’s not. Then she’ll know I can’t spell.`,
  
  `Peter: What’s the difference between a teacher and a train?
Ted: What?
Peter: A teacher says, “Spit out that gum!” and a train says, “Chew! Chew!”`,
  
  `Teacher: Can anyone give me a sentence with a direct object?
Student: You are pretty.
Teacher: What’s the direct object?
Student: A good report card.`,
  
  `Teacher: Why can’t you work in an orange juice factory?
Student: I don’t know. Why?
Teacher: Because you can’t concentrate!`,
  
  `Johnny: Teacher, would you punish me for something I didn’t do?
Teacher: Of course not.
Johnny: Good, because I didn’t do my homework.`,
  
  `John: Knock, knock.
Justin: Who’s there?
John: Gladys.
Justin: Gladys, who?
John: Gladys the weekend—no homework!`,
  
  `Teacher: Why did you eat your homework, Joe?
Joe: Because I don’t have a dog.`
  
  
]



setInterval(() => {
  
  let  number = randomNumberGenerator( jokes.length )
  let dynamic = document.getElementById( "joke" ).innerHTML = jokes[ number ]
}, 10000);


