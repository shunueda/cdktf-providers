// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#borders Theme#borders}
  */
  readonly borders?: ThemeBorders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#colors Theme#colors}
  */
  readonly colors?: ThemeColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container Theme#container}
  */
  readonly container?: ThemeContainer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#dark_mode Theme#dark_mode}
  */
  readonly darkMode?: ThemeDarkMode;
  /**
  * The URL of an image to be used as a favicon for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#favicon_url Theme#favicon_url}
  */
  readonly faviconUrl?: string;
  /**
  * The URL of an image to be used as a logo for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_url Theme#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * The name of the tenant which is visible to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#name Theme#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#page_background Theme#page_background}
  */
  readonly pageBackground?: ThemePageBackground;
  /**
  * The primary color for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#primary_color Theme#primary_color}
  */
  readonly primaryColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#typography Theme#typography}
  */
  readonly typography?: ThemeTypography;
  /**
  * The URL of an image to be used as a watermark at the bottom of Authsignal's pre-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#watermark_url Theme#watermark_url}
  */
  readonly watermarkUrl?: string;
}
export interface ThemeBorders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_border_radius Theme#button_border_radius}
  */
  readonly buttonBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_border_width Theme#button_border_width}
  */
  readonly buttonBorderWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_border_radius Theme#card_border_radius}
  */
  readonly cardBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_border_width Theme#card_border_width}
  */
  readonly cardBorderWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container_border_radius Theme#container_border_radius}
  */
  readonly containerBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_border_radius Theme#input_border_radius}
  */
  readonly inputBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_border_width Theme#input_border_width}
  */
  readonly inputBorderWidth?: number;
}

export function themeBordersToTerraform(struct?: ThemeBorders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_border_radius: cdktf.numberToTerraform(struct!.buttonBorderRadius),
    button_border_width: cdktf.numberToTerraform(struct!.buttonBorderWidth),
    card_border_radius: cdktf.numberToTerraform(struct!.cardBorderRadius),
    card_border_width: cdktf.numberToTerraform(struct!.cardBorderWidth),
    container_border_radius: cdktf.numberToTerraform(struct!.containerBorderRadius),
    input_border_radius: cdktf.numberToTerraform(struct!.inputBorderRadius),
    input_border_width: cdktf.numberToTerraform(struct!.inputBorderWidth),
  }
}


