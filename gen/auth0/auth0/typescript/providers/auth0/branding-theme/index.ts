// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandingThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for the branding theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#display_name BrandingTheme#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#id BrandingTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * borders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#borders BrandingTheme#borders}
  */
  readonly borders: BrandingThemeBorders;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#colors BrandingTheme#colors}
  */
  readonly colors: BrandingThemeColors;
  /**
  * fonts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#fonts BrandingTheme#fonts}
  */
  readonly fonts: BrandingThemeFonts;
  /**
  * page_background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#page_background BrandingTheme#page_background}
  */
  readonly pageBackground: BrandingThemePageBackground;
  /**
  * widget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#widget BrandingTheme#widget}
  */
  readonly widget: BrandingThemeWidget;
}
export interface BrandingThemeBorders {
  /**
  * Button border radius. Value needs to be between `1` and `10`. Defaults to `3.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#button_border_radius BrandingTheme#button_border_radius}
  */
  readonly buttonBorderRadius?: number;
  /**
  * Button border weight. Value needs to be between `0` and `10`. Defaults to `1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#button_border_weight BrandingTheme#button_border_weight}
  */
  readonly buttonBorderWeight?: number;
  /**
  * Buttons style. Available options: `pill`, `rounded`, `sharp`. Defaults to `rounded`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#buttons_style BrandingTheme#buttons_style}
  */
  readonly buttonsStyle?: string;
  /**
  * Input border radius. Value needs to be between `0` and `10`. Defaults to `3.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#input_border_radius BrandingTheme#input_border_radius}
  */
  readonly inputBorderRadius?: number;
  /**
  * Input border weight. Value needs to be between `0` and `3`. Defaults to `1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#input_border_weight BrandingTheme#input_border_weight}
  */
  readonly inputBorderWeight?: number;
  /**
  * Inputs style. Available options: `pill`, `rounded`, `sharp`. Defaults to `rounded`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#inputs_style BrandingTheme#inputs_style}
  */
  readonly inputsStyle?: string;
  /**
  * Show widget shadow. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#show_widget_shadow BrandingTheme#show_widget_shadow}
  */
  readonly showWidgetShadow?: boolean | cdktf.IResolvable;
  /**
  * Widget border weight. Value needs to be between `0` and `10`. Defaults to `0.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#widget_border_weight BrandingTheme#widget_border_weight}
  */
  readonly widgetBorderWeight?: number;
  /**
  * Widget corner radius. Value needs to be between `0` and `50`. Defaults to `5.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#widget_corner_radius BrandingTheme#widget_corner_radius}
  */
  readonly widgetCornerRadius?: number;
}

export function brandingThemeBordersToTerraform(struct?: BrandingThemeBordersOutputReference | BrandingThemeBorders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_border_radius: cdktf.numberToTerraform(struct!.buttonBorderRadius),
    button_border_weight: cdktf.numberToTerraform(struct!.buttonBorderWeight),
    buttons_style: cdktf.stringToTerraform(struct!.buttonsStyle),
    input_border_radius: cdktf.numberToTerraform(struct!.inputBorderRadius),
    input_border_weight: cdktf.numberToTerraform(struct!.inputBorderWeight),
    inputs_style: cdktf.stringToTerraform(struct!.inputsStyle),
    show_widget_shadow: cdktf.booleanToTerraform(struct!.showWidgetShadow),
    widget_border_weight: cdktf.numberToTerraform(struct!.widgetBorderWeight),
    widget_corner_radius: cdktf.numberToTerraform(struct!.widgetCornerRadius),
  }
}


