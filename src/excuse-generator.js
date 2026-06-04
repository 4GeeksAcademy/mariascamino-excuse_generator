export const who = ["my sister", "my dog", "my mom", "my cousin"];
export const action = ["ate", "hid", "broke", "forgot", "lost", "destroyed"];
export const what = ["my homework", "my lunch", "my money", "my sandwich", "my phone", "the bus ticket"];
export const when = ["today", "yesterday", "this morning", "last night", "a few minutes ago", "on my way here"];

export function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  console.log(excuse);
  return excuse;
}
