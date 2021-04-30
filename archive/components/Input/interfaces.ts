import {ChangeEvent} from "react";

export interface IProps  {
    onChange: (event: ChangeEvent<HTMLInputElement>) => string|number,
    value: string|number,
}
