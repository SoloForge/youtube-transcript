import { expect, describe, it } from "vitest";
import { YoutubeTranscript } from "../src/index.js";

// https://www.youtube.com/watch?v=KzxR2Vcr9CM&ab_channel=MatthewBerman

describe("YoutubeTranscript", () => {
  it("should fetch transcript", async () => {
    const transcript = await YoutubeTranscript.fetchTranscript(
      "KzxR2Vcr9CM",
      {},
      {
        protocol: "http",
        host: "127.0.0.1",
        port: 7890,
      }
    );
    // console.log(transcript);
    expect(transcript).toBeDefined();
  });
});
