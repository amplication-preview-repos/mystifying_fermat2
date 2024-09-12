import { TutoringSessionWhereInput } from "./TutoringSessionWhereInput";
import { TutoringSessionOrderByInput } from "./TutoringSessionOrderByInput";

export type TutoringSessionFindManyArgs = {
  where?: TutoringSessionWhereInput;
  orderBy?: Array<TutoringSessionOrderByInput>;
  skip?: number;
  take?: number;
};