export function brandingThemeBordersToHclTerraform(struct?: BrandingThemeBordersOutputReference | BrandingThemeBorders): any {
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
    button_border_weight: {
      value: cdktf.numberToHclTerraform(struct!.buttonBorderWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buttons_style: {
      value: cdktf.stringToHclTerraform(struct!.buttonsStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_border_radius: {
      value: cdktf.numberToHclTerraform(struct!.inputBorderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_border_weight: {
      value: cdktf.numberToHclTerraform(struct!.inputBorderWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inputs_style: {
      value: cdktf.stringToHclTerraform(struct!.inputsStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_widget_shadow: {
      value: cdktf.booleanToHclTerraform(struct!.showWidgetShadow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    widget_border_weight: {
      value: cdktf.numberToHclTerraform(struct!.widgetBorderWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    widget_corner_radius: {
      value: cdktf.numberToHclTerraform(struct!.widgetCornerRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeBordersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeBorders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBorderRadius = this._buttonBorderRadius;
    }
    if (this._buttonBorderWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonBorderWeight = this._buttonBorderWeight;
    }
    if (this._buttonsStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonsStyle = this._buttonsStyle;
    }
    if (this._inputBorderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorderRadius = this._inputBorderRadius;
    }
    if (this._inputBorderWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorderWeight = this._inputBorderWeight;
    }
    if (this._inputsStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputsStyle = this._inputsStyle;
    }
    if (this._showWidgetShadow !== undefined) {
      hasAnyValues = true;
      internalValueResult.showWidgetShadow = this._showWidgetShadow;
    }
    if (this._widgetBorderWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBorderWeight = this._widgetBorderWeight;
    }
    if (this._widgetCornerRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetCornerRadius = this._widgetCornerRadius;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeBorders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buttonBorderRadius = undefined;
      this._buttonBorderWeight = undefined;
      this._buttonsStyle = undefined;
      this._inputBorderRadius = undefined;
      this._inputBorderWeight = undefined;
      this._inputsStyle = undefined;
      this._showWidgetShadow = undefined;
      this._widgetBorderWeight = undefined;
      this._widgetCornerRadius = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buttonBorderRadius = value.buttonBorderRadius;
      this._buttonBorderWeight = value.buttonBorderWeight;
      this._buttonsStyle = value.buttonsStyle;
      this._inputBorderRadius = value.inputBorderRadius;
      this._inputBorderWeight = value.inputBorderWeight;
      this._inputsStyle = value.inputsStyle;
      this._showWidgetShadow = value.showWidgetShadow;
      this._widgetBorderWeight = value.widgetBorderWeight;
      this._widgetCornerRadius = value.widgetCornerRadius;
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

  // button_border_weight - computed: false, optional: true, required: false
  private _buttonBorderWeight?: number; 
  public get buttonBorderWeight() {
    return this.getNumberAttribute('button_border_weight');
  }
  public set buttonBorderWeight(value: number) {
    this._buttonBorderWeight = value;
  }
  public resetButtonBorderWeight() {
    this._buttonBorderWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonBorderWeightInput() {
    return this._buttonBorderWeight;
  }

  // buttons_style - computed: false, optional: true, required: false
  private _buttonsStyle?: string; 
  public get buttonsStyle() {
    return this.getStringAttribute('buttons_style');
  }
  public set buttonsStyle(value: string) {
    this._buttonsStyle = value;
  }
  public resetButtonsStyle() {
    this._buttonsStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsStyleInput() {
    return this._buttonsStyle;
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

  // input_border_weight - computed: false, optional: true, required: false
  private _inputBorderWeight?: number; 
  public get inputBorderWeight() {
    return this.getNumberAttribute('input_border_weight');
  }
  public set inputBorderWeight(value: number) {
    this._inputBorderWeight = value;
  }
  public resetInputBorderWeight() {
    this._inputBorderWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBorderWeightInput() {
    return this._inputBorderWeight;
  }

  // inputs_style - computed: false, optional: true, required: false
  private _inputsStyle?: string; 
  public get inputsStyle() {
    return this.getStringAttribute('inputs_style');
  }
  public set inputsStyle(value: string) {
    this._inputsStyle = value;
  }
  public resetInputsStyle() {
    this._inputsStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsStyleInput() {
    return this._inputsStyle;
  }

  // show_widget_shadow - computed: false, optional: true, required: false
  private _showWidgetShadow?: boolean | cdktf.IResolvable; 
  public get showWidgetShadow() {
    return this.getBooleanAttribute('show_widget_shadow');
  }
  public set showWidgetShadow(value: boolean | cdktf.IResolvable) {
    this._showWidgetShadow = value;
  }
  public resetShowWidgetShadow() {
    this._showWidgetShadow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showWidgetShadowInput() {
    return this._showWidgetShadow;
  }

  // widget_border_weight - computed: false, optional: true, required: false
  private _widgetBorderWeight?: number; 
  public get widgetBorderWeight() {
    return this.getNumberAttribute('widget_border_weight');
  }
  public set widgetBorderWeight(value: number) {
    this._widgetBorderWeight = value;
  }
  public resetWidgetBorderWeight() {
    this._widgetBorderWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBorderWeightInput() {
    return this._widgetBorderWeight;
  }

  // widget_corner_radius - computed: false, optional: true, required: false
  private _widgetCornerRadius?: number; 
  public get widgetCornerRadius() {
    return this.getNumberAttribute('widget_corner_radius');
  }
  public set widgetCornerRadius(value: number) {
    this._widgetCornerRadius = value;
  }
  public resetWidgetCornerRadius() {
    this._widgetCornerRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetCornerRadiusInput() {
    return this._widgetCornerRadius;
  }
}
export interface BrandingThemeColors {
  /**
  * Base focus color. Defaults to `#635dff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#base_focus_color BrandingTheme#base_focus_color}
  */
  readonly baseFocusColor?: string;
  /**
  * Base hover color. Defaults to `#000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#base_hover_color BrandingTheme#base_hover_color}
  */
  readonly baseHoverColor?: string;
  /**
  * Body text. Defaults to `#1e212a`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#body_text BrandingTheme#body_text}
  */
  readonly bodyText?: string;
  /**
  * Captcha Widget Theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#captcha_widget_theme BrandingTheme#captcha_widget_theme}
  */
  readonly captchaWidgetTheme?: string;
  /**
  * Error. Defaults to `#d03c38`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#error BrandingTheme#error}
  */
  readonly error?: string;
  /**
  * Header. Defaults to `#1e212a`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#header BrandingTheme#header}
  */
  readonly header?: string;
  /**
  * Icons. Defaults to `#65676e`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#icons BrandingTheme#icons}
  */
  readonly icons?: string;
  /**
  * Input background. Defaults to `#ffffff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#input_background BrandingTheme#input_background}
  */
  readonly inputBackground?: string;
  /**
  * Input border. Defaults to `#c9cace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#input_border BrandingTheme#input_border}
  */
  readonly inputBorder?: string;
  /**
  * Input filled text. Defaults to `#000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#input_filled_text BrandingTheme#input_filled_text}
  */
  readonly inputFilledText?: string;
  /**
  * Input labels & placeholders. Defaults to `#65676e`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#input_labels_placeholders BrandingTheme#input_labels_placeholders}
  */
  readonly inputLabelsPlaceholders?: string;
  /**
  * Links & focused components. Defaults to `#635dff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#links_focused_components BrandingTheme#links_focused_components}
  */
  readonly linksFocusedComponents?: string;
  /**
  * Primary button. Defaults to `#635dff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#primary_button BrandingTheme#primary_button}
  */
  readonly primaryButton?: string;
  /**
  * Primary button label. Defaults to `#ffffff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#primary_button_label BrandingTheme#primary_button_label}
  */
  readonly primaryButtonLabel?: string;
  /**
  * Secondary button border. Defaults to `#c9cace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#secondary_button_border BrandingTheme#secondary_button_border}
  */
  readonly secondaryButtonBorder?: string;
  /**
  * Secondary button label. Defaults to `#1e212a`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#secondary_button_label BrandingTheme#secondary_button_label}
  */
  readonly secondaryButtonLabel?: string;
  /**
  * Success. Defaults to `#13a688`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#success BrandingTheme#success}
  */
  readonly success?: string;
  /**
  * Widget background. Defaults to `#ffffff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#widget_background BrandingTheme#widget_background}
  */
  readonly widgetBackground?: string;
  /**
  * Widget border. Defaults to `#c9cace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#widget_border BrandingTheme#widget_border}
  */
  readonly widgetBorder?: string;
}

export function brandingThemeColorsToTerraform(struct?: BrandingThemeColorsOutputReference | BrandingThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_focus_color: cdktf.stringToTerraform(struct!.baseFocusColor),
    base_hover_color: cdktf.stringToTerraform(struct!.baseHoverColor),
    body_text: cdktf.stringToTerraform(struct!.bodyText),
    captcha_widget_theme: cdktf.stringToTerraform(struct!.captchaWidgetTheme),
    error: cdktf.stringToTerraform(struct!.error),
    header: cdktf.stringToTerraform(struct!.header),
    icons: cdktf.stringToTerraform(struct!.icons),
    input_background: cdktf.stringToTerraform(struct!.inputBackground),
    input_border: cdktf.stringToTerraform(struct!.inputBorder),
    input_filled_text: cdktf.stringToTerraform(struct!.inputFilledText),
    input_labels_placeholders: cdktf.stringToTerraform(struct!.inputLabelsPlaceholders),
    links_focused_components: cdktf.stringToTerraform(struct!.linksFocusedComponents),
    primary_button: cdktf.stringToTerraform(struct!.primaryButton),
    primary_button_label: cdktf.stringToTerraform(struct!.primaryButtonLabel),
    secondary_button_border: cdktf.stringToTerraform(struct!.secondaryButtonBorder),
    secondary_button_label: cdktf.stringToTerraform(struct!.secondaryButtonLabel),
    success: cdktf.stringToTerraform(struct!.success),
    widget_background: cdktf.stringToTerraform(struct!.widgetBackground),
    widget_border: cdktf.stringToTerraform(struct!.widgetBorder),
  }
}


export function brandingThemeColorsToHclTerraform(struct?: BrandingThemeColorsOutputReference | BrandingThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_focus_color: {
      value: cdktf.stringToHclTerraform(struct!.baseFocusColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_hover_color: {
      value: cdktf.stringToHclTerraform(struct!.baseHoverColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_text: {
      value: cdktf.stringToHclTerraform(struct!.bodyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_widget_theme: {
      value: cdktf.stringToHclTerraform(struct!.captchaWidgetTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icons: {
      value: cdktf.stringToHclTerraform(struct!.icons),
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
    input_filled_text: {
      value: cdktf.stringToHclTerraform(struct!.inputFilledText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_labels_placeholders: {
      value: cdktf.stringToHclTerraform(struct!.inputLabelsPlaceholders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links_focused_components: {
      value: cdktf.stringToHclTerraform(struct!.linksFocusedComponents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_button: {
      value: cdktf.stringToHclTerraform(struct!.primaryButton),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_button_label: {
      value: cdktf.stringToHclTerraform(struct!.primaryButtonLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_button_border: {
      value: cdktf.stringToHclTerraform(struct!.secondaryButtonBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_button_label: {
      value: cdktf.stringToHclTerraform(struct!.secondaryButtonLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success: {
      value: cdktf.stringToHclTerraform(struct!.success),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_background: {
      value: cdktf.stringToHclTerraform(struct!.widgetBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_border: {
      value: cdktf.stringToHclTerraform(struct!.widgetBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseFocusColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseFocusColor = this._baseFocusColor;
    }
    if (this._baseHoverColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseHoverColor = this._baseHoverColor;
    }
    if (this._bodyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyText = this._bodyText;
    }
    if (this._captchaWidgetTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaWidgetTheme = this._captchaWidgetTheme;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._icons !== undefined) {
      hasAnyValues = true;
      internalValueResult.icons = this._icons;
    }
    if (this._inputBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBackground = this._inputBackground;
    }
    if (this._inputBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBorder = this._inputBorder;
    }
    if (this._inputFilledText !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFilledText = this._inputFilledText;
    }
    if (this._inputLabelsPlaceholders !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLabelsPlaceholders = this._inputLabelsPlaceholders;
    }
    if (this._linksFocusedComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.linksFocusedComponents = this._linksFocusedComponents;
    }
    if (this._primaryButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryButton = this._primaryButton;
    }
    if (this._primaryButtonLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryButtonLabel = this._primaryButtonLabel;
    }
    if (this._secondaryButtonBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryButtonBorder = this._secondaryButtonBorder;
    }
    if (this._secondaryButtonLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryButtonLabel = this._secondaryButtonLabel;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    if (this._widgetBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBackground = this._widgetBackground;
    }
    if (this._widgetBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetBorder = this._widgetBorder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseFocusColor = undefined;
      this._baseHoverColor = undefined;
      this._bodyText = undefined;
      this._captchaWidgetTheme = undefined;
      this._error = undefined;
      this._header = undefined;
      this._icons = undefined;
      this._inputBackground = undefined;
      this._inputBorder = undefined;
      this._inputFilledText = undefined;
      this._inputLabelsPlaceholders = undefined;
      this._linksFocusedComponents = undefined;
      this._primaryButton = undefined;
      this._primaryButtonLabel = undefined;
      this._secondaryButtonBorder = undefined;
      this._secondaryButtonLabel = undefined;
      this._success = undefined;
      this._widgetBackground = undefined;
      this._widgetBorder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseFocusColor = value.baseFocusColor;
      this._baseHoverColor = value.baseHoverColor;
      this._bodyText = value.bodyText;
      this._captchaWidgetTheme = value.captchaWidgetTheme;
      this._error = value.error;
      this._header = value.header;
      this._icons = value.icons;
      this._inputBackground = value.inputBackground;
      this._inputBorder = value.inputBorder;
      this._inputFilledText = value.inputFilledText;
      this._inputLabelsPlaceholders = value.inputLabelsPlaceholders;
      this._linksFocusedComponents = value.linksFocusedComponents;
      this._primaryButton = value.primaryButton;
      this._primaryButtonLabel = value.primaryButtonLabel;
      this._secondaryButtonBorder = value.secondaryButtonBorder;
      this._secondaryButtonLabel = value.secondaryButtonLabel;
      this._success = value.success;
      this._widgetBackground = value.widgetBackground;
      this._widgetBorder = value.widgetBorder;
    }
  }

  // base_focus_color - computed: false, optional: true, required: false
  private _baseFocusColor?: string; 
  public get baseFocusColor() {
    return this.getStringAttribute('base_focus_color');
  }
  public set baseFocusColor(value: string) {
    this._baseFocusColor = value;
  }
  public resetBaseFocusColor() {
    this._baseFocusColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseFocusColorInput() {
    return this._baseFocusColor;
  }

  // base_hover_color - computed: false, optional: true, required: false
  private _baseHoverColor?: string; 
  public get baseHoverColor() {
    return this.getStringAttribute('base_hover_color');
  }
  public set baseHoverColor(value: string) {
    this._baseHoverColor = value;
  }
  public resetBaseHoverColor() {
    this._baseHoverColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseHoverColorInput() {
    return this._baseHoverColor;
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

  // captcha_widget_theme - computed: false, optional: true, required: false
  private _captchaWidgetTheme?: string; 
  public get captchaWidgetTheme() {
    return this.getStringAttribute('captcha_widget_theme');
  }
  public set captchaWidgetTheme(value: string) {
    this._captchaWidgetTheme = value;
  }
  public resetCaptchaWidgetTheme() {
    this._captchaWidgetTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaWidgetThemeInput() {
    return this._captchaWidgetTheme;
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // icons - computed: false, optional: true, required: false
  private _icons?: string; 
  public get icons() {
    return this.getStringAttribute('icons');
  }
  public set icons(value: string) {
    this._icons = value;
  }
  public resetIcons() {
    this._icons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconsInput() {
    return this._icons;
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

  // input_filled_text - computed: false, optional: true, required: false
  private _inputFilledText?: string; 
  public get inputFilledText() {
    return this.getStringAttribute('input_filled_text');
  }
  public set inputFilledText(value: string) {
    this._inputFilledText = value;
  }
  public resetInputFilledText() {
    this._inputFilledText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFilledTextInput() {
    return this._inputFilledText;
  }

  // input_labels_placeholders - computed: false, optional: true, required: false
  private _inputLabelsPlaceholders?: string; 
  public get inputLabelsPlaceholders() {
    return this.getStringAttribute('input_labels_placeholders');
  }
  public set inputLabelsPlaceholders(value: string) {
    this._inputLabelsPlaceholders = value;
  }
  public resetInputLabelsPlaceholders() {
    this._inputLabelsPlaceholders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLabelsPlaceholdersInput() {
    return this._inputLabelsPlaceholders;
  }

  // links_focused_components - computed: false, optional: true, required: false
  private _linksFocusedComponents?: string; 
  public get linksFocusedComponents() {
    return this.getStringAttribute('links_focused_components');
  }
  public set linksFocusedComponents(value: string) {
    this._linksFocusedComponents = value;
  }
  public resetLinksFocusedComponents() {
    this._linksFocusedComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksFocusedComponentsInput() {
    return this._linksFocusedComponents;
  }

  // primary_button - computed: false, optional: true, required: false
  private _primaryButton?: string; 
  public get primaryButton() {
    return this.getStringAttribute('primary_button');
  }
  public set primaryButton(value: string) {
    this._primaryButton = value;
  }
  public resetPrimaryButton() {
    this._primaryButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryButtonInput() {
    return this._primaryButton;
  }

  // primary_button_label - computed: false, optional: true, required: false
  private _primaryButtonLabel?: string; 
  public get primaryButtonLabel() {
    return this.getStringAttribute('primary_button_label');
  }
  public set primaryButtonLabel(value: string) {
    this._primaryButtonLabel = value;
  }
  public resetPrimaryButtonLabel() {
    this._primaryButtonLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryButtonLabelInput() {
    return this._primaryButtonLabel;
  }

  // secondary_button_border - computed: false, optional: true, required: false
  private _secondaryButtonBorder?: string; 
  public get secondaryButtonBorder() {
    return this.getStringAttribute('secondary_button_border');
  }
  public set secondaryButtonBorder(value: string) {
    this._secondaryButtonBorder = value;
  }
  public resetSecondaryButtonBorder() {
    this._secondaryButtonBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryButtonBorderInput() {
    return this._secondaryButtonBorder;
  }

  // secondary_button_label - computed: false, optional: true, required: false
  private _secondaryButtonLabel?: string; 
  public get secondaryButtonLabel() {
    return this.getStringAttribute('secondary_button_label');
  }
  public set secondaryButtonLabel(value: string) {
    this._secondaryButtonLabel = value;
  }
  public resetSecondaryButtonLabel() {
    this._secondaryButtonLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryButtonLabelInput() {
    return this._secondaryButtonLabel;
  }

  // success - computed: false, optional: true, required: false
  private _success?: string; 
  public get success() {
    return this.getStringAttribute('success');
  }
  public set success(value: string) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }

  // widget_background - computed: false, optional: true, required: false
  private _widgetBackground?: string; 
  public get widgetBackground() {
    return this.getStringAttribute('widget_background');
  }
  public set widgetBackground(value: string) {
    this._widgetBackground = value;
  }
  public resetWidgetBackground() {
    this._widgetBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBackgroundInput() {
    return this._widgetBackground;
  }

  // widget_border - computed: false, optional: true, required: false
  private _widgetBorder?: string; 
  public get widgetBorder() {
    return this.getStringAttribute('widget_border');
  }
  public set widgetBorder(value: string) {
    this._widgetBorder = value;
  }
  public resetWidgetBorder() {
    this._widgetBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetBorderInput() {
    return this._widgetBorder;
  }
}
export interface BrandingThemeFontsBodyText {
  /**
  * Body text bold. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#bold BrandingTheme#bold}
  */
  readonly bold?: boolean | cdktf.IResolvable;
  /**
  * Body text size. Value needs to be between `0` and `150`. Defaults to `87.5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#size BrandingTheme#size}
  */
  readonly size?: number;
}

export function brandingThemeFontsBodyTextToTerraform(struct?: BrandingThemeFontsBodyTextOutputReference | BrandingThemeFontsBodyText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bold: cdktf.booleanToTerraform(struct!.bold),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function brandingThemeFontsBodyTextToHclTerraform(struct?: BrandingThemeFontsBodyTextOutputReference | BrandingThemeFontsBodyText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bold: {
      value: cdktf.booleanToHclTerraform(struct!.bold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeFontsBodyTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeFontsBodyText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bold = this._bold;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeFontsBodyText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bold = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bold = value.bold;
      this._size = value.size;
    }
  }

  // bold - computed: false, optional: true, required: false
  private _bold?: boolean | cdktf.IResolvable; 
  public get bold() {
    return this.getBooleanAttribute('bold');
  }
  public set bold(value: boolean | cdktf.IResolvable) {
    this._bold = value;
  }
  public resetBold() {
    this._bold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boldInput() {
    return this._bold;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface BrandingThemeFontsButtonsText {
  /**
  * Buttons text bold. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#bold BrandingTheme#bold}
  */
  readonly bold?: boolean | cdktf.IResolvable;
  /**
  * Buttons text size. Value needs to be between `0` and `150`. Defaults to `100.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#size BrandingTheme#size}
  */
  readonly size?: number;
}

export function brandingThemeFontsButtonsTextToTerraform(struct?: BrandingThemeFontsButtonsTextOutputReference | BrandingThemeFontsButtonsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bold: cdktf.booleanToTerraform(struct!.bold),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function brandingThemeFontsButtonsTextToHclTerraform(struct?: BrandingThemeFontsButtonsTextOutputReference | BrandingThemeFontsButtonsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bold: {
      value: cdktf.booleanToHclTerraform(struct!.bold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeFontsButtonsTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeFontsButtonsText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bold = this._bold;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeFontsButtonsText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bold = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bold = value.bold;
      this._size = value.size;
    }
  }

  // bold - computed: false, optional: true, required: false
  private _bold?: boolean | cdktf.IResolvable; 
  public get bold() {
    return this.getBooleanAttribute('bold');
  }
  public set bold(value: boolean | cdktf.IResolvable) {
    this._bold = value;
  }
  public resetBold() {
    this._bold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boldInput() {
    return this._bold;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface BrandingThemeFontsInputLabels {
  /**
  * Input labels bold. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#bold BrandingTheme#bold}
  */
  readonly bold?: boolean | cdktf.IResolvable;
  /**
  * Input labels size. Value needs to be between `0` and `150`. Defaults to `100.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#size BrandingTheme#size}
  */
  readonly size?: number;
}

export function brandingThemeFontsInputLabelsToTerraform(struct?: BrandingThemeFontsInputLabelsOutputReference | BrandingThemeFontsInputLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bold: cdktf.booleanToTerraform(struct!.bold),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function brandingThemeFontsInputLabelsToHclTerraform(struct?: BrandingThemeFontsInputLabelsOutputReference | BrandingThemeFontsInputLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bold: {
      value: cdktf.booleanToHclTerraform(struct!.bold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeFontsInputLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeFontsInputLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bold = this._bold;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeFontsInputLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bold = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bold = value.bold;
      this._size = value.size;
    }
  }

  // bold - computed: false, optional: true, required: false
  private _bold?: boolean | cdktf.IResolvable; 
  public get bold() {
    return this.getBooleanAttribute('bold');
  }
  public set bold(value: boolean | cdktf.IResolvable) {
    this._bold = value;
  }
  public resetBold() {
    this._bold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boldInput() {
    return this._bold;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface BrandingThemeFontsLinks {
  /**
  * Links bold. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#bold BrandingTheme#bold}
  */
  readonly bold?: boolean | cdktf.IResolvable;
  /**
  * Links size. Value needs to be between `0` and `150`. Defaults to `87.5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#size BrandingTheme#size}
  */
  readonly size?: number;
}

export function brandingThemeFontsLinksToTerraform(struct?: BrandingThemeFontsLinksOutputReference | BrandingThemeFontsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bold: cdktf.booleanToTerraform(struct!.bold),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function brandingThemeFontsLinksToHclTerraform(struct?: BrandingThemeFontsLinksOutputReference | BrandingThemeFontsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bold: {
      value: cdktf.booleanToHclTerraform(struct!.bold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeFontsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeFontsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bold = this._bold;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeFontsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bold = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bold = value.bold;
      this._size = value.size;
    }
  }

  // bold - computed: false, optional: true, required: false
  private _bold?: boolean | cdktf.IResolvable; 
  public get bold() {
    return this.getBooleanAttribute('bold');
  }
  public set bold(value: boolean | cdktf.IResolvable) {
    this._bold = value;
  }
  public resetBold() {
    this._bold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boldInput() {
    return this._bold;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface BrandingThemeFontsSubtitle {
  /**
  * Subtitle bold. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#bold BrandingTheme#bold}
  */
  readonly bold?: boolean | cdktf.IResolvable;
  /**
  * Subtitle size. Value needs to be between `0` and `150`. Defaults to `87.5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#size BrandingTheme#size}
  */
  readonly size?: number;
}

export function brandingThemeFontsSubtitleToTerraform(struct?: BrandingThemeFontsSubtitleOutputReference | BrandingThemeFontsSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bold: cdktf.booleanToTerraform(struct!.bold),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function brandingThemeFontsSubtitleToHclTerraform(struct?: BrandingThemeFontsSubtitleOutputReference | BrandingThemeFontsSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bold: {
      value: cdktf.booleanToHclTerraform(struct!.bold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeFontsSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeFontsSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bold = this._bold;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeFontsSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bold = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bold = value.bold;
      this._size = value.size;
    }
  }

  // bold - computed: false, optional: true, required: false
  private _bold?: boolean | cdktf.IResolvable; 
  public get bold() {
    return this.getBooleanAttribute('bold');
  }
  public set bold(value: boolean | cdktf.IResolvable) {
    this._bold = value;
  }
  public resetBold() {
    this._bold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boldInput() {
    return this._bold;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface BrandingThemeFontsTitle {
  /**
  * Title bold. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#bold BrandingTheme#bold}
  */
  readonly bold?: boolean | cdktf.IResolvable;
  /**
  * Title size. Value needs to be between `75` and `150`. Defaults to `150.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#size BrandingTheme#size}
  */
  readonly size?: number;
}

export function brandingThemeFontsTitleToTerraform(struct?: BrandingThemeFontsTitleOutputReference | BrandingThemeFontsTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bold: cdktf.booleanToTerraform(struct!.bold),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function brandingThemeFontsTitleToHclTerraform(struct?: BrandingThemeFontsTitleOutputReference | BrandingThemeFontsTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bold: {
      value: cdktf.booleanToHclTerraform(struct!.bold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeFontsTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeFontsTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bold = this._bold;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeFontsTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bold = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bold = value.bold;
      this._size = value.size;
    }
  }

  // bold - computed: false, optional: true, required: false
  private _bold?: boolean | cdktf.IResolvable; 
  public get bold() {
    return this.getBooleanAttribute('bold');
  }
  public set bold(value: boolean | cdktf.IResolvable) {
    this._bold = value;
  }
  public resetBold() {
    this._bold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boldInput() {
    return this._bold;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface BrandingThemeFonts {
  /**
  * Font URL. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#font_url BrandingTheme#font_url}
  */
  readonly fontUrl?: string;
  /**
  * Links style. Defaults to `normal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#links_style BrandingTheme#links_style}
  */
  readonly linksStyle?: string;
  /**
  * Reference text size. Value needs to be between `12` and `24`. Defaults to `16.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#reference_text_size BrandingTheme#reference_text_size}
  */
  readonly referenceTextSize?: number;
  /**
  * body_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#body_text BrandingTheme#body_text}
  */
  readonly bodyText: BrandingThemeFontsBodyText;
  /**
  * buttons_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#buttons_text BrandingTheme#buttons_text}
  */
  readonly buttonsText: BrandingThemeFontsButtonsText;
  /**
  * input_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#input_labels BrandingTheme#input_labels}
  */
  readonly inputLabels: BrandingThemeFontsInputLabels;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#links BrandingTheme#links}
  */
  readonly links: BrandingThemeFontsLinks;
  /**
  * subtitle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#subtitle BrandingTheme#subtitle}
  */
  readonly subtitle: BrandingThemeFontsSubtitle;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#title BrandingTheme#title}
  */
  readonly title: BrandingThemeFontsTitle;
}

export function brandingThemeFontsToTerraform(struct?: BrandingThemeFontsOutputReference | BrandingThemeFonts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_url: cdktf.stringToTerraform(struct!.fontUrl),
    links_style: cdktf.stringToTerraform(struct!.linksStyle),
    reference_text_size: cdktf.numberToTerraform(struct!.referenceTextSize),
    body_text: brandingThemeFontsBodyTextToTerraform(struct!.bodyText),
    buttons_text: brandingThemeFontsButtonsTextToTerraform(struct!.buttonsText),
    input_labels: brandingThemeFontsInputLabelsToTerraform(struct!.inputLabels),
    links: brandingThemeFontsLinksToTerraform(struct!.links),
    subtitle: brandingThemeFontsSubtitleToTerraform(struct!.subtitle),
    title: brandingThemeFontsTitleToTerraform(struct!.title),
  }
}


export function brandingThemeFontsToHclTerraform(struct?: BrandingThemeFontsOutputReference | BrandingThemeFonts): any {
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
    links_style: {
      value: cdktf.stringToHclTerraform(struct!.linksStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_text_size: {
      value: cdktf.numberToHclTerraform(struct!.referenceTextSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    body_text: {
      value: brandingThemeFontsBodyTextToHclTerraform(struct!.bodyText),
      isBlock: true,
      type: "list",
      storageClassType: "BrandingThemeFontsBodyTextList",
    },
    buttons_text: {
      value: brandingThemeFontsButtonsTextToHclTerraform(struct!.buttonsText),
      isBlock: true,
      type: "list",
      storageClassType: "BrandingThemeFontsButtonsTextList",
    },
    input_labels: {
      value: brandingThemeFontsInputLabelsToHclTerraform(struct!.inputLabels),
      isBlock: true,
      type: "list",
      storageClassType: "BrandingThemeFontsInputLabelsList",
    },
    links: {
      value: brandingThemeFontsLinksToHclTerraform(struct!.links),
      isBlock: true,
      type: "list",
      storageClassType: "BrandingThemeFontsLinksList",
    },
    subtitle: {
      value: brandingThemeFontsSubtitleToHclTerraform(struct!.subtitle),
      isBlock: true,
      type: "list",
      storageClassType: "BrandingThemeFontsSubtitleList",
    },
    title: {
      value: brandingThemeFontsTitleToHclTerraform(struct!.title),
      isBlock: true,
      type: "list",
      storageClassType: "BrandingThemeFontsTitleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeFontsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeFonts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontUrl = this._fontUrl;
    }
    if (this._linksStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.linksStyle = this._linksStyle;
    }
    if (this._referenceTextSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTextSize = this._referenceTextSize;
    }
    if (this._bodyText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyText = this._bodyText?.internalValue;
    }
    if (this._buttonsText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonsText = this._buttonsText?.internalValue;
    }
    if (this._inputLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLabels = this._inputLabels?.internalValue;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._subtitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeFonts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontUrl = undefined;
      this._linksStyle = undefined;
      this._referenceTextSize = undefined;
      this._bodyText.internalValue = undefined;
      this._buttonsText.internalValue = undefined;
      this._inputLabels.internalValue = undefined;
      this._links.internalValue = undefined;
      this._subtitle.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontUrl = value.fontUrl;
      this._linksStyle = value.linksStyle;
      this._referenceTextSize = value.referenceTextSize;
      this._bodyText.internalValue = value.bodyText;
      this._buttonsText.internalValue = value.buttonsText;
      this._inputLabels.internalValue = value.inputLabels;
      this._links.internalValue = value.links;
      this._subtitle.internalValue = value.subtitle;
      this._title.internalValue = value.title;
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

  // links_style - computed: false, optional: true, required: false
  private _linksStyle?: string; 
  public get linksStyle() {
    return this.getStringAttribute('links_style');
  }
  public set linksStyle(value: string) {
    this._linksStyle = value;
  }
  public resetLinksStyle() {
    this._linksStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksStyleInput() {
    return this._linksStyle;
  }

  // reference_text_size - computed: false, optional: true, required: false
  private _referenceTextSize?: number; 
  public get referenceTextSize() {
    return this.getNumberAttribute('reference_text_size');
  }
  public set referenceTextSize(value: number) {
    this._referenceTextSize = value;
  }
  public resetReferenceTextSize() {
    this._referenceTextSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTextSizeInput() {
    return this._referenceTextSize;
  }

  // body_text - computed: false, optional: false, required: true
  private _bodyText = new BrandingThemeFontsBodyTextOutputReference(this, "body_text");
  public get bodyText() {
    return this._bodyText;
  }
  public putBodyText(value: BrandingThemeFontsBodyText) {
    this._bodyText.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTextInput() {
    return this._bodyText.internalValue;
  }

  // buttons_text - computed: false, optional: false, required: true
  private _buttonsText = new BrandingThemeFontsButtonsTextOutputReference(this, "buttons_text");
  public get buttonsText() {
    return this._buttonsText;
  }
  public putButtonsText(value: BrandingThemeFontsButtonsText) {
    this._buttonsText.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsTextInput() {
    return this._buttonsText.internalValue;
  }

  // input_labels - computed: false, optional: false, required: true
  private _inputLabels = new BrandingThemeFontsInputLabelsOutputReference(this, "input_labels");
  public get inputLabels() {
    return this._inputLabels;
  }
  public putInputLabels(value: BrandingThemeFontsInputLabels) {
    this._inputLabels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLabelsInput() {
    return this._inputLabels.internalValue;
  }

  // links - computed: false, optional: false, required: true
  private _links = new BrandingThemeFontsLinksOutputReference(this, "links");
  public get links() {
    return this._links;
  }
  public putLinks(value: BrandingThemeFontsLinks) {
    this._links.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // subtitle - computed: false, optional: false, required: true
  private _subtitle = new BrandingThemeFontsSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: BrandingThemeFontsSubtitle) {
    this._subtitle.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle.internalValue;
  }

  // title - computed: false, optional: false, required: true
  private _title = new BrandingThemeFontsTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: BrandingThemeFontsTitle) {
    this._title.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }
}
export interface BrandingThemePageBackground {
  /**
  * Background color. Defaults to `#000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#background_color BrandingTheme#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Background image url. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#background_image_url BrandingTheme#background_image_url}
  */
  readonly backgroundImageUrl?: string;
  /**
  * Page layout. Available options: `center`, `left`, `right`. Defaults to `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#page_layout BrandingTheme#page_layout}
  */
  readonly pageLayout?: string;
}

export function brandingThemePageBackgroundToTerraform(struct?: BrandingThemePageBackgroundOutputReference | BrandingThemePageBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    background_image_url: cdktf.stringToTerraform(struct!.backgroundImageUrl),
    page_layout: cdktf.stringToTerraform(struct!.pageLayout),
  }
}


export function brandingThemePageBackgroundToHclTerraform(struct?: BrandingThemePageBackgroundOutputReference | BrandingThemePageBackground): any {
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
    page_layout: {
      value: cdktf.stringToHclTerraform(struct!.pageLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemePageBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemePageBackground | undefined {
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
    if (this._pageLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageLayout = this._pageLayout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemePageBackground | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._backgroundImageUrl = undefined;
      this._pageLayout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._backgroundImageUrl = value.backgroundImageUrl;
      this._pageLayout = value.pageLayout;
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

  // page_layout - computed: false, optional: true, required: false
  private _pageLayout?: string; 
  public get pageLayout() {
    return this.getStringAttribute('page_layout');
  }
  public set pageLayout(value: string) {
    this._pageLayout = value;
  }
  public resetPageLayout() {
    this._pageLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageLayoutInput() {
    return this._pageLayout;
  }
}
export interface BrandingThemeWidget {
  /**
  * Header text alignment. Available options: `center`, `left`, `right`. Defaults to `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#header_text_alignment BrandingTheme#header_text_alignment}
  */
  readonly headerTextAlignment?: string;
  /**
  * Logo height. Value needs to be between `1` and `100`. Defaults to `52.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#logo_height BrandingTheme#logo_height}
  */
  readonly logoHeight?: number;
  /**
  * Logo position. Available options: `center`, `left`, `right`, `none`. Defaults to `center`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#logo_position BrandingTheme#logo_position}
  */
  readonly logoPosition?: string;
  /**
  * Logo url. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#logo_url BrandingTheme#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Social buttons layout. Available options: `bottom`, `top`. Defaults to `bottom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#social_buttons_layout BrandingTheme#social_buttons_layout}
  */
  readonly socialButtonsLayout?: string;
}

export function brandingThemeWidgetToTerraform(struct?: BrandingThemeWidgetOutputReference | BrandingThemeWidget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_text_alignment: cdktf.stringToTerraform(struct!.headerTextAlignment),
    logo_height: cdktf.numberToTerraform(struct!.logoHeight),
    logo_position: cdktf.stringToTerraform(struct!.logoPosition),
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
    social_buttons_layout: cdktf.stringToTerraform(struct!.socialButtonsLayout),
  }
}


export function brandingThemeWidgetToHclTerraform(struct?: BrandingThemeWidgetOutputReference | BrandingThemeWidget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_text_alignment: {
      value: cdktf.stringToHclTerraform(struct!.headerTextAlignment),
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
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    social_buttons_layout: {
      value: cdktf.stringToHclTerraform(struct!.socialButtonsLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeWidgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingThemeWidget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTextAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTextAlignment = this._headerTextAlignment;
    }
    if (this._logoHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoHeight = this._logoHeight;
    }
    if (this._logoPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoPosition = this._logoPosition;
    }
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    if (this._socialButtonsLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.socialButtonsLayout = this._socialButtonsLayout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeWidget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTextAlignment = undefined;
      this._logoHeight = undefined;
      this._logoPosition = undefined;
      this._logoUrl = undefined;
      this._socialButtonsLayout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTextAlignment = value.headerTextAlignment;
      this._logoHeight = value.logoHeight;
      this._logoPosition = value.logoPosition;
      this._logoUrl = value.logoUrl;
      this._socialButtonsLayout = value.socialButtonsLayout;
    }
  }

  // header_text_alignment - computed: false, optional: true, required: false
  private _headerTextAlignment?: string; 
  public get headerTextAlignment() {
    return this.getStringAttribute('header_text_alignment');
  }
  public set headerTextAlignment(value: string) {
    this._headerTextAlignment = value;
  }
  public resetHeaderTextAlignment() {
    this._headerTextAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTextAlignmentInput() {
    return this._headerTextAlignment;
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

  // social_buttons_layout - computed: false, optional: true, required: false
  private _socialButtonsLayout?: string; 
  public get socialButtonsLayout() {
    return this.getStringAttribute('social_buttons_layout');
  }
  public set socialButtonsLayout(value: string) {
    this._socialButtonsLayout = value;
  }
  public resetSocialButtonsLayout() {
    this._socialButtonsLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialButtonsLayoutInput() {
    return this._socialButtonsLayout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme auth0_branding_theme}
*/
export class BrandingTheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_branding_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrandingTheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrandingTheme to import
  * @param importFromId The id of the existing BrandingTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrandingTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_branding_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/branding_theme auth0_branding_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandingThemeConfig
  */
  public constructor(scope: Construct, id: string, config: BrandingThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_branding_theme',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._borders.internalValue = config.borders;
    this._colors.internalValue = config.colors;
    this._fonts.internalValue = config.fonts;
    this._pageBackground.internalValue = config.pageBackground;
    this._widget.internalValue = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // borders - computed: false, optional: false, required: true
  private _borders = new BrandingThemeBordersOutputReference(this, "borders");
  public get borders() {
    return this._borders;
  }
  public putBorders(value: BrandingThemeBorders) {
    this._borders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bordersInput() {
    return this._borders.internalValue;
  }

  // colors - computed: false, optional: false, required: true
  private _colors = new BrandingThemeColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: BrandingThemeColors) {
    this._colors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // fonts - computed: false, optional: false, required: true
  private _fonts = new BrandingThemeFontsOutputReference(this, "fonts");
  public get fonts() {
    return this._fonts;
  }
  public putFonts(value: BrandingThemeFonts) {
    this._fonts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontsInput() {
    return this._fonts.internalValue;
  }

  // page_background - computed: false, optional: false, required: true
  private _pageBackground = new BrandingThemePageBackgroundOutputReference(this, "page_background");
  public get pageBackground() {
    return this._pageBackground;
  }
  public putPageBackground(value: BrandingThemePageBackground) {
    this._pageBackground.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBackgroundInput() {
    return this._pageBackground.internalValue;
  }

  // widget - computed: false, optional: false, required: true
  private _widget = new BrandingThemeWidgetOutputReference(this, "widget");
  public get widget() {
    return this._widget;
  }
  public putWidget(value: BrandingThemeWidget) {
    this._widget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      borders: brandingThemeBordersToTerraform(this._borders.internalValue),
      colors: brandingThemeColorsToTerraform(this._colors.internalValue),
      fonts: brandingThemeFontsToTerraform(this._fonts.internalValue),
      page_background: brandingThemePageBackgroundToTerraform(this._pageBackground.internalValue),
      widget: brandingThemeWidgetToTerraform(this._widget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      borders: {
        value: brandingThemeBordersToHclTerraform(this._borders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingThemeBordersList",
      },
      colors: {
        value: brandingThemeColorsToHclTerraform(this._colors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingThemeColorsList",
      },
      fonts: {
        value: brandingThemeFontsToHclTerraform(this._fonts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingThemeFontsList",
      },
      page_background: {
        value: brandingThemePageBackgroundToHclTerraform(this._pageBackground.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingThemePageBackgroundList",
      },
      widget: {
        value: brandingThemeWidgetToHclTerraform(this._widget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingThemeWidgetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
