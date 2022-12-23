# Code Critique 

Peer reviews are a critical element of Frog's SLDC. We feel the ability to openly collaborate on a piece of code ensures quality contributions whilst providing an effective tool to develop the teams technical skills.

In this exercise we'd like to mimic a merge request scenario where you play the role of peer reviewer. Take a look at the code included in this folder, respond with comments and insights you feel relevant to the request.

Consider the contributor as a fellow developer with ~1-2 years experience. Their brief is to build a small CLI tool to support the acquisition and processing of data for consumption in 2 scenarios:
1. as a user, to validate the data/process
2. as a machine, to automate the process on a regular basis

The tool is likely to exist for a 2-3 month period as part of a data pipeline being used for a marketing campaign.

What we're looking to understand about you:
 - can you capture the broad stroke objectives of a piece of code?
 - how do you engage a developer when critiquing their contributions?
 - what you feel is important/relevant in the context of the task brief?

 As this is only a mock peer review, capture your feedback in a markdown document in a format that allows us to understand your comments with as much code context as possible, **see the example below**.

 > Line `#18`
 > ```
 > $t = 0;
 > ``` 
 > The use of `$t` as a variable name is vague, use a more descriptive name... _for xyz reasons_, _etc, etc_. For example: `$total = 0;`


 ## Testing the scripts
 There are various implementations of the same build included in the repository. **Choose a single implementation to critique** (in the language you're most comfortable with), each implementation will broadly share similar characteristics but there maybe nuances within that are language specific. 
 ### PHP (v7.0+)
 ```
 # php -f ./books.php
 # php -f ./books.php frog
 # php -f ./books.php frog n
 ```

 ### Node.js (v10.0+)
 ```
 # node books.js
 # node books.js frog
 # node books.js frog n
 ```
