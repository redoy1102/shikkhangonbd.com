<template>
<div>

</div>
</template>

<script>
export default {
  name: "CProgramming",
  data(){
    return{
      sscVideos: [
        {
          id: 0,
          title: "Chapter-3 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/online-code-compiler"
        },
        // {
        //   id: 1,
        //   title: "Chapter-4 [Logarithm]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: "https://cutt.ly/ssc-chapter-4-logarithm"
        //
        // },
        {
          id: 2,
          title: "Chapter-7 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/introduction-of-c-programming"

        },

        {
          id: 3,
          title: "Chapter-9 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/start-c-program"
        },
        {
          id: 4,
          title: "Chapter-10 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/translator-program"
        },
        {
          id: 5,
          title: "Chapter-17 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/assembler"
        },
        {
          id: 6,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/compiler-interpreter"
        },
        {
          id: 7,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/algorithm-in-c-program"
        },
        {
          id: 8,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/flowChart-pseudoCode"
        },
        {
          id: 9,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/arithmetic-operators"
        },
        {
          id: 10,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/sum-of-2-numbers"
        },

        {
          id: 11,
          title: "Chapter-3 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/average-of-three-numbers"
        },
        {
          id: 12,
          title: "Chapter-4 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/perimeter-of-a-rectangle"

        },
        {
          id: 13,
          title: "Chapter-7 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/area-of-rectangle-and-triangle"

        },

        {
          id: 14,
          title: "Chapter-9 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/find-tax-from-annual-salary"
        },
        {
          id: 15,
          title: "Chapter-10 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/diameter-circumference-area"
        },
        {
          id: 16,
          title: "Chapter-17 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/if-else-syntax-or-code-structure"
        },
        {
          id: 17,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/if-else-with-example"
        },
        {
          id: 18,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/find-maximum-between-two-numbers"
        },
        {
          id: 19,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/find-positive-or-negative-number"
        },
        {
          id: 20,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/a-number-is-divisible-by-5-and-11-or-not"
        },
        {
          id: 21,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/find-even-or-odd-number-"
        },

        {
          id: 22,
          title: "Chapter-3 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/check-a-character-is-it-alphabet-digit-or-special-character"
        },
        {
          id: 23,
          title: "Chapter-4 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/uppercase-or-lowercase-letter"

        },
        {
          id: 24,
          title: "Chapter-7 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: " https://cutt.ly/check-a-character-is-alphabet-or-not"

        },

        {
          id: 25,
          title: "Chapter-9 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: " https://cutt.ly/find-leap-year"
        },
        {
          id: 26,
          title: "Chapter-10 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/find-vowel-or-consonant"
        },
        {
          id: 27,
          title: "Chapter-17 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/check-a-triangle-is-valid-or-not"
        },
        {
          id: 28,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/assignment-operators"
        },
        {
          id: 29,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: " https://cutt.ly/check-are-you-eligible-to-make-NID-Card-or-NOT"
        },
        {
          id: 30,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/check-two-integers-whether-they-are-equal-or-not"
        },
        {
          id: 31,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/if-else-problem-13"
        },
        {
          id: 32,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/if-else-problem-14"
        },

        {
          id: 33,
          title: "Chapter-3 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/loop-basic"
        },
        {
          id: 34,
          title: "Chapter-4 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/for-loop"

        },
        {
          id: 35,
          title: "Chapter-7 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/loop-problem-01"

        },

        {
          id: 36,
          title: "Chapter-9 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/difference-between-do-while-and-while-loop"
        },
        {
          id: 37,
          title: "Chapter-10 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/loop-problem-02"
        },
        {
          id: 38,
          title: "Chapter-17 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/loop-problem-03"
        },
        {
          id: 39,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/find-factorial--loop-problem-04"
        },
        {
          id: 40,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/loop-problem-05"
        },
        {
          id: 41,
          title: "",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          videoLink: "https://cutt.ly/loop-problem-06"
        },
        // {
        //   id: 42,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 43,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        //
        // {
        //   id: 44,
        //   title: "Chapter-9 [Trigonometry]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: "https://cutt.ly/start-c-program"
        // },
        // {
        //   id: 45,
        //   title: "Chapter-10 [Trigonometry]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: "https://cutt.ly/translator-program"
        // },
        // {
        //   id: 46,
        //   title: "Chapter-17 [Trigonometry]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: "https://cutt.ly/assembler"
        // },
        // {
        //   id: 47,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 48,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 49,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 50,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 51,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        //
        // {
        //   id: 52,
        //   title: "Chapter-17 [Trigonometry]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: "https://cutt.ly/assembler"
        // },
        // {
        //   id: 53,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 54,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 55,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 56,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 57,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        //
        //
        // {
        //   id: 58,
        //   title: "Chapter-17 [Trigonometry]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: "https://cutt.ly/assembler"
        // },
        // {
        //   id: 59,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 60,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 61,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 62,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 63,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        //
        // {
        //   id: 64,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 65,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 66,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 67,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },
        // {
        //   id: 68,
        //   title: "",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   videoLink: ""
        // },

      ],
    }
  }
}
</script>

<style scoped>

</style>
