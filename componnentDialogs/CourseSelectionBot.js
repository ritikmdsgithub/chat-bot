
// const {WaterfallDialog, ComponentDialog} = require('botbuilder-dialogs');
// const {ConfirmPrompt, ChoicePrompt,  TextPrompt, NumberPrompt} = require('botbuilder-dialogs');

// const CHOICE_PROMPT = 'CHOICE_PROMPT';
// const CONFIRM_PROMPT = 'CONFIRM_PROMPT';
// const TEXT_PROMP = 'TEXT_PROMPT';
// const NUMBER_PROMP = 'NUMBER_PROMPT';
// const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


// class  CourseSelectionDialog extends ComponentDialog {
//     constructor() {
//         super("Choose Course");

//         this.addDialog(new TextPrompt(TEXT_PROMP));
//         this.addDialog(new ConfirmPrompt(CONFIRM_PROMPT));
//         this.addDialog(new  ChoicePrompt(CHOICE_PROMPT));
//         this.addDialog(new  NumberPrompt(NUMBER_PROMP, this.agePromptValidator));

//         this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [

//         ]));

//         this.firstStep.bind(this), // Ask confirmation if user wants 
//         this.getName.bind(this), // Get name from user
//         this.getNumberOfParticipants.bind(this), // Number of participa this.getDate.bind(this), // Date of reservation
//         this.confirmStep.bind(this), // Show summary of values entered b
//         this.summaryStep.bind(this)
//         this.initialDialogIdWATERFALL_DIALOG;
//     }

// }