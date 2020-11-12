import React, { ReactNode } from "react";
// @ts-ignore
import { useAPI } from "./use-api";

declare const ENTITY_PLURAL_DISPLAY_NAME: string;
declare const RESOURCE: string;
declare const CELLS: ReactNode[];
declare interface ENTITY_TYPE {
  id: string;
}

type ENTITY = ENTITY_TYPE;
type Data = ENTITY[];

export const ENTITY_LIST = () => {
  const [data, error] = useAPI<Data>(`/${RESOURCE}`);
  return (
    <>
      <h1>{ENTITY_PLURAL_DISPLAY_NAME}</h1>
      <h2>Items</h2>
      <table>
        <tr>
          <th>id</th>
        </tr>
        {data &&
          data.map((item: ENTITY) => (
            <tr>
              <td>{item.id}</td>
              {CELLS}
            </tr>
          ))}
      </table>
      <h2>Error</h2>
      {error && error.toString()}
    </>
  );
};
