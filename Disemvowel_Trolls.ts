// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

export class Kata {
    static disemvowel(str: string): string {
        // TS uses JS's built-in string.replace() for regular expression
        // g flag means global - replaces all matches, not just the first one
        // re: [aeiouAEIOU] matches all vowels
        return str.replace(/[aeiouAEIOU]/g, "");
    }
}

// static is a method which belongs to the class itself
// when do we need to create an object (instance)?
// when we have a class that represents something with state(data) and behaviorcommit