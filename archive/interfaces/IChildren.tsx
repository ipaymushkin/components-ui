import React from "react";

export interface IChildren {
    children(data: {
        [key: string]: string|number|((e: string) => void)
    }): React.ReactElement,
}
