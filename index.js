#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";
import open from "open";
import inquirer from "inquirer";

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Visit my ${chalk.green.bold("website")}`,
                value: () => {
                    open("https://amitmerchant.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: `Send me an ${chalk.green.bold("email")}`,
                value: () => {
                    open("mailto:bullredeyes@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.cyanBright("        Amit Merchant"),
    work: `${chalk.white("A software engineer and tech blogger")}`,
    web: chalk.blueBright("https://amitmerchant.com"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyanBright("amit_merchant"),
    github: chalk.gray("https://github.com/") + chalk.greenBright("amitmerchant1990"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.yellowBright("amit-merchant"),
    npx: chalk.redBright("npx") + " " + chalk.whiteBright("amitmerchant"),

    labelWork: chalk.white.bold("       Work:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelWeb}  ${data.web}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I'm also a part-time YouTuber cause I love teaching."
        )}`,
        `${chalk.italic("When I'm bored, I work on my side projects.")}`,
        `${chalk.italic("Also, sketch sometimes.")}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "bold",
        borderColor: "yellow"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());