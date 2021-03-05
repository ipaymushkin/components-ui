import {ChangeEvent} from "react";

export interface IProps  {
    onChange: (event: ChangeEvent<HTMLInputElement>) => ChangeEvent<HTMLInputElement>,
    value: string|number,
}