export function themeBordersToHclTerraform(struct?: ThemeBorders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.buttonBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    button_border_width: {
      value: cdktf.numberToHclTerraform(struct!.buttonBorderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    card_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.cardBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    card_border_width: {
      value: cdktf.numberToHclTerraform(struct!.cardBorderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.containerBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.inputBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_border_width: {
      value: cdktf.numberToHclTerraform(struct!.inputBorderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeBordersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeBorders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBorderRadius = this._buttonBorderRadius;
    }
    if (this._buttonBorderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBorderWidth = this._buttonBorderWidth;
    }
    if (this._cardBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBorderRadius = this._cardBorderRadius;
    }
    if (this._cardBorderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBorderWidth = this._cardBorderWidth;
    }
    if (this._containerBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerBorderRadius = this._containerBorderRadius;
    }
    if (this._inputBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorderRadius = this._inputBorderRadius;
    }
    if (this._inputBorderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorderWidth = this._inputBorderWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeBorders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonBorderRadius = undefined;
      this._buttonBorderWidth = undefined;
      this._cardBorderRadius = undefined;
      this._cardBorderWidth = undefined;
      this._containerBorderRadius = undefined;
      this._inputBorderRadius = undefined;
      this._inputBorderWidth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonBorderRadius = value.buttonBorderRadius;
      this._buttonBorderWidth = value.buttonBorderWidth;
      this._cardBorderRadius = value.cardBorderRadius;
      this._cardBorderWidth = value.cardBorderWidth;
      this._containerBorderRadius = value.containerBorderRadius;
      this._inputBorderRadius = value.inputBorderRadius;
      this._inputBorderWidth = value.inputBorderWidth;
    }
  }

  // button_border_radius - computed: false, optional: true, required: false
  private _buttonBorderRadius?: number; 
  public get buttonBorderRadius() {
    return this.getNumberAttribute('button_border_radius');
  }
  public set buttonBorderRadius(value: number) {
    this._buttonBorderRadius = value;
  }
  public resetButtonBorderRadius() {
    this._buttonBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBorderRadiusInput() {
    return this._buttonBorderRadius;
  }

  // button_border_width - computed: false, optional: true, required: false
  private _buttonBorderWidth?: number; 
  public get buttonBorderWidth() {
    return this.getNumberAttribute('button_border_width');
  }
  public set buttonBorderWidth(value: number) {
    this._buttonBorderWidth = value;
  }
  public resetButtonBorderWidth() {
    this._buttonBorderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBorderWidthInput() {
    return this._buttonBorderWidth;
  }

  // card_border_radius - computed: false, optional: true, required: false
  private _cardBorderRadius?: number; 
  public get cardBorderRadius() {
    return this.getNumberAttribute('card_border_radius');
  }
  public set cardBorderRadius(value: number) {
    this._cardBorderRadius = value;
  }
  public resetCardBorderRadius() {
    this._cardBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBorderRadiusInput() {
    return this._cardBorderRadius;
  }

  // card_border_width - computed: false, optional: true, required: false
  private _cardBorderWidth?: number; 
  public get cardBorderWidth() {
    return this.getNumberAttribute('card_border_width');
  }
  public set cardBorderWidth(value: number) {
    this._cardBorderWidth = value;
  }
  public resetCardBorderWidth() {
    this._cardBorderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBorderWidthInput() {
    return this._cardBorderWidth;
  }

  // container_border_radius - computed: false, optional: true, required: false
  private _containerBorderRadius?: number; 
  public get containerBorderRadius() {
    return this.getNumberAttribute('container_border_radius');
  }
  public set containerBorderRadius(value: number) {
    this._containerBorderRadius = value;
  }
  public resetContainerBorderRadius() {
    this._containerBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBorderRadiusInput() {
    return this._containerBorderRadius;
  }

  // input_border_radius - computed: false, optional: true, required: false
  private _inputBorderRadius?: number; 
  public get inputBorderRadius() {
    return this.getNumberAttribute('input_border_radius');
  }
  public set inputBorderRadius(value: number) {
    this._inputBorderRadius = value;
  }
  public resetInputBorderRadius() {
    this._inputBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBorderRadiusInput() {
    return this._inputBorderRadius;
  }

  // input_border_width - computed: false, optional: true, required: false
  private _inputBorderWidth?: number; 
  public get inputBorderWidth() {
    return this.getNumberAttribute('input_border_width');
  }
  public set inputBorderWidth(value: number) {
    this._inputBorderWidth = value;
  }
  public resetInputBorderWidth() {
    this._inputBorderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBorderWidthInput() {
    return this._inputBorderWidth;
  }
}
export interface ThemeColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#body_text Theme#body_text}
  */
  readonly bodyText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_primary_border Theme#button_primary_border}
  */
  readonly buttonPrimaryBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_primary_text Theme#button_primary_text}
  */
  readonly buttonPrimaryText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_secondary_background Theme#button_secondary_background}
  */
  readonly buttonSecondaryBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_secondary_border Theme#button_secondary_border}
  */
  readonly buttonSecondaryBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_secondary_text Theme#button_secondary_text}
  */
  readonly buttonSecondaryText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_background Theme#card_background}
  */
  readonly cardBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_border Theme#card_border}
  */
  readonly cardBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container_background Theme#container_background}
  */
  readonly containerBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container_border Theme#container_border}
  */
  readonly containerBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#critical Theme#critical}
  */
  readonly critical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#divider Theme#divider}
  */
  readonly divider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#focus Theme#focus}
  */
  readonly focus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#heading_text Theme#heading_text}
  */
  readonly headingText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#hover Theme#hover}
  */
  readonly hover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#icon Theme#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#information Theme#information}
  */
  readonly information?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_background Theme#input_background}
  */
  readonly inputBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_border Theme#input_border}
  */
  readonly inputBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#link Theme#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#loader Theme#loader}
  */
  readonly loader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#positive Theme#positive}
  */
  readonly positive?: string;
}

export function themeColorsToTerraform(struct?: ThemeColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_text: cdktf.stringToTerraform(struct!.bodyText),
    button_primary_border: cdktf.stringToTerraform(struct!.buttonPrimaryBorder),
    button_primary_text: cdktf.stringToTerraform(struct!.buttonPrimaryText),
    button_secondary_background: cdktf.stringToTerraform(struct!.buttonSecondaryBackground),
    button_secondary_border: cdktf.stringToTerraform(struct!.buttonSecondaryBorder),
    button_secondary_text: cdktf.stringToTerraform(struct!.buttonSecondaryText),
    card_background: cdktf.stringToTerraform(struct!.cardBackground),
    card_border: cdktf.stringToTerraform(struct!.cardBorder),
    container_background: cdktf.stringToTerraform(struct!.containerBackground),
    container_border: cdktf.stringToTerraform(struct!.containerBorder),
    critical: cdktf.stringToTerraform(struct!.critical),
    divider: cdktf.stringToTerraform(struct!.divider),
    focus: cdktf.stringToTerraform(struct!.focus),
    heading_text: cdktf.stringToTerraform(struct!.headingText),
    hover: cdktf.stringToTerraform(struct!.hover),
    icon: cdktf.stringToTerraform(struct!.icon),
    information: cdktf.stringToTerraform(struct!.information),
    input_background: cdktf.stringToTerraform(struct!.inputBackground),
    input_border: cdktf.stringToTerraform(struct!.inputBorder),
    link: cdktf.stringToTerraform(struct!.link),
    loader: cdktf.stringToTerraform(struct!.loader),
    positive: cdktf.stringToTerraform(struct!.positive),
  }
}


export function themeColorsToHclTerraform(struct?: ThemeColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_text: {
      value: cdktf.stringToHclTerraform(struct!.bodyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_primary_border: {
      value: cdktf.stringToHclTerraform(struct!.buttonPrimaryBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_primary_text: {
      value: cdktf.stringToHclTerraform(struct!.buttonPrimaryText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_secondary_background: {
      value: cdktf.stringToHclTerraform(struct!.buttonSecondaryBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_secondary_border: {
      value: cdktf.stringToHclTerraform(struct!.buttonSecondaryBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_secondary_text: {
      value: cdktf.stringToHclTerraform(struct!.buttonSecondaryText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    card_background: {
      value: cdktf.stringToHclTerraform(struct!.cardBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    card_border: {
      value: cdktf.stringToHclTerraform(struct!.cardBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_background: {
      value: cdktf.stringToHclTerraform(struct!.containerBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_border: {
      value: cdktf.stringToHclTerraform(struct!.containerBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical: {
      value: cdktf.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divider: {
      value: cdktf.stringToHclTerraform(struct!.divider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    focus: {
      value: cdktf.stringToHclTerraform(struct!.focus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heading_text: {
      value: cdktf.stringToHclTerraform(struct!.headingText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hover: {
      value: cdktf.stringToHclTerraform(struct!.hover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    information: {
      value: cdktf.stringToHclTerraform(struct!.information),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_background: {
      value: cdktf.stringToHclTerraform(struct!.inputBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_border: {
      value: cdktf.stringToHclTerraform(struct!.inputBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktf.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loader: {
      value: cdktf.stringToHclTerraform(struct!.loader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    positive: {
      value: cdktf.stringToHclTerraform(struct!.positive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyText = this._bodyText;
    }
    if (this._buttonPrimaryBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonPrimaryBorder = this._buttonPrimaryBorder;
    }
    if (this._buttonPrimaryText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonPrimaryText = this._buttonPrimaryText;
    }
    if (this._buttonSecondaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonSecondaryBackground = this._buttonSecondaryBackground;
    }
    if (this._buttonSecondaryBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonSecondaryBorder = this._buttonSecondaryBorder;
    }
    if (this._buttonSecondaryText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonSecondaryText = this._buttonSecondaryText;
    }
    if (this._cardBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBackground = this._cardBackground;
    }
    if (this._cardBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBorder = this._cardBorder;
    }
    if (this._containerBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerBackground = this._containerBackground;
    }
    if (this._containerBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerBorder = this._containerBorder;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._divider !== undefined) {
      hasAnyValues = true;
      internalValueResult.divider = this._divider;
    }
    if (this._focus !== undefined) {
      hasAnyValues = true;
      internalValueResult.focus = this._focus;
    }
    if (this._headingText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headingText = this._headingText;
    }
    if (this._hover !== undefined) {
      hasAnyValues = true;
      internalValueResult.hover = this._hover;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._information !== undefined) {
      hasAnyValues = true;
      internalValueResult.information = this._information;
    }
    if (this._inputBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBackground = this._inputBackground;
    }
    if (this._inputBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorder = this._inputBorder;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._loader !== undefined) {
      hasAnyValues = true;
      internalValueResult.loader = this._loader;
    }
    if (this._positive !== undefined) {
      hasAnyValues = true;
      internalValueResult.positive = this._positive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyText = undefined;
      this._buttonPrimaryBorder = undefined;
      this._buttonPrimaryText = undefined;
      this._buttonSecondaryBackground = undefined;
      this._buttonSecondaryBorder = undefined;
      this._buttonSecondaryText = undefined;
      this._cardBackground = undefined;
      this._cardBorder = undefined;
      this._containerBackground = undefined;
      this._containerBorder = undefined;
      this._critical = undefined;
      this._divider = undefined;
      this._focus = undefined;
      this._headingText = undefined;
      this._hover = undefined;
      this._icon = undefined;
      this._information = undefined;
      this._inputBackground = undefined;
      this._inputBorder = undefined;
      this._link = undefined;
      this._loader = undefined;
      this._positive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyText = value.bodyText;
      this._buttonPrimaryBorder = value.buttonPrimaryBorder;
      this._buttonPrimaryText = value.buttonPrimaryText;
      this._buttonSecondaryBackground = value.buttonSecondaryBackground;
      this._buttonSecondaryBorder = value.buttonSecondaryBorder;
      this._buttonSecondaryText = value.buttonSecondaryText;
      this._cardBackground = value.cardBackground;
      this._cardBorder = value.cardBorder;
      this._containerBackground = value.containerBackground;
      this._containerBorder = value.containerBorder;
      this._critical = value.critical;
      this._divider = value.divider;
      this._focus = value.focus;
      this._headingText = value.headingText;
      this._hover = value.hover;
      this._icon = value.icon;
      this._information = value.information;
      this._inputBackground = value.inputBackground;
      this._inputBorder = value.inputBorder;
      this._link = value.link;
      this._loader = value.loader;
      this._positive = value.positive;
    }
  }

  // body_text - computed: false, optional: true, required: false
  private _bodyText?: string; 
  public get bodyText() {
    return this.getStringAttribute('body_text');
  }
  public set bodyText(value: string) {
    this._bodyText = value;
  }
  public resetBodyText() {
    this._bodyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTextInput() {
    return this._bodyText;
  }

  // button_primary_border - computed: false, optional: true, required: false
  private _buttonPrimaryBorder?: string; 
  public get buttonPrimaryBorder() {
    return this.getStringAttribute('button_primary_border');
  }
  public set buttonPrimaryBorder(value: string) {
    this._buttonPrimaryBorder = value;
  }
  public resetButtonPrimaryBorder() {
    this._buttonPrimaryBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonPrimaryBorderInput() {
    return this._buttonPrimaryBorder;
  }

  // button_primary_text - computed: false, optional: true, required: false
  private _buttonPrimaryText?: string; 
  public get buttonPrimaryText() {
    return this.getStringAttribute('button_primary_text');
  }
  public set buttonPrimaryText(value: string) {
    this._buttonPrimaryText = value;
  }
  public resetButtonPrimaryText() {
    this._buttonPrimaryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonPrimaryTextInput() {
    return this._buttonPrimaryText;
  }

  // button_secondary_background - computed: false, optional: true, required: false
  private _buttonSecondaryBackground?: string; 
  public get buttonSecondaryBackground() {
    return this.getStringAttribute('button_secondary_background');
  }
  public set buttonSecondaryBackground(value: string) {
    this._buttonSecondaryBackground = value;
  }
  public resetButtonSecondaryBackground() {
    this._buttonSecondaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonSecondaryBackgroundInput() {
    return this._buttonSecondaryBackground;
  }

  // button_secondary_border - computed: false, optional: true, required: false
  private _buttonSecondaryBorder?: string; 
  public get buttonSecondaryBorder() {
    return this.getStringAttribute('button_secondary_border');
  }
  public set buttonSecondaryBorder(value: string) {
    this._buttonSecondaryBorder = value;
  }
  public resetButtonSecondaryBorder() {
    this._buttonSecondaryBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonSecondaryBorderInput() {
    return this._buttonSecondaryBorder;
  }

  // button_secondary_text - computed: false, optional: true, required: false
  private _buttonSecondaryText?: string; 
  public get buttonSecondaryText() {
    return this.getStringAttribute('button_secondary_text');
  }
  public set buttonSecondaryText(value: string) {
    this._buttonSecondaryText = value;
  }
  public resetButtonSecondaryText() {
    this._buttonSecondaryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonSecondaryTextInput() {
    return this._buttonSecondaryText;
  }

  // card_background - computed: false, optional: true, required: false
  private _cardBackground?: string; 
  public get cardBackground() {
    return this.getStringAttribute('card_background');
  }
  public set cardBackground(value: string) {
    this._cardBackground = value;
  }
  public resetCardBackground() {
    this._cardBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBackgroundInput() {
    return this._cardBackground;
  }

  // card_border - computed: false, optional: true, required: false
  private _cardBorder?: string; 
  public get cardBorder() {
    return this.getStringAttribute('card_border');
  }
  public set cardBorder(value: string) {
    this._cardBorder = value;
  }
  public resetCardBorder() {
    this._cardBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBorderInput() {
    return this._cardBorder;
  }

  // container_background - computed: false, optional: true, required: false
  private _containerBackground?: string; 
  public get containerBackground() {
    return this.getStringAttribute('container_background');
  }
  public set containerBackground(value: string) {
    this._containerBackground = value;
  }
  public resetContainerBackground() {
    this._containerBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBackgroundInput() {
    return this._containerBackground;
  }

  // container_border - computed: false, optional: true, required: false
  private _containerBorder?: string; 
  public get containerBorder() {
    return this.getStringAttribute('container_border');
  }
  public set containerBorder(value: string) {
    this._containerBorder = value;
  }
  public resetContainerBorder() {
    this._containerBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBorderInput() {
    return this._containerBorder;
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // divider - computed: false, optional: true, required: false
  private _divider?: string; 
  public get divider() {
    return this.getStringAttribute('divider');
  }
  public set divider(value: string) {
    this._divider = value;
  }
  public resetDivider() {
    this._divider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dividerInput() {
    return this._divider;
  }

  // focus - computed: false, optional: true, required: false
  private _focus?: string; 
  public get focus() {
    return this.getStringAttribute('focus');
  }
  public set focus(value: string) {
    this._focus = value;
  }
  public resetFocus() {
    this._focus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get focusInput() {
    return this._focus;
  }

  // heading_text - computed: false, optional: true, required: false
  private _headingText?: string; 
  public get headingText() {
    return this.getStringAttribute('heading_text');
  }
  public set headingText(value: string) {
    this._headingText = value;
  }
  public resetHeadingText() {
    this._headingText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headingTextInput() {
    return this._headingText;
  }

  // hover - computed: false, optional: true, required: false
  private _hover?: string; 
  public get hover() {
    return this.getStringAttribute('hover');
  }
  public set hover(value: string) {
    this._hover = value;
  }
  public resetHover() {
    this._hover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoverInput() {
    return this._hover;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // information - computed: false, optional: true, required: false
  private _information?: string; 
  public get information() {
    return this.getStringAttribute('information');
  }
  public set information(value: string) {
    this._information = value;
  }
  public resetInformation() {
    this._information = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationInput() {
    return this._information;
  }

  // input_background - computed: false, optional: true, required: false
  private _inputBackground?: string; 
  public get inputBackground() {
    return this.getStringAttribute('input_background');
  }
  public set inputBackground(value: string) {
    this._inputBackground = value;
  }
  public resetInputBackground() {
    this._inputBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBackgroundInput() {
    return this._inputBackground;
  }

  // input_border - computed: false, optional: true, required: false
  private _inputBorder?: string; 
  public get inputBorder() {
    return this.getStringAttribute('input_border');
  }
  public set inputBorder(value: string) {
    this._inputBorder = value;
  }
  public resetInputBorder() {
    this._inputBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBorderInput() {
    return this._inputBorder;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // loader - computed: false, optional: true, required: false
  private _loader?: string; 
  public get loader() {
    return this.getStringAttribute('loader');
  }
  public set loader(value: string) {
    this._loader = value;
  }
  public resetLoader() {
    this._loader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaderInput() {
    return this._loader;
  }

  // positive - computed: false, optional: true, required: false
  private _positive?: string; 
  public get positive() {
    return this.getStringAttribute('positive');
  }
  public set positive(value: string) {
    this._positive = value;
  }
  public resetPositive() {
    this._positive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveInput() {
    return this._positive;
  }
}
export interface ThemeContainer {
  /**
  * Allowed values: `left`, `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#content_alignment Theme#content_alignment}
  */
  readonly contentAlignment?: string;
  /**
  * Allowed values: `left`, `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_alignment Theme#logo_alignment}
  */
  readonly logoAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_height Theme#logo_height}
  */
  readonly logoHeight?: number;
  /**
  * Allowed values: `inside`, `outside`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_position Theme#logo_position}
  */
  readonly logoPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#padding Theme#padding}
  */
  readonly padding?: number;
  /**
  * Allowed values: `inside`, `outside`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#position Theme#position}
  */
  readonly position?: string;
}

export function themeContainerToTerraform(struct?: ThemeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_alignment: cdktf.stringToTerraform(struct!.contentAlignment),
    logo_alignment: cdktf.stringToTerraform(struct!.logoAlignment),
    logo_height: cdktf.numberToTerraform(struct!.logoHeight),
    logo_position: cdktf.stringToTerraform(struct!.logoPosition),
    padding: cdktf.numberToTerraform(struct!.padding),
    position: cdktf.stringToTerraform(struct!.position),
  }
}


export function themeContainerToHclTerraform(struct?: ThemeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_alignment: {
      value: cdktf.stringToHclTerraform(struct!.contentAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_alignment: {
      value: cdktf.stringToHclTerraform(struct!.logoAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_height: {
      value: cdktf.numberToHclTerraform(struct!.logoHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logo_position: {
      value: cdktf.stringToHclTerraform(struct!.logoPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.numberToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAlignment = this._contentAlignment;
    }
    if (this._logoAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoAlignment = this._logoAlignment;
    }
    if (this._logoHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoHeight = this._logoHeight;
    }
    if (this._logoPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoPosition = this._logoPosition;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentAlignment = undefined;
      this._logoAlignment = undefined;
      this._logoHeight = undefined;
      this._logoPosition = undefined;
      this._padding = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentAlignment = value.contentAlignment;
      this._logoAlignment = value.logoAlignment;
      this._logoHeight = value.logoHeight;
      this._logoPosition = value.logoPosition;
      this._padding = value.padding;
      this._position = value.position;
    }
  }

  // content_alignment - computed: false, optional: true, required: false
  private _contentAlignment?: string; 
  public get contentAlignment() {
    return this.getStringAttribute('content_alignment');
  }
  public set contentAlignment(value: string) {
    this._contentAlignment = value;
  }
  public resetContentAlignment() {
    this._contentAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAlignmentInput() {
    return this._contentAlignment;
  }

  // logo_alignment - computed: false, optional: true, required: false
  private _logoAlignment?: string; 
  public get logoAlignment() {
    return this.getStringAttribute('logo_alignment');
  }
  public set logoAlignment(value: string) {
    this._logoAlignment = value;
  }
  public resetLogoAlignment() {
    this._logoAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoAlignmentInput() {
    return this._logoAlignment;
  }

  // logo_height - computed: false, optional: true, required: false
  private _logoHeight?: number; 
  public get logoHeight() {
    return this.getNumberAttribute('logo_height');
  }
  public set logoHeight(value: number) {
    this._logoHeight = value;
  }
  public resetLogoHeight() {
    this._logoHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoHeightInput() {
    return this._logoHeight;
  }

  // logo_position - computed: false, optional: true, required: false
  private _logoPosition?: string; 
  public get logoPosition() {
    return this.getStringAttribute('logo_position');
  }
  public set logoPosition(value: string) {
    this._logoPosition = value;
  }
  public resetLogoPosition() {
    this._logoPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoPositionInput() {
    return this._logoPosition;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: number; 
  public get padding() {
    return this.getNumberAttribute('padding');
  }
  public set padding(value: number) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}
export interface ThemeDarkModeBorders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_border_radius Theme#button_border_radius}
  */
  readonly buttonBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_border_width Theme#button_border_width}
  */
  readonly buttonBorderWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_border_radius Theme#card_border_radius}
  */
  readonly cardBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_border_width Theme#card_border_width}
  */
  readonly cardBorderWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container_border_radius Theme#container_border_radius}
  */
  readonly containerBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_border_radius Theme#input_border_radius}
  */
  readonly inputBorderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_border_width Theme#input_border_width}
  */
  readonly inputBorderWidth?: number;
}

export function themeDarkModeBordersToTerraform(struct?: ThemeDarkModeBorders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_border_radius: cdktf.numberToTerraform(struct!.buttonBorderRadius),
    button_border_width: cdktf.numberToTerraform(struct!.buttonBorderWidth),
    card_border_radius: cdktf.numberToTerraform(struct!.cardBorderRadius),
    card_border_width: cdktf.numberToTerraform(struct!.cardBorderWidth),
    container_border_radius: cdktf.numberToTerraform(struct!.containerBorderRadius),
    input_border_radius: cdktf.numberToTerraform(struct!.inputBorderRadius),
    input_border_width: cdktf.numberToTerraform(struct!.inputBorderWidth),
  }
}


export function themeDarkModeBordersToHclTerraform(struct?: ThemeDarkModeBorders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.buttonBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    button_border_width: {
      value: cdktf.numberToHclTerraform(struct!.buttonBorderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    card_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.cardBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    card_border_width: {
      value: cdktf.numberToHclTerraform(struct!.cardBorderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.containerBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.inputBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_border_width: {
      value: cdktf.numberToHclTerraform(struct!.inputBorderWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeDarkModeBordersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeDarkModeBorders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBorderRadius = this._buttonBorderRadius;
    }
    if (this._buttonBorderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBorderWidth = this._buttonBorderWidth;
    }
    if (this._cardBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBorderRadius = this._cardBorderRadius;
    }
    if (this._cardBorderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBorderWidth = this._cardBorderWidth;
    }
    if (this._containerBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerBorderRadius = this._containerBorderRadius;
    }
    if (this._inputBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorderRadius = this._inputBorderRadius;
    }
    if (this._inputBorderWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorderWidth = this._inputBorderWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeDarkModeBorders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonBorderRadius = undefined;
      this._buttonBorderWidth = undefined;
      this._cardBorderRadius = undefined;
      this._cardBorderWidth = undefined;
      this._containerBorderRadius = undefined;
      this._inputBorderRadius = undefined;
      this._inputBorderWidth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonBorderRadius = value.buttonBorderRadius;
      this._buttonBorderWidth = value.buttonBorderWidth;
      this._cardBorderRadius = value.cardBorderRadius;
      this._cardBorderWidth = value.cardBorderWidth;
      this._containerBorderRadius = value.containerBorderRadius;
      this._inputBorderRadius = value.inputBorderRadius;
      this._inputBorderWidth = value.inputBorderWidth;
    }
  }

  // button_border_radius - computed: false, optional: true, required: false
  private _buttonBorderRadius?: number; 
  public get buttonBorderRadius() {
    return this.getNumberAttribute('button_border_radius');
  }
  public set buttonBorderRadius(value: number) {
    this._buttonBorderRadius = value;
  }
  public resetButtonBorderRadius() {
    this._buttonBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBorderRadiusInput() {
    return this._buttonBorderRadius;
  }

  // button_border_width - computed: false, optional: true, required: false
  private _buttonBorderWidth?: number; 
  public get buttonBorderWidth() {
    return this.getNumberAttribute('button_border_width');
  }
  public set buttonBorderWidth(value: number) {
    this._buttonBorderWidth = value;
  }
  public resetButtonBorderWidth() {
    this._buttonBorderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBorderWidthInput() {
    return this._buttonBorderWidth;
  }

  // card_border_radius - computed: false, optional: true, required: false
  private _cardBorderRadius?: number; 
  public get cardBorderRadius() {
    return this.getNumberAttribute('card_border_radius');
  }
  public set cardBorderRadius(value: number) {
    this._cardBorderRadius = value;
  }
  public resetCardBorderRadius() {
    this._cardBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBorderRadiusInput() {
    return this._cardBorderRadius;
  }

  // card_border_width - computed: false, optional: true, required: false
  private _cardBorderWidth?: number; 
  public get cardBorderWidth() {
    return this.getNumberAttribute('card_border_width');
  }
  public set cardBorderWidth(value: number) {
    this._cardBorderWidth = value;
  }
  public resetCardBorderWidth() {
    this._cardBorderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBorderWidthInput() {
    return this._cardBorderWidth;
  }

  // container_border_radius - computed: false, optional: true, required: false
  private _containerBorderRadius?: number; 
  public get containerBorderRadius() {
    return this.getNumberAttribute('container_border_radius');
  }
  public set containerBorderRadius(value: number) {
    this._containerBorderRadius = value;
  }
  public resetContainerBorderRadius() {
    this._containerBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBorderRadiusInput() {
    return this._containerBorderRadius;
  }

  // input_border_radius - computed: false, optional: true, required: false
  private _inputBorderRadius?: number; 
  public get inputBorderRadius() {
    return this.getNumberAttribute('input_border_radius');
  }
  public set inputBorderRadius(value: number) {
    this._inputBorderRadius = value;
  }
  public resetInputBorderRadius() {
    this._inputBorderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBorderRadiusInput() {
    return this._inputBorderRadius;
  }

  // input_border_width - computed: false, optional: true, required: false
  private _inputBorderWidth?: number; 
  public get inputBorderWidth() {
    return this.getNumberAttribute('input_border_width');
  }
  public set inputBorderWidth(value: number) {
    this._inputBorderWidth = value;
  }
  public resetInputBorderWidth() {
    this._inputBorderWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBorderWidthInput() {
    return this._inputBorderWidth;
  }
}
export interface ThemeDarkModeColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#body_text Theme#body_text}
  */
  readonly bodyText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_primary_border Theme#button_primary_border}
  */
  readonly buttonPrimaryBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_primary_text Theme#button_primary_text}
  */
  readonly buttonPrimaryText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_secondary_background Theme#button_secondary_background}
  */
  readonly buttonSecondaryBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_secondary_border Theme#button_secondary_border}
  */
  readonly buttonSecondaryBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#button_secondary_text Theme#button_secondary_text}
  */
  readonly buttonSecondaryText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_background Theme#card_background}
  */
  readonly cardBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#card_border Theme#card_border}
  */
  readonly cardBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container_background Theme#container_background}
  */
  readonly containerBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container_border Theme#container_border}
  */
  readonly containerBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#critical Theme#critical}
  */
  readonly critical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#divider Theme#divider}
  */
  readonly divider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#focus Theme#focus}
  */
  readonly focus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#heading_text Theme#heading_text}
  */
  readonly headingText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#hover Theme#hover}
  */
  readonly hover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#icon Theme#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#information Theme#information}
  */
  readonly information?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_background Theme#input_background}
  */
  readonly inputBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#input_border Theme#input_border}
  */
  readonly inputBorder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#link Theme#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#loader Theme#loader}
  */
  readonly loader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#positive Theme#positive}
  */
  readonly positive?: string;
}

export function themeDarkModeColorsToTerraform(struct?: ThemeDarkModeColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_text: cdktf.stringToTerraform(struct!.bodyText),
    button_primary_border: cdktf.stringToTerraform(struct!.buttonPrimaryBorder),
    button_primary_text: cdktf.stringToTerraform(struct!.buttonPrimaryText),
    button_secondary_background: cdktf.stringToTerraform(struct!.buttonSecondaryBackground),
    button_secondary_border: cdktf.stringToTerraform(struct!.buttonSecondaryBorder),
    button_secondary_text: cdktf.stringToTerraform(struct!.buttonSecondaryText),
    card_background: cdktf.stringToTerraform(struct!.cardBackground),
    card_border: cdktf.stringToTerraform(struct!.cardBorder),
    container_background: cdktf.stringToTerraform(struct!.containerBackground),
    container_border: cdktf.stringToTerraform(struct!.containerBorder),
    critical: cdktf.stringToTerraform(struct!.critical),
    divider: cdktf.stringToTerraform(struct!.divider),
    focus: cdktf.stringToTerraform(struct!.focus),
    heading_text: cdktf.stringToTerraform(struct!.headingText),
    hover: cdktf.stringToTerraform(struct!.hover),
    icon: cdktf.stringToTerraform(struct!.icon),
    information: cdktf.stringToTerraform(struct!.information),
    input_background: cdktf.stringToTerraform(struct!.inputBackground),
    input_border: cdktf.stringToTerraform(struct!.inputBorder),
    link: cdktf.stringToTerraform(struct!.link),
    loader: cdktf.stringToTerraform(struct!.loader),
    positive: cdktf.stringToTerraform(struct!.positive),
  }
}


export function themeDarkModeColorsToHclTerraform(struct?: ThemeDarkModeColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_text: {
      value: cdktf.stringToHclTerraform(struct!.bodyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_primary_border: {
      value: cdktf.stringToHclTerraform(struct!.buttonPrimaryBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_primary_text: {
      value: cdktf.stringToHclTerraform(struct!.buttonPrimaryText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_secondary_background: {
      value: cdktf.stringToHclTerraform(struct!.buttonSecondaryBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_secondary_border: {
      value: cdktf.stringToHclTerraform(struct!.buttonSecondaryBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_secondary_text: {
      value: cdktf.stringToHclTerraform(struct!.buttonSecondaryText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    card_background: {
      value: cdktf.stringToHclTerraform(struct!.cardBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    card_border: {
      value: cdktf.stringToHclTerraform(struct!.cardBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_background: {
      value: cdktf.stringToHclTerraform(struct!.containerBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_border: {
      value: cdktf.stringToHclTerraform(struct!.containerBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical: {
      value: cdktf.stringToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divider: {
      value: cdktf.stringToHclTerraform(struct!.divider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    focus: {
      value: cdktf.stringToHclTerraform(struct!.focus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heading_text: {
      value: cdktf.stringToHclTerraform(struct!.headingText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hover: {
      value: cdktf.stringToHclTerraform(struct!.hover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    information: {
      value: cdktf.stringToHclTerraform(struct!.information),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_background: {
      value: cdktf.stringToHclTerraform(struct!.inputBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_border: {
      value: cdktf.stringToHclTerraform(struct!.inputBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktf.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loader: {
      value: cdktf.stringToHclTerraform(struct!.loader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    positive: {
      value: cdktf.stringToHclTerraform(struct!.positive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeDarkModeColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeDarkModeColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyText = this._bodyText;
    }
    if (this._buttonPrimaryBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonPrimaryBorder = this._buttonPrimaryBorder;
    }
    if (this._buttonPrimaryText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonPrimaryText = this._buttonPrimaryText;
    }
    if (this._buttonSecondaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonSecondaryBackground = this._buttonSecondaryBackground;
    }
    if (this._buttonSecondaryBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonSecondaryBorder = this._buttonSecondaryBorder;
    }
    if (this._buttonSecondaryText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonSecondaryText = this._buttonSecondaryText;
    }
    if (this._cardBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBackground = this._cardBackground;
    }
    if (this._cardBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardBorder = this._cardBorder;
    }
    if (this._containerBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerBackground = this._containerBackground;
    }
    if (this._containerBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerBorder = this._containerBorder;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._divider !== undefined) {
      hasAnyValues = true;
      internalValueResult.divider = this._divider;
    }
    if (this._focus !== undefined) {
      hasAnyValues = true;
      internalValueResult.focus = this._focus;
    }
    if (this._headingText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headingText = this._headingText;
    }
    if (this._hover !== undefined) {
      hasAnyValues = true;
      internalValueResult.hover = this._hover;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._information !== undefined) {
      hasAnyValues = true;
      internalValueResult.information = this._information;
    }
    if (this._inputBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBackground = this._inputBackground;
    }
    if (this._inputBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorder = this._inputBorder;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._loader !== undefined) {
      hasAnyValues = true;
      internalValueResult.loader = this._loader;
    }
    if (this._positive !== undefined) {
      hasAnyValues = true;
      internalValueResult.positive = this._positive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeDarkModeColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyText = undefined;
      this._buttonPrimaryBorder = undefined;
      this._buttonPrimaryText = undefined;
      this._buttonSecondaryBackground = undefined;
      this._buttonSecondaryBorder = undefined;
      this._buttonSecondaryText = undefined;
      this._cardBackground = undefined;
      this._cardBorder = undefined;
      this._containerBackground = undefined;
      this._containerBorder = undefined;
      this._critical = undefined;
      this._divider = undefined;
      this._focus = undefined;
      this._headingText = undefined;
      this._hover = undefined;
      this._icon = undefined;
      this._information = undefined;
      this._inputBackground = undefined;
      this._inputBorder = undefined;
      this._link = undefined;
      this._loader = undefined;
      this._positive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyText = value.bodyText;
      this._buttonPrimaryBorder = value.buttonPrimaryBorder;
      this._buttonPrimaryText = value.buttonPrimaryText;
      this._buttonSecondaryBackground = value.buttonSecondaryBackground;
      this._buttonSecondaryBorder = value.buttonSecondaryBorder;
      this._buttonSecondaryText = value.buttonSecondaryText;
      this._cardBackground = value.cardBackground;
      this._cardBorder = value.cardBorder;
      this._containerBackground = value.containerBackground;
      this._containerBorder = value.containerBorder;
      this._critical = value.critical;
      this._divider = value.divider;
      this._focus = value.focus;
      this._headingText = value.headingText;
      this._hover = value.hover;
      this._icon = value.icon;
      this._information = value.information;
      this._inputBackground = value.inputBackground;
      this._inputBorder = value.inputBorder;
      this._link = value.link;
      this._loader = value.loader;
      this._positive = value.positive;
    }
  }

  // body_text - computed: false, optional: true, required: false
  private _bodyText?: string; 
  public get bodyText() {
    return this.getStringAttribute('body_text');
  }
  public set bodyText(value: string) {
    this._bodyText = value;
  }
  public resetBodyText() {
    this._bodyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTextInput() {
    return this._bodyText;
  }

  // button_primary_border - computed: false, optional: true, required: false
  private _buttonPrimaryBorder?: string; 
  public get buttonPrimaryBorder() {
    return this.getStringAttribute('button_primary_border');
  }
  public set buttonPrimaryBorder(value: string) {
    this._buttonPrimaryBorder = value;
  }
  public resetButtonPrimaryBorder() {
    this._buttonPrimaryBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonPrimaryBorderInput() {
    return this._buttonPrimaryBorder;
  }

  // button_primary_text - computed: false, optional: true, required: false
  private _buttonPrimaryText?: string; 
  public get buttonPrimaryText() {
    return this.getStringAttribute('button_primary_text');
  }
  public set buttonPrimaryText(value: string) {
    this._buttonPrimaryText = value;
  }
  public resetButtonPrimaryText() {
    this._buttonPrimaryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonPrimaryTextInput() {
    return this._buttonPrimaryText;
  }

  // button_secondary_background - computed: false, optional: true, required: false
  private _buttonSecondaryBackground?: string; 
  public get buttonSecondaryBackground() {
    return this.getStringAttribute('button_secondary_background');
  }
  public set buttonSecondaryBackground(value: string) {
    this._buttonSecondaryBackground = value;
  }
  public resetButtonSecondaryBackground() {
    this._buttonSecondaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonSecondaryBackgroundInput() {
    return this._buttonSecondaryBackground;
  }

  // button_secondary_border - computed: false, optional: true, required: false
  private _buttonSecondaryBorder?: string; 
  public get buttonSecondaryBorder() {
    return this.getStringAttribute('button_secondary_border');
  }
  public set buttonSecondaryBorder(value: string) {
    this._buttonSecondaryBorder = value;
  }
  public resetButtonSecondaryBorder() {
    this._buttonSecondaryBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonSecondaryBorderInput() {
    return this._buttonSecondaryBorder;
  }

  // button_secondary_text - computed: false, optional: true, required: false
  private _buttonSecondaryText?: string; 
  public get buttonSecondaryText() {
    return this.getStringAttribute('button_secondary_text');
  }
  public set buttonSecondaryText(value: string) {
    this._buttonSecondaryText = value;
  }
  public resetButtonSecondaryText() {
    this._buttonSecondaryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonSecondaryTextInput() {
    return this._buttonSecondaryText;
  }

  // card_background - computed: false, optional: true, required: false
  private _cardBackground?: string; 
  public get cardBackground() {
    return this.getStringAttribute('card_background');
  }
  public set cardBackground(value: string) {
    this._cardBackground = value;
  }
  public resetCardBackground() {
    this._cardBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBackgroundInput() {
    return this._cardBackground;
  }

  // card_border - computed: false, optional: true, required: false
  private _cardBorder?: string; 
  public get cardBorder() {
    return this.getStringAttribute('card_border');
  }
  public set cardBorder(value: string) {
    this._cardBorder = value;
  }
  public resetCardBorder() {
    this._cardBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardBorderInput() {
    return this._cardBorder;
  }

  // container_background - computed: false, optional: true, required: false
  private _containerBackground?: string; 
  public get containerBackground() {
    return this.getStringAttribute('container_background');
  }
  public set containerBackground(value: string) {
    this._containerBackground = value;
  }
  public resetContainerBackground() {
    this._containerBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBackgroundInput() {
    return this._containerBackground;
  }

  // container_border - computed: false, optional: true, required: false
  private _containerBorder?: string; 
  public get containerBorder() {
    return this.getStringAttribute('container_border');
  }
  public set containerBorder(value: string) {
    this._containerBorder = value;
  }
  public resetContainerBorder() {
    this._containerBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBorderInput() {
    return this._containerBorder;
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // divider - computed: false, optional: true, required: false
  private _divider?: string; 
  public get divider() {
    return this.getStringAttribute('divider');
  }
  public set divider(value: string) {
    this._divider = value;
  }
  public resetDivider() {
    this._divider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dividerInput() {
    return this._divider;
  }

  // focus - computed: false, optional: true, required: false
  private _focus?: string; 
  public get focus() {
    return this.getStringAttribute('focus');
  }
  public set focus(value: string) {
    this._focus = value;
  }
  public resetFocus() {
    this._focus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get focusInput() {
    return this._focus;
  }

  // heading_text - computed: false, optional: true, required: false
  private _headingText?: string; 
  public get headingText() {
    return this.getStringAttribute('heading_text');
  }
  public set headingText(value: string) {
    this._headingText = value;
  }
  public resetHeadingText() {
    this._headingText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headingTextInput() {
    return this._headingText;
  }

  // hover - computed: false, optional: true, required: false
  private _hover?: string; 
  public get hover() {
    return this.getStringAttribute('hover');
  }
  public set hover(value: string) {
    this._hover = value;
  }
  public resetHover() {
    this._hover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoverInput() {
    return this._hover;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // information - computed: false, optional: true, required: false
  private _information?: string; 
  public get information() {
    return this.getStringAttribute('information');
  }
  public set information(value: string) {
    this._information = value;
  }
  public resetInformation() {
    this._information = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationInput() {
    return this._information;
  }

  // input_background - computed: false, optional: true, required: false
  private _inputBackground?: string; 
  public get inputBackground() {
    return this.getStringAttribute('input_background');
  }
  public set inputBackground(value: string) {
    this._inputBackground = value;
  }
  public resetInputBackground() {
    this._inputBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBackgroundInput() {
    return this._inputBackground;
  }

  // input_border - computed: false, optional: true, required: false
  private _inputBorder?: string; 
  public get inputBorder() {
    return this.getStringAttribute('input_border');
  }
  public set inputBorder(value: string) {
    this._inputBorder = value;
  }
  public resetInputBorder() {
    this._inputBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBorderInput() {
    return this._inputBorder;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // loader - computed: false, optional: true, required: false
  private _loader?: string; 
  public get loader() {
    return this.getStringAttribute('loader');
  }
  public set loader(value: string) {
    this._loader = value;
  }
  public resetLoader() {
    this._loader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaderInput() {
    return this._loader;
  }

  // positive - computed: false, optional: true, required: false
  private _positive?: string; 
  public get positive() {
    return this.getStringAttribute('positive');
  }
  public set positive(value: string) {
    this._positive = value;
  }
  public resetPositive() {
    this._positive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveInput() {
    return this._positive;
  }
}
export interface ThemeDarkModeContainer {
  /**
  * Allowed values: `left`, `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#content_alignment Theme#content_alignment}
  */
  readonly contentAlignment?: string;
  /**
  * Allowed values: `left`, `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_alignment Theme#logo_alignment}
  */
  readonly logoAlignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_height Theme#logo_height}
  */
  readonly logoHeight?: number;
  /**
  * Allowed values: `inside`, `outside`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_position Theme#logo_position}
  */
  readonly logoPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#padding Theme#padding}
  */
  readonly padding?: number;
  /**
  * Allowed values: `inside`, `outside`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#position Theme#position}
  */
  readonly position?: string;
}

export function themeDarkModeContainerToTerraform(struct?: ThemeDarkModeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_alignment: cdktf.stringToTerraform(struct!.contentAlignment),
    logo_alignment: cdktf.stringToTerraform(struct!.logoAlignment),
    logo_height: cdktf.numberToTerraform(struct!.logoHeight),
    logo_position: cdktf.stringToTerraform(struct!.logoPosition),
    padding: cdktf.numberToTerraform(struct!.padding),
    position: cdktf.stringToTerraform(struct!.position),
  }
}


export function themeDarkModeContainerToHclTerraform(struct?: ThemeDarkModeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_alignment: {
      value: cdktf.stringToHclTerraform(struct!.contentAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_alignment: {
      value: cdktf.stringToHclTerraform(struct!.logoAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_height: {
      value: cdktf.numberToHclTerraform(struct!.logoHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logo_position: {
      value: cdktf.stringToHclTerraform(struct!.logoPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.numberToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeDarkModeContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeDarkModeContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAlignment = this._contentAlignment;
    }
    if (this._logoAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoAlignment = this._logoAlignment;
    }
    if (this._logoHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoHeight = this._logoHeight;
    }
    if (this._logoPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoPosition = this._logoPosition;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeDarkModeContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentAlignment = undefined;
      this._logoAlignment = undefined;
      this._logoHeight = undefined;
      this._logoPosition = undefined;
      this._padding = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentAlignment = value.contentAlignment;
      this._logoAlignment = value.logoAlignment;
      this._logoHeight = value.logoHeight;
      this._logoPosition = value.logoPosition;
      this._padding = value.padding;
      this._position = value.position;
    }
  }

  // content_alignment - computed: false, optional: true, required: false
  private _contentAlignment?: string; 
  public get contentAlignment() {
    return this.getStringAttribute('content_alignment');
  }
  public set contentAlignment(value: string) {
    this._contentAlignment = value;
  }
  public resetContentAlignment() {
    this._contentAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAlignmentInput() {
    return this._contentAlignment;
  }

  // logo_alignment - computed: false, optional: true, required: false
  private _logoAlignment?: string; 
  public get logoAlignment() {
    return this.getStringAttribute('logo_alignment');
  }
  public set logoAlignment(value: string) {
    this._logoAlignment = value;
  }
  public resetLogoAlignment() {
    this._logoAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoAlignmentInput() {
    return this._logoAlignment;
  }

  // logo_height - computed: false, optional: true, required: false
  private _logoHeight?: number; 
  public get logoHeight() {
    return this.getNumberAttribute('logo_height');
  }
  public set logoHeight(value: number) {
    this._logoHeight = value;
  }
  public resetLogoHeight() {
    this._logoHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoHeightInput() {
    return this._logoHeight;
  }

  // logo_position - computed: false, optional: true, required: false
  private _logoPosition?: string; 
  public get logoPosition() {
    return this.getStringAttribute('logo_position');
  }
  public set logoPosition(value: string) {
    this._logoPosition = value;
  }
  public resetLogoPosition() {
    this._logoPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoPositionInput() {
    return this._logoPosition;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: number; 
  public get padding() {
    return this.getNumberAttribute('padding');
  }
  public set padding(value: number) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}
export interface ThemeDarkModePageBackground {
  /**
  * The color to be used for the background in the pre-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#background_color Theme#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The URL of an image which will be used as the background in the pre-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#background_image_url Theme#background_image_url}
  */
  readonly backgroundImageUrl?: string;
}

export function themeDarkModePageBackgroundToTerraform(struct?: ThemeDarkModePageBackground | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    background_image_url: cdktf.stringToTerraform(struct!.backgroundImageUrl),
  }
}


export function themeDarkModePageBackgroundToHclTerraform(struct?: ThemeDarkModePageBackground | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_image_url: {
      value: cdktf.stringToHclTerraform(struct!.backgroundImageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeDarkModePageBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeDarkModePageBackground | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._backgroundImageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundImageUrl = this._backgroundImageUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeDarkModePageBackground | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._backgroundImageUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._backgroundImageUrl = value.backgroundImageUrl;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // background_image_url - computed: false, optional: true, required: false
  private _backgroundImageUrl?: string; 
  public get backgroundImageUrl() {
    return this.getStringAttribute('background_image_url');
  }
  public set backgroundImageUrl(value: string) {
    this._backgroundImageUrl = value;
  }
  public resetBackgroundImageUrl() {
    this._backgroundImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundImageUrlInput() {
    return this._backgroundImageUrl;
  }
}
export interface ThemeDarkModeTypographyDisplay {
  /**
  * The URL of a font file to be used for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#font_url Theme#font_url}
  */
  readonly fontUrl?: string;
}

export function themeDarkModeTypographyDisplayToTerraform(struct?: ThemeDarkModeTypographyDisplay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_url: cdktf.stringToTerraform(struct!.fontUrl),
  }
}


export function themeDarkModeTypographyDisplayToHclTerraform(struct?: ThemeDarkModeTypographyDisplay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    font_url: {
      value: cdktf.stringToHclTerraform(struct!.fontUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeDarkModeTypographyDisplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeDarkModeTypographyDisplay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontUrl = this._fontUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeDarkModeTypographyDisplay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontUrl = value.fontUrl;
    }
  }

  // font_url - computed: false, optional: true, required: false
  private _fontUrl?: string; 
  public get fontUrl() {
    return this.getStringAttribute('font_url');
  }
  public set fontUrl(value: string) {
    this._fontUrl = value;
  }
  public resetFontUrl() {
    this._fontUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontUrlInput() {
    return this._fontUrl;
  }
}
export interface ThemeDarkModeTypography {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#display Theme#display}
  */
  readonly display?: ThemeDarkModeTypographyDisplay;
}

export function themeDarkModeTypographyToTerraform(struct?: ThemeDarkModeTypography | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: themeDarkModeTypographyDisplayToTerraform(struct!.display),
  }
}


export function themeDarkModeTypographyToHclTerraform(struct?: ThemeDarkModeTypography | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: themeDarkModeTypographyDisplayToHclTerraform(struct!.display),
      isBlock: true,
      type: "struct",
      storageClassType: "ThemeDarkModeTypographyDisplay",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeDarkModeTypographyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeDarkModeTypography | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeDarkModeTypography | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display.internalValue = value.display;
    }
  }

  // display - computed: false, optional: true, required: false
  private _display = new ThemeDarkModeTypographyDisplayOutputReference(this, "display");
  public get display() {
    return this._display;
  }
  public putDisplay(value: ThemeDarkModeTypographyDisplay) {
    this._display.internalValue = value;
  }
  public resetDisplay() {
    this._display.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display.internalValue;
  }
}
export interface ThemeDarkMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#borders Theme#borders}
  */
  readonly borders?: ThemeDarkModeBorders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#colors Theme#colors}
  */
  readonly colors?: ThemeDarkModeColors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#container Theme#container}
  */
  readonly container?: ThemeDarkModeContainer;
  /**
  * The URL of an image to be used as a favicon for the tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#favicon_url Theme#favicon_url}
  */
  readonly faviconUrl?: string;
  /**
  * The URL of an image to be used as a logo for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#logo_url Theme#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#page_background Theme#page_background}
  */
  readonly pageBackground?: ThemeDarkModePageBackground;
  /**
  * The primary color for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#primary_color Theme#primary_color}
  */
  readonly primaryColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#typography Theme#typography}
  */
  readonly typography?: ThemeDarkModeTypography;
  /**
  * The URL of an image to be used as a watermark at the bottom of Authsignal's pre-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#watermark_url Theme#watermark_url}
  */
  readonly watermarkUrl?: string;
}

export function themeDarkModeToTerraform(struct?: ThemeDarkMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    borders: themeDarkModeBordersToTerraform(struct!.borders),
    colors: themeDarkModeColorsToTerraform(struct!.colors),
    container: themeDarkModeContainerToTerraform(struct!.container),
    favicon_url: cdktf.stringToTerraform(struct!.faviconUrl),
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
    page_background: themeDarkModePageBackgroundToTerraform(struct!.pageBackground),
    primary_color: cdktf.stringToTerraform(struct!.primaryColor),
    typography: themeDarkModeTypographyToTerraform(struct!.typography),
    watermark_url: cdktf.stringToTerraform(struct!.watermarkUrl),
  }
}


export function themeDarkModeToHclTerraform(struct?: ThemeDarkMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    borders: {
      value: themeDarkModeBordersToHclTerraform(struct!.borders),
      isBlock: true,
      type: "struct",
      storageClassType: "ThemeDarkModeBorders",
    },
    colors: {
      value: themeDarkModeColorsToHclTerraform(struct!.colors),
      isBlock: true,
      type: "struct",
      storageClassType: "ThemeDarkModeColors",
    },
    container: {
      value: themeDarkModeContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "ThemeDarkModeContainer",
    },
    favicon_url: {
      value: cdktf.stringToHclTerraform(struct!.faviconUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_background: {
      value: themeDarkModePageBackgroundToHclTerraform(struct!.pageBackground),
      isBlock: true,
      type: "struct",
      storageClassType: "ThemeDarkModePageBackground",
    },
    primary_color: {
      value: cdktf.stringToHclTerraform(struct!.primaryColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    typography: {
      value: themeDarkModeTypographyToHclTerraform(struct!.typography),
      isBlock: true,
      type: "struct",
      storageClassType: "ThemeDarkModeTypography",
    },
    watermark_url: {
      value: cdktf.stringToHclTerraform(struct!.watermarkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeDarkModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeDarkMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.borders = this._borders?.internalValue;
    }
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._faviconUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.faviconUrl = this._faviconUrl;
    }
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    if (this._pageBackground?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageBackground = this._pageBackground?.internalValue;
    }
    if (this._primaryColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColor = this._primaryColor;
    }
    if (this._typography?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typography = this._typography?.internalValue;
    }
    if (this._watermarkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkUrl = this._watermarkUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeDarkMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._borders.internalValue = undefined;
      this._colors.internalValue = undefined;
      this._container.internalValue = undefined;
      this._faviconUrl = undefined;
      this._logoUrl = undefined;
      this._pageBackground.internalValue = undefined;
      this._primaryColor = undefined;
      this._typography.internalValue = undefined;
      this._watermarkUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._borders.internalValue = value.borders;
      this._colors.internalValue = value.colors;
      this._container.internalValue = value.container;
      this._faviconUrl = value.faviconUrl;
      this._logoUrl = value.logoUrl;
      this._pageBackground.internalValue = value.pageBackground;
      this._primaryColor = value.primaryColor;
      this._typography.internalValue = value.typography;
      this._watermarkUrl = value.watermarkUrl;
    }
  }

  // borders - computed: false, optional: true, required: false
  private _borders = new ThemeDarkModeBordersOutputReference(this, "borders");
  public get borders() {
    return this._borders;
  }
  public putBorders(value: ThemeDarkModeBorders) {
    this._borders.internalValue = value;
  }
  public resetBorders() {
    this._borders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bordersInput() {
    return this._borders.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new ThemeDarkModeColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: ThemeDarkModeColors) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new ThemeDarkModeContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ThemeDarkModeContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // favicon_url - computed: false, optional: true, required: false
  private _faviconUrl?: string; 
  public get faviconUrl() {
    return this.getStringAttribute('favicon_url');
  }
  public set faviconUrl(value: string) {
    this._faviconUrl = value;
  }
  public resetFaviconUrl() {
    this._faviconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconUrlInput() {
    return this._faviconUrl;
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // page_background - computed: false, optional: true, required: false
  private _pageBackground = new ThemeDarkModePageBackgroundOutputReference(this, "page_background");
  public get pageBackground() {
    return this._pageBackground;
  }
  public putPageBackground(value: ThemeDarkModePageBackground) {
    this._pageBackground.internalValue = value;
  }
  public resetPageBackground() {
    this._pageBackground.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBackgroundInput() {
    return this._pageBackground.internalValue;
  }

  // primary_color - computed: false, optional: true, required: false
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  public resetPrimaryColor() {
    this._primaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // typography - computed: false, optional: true, required: false
  private _typography = new ThemeDarkModeTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }
  public putTypography(value: ThemeDarkModeTypography) {
    this._typography.internalValue = value;
  }
  public resetTypography() {
    this._typography.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typographyInput() {
    return this._typography.internalValue;
  }

  // watermark_url - computed: false, optional: true, required: false
  private _watermarkUrl?: string; 
  public get watermarkUrl() {
    return this.getStringAttribute('watermark_url');
  }
  public set watermarkUrl(value: string) {
    this._watermarkUrl = value;
  }
  public resetWatermarkUrl() {
    this._watermarkUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkUrlInput() {
    return this._watermarkUrl;
  }
}
export interface ThemePageBackground {
  /**
  * The color to be used for the background in the pre-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#background_color Theme#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The URL of an image which will be used as the background in the pre-built UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#background_image_url Theme#background_image_url}
  */
  readonly backgroundImageUrl?: string;
}

export function themePageBackgroundToTerraform(struct?: ThemePageBackground | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    background_image_url: cdktf.stringToTerraform(struct!.backgroundImageUrl),
  }
}


export function themePageBackgroundToHclTerraform(struct?: ThemePageBackground | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_image_url: {
      value: cdktf.stringToHclTerraform(struct!.backgroundImageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemePageBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemePageBackground | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._backgroundImageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundImageUrl = this._backgroundImageUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemePageBackground | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._backgroundImageUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._backgroundImageUrl = value.backgroundImageUrl;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // background_image_url - computed: false, optional: true, required: false
  private _backgroundImageUrl?: string; 
  public get backgroundImageUrl() {
    return this.getStringAttribute('background_image_url');
  }
  public set backgroundImageUrl(value: string) {
    this._backgroundImageUrl = value;
  }
  public resetBackgroundImageUrl() {
    this._backgroundImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundImageUrlInput() {
    return this._backgroundImageUrl;
  }
}
export interface ThemeTypographyDisplay {
  /**
  * The URL of a font file to be used for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#font_url Theme#font_url}
  */
  readonly fontUrl?: string;
}

export function themeTypographyDisplayToTerraform(struct?: ThemeTypographyDisplay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_url: cdktf.stringToTerraform(struct!.fontUrl),
  }
}


export function themeTypographyDisplayToHclTerraform(struct?: ThemeTypographyDisplay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    font_url: {
      value: cdktf.stringToHclTerraform(struct!.fontUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeTypographyDisplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeTypographyDisplay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontUrl = this._fontUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeTypographyDisplay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontUrl = value.fontUrl;
    }
  }

  // font_url - computed: false, optional: true, required: false
  private _fontUrl?: string; 
  public get fontUrl() {
    return this.getStringAttribute('font_url');
  }
  public set fontUrl(value: string) {
    this._fontUrl = value;
  }
  public resetFontUrl() {
    this._fontUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontUrlInput() {
    return this._fontUrl;
  }
}
export interface ThemeTypography {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#display Theme#display}
  */
  readonly display?: ThemeTypographyDisplay;
}

export function themeTypographyToTerraform(struct?: ThemeTypography | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: themeTypographyDisplayToTerraform(struct!.display),
  }
}


export function themeTypographyToHclTerraform(struct?: ThemeTypography | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: themeTypographyDisplayToHclTerraform(struct!.display),
      isBlock: true,
      type: "struct",
      storageClassType: "ThemeTypographyDisplay",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeTypographyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThemeTypography | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeTypography | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display.internalValue = value.display;
    }
  }

  // display - computed: false, optional: true, required: false
  private _display = new ThemeTypographyDisplayOutputReference(this, "display");
  public get display() {
    return this._display;
  }
  public putDisplay(value: ThemeTypographyDisplay) {
    this._display.internalValue = value;
  }
  public resetDisplay() {
    this._display.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme authsignal_theme}
*/
export class Theme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Theme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Theme to import
  * @param importFromId The id of the existing Theme that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Theme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/theme authsignal_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThemeConfig
  */
  public constructor(scope: Construct, id: string, config: ThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'authsignal_theme',
      terraformGeneratorMetadata: {
        providerName: 'authsignal',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._borders.internalValue = config.borders;
    this._colors.internalValue = config.colors;
    this._container.internalValue = config.container;
    this._darkMode.internalValue = config.darkMode;
    this._faviconUrl = config.faviconUrl;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._pageBackground.internalValue = config.pageBackground;
    this._primaryColor = config.primaryColor;
    this._typography.internalValue = config.typography;
    this._watermarkUrl = config.watermarkUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // borders - computed: false, optional: true, required: false
  private _borders = new ThemeBordersOutputReference(this, "borders");
  public get borders() {
    return this._borders;
  }
  public putBorders(value: ThemeBorders) {
    this._borders.internalValue = value;
  }
  public resetBorders() {
    this._borders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bordersInput() {
    return this._borders.internalValue;
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new ThemeColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: ThemeColors) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new ThemeContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ThemeContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // dark_mode - computed: false, optional: true, required: false
  private _darkMode = new ThemeDarkModeOutputReference(this, "dark_mode");
  public get darkMode() {
    return this._darkMode;
  }
  public putDarkMode(value: ThemeDarkMode) {
    this._darkMode.internalValue = value;
  }
  public resetDarkMode() {
    this._darkMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darkModeInput() {
    return this._darkMode.internalValue;
  }

  // favicon_url - computed: false, optional: true, required: false
  private _faviconUrl?: string; 
  public get faviconUrl() {
    return this.getStringAttribute('favicon_url');
  }
  public set faviconUrl(value: string) {
    this._faviconUrl = value;
  }
  public resetFaviconUrl() {
    this._faviconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconUrlInput() {
    return this._faviconUrl;
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // page_background - computed: false, optional: true, required: false
  private _pageBackground = new ThemePageBackgroundOutputReference(this, "page_background");
  public get pageBackground() {
    return this._pageBackground;
  }
  public putPageBackground(value: ThemePageBackground) {
    this._pageBackground.internalValue = value;
  }
  public resetPageBackground() {
    this._pageBackground.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBackgroundInput() {
    return this._pageBackground.internalValue;
  }

  // primary_color - computed: false, optional: true, required: false
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  public resetPrimaryColor() {
    this._primaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // typography - computed: false, optional: true, required: false
  private _typography = new ThemeTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }
  public putTypography(value: ThemeTypography) {
    this._typography.internalValue = value;
  }
  public resetTypography() {
    this._typography.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typographyInput() {
    return this._typography.internalValue;
  }

  // watermark_url - computed: false, optional: true, required: false
  private _watermarkUrl?: string; 
  public get watermarkUrl() {
    return this.getStringAttribute('watermark_url');
  }
  public set watermarkUrl(value: string) {
    this._watermarkUrl = value;
  }
  public resetWatermarkUrl() {
    this._watermarkUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkUrlInput() {
    return this._watermarkUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      borders: themeBordersToTerraform(this._borders.internalValue),
      colors: themeColorsToTerraform(this._colors.internalValue),
      container: themeContainerToTerraform(this._container.internalValue),
      dark_mode: themeDarkModeToTerraform(this._darkMode.internalValue),
      favicon_url: cdktf.stringToTerraform(this._faviconUrl),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      page_background: themePageBackgroundToTerraform(this._pageBackground.internalValue),
      primary_color: cdktf.stringToTerraform(this._primaryColor),
      typography: themeTypographyToTerraform(this._typography.internalValue),
      watermark_url: cdktf.stringToTerraform(this._watermarkUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      borders: {
        value: themeBordersToHclTerraform(this._borders.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThemeBorders",
      },
      colors: {
        value: themeColorsToHclTerraform(this._colors.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThemeColors",
      },
      container: {
        value: themeContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThemeContainer",
      },
      dark_mode: {
        value: themeDarkModeToHclTerraform(this._darkMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThemeDarkMode",
      },
      favicon_url: {
        value: cdktf.stringToHclTerraform(this._faviconUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_background: {
        value: themePageBackgroundToHclTerraform(this._pageBackground.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThemePageBackground",
      },
      primary_color: {
        value: cdktf.stringToHclTerraform(this._primaryColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      typography: {
        value: themeTypographyToHclTerraform(this._typography.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThemeTypography",
      },
      watermark_url: {
        value: cdktf.stringToHclTerraform(this._watermarkUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
