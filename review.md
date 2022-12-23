# Code Review Summary
- Name : Aswindanu Anwar
- Role : Software Engineer
- Stack reviewed : Javascript (books.js)
- Datetime start : 23 December 2022 13:22
- Datetime end : 23 December 2022 14:35


 > Line `#7` and many others
 > The variable doesn't have `semicolon` as a closure, can be added e.g. like this one 
 > ```js
 > const fs = require('fs');
 > ```
 > Might be better to use formatter e.g. _prettier, beautify_ or any other extension on your end to automate this. 


 > Line `#13`, `#18`, 
 > Better not define `else` on this case, instead make it as a default value and only use `if` for condition. Can be changed more like this
 > ```js
 > let search = "frog";
 > if (typeof process.argv[2] !== 'undefined') search = process.argv[2];
 > ```

 > Line `#10 - #64`
 > Any reason why we're not using class object? It might be better to use class for the the script so that we can implement as an OOP and easily maintained on the next use
 > ```js
 > class Books {
 >      const searchBook = (params) => {
 >              // some code here   
 >      };
 >      const processData = (params) => {
 >              // some code here   
 >      };
 > };
 > ```

 > Line `#11`, `#13`, `#16`, `#18`, `#27`, `#43`
 > ```js
 > var search = process.argv[2]`
 > ```
 > Any reason why we're using `var`? It might be better to use `let` / `const` instead of `var` for better approach on the variable. You may refer to this documentation for a better understanding https://pandeysoni.medium.com/when-should-use-const-and-let-instead-of-var-in-javascript-ec2c3d7e5ca6. Can be changed like this
 > ```js
 > const YOUR_VARIABLE_HERE = ....;
 > let yourVariableHere = ....;
 > ```
 > Might be better to use quality extension e.g. _sonarlint_ or any other extension on your end to get better approach on this. 

 > Line `#16`, `#18`, `#22`, `#35`, `#40`, `#43`, `#46`, `#51`, `#54`, `#55`
 > Might be better to use camelCase for variable & function instead uf snakecase on Javascript syntax and PascalCase for class. Fur function can use Please refer to this documentation for a better understanding https://google.github.io/styleguide/jsguide.html#naming. Can be changed like this
 > ```js
 > const YOUR_VARIABLE_HERE = ....;
 > let yourVariableHere = ....;
 > const yourFuncHere = (params) => {};
 > class YourClassHere {};
 > ```

 > Line `#28`, `#32`, `#40`, `#44`, `#50`
 > Prevent inline function at some point. Function better to be defined in order to make it usable multiple times. Since we're using ES 6, it's better to use arrow function to be implemented on code. Can be seen the example here
 > ```js
 > const yourFuncHere = (params) => {
 >      // some code here   
 >  };
 > ```

 > Line `#33-34`
 > ```js
 > fs.writeFile("cache." + search + ".json", data, (err,data) => {
 >            });
 > ``` 
 > Unused inline function here. Please check again the correct behavior for this. Be aware with any injection for the script from user input, please clean the `search` and other string before executing fs, can use path.normalize that can be seen here https://nodejs.org/api/path.html#path_path_normalize_path. 
 > ```js
 > path.normalize(search);
 > // use search after this line
 >```

 > Line `#43`, `#45`
 > ```js
 > var t = 0;
 > ``` 
 > The use of `t` as a variable name is vague, use a more descriptive name. Can be changed like this `let total = 0;`

 > Line `#55`
 > ```js
 > {total_ebooks: total_ebook, t: t, num_found: data.num_found}
 > ```
 > We can simplify this object and use better naming convention to be e.g. like this
 > ```js
 > { totalEbooks, total, numFound: data.numFound }
 > ```