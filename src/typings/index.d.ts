import { ModelList } from "@/constant";
import { RouteProps } from "react-router-dom";
export namespace White {
  // route
  export interface RouteConfig extends RouteProps {
    routes?: RouteConfig[]; // 子列表
    tabBars?: RouteTabBar[];
    redirect?: string;
    isTabIndex?: boolean;
    sceneMode?: "bottom" | "left" | "right" | "fade" | "scroll" | undefined;
    title?: string;
    path: string | string[];
    component?: ComponentClass<any> | FunctionComponent<any>;
  }

  export type RouteTabBar = RouteConfig & {
    icon: string;
    title: string;
  };
  // notice
  export interface NoticeProps {
    key?: string;
    content?: string;
    type: "loading" | "success" | "fail" | "warning" | "info";
    duration: number;
    onClose?: () => void;
  }
  export interface NotifiCation extends NotifiCationRef {
    destroy: () => void;
  }
  export interface NotifiCationProps {
    transitionTime?: number;
    duration?: number;
  }

  export interface NotifiCationRef {
    // add notice
    addNotice: (notice: NoticeProps) => () => void;
    // removeAll notice
    removeAll: () => void;
  }
  // switch
  export type SwitchType = "right" | "bottom" | "scroll" | "fade";
  export interface AnimatedSwitchProps {
    children?: ReactNode;
    classNames: string;
    primaryKey: Key | null;
    timeout?: number;
    type?: SwitchType;
    backClassName?: string;
    forwardClassName?: string;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
  }

  export interface VirListProps {
    list: any[];
    itemH: number;
    itemRender: (key: any, val: any) => JSX.Element;
    wrapNum?: number;
    loadMoreHieght?: number;
    height?: number;
    wrapperClass?: string;
    isEndLoad?: boolean;
    refreshHeight?: number;
    pageSize?: number;
  }

  // useModel
  export type ModelKeys = keyof typeof ModelList;
  export type Models = typeof ModelList;
  export type ModelsReturnTypes<T> = ReturnType<Models[T]>;
  export const useModel: <T extends ModelKeys>(
    model: ModelKeys
  ) => ModelsReturnTypes<T>;
  export const useModel: <T extends ModelKeys, U>(
    model: T,
    selector: (model: ModelsReturnTypes<T>) => U
  ) => U;
}
