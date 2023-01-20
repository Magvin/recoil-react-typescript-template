import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

beforeEach(() => {
  fetchMock.resetMocks();
});

test("renders learn react link", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify([{ id: 1, title: "test title", body: "this is test body" }])
  );
  render(
    <RecoilRoot>
      <RecoilNexus />
      <App />
    </RecoilRoot>
  );
  await waitFor(async () => {
    const component = screen.queryByText("Fetching posts...");
    return expect(component).not.toBeInTheDocument();
  });
  expect(screen.getByTestId("post-1")).toBeTruthy();
});
