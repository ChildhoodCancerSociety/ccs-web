import { useRef, useEffect } from "react";

export default function useUpdateCause<T extends {}>(name: string, props: T) {
  const previousProps = useRef<T>();

  useEffect(() => {
    if (previousProps.current) {
      const keys = Object.keys({ ...previousProps.current, props });
      const changes: { [key in keyof T]?: { from: any, to: any } } = {};
      keys.forEach((key) => {
        if (previousProps?.current?.[key as keyof T] !== props[key as keyof T]) {
          changes[key as keyof T] = {
            from: previousProps?.current?.[key as keyof T],
            to: props[key as keyof T],
          };
        }
      });

      if (Object.keys(changes).length) {
        console.warn("UPDATES", name, changes);
      }
    }

    previousProps.current = props;
  });
}
