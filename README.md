# deno-cliffy required env issue

We [@polyseam](https://github.com/polyseam) are happy users of Cliffy!

We are aiming to provide unique error codes for everything that can go wrong in
our app.

One example is that we want to have a certain exit code when a required
environment variable is missing.

When using the `.env()` method exposed by cliffy, we are able to `require` a
variable, but to the best of our knowledge the error code provided when a
required variable is missing is always `1`.

We would like to be able to provide a custom error code for this case, so that
when the user examines the exit status they can go to the relevant section in
our documentation.

To view the exitCode of the previously executed command in bash, just run:

```sh
echo $?
```
