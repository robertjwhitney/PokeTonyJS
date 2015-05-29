# PokeTonyJS

## Background

Tony is poking me on Facebook, forcing my hand in a poke war I did not want. We are now locked in an arms race.

## How to

Only tested in Chrome, but should work in any browser. 

1) Open up the inspector (right click, choose "Inspect Element" in Chrome).

2) Click "Console"

3) Copy and paste script into the Console

4) Poke any pokes you already have.

5) Leave window open. 

6) Laugh maniacally

7) ???

8) Profit

It will poke back one person per interval  as long as the window is open

## FAQ

### Sure- your script can poke Tony, but what about people with other names?

It will poke not only Tony, but anyone at the top of your poking list. Change the `whoAmIPoking` variable to something more appropriate like "Steve," "John," or try something generic like "Friend."

### Does it scale?

Does it ever! Have a lot of people poking you? Decrease the `howOften` variable to something more frequent. It will poke one person per interval. I'd be careful about making it too frequent though, Facebook might think you are a bot.

## Roadmap

### v0.0.2

- Multiple pokes per interval (poke the entire array of people available to poke).
- Replace `whoAmIPoking` with name of actual person poked.
- Chrome extension
- Find other ways to automate annoying Tony.

### v0.0.3

- Poke Tony from the cloud?
- Headless browser option?
- If not, maybe a shell script to automate opening chrome window in background and doing the pokes there?

### v0.0.4

- Poke Tony As A Service™ (PTAAS)™


## NOTICE

THIS SOFTWARE SHOULD NOT BE USED BY ANYONE EVER, IT IS EXPRESSLY DESIGNED FOR POKING TONY, IF YOU ARE NOT IN A POKING WAR WITH TONY I DON'T KNOW WHY YOU WOULD USE THIS.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
