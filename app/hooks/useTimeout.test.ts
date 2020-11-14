import useTimeout from "./useTimeout";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useTimeout", () => {
  it("should set timedOut after 100ms after event", async () => {
    const delay = 100;
    let twtwb = "";

    const { result, waitFor } = renderHook(() => useTimeout(twtwb, delay));

    expect(result.current[0]).toBe(false);

    await waitFor(() => expect(result.current[0]).toBe(true), { timeout: 101 });
  });

  it("should call cb after specified time", async () => {
    const mockedCb = jest.fn();
    const { result, waitFor } = renderHook(() =>
      useTimeout("test", 100, mockedCb)
    );

    expect(result.current[0]).toBe(false);

    await waitFor(() => expect(result.current[0]).toBe(true), { timeout: 101 });
    expect(mockedCb).toHaveBeenCalled();
  });
});
