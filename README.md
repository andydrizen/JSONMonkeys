# JSON Monkeys
 
We are the JSON Monkeys, and we'd really like to mess with your backend.
 
# Why Do You Need Us?

So you've built yourself a fancy application that depends on a JSON API - good 
for you! But how resilient is your application? Will you just crash if the 
API suddenly returns you a `string` instead of an `integer`? What are you 
going to do if the server returns you a 500 HTML page? Mmmm? Thought about 
that?

We'll make sure you think about *everything* that could go wrong.  

# Who Are We?

Allow us to introduce ourselves,

* **Case** - Changes your strings to upper or lower case.
* **Empty** - Drains whatever you give him until it's empty, then gives it back to 
you. 
* **Garble** - likes to take your input and mess it up. If you're a string or a 
number, 
garble is going to bend you in ways you may not have imaginged.
* **Null** - Buddies with Empty, except gives you absolutely nothing back.
* **Opposite** - Switches your booleans. 
* **Passive** - This guy sucks. Doesn't do ANYTHING with your stuff. 
* **Swap** - will take something you thought you knew and loved, and sneakily 
change it for something else whilst you're not looking.

# Can I See an Example?

Sure. Here's an extreme example where we went crazy.

![Demo](https://raw.github.com/andydrizen/JSONMonkeys/master/demo.png)

# How Does this Work?

It's so easy. If you've got node installed, there are only a few steps:
 
 1. Clone us to `someDirectory`.
 2. Set the `serverURL` variable in `someDirectory/index.js`.
 3. In terminal navigate to `someDirectory` and let us loose by running: 
 `node index.js`.
 4. Finally, update your application to point to `http://localhost:8181` and 
 run it!

# Do We Really Cover Everything?

OK, so we might miss a few things. But you'll be *waaay* more resilient once
we've left. Plus, if you think we've missed something obvious, the guy that
manages us said something about making a pully request. No idea what he's
talking about, but you should do it. He loves that stuff. 