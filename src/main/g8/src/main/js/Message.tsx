import * as React from "react"
import { Label } from "office-ui-fabric-react/lib/Label"

export interface MessageProps {
    message?: string
}

export const Message: React.SFC<MessageProps> = (props) => {
    return (
        <Label>
            {props.message ? props.message : "No Message"}
        </Label>
    )
}
