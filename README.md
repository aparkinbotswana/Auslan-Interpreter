# Auslan Interpreter

The purpose of this program is to help bridge the communication gap between those who can sign with Auslan and those who cannot, in real time. Using the Leap Motion, a user is able to sign letters from the alphabet and have it translated to text and speech. Currently, the interpreter is able to recognise the letters A, B, C, D, E, I, O, P, U, X and Y. It is also capable of recognising the Letters G and S, with a little more difficulty.

My live, [Auslan Interpreter](https://aparkinbotswana.github.io/Auslan-Interpreter/) can be found here.

![Alt text](images/Auslan Interpreter.png)


## Known Bugs

- Currently, the application is only programed to use one Leap Motion. This places a limitation on its accuracy. As a result, the motion tracking can have difficulty tracking gestures and can take several tries before it is able to register a gesture. This is especially true for gestures which require one hand to partially cover the other. This can also lead to the interpretation of a letter other than the one intended.
