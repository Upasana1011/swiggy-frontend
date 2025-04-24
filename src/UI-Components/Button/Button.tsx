import { ButtonBase } from "@mui/material";
import cx from "classnames";
import { ButtonHTMLAttributes } from "react";
import { LoadingIcon } from "../../Icons/LoadingIcon";

export type ButtonProps = {
  customType?:
    | "icon"
    | "primary"
    | "secondary"
    | "danger"
    | "transparent"
    | "text"
    | "ghost"
    | "ghost_icon"
    | "warning"
    | "primary-outlined"
    | "special-primary"
    | "success";
  size?: "small" | "regular" | "large";
  block?: boolean;
  isLoading?: boolean;
  active?: boolean;
  width?: any;
  customColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BUTTON_TYPE_CLASSES = {
  /* @tw */
  PRIMARY:
    "border-neutral-10 bg-surface-btnColor hover:bg-dark_green text-white disabled:bg-neutral-10 disabled:text-neutral-40",
  /* @tw */
  SECONDARY:
    "border-neutral-10 hover:bg-surface-lighter-grey text-neutral bg-white disabled:text-neutral-20  disabled:bg-white rounded-lg",
  /* @tw */
  DANGER:
    "border-neutral-10 bg-red hover:bg-red-70 text-white disabled:bg-neutral-10 disabled:text-neutral-40",
  /* @tw */
  WARNING:
    "border-neutral-10 bg-orange hover:bg-orange-70 text-white disabled:bg-neutral-10 disabled:text-neutral-40",
  /* @tw */
  HEIGHT:
    "data-[size=regular]:h-10 data-[size=small]:h-8 data-[size=large]:h-12",
  /* @tw */
  ICON: "border-neutral-10 data-[size=regular]:min-w-10 data-[size=small]:min-w-8 data-[size=large]:min-w-12 !px-0 rounded-full",
  /* @tw */
  FONTS:
    "data-[size=regular]:text-body data-[size=small]:text-body-sm data-[size=large]:text-body-lg",
  /* @tw */
  TRANSPARENT:
    "border-neutral-10 bg-surface-transparent !border-none !px-0 drop-shadow-none",
  /* @tw */
  GHOST_ICON:
    "border-neutral-10 bg-surface-transparent !border-none !px-1 drop-shadow-none  hover:!bg-surface-lighter-grey disabled:text-neutral-20 data-[size=small]:min-w-8 ",
  /* @tw */
  TEXT: "border-neutral-10 bg-surface-transparent !border-none !p-0 drop-shadow-none font-light hover:!text-blue",
  /* @tw */
  PRIMARY_OUTLINED:
    "border-dark_green text-dark_green hover:bg-dark_green-10 disabled:text-blue-30 disabled:bg-white disabled:border-dark_green-10",
  SUCCESS:
    "bg-dark_green hover:bg-dark_green-70 text-white disabled:bg-neutral-10 disabled:text-neutral-40",
};

export const Button = ({
  children,
  customType = "secondary",
  size = "regular",
  block = false,
  isLoading = false,
  active = false,
  width,
  customColor = "",
  ...props
}: ButtonProps) => {
  const loadingGhostIcon = customType === "ghost" && isLoading;

  return (
    <ButtonBase
      data-size={size}
      data-active={active}
      className={cx(
        "all:unset box-border flex cursor-pointer items-center justify-center rounded border border-solid px-4  drop-shadow-button transition-all disabled:pointer-events-none disabled:cursor-no-drop w-fit !font-bold",
        BUTTON_TYPE_CLASSES.FONTS,
        BUTTON_TYPE_CLASSES.HEIGHT,
        {
          [BUTTON_TYPE_CLASSES.PRIMARY]: customType === "primary",
          [BUTTON_TYPE_CLASSES.WARNING]: customType === "warning",
          [BUTTON_TYPE_CLASSES.DANGER]: customType === "danger",
          [BUTTON_TYPE_CLASSES.SECONDARY]: customType === "secondary",
          [`${BUTTON_TYPE_CLASSES.SECONDARY} ${BUTTON_TYPE_CLASSES.ICON}`]:
            customType === "icon",
          [BUTTON_TYPE_CLASSES.TRANSPARENT]: customType === "transparent",
          [BUTTON_TYPE_CLASSES.GHOST_ICON]: customType === "ghost_icon",
          [BUTTON_TYPE_CLASSES.GHOST_ICON]: customType === "ghost",
          [BUTTON_TYPE_CLASSES.TEXT]: customType === "text",
          [BUTTON_TYPE_CLASSES.PRIMARY_OUTLINED]:
            customType === "primary-outlined",
          [BUTTON_TYPE_CLASSES.SUCCESS]: customType === "success",
          "w-full": block,
          [width]: Boolean(width),
          [customColor]: Boolean(customColor),
        }
      )}
      {...props}
    >
      {isLoading && (
        <span className="mr-1.5 flex origin-center animate-spin">
          <LoadingIcon />
        </span>
      )}
      {loadingGhostIcon ? null : children}
    </ButtonBase>
  );
};
