# MULTIPLICATIVE PERSISTENCE
* Multiply all the digits in a number
* Repeat until you have a single digit left
Example 1
277777788888899 → 2x7x7x7x7x7x7x8x8x8x8x8x8x9x9 = 4996238671872
4996238671872 → 4x9x9x6x2x3x8x6x7x1x8x7x2 = 438939648
438939648 → 4x3x8x9x3x9x6x4x8 = 4478976
4478976 → 4x4x7x8x9x7x6 = 338688
338688 → 3x3x8x6x8x8 = 27648
27648 → 2x7x6x4x8 = 2688
2688 → 2x6x8x8 = 768
768 → 7x6x8 = 336
336 → 3x3x6 = 54
54 → 5x4 = 20
20 → 2x0 = 0

A program that takes any whole number as input and then outputs the result of each step, starting with the input itself, until we hit a single digit. For 277777788888899 the output should be
277777788888899 4996238671872 438939648 4478976 338688 27648 2688 768 336 54 20 0
(Counting the number of steps is left as an exercise to the user).

Eg 2: 
25 10 0

Eg 3:
68889 27648 2688 768 336 54 20 0

Eg 4:
327 42 8