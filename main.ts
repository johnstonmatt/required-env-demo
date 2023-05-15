import * as cliffy from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
// this function is illustrates how cliffy's env() function can only return exitCode 1 upon failure
// which is not flexible enough to help people debug downstream

if (import.meta.main) {
  await new cliffy.Command().name("demo")
    .env("WHO_TO_GREET=<value:string>", "The person or group to greet", {
      required: true,
      exitCode: 99, // this is something we invented, but it seems reasonable
    })
    .action(
      async (options: { whoToGreet: string }) => {
        console.log(`Hello ${options.whoToGreet}!`);
      },
    ).parse(Deno.args);
}
