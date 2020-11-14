import { useState, useEffect } from "react";

export default (
  startTimeout: any,
  delay: number = 300,
  cb?: () => void
): [boolean] => {
  const [timeoutTimer, setTimeoutTimer] = useState<number>();
  const [timedOut, setTimedOut] = useState<boolean>(false);

  useEffect(() => {
    setTimedOut(false);

    clearTimeout(Number(timeoutTimer));

    setTimeoutTimer(
      Number(
        setTimeout(() => {
          if (cb) cb();
          setTimedOut(true);
        }, delay)
      )
    );
  }, [startTimeout]);

  return [timedOut];
};
