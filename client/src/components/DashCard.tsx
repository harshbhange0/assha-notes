import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { IconType } from "react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export interface DashCardProps {
  title: string;
  description: string;
  info: string | number;
  Icon: IconType;
}

const DashCard = ({ title, description, info, Icon }: DashCardProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link className="" to={"/add/" + title.toLowerCase()}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <span className="h-4 w-4 text-muted-foreground">
                <Icon />
              </span>
            </CardHeader>
            <CardContent>
              <div className="truncate text-2xl font-bold">{info}</div>
              <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="bottom">Click To Add {title}</TooltipContent>
    </Tooltip>
  );
};
export default DashCard;
