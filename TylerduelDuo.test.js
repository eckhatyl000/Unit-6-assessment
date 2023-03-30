const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});
test("clicking the Draw button displays the div with id = 'choices'", async () => {
    render(<Game />);
    const drawButton = screen.getByRole("button", { name: "Draw" });
    userEvent.click(drawButton);
    await waitFor(() => screen.getByRole("heading", { name: "Choose your fighter:" }));
    expect(screen.getByTestId("choices")).toBeInTheDocument();
});

test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    render(<Game />);
    const drawButton = screen.getByRole("button", { name: "Draw" });
    userEvent.click(drawButton);
    await waitFor(() => screen.getByRole("heading", { name: "Choose your fighter:" }));
    const addButton = screen.getByRole("button", { name: "Add to Duo" });
    userEvent.click(addButton);
    await waitFor(() => screen.getByRole("heading", { name: "Your Duo:" }));
    expect(screen.getByTestId("player-duo")).toBeInTheDocument();
});
