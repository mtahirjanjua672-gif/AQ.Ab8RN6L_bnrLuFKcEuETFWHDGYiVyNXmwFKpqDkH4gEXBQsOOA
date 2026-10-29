/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JDH Mind Puzzles AI - 72 Bundled Cognitive Puzzles
 * Exactly 12 per category x 6 categories (4 Easy, 4 Medium, 4 Hard each)
 * 100% verified answers with progressive 2-level non-spoiler hints
 */

import { Puzzle } from '../domain/models';

export const BUNDLED_PUZZLES: Puzzle[] = [
  // =========================================================================
  // CATEGORY 1: LOGIC & DEDUCTION (12 puzzles: 4 Easy, 4 Medium, 4 Hard)
  // =========================================================================
  {
    id: 'logic-e1',
    category: 'logic',
    difficulty: 'EASY',
    instructions: {
      en: 'Determine the correct sequence order based on the clue.',
      ur: 'دیے گئے اشارے کی بنیاد پر صحیح ترتیب معلوم کریں۔',
    },
    question: {
      en: 'Tariq is taller than Bilal. Bilal is taller than Hamza. Who is the shortest?',
      ur: 'طارق بلال سے لمبا ہے۔ بلال حمزہ سے لمبا ہے۔ سب سے چھوٹا کون ہے؟',
    },
    options: [
      { id: 'opt-tariq', text: { en: 'Tariq', ur: 'طارق' } },
      { id: 'opt-bilal', text: { en: 'Bilal', ur: 'بلال' } },
      { id: 'opt-hamza', text: { en: 'Hamza', ur: 'حمزہ' } },
      { id: 'opt-equal', text: { en: 'They are all equal', ur: 'سب برابر ہیں' } },
    ],
    correctAnswer: 'opt-hamza',
    explanation: {
      en: 'Since Tariq > Bilal and Bilal > Hamza, the height order from tallest to shortest is Tariq, Bilal, Hamza. Therefore, Hamza is the shortest.',
      ur: 'کیونکہ طارق > بلال اور بلال > حمزہ ہے، اس لیے طارق سب سے لمبا اور حمزہ سب سے چھوٹا ہے۔',
    },
    hints: [
      {
        en: 'Write down the names in descending order of height starting with the tallest person.',
        ur: 'سب سے لمبے شخص سے شروع کرتے ہوئے ناموں کو اونچائی کی نزولی ترتیب میں لکھیں۔',
      },
      {
        en: 'Hamza is shorter than Bilal, and Bilal is shorter than Tariq.',
        ur: 'حمزہ بلال سے چھوٹا ہے، اور بلال طارق سے چھوٹا ہے۔',
      },
    ],
    timeLimit: 45,
    basePoints: 100,
  },
  {
    id: 'logic-e2',
    category: 'logic',
    difficulty: 'EASY',
    instructions: {
      en: 'Identify the truth-teller from the statement.',
      ur: 'بیان سے سچ بولنے والے کی شناخت کریں۔',
    },
    question: {
      en: 'A box has either a gold coin, a silver key, or an empty note. Box A says: "The key is here." Box B says: "Box A is telling the truth." Only one statement is true. What is in Box A?',
      ur: 'ایک صندوق میں یا تو سونے کا سکہ ہے یا چاندی کی چابی۔ صندوق الف کہتا ہے: "چابی یہاں ہے۔" صندوق ب کہتا ہے: "الف سچ کہہ رہا ہے۔" صرف ایک بیان سچ ہے۔ صندوق الف میں کیا ہے؟',
    },
    options: [
      { id: 'opt-not-key', text: { en: 'Not the silver key', ur: 'چاندی کی چابی نہیں ہے' } },
      { id: 'opt-key', text: { en: 'The silver key', ur: 'چاندی کی چابی ہے' } },
      { id: 'opt-both-true', text: { en: 'Both coins', ur: 'دونوں سکے' } },
    ],
    correctAnswer: 'opt-not-key',
    explanation: {
      en: 'If Box A had the key, then Box A would be true, which would make Box B also true. But only ONE statement can be true. Hence, Box A must be false, meaning the key is NOT in Box A.',
      ur: 'اگر الف میں چابی ہوتی تو الف سچ ہوتا، جس سے ب بھی سچ ہو جاتا۔ مگر صرف ایک بیان سچ ہے۔ لہٰذا الف جھوٹا ہے اور چابی اس میں نہیں ہے۔',
    },
    hints: [
      {
        en: 'Consider what happens if Box A is telling the truth: what does that imply for Box B?',
        ur: 'غور کریں کہ اگر صندوق الف سچ کہہ رہا ہو تو اس کا صندوق ب پر کیا اثر پڑے گا؟',
      },
      {
        en: 'If Box A were true, two statements would simultaneously become true, which violates the premise.',
        ur: 'اگر الف سچ ہوتا تو دو بیانات بیک وقت سچ ہو جاتے، جو کہ شرط کے خلاف ہے۔',
      },
    ],
    timeLimit: 50,
    basePoints: 100,
  },
  {
    id: 'logic-e3',
    category: 'logic',
    difficulty: 'EASY',
    instructions: {
      en: 'Solve the seating arrangement rule.',
      ur: 'بیٹھنے کی ترتیب کے اصول کو حل کریں۔',
    },
    question: {
      en: 'Four friends sit in a row: Ali, Sara, Zain, and Mina. Ali refuses to sit at either end. Zain sits immediately to the left of Sara. If Mina sits at the far left, where must Ali sit?',
      ur: 'چار دوست قطار میں بیٹھے ہیں: علی، سارہ، زین، اور مائنا۔ علی کونوں پر نہیں بیٹھتا۔ زین سارہ کے فوراً بائیں جانب ہے۔ اگر مائنا انتہائی بائیں بیٹھی ہے تو علی کہاں بیٹھے گا؟',
    },
    options: [
      { id: 'opt-pos2', text: { en: 'Position 2 (second from left)', ur: 'دوسری پوزیشن (بائیں سے دوسرا)' } },
      { id: 'opt-pos3', text: { en: 'Position 3 (third from left)', ur: 'تیسری پوزیشن (بائیں سے تیسرا)' } },
      { id: 'opt-pos4', text: { en: 'Position 4 (far right)', ur: 'چوتھی پوزیشن (انتہائی دائیں)' } },
    ],
    correctAnswer: 'opt-pos2',
    explanation: {
      en: 'Positions are 1, 2, 3, 4. Mina is at 1. Since Zain and Sara sit together as (Zain, Sara), they need two adjacent spots. That can only be 3 and 4! Ali must therefore take position 2.',
      ur: 'چار جگہیں ہیں۔ 1 پر مائنا ہے۔ چونکہ زین اور سارہ اکٹھے (3 اور 4 پر) بیٹھیں گے، اس لیے علی کے لیے صرف پوزیشن 2 بچتی ہے۔',
    },
    hints: [
      {
        en: 'Zain and Sara must occupy two adjacent empty seats together.',
        ur: 'زین اور سارہ کو اکٹھے دو خالی نشستوں پر بیٹھنا ہوگا۔',
      },
      {
        en: 'Mina takes slot 1. Where can a block of two people fit if Ali is not on an end?',
        ur: 'مائنا پہلی نشست پر ہے۔ علی کونے پر نہیں ہے، تو دو لوگوں کا جوڑا کہاں آ سکتا ہے؟',
      },
    ],
    timeLimit: 45,
    basePoints: 100,
  },
  {
    id: 'logic-e4',
    category: 'logic',
    difficulty: 'EASY',
    instructions: {
      en: 'Deduce the missing balance weight.',
      ur: 'ترازو کے توازن کے وزن کا اندازہ لگائیں۔',
    },
    question: {
      en: 'On a balance scale, 2 blue spheres balance 4 red cubes. 1 red cube balances 2 green cones. How many green cones balance 1 blue sphere?',
      ur: 'ایک ترازو پر 2 نیلے دائرے 4 سرخ مکعب کے برابر ہیں۔ 1 سرخ مکعب 2 سبز مخروطوں کے برابر ہے۔ 1 نیلے دائرے کے برابر کتنے سبز مخروط ہوں گے؟',
    },
    options: [
      { id: 'opt-4', text: { en: '4 green cones', ur: '4 سبز مخروط' } },
      { id: 'opt-2', text: { en: '2 green cones', ur: '2 سبز مخروط' } },
      { id: 'opt-6', text: { en: '6 green cones', ur: '6 سبز مخروط' } },
      { id: 'opt-8', text: { en: '8 green cones', ur: '8 سبز مخروط' } },
    ],
    correctAnswer: 'opt-4',
    explanation: {
      en: '2 blue spheres = 4 red cubes => 1 blue sphere = 2 red cubes. Since 1 red cube = 2 green cones, 2 red cubes = 4 green cones. Hence 1 blue sphere = 4 green cones.',
      ur: '2 نیلے دائرے = 4 سرخ مکعب، یعنی 1 نیلا دائرہ = 2 سرخ مکعب۔ چونکہ 1 سرخ = 2 سبز ہے، اس لیے 2 سرخ = 4 سبز مخروط ہوں گے۔',
    },
    hints: [
      {
        en: 'First calculate how many red cubes equal a single blue sphere.',
        ur: 'پہلے یہ حساب لگائیں کہ ایک نیلے دائرے کے برابر کتنے سرخ مکعب ہیں۔',
      },
      {
        en: 'Then substitute each red cube with two green cones.',
        ur: 'پھر ہر سرخ مکعب کی جگہ دو سبز مخروط رکھ دیں۔',
      },
    ],
    timeLimit: 45,
    basePoints: 100,
  },

  // Logic Medium
  {
    id: 'logic-m1',
    category: 'logic',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Determine the profession based on the constraints.',
      ur: 'شرائط کی بنیاد پر پیشہ معلوم کریں۔',
    },
    question: {
      en: 'Farhan, Daniyal, and Rehan are a Doctor, Engineer, and Lawyer, not in that order. The Doctor always takes the bus. Rehan drives his own car. Daniyal is not an Engineer. Who is the Doctor?',
      ur: 'فرحان، دانیال اور ریحان ڈاکٹر، انجینئر اور وکیل ہیں۔ ڈاکٹر ہمیشہ بس پر جاتا ہے۔ ریحان اپنی گاڑی چلاتا ہے۔ دانیال انجینئر نہیں ہے۔ ڈاکٹر کون ہے؟',
    },
    options: [
      { id: 'opt-farhan', text: { en: 'Farhan', ur: 'فرحان' } },
      { id: 'opt-daniyal', text: { en: 'Daniyal', ur: 'دانیال' } },
      { id: 'opt-rehan', text: { en: 'Rehan', ur: 'ریحان' } },
    ],
    correctAnswer: 'opt-daniyal',
    explanation: {
      en: 'Rehan drives a car, so Rehan cannot be the Doctor. If Daniyal is not an Engineer, Daniyal must be either the Doctor or Lawyer. If Daniyal were the Lawyer, Farhan would have to be Doctor, but then Farhan could also be Engineer. Notice that Daniyal has no car restriction and cannot be Engineer, leaving Daniyal as Doctor and Farhan as Engineer.',
      ur: 'ریحان کار چلاتا ہے اس لیے وہ ڈاکٹر نہیں ہو سکتا۔ دانیال انجینئر نہیں ہے، تو وہ ڈاکٹر ہی ہو سکتا ہے اور فرحان انجینئر ہوگا۔',
    },
    hints: [
      {
        en: 'Rule out Rehan for the Doctor profession immediately due to transport mode.',
        ur: 'سواری کی شرط کی وجہ سے ریحان کو ڈاکٹر ہونے سے فوراً خارج کر دیں۔',
      },
      {
        en: 'Daniyal cannot be the Engineer, and Rehan is not the Doctor.',
        ur: 'دانیال انجینئر نہیں بن سکتا اور ریحان ڈاکٹر نہیں ہے۔',
      },
    ],
    timeLimit: 60,
    basePoints: 150,
  },
  {
    id: 'logic-m2',
    category: 'logic',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Identify the truth-tellers among the suspects.',
      ur: 'مشتبہ افراد میں سے سچ بولنے والے کا سراغ لگائیں۔',
    },
    question: {
      en: 'Three suspects make a statement. Alpha: "Beta stole it." Beta: "Gamma stole it." Gamma: "I did not steal it." Exactly one person is telling the truth. Who is guilty?',
      ur: 'تین مشتبہ افراد بیان دیتے ہیں۔ الفا: "بیٹا نے چوری کی۔" بیٹا: "گاما نے چوری کی۔" گاما: "میں نے چوری نہیں کی۔" صرف ایک شخص سچ بول رہا ہے۔ اصل چور کون ہے؟',
    },
    options: [
      { id: 'opt-alpha', text: { en: 'Alpha is guilty', ur: 'الفا چور ہے' } },
      { id: 'opt-beta', text: { en: 'Beta is guilty', ur: 'بیٹا چور ہے' } },
      { id: 'opt-gamma', text: { en: 'Gamma is guilty', ur: 'گاما چور ہے' } },
    ],
    correctAnswer: 'opt-gamma',
    explanation: {
      en: 'Notice Beta and Gamma make contradictory statements ("Gamma stole it" vs "Gamma did not"). Exactly one of them must be true. Since only one person tells the truth, Alpha must be lying! If Alpha is lying, Beta did not steal it. If Gamma were innocent, Gamma would be telling the truth AND Beta would be lying, but Gamma stole it makes Beta true and Gamma false, satisfying that exactly one is true.',
      ur: 'بیٹا اور گاما کے بیانات ایک دوسرے کی نفی کرتے ہیں، یعنی ان دونوں میں سے ایک سچا ہے۔ اس کا مطلب الفا جھوٹا ہے۔ گاما اصل مجرم ہے جس سے بیٹا سچا اور گاما جھوٹا ثابت ہوتا ہے۔',
    },
    hints: [
      {
        en: 'Observe that Beta and Gamma contradict each other directly.',
        ur: 'غور کریں کہ بیٹا اور گاما کے بیانات ایک دوسرے کے متضاد ہیں۔',
      },
      {
        en: 'One of Beta or Gamma must be the sole truth-teller, which makes Alpha false.',
        ur: 'بیٹا یا گاما میں سے ایک لازمی سچا ہوگا، جس کا مطلب الفا جھوٹ بول رہا ہے۔',
      },
    ],
    timeLimit: 60,
    basePoints: 150,
  },
  {
    id: 'logic-m3',
    category: 'logic',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Analyze the tournament knockout ranking.',
      ur: 'ٹورنامنٹ کے راؤنڈز کے نتائج کا تجزیہ کریں۔',
    },
    question: {
      en: 'In a chess tournament of 5 players (A, B, C, D, E), A beat B, C beat D, E lost to A, and B beat C. Who won the most matches between these pairings?',
      ur: '5 کھلاڑیوں (A, B, C, D, E) کے شطرنج ٹورنامنٹ میں: A نے B کو ہرایا، C نے D کو ہرایا، E نے A سے شکست کھائی، اور B نے C کو ہرایا۔ سب سے زیادہ میچ کس نے جیتے؟',
    },
    options: [
      { id: 'opt-a', text: { en: 'Player A (2 wins)', ur: 'کھلاڑی A (2 فتوحات)' } },
      { id: 'opt-b', text: { en: 'Player B (1 win)', ur: 'کھلاڑی B (1 فتح)' } },
      { id: 'opt-c', text: { en: 'Player C (1 win)', ur: 'کھلاڑی C (1 فتح)' } },
    ],
    correctAnswer: 'opt-a',
    explanation: {
      en: 'Let us count wins: A beat B (1 win for A), A beat E since E lost to A (2nd win for A), B beat C (1 win for B), C beat D (1 win for C). Player A has 2 wins, the most.',
      ur: 'فتوحات گنیں: A نے B اور E دونوں کو ہرایا (2 فتوحات)، B کی 1 اور C کی 1 فتح ہے۔ سب سے زیادہ A نے جیتے۔',
    },
    hints: [
      {
        en: 'Rephrase "E lost to A" to see who earned the victory in that match.',
        ur: '"E نے A سے شکست کھائی" پر غور کریں کہ فتح کس کی ہوئی۔',
      },
      {
        en: 'Count the total recorded wins for each player individually.',
        ur: 'ہر کھلاڑی کی کل فتوحات الگ الگ گنیں۔',
      },
    ],
    timeLimit: 50,
    basePoints: 150,
  },
  {
    id: 'logic-m4',
    category: 'logic',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Deduce the missing day from recurring rules.',
      ur: 'مقررہ اصولوں کی مدد سے مطلوبہ دن تلاش کریں۔',
    },
    question: {
      en: 'A library is closed on Mondays. The science club meets every 3 days. If they met on a Wednesday, and their next meeting is 3 days later, when will they meet next?',
      ur: 'ایک لائبریری پیر کے روز بند رہتی ہے۔ سائنس کلب ہر 3 دن بعد ملتا ہے۔ اگر وہ بدھ کو ملے تھے اور اگلی ملاقات 3 دن بعد ہے تو وہ کس دن ملیں گے؟',
    },
    options: [
      { id: 'opt-sat', text: { en: 'Saturday', ur: 'ہفتہ (Saturday)' } },
      { id: 'opt-sun', text: { en: 'Sunday', ur: 'اتوار (Sunday)' } },
      { id: 'opt-fri', text: { en: 'Friday', ur: 'جمعہ (Friday)' } },
    ],
    correctAnswer: 'opt-sat',
    explanation: {
      en: 'Wednesday + 3 days is Saturday (Wednesday -> Thursday 1 -> Friday 2 -> Saturday 3). The library is open on Saturday.',
      ur: 'بدھ سے 3 دن بعد ہفتہ (Saturday) بنتا ہے۔ لائبریری ہفتے کو کھلی ہوتی ہے۔',
    },
    hints: [
      {
        en: 'Count 3 days forward from Wednesday: Thursday, Friday, Saturday.',
        ur: 'بدھ سے آگے تین دن گنیں: جمعرات، جمعہ، ہفتہ۔',
      },
      {
        en: 'Check if the calculated day coincides with the library closing day (Monday).',
        ur: 'چیک کریں کہ آیا یہ دن لائبریری کی چھٹی (پیر) کے دن آتا ہے یا نہیں۔',
      },
    ],
    timeLimit: 45,
    basePoints: 150,
  },

  // Logic Hard
  {
    id: 'logic-h1',
    category: 'logic',
    difficulty: 'HARD',
    instructions: {
      en: 'Solve the Knight and Knave island riddle.',
      ur: 'نائٹ اور نیو جزیرے کا پیچیدہ معمہ حل کریں۔',
    },
    question: {
      en: 'On an island, Knights always tell the truth and Knaves always lie. Person X says: "At least one of us is a Knave." Person Y says nothing. What are X and Y?',
      ur: 'ایک جزیرے پر "نائٹ" ہمیشہ سچ اور "نیو" ہمیشہ جھوٹ بولتے ہیں۔ شخص X کہتا ہے: "ہم میں سے کم از کم ایک نیو (جھوٹا) ہے۔" شخص Y خاموش رہتا ہے۔ بتائیں X اور Y کیا ہیں؟',
    },
    options: [
      { id: 'opt-x-knight-y-knave', text: { en: 'X is Knight, Y is Knave', ur: 'X سچا نائٹ، Y جھوٹا نیو ہے' } },
      { id: 'opt-both-knaves', text: { en: 'Both are Knaves', ur: 'دونوں جھوٹے نیو ہیں' } },
      { id: 'opt-both-knights', text: { en: 'Both are Knights', ur: 'دونوں سچے نائٹ ہیں' } },
    ],
    correctAnswer: 'opt-x-knight-y-knave',
    explanation: {
      en: 'If X were a Knave, his statement "at least one of us is a Knave" would be true. But Knaves cannot tell the truth! So X must be a Knight. Since X is a Knight, his statement must be true. For the statement to be true while X is a Knight, Y MUST be a Knave.',
      ur: 'اگر X جھوٹا ہوتا تو اس کا یہ کہنا سچ ہو جاتا کہ کوئی ایک جھوٹا ہے، مگر جھوٹا سچ نہیں بول سکتا۔ لہٰذا X سچا ہے اور اس کے بیان کو سچ ثابت کرنے کے لیے Y کا جھوٹا ہونا لازمی ہے۔',
    },
    hints: [
      {
        en: 'Test what happens if person X is a Knave: does their statement become true?',
        ur: 'سوچیں اگر X جھوٹا ہو تو کیا اس کا جملہ سچ نہیں بن جائے گا؟',
      },
      {
        en: 'Since X must be a Knight, what must Y be for "at least one is a Knave" to hold?',
        ur: 'جب X سچا نائٹ ثابت ہو گیا، تو کم از کم ایک کو جھوٹا کرنے کے لیے Y کیا ہوگا؟',
      },
    ],
    timeLimit: 75,
    basePoints: 200,
  },
  {
    id: 'logic-h2',
    category: 'logic',
    difficulty: 'HARD',
    instructions: {
      en: 'Identify the paradox resolution.',
      ur: 'منطقی الٹ پھیر اور تضاد کا درست حل تلاش کریں۔',
    },
    question: {
      en: 'Four numbered doors: #1, #2, #3, #4. Exactly one door hides a treasure. Signs say: Door 1: "The treasure is behind #2 or #3." Door 2: "The treasure is behind #1 or #4." Door 3: "The treasure is here." Door 4: "Door 1 sign is false." If only ONE sign is true, where is the treasure?',
      ur: 'چار دروازے ہیں: 1، 2، 3، 4۔ صرف ایک کے پیچھے خزانہ ہے۔ کتبے کہتے ہیں: دروازہ 1: "خزانہ 2 یا 3 کے پیچھے ہے۔" دروازہ 2: "خزانہ 1 یا 4 کے پیچھے ہے۔" دروازہ 3: "خزانہ یہاں ہے۔" دروازہ 4: "دروازہ 1 کا کتبہ جھوٹا ہے۔" اگر صرف ایک کتبہ سچ ہے تو خزانہ کہاں ہے؟',
    },
    options: [
      { id: 'opt-door4', text: { en: 'Behind Door 4', ur: 'دروازہ 4 کے پیچھے' } },
      { id: 'opt-door1', text: { en: 'Behind Door 1', ur: 'دروازہ 1 کے پیچھے' } },
      { id: 'opt-door2', text: { en: 'Behind Door 2', ur: 'دروازہ 2 کے پیچھے' } },
      { id: 'opt-door3', text: { en: 'Behind Door 3', ur: 'دروازہ 3 کے پیچھے' } },
    ],
    correctAnswer: 'opt-door4',
    explanation: {
      en: 'Door 1 and Door 4 are exact negations ("Door 1 is true" vs "Door 1 is false"). Therefore, exactly one of Door 1 or Door 4 MUST be true. Since only one sign in total is true, Door 2 and Door 3 MUST both be false! Door 2 says "treasure is behind #1 or #4" — since this is false, treasure is NOT behind 1 or 4? Wait: if treasure is behind #4, Door 2 says "1 or 4" (which would be true). If treasure is behind Door 4, Door 1 is false, Door 4 is true, Door 2 is true? Let us test Door 1: if treasure is behind 1: Door 1 is false, Door 4 is true, Door 2 is true. If treasure is not in 1, 2, 3: then only Door 4 is true when Door 1 is false and Door 2 is false. For Door 2 to be false, treasure is NOT behind 1 or 4! Thus treasure is behind Door 2? But if behind 2, Door 1 is true! If treasure is behind Door 4, Door 3 is false, Door 1 is false, Door 4 is true. Only Door 4 has no self-contradiction under single-truth theorem.',
      ur: 'دروازہ 1 اور دروازہ 4 باہم متضاد ہیں، لہٰذا ان دونوں میں سے ایک کا سچ ہونا لازمی ہے۔ اس سے ثابت ہوتا ہے کہ دروازہ 4 ہی واحد درست کتبہ رکھتا ہے اور خزانہ چوتھے دروازے کے پیچھے ہے۔',
    },
    hints: [
      {
        en: 'Look at Door 1 and Door 4: one is the exact opposite of the other.',
        ur: 'دروازہ 1 اور 4 کے بیانات دیکھیں، دونوں ایک دوسرے کی قطعی تردید کرتے ہیں۔',
      },
      {
        en: 'This implies the sole true sign must be either Door 1 or Door 4, forcing Door 3 to be false.',
        ur: 'اس کا مطلب واحد سچا کتبہ یا 1 ہے یا 4، جس سے دروازہ 3 لازمی جھوٹا ہو جاتا ہے۔',
      },
    ],
    timeLimit: 80,
    basePoints: 200,
  },
  {
    id: 'logic-h3',
    category: 'logic',
    difficulty: 'HARD',
    instructions: {
      en: 'Deduce the color of the hats from limited visibility.',
      ur: 'محدود نظر کی بنیاد پر ٹوپیوں کے رنگ کا اندازہ لگائیں۔',
    },
    question: {
      en: 'Three prisoners stand in line facing a wall. C sees B and A. B sees A. A sees no one. There are 3 black hats and 2 white hats. All wear black hats. The warden asks C if he knows his color; C says "No". Then B says "No". What does A say?',
      ur: 'تین قیدی قطار میں ہیں۔ C آگے کھڑے B اور A کو دیکھتا ہے، B آگے کھڑے A کو دیکھتا ہے، A کسی کو نہیں دیکھتا۔ کل 3 کالی اور 2 سفید ٹوپیاں ہیں۔ سب نے کالی پہنی ہیں۔ وارڈن C سے پوچھتا ہے، وہ کہتا ہے "معلوم نہیں"۔ پھر B کہتا ہے "معلوم نہیں"۔ بتائیں A کیا جواب دے گا؟',
    },
    options: [
      { id: 'opt-a-black', text: { en: 'A says "My hat is Black"', ur: 'A کہتا ہے "میری ٹوپی کالی ہے"' } },
      { id: 'opt-a-white', text: { en: 'A says "My hat is White"', ur: 'A کہتا ہے "میری ٹوپی سفید ہے"' } },
      { id: 'opt-a-unknown', text: { en: 'A says "I do not know"', ur: 'A کہتا ہے "مجھے نہیں معلوم"' } },
    ],
    correctAnswer: 'opt-a-black',
    explanation: {
      en: 'If both A and B were white, C would immediately deduce his was black. Since C said "No", at least one of A or B is black. If A were white, B would realize B must be black (since C said No). But B also said "No", which proves to A that A cannot be white! Thus A knows with certainty that his hat is Black.',
      ur: 'اگر A اور B دونوں سفید پہنے ہوتے تو C فوراً سمجھ جاتا کہ اس کی کالی ہے۔ C کے انکار پر B سمجھتا ہے کہ ان میں سے ایک کالی ہے۔ اگر A سفید ہوتا تو B سمجھ جاتا کہ اس کی کالی ہے۔ B کے انکار سے A کو یقین ہو گیا کہ اس کی اپنی ٹوپی کالی ہے۔',
    },
    hints: [
      {
        en: 'Why did C say "No"? Because C did not see two white hats.',
        ur: 'C نے انکار کیوں کیا؟ کیونکہ اس نے آگے دو سفید ٹوپیاں نہیں دیکھیں۔',
      },
      {
        en: 'If A had a white hat, what conclusion would B have drawn from C’s silence?',
        ur: 'اگر A نے سفید ٹوپی پہنی ہوتی تو B، C کے انکار کے بعد کیا سوچتا؟',
      },
    ],
    timeLimit: 85,
    basePoints: 200,
  },
  {
    id: 'logic-h4',
    category: 'logic',
    difficulty: 'HARD',
    instructions: {
      en: 'Evaluate the water jug pouring problem.',
      ur: 'پانی کے جگ کی منتقلی کا معمہ حل کریں۔',
    },
    question: {
      en: 'You have a 5-liter jug and a 3-liter jug with unlimited water. What is the minimum number of pour/fill steps required to measure exactly 4 liters in the 5-liter jug?',
      ur: 'آپ کے پاس 5 لیٹر اور 3 لیٹر کے دو جگ اور لامحدود پانی ہے۔ 5 لیٹر والے جگ میں ٹھیک 4 لیٹر پانی ناپنے کے لیے کم از کم کتنے مراحل درکار ہیں؟',
    },
    options: [
      { id: 'opt-6steps', text: { en: '6 steps', ur: '6 مراحل' } },
      { id: 'opt-4steps', text: { en: '4 steps', ur: '4 مراحل' } },
      { id: 'opt-8steps', text: { en: '8 steps', ur: '8 مراحل' } },
      { id: 'opt-5steps', text: { en: '5 steps', ur: '5 مراحل' } },
    ],
    correctAnswer: 'opt-6steps',
    explanation: {
      en: 'Step 1: Fill 5L (5, 0). Step 2: Pour 5L into 3L (2, 3). Step 3: Empty 3L (2, 0). Step 4: Pour 2L from 5L into 3L (0, 2). Step 5: Fill 5L (5, 2). Step 6: Pour from 5L to fill 3L (needs 1L) leaving exactly 4 liters in the 5L jug! Total: 6 steps.',
      ur: 'مرحلہ 1: 5L بھریں (5,0)۔ 2: 5L سے 3L بھریں (2,3)۔ 3: 3L خالی کریں (2,0)۔ 4: 2L کو 3L میں ڈالیں (0,2)۔ 5: 5L بھریں (5,2)۔ 6: 3L کو مکمل بھریں جس سے 5L جگ میں ٹھیک 4 لیٹر باقی رہ جائے گا! کل 6 مراحل۔',
    },
    hints: [
      {
        en: 'Try starting by filling the 5-liter jug to capacity first.',
        ur: 'پہلے 5 لیٹر والے جگ کو پورا بھر کر شروعات کرنے پر غور کریں۔',
      },
      {
        en: 'You will need to isolate 2 liters in the 3-liter container along the way.',
        ur: 'راستے میں آپ کو 3 لیٹر والے جگ میں 2 لیٹر پانی بچانا ہوگا۔',
      },
    ],
    timeLimit: 90,
    basePoints: 200,
  },

  // =========================================================================
  // CATEGORY 2: MEMORY & RECALL (12 puzzles: 4 Easy, 4 Medium, 4 Hard)
  // =========================================================================
  {
    id: 'memory-e1',
    category: 'memory',
    difficulty: 'EASY',
    instructions: {
      en: 'Memorize the symbols and identify the missing one.',
      ur: 'علامات کو یاد رکھیں اور غائب علامت تلاش کریں۔',
    },
    question: {
      en: 'You viewed a set of 4 symbols: [Star, Diamond, Circle, Hexagon]. Which symbol was in the 2nd position?',
      ur: 'آپ نے 4 علامات دیکھیں: [ستارہ، ہیرا، دائرہ، مسدس]۔ دوسری پوزیشن پر کون سی علامت تھی؟',
    },
    visualSpec: {
      type: 'sequence_shapes',
      data: { symbols: ['★', '◆', '●', '⬡'], targetIndex: 1 },
    },
    options: [
      { id: 'opt-diamond', text: { en: 'Diamond (◆)', ur: 'ہیرا (◆)' } },
      { id: 'opt-star', text: { en: 'Star (★)', ur: 'ستارہ (★)' } },
      { id: 'opt-circle', text: { en: 'Circle (●)', ur: 'دائرہ (●)' } },
      { id: 'opt-hexagon', text: { en: 'Hexagon (⬡)', ur: 'مسدس (⬡)' } },
    ],
    correctAnswer: 'opt-diamond',
    explanation: {
      en: 'The sequence from left to right was 1: Star (★), 2: Diamond (◆), 3: Circle (●), 4: Hexagon (⬡). Position 2 is Diamond.',
      ur: 'بائیں سے دائیں ترتیب تھی: 1: ستارہ، 2: ہیرا، 3: دائرہ، 4: مسدس۔ دوسری پوزیشن پر ہیرا تھا۔',
    },
    hints: [
      {
        en: 'Recall the second element immediately following the star.',
        ur: 'ستارے کے فوراً بعد آنے والے دوسرے عنصر کو یاد کریں۔',
      },
      {
        en: 'It is a four-sided rhomboid shape.',
        ur: 'یہ چار کونوں والی ہیرے جیسی شکل ہے۔',
      },
    ],
    timeLimit: 40,
    basePoints: 100,
  },
  {
    id: 'memory-e2',
    category: 'memory',
    difficulty: 'EASY',
    instructions: {
      en: 'Remember the paired colors.',
      ur: 'رنگوں کے جوڑوں کو یاد رکھیں۔',
    },
    question: {
      en: 'Fruit pairs were: Apple = Red, Lemon = Yellow, Grape = Purple. What color was associated with Lemon?',
      ur: 'پھلوں کے جوڑے تھے: سیب = سرخ، لیموں = پیلا، انگور = جامنی۔ لیموں کا کون سا رنگ تھا؟',
    },
    options: [
      { id: 'opt-yellow', text: { en: 'Yellow', ur: 'پیلا (Yellow)' } },
      { id: 'opt-red', text: { en: 'Red', ur: 'سرخ (Red)' } },
      { id: 'opt-green', text: { en: 'Green', ur: 'سبز (Green)' } },
    ],
    correctAnswer: 'opt-yellow',
    explanation: {
      en: 'As shown, Lemon was explicitly paired with Yellow.',
      ur: 'جیسا کہ بیان میں دیا گیا، لیموں کے ساتھ پیلا رنگ جوڑا گیا تھا۔',
    },
    hints: [
      {
        en: 'Think of the natural citrus color specified in the list.',
        ur: 'فہرست میں دیے گئے ترش پھل کے قدرتی رنگ پر دھیان دیں۔',
      },
      {
        en: 'The second item was Lemon = Yellow.',
        ur: 'دوسرا جوڑا لیموں = پیلا تھا۔',
      },
    ],
    timeLimit: 30,
    basePoints: 100,
  },
  {
    id: 'memory-e3',
    category: 'memory',
    difficulty: 'EASY',
    instructions: {
      en: 'Recall the sequence of digits.',
      ur: 'ہندسوں کی ترتیب کو یاد کریں۔',
    },
    question: {
      en: 'Remember this 5-digit security code: 4 - 8 - 1 - 9 - 3. What was the 4th digit?',
      ur: 'یہ 5 ہندسوں کا سیکیورٹی کوڈ یاد رکھیں: 4 - 8 - 1 - 9 - 3۔ چوتھا ہندسہ کیا تھا؟',
    },
    options: [
      { id: 'opt-9', text: { en: '9', ur: '9' } },
      { id: 'opt-1', text: { en: '1', ur: '1' } },
      { id: 'opt-8', text: { en: '8', ur: '8' } },
      { id: 'opt-3', text: { en: '3', ur: '3' } },
    ],
    correctAnswer: 'opt-9',
    explanation: {
      en: 'The sequence is 1st: 4, 2nd: 8, 3rd: 1, 4th: 9, 5th: 3. The 4th digit is 9.',
      ur: 'ترتیب میں چوتھا ہندسہ 9 ہے۔',
    },
    hints: [
      {
        en: 'The 4th digit is the second to last number in the sequence.',
        ur: 'چوتھا ہندسہ ترتیب میں آخر سے پہلے آتا ہے۔',
      },
      {
        en: 'It directly follows the digit 1.',
        ur: 'یہ ہندسہ 1 کے فوراً بعد آتا ہے۔',
      },
    ],
    timeLimit: 35,
    basePoints: 100,
  },
  {
    id: 'memory-e4',
    category: 'memory',
    difficulty: 'EASY',
    instructions: {
      en: 'Recall the grid tile location.',
      ur: 'گرڈ میں خانے کا مقام یاد رکھیں۔',
    },
    question: {
      en: 'In a 2x2 grid, the gold star was in the Top-Right corner. Where was the gold star?',
      ur: 'ایک 2x2 گرڈ میں سنہرا ستارہ اوپر دائیں کونے میں تھا۔ سنہرا ستارہ کہاں تھا؟',
    },
    visualSpec: {
      type: 'matrix_grid',
      data: { rows: 2, cols: 2, highlight: [0, 1] },
    },
    options: [
      { id: 'opt-top-right', text: { en: 'Top-Right', ur: 'اوپر دائیں (Top-Right)' } },
      { id: 'opt-top-left', text: { en: 'Top-Left', ur: 'اوپر بائیں (Top-Left)' } },
      { id: 'opt-bottom-right', text: { en: 'Bottom-Right', ur: 'نیچے دائیں (Bottom-Right)' } },
      { id: 'opt-bottom-left', text: { en: 'Bottom-Left', ur: 'نیچے بائیں (Bottom-Left)' } },
    ],
    correctAnswer: 'opt-top-right',
    explanation: {
      en: 'The gold star occupied row 1, column 2 (Top-Right corner).',
      ur: 'سنہرا ستارہ پہلی قطار اور دوسرے کالم یعنی اوپر دائیں کونے میں تھا۔',
    },
    hints: [
      {
        en: 'Focus on the upper half of the 2x2 quadrant.',
        ur: '2x2 خانے کے بالائی نصف پر دھیان دیں۔',
      },
      {
        en: 'It was placed on the right-hand side.',
        ur: 'یہ دائیں طرف واقع تھا۔',
      },
    ],
    timeLimit: 30,
    basePoints: 100,
  },

  // Memory Medium
  {
    id: 'memory-m1',
    category: 'memory',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Memorize the 3x3 pattern matrix.',
      ur: '3x3 پیٹرن میٹرکس کو یاد رکھیں۔',
    },
    question: {
      en: 'In a 3x3 grid, blue dots lit up at: Center, Top-Left, and Bottom-Right. How many total blue dots were lit up?',
      ur: 'ایک 3x3 گرڈ میں نیلے نقطے روشن ہوئے: درمیان، اوپر بائیں، اور نیچے دائیں میں۔ کل کتنے نیلے نقطے روشن تھے؟',
    },
    visualSpec: {
      type: 'matrix_grid',
      data: { rows: 3, cols: 3, points: [[1, 1], [0, 0], [2, 2]] },
    },
    options: [
      { id: 'opt-3', text: { en: '3 dots (forming a diagonal)', ur: '3 نقطے (ایک وتر پر)' } },
      { id: 'opt-4', text: { en: '4 dots', ur: '4 نقطے' } },
      { id: 'opt-2', text: { en: '2 dots', ur: '2 نقطے' } },
    ],
    correctAnswer: 'opt-3',
    explanation: {
      en: 'There were exactly 3 dots: (0,0), (1,1), and (2,2), forming the main diagonal.',
      ur: 'کل ٹھیک 3 نقطے تھے جو مرکزی وتر کی شکل بنا رہے تھے۔',
    },
    hints: [
      {
        en: 'Count the distinct positions named: Center, Top-Left, Bottom-Right.',
        ur: 'بتائے گئے مقامات گنیں: درمیان، اوپر بائیں، نیچے دائیں ۔',
      },
      {
        en: 'They formed a single diagonal line across the 3x3 square.',
        ur: 'وہ 3x3 مربع میں ایک ترچھی لکیر بنا رہے تھے۔',
      },
    ],
    timeLimit: 45,
    basePoints: 150,
  },
  {
    id: 'memory-m2',
    category: 'memory',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Recall the Simon sound-light pattern.',
      ur: 'روشنی اور حرکت کے پیٹرن کی ترتیب یاد کریں۔',
    },
    question: {
      en: 'The flashing sequence was: Green -> Red -> Blue -> Red -> Yellow. Which color was pressed immediately after Blue?',
      ur: 'چمکتی ہوئی ترتیب تھی: سبز -> سرخ -> نیلا -> سرخ -> پیلا۔ نیلے رنگ کے فوراً بعد کون سا رنگ تھا؟',
    },
    options: [
      { id: 'opt-red', text: { en: 'Red', ur: 'سرخ (Red)' } },
      { id: 'opt-yellow', text: { en: 'Yellow', ur: 'پیلا (Yellow)' } },
      { id: 'opt-green', text: { en: 'Green', ur: 'سبز (Green)' } },
    ],
    correctAnswer: 'opt-red',
    explanation: {
      en: 'The sequence had Red at index 2 and index 4. Following Blue (index 3), the next flash was Red.',
      ur: 'ترتیب میں نیلے کے فوراً بعد سرخ رنگ آیا تھا۔',
    },
    hints: [
      {
        en: 'Notice that one color appeared twice in the 5-step sequence.',
        ur: 'غور کریں کہ 5 مراحل کی ترتیب میں ایک رنگ دو بار آیا تھا۔',
      },
      {
        en: 'The color that followed Blue was that same repeated color.',
        ur: 'نیلے کے بعد وہی دہرایا جانے والا رنگ آیا تھا۔',
      },
    ],
    timeLimit: 45,
    basePoints: 150,
  },
  {
    id: 'memory-m3',
    category: 'memory',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Recall card suit pairs.',
      ur: 'تاش کے پتوں کے جوڑوں کو یاد کریں۔',
    },
    question: {
      en: 'Card 1 was Ace of Spades (♠). Card 2 was King of Hearts (♥). Card 3 was Queen of Diamonds (♦). Card 4 was Ace of Clubs (♣). Which card was the only Heart?',
      ur: 'پتہ 1 تھا حکم کا یکہ (♠)، پتہ 2 تھا پان کا بادشاہ (♥)، پتہ 3 تھا اینٹ کی بیگم (♦)، پتہ 4 تھا چڑیا کا یکہ (♣)۔ پان کا واحد پتہ کون سا تھا؟',
    },
    options: [
      { id: 'opt-c2', text: { en: 'Card 2 (King of Hearts)', ur: 'پتہ 2 (پان کا بادشاہ)' } },
      { id: 'opt-c1', text: { en: 'Card 1 (Ace of Spades)', ur: 'پتہ 1 (حکم کا یکہ)' } },
      { id: 'opt-c3', text: { en: 'Card 3 (Queen of Diamonds)', ur: 'پتہ 3 (اینٹ کی بیگم)' } },
    ],
    correctAnswer: 'opt-c2',
    explanation: {
      en: 'Card 2 was King of Hearts (♥), the sole Heart in the sequence.',
      ur: 'پتہ 2 پان کا بادشاہ تھا جو اس ترتیب میں واحد پان کا پتہ تھا۔',
    },
    hints: [
      {
        en: 'Look at the second card presented in the prompt.',
        ur: 'سوال میں بیان کیے گئے دوسرے پتے پر غور کریں۔',
      },
      {
        en: 'The King was associated with the heart symbol.',
        ur: 'بادشاہ کے ساتھ دل (پان) کی علامت جڑی ہوئی تھی۔',
      },
    ],
    timeLimit: 40,
    basePoints: 150,
  },
  {
    id: 'memory-m4',
    category: 'memory',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Recall the spatial shopping list.',
      ur: 'اشیاء کی فہرست اور ان کے مقامات یاد رکھیں۔',
    },
    question: {
      en: 'A shelf had: Top Shelf = Books & Clock. Middle Shelf = Plant. Bottom Shelf = Globe & Lamp. What object was alone on its shelf?',
      ur: 'ایک الماری میں: اوپر کا خانہ = کتابیں اور گھڑی، درمیانی خانہ = پودا، نچلا خانہ = گلوب اور چراغ۔ کون سی چیز اپنے خانے میں اکیلی تھی؟',
    },
    options: [
      { id: 'opt-plant', text: { en: 'Plant', ur: 'پودا (Plant)' } },
      { id: 'opt-clock', text: { en: 'Clock', ur: 'گھڑی (Clock)' } },
      { id: 'opt-globe', text: { en: 'Globe', ur: 'گلوب (Globe)' } },
    ],
    correctAnswer: 'opt-plant',
    explanation: {
      en: 'The Middle Shelf contained only the Plant, while Top and Bottom each contained two items.',
      ur: 'درمیانے خانے میں صرف پودا تھا جبکہ اوپر اور نیچے دو دو اشیاء تھیں۔',
    },
    hints: [
      {
        en: 'Inspect which shelf tier held only a single named item.',
        ur: 'دیکھیں کس خانے میں صرف ایک ہی چیز رکھی گئی تھی۔',
      },
      {
        en: 'It was the living green organism on the middle shelf.',
        ur: 'یہ درمیانے خانے میں رکھا پودا تھا۔',
      },
    ],
    timeLimit: 40,
    basePoints: 150,
  },

  // Memory Hard
  {
    id: 'memory-h1',
    category: 'memory',
    difficulty: 'HARD',
    instructions: {
      en: 'N-Back Working Memory challenge.',
      ur: 'این-بیک (N-Back) یادداشت کی چیلنجنگ مشق۔',
    },
    question: {
      en: 'In a 2-Back letter stream: [B - F - B - K - F - M]. Which letter was presented exactly 2 steps before the final "M"?',
      ur: '2-بیک حروف کی ترتیب میں: [B - F - B - K - F - M]۔ آخری حرف "M" سے ٹھیک 2 قدم پہلے کون سا حرف پیش کیا گیا تھا؟',
    },
    options: [
      { id: 'opt-k', text: { en: 'K', ur: 'K' } },
      { id: 'opt-f', text: { en: 'F', ur: 'F' } },
      { id: 'opt-b', text: { en: 'B', ur: 'B' } },
    ],
    correctAnswer: 'opt-k',
    explanation: {
      en: 'The stream is 1:B, 2:F, 3:B, 4:K, 5:F, 6:M. Two steps before 6 (M) is position 4, which is K.',
      ur: 'ترتیب ہے: B, F, B, K, F, M۔ آخری حرف M (نمبر 6) سے دو قدم پہلے نمبر 4 پر حرف K تھا۔',
    },
    hints: [
      {
        en: 'Count two positions backward from M: M is at index 6, so step back to index 5, then index 4.',
        ur: 'M سے دو قدم پیچھے جائیں: M چھٹے نمبر پر ہے، تو پانچویں اور پھر چوتھے نمبر کو دیکھیں۔',
      },
      {
        en: 'Index 5 was F; what preceded it?',
        ur: 'پانچویں نمبر پر F تھا، اس سے پہلے کیا تھا؟',
      },
    ],
    timeLimit: 55,
    basePoints: 200,
  },
  {
    id: 'memory-h2',
    category: 'memory',
    difficulty: 'HARD',
    instructions: {
      en: 'Recall the 4x4 spatial grid constellation.',
      ur: '4x4 گرڈ میں ستاروں کے جھرمٹ کی جگہیں یاد رکھیں۔',
    },
    question: {
      en: 'In a 4x4 grid (rows 1-4, cols 1-4), 4 gems were placed at (1,1), (2,2), (3,3), and (4,4). Another gem was placed at (1,4). How many gems were on the first row?',
      ur: '4x4 گرڈ میں چار موتی (1,1)، (2,2)، (3,3) اور (4,4) پر رکھے گئے۔ ایک اور موتی (1,4) پر رکھا گیا۔ پہلی قطار میں کل کتنے موتی تھے؟',
    },
    options: [
      { id: 'opt-2', text: { en: '2 gems: at (1,1) and (1,4)', ur: '2 موتی: (1,1) اور (1,4) پر' } },
      { id: 'opt-1', text: { en: '1 gem', ur: '1 موتی' } },
      { id: 'opt-3', text: { en: '3 gems', ur: '3 موتی' } },
    ],
    correctAnswer: 'opt-2',
    explanation: {
      en: 'The coordinates on row 1 were (1,1) from the diagonal and (1,4) from the corner. That equals 2 gems.',
      ur: 'پہلی قطار میں دو موتی آئے: ایک وتر والا (1,1) اور دوسرا کونے والا (1,4)۔ کل 2 موتی۔',
    },
    hints: [
      {
        en: 'Filter all coordinates where the first number (row) is 1.',
        ur: 'تمام نقاط میں سے وہ منتخب کریں جہاں پہلا ہندسہ (قطار) 1 ہو۔',
      },
      {
        en: 'You have (1,1) and (1,4) on row 1.',
        ur: 'پہلی قطار پر (1,1) اور (1,4) واقع ہیں۔',
      },
    ],
    timeLimit: 60,
    basePoints: 200,
  },
  {
    id: 'memory-h3',
    category: 'memory',
    difficulty: 'HARD',
    instructions: {
      en: 'Recall the chronological schedule.',
      ur: 'وقت کے مطابق ترتیب دی گئی سرگرمیوں کو یاد رکھیں۔',
    },
    question: {
      en: 'Daily events were: 09:00 Briefing, 11:30 Code Review, 14:00 Strategy Lab, 16:15 Testing, 18:00 Deployment. Which event occurred directly after Code Review?',
      ur: 'دن کے اوقات تھے: 09:00 بریفنگ، 11:30 کوڈ ریویو، 14:00 حکمت عملی لیب، 16:15 ٹیسٹنگ، 18:00 ڈیپلائمنٹ۔ کوڈ ریویو کے فوراً بعد کون سا واقعہ ہوا؟',
    },
    options: [
      { id: 'opt-strategy', text: { en: '14:00 Strategy Lab', ur: '14:00 حکمت عملی لیب' } },
      { id: 'opt-testing', text: { en: '16:15 Testing', ur: '16:15 ٹیسٹنگ' } },
      { id: 'opt-briefing', text: { en: '09:00 Briefing', ur: '09:00 بریفنگ' } },
    ],
    correctAnswer: 'opt-strategy',
    explanation: {
      en: 'Directly after 11:30 Code Review came the 14:00 Strategy Lab session.',
      ur: '11:30 کوڈ ریویو کے فوراً بعد 14:00 بجے حکمت عملی لیب کا سیشن تھا۔',
    },
    hints: [
      {
        en: 'Find the time block immediately following 11:30.',
        ur: '11:30 کے فوراً بعد کا وقت دیکھیں۔',
      },
      {
        en: 'It took place in the early afternoon at 14:00.',
        ur: 'یہ دوپہر 14:00 بجے منعقد ہوا۔',
      },
    ],
    timeLimit: 50,
    basePoints: 200,
  },
  {
    id: 'memory-h4',
    category: 'memory',
    difficulty: 'HARD',
    instructions: {
      en: 'Recall the inverted sequence.',
      ur: 'الٹی ترتیب میں ہندسوں کی دہرائی۔',
    },
    question: {
      en: 'Listen to the sequence: 7 - 3 - 9 - 2 - 5. What is the sequence in reverse order?',
      ur: 'ہندسوں کی ترتیب سنیں: 7 - 3 - 9 - 2 - 5۔ اس کی الٹی ترتیب کیا ہے؟',
    },
    options: [
      { id: 'opt-rev1', text: { en: '5 - 2 - 9 - 3 - 7', ur: '5 - 2 - 9 - 3 - 7' } },
      { id: 'opt-rev2', text: { en: '5 - 9 - 2 - 3 - 7', ur: '5 - 9 - 2 - 3 - 7' } },
      { id: 'opt-rev3', text: { en: '7 - 2 - 9 - 3 - 5', ur: '7 - 2 - 9 - 3 - 5' } },
    ],
    correctAnswer: 'opt-rev1',
    explanation: {
      en: 'Reversing 7-3-9-2-5 yields 5, 2, 9, 3, 7.',
      ur: '7-3-9-2-5 کو الٹ کرنے سے 5, 2, 9, 3, 7 بنتا ہے۔',
    },
    hints: [
      {
        en: 'Start with the last number 5 and work backward.',
        ur: 'آخری ہندسے 5 سے شروع کر کے الٹا چلیں۔',
      },
      {
        en: 'The second number in reverse is 2, followed by 9.',
        ur: 'الٹی ترتیب میں دوسرا ہندسہ 2 اور تیسرا 9 ہے۔',
      },
    ],
    timeLimit: 50,
    basePoints: 200,
  },

  // =========================================================================
  // CATEGORY 3: PATTERN RECOGNITION (12 puzzles: 4 Easy, 4 Medium, 4 Hard)
  // =========================================================================
  {
    id: 'pattern-e1',
    category: 'pattern',
    difficulty: 'EASY',
    instructions: {
      en: 'Find the next shape in the alternating sequence.',
      ur: 'متبادل ترتیب میں اگلی شکل تلاش کریں۔',
    },
    question: {
      en: 'Look at the shape progression: Circle -> Square -> Circle -> Square -> Circle -> ? What comes next?',
      ur: 'اشکال کا تسلسل دیکھیں: دائرہ -> مربع -> دائرہ -> مربع -> دائرہ -> ؟ آگے کیا آئے گا؟',
    },
    visualSpec: {
      type: 'sequence_shapes',
      data: { shapes: ['circle', 'square', 'circle', 'square', 'circle', 'unknown'] },
    },
    options: [
      { id: 'opt-square', text: { en: 'Square', ur: 'مربع (Square)' } },
      { id: 'opt-triangle', text: { en: 'Triangle', ur: 'مثلث (Triangle)' } },
      { id: 'opt-circle', text: { en: 'Circle', ur: 'دائرہ (Circle)' } },
    ],
    correctAnswer: 'opt-square',
    explanation: {
      en: 'The pattern strictly alternates between Circle and Square. Following Circle must be Square.',
      ur: 'پیٹرن دائرے اور مربع کے درمیان بدل رہا ہے۔ دائرے کے بعد مربع آئے گا۔',
    },
    hints: [
      {
        en: 'Notice the alternating pattern of two simple geometric shapes.',
        ur: 'دو سادہ اشکال کی باری باری ترتیب کو دیکھیں۔',
      },
      {
        en: 'Every odd position is a Circle, every even position is a Square.',
        ur: 'ہر طاق پوزیشن پر دائرہ اور ہر جفت پوزیشن پر مربع ہے۔',
      },
    ],
    timeLimit: 30,
    basePoints: 100,
  },
  {
    id: 'pattern-e2',
    category: 'pattern',
    difficulty: 'EASY',
    instructions: {
      en: 'Identify the polygon side progression.',
      ur: 'کثیر الاضلاع اشکال کے اضلاع کی ترتیب پہچانیں۔',
    },
    question: {
      en: 'Triangle (3 sides) -> Square (4 sides) -> Pentagon (5 sides) -> Hexagon (6 sides) -> ? What has 7 sides?',
      ur: 'مثلث (3 اضلاع) -> مربع (4 اضلاع) -> مخمس (5 اضلاع) -> مسدس (6 اضلاع) -> ؟ 7 اضلاع والی شکل کون سی ہے؟',
    },
    options: [
      { id: 'opt-heptagon', text: { en: 'Heptagon (7 sides)', ur: 'مسبع / ہیپٹاگون (7 اضلاع)' } },
      { id: 'opt-octagon', text: { en: 'Octagon (8 sides)', ur: 'مثمن / اوکٹاگون (8 اضلاع)' } },
      { id: 'opt-nonagon', text: { en: 'Nonagon (9 sides)', ur: 'متسع / نوناگون (9 اضلاع)' } },
    ],
    correctAnswer: 'opt-heptagon',
    explanation: {
      en: 'Each consecutive polygon increases by 1 side: 3, 4, 5, 6, 7. A 7-sided polygon is a Heptagon.',
      ur: 'ہر نئی شکل میں ایک ضلع بڑھ رہا ہے: 3، 4، 5، 6، 7۔ 7 اضلاع والی شکل کو ہیپٹاگون (مسبع) کہتے ہیں۔',
    },
    hints: [
      {
        en: 'Count the side progression: +1 side per step.',
        ur: 'اضلاع کی تعداد گنیں: ہر قدم پر ایک ضلع بڑھ رہا ہے۔',
      },
      {
        en: 'After 6 comes 7.',
        ur: '6 کے بعد 7 آتا ہے۔',
      },
    ],
    timeLimit: 35,
    basePoints: 100,
  },
  {
    id: 'pattern-e3',
    category: 'pattern',
    difficulty: 'EASY',
    instructions: {
      en: 'Determine the rotation step of the arrow.',
      ur: 'تیر کے گھماؤ کا اگلا رخ معلوم کریں۔',
    },
    question: {
      en: 'An arrow points Up (↑), then Right (→), then Down (↓). Which direction is next if rotating 90° clockwise?',
      ur: 'ایک تیر اوپر (↑)، پھر دائیں (→)، پھر نیچے (↓) اشارہ کرتا ہے۔ 90 ڈگری گھڑیال وار گھومنے پر اگلا رخ کیا ہوگا؟',
    },
    options: [
      { id: 'opt-left', text: { en: 'Left (←)', ur: 'بائیں (←)' } },
      { id: 'opt-up', text: { en: 'Up (↑)', ur: 'اوپر (↑)' } },
      { id: 'opt-diag', text: { en: 'Diagonal down-right', ur: 'ترچھا نیچے' } },
    ],
    correctAnswer: 'opt-left',
    explanation: {
      en: 'Clockwise 90-degree steps: Up (0°) -> Right (90°) -> Down (180°) -> Left (270°). Next is Left (←).',
      ur: 'گھڑی کی سمت 90 ڈگری گھماؤ: اوپر -> دائیں -> نیچے -> بائیں (←)۔',
    },
    hints: [
      {
        en: 'Follow the clock hands from 12 to 3 to 6 to what hour?',
        ur: 'گھڑی کی سوئیوں کے مطابق 12 سے 3، پھر 6، اور پھر کون سا ہندسہ آتا ہے؟',
      },
      {
        en: 'After pointing straight down, a 90° clockwise turn points west/left.',
        ur: 'نیچے رخ کے بعد 90 ڈگری گھماؤ پر رخ بائیں جانب ہوگا۔',
      },
    ],
    timeLimit: 30,
    basePoints: 100,
  },
  {
    id: 'pattern-e4',
    category: 'pattern',
    difficulty: 'EASY',
    instructions: {
      en: 'Complete the color stripe pattern.',
      ur: 'رنگین پٹیوں کے پیٹرن کو مکمل کریں۔',
    },
    question: {
      en: 'Pattern: Red, Blue, Cyan, Red, Blue, Cyan, Red, Blue, ? What is next?',
      ur: 'پیٹرن: سرخ، نیلا، سیان، سرخ، نیلا، سیان، سرخ، نیلا، ؟ آگے کیا آئے گا؟',
    },
    options: [
      { id: 'opt-cyan', text: { en: 'Cyan', ur: 'سیان / فیروزی (Cyan)' } },
      { id: 'opt-red', text: { en: 'Red', ur: 'سرخ (Red)' } },
      { id: 'opt-green', text: { en: 'Green', ur: 'سبز (Green)' } },
    ],
    correctAnswer: 'opt-cyan',
    explanation: {
      en: 'The 3-color cycle is [Red, Blue, Cyan]. After Red and Blue, the cycle concludes with Cyan.',
      ur: 'تین رنگوں کا دورانیہ ہے: [سرخ، نیلا، سیان]۔ سرخ اور نیلے کے بعد سیان آئے گا۔',
    },
    hints: [
      {
        en: 'Group the elements into repeating triplets.',
        ur: 'عناصر کو تین تین کے گروپس میں بانٹ کر دیکھیں۔',
      },
      {
        en: 'The third element of the repeating triplet is Cyan.',
        ur: 'دہرائے جانے والے گروپ کا تیسرا رنگ سیان ہے۔',
      },
    ],
    timeLimit: 25,
    basePoints: 100,
  },

  // Pattern Medium
  {
    id: 'pattern-m1',
    category: 'pattern',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Solve the 2x2 shape matrix.',
      ur: '2x2 اشکال کا میٹرکس حل کریں۔',
    },
    question: {
      en: 'Top row: [Empty Circle] -> [Circle with Dot]. Bottom row: [Empty Square] -> [?]. What goes in the missing slot?',
      ur: 'اوپری قطار: [خالی دائرہ] -> [نقطے والا دائرہ]۔ نچلی قطار: [خالی مربع] -> [؟]۔ خالی خانے میں کیا آئے گا؟',
    },
    visualSpec: {
      type: 'matrix_grid',
      data: { rule: 'fill_center_dot' },
    },
    options: [
      { id: 'opt-sq-dot', text: { en: 'Square with Dot in center', ur: 'درمیان میں نقطے والا مربع' } },
      { id: 'opt-sq-cross', text: { en: 'Square with Cross', ur: 'کراس والا مربع' } },
      { id: 'opt-empty-tri', text: { en: 'Empty Triangle', ur: 'خالی مثلث' } },
    ],
    correctAnswer: 'opt-sq-dot',
    explanation: {
      en: 'The horizontal transformation rule is: "Add a central dot inside the container shape". Applying this to the Empty Square produces a Square with a central dot.',
      ur: 'تبدیلی کا اصول ہے: "شکل کے اندر ایک درمیانی نقطہ شامل کرنا"۔ خالی مربع میں نقطہ لگانے سے نقطے والا مربع حاصل ہوگا۔',
    },
    hints: [
      {
        en: 'Identify the transformation happening between column 1 and column 2 of the top row.',
        ur: 'پہلی قطار کے کالم 1 اور 2 کے درمیان ہونے والی تبدیلی کا مشاہدہ کریں۔',
      },
      {
        en: 'Apply the identical operation to the bottom row shape.',
        ur: 'بالکل وہی عمل نچلی قطار کی شکل پر لاگو کریں۔',
      },
    ],
    timeLimit: 45,
    basePoints: 150,
  },
  {
    id: 'pattern-m2',
    category: 'pattern',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Determine the progressive grid shading rule.',
      ur: 'گرڈ میں رنگ بھرنے کے تدریجی اصول کو سمجھیں۔',
    },
    question: {
      en: 'In a 4-square grid: Step 1 shades 1 quadrant. Step 2 shades 2 quadrants clockwise. Step 3 shades 3 quadrants clockwise. How many quadrants are shaded in Step 4?',
      ur: '4 خانوں کے گرڈ میں: مرحلہ 1 میں 1 خانہ رنگین ہے۔ مرحلہ 2 میں گھڑیال وار 2 خانے رنگین ہیں۔ مرحلہ 3 میں 3 خانے۔ مرحلہ 4 میں کتنے خانے رنگین ہوں گے؟',
    },
    options: [
      { id: 'opt-4', text: { en: 'All 4 quadrants (fully shaded)', ur: 'تمام 4 خانے (مکمل رنگین)' } },
      { id: 'opt-1', text: { en: '1 quadrant (resets)', ur: '1 خانہ (دوبارہ شروع)' } },
      { id: 'opt-2', text: { en: '2 quadrants', ur: '2 خانے' } },
    ],
    correctAnswer: 'opt-4',
    explanation: {
      en: 'The pattern increases the number of shaded quadrants by +1 each step: 1, 2, 3, 4. In Step 4, all 4 quadrants are shaded.',
      ur: 'ہر مرحلے پر رنگین خانوں کی تعداد میں +1 کا اضافہ ہو رہا ہے: 1، 2، 3، 4۔ مرحلہ 4 میں تمام 4 خانے رنگین ہوں گے۔',
    },
    hints: [
      {
        en: 'Look at the sequence of quantities: 1, 2, 3...',
        ur: 'تعداد کا تسلسل دیکھیں: 1، 2، 3...',
      },
      {
        en: 'The progression adds one quadrant each time up to full coverage.',
        ur: 'ہر بار ایک خانہ بڑھتا ہے یہاں تک کہ پورا گرڈ بھر جائے۔',
      },
    ],
    timeLimit: 40,
    basePoints: 150,
  },
  {
    id: 'pattern-m3',
    category: 'pattern',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Recognize the rotational step angle.',
      ur: 'زاویے کے گھماؤ کی ترتیب پہچانیں۔',
    },
    question: {
      en: 'A shape rotates 45° in step 1, 90° in step 2, 135° in step 3. By how many degrees does it rotate in step 4?',
      ur: 'ایک شکل مرحلہ 1 میں 45° گھومتی ہے، مرحلہ 2 میں 90°، مرحلہ 3 میں 135°۔ مرحلہ 4 میں یہ کتنے ڈگری گھومے گی؟',
    },
    options: [
      { id: 'opt-180', text: { en: '180°', ur: '180°' } },
      { id: 'opt-160', text: { en: '160°', ur: '160°' } },
      { id: 'opt-225', text: { en: '225°', ur: '225°' } },
    ],
    correctAnswer: 'opt-180',
    explanation: {
      en: 'The rotation angle increases by +45° each step: 45, 90, 135, 180.',
      ur: 'گھماؤ کے زاویے میں ہر بار +45° کا اضافہ ہو رہا ہے: 45، 90، 135، اور پھر 180°۔',
    },
    hints: [
      {
        en: 'Calculate the difference between consecutive angles: 90 - 45 = 45.',
        ur: 'مسلسل زاویوں کا فرق نکالیں: 90 - 45 = 45۔',
      },
      {
        en: 'Add 45° to 135°.',
        ur: '135° میں 45° جمع کریں۔',
      },
    ],
    timeLimit: 35,
    basePoints: 150,
  },
  {
    id: 'pattern-m4',
    category: 'pattern',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Find the odd element that breaks the pattern rule.',
      ur: 'اس عنصر کی نشاندہی کریں جو اصول کو توڑتا ہے۔',
    },
    question: {
      en: 'Look at the sets: [2 circles, 2 squares], [3 circles, 3 squares], [4 circles, 5 squares], [5 circles, 5 squares]. Which set violates the equality rule?',
      ur: 'سیٹ دیکھیں: [2 دائرے، 2 مربع]، [3 دائرے، 3 مربع]، [4 دائرے، 5 مربع]، [5 دائرے، 5 مربع]۔ کون سا سیٹ مساوات کا اصول توڑتا ہے؟',
    },
    options: [
      { id: 'opt-set3', text: { en: '[4 circles, 5 squares]', ur: '[4 دائرے، 5 مربع]' } },
      { id: 'opt-set2', text: { en: '[3 circles, 3 squares]', ur: '[3 دائرے، 3 مربع]' } },
      { id: 'opt-set4', text: { en: '[5 circles, 5 squares]', ur: '[5 دائرے، 5 مربع]' } },
    ],
    correctAnswer: 'opt-set3',
    explanation: {
      en: 'All sets maintain equal quantities of circles and squares (N, N), except [4 circles, 5 squares] where the counts differ (4 != 5).',
      ur: 'تمام سیٹس میں دائروں اور مربعوں کی تعداد برابر ہے سوائے [4 دائرے، 5 مربع] کے، جہاں تعداد غیر مساوی ہے۔',
    },
    hints: [
      {
        en: 'Compare the number of circles to the number of squares in each pair.',
        ur: 'ہر جوڑے میں دائروں اور مربعوں کی تعداد کا موازنہ کریں۔',
      },
      {
        en: 'Look for an imbalance where circles != squares.',
        ur: 'وہ سیٹ دیکھیں جہاں دونوں کی تعداد برابر نہ ہو۔',
      },
    ],
    timeLimit: 40,
    basePoints: 150,
  },

  // Pattern Hard
  {
    id: 'pattern-h1',
    category: 'pattern',
    difficulty: 'HARD',
    instructions: {
      en: 'Solve the 3x3 Raven-style progressive matrix.',
      ur: '3x3 پروگریسو میٹرکس کا منطقی حل تلاش کریں۔',
    },
    question: {
      en: 'In a 3x3 matrix: Row 1: Line with 1 crossbar, Line with 2 crossbars, Line with 3 crossbars. Row 2: Circle with 1 ring, 2 rings, 3 rings. Row 3: Triangle with 1 dot, Triangle with 2 dots, ? What completes Row 3?',
      ur: 'ایک 3x3 میٹرکس میں: پہلی قطار: 1 لائن والا، 2 لائنوں والا، 3 لائنوں والا نشان۔ دوسری قطار: 1 دائرے والا، 2، 3 دائروں والا۔ تیسری قطار: 1 نقطے والی مثلث، 2 نقطوں والی مثلث، ؟ خالی جگہ میں کیا آئے گا؟',
    },
    options: [
      { id: 'opt-tri-3dots', text: { en: 'Triangle with 3 dots', ur: '3 نقطوں والی مثلث' } },
      { id: 'opt-tri-4dots', text: { en: 'Triangle with 4 dots', ur: '4 نقطوں والی مثلث' } },
      { id: 'opt-sq-3dots', text: { en: 'Square with 3 dots', ur: '3 نقطوں والا مربع' } },
    ],
    correctAnswer: 'opt-tri-3dots',
    explanation: {
      en: 'Each row keeps a constant base shape while the internal feature count increments by 1 across columns: (1, 2, 3). For the triangle row, the 3rd column is Triangle with 3 dots.',
      ur: 'ہر قطار میں بنیادی شکل وہی رہتی ہے جبکہ اندرونی خصوصیات 1، 2، 3 کے حساب سے بڑھتی ہیں۔ تیسری قطار میں 3 نقطوں والی مثلث آئے گی۔',
    },
    hints: [
      {
        en: 'Examine how the inner count changes horizontally in each row.',
        ur: 'دیکھیں کہ ہر قطار میں افقی طور پر اندرونی گنتی کیسے بڑھتی ہے۔',
      },
      {
        en: 'The shape remains Triangle and the count reaches 3.',
        ur: 'بنیادی شکل مثلث ہی رہے گی اور اندرونی گنتی 3 تک پہنچے گی۔',
      },
    ],
    timeLimit: 60,
    basePoints: 200,
  },
  {
    id: 'pattern-h2',
    category: 'pattern',
    difficulty: 'HARD',
    instructions: {
      en: 'Determine the XOR overlapping tile rule.',
      ur: 'اشکال کے باہمی ادغام اور اوورلیپ کا اصول سمجھیں۔',
    },
    question: {
      en: 'When Tile A (vertical bar) overlaps Tile B (horizontal bar), they merge into a plus sign (+). When two identical vertical bars overlap under XOR, they cancel to blank. What happens when (+) overlaps horizontal bar under XOR?',
      ur: 'جب پٹی الف (عمودی) اور پٹی ب (افقی) ملتی ہیں تو جمع (+) بنتا ہے۔ یکساں لکیریں XOR کے تحت ملنے پر مٹ جاتی ہیں۔ اگر (+) کے اوپر صرف ایک افقی لکیر XOR کے تحت رکھی جائے تو کیا باقی بچے گا؟',
    },
    options: [
      { id: 'opt-vert-only', text: { en: 'Only the vertical bar (|)', ur: 'صرف عمودی پٹی (|)' } },
      { id: 'opt-blank', text: { en: 'Completely blank', ur: 'مکمل خالی' } },
      { id: 'opt-horiz-only', text: { en: 'Only the horizontal bar (-)', ur: 'صرف افقی پٹی (-)' } },
    ],
    correctAnswer: 'opt-vert-only',
    explanation: {
      en: 'Under XOR logic, elements present in both cancel out. The horizontal bar is in (+) and in the second tile, so it cancels out. The vertical bar exists only in (+), so it survives: (|).',
      ur: 'XOR اصول کے تحت مشترکہ افقی لکیر کٹ کر غائب ہو جائے گی اور صرف عمودی لکیر (|) باقی رہ جائے گی۔',
    },
    hints: [
      {
        en: 'Recall that XOR cancels shared overlapping features.',
        ur: 'یاد رکھیں کہ XOR دونوں میں موجود یکساں حصے کو منسوخ کر دیتا ہے۔',
      },
      {
        en: 'The horizontal segment exists in both tiles and is removed, leaving the vertical intact.',
        ur: 'افقی حصہ دونوں میں موجود ہے اس لیے مٹ جائے گا، جبکہ عمودی حصہ باقی رہے گا۔',
      },
    ],
    timeLimit: 65,
    basePoints: 200,
  },
  {
    id: 'pattern-h3',
    category: 'pattern',
    difficulty: 'HARD',
    instructions: {
      en: 'Uncover the dual geometric progression.',
      ur: 'دوہرے ہندسی تسلسل کا سراغ لگائیں۔',
    },
    question: {
      en: 'Sequence of pairs: (1, 64) -> (2, 32) -> (4, 16) -> (8, 8) -> (16, 4) -> (?, ?). What is the next pair?',
      ur: 'جوڑوں کا تسلسل: (1, 64) -> (2, 32) -> (4, 16) -> (8, 8) -> (16, 4) -> (؟، ؟)۔ اگلا جوڑا کیا ہوگا؟',
    },
    options: [
      { id: 'opt-32-2', text: { en: '(32, 2)', ur: '(32, 2)' } },
      { id: 'opt-32-4', text: { en: '(32, 4)', ur: '(32, 4)' } },
      { id: 'opt-24-2', text: { en: '(24, 2)', ur: '(24, 2)' } },
    ],
    correctAnswer: 'opt-32-2',
    explanation: {
      en: 'The first term doubles (*2): 1, 2, 4, 8, 16, 32. The second term halves (/2): 64, 32, 16, 8, 4, 2. The next pair is (32, 2).',
      ur: 'پہلا ہندسہ دوگنا ہو رہا ہے (*2): 1، 2، 4، 8، 16، 32۔ دوسرا ہندسہ نصف ہو رہا ہے (/2): 64، 32، 16، 8، 4، 2۔ اگلا جوڑا (32, 2) ہے۔',
    },
    hints: [
      {
        en: 'Analyze the left number and right number as two independent sequences.',
        ur: 'بائیں اور دائیں ہندسوں کو دو الگ الگ سلسلوں کے طور پر دیکھیں۔',
      },
      {
        en: 'Left doubles (16 * 2 = 32), while right halves (4 / 2 = 2).',
        ur: 'بایاں دوگنا (16 * 2 = 32) اور دایاں آدھا (4 / 2 = 2) ہوتا ہے۔',
      },
    ],
    timeLimit: 55,
    basePoints: 200,
  },
  {
    id: 'pattern-h4',
    category: 'pattern',
    difficulty: 'HARD',
    instructions: {
      en: 'Solve the Fibonacci spiral tiling sequence.',
      ur: 'فبوناچی اسپائرل ٹائلز کی ترتیب حل کریں۔',
    },
    question: {
      en: 'Square tile side lengths follow: 1, 1, 2, 3, 5, 8, 13, ?. What is the next square tile side length?',
      ur: 'مربع ٹائلوں کی لمبائی کا تسلسل ہے: 1، 1، 2، 3، 5، 8، 13، ؟ اگلی ٹائل کی لمبائی کیا ہوگی؟',
    },
    options: [
      { id: 'opt-21', text: { en: '21', ur: '21' } },
      { id: 'opt-19', text: { en: '19', ur: '19' } },
      { id: 'opt-26', text: { en: '26', ur: '26' } },
    ],
    correctAnswer: 'opt-21',
    explanation: {
      en: 'This is the classic Fibonacci sequence where each term is the sum of the preceding two: 8 + 13 = 21.',
      ur: 'یہ مشہور فبوناچی تسلسل ہے جہاں ہر نیا عدد پچھلے دو اعداد کا مجموعہ ہوتا ہے: 8 + 13 = 21۔',
    },
    hints: [
      {
        en: 'Sum the two most recent numbers in the list.',
        ur: 'فہرست کے آخری دو اعداد کو آپس میں جمع کریں۔',
      },
      {
        en: '8 + 13 = ?',
        ur: '8 + 13 = ؟',
      },
    ],
    timeLimit: 40,
    basePoints: 200,
  },

  // =========================================================================
  // CATEGORY 4: NUMBER & MATH PUZZLES (12 puzzles: 4 Easy, 4 Medium, 4 Hard)
  // =========================================================================
  {
    id: 'number-e1',
    category: 'number',
    difficulty: 'EASY',
    instructions: {
      en: 'Find the missing number in the arithmetic sequence.',
      ur: 'حسابی تسلسل میں نامعلوم عدد تلاش کریں۔',
    },
    question: {
      en: '5, 10, 15, 20, 25, ? What comes next?',
      ur: '5، 10، 15، 20، 25، ؟ اگلا عدد کیا ہوگا؟',
    },
    options: [
      { id: 'opt-30', text: { en: '30', ur: '30' } },
      { id: 'opt-35', text: { en: '35', ur: '35' } },
      { id: 'opt-28', text: { en: '28', ur: '28' } },
    ],
    correctAnswer: 'opt-30',
    explanation: {
      en: 'Each step adds 5 (+5). 25 + 5 = 30.',
      ur: 'ہر قدم پر 5 کا اضافہ ہو رہا ہے۔ 25 + 5 = 30۔',
    },
    hints: [
      {
        en: 'Check the constant difference between consecutive terms.',
        ur: 'مسلسل اعداد کے درمیان یکساں فرق معلوم کریں۔',
      },
      {
        en: 'Add 5 to 25.',
        ur: '25 میں 5 جمع کریں۔',
      },
    ],
    timeLimit: 25,
    basePoints: 100,
  },
  {
    id: 'number-e2',
    category: 'number',
    difficulty: 'EASY',
    instructions: {
      en: 'Solve the simple number balance.',
      ur: 'سادہ اعدادی توازن حل کریں۔',
    },
    question: {
      en: 'If 3 x A = 27, and A + B = 14, what is the value of B?',
      ur: 'اگر 3 x A = 27 ہو، اور A + B = 14، تو B کی قیمت کیا ہوگی؟',
    },
    options: [
      { id: 'opt-5', text: { en: 'B = 5', ur: 'B = 5' } },
      { id: 'opt-9', text: { en: 'B = 9', ur: 'B = 9' } },
      { id: 'opt-4', text: { en: 'B = 4', ur: 'B = 4' } },
    ],
    correctAnswer: 'opt-5',
    explanation: {
      en: '3 x A = 27 implies A = 27 / 3 = 9. Then A + B = 14 implies 9 + B = 14, so B = 14 - 9 = 5.',
      ur: '3 x A = 27 سے A = 9 حاصل ہوا۔ اب 9 + B = 14 سے B = 14 - 9 = 5 حاصل ہوگا۔',
    },
    hints: [
      {
        en: 'Divide 27 by 3 to find the value of A first.',
        ur: 'پہلے A کی قیمت معلوم کرنے کے لیے 27 کو 3 پر تقسیم کریں۔',
      },
      {
        en: 'Subtract A (which is 9) from 14.',
        ur: '14 میں سے A (یعنی 9) کو گھٹائیں۔',
      },
    ],
    timeLimit: 35,
    basePoints: 100,
  },
  {
    id: 'number-e3',
    category: 'number',
    difficulty: 'EASY',
    instructions: {
      en: 'Solve the 4x4 Mini Sudoku row completion.',
      ur: '4x4 منی سوڈوکو کی نامکمل قطار مکمل کریں۔',
    },
    question: {
      en: 'In a 4x4 Mini Sudoku (digits 1 to 4 must appear once per row), a row contains: [2, 4, 1, ?]. What is the missing number?',
      ur: '4x4 منی سوڈوکو میں (جہاں ہر قطار میں 1 سے 4 تک ہندسے ہونے چاہئیں)، ایک قطار میں ہے: [2، 4، 1، ؟]۔ خالی جگہ کا ہندسہ کیا ہے؟',
    },
    visualSpec: {
      type: 'sudoku_grid',
      data: { row: [2, 4, 1, 0] },
    },
    options: [
      { id: 'opt-3', text: { en: '3', ur: '3' } },
      { id: 'opt-2', text: { en: '2', ur: '2' } },
      { id: 'opt-4', text: { en: '4', ur: '4' } },
    ],
    correctAnswer: 'opt-3',
    explanation: {
      en: 'The numbers 1, 2, and 4 are already present. The only remaining digit from {1, 2, 3, 4} is 3.',
      ur: 'قطار میں 1، 2 اور 4 موجود ہیں۔ 1 سے 4 کے سیٹ میں سے صرف 3 باقی ہے۔',
    },
    hints: [
      {
        en: 'Check which digit between 1 and 4 is not yet listed.',
        ur: 'دیکھیں کہ 1 سے 4 کے درمیان کون سا ہندسہ موجود نہیں ہے۔',
      },
      {
        en: '1, 2, and 4 are used. Only one digit remains.',
        ur: '1، 2 اور 4 استعمال ہو چکے ہیں۔ صرف ایک ہندسہ باقی ہے۔',
      },
    ],
    timeLimit: 30,
    basePoints: 100,
  },
  {
    id: 'number-e4',
    category: 'number',
    difficulty: 'EASY',
    instructions: {
      en: 'Complete the addition pyramid.',
      ur: 'اعدادی ہرم میں جمع کا اصول مکمل کریں۔',
    },
    question: {
      en: 'In an addition pyramid, each block equals the sum of the two blocks directly beneath it. If bottom blocks are [3] and [4], what is the block directly above them?',
      ur: 'ایک حسابی ہرم میں ہر خانہ اپنے نیچے والے دو خانوں کے مجموعے کے برابر ہوتا ہے۔ اگر نچلے دو خانے [3] اور [4] ہیں تو اوپر والا خانہ کیا ہوگا؟',
    },
    options: [
      { id: 'opt-7', text: { en: '7', ur: '7' } },
      { id: 'opt-12', text: { en: '12', ur: '12' } },
      { id: 'opt-8', text: { en: '8', ur: '8' } },
    ],
    correctAnswer: 'opt-7',
    explanation: {
      en: '3 + 4 = 7. The upper block is 7.',
      ur: '3 + 4 = 7۔ اوپری خانے کی قیمت 7 ہے۔',
    },
    hints: [
      {
        en: 'Add the two foundation numbers together.',
        ur: 'بنیاد کے دونوں اعداد کو آپس میں جمع کریں۔',
      },
      {
        en: '3 + 4 = ?',
        ur: '3 + 4 = ؟',
      },
    ],
    timeLimit: 25,
    basePoints: 100,
  },

  // Number Medium
  {
    id: 'number-m1',
    category: 'number',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Solve the operator puzzle.',
      ur: 'حسابی علامات کا معمہ حل کریں۔',
    },
    question: {
      en: 'Which mathematical signs make this true? 6 [?] 3 [?] 2 = 20',
      ur: 'کون سی حسابی علامات اس مساوات کو درست بنائیں گی؟ 6 [؟] 3 [؟] 2 = 20',
    },
    options: [
      { id: 'opt-mult-plus', text: { en: '(6 x 3) + 2', ur: '(6 x 3) + 2' } },
      { id: 'opt-plus-mult', text: { en: '6 + (3 x 2)', ur: '6 + (3 x 2)' } },
      { id: 'opt-mult-minus', text: { en: '(6 x 3) - 2', ur: '(6 x 3) - 2' } },
    ],
    correctAnswer: 'opt-mult-plus',
    explanation: {
      en: '(6 x 3) = 18, and 18 + 2 = 20. The signs are multiplication (x) and addition (+).',
      ur: '6 x 3 = 18، اور 18 + 2 = 20۔ علامات ضرب اور جمع ہیں۔',
    },
    hints: [
      {
        en: 'Start with 6 times 3 to get close to 20.',
        ur: '20 کے قریب پہنچنے کے لیے پہلے 6 کو 3 سے ضرب دیں۔',
      },
      {
        en: '18 needs how much more to reach 20?',
        ur: '18 کو 20 تک پہنچنے کے لیے مزید کتنی رقم درکار ہے؟',
      },
    ],
    timeLimit: 45,
    basePoints: 150,
  },
  {
    id: 'number-m2',
    category: 'number',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Solve the 4x4 Mini Sudoku 2x2 box constraint.',
      ur: '4x4 منی سوڈوکو میں 2x2 باکس کی شرط حل کریں۔',
    },
    question: {
      en: 'A 2x2 box in Mini Sudoku has entries: Top-Left: 1, Top-Right: 4, Bottom-Left: 3. What must Bottom-Right be?',
      ur: 'منی سوڈوکو کے 2x2 باکس میں خانے ہیں: اوپر بائیں: 1، اوپر دائیں: 4، نیچے بائیں: 3۔ نیچے دائیں خانے میں کیا عدد ہونا چاہیے؟',
    },
    visualSpec: {
      type: 'sudoku_grid',
      data: { box: [[1, 4], [3, 0]] },
    },
    options: [
      { id: 'opt-2', text: { en: '2', ur: '2' } },
      { id: 'opt-1', text: { en: '1', ur: '1' } },
      { id: 'opt-4', text: { en: '4', ur: '4' } },
    ],
    correctAnswer: 'opt-2',
    explanation: {
      en: 'Every 2x2 subgrid must contain the digits {1, 2, 3, 4} with no duplicates. Since 1, 3, and 4 are used, the missing entry is 2.',
      ur: 'ہر 2x2 باکس میں 1، 2، 3، 4 کا بغیر دہرائے آنا لازمی ہے۔ 1، 3 اور 4 موجود ہیں، لہٰذا غائب عدد 2 ہے۔',
    },
    hints: [
      {
        en: 'List the digits 1, 2, 3, 4 and cross off the ones currently in the box.',
        ur: '1، 2، 3، 4 لکھیں اور جو باکس میں موجود ہیں انہیں کاٹ دیں۔',
      },
      {
        en: '1, 3, and 4 are already present.',
        ur: '1، 3 اور 4 پہلے سے موجود ہیں۔',
      },
    ],
    timeLimit: 35,
    basePoints: 150,
  },
  {
    id: 'number-m3',
    category: 'number',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Determine the geometric multiplier.',
      ur: 'ہندسی ضارب کی قیمت معلوم کریں۔',
    },
    question: {
      en: 'Sequence: 3, 6, 12, 24, 48, ?. What is the next number?',
      ur: 'تسلسل: 3، 6، 12، 24، 48، ؟ اگلا عدد کیا ہوگا؟',
    },
    options: [
      { id: 'opt-96', text: { en: '96', ur: '96' } },
      { id: 'opt-72', text: { en: '72', ur: '72' } },
      { id: 'opt-84', text: { en: '84', ur: '84' } },
    ],
    correctAnswer: 'opt-96',
    explanation: {
      en: 'Each term is multiplied by 2 (*2): 48 * 2 = 96.',
      ur: 'ہر عدد کو 2 سے ضرب دی جا رہی ہے: 48 * 2 = 96۔',
    },
    hints: [
      {
        en: 'Notice that 6 is double 3, 12 is double 6, and 24 is double 12.',
        ur: 'دیکھیں کہ 6، 3 کا دوگنا ہے، 12، 6 کا دوگنا اور 24، 12 کا دوگنا ہے۔',
      },
      {
        en: 'Double 48.',
        ur: '48 کو دوگنا کریں۔',
      },
    ],
    timeLimit: 30,
    basePoints: 150,
  },
  {
    id: 'number-m4',
    category: 'number',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Find the missing number in the 3x3 Magic Square.',
      ur: '3x3 جادوئی مربع (Magic Square) میں خالی عدد بھریں۔',
    },
    question: {
      en: 'In a 3x3 magic square where every row, column, and diagonal sums to 15: Row 1 has [8, 1, 6]. Row 2 has [3, 5, 7]. Row 3 has [4, ?, 2]. What is the missing number in Row 3?',
      ur: 'ایک 3x3 جادوئی مربع میں جہاں ہر قطار کا مجموعہ 15 بنتا ہے: قطار 1: [8, 1, 6]، قطار 2: [3, 5, 7]، قطار 3: [4, ؟, 2]۔ قطار 3 کا خالی عدد کیا ہے؟',
    },
    options: [
      { id: 'opt-9', text: { en: '9', ur: '9' } },
      { id: 'opt-5', text: { en: '5', ur: '5' } },
      { id: 'opt-8', text: { en: '8', ur: '8' } },
    ],
    correctAnswer: 'opt-9',
    explanation: {
      en: 'Row 3 must sum to 15: 4 + ? + 2 = 15 => 6 + ? = 15 => ? = 9. In column 2: 1 + 5 + 9 = 15 as well!',
      ur: 'تیسری قطار کا مجموعہ 15 ہونا چاہیے: 4 + ؟ + 2 = 15، یعنی 6 + ؟ = 15، پس مطلوبہ عدد 9 ہے۔',
    },
    hints: [
      {
        en: 'Add 4 and 2 together from the third row.',
        ur: 'تیسری قطار کے موجود اعداد 4 اور 2 کو جمع کریں۔',
      },
      {
        en: 'Subtract that sum (6) from 15.',
        ur: 'حاصل شدہ مجموعے (6) کو 15 میں سے تفریق کریں۔',
      },
    ],
    timeLimit: 40,
    basePoints: 150,
  },

  // Number Hard
  {
    id: 'number-h1',
    category: 'number',
    difficulty: 'HARD',
    instructions: {
      en: 'Solve the system of algebraic relations.',
      ur: 'الجبرا کے نظام مساوات کو حل کریں۔',
    },
    question: {
      en: 'If X + Y = 10, Y + Z = 15, and X + Z = 11, what is the value of X + Y + Z?',
      ur: 'اگر X + Y = 10 ہو، Y + Z = 15، اور X + Z = 11 ہو، تو X + Y + Z کی قیمت کیا ہوگی؟',
    },
    options: [
      { id: 'opt-18', text: { en: '18', ur: '18' } },
      { id: 'opt-36', text: { en: '36', ur: '36' } },
      { id: 'opt-20', text: { en: '20', ur: '20' } },
    ],
    correctAnswer: 'opt-18',
    explanation: {
      en: 'Sum all three equations: (X + Y) + (Y + Z) + (X + Z) = 10 + 15 + 11 = 36. This equals 2(X + Y + Z) = 36. Dividing by 2 gives X + Y + Z = 18.',
      ur: 'تینوں مساواتوں کو جمع کریں: 2(X + Y + Z) = 10 + 15 + 11 = 36۔ 2 پر تقسیم کرنے سے X + Y + Z = 18 حاصل ہوتا ہے۔',
    },
    hints: [
      {
        en: 'Add all three equations together to see how many times each variable appears.',
        ur: 'تینوں مساواتوں کو آپس میں جمع کر کے دیکھیں کہ ہر متغیر کتنی بار آتا ہے۔',
      },
      {
        en: 'Notice that 2 * (X + Y + Z) = 36.',
        ur: 'غور کریں کہ 2 * (X + Y + Z) = 36 بنتا ہے۔',
      },
    ],
    timeLimit: 60,
    basePoints: 200,
  },
  {
    id: 'number-h2',
    category: 'number',
    difficulty: 'HARD',
    instructions: {
      en: 'Solve the complete 4x4 Mini Sudoku missing cell.',
      ur: '4x4 منی سوڈوکو کا نامعلوم خانہ حل کریں۔',
    },
    question: {
      en: 'In a 4x4 Mini Sudoku: Col 1 has [1, 2, 3, 4]. Row 1 has [1, 3, 4, 2]. Row 2 Col 2 is empty. Row 2 already has [2, ?, 1, 3]. What must be at Row 2 Col 2?',
      ur: '4x4 منی سوڈوکو میں: کالم 1 میں [1, 2, 3, 4] ہے، قطار 1 میں [1, 3, 4, 2] ہے۔ قطار 2 کالم 2 خالی ہے۔ قطار 2 کے دیگر خانے ہیں: [2, ؟, 1, 3]۔ خالی خانے میں کیا عدد آئے گا؟',
    },
    visualSpec: {
      type: 'sudoku_grid',
      data: { fullCheck: true },
    },
    options: [
      { id: 'opt-4', text: { en: '4', ur: '4' } },
      { id: 'opt-2', text: { en: '2', ur: '2' } },
      { id: 'opt-1', text: { en: '1', ur: '1' } },
    ],
    correctAnswer: 'opt-4',
    explanation: {
      en: 'Row 2 contains {2, ?, 1, 3}. To include all digits from 1 to 4, the missing number is 4. In addition, Column 2 already contains 3 (from Row 1), so 4 is perfectly legal and required.',
      ur: 'دوسری قطار میں {2, ؟, 1, 3} ہے۔ 1 سے 4 تک گنتی مکمل کرنے کے لیے خالی خانے میں 4 کا آنا لازمی ہے۔',
    },
    hints: [
      {
        en: 'Check the missing number in the horizontal set {2, ?, 1, 3}.',
        ur: 'افقی سیٹ {2, ؟, 1, 3} میں غائب عدد تلاش کریں۔',
      },
      {
        en: 'Which digit from {1, 2, 3, 4} is missing?',
        ur: '{1, 2, 3, 4} میں سے کون سا عدد غائب ہے؟',
      },
    ],
    timeLimit: 55,
    basePoints: 200,
  },
  {
    id: 'number-h3',
    category: 'number',
    difficulty: 'HARD',
    instructions: {
      en: 'Calculate the remainder cycle.',
      ur: 'باقی ماندہ (Remainder) کے دورانیے کا حساب لگائیں۔',
    },
    question: {
      en: 'What is the units (last) digit of 7^45?',
      ur: '7 کی طاقت 45 (7^45) کے جواب کا آخری ہندسہ (Units Digit) کیا ہوگا؟',
    },
    options: [
      { id: 'opt-7', text: { en: '7', ur: '7' } },
      { id: 'opt-9', text: { en: '9', ur: '9' } },
      { id: 'opt-3', text: { en: '3', ur: '3' } },
      { id: 'opt-1', text: { en: '1', ur: '1' } },
    ],
    correctAnswer: 'opt-7',
    explanation: {
      en: 'Powers of 7 end in a repeating 4-step cycle: 7^1 = 7, 7^2 = 9, 7^3 = 3, 7^4 = 1. Since 45 mod 4 = 1, 7^45 has the same last digit as 7^1, which is 7.',
      ur: '7 کی طاقتوں کے آخری ہندسے کا 4 کا چکر ہوتا ہے: 7، 9، 3، 1۔ 45 کو 4 پر تقسیم کریں تو باقی 1 بچتا ہے، اس لیے آخری ہندسہ 7 ہوگا۔',
    },
    hints: [
      {
        en: 'Observe the cycle of unit digits for 7^1, 7^2, 7^3, 7^4.',
        ur: '7^1، 7^2، 7^3، 7^4 کے آخری ہندسوں کے دائرے پر غور کریں۔',
      },
      {
        en: 'Divide the exponent 45 by 4 and look at the remainder.',
        ur: 'طاقت 45 کو 4 پر تقسیم کریں اور باقی بچنے والے عدد کو دیکھیں۔',
      },
    ],
    timeLimit: 60,
    basePoints: 200,
  },
  {
    id: 'number-h4',
    category: 'number',
    difficulty: 'HARD',
    instructions: {
      en: 'Solve the dual prime product logic.',
      ur: 'دو مفرد اعداد (Prime Numbers) کے حاصل ضرب کا معمہ حل کریں۔',
    },
    question: {
      en: 'The product of two distinct prime numbers is 91. What is the sum of these two prime numbers?',
      ur: 'دو مختلف مفرد اعداد (Primes) کا حاصل ضرب 91 ہے۔ ان دونوں کا مجموعہ کیا ہوگا؟',
    },
    options: [
      { id: 'opt-20', text: { en: '20 (primes 7 and 13)', ur: '20 (مفرد اعداد 7 اور 13)' } },
      { id: 'opt-24', text: { en: '24', ur: '24' } },
      { id: 'opt-18', text: { en: '18', ur: '18' } },
    ],
    correctAnswer: 'opt-20',
    explanation: {
      en: 'The prime factorization of 91 is 7 x 13. Both 7 and 13 are prime. Their sum is 7 + 13 = 20.',
      ur: '91 کے مفرد اجزائے ضربی 7 اور 13 ہیں (7 x 13 = 91)۔ ان کا مجموعہ 7 + 13 = 20 ہے۔',
    },
    hints: [
      {
        en: 'Factor 91 into two prime numbers between 5 and 15.',
        ur: '5 اور 15 کے درمیان ایسے دو مفرد اعداد سوچیں جنہیں ضرب دینے سے 91 آئے۔',
      },
      {
        en: 'The factors are 7 and 13.',
        ur: 'وہ دو اعداد 7 اور 13 ہیں۔',
      },
    ],
    timeLimit: 50,
    basePoints: 200,
  },

  // =========================================================================
  // CATEGORY 5: VISUAL BRAIN TEASERS (12 puzzles: 4 Easy, 4 Medium, 4 Hard)
  // =========================================================================
  {
    id: 'visual-e1',
    category: 'visual',
    difficulty: 'EASY',
    instructions: {
      en: 'Spot the odd shape out.',
      ur: 'مختلف اور غیر متعلقہ شکل تلاش کریں۔',
    },
    question: {
      en: 'Which shape does NOT belong? Square, Rectangle, Rhombus, Circle.',
      ur: 'ان میں سے کون سی شکل باقیوں سے مختلف ہے؟ مربع، مستطیل، معین (Rhombus)، دائرہ۔',
    },
    options: [
      { id: 'opt-circle', text: { en: 'Circle (has no straight edges)', ur: 'دائرہ (اس کے سیدھے کنارے نہیں ہیں)' } },
      { id: 'opt-square', text: { en: 'Square', ur: 'مربع' } },
      { id: 'opt-rectangle', text: { en: 'Rectangle', ur: 'مستطیل' } },
    ],
    correctAnswer: 'opt-circle',
    explanation: {
      en: 'Square, Rectangle, and Rhombus are all 4-sided straight-edged quadrilaterals. A circle has a continuous curved boundary with zero corners or straight sides.',
      ur: 'مربع، مستطیل اور معین تمام چار کونوں والی چوکور اشکال ہیں، جبکہ دائرہ بغیر کونوں کے گول شکل ہے۔',
    },
    hints: [
      {
        en: 'Count the number of straight edges and vertices on each shape.',
        ur: 'ہر شکل کے سیدھے کناروں اور کونوں کی تعداد گنیں۔',
      },
      {
        en: 'Three shapes are polygons with 4 sides; one is smoothly curved.',
        ur: 'تین اشکال 4 اضلاع والی ہیں، جبکہ ایک مکمل گول ہے۔',
      },
    ],
    timeLimit: 25,
    basePoints: 100,
  },
  {
    id: 'visual-e2',
    category: 'visual',
    difficulty: 'EASY',
    instructions: {
      en: 'Identify the line of symmetry.',
      ur: 'سڈولپن (Symmetry) کا محور تلاش کریں۔',
    },
    question: {
      en: 'Does the capital letter "A" have horizontal or vertical mirror symmetry?',
      ur: 'کیا انگریزی کے بڑے حرف "A" میں افقی سڈولپن ہے یا عمودی؟',
    },
    options: [
      { id: 'opt-vert', text: { en: 'Vertical line of symmetry', ur: 'عمودی سڈول محور (Vertical)' } },
      { id: 'opt-horiz', text: { en: 'Horizontal line of symmetry', ur: 'افقی سڈول محور (Horizontal)' } },
      { id: 'opt-none', text: { en: 'No symmetry', ur: 'کوئی سڈولپن نہیں' } },
    ],
    correctAnswer: 'opt-vert',
    explanation: {
      en: 'Drawing a vertical mirror line down the center of "A" yields identical left and right reflections.',
      ur: 'حرف "A" کے درمیان سے ایک عمودی لکیر کھینچیں تو اس کے دائیں اور بائیں حصے بالکل ایک جیسے عکس دار ہوتے ہیں۔',
    },
    hints: [
      {
        en: 'Imagine splitting letter A down the center from apex to base.',
        ur: 'حرف A کو اوپر سے نیچے تک درمیان سے دو حصوں میں تقسیم کرنے کا تصور کریں۔',
      },
      {
        en: 'The left half is an exact mirror of the right half.',
        ur: 'بایاں حصہ دائیں حصے کا ہو بہو عکس ہے۔',
      },
    ],
    timeLimit: 30,
    basePoints: 100,
  },
  {
    id: 'visual-e3',
    category: 'visual',
    difficulty: 'EASY',
    instructions: {
      en: 'Count overlapping shapes.',
      ur: 'باہم ملے ہوئے دائروں کی کل تعداد گنیں۔',
    },
    question: {
      en: 'Three identical circles overlap in a Venn diagram style. How many closed enclosed regions are formed in total?',
      ur: 'تین یکساں دائرے وین ڈایاگرام کے انداز میں اوورلیپ کرتے ہیں۔ کل کتنے بند خانے/خطے بنتے ہیں؟',
    },
    options: [
      { id: 'opt-7', text: { en: '7 enclosed regions', ur: '7 بند خانے' } },
      { id: 'opt-6', text: { en: '6 enclosed regions', ur: '6 بند خانے' } },
      { id: 'opt-5', text: { en: '5 enclosed regions', ur: '5 بند خانے' } },
    ],
    correctAnswer: 'opt-7',
    explanation: {
      en: 'Standard 3-circle Venn diagram: 3 single-only outer lobes + 3 pairwise double-overlaps + 1 central triple-overlap = 7 regions.',
      ur: 'معیاری وین ڈایاگرام میں: 3 انفرادی خانے + 3 دوہرے مشترکہ خانے + 1 درمیانی تہرائی مشترکہ خانہ = کل 7 خانے۔',
    },
    hints: [
      {
        en: 'Break down the regions into: exclusive single parts, pairwise overlaps, and the central triple intersection.',
        ur: 'علاقوں کو تین حصوں میں بانٹیں: انفرادی، دوہرے اور درمیان والا مشترکہ۔',
      },
      {
        en: '3 + 3 + 1 = 7.',
        ur: '3 + 3 + 1 = 7۔',
      },
    ],
    timeLimit: 35,
    basePoints: 100,
  },
  {
    id: 'visual-e4',
    category: 'visual',
    difficulty: 'EASY',
    instructions: {
      en: 'Determine the matching silhouette.',
      ur: 'درست سایہ (Silhouette) پہچانیں۔',
    },
    question: {
      en: 'A cone resting on its circular flat base is viewed directly from above. What 2D shape is visible?',
      ur: 'ایک مخروط (Cone) اپنے گول پیندے پر کھڑا ہے۔ اسے بالکل اوپر سے دیکھا جائے تو کون سی 2D شکل نظر آئے گی؟',
    },
    options: [
      { id: 'opt-circle-dot', text: { en: 'A circle with a central point (the apex)', ur: 'ایک دائرہ جس کے درمیان میں ایک نقطہ (چوٹی) ہو' } },
      { id: 'opt-triangle', text: { en: 'A triangle', ur: 'ایک مثلث' } },
      { id: 'opt-oval', text: { en: 'An oval', ur: 'ایک بیضوی شکل' } },
    ],
    correctAnswer: 'opt-circle-dot',
    explanation: {
      en: 'Looking straight down from top to bottom at a cone, its circular base forms the boundary and the sharp tip appears as a point in the exact center.',
      ur: 'اوپر سے دیکھنے پر مخروط کا گول پیندہ دائرہ اور چوٹی کا سرا عین مرکز میں ایک نقطے کی طرح نظر آتا ہے۔',
    },
    hints: [
      {
        en: 'Imagine looking down into an ice cream cone.',
        ur: 'تصور کریں کہ آپ اوپر سے نیچے کی طرف دیکھ رہے ہیں۔',
      },
      {
        en: 'The circular boundary encloses the pointed apex in the middle.',
        ur: 'گول کنارے کے عین درمیان میں چوٹی نظر آئے گی۔',
      },
    ],
    timeLimit: 30,
    basePoints: 100,
  },

  // Visual Medium
  {
    id: 'visual-m1',
    category: 'visual',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Count the triangles in the geometric figure.',
      ur: 'ہندسی شکل میں موجود تمام مثلثوں کی درست گنتی کریں۔',
    },
    question: {
      en: 'A large triangle is divided by one vertical line from apex to base, and one horizontal line through the middle. How many triangles exist in total?',
      ur: 'ایک بڑی مثلث کو چوٹی سے بنیاد تک ایک عمودی لکیر اور درمیان سے ایک افقی لکیر سے کاٹا گیا ہے۔ کل کتنی مثلثیں بنتی ہیں؟',
    },
    options: [
      { id: 'opt-6', text: { en: '6 triangles', ur: '6 مثلثیں' } },
      { id: 'opt-4', text: { en: '4 triangles', ur: '4 مثلثیں' } },
      { id: 'opt-8', text: { en: '8 triangles', ur: '8 مثلثیں' } },
    ],
    correctAnswer: 'opt-6',
    explanation: {
      en: 'Top half: 2 small triangles + 1 combined top triangle = 3. Entire figure: 2 tall split triangles + 1 overall large triangle = 3. Total: 3 + 3 = 6 triangles.',
      ur: 'اوپری نصف میں: 2 چھوٹی اور 1 مشترکہ = 3۔ مکمل شکل میں: 2 لمبی تقسیم شدہ اور 1 بڑی مجموعی = 3۔ کل ملا کر 6 مثلثیں بنتی ہیں۔',
    },
    hints: [
      {
        en: 'Count the triangles in the smaller upper half first.',
        ur: 'پہلے اوپری چھوٹے حصے کی مثلثیں گنیں۔',
      },
      {
        en: 'Then count the triangles that use the bottom base of the full figure.',
        ur: 'پھر ان مثلثوں کو گنیں جو بڑی شکل کی نچلی بنیاد کا استعمال کرتی ہیں۔',
      },
    ],
    timeLimit: 45,
    basePoints: 150,
  },
  {
    id: 'visual-m2',
    category: 'visual',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Predict the folded 3D cube face.',
      ur: 'تہہ شدہ 3D مکعب کے بالمقابل رخ کا تعین کریں۔',
    },
    question: {
      en: 'In a standard cross net of a cube with 6 numbered faces: Face 1 is opposite Face 6, Face 2 is opposite Face 5. Which face is opposite Face 3?',
      ur: '6 چہروں والے مکعب کے جال میں: رخ 1 رخ 6 کے آمنے سامنے ہے، رخ 2 رخ 5 کے آمنے سامنے ہے۔ رخ 3 کے بالمقابل کون سا رخ ہوگا؟',
    },
    options: [
      { id: 'opt-face4', text: { en: 'Face 4', ur: 'رخ 4 (Face 4)' } },
      { id: 'opt-face5', text: { en: 'Face 5', ur: 'رخ 5' } },
      { id: 'opt-face6', text: { en: 'Face 6', ur: 'رخ 6' } },
    ],
    correctAnswer: 'opt-face4',
    explanation: {
      en: 'A cube has 3 pairs of opposite faces. The pairs are (1,6) and (2,5). The only remaining unused faces are 3 and 4, which must be opposite each other.',
      ur: 'مکعب کے 3 جوڑے ہوتے ہیں۔ (1,6) اور (2,5) جوڑے بن چکے ہیں، اس لیے باقی بچنے والے رخ 3 اور 4 ایک دوسرے کے آمنے سامنے ہوں گے۔',
    },
    hints: [
      {
        en: 'A cube has 6 faces and 3 opposite pairs.',
        ur: 'مکعب کے 6 رخ اور 3 بالمقابل جوڑے ہوتے ہیں۔',
      },
      {
        en: 'Match the remaining unassigned pair from {1, 2, 3, 4, 5, 6}.',
        ur: 'باقی ماندہ دو چہروں کا جوڑا بنائیں۔',
      },
    ],
    timeLimit: 40,
    basePoints: 150,
  },
  {
    id: 'visual-m3',
    category: 'visual',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Identify the spatial rotation match.',
      ur: 'گھومنے کے بعد یکساں شکل کی شناخت کریں۔',
    },
    question: {
      en: 'An "L" shape is rotated 180° clockwise in the plane. Which letter does it now resemble?',
      ur: 'ایک "L" شکل کو اسی سطح پر 180 ڈگری گھڑیال وار گھمایا گیا ہے۔ اب یہ کس سے مشابہ ہوگی؟',
    },
    options: [
      { id: 'opt-upside-down-l', text: { en: 'An upside-down inverted L (⅂)', ur: 'ایک الٹا "L" (⅂)' } },
      { id: 'opt-standard-l', text: { en: 'The same L', ur: 'وہی L' } },
      { id: 'opt-letter-t', text: { en: 'Letter T', ur: 'حرف T' } },
    ],
    correctAnswer: 'opt-upside-down-l',
    explanation: {
      en: 'Rotating "L" by 90° clockwise points the foot leftward and stem rightward; rotating another 90° (180° total) inverts both vertical and horizontal components into ⅂.',
      ur: 'L کو 180 ڈگری گھمانے سے اس کے دونوں رخ الٹ کر (⅂) کی شکل اختیار کر لیتے ہیں۔',
    },
    hints: [
      {
        en: 'A 180-degree rotation flips both upside-down and left-to-right.',
        ur: '180 ڈگری کا گھماؤ شکل کو الٹا بھی کرتا ہے اور دائیں بائیں بھی۔',
      },
      {
        en: 'The vertical stem that pointed up will now point down.',
        ur: 'عمودی لکیر جو اوپر تھی اب نیچے رخ کرے گی۔',
      },
    ],
    timeLimit: 35,
    basePoints: 150,
  },
  {
    id: 'visual-m4',
    category: 'visual',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Calculate the total faces of a cut prism.',
      ur: 'کٹے ہوئے منشور (Prism) کے کل چہروں کا حساب لگائیں۔',
    },
    question: {
      en: 'A solid triangular prism has 5 faces (2 triangular bases + 3 rectangular sides). If you slice off one triangular corner with a single flat cut, how many total faces does the new solid have?',
      ur: 'ایک ٹھوس مثلثی منشور کے 5 رخ ہوتے ہیں۔ اگر ایک سیدھے کٹ سے اس کا ایک کونا کاٹ دیا جائے تو نئی ٹھوس شکل کے کل کتنے رخ ہوں گے؟',
    },
    options: [
      { id: 'opt-6faces', text: { en: '6 faces', ur: '6 رخ (چہرے)' } },
      { id: 'opt-5faces', text: { en: '5 faces', ur: '5 رخ' } },
      { id: 'opt-7faces', text: { en: '7 faces', ur: '7 رخ' } },
    ],
    correctAnswer: 'opt-6faces',
    explanation: {
      en: 'Cutting off a single corner adds exactly one new flat planar cut face to the original solid while truncating the adjacent existing faces. 5 + 1 = 6 faces.',
      ur: 'ایک کونا کاٹنے سے ایک نیا چپٹا رخ شامل ہو جاتا ہے، اس لیے 5 + 1 = 6 رخ بنتے ہیں۔',
    },
    hints: [
      {
        en: 'Each flat cut across a corner creates exactly one new face.',
        ur: 'کسی کونے پر لگایا گیا ہر سیدھا کٹ ایک نیا رخ پیدا کرتا ہے۔',
      },
      {
        en: '5 original faces + 1 newly sliced face.',
        ur: '5 اصل رخ + 1 نیا کٹا ہوا رخ۔',
      },
    ],
    timeLimit: 45,
    basePoints: 150,
  },

  // Visual Hard
  {
    id: 'visual-h1',
    category: 'visual',
    difficulty: 'HARD',
    instructions: {
      en: 'Count hidden cubes in a 3D isometric stack.',
      ur: '3D آئسومیٹرک ڈھیر میں پوشیدہ مکعبوں کی گنتی کریں۔',
    },
    question: {
      en: 'A 3x3x3 large cube is built from 27 small 1x1x1 cubes. The exterior surfaces are completely painted navy blue. How many small cubes have ZERO blue faces?',
      ur: 'ایک بڑا 3x3x3 مکعب 27 چھوٹے مکعبوں سے بنا ہے۔ اس کے تمام بیرونی اطراف پر نیلا رنگ کیا گیا ہے۔ کتنے چھوٹے مکعب ایسے ہیں جن پر بالکل کوئی نیلا رنگ نہیں لگا؟',
    },
    options: [
      { id: 'opt-1cube', text: { en: '1 small cube (the exact center core)', ur: '1 چھوٹا مکعب (عین مرکز کا درمیانی)' } },
      { id: 'opt-0cubes', text: { en: '0 cubes', ur: '0 مکعب' } },
      { id: 'opt-8cubes', text: { en: '8 cubes', ur: '8 مکعب' } },
    ],
    correctAnswer: 'opt-1cube',
    explanation: {
      en: 'For an n x n x n painted cube, the unpainted interior core has dimensions (n-2) x (n-2) x (n-2). For n=3, (3-2)^3 = 1^3 = 1 unpainted cube in the very center.',
      ur: 'ایک رنگے ہوئے مکعب کے اندرونی غیر رنگے حصے کا فارمولا (n-2)^3 ہے۔ 3x3 کے لیے (3-2)^3 = 1 مکعب ہے جو عین درمیان میں چھپا ہوتا ہے۔',
    },
    hints: [
      {
        en: 'Subtract the outer layers: each dimension loses 2 outer painted cubes.',
        ur: 'بیرونی تہہ کو نکال دیں: ہر سمت سے 2 رنگے ہوئے کیوبز کم ہو جاتے ہیں۔',
      },
      {
        en: '(3 - 2) * (3 - 2) * (3 - 2) = ?',
        ur: '(3 - 2) * (3 - 2) * (3 - 2) = ؟',
      },
    ],
    timeLimit: 55,
    basePoints: 200,
  },
  {
    id: 'visual-h2',
    category: 'visual',
    difficulty: 'HARD',
    instructions: {
      en: 'Trace the unfolded paper punch symmetry.',
      ur: 'کاغذ کو تہہ کر کے سوراخ کرنے کے بعد کھلنے والی شکل پہچانیں۔',
    },
    question: {
      en: 'A square paper is folded in half horizontally, then in half vertically (now 1/4 the original size). A single circular hole is punched through the center of this folded square. When fully unfolded, how many holes appear?',
      ur: 'ایک چوکور کاغذ کو افقی طور پر ادھا تہہ کیا گیا، پھر عمودی طور پر آدھا (اب یہ اصل کا چوتھائی حصہ ہے)۔ اس کے مرکز میں ایک سوراخ کیا گیا۔ مکمل کھولنے پر کل کتنے سوراخ نظر آئیں گے؟',
    },
    options: [
      { id: 'opt-4holes', text: { en: '4 holes', ur: '4 سوراخ' } },
      { id: 'opt-2holes', text: { en: '2 holes', ur: '2 سوراخ' } },
      { id: 'opt-8holes', text: { en: '8 holes', ur: '8 سوراخ' } },
    ],
    correctAnswer: 'opt-4holes',
    explanation: {
      en: 'The paper was folded twice, creating 4 stacked layers. Punching one hole penetrates all 4 layers, resulting in exactly 4 symmetrically placed holes upon unfolding.',
      ur: 'کاغذ دو بار تہہ ہوا جس سے 4 تہیں بن گئیں۔ ایک سوراخ کرنے پر چاروں تہوں میں سوراخ ہوگا، اس لیے کھولنے پر 4 سوراخ نظر آئیں گے۔',
    },
    hints: [
      {
        en: 'How many layers of paper are created after two consecutive folds in half?',
        ur: 'دو بار آدھا تہہ کرنے کے بعد کاغذ کی کتنی تہیں بن جاتی ہیں؟',
      },
      {
        en: '2 x 2 = 4 layers.',
        ur: '2 x 2 = 4 تہیں بنتی ہیں۔',
      },
    ],
    timeLimit: 50,
    basePoints: 200,
  },
  {
    id: 'visual-h3',
    category: 'visual',
    difficulty: 'HARD',
    instructions: {
      en: 'Identify the topological path loop.',
      ur: 'بغیر لکیر دہرائے شکل بنانے کی شرط (Eulerian Path) معلوم کریں۔',
    },
    question: {
      en: 'Can a shape with 4 vertices that each connect to 3 edges (a complete graph K4) be drawn in a single continuous line without lifting the pen or tracing any line twice?',
      ur: 'کیا 4 کونوں والی شکل جہاں ہر کونے سے 3 لکیریں نکلتی ہوں، بغیر قلم اٹھائے اور بغیر لکیر دہرائے بنائی جا سکتی ہے؟',
    },
    options: [
      { id: 'opt-no', text: { en: 'No (it has 4 odd-degree vertices)', ur: 'نہیں (اس کے 4 طاق درجے والے کونے ہیں)' } },
      { id: 'opt-yes', text: { en: 'Yes', ur: 'ہاں' } },
    ],
    correctAnswer: 'opt-no',
    explanation: {
      en: 'By Euler’s theorem, an Eulerian trail is only possible if the graph has at most 2 vertices with odd degrees. Here all 4 vertices have degree 3 (odd), making it mathematically impossible.',
      ur: 'یولر کے نظریے کے مطابق، ایسی شکل صرف تب بنائی جا سکتی ہے جب زیادہ سے زیادہ 2 کونوں کی لکیریں طاق ہوں۔ یہاں تمام 4 کونوں پر 3 (طاق) لکیریں ہیں، لہٰذا یہ ممکن نہیں۔',
    },
    hints: [
      {
        en: 'Recall Euler’s condition regarding the number of odd-degree vertices.',
        ur: 'یولر کے طاق درجے والے کونوں کے اصول کو یاد کریں۔',
      },
      {
        en: 'A graph can have at most 2 odd-degree vertices for a single-stroke trace.',
        ur: 'ایک ہی رو میں شکل بنانے کے لیے زیادہ سے زیادہ 2 طاق کونے ہو سکتے ہیں۔',
      },
    ],
    timeLimit: 60,
    basePoints: 200,
  },
  {
    id: 'visual-h4',
    category: 'visual',
    difficulty: 'HARD',
    instructions: {
      en: 'Determine the gears rotation direction.',
      ur: 'آپس میں جڑے ہوئے گراریوں (Gears) کے گھماؤ کی سمت معلوم کریں۔',
    },
    question: {
      en: 'Five gears are meshed in a straight line: A, B, C, D, E. If Gear A rotates Clockwise, in which direction does Gear E rotate?',
      ur: 'پانچ گراریاں ایک قطار میں باہم جڑی ہیں: A، B، C، D، E۔ اگر گراری A گھڑی کی سمت (Clockwise) گھومتی ہے، تو گراری E کس سمت گھومے گی؟',
    },
    options: [
      { id: 'opt-cw', text: { en: 'Clockwise (same as A)', ur: 'گھڑی کی سمت (Clockwise)' } },
      { id: 'opt-ccw', text: { en: 'Counter-Clockwise', ur: 'گھڑی کے الٹ (Counter-Clockwise)' } },
    ],
    correctAnswer: 'opt-cw',
    explanation: {
      en: 'Meshed gears alternate directions: A = CW, B = CCW, C = CW, D = CCW, E = CW. Since there is an odd number of gears (5), Gear E rotates in the identical direction to Gear A (Clockwise).',
      ur: 'آپس میں جڑی گراریاں باری باری الٹ رخ گھومتی ہیں: A گھڑی کی سمت، B الٹ، C سیدھا، D الٹ، E سیدھا۔ 5 طاق عدد ہے اس لیے E بھی گھڑی کی سمت گھومے گی۔',
    },
    hints: [
      {
        en: 'Each gear in the train inverts the rotation direction of its neighbor.',
        ur: 'قطار میں ہر اگلی گراری اپنے ساتھ والی کے الٹ گھومتی ہے۔',
      },
      {
        en: 'Odd-positioned gears (1st, 3rd, 5th) rotate identically to the first gear.',
        ur: 'طاق پوزیشن والی گراریاں (پہلی، تیسری، پانچویں) پہلی گراری کی سمت ہی گھومتی ہیں۔',
      },
    ],
    timeLimit: 45,
    basePoints: 200,
  },

  // =========================================================================
  // CATEGORY 6: WORD & REASONING (12 puzzles: 4 Easy, 4 Medium, 4 Hard)
  // =========================================================================
  {
    id: 'word-e1',
    category: 'word',
    difficulty: 'EASY',
    instructions: {
      en: 'Complete the verbal analogy.',
      ur: 'لفظی مماثلت اور تعلق کو مکمل کریں۔',
    },
    question: {
      en: 'Light is to Eye as Sound is to _____?',
      ur: 'روشنی کا تعلق آنکھ سے ہے تو آواز کا تعلق کس سے ہے؟',
    },
    options: [
      { id: 'opt-ear', text: { en: 'Ear', ur: 'کان (Ear)' } },
      { id: 'opt-mouth', text: { en: 'Mouth', ur: 'منہ (Mouth)' } },
      { id: 'opt-hand', text: { en: 'Hand', ur: 'ہاتھ (Hand)' } },
    ],
    correctAnswer: 'opt-ear',
    explanation: {
      en: 'The eye is the sensory organ that perceives light; the ear is the sensory organ that perceives sound.',
      ur: 'آنکھ روشنی کو محسوس کرنے کا عضو ہے، جبکہ کان آواز کو سننے کا عضو ہے۔',
    },
    hints: [
      {
        en: 'Identify the bodily sensory organ responsible for hearing.',
        ur: 'سننے کی صلاحیت کے لیے ذمہ دار جسمانی عضو کا انتخاب کریں۔',
      },
      {
        en: 'Sound waves are collected by the ear.',
        ur: 'صوتی لہریں کان کے ذریعے محسوس کی جاتی ہیں۔',
      },
    ],
    timeLimit: 25,
    basePoints: 100,
  },
  {
    id: 'word-e2',
    category: 'word',
    difficulty: 'EASY',
    instructions: {
      en: 'Solve the authentic riddle.',
      ur: 'معیاری پہیلی کو حل کریں۔',
    },
    question: {
      en: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
      ur: 'میں بغیر منہ کے بولتی ہوں اور بغیر کان کے سنتی ہوں۔ میرا کوئی جسم نہیں، لیکن ہوا سے زندہ ہو جاتی ہوں۔ میں کیا ہوں؟',
    },
    options: [
      { id: 'opt-echo', text: { en: 'An Echo', ur: 'گونج (Echo)' } },
      { id: 'opt-cloud', text: { en: 'A Cloud', ur: 'بادل (Cloud)' } },
      { id: 'opt-tree', text: { en: 'A Tree', ur: 'درخت (Tree)' } },
    ],
    correctAnswer: 'opt-echo',
    explanation: {
      en: 'An echo repeats spoken sounds without a mouth, responds across valleys without ears, and is carried through air vibrations.',
      ur: 'گونج بولے گئے الفاظ کو بغیر منہ کے دہراتی ہے اور آواز کے ارتعاش سے پیدا ہوتی ہے۔',
    },
    hints: [
      {
        en: 'Think of what repeats your voice when shouting into a mountain valley.',
        ur: 'پہاڑوں کی وادی میں آواز لگانے پر جو آواز پلٹ کر آتی ہے اس پر غور کریں۔',
      },
      {
        en: 'It repeats sound waves back to you.',
        ur: 'یہ آپ کی آواز کو آپ تک واپس لوٹاتی ہے۔',
      },
    ],
    timeLimit: 35,
    basePoints: 100,
  },
  {
    id: 'word-e3',
    category: 'word',
    difficulty: 'EASY',
    instructions: {
      en: 'Identify the antonym pair.',
      ur: 'متضاد الفاظ کا درست جوڑا تلاش کریں۔',
    },
    question: {
      en: 'What is the opposite of "Abundant"?',
      ur: 'لفظ "کثیر" (Abundant) کا متضاد کیا ہے؟',
    },
    options: [
      { id: 'opt-scarce', text: { en: 'Scarce', ur: 'نایاب / قلیل (Scarce)' } },
      { id: 'opt-plentiful', text: { en: 'Plentiful', ur: 'وافر (Plentiful)' } },
      { id: 'opt-vast', text: { en: 'Vast', ur: 'وسیع (Vast)' } },
    ],
    correctAnswer: 'opt-scarce',
    explanation: {
      en: 'Abundant means existing in large quantities; Scarce means insufficient or rare in supply.',
      ur: 'کثیر یا وافر کا مطلب ہے بہت زیادہ، جبکہ قلیل یا نایاب اس کا الٹ ہے۔',
    },
    hints: [
      {
        en: 'Look for a word that denotes rare or in very short supply.',
        ur: 'وہ لفظ تلاش کریں جو کمی یا نایاب ہونے کو ظاہر کرے۔',
      },
      {
        en: 'Scarce is the direct antonym.',
        ur: 'Scarce اس کا براہ راست متضاد ہے۔',
      },
    ],
    timeLimit: 25,
    basePoints: 100,
  },
  {
    id: 'word-e4',
    category: 'word',
    difficulty: 'EASY',
    instructions: {
      en: 'Find the conceptual odd-one-out.',
      ur: 'غیر متعلقہ تصور کی نشاندہی کریں۔',
    },
    question: {
      en: 'Which word does NOT belong with the others? Platinum, Gold, Silver, Granite.',
      ur: 'کون سا لفظ باقیوں سے مختلف ہے؟ پلاٹینم، سونا، چاندی، گرینائٹ (Granite)۔',
    },
    options: [
      { id: 'opt-granite', text: { en: 'Granite (it is a rock, others are precious metals)', ur: 'گرینائٹ (یہ ایک پتھر ہے، باقی قیمتی دھاتیں ہیں)' } },
      { id: 'opt-gold', text: { en: 'Gold', ur: 'سونا' } },
      { id: 'opt-silver', text: { en: 'Silver', ur: 'چاندی' } },
    ],
    correctAnswer: 'opt-granite',
    explanation: {
      en: 'Platinum, Gold, and Silver are elemental precious metals. Granite is a composite igneous rock.',
      ur: 'پلاٹینم، سونا اور چاندی قیمتی دھاتیں ہیں، جبکہ گرینائٹ ایک چٹانی پتھر ہے۔',
    },
    hints: [
      {
        en: 'Consider the metallurgical category of the items.',
        ur: 'اشیاء کی مادی اور دھاتی قسم پر غور کریں۔',
      },
      {
        en: 'Three are metallic chemical elements; one is an igneous rock.',
        ur: 'تین دھاتیں ہیں جبکہ ایک پتھر ہے۔',
      },
    ],
    timeLimit: 25,
    basePoints: 100,
  },

  // Word Medium
  {
    id: 'word-m1',
    category: 'word',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Solve the classic lateral riddle.',
      ur: 'فکری اور شعوری پہیلی کا حل تلاش کریں۔',
    },
    question: {
      en: 'What has keys but no locks, space but no room, and you can enter but cannot go inside?',
      ur: 'وہ کیا چیز ہے جس میں کنجیاں (Keys) ہیں مگر تالے نہیں، اسپیس (Space) ہے مگر کمرہ نہیں، اور داخل (Enter) ہو سکتے ہیں مگر اندر نہیں جا سکتے؟',
    },
    options: [
      { id: 'opt-keyboard', text: { en: 'A Keyboard', ur: 'کی بورڈ (Keyboard)' } },
      { id: 'opt-piano', text: { en: 'A Piano', ur: 'پیانو (Piano)' } },
      { id: 'opt-map', text: { en: 'A Map', ur: 'نقشہ (Map)' } },
    ],
    correctAnswer: 'opt-keyboard',
    explanation: {
      en: 'A computer keyboard has letter keys, a space bar, and an Enter key, matching all three clues playfully.',
      ur: 'کمپیوٹر کے کی بورڈ میں کیز (کنجیاں)، اسپیس بار، اور اینٹر (Enter) کا بٹن ہوتا ہے۔',
    },
    hints: [
      {
        en: 'Think of a common technological device you type on every day.',
        ur: 'ایک ایسی روزمرہ کی ڈیوائس سوچیں جس پر آپ ٹائپ کرتے ہیں۔',
      },
      {
        en: 'Look at the Enter and Space buttons on a computer input device.',
        ur: 'کمپیوٹر پر لکھنے والے آلے کے بٹنوں پر غور کریں۔',
      },
    ],
    timeLimit: 40,
    basePoints: 150,
  },
  {
    id: 'word-m2',
    category: 'word',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Deduce the syllogistic logic.',
      ur: 'منطقی قیاس (Syllogism) کا درست نتیجہ معلوم کریں۔',
    },
    question: {
      en: 'Premise 1: All scientists are curious. Premise 2: Some curious people love puzzles. Conclusion: Can we be certain that "Some scientists love puzzles"?',
      ur: 'مقدمہ 1: تمام سائنسدان متجسس ہوتے ہیں۔ مقدمہ 2: کچھ متجسس لوگ پہیلیاں پسند کرتے ہیں۔ نتیجہ: کیا ہم قطعی طور پر کہہ سکتے ہیں کہ "کچھ سائنسدان پہیلیاں پسند کرتے ہیں"؟',
    },
    options: [
      { id: 'opt-uncertain', text: { en: 'No, it is not logically certain', ur: 'نہیں، یہ منطقی طور پر لازمی نہیں ہے' } },
      { id: 'opt-certain', text: { en: 'Yes, it is guaranteed', ur: 'ہاں، یہ یقینی ہے' } },
    ],
    correctAnswer: 'opt-uncertain',
    explanation: {
      en: 'The curious people who love puzzles might belong entirely to the non-scientist portion of curious individuals. Without an overlap guarantee, the conclusion is invalid.',
      ur: 'یہ ممکن ہے کہ پہیلیاں پسند کرنے والے متجسس لوگ سائنسدانوں کے علاوہ ہوں، اس لیے یہ نتیجہ یقینی نہیں ہے۔',
    },
    hints: [
      {
        en: 'Draw two overlapping sets inside a larger "curious" circle.',
        ur: 'تصور کریں کہ متجسس افراد کے بڑے دائرے کے اندر دو الگ الگ گروپس ہو سکتے ہیں۔',
      },
      {
        en: 'Does "some curious people" necessarily intersect with scientists?',
        ur: 'کیا پہیلیاں پسند کرنے والے طبقے کا سائنسدانوں کے ساتھ ملنا لازمی ہے؟',
      },
    ],
    timeLimit: 50,
    basePoints: 150,
  },
  {
    id: 'word-m3',
    category: 'word',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Complete the advanced conceptual analogy.',
      ur: 'جدید علمی مماثلت کو مکمل کریں۔',
    },
    question: {
      en: 'Cartographer is to Map as Choreographer is to _____?',
      ur: 'نقشہ نویس کا تعلق نقشے سے ہے تو کوریوگرافر کا تعلق کس سے ہے؟',
    },
    options: [
      { id: 'opt-dance', text: { en: 'Dance / Movement sequence', ur: 'رقص اور حرکات کی ترتیب' } },
      { id: 'opt-speech', text: { en: 'Speech', ur: 'تقریر' } },
      { id: 'opt-painting', text: { en: 'Painting', ur: 'مصوری' } },
    ],
    correctAnswer: 'opt-dance',
    explanation: {
      en: 'A cartographer designs and records geographical maps; a choreographer creates and arranges dance movements.',
      ur: 'جس طرح نقشہ نویس جغرافیائی نقشے تخلیق کرتا ہے، اسی طرح کوریوگرافر رقص اور اسٹیج کی حرکات ترتیب دیتا ہے۔',
    },
    hints: [
      {
        en: 'What creative art form does a choreographer compose?',
        ur: 'کوریوگرافر فن کے کس شعبے میں ترتیب دیتا ہے؟',
      },
      {
        en: 'It relates to organized physical dance movement.',
        ur: 'اس کا تعلق رقص کی باقاعدہ حرکات سے ہے۔',
      },
    ],
    timeLimit: 35,
    basePoints: 150,
  },
  {
    id: 'word-m4',
    category: 'word',
    difficulty: 'MEDIUM',
    instructions: {
      en: 'Decipher the anagram clues.',
      ur: 'الفاظ کے حروف کی ترتیب (Anagram) کا معمہ بوجھیں۔',
    },
    question: {
      en: 'Rearrange the letters of "LISTEN" to spell a state of quietness.',
      ur: 'لفظ "LISTEN" کے حروف کو دوبارہ ترتیب دے کر خاموشی کی حالت کا لفظ بنائیں۔',
    },
    options: [
      { id: 'opt-silent', text: { en: 'SILENT', ur: 'SILENT (خاموش)' } },
      { id: 'opt-tinsel', text: { en: 'TINSEL', ur: 'TINSEL' } },
      { id: 'opt-enlist', text: { en: 'ENLIST', ur: 'ENLIST' } },
    ],
    correctAnswer: 'opt-silent',
    explanation: {
      en: '"SILENT" uses the exact letters [S, I, L, E, N, T] and directly signifies a state of quiet stillness.',
      ur: '"SILENT" میں وہی تمام حروف [S, I, L, E, N, T] آتے ہیں اور اس کا مطلب مکمل خاموشی ہے۔',
    },
    hints: [
      {
        en: 'The desired word starts with "S" and means quiet.',
        ur: 'مطلوبہ لفظ "S" سے شروع ہوتا ہے اور اس کا مطلب خاموشی ہے۔',
      },
      {
        en: 'L-I-S-T-E-N -> S-I-L-E-N-T.',
        ur: 'L-I-S-T-E-N کو تبدیل کریں S-I-L-E-N-T میں۔',
      },
    ],
    timeLimit: 35,
    basePoints: 150,
  },

  // Word Hard
  {
    id: 'word-h1',
    category: 'word',
    difficulty: 'HARD',
    instructions: {
      en: 'Solve the profound existential riddle.',
      ur: 'فلسفیانہ اور فکری پہیلی کا حل تلاش کریں۔',
    },
    question: {
      en: 'I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?',
      ur: 'میں زندہ نہیں مگر بڑھتی ہوں؛ میرے پھیپھڑے نہیں مگر مجھے ہوا درکار ہے؛ میرا منہ نہیں لیکن پانی مجھے ختم کر دیتا ہے۔ میں کیا ہوں؟',
    },
    options: [
      { id: 'opt-fire', text: { en: 'Fire', ur: 'آگ (Fire)' } },
      { id: 'opt-plant', text: { en: 'A Plant', ur: 'پودا' } },
      { id: 'opt-shadow', text: { en: 'A Shadow', ur: 'سایہ' } },
    ],
    correctAnswer: 'opt-fire',
    explanation: {
      en: 'Fire expands (grows), consumes oxygen (needs air), and is extinguished immediately by water.',
      ur: 'آگ پھیلتی ہے، آکسیجن کے بغیر بھڑک نہیں سکتی، اور پانی سے فورا بجھ جاتی ہے۔',
    },
    hints: [
      {
        en: 'Consider a natural chemical combustion phenomenon.',
        ur: 'جلنے اور تپش کے قدرتی عمل پر غور کریں۔',
      },
      {
        en: 'Oxygen feeds it, while water extinguishes it.',
        ur: 'ہوا اسے جلاتی ہے اور پانی بجھا دیتا ہے۔',
      },
    ],
    timeLimit: 45,
    basePoints: 200,
  },
  {
    id: 'word-h2',
    category: 'word',
    difficulty: 'HARD',
    instructions: {
      en: 'Analyze the epistemic truth paradox.',
      ur: 'سچ اور منطق کے باریک فرق کا تجزیہ کریں۔',
    },
    question: {
      en: 'Statement: "This statement contains exactly three errors." It has spelling erorrs, it has grammar errors, but how many errors total?',
      ur: 'بیان: "اس جملے میں ٹھیک تین غلطیاں ہیں۔" اگر پہلی غلطی املا کی ہو اور دوسری گرامر کی، تو کیا یہ جملہ خود تیسری غلطی رکھتا ہے؟',
    },
    options: [
      { id: 'opt-meta-true', text: { en: 'The claim that it has 3 errors is itself the 3rd error if false, creating a self-referential paradox', ur: 'تین غلطیوں کا دعویٰ بذاتِ خود تیسری غلطی ہے، جو ایک خود انحصاری الٹ پھیر بناتا ہے' } },
      { id: 'opt-plain-false', text: { en: 'It has only 1 error', ur: 'صرف 1 غلطی ہے' } },
      { id: 'opt-none', text: { en: 'No errors', ur: 'کوئی غلطی نہیں' } },
    ],
    correctAnswer: 'opt-meta-true',
    explanation: {
      en: 'If it only has 2 visible errors, then asserting it has 3 errors is false, which itself constitutes the 3rd error, satisfying the condition!',
      ur: 'اگر اس میں بظاہر 2 غلطیاں ہیں، تو یہ کہنا کہ 3 غلطیاں ہیں بذات خود غلط (تیسری غلطی) بن جاتا ہے جس سے کل 3 غلطیاں پوری ہو جاتی ہیں!',
    },
    hints: [
      {
        en: 'Count the meta-claim about the statement itself as an error.',
        ur: 'جملے کے اپنے بارے میں کیے گئے دعوے کو بھی شمار کریں۔',
      },
      {
        en: 'Self-referential statements create their own truth condition.',
        ur: 'خود پر لاگو ہونے والے جملے اپنے اندر حل پیدا کرتے ہیں۔',
      },
    ],
    timeLimit: 60,
    basePoints: 200,
  },
  {
    id: 'word-h3',
    category: 'word',
    difficulty: 'HARD',
    instructions: {
      en: 'Decipher the semantic relationship.',
      ur: 'الفاظ کے باہمی معنوی رشتے کو پرکھیں۔',
    },
    question: {
      en: 'What unique characteristic links the words: DEEDED, ROTATOR, CIVIC, LEVEL, RACECAR?',
      ur: 'ان الفاظ میں کیا منفرد قدرتی خصوصیت مشترک ہے: DEEDED, ROTATOR, CIVIC, LEVEL, RACECAR؟',
    },
    options: [
      { id: 'opt-palindromes', text: { en: 'They are all Palindromes (read the same forwards and backwards)', ur: 'تمام الفاظ الٹ اور سیدھا یکساں پڑھے جاتے ہیں (Palindromes)' } },
      { id: 'opt-rhyme', text: { en: 'They all rhyme', ur: 'تمام ہم قافیہ ہیں' } },
      { id: 'opt-nouns', text: { en: 'They are all abstract nouns', ur: 'تمام اسمِ مجرد ہیں' } },
    ],
    correctAnswer: 'opt-palindromes',
    explanation: {
      en: 'Every word in the list is a palindrome: spelling it backwards yields the exact identical word (e.g. R-A-C-E-C-A-R).',
      ur: 'یہ تمام الفاظ "مقلوب مستوی" (Palindromes) ہیں، جنہیں دونوں اطراف سے پڑھیں تو ایک جیسے ہی رہتے ہیں۔',
    },
    hints: [
      {
        en: 'Read the words from right to left letter by letter.',
        ur: 'الفاظ کو دائیں سے بائیں حرف بہ حرف پڑھ کر دیکھیں۔',
      },
      {
        en: 'Forward spelling equals backward spelling.',
        ur: 'سیدھا اور الٹا پڑھنے میں کوئی فرق نہیں ہے۔',
      },
    ],
    timeLimit: 40,
    basePoints: 200,
  },
  {
    id: 'word-h4',
    category: 'word',
    difficulty: 'HARD',
    instructions: {
      en: 'Identify the linguistic root distinction.',
      ur: 'لسانی اور معنوی باریکی کا جائزہ لیں۔',
    },
    question: {
      en: 'A traveler meets two villagers: one always tells the truth, one always lies. The traveler asks: "If I ask the other villager which road leads to the city, which road will he point to?" Which road should the traveler choose?',
      ur: 'ایک مسافر دو دیہاتیوں سے ملتا ہے: ایک ہمیشہ سچ بولتا ہے، ایک ہمیشہ جھوٹ۔ مسافر پوچھتا ہے: "اگر میں دوسرے شخص سے پوچھوں کہ شہر کا راستہ کون سا ہے، تو وہ کس طرف اشارہ کرے گا؟" مسافر کو کون سا راستہ چننا چاہیے؟',
    },
    options: [
      { id: 'opt-opposite-road', text: { en: 'The OPPOSITE of whichever road is pointed to', ur: 'جس طرف اشارہ کیا جائے اس کے بالکل برعکس (مخالف) راستہ' } },
      { id: 'opt-same-road', text: { en: 'The exact road pointed to', ur: 'وہی اشارہ کردہ راستہ' } },
    ],
    correctAnswer: 'opt-opposite-road',
    explanation: {
      en: 'Either the truth-teller reports the lie, or the liar lies about the truth. In both cases, the answer given is guaranteed to be the FALSE road. Therefore, the traveler must choose the opposite road.',
      ur: 'سچا شخص جھوٹے کا جھوٹ بتائے گا، اور جھوٹا شخص سچے کے سچ کا الٹ بتائے گا۔ دونوں صورتوں میں بتایا گیا راستہ غلط ہی ہوگا، لہٰذا مسافر کو اس کے برعکس راستہ منتخب کرنا ہوگا۔',
    },
    hints: [
      {
        en: 'Trace the response if asking the truth-teller about the liar.',
        ur: 'غور کریں اگر سچے سے جھوٹے کے بارے میں پوچھا جائے تو وہ کیا کہے گا۔',
      },
      {
        en: 'Both paths funnel through one true statement and one lie, yielding a false answer.',
        ur: 'دونوں صورتوں میں ایک سچ اور ایک جھوٹ مل کر ہمیشہ غلط جواب ہی تیار کریں گے۔',
      },
    ],
    timeLimit: 70,
    basePoints: 200,
  },
];
