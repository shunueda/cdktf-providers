// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalAppearanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Font selections to render text in the portal user interface. Must set use_custom_fonts to true to enable using custom font values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#custom_fonts PortalAppearance#custom_fonts}
  */
  readonly customFonts?: PortalAppearanceCustomFonts;
  /**
  * Groups of variables for configuring visual details of the portal user interface. Set theme_name to 'custom' to use custom values for theme variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#custom_theme PortalAppearance#custom_theme}
  */
  readonly customTheme?: PortalAppearanceCustomTheme;
  /**
  * A collection of binary image data to customize images in the portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#images PortalAppearance#images}
  */
  readonly images?: PortalAppearanceImages;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#portal_id PortalAppearance#portal_id}
  */
  readonly portalId: string;
  /**
  * Values to display for customizable text in the portal user interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#text PortalAppearance#text}
  */
  readonly text?: PortalAppearanceText;
  /**
  * Select a pre-existing default theme or specify 'custom' to use custom_theme variables. must be one of ["mint_rocket", "dark_mode", "custom"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#theme_name PortalAppearance#theme_name}
  */
  readonly themeName?: string;
  /**
  * If true, fonts in custom_fonts will be used over the theme's default fonts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#use_custom_fonts PortalAppearance#use_custom_fonts}
  */
  readonly useCustomFonts?: boolean | cdktf.IResolvable;
}
export interface PortalAppearanceCustomFonts {
  /**
  * The name of the font to render in the browser. must be one of ["Roboto", "Inter", "Open Sans", "Lato", "Slabo 27px", "Slabo 13px", "Oswald", "Source Sans Pro", "Montserrat", "Raleway", "PT Sans", "Lora", "Roboto Mono", "Inconsolata", "Source Code Pro", "PT Mono", "Ubuntu Mono", "IBM Plex Mono"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#base PortalAppearance#base}
  */
  readonly base: string;
  /**
  * The name of the font to render in the browser. must be one of ["Roboto", "Inter", "Open Sans", "Lato", "Slabo 27px", "Slabo 13px", "Oswald", "Source Sans Pro", "Montserrat", "Raleway", "PT Sans", "Lora", "Roboto Mono", "Inconsolata", "Source Code Pro", "PT Mono", "Ubuntu Mono", "IBM Plex Mono"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#code PortalAppearance#code}
  */
  readonly code: string;
  /**
  * The name of the font to render in the browser. must be one of ["Roboto", "Inter", "Open Sans", "Lato", "Slabo 27px", "Slabo 13px", "Oswald", "Source Sans Pro", "Montserrat", "Raleway", "PT Sans", "Lora", "Roboto Mono", "Inconsolata", "Source Code Pro", "PT Mono", "Ubuntu Mono", "IBM Plex Mono"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#headings PortalAppearance#headings}
  */
  readonly headings: string;
}

export function portalAppearanceCustomFontsToTerraform(struct?: PortalAppearanceCustomFonts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.stringToTerraform(struct!.base),
    code: cdktf.stringToTerraform(struct!.code),
    headings: cdktf.stringToTerraform(struct!.headings),
  }
}


export function portalAppearanceCustomFontsToHclTerraform(struct?: PortalAppearanceCustomFonts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.stringToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headings: {
      value: cdktf.stringToHclTerraform(struct!.headings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomFontsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomFonts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headings !== undefined) {
      hasAnyValues = true;
      internalValueResult.headings = this._headings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomFonts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._code = undefined;
      this._headings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._code = value.code;
      this._headings = value.headings;
    }
  }

  // base - computed: true, optional: false, required: true
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // code - computed: true, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headings - computed: true, optional: false, required: true
  private _headings?: string; 
  public get headings() {
    return this.getStringAttribute('headings');
  }
  public set headings(value: string) {
    this._headings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headingsInput() {
    return this._headings;
  }
}
export interface PortalAppearanceCustomThemeColorsButtonPrimaryFill {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsButtonPrimaryFillToTerraform(struct?: PortalAppearanceCustomThemeColorsButtonPrimaryFill): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsButtonPrimaryFillToHclTerraform(struct?: PortalAppearanceCustomThemeColorsButtonPrimaryFill): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsButtonPrimaryFillOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsButtonPrimaryFill | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsButtonPrimaryFill | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsButtonPrimaryText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsButtonPrimaryTextToTerraform(struct?: PortalAppearanceCustomThemeColorsButtonPrimaryText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsButtonPrimaryTextToHclTerraform(struct?: PortalAppearanceCustomThemeColorsButtonPrimaryText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsButtonPrimaryTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsButtonPrimaryText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsButtonPrimaryText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#primary_fill PortalAppearance#primary_fill}
  */
  readonly primaryFill: PortalAppearanceCustomThemeColorsButtonPrimaryFill;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#primary_text PortalAppearance#primary_text}
  */
  readonly primaryText: PortalAppearanceCustomThemeColorsButtonPrimaryText;
}

export function portalAppearanceCustomThemeColorsButtonToTerraform(struct?: PortalAppearanceCustomThemeColorsButton): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_fill: portalAppearanceCustomThemeColorsButtonPrimaryFillToTerraform(struct!.primaryFill),
    primary_text: portalAppearanceCustomThemeColorsButtonPrimaryTextToTerraform(struct!.primaryText),
  }
}


export function portalAppearanceCustomThemeColorsButtonToHclTerraform(struct?: PortalAppearanceCustomThemeColorsButton): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_fill: {
      value: portalAppearanceCustomThemeColorsButtonPrimaryFillToHclTerraform(struct!.primaryFill),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsButtonPrimaryFill",
    },
    primary_text: {
      value: portalAppearanceCustomThemeColorsButtonPrimaryTextToHclTerraform(struct!.primaryText),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsButtonPrimaryText",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsButtonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsButton | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryFill?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryFill = this._primaryFill?.internalValue;
    }
    if (this._primaryText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryText = this._primaryText?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsButton | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryFill.internalValue = undefined;
      this._primaryText.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryFill.internalValue = value.primaryFill;
      this._primaryText.internalValue = value.primaryText;
    }
  }

  // primary_fill - computed: true, optional: false, required: true
  private _primaryFill = new PortalAppearanceCustomThemeColorsButtonPrimaryFillOutputReference(this, "primary_fill");
  public get primaryFill() {
    return this._primaryFill;
  }
  public putPrimaryFill(value: PortalAppearanceCustomThemeColorsButtonPrimaryFill) {
    this._primaryFill.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryFillInput() {
    return this._primaryFill.internalValue;
  }

  // primary_text - computed: true, optional: false, required: true
  private _primaryText = new PortalAppearanceCustomThemeColorsButtonPrimaryTextOutputReference(this, "primary_text");
  public get primaryText() {
    return this._primaryText;
  }
  public putPrimaryText(value: PortalAppearanceCustomThemeColorsButtonPrimaryText) {
    this._primaryText.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTextInput() {
    return this._primaryText.internalValue;
  }
}
export interface PortalAppearanceCustomThemeColorsSectionAccent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsSectionAccentToTerraform(struct?: PortalAppearanceCustomThemeColorsSectionAccent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsSectionAccentToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSectionAccent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionAccentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSectionAccent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSectionAccent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsSectionBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsSectionBodyToTerraform(struct?: PortalAppearanceCustomThemeColorsSectionBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsSectionBodyToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSectionBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSectionBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSectionBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsSectionFooter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsSectionFooterToTerraform(struct?: PortalAppearanceCustomThemeColorsSectionFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsSectionFooterToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSectionFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionFooterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSectionFooter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSectionFooter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsSectionHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsSectionHeaderToTerraform(struct?: PortalAppearanceCustomThemeColorsSectionHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsSectionHeaderToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSectionHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSectionHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSectionHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsSectionHero {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsSectionHeroToTerraform(struct?: PortalAppearanceCustomThemeColorsSectionHero): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsSectionHeroToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSectionHero): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionHeroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSectionHero | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSectionHero | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsSectionStroke {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsSectionStrokeToTerraform(struct?: PortalAppearanceCustomThemeColorsSectionStroke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsSectionStrokeToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSectionStroke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionStrokeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSectionStroke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSectionStroke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsSectionTertiary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsSectionTertiaryToTerraform(struct?: PortalAppearanceCustomThemeColorsSectionTertiary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsSectionTertiaryToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSectionTertiary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionTertiaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSectionTertiary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSectionTertiary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#accent PortalAppearance#accent}
  */
  readonly accent: PortalAppearanceCustomThemeColorsSectionAccent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#body PortalAppearance#body}
  */
  readonly body: PortalAppearanceCustomThemeColorsSectionBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#footer PortalAppearance#footer}
  */
  readonly footer: PortalAppearanceCustomThemeColorsSectionFooter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#header PortalAppearance#header}
  */
  readonly header: PortalAppearanceCustomThemeColorsSectionHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#hero PortalAppearance#hero}
  */
  readonly hero: PortalAppearanceCustomThemeColorsSectionHero;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#stroke PortalAppearance#stroke}
  */
  readonly stroke: PortalAppearanceCustomThemeColorsSectionStroke;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#tertiary PortalAppearance#tertiary}
  */
  readonly tertiary: PortalAppearanceCustomThemeColorsSectionTertiary;
}

export function portalAppearanceCustomThemeColorsSectionToTerraform(struct?: PortalAppearanceCustomThemeColorsSection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accent: portalAppearanceCustomThemeColorsSectionAccentToTerraform(struct!.accent),
    body: portalAppearanceCustomThemeColorsSectionBodyToTerraform(struct!.body),
    footer: portalAppearanceCustomThemeColorsSectionFooterToTerraform(struct!.footer),
    header: portalAppearanceCustomThemeColorsSectionHeaderToTerraform(struct!.header),
    hero: portalAppearanceCustomThemeColorsSectionHeroToTerraform(struct!.hero),
    stroke: portalAppearanceCustomThemeColorsSectionStrokeToTerraform(struct!.stroke),
    tertiary: portalAppearanceCustomThemeColorsSectionTertiaryToTerraform(struct!.tertiary),
  }
}


export function portalAppearanceCustomThemeColorsSectionToHclTerraform(struct?: PortalAppearanceCustomThemeColorsSection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accent: {
      value: portalAppearanceCustomThemeColorsSectionAccentToHclTerraform(struct!.accent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSectionAccent",
    },
    body: {
      value: portalAppearanceCustomThemeColorsSectionBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSectionBody",
    },
    footer: {
      value: portalAppearanceCustomThemeColorsSectionFooterToHclTerraform(struct!.footer),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSectionFooter",
    },
    header: {
      value: portalAppearanceCustomThemeColorsSectionHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSectionHeader",
    },
    hero: {
      value: portalAppearanceCustomThemeColorsSectionHeroToHclTerraform(struct!.hero),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSectionHero",
    },
    stroke: {
      value: portalAppearanceCustomThemeColorsSectionStrokeToHclTerraform(struct!.stroke),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSectionStroke",
    },
    tertiary: {
      value: portalAppearanceCustomThemeColorsSectionTertiaryToHclTerraform(struct!.tertiary),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSectionTertiary",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsSectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsSection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accent = this._accent?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._footer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footer = this._footer?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._hero?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hero = this._hero?.internalValue;
    }
    if (this._stroke?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stroke = this._stroke?.internalValue;
    }
    if (this._tertiary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tertiary = this._tertiary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsSection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accent.internalValue = undefined;
      this._body.internalValue = undefined;
      this._footer.internalValue = undefined;
      this._header.internalValue = undefined;
      this._hero.internalValue = undefined;
      this._stroke.internalValue = undefined;
      this._tertiary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accent.internalValue = value.accent;
      this._body.internalValue = value.body;
      this._footer.internalValue = value.footer;
      this._header.internalValue = value.header;
      this._hero.internalValue = value.hero;
      this._stroke.internalValue = value.stroke;
      this._tertiary.internalValue = value.tertiary;
    }
  }

  // accent - computed: true, optional: false, required: true
  private _accent = new PortalAppearanceCustomThemeColorsSectionAccentOutputReference(this, "accent");
  public get accent() {
    return this._accent;
  }
  public putAccent(value: PortalAppearanceCustomThemeColorsSectionAccent) {
    this._accent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accentInput() {
    return this._accent.internalValue;
  }

  // body - computed: true, optional: false, required: true
  private _body = new PortalAppearanceCustomThemeColorsSectionBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: PortalAppearanceCustomThemeColorsSectionBody) {
    this._body.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // footer - computed: true, optional: false, required: true
  private _footer = new PortalAppearanceCustomThemeColorsSectionFooterOutputReference(this, "footer");
  public get footer() {
    return this._footer;
  }
  public putFooter(value: PortalAppearanceCustomThemeColorsSectionFooter) {
    this._footer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer.internalValue;
  }

  // header - computed: true, optional: false, required: true
  private _header = new PortalAppearanceCustomThemeColorsSectionHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: PortalAppearanceCustomThemeColorsSectionHeader) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // hero - computed: true, optional: false, required: true
  private _hero = new PortalAppearanceCustomThemeColorsSectionHeroOutputReference(this, "hero");
  public get hero() {
    return this._hero;
  }
  public putHero(value: PortalAppearanceCustomThemeColorsSectionHero) {
    this._hero.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heroInput() {
    return this._hero.internalValue;
  }

  // stroke - computed: true, optional: false, required: true
  private _stroke = new PortalAppearanceCustomThemeColorsSectionStrokeOutputReference(this, "stroke");
  public get stroke() {
    return this._stroke;
  }
  public putStroke(value: PortalAppearanceCustomThemeColorsSectionStroke) {
    this._stroke.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strokeInput() {
    return this._stroke.internalValue;
  }

  // tertiary - computed: true, optional: false, required: true
  private _tertiary = new PortalAppearanceCustomThemeColorsSectionTertiaryOutputReference(this, "tertiary");
  public get tertiary() {
    return this._tertiary;
  }
  public putTertiary(value: PortalAppearanceCustomThemeColorsSectionTertiary) {
    this._tertiary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryInput() {
    return this._tertiary.internalValue;
  }
}
export interface PortalAppearanceCustomThemeColorsTextAccent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextAccentToTerraform(struct?: PortalAppearanceCustomThemeColorsTextAccent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextAccentToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextAccent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextAccentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextAccent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextAccent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsTextFooter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextFooterToTerraform(struct?: PortalAppearanceCustomThemeColorsTextFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextFooterToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextFooterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextFooter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextFooter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsTextHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextHeaderToTerraform(struct?: PortalAppearanceCustomThemeColorsTextHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextHeaderToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsTextHeadings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextHeadingsToTerraform(struct?: PortalAppearanceCustomThemeColorsTextHeadings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextHeadingsToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextHeadings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextHeadingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextHeadings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextHeadings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsTextHero {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextHeroToTerraform(struct?: PortalAppearanceCustomThemeColorsTextHero): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextHeroToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextHero): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextHeroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextHero | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextHero | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsTextLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextLinkToTerraform(struct?: PortalAppearanceCustomThemeColorsTextLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextLinkToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsTextPrimary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextPrimaryToTerraform(struct?: PortalAppearanceCustomThemeColorsTextPrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextPrimaryToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextPrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextPrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextPrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextPrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsTextSecondary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#description PortalAppearance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#value PortalAppearance#value}
  */
  readonly value: string;
}

export function portalAppearanceCustomThemeColorsTextSecondaryToTerraform(struct?: PortalAppearanceCustomThemeColorsTextSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function portalAppearanceCustomThemeColorsTextSecondaryToHclTerraform(struct?: PortalAppearanceCustomThemeColorsTextSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsTextSecondary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsTextSecondary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PortalAppearanceCustomThemeColorsText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#accent PortalAppearance#accent}
  */
  readonly accent: PortalAppearanceCustomThemeColorsTextAccent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#footer PortalAppearance#footer}
  */
  readonly footer: PortalAppearanceCustomThemeColorsTextFooter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#header PortalAppearance#header}
  */
  readonly header: PortalAppearanceCustomThemeColorsTextHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#headings PortalAppearance#headings}
  */
  readonly headings: PortalAppearanceCustomThemeColorsTextHeadings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#hero PortalAppearance#hero}
  */
  readonly hero: PortalAppearanceCustomThemeColorsTextHero;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#link PortalAppearance#link}
  */
  readonly link: PortalAppearanceCustomThemeColorsTextLink;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#primary PortalAppearance#primary}
  */
  readonly primary: PortalAppearanceCustomThemeColorsTextPrimary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#secondary PortalAppearance#secondary}
  */
  readonly secondary: PortalAppearanceCustomThemeColorsTextSecondary;
}

export function portalAppearanceCustomThemeColorsTextToTerraform(struct?: PortalAppearanceCustomThemeColorsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accent: portalAppearanceCustomThemeColorsTextAccentToTerraform(struct!.accent),
    footer: portalAppearanceCustomThemeColorsTextFooterToTerraform(struct!.footer),
    header: portalAppearanceCustomThemeColorsTextHeaderToTerraform(struct!.header),
    headings: portalAppearanceCustomThemeColorsTextHeadingsToTerraform(struct!.headings),
    hero: portalAppearanceCustomThemeColorsTextHeroToTerraform(struct!.hero),
    link: portalAppearanceCustomThemeColorsTextLinkToTerraform(struct!.link),
    primary: portalAppearanceCustomThemeColorsTextPrimaryToTerraform(struct!.primary),
    secondary: portalAppearanceCustomThemeColorsTextSecondaryToTerraform(struct!.secondary),
  }
}


export function portalAppearanceCustomThemeColorsTextToHclTerraform(struct?: PortalAppearanceCustomThemeColorsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accent: {
      value: portalAppearanceCustomThemeColorsTextAccentToHclTerraform(struct!.accent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextAccent",
    },
    footer: {
      value: portalAppearanceCustomThemeColorsTextFooterToHclTerraform(struct!.footer),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextFooter",
    },
    header: {
      value: portalAppearanceCustomThemeColorsTextHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextHeader",
    },
    headings: {
      value: portalAppearanceCustomThemeColorsTextHeadingsToHclTerraform(struct!.headings),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextHeadings",
    },
    hero: {
      value: portalAppearanceCustomThemeColorsTextHeroToHclTerraform(struct!.hero),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextHero",
    },
    link: {
      value: portalAppearanceCustomThemeColorsTextLinkToHclTerraform(struct!.link),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextLink",
    },
    primary: {
      value: portalAppearanceCustomThemeColorsTextPrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextPrimary",
    },
    secondary: {
      value: portalAppearanceCustomThemeColorsTextSecondaryToHclTerraform(struct!.secondary),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsTextSecondary",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColorsText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accent = this._accent?.internalValue;
    }
    if (this._footer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footer = this._footer?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._headings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headings = this._headings?.internalValue;
    }
    if (this._hero?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hero = this._hero?.internalValue;
    }
    if (this._link?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link?.internalValue;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColorsText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accent.internalValue = undefined;
      this._footer.internalValue = undefined;
      this._header.internalValue = undefined;
      this._headings.internalValue = undefined;
      this._hero.internalValue = undefined;
      this._link.internalValue = undefined;
      this._primary.internalValue = undefined;
      this._secondary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accent.internalValue = value.accent;
      this._footer.internalValue = value.footer;
      this._header.internalValue = value.header;
      this._headings.internalValue = value.headings;
      this._hero.internalValue = value.hero;
      this._link.internalValue = value.link;
      this._primary.internalValue = value.primary;
      this._secondary.internalValue = value.secondary;
    }
  }

  // accent - computed: true, optional: false, required: true
  private _accent = new PortalAppearanceCustomThemeColorsTextAccentOutputReference(this, "accent");
  public get accent() {
    return this._accent;
  }
  public putAccent(value: PortalAppearanceCustomThemeColorsTextAccent) {
    this._accent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accentInput() {
    return this._accent.internalValue;
  }

  // footer - computed: true, optional: false, required: true
  private _footer = new PortalAppearanceCustomThemeColorsTextFooterOutputReference(this, "footer");
  public get footer() {
    return this._footer;
  }
  public putFooter(value: PortalAppearanceCustomThemeColorsTextFooter) {
    this._footer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer.internalValue;
  }

  // header - computed: true, optional: false, required: true
  private _header = new PortalAppearanceCustomThemeColorsTextHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: PortalAppearanceCustomThemeColorsTextHeader) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // headings - computed: true, optional: false, required: true
  private _headings = new PortalAppearanceCustomThemeColorsTextHeadingsOutputReference(this, "headings");
  public get headings() {
    return this._headings;
  }
  public putHeadings(value: PortalAppearanceCustomThemeColorsTextHeadings) {
    this._headings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headingsInput() {
    return this._headings.internalValue;
  }

  // hero - computed: true, optional: false, required: true
  private _hero = new PortalAppearanceCustomThemeColorsTextHeroOutputReference(this, "hero");
  public get hero() {
    return this._hero;
  }
  public putHero(value: PortalAppearanceCustomThemeColorsTextHero) {
    this._hero.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heroInput() {
    return this._hero.internalValue;
  }

  // link - computed: true, optional: false, required: true
  private _link = new PortalAppearanceCustomThemeColorsTextLinkOutputReference(this, "link");
  public get link() {
    return this._link;
  }
  public putLink(value: PortalAppearanceCustomThemeColorsTextLink) {
    this._link.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // primary - computed: true, optional: false, required: true
  private _primary = new PortalAppearanceCustomThemeColorsTextPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: PortalAppearanceCustomThemeColorsTextPrimary) {
    this._primary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // secondary - computed: true, optional: false, required: true
  private _secondary = new PortalAppearanceCustomThemeColorsTextSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: PortalAppearanceCustomThemeColorsTextSecondary) {
    this._secondary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }
}
export interface PortalAppearanceCustomThemeColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#button PortalAppearance#button}
  */
  readonly button: PortalAppearanceCustomThemeColorsButton;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#section PortalAppearance#section}
  */
  readonly section: PortalAppearanceCustomThemeColorsSection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#text PortalAppearance#text}
  */
  readonly text: PortalAppearanceCustomThemeColorsText;
}

export function portalAppearanceCustomThemeColorsToTerraform(struct?: PortalAppearanceCustomThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button: portalAppearanceCustomThemeColorsButtonToTerraform(struct!.button),
    section: portalAppearanceCustomThemeColorsSectionToTerraform(struct!.section),
    text: portalAppearanceCustomThemeColorsTextToTerraform(struct!.text),
  }
}


export function portalAppearanceCustomThemeColorsToHclTerraform(struct?: PortalAppearanceCustomThemeColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button: {
      value: portalAppearanceCustomThemeColorsButtonToHclTerraform(struct!.button),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsButton",
    },
    section: {
      value: portalAppearanceCustomThemeColorsSectionToHclTerraform(struct!.section),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsSection",
    },
    text: {
      value: portalAppearanceCustomThemeColorsTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColorsText",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomThemeColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    if (this._section?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomThemeColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._button.internalValue = undefined;
      this._section.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._button.internalValue = value.button;
      this._section.internalValue = value.section;
      this._text.internalValue = value.text;
    }
  }

  // button - computed: true, optional: false, required: true
  private _button = new PortalAppearanceCustomThemeColorsButtonOutputReference(this, "button");
  public get button() {
    return this._button;
  }
  public putButton(value: PortalAppearanceCustomThemeColorsButton) {
    this._button.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }

  // section - computed: true, optional: false, required: true
  private _section = new PortalAppearanceCustomThemeColorsSectionOutputReference(this, "section");
  public get section() {
    return this._section;
  }
  public putSection(value: PortalAppearanceCustomThemeColorsSection) {
    this._section.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section.internalValue;
  }

  // text - computed: true, optional: false, required: true
  private _text = new PortalAppearanceCustomThemeColorsTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: PortalAppearanceCustomThemeColorsText) {
    this._text.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}
export interface PortalAppearanceCustomTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#colors PortalAppearance#colors}
  */
  readonly colors: PortalAppearanceCustomThemeColors;
}

export function portalAppearanceCustomThemeToTerraform(struct?: PortalAppearanceCustomTheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: portalAppearanceCustomThemeColorsToTerraform(struct!.colors),
  }
}


export function portalAppearanceCustomThemeToHclTerraform(struct?: PortalAppearanceCustomTheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: portalAppearanceCustomThemeColorsToHclTerraform(struct!.colors),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceCustomThemeColors",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceCustomThemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceCustomTheme | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceCustomTheme | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._colors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._colors.internalValue = value.colors;
    }
  }

  // colors - computed: true, optional: false, required: true
  private _colors = new PortalAppearanceCustomThemeColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: PortalAppearanceCustomThemeColors) {
    this._colors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }
}
export interface PortalAppearanceImagesCatalogCover {
  /**
  * must be a data URL with base64 image data, e.g., data:image/jpeg;base64,<BASE64_IMAGE_DATA>. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#data PortalAppearance#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#filename PortalAppearance#filename}
  */
  readonly filename?: string;
}

export function portalAppearanceImagesCatalogCoverToTerraform(struct?: PortalAppearanceImagesCatalogCover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function portalAppearanceImagesCatalogCoverToHclTerraform(struct?: PortalAppearanceImagesCatalogCover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceImagesCatalogCoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceImagesCatalogCover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceImagesCatalogCover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._filename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._filename = value.filename;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // filename - computed: true, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface PortalAppearanceImagesFavicon {
  /**
  * must be a data URL with base64 image data, e.g., data:image/jpeg;base64,<BASE64_IMAGE_DATA>. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#data PortalAppearance#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#filename PortalAppearance#filename}
  */
  readonly filename?: string;
}

export function portalAppearanceImagesFaviconToTerraform(struct?: PortalAppearanceImagesFavicon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function portalAppearanceImagesFaviconToHclTerraform(struct?: PortalAppearanceImagesFavicon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceImagesFaviconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceImagesFavicon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceImagesFavicon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._filename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._filename = value.filename;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // filename - computed: true, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface PortalAppearanceImagesLogo {
  /**
  * must be a data URL with base64 image data, e.g., data:image/jpeg;base64,<BASE64_IMAGE_DATA>. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#data PortalAppearance#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#filename PortalAppearance#filename}
  */
  readonly filename?: string;
}

export function portalAppearanceImagesLogoToTerraform(struct?: PortalAppearanceImagesLogo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function portalAppearanceImagesLogoToHclTerraform(struct?: PortalAppearanceImagesLogo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceImagesLogoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceImagesLogo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceImagesLogo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._filename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._filename = value.filename;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // filename - computed: true, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface PortalAppearanceImages {
  /**
  * The image data to upload, along with an optional filename. Images must be a data URL with binary image data in base 64 format. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#catalog_cover PortalAppearance#catalog_cover}
  */
  readonly catalogCover?: PortalAppearanceImagesCatalogCover;
  /**
  * The image data to upload, along with an optional filename. Images must be a data URL with binary image data in base 64 format. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#favicon PortalAppearance#favicon}
  */
  readonly favicon?: PortalAppearanceImagesFavicon;
  /**
  * The image data to upload, along with an optional filename. Images must be a data URL with binary image data in base 64 format. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#logo PortalAppearance#logo}
  */
  readonly logo?: PortalAppearanceImagesLogo;
}

export function portalAppearanceImagesToTerraform(struct?: PortalAppearanceImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_cover: portalAppearanceImagesCatalogCoverToTerraform(struct!.catalogCover),
    favicon: portalAppearanceImagesFaviconToTerraform(struct!.favicon),
    logo: portalAppearanceImagesLogoToTerraform(struct!.logo),
  }
}


export function portalAppearanceImagesToHclTerraform(struct?: PortalAppearanceImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_cover: {
      value: portalAppearanceImagesCatalogCoverToHclTerraform(struct!.catalogCover),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceImagesCatalogCover",
    },
    favicon: {
      value: portalAppearanceImagesFaviconToHclTerraform(struct!.favicon),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceImagesFavicon",
    },
    logo: {
      value: portalAppearanceImagesLogoToHclTerraform(struct!.logo),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceImagesLogo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogCover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogCover = this._catalogCover?.internalValue;
    }
    if (this._favicon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.favicon = this._favicon?.internalValue;
    }
    if (this._logo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogCover.internalValue = undefined;
      this._favicon.internalValue = undefined;
      this._logo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogCover.internalValue = value.catalogCover;
      this._favicon.internalValue = value.favicon;
      this._logo.internalValue = value.logo;
    }
  }

  // catalog_cover - computed: true, optional: true, required: false
  private _catalogCover = new PortalAppearanceImagesCatalogCoverOutputReference(this, "catalog_cover");
  public get catalogCover() {
    return this._catalogCover;
  }
  public putCatalogCover(value: PortalAppearanceImagesCatalogCover) {
    this._catalogCover.internalValue = value;
  }
  public resetCatalogCover() {
    this._catalogCover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogCoverInput() {
    return this._catalogCover.internalValue;
  }

  // favicon - computed: true, optional: true, required: false
  private _favicon = new PortalAppearanceImagesFaviconOutputReference(this, "favicon");
  public get favicon() {
    return this._favicon;
  }
  public putFavicon(value: PortalAppearanceImagesFavicon) {
    this._favicon.internalValue = value;
  }
  public resetFavicon() {
    this._favicon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconInput() {
    return this._favicon.internalValue;
  }

  // logo - computed: true, optional: true, required: false
  private _logo = new PortalAppearanceImagesLogoOutputReference(this, "logo");
  public get logo() {
    return this._logo;
  }
  public putLogo(value: PortalAppearanceImagesLogo) {
    this._logo.internalValue = value;
  }
  public resetLogo() {
    this._logo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo.internalValue;
  }
}
export interface PortalAppearanceTextCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#primary_header PortalAppearance#primary_header}
  */
  readonly primaryHeader: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#welcome_message PortalAppearance#welcome_message}
  */
  readonly welcomeMessage: string;
}

export function portalAppearanceTextCatalogToTerraform(struct?: PortalAppearanceTextCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_header: cdktf.stringToTerraform(struct!.primaryHeader),
    welcome_message: cdktf.stringToTerraform(struct!.welcomeMessage),
  }
}


export function portalAppearanceTextCatalogToHclTerraform(struct?: PortalAppearanceTextCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_header: {
      value: cdktf.stringToHclTerraform(struct!.primaryHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    welcome_message: {
      value: cdktf.stringToHclTerraform(struct!.welcomeMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceTextCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceTextCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryHeader = this._primaryHeader;
    }
    if (this._welcomeMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.welcomeMessage = this._welcomeMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceTextCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryHeader = undefined;
      this._welcomeMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryHeader = value.primaryHeader;
      this._welcomeMessage = value.welcomeMessage;
    }
  }

  // primary_header - computed: true, optional: false, required: true
  private _primaryHeader?: string; 
  public get primaryHeader() {
    return this.getStringAttribute('primary_header');
  }
  public set primaryHeader(value: string) {
    this._primaryHeader = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryHeaderInput() {
    return this._primaryHeader;
  }

  // welcome_message - computed: true, optional: false, required: true
  private _welcomeMessage?: string; 
  public get welcomeMessage() {
    return this.getStringAttribute('welcome_message');
  }
  public set welcomeMessage(value: string) {
    this._welcomeMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeMessageInput() {
    return this._welcomeMessage;
  }
}
export interface PortalAppearanceText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#catalog PortalAppearance#catalog}
  */
  readonly catalog: PortalAppearanceTextCatalog;
}

export function portalAppearanceTextToTerraform(struct?: PortalAppearanceText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: portalAppearanceTextCatalogToTerraform(struct!.catalog),
  }
}


export function portalAppearanceTextToHclTerraform(struct?: PortalAppearanceText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: portalAppearanceTextCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalAppearanceTextCatalog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalAppearanceTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAppearanceText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAppearanceText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
    }
  }

  // catalog - computed: true, optional: false, required: true
  private _catalog = new PortalAppearanceTextCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: PortalAppearanceTextCatalog) {
    this._catalog.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance konnect_portal_appearance}
*/
export class PortalAppearance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_appearance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalAppearance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalAppearance to import
  * @param importFromId The id of the existing PortalAppearance that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalAppearance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_appearance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_appearance konnect_portal_appearance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalAppearanceConfig
  */
  public constructor(scope: Construct, id: string, config: PortalAppearanceConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_appearance',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customFonts.internalValue = config.customFonts;
    this._customTheme.internalValue = config.customTheme;
    this._images.internalValue = config.images;
    this._portalId = config.portalId;
    this._text.internalValue = config.text;
    this._themeName = config.themeName;
    this._useCustomFonts = config.useCustomFonts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_fonts - computed: true, optional: true, required: false
  private _customFonts = new PortalAppearanceCustomFontsOutputReference(this, "custom_fonts");
  public get customFonts() {
    return this._customFonts;
  }
  public putCustomFonts(value: PortalAppearanceCustomFonts) {
    this._customFonts.internalValue = value;
  }
  public resetCustomFonts() {
    this._customFonts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFontsInput() {
    return this._customFonts.internalValue;
  }

  // custom_theme - computed: true, optional: true, required: false
  private _customTheme = new PortalAppearanceCustomThemeOutputReference(this, "custom_theme");
  public get customTheme() {
    return this._customTheme;
  }
  public putCustomTheme(value: PortalAppearanceCustomTheme) {
    this._customTheme.internalValue = value;
  }
  public resetCustomTheme() {
    this._customTheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customThemeInput() {
    return this._customTheme.internalValue;
  }

  // images - computed: true, optional: true, required: false
  private _images = new PortalAppearanceImagesOutputReference(this, "images");
  public get images() {
    return this._images;
  }
  public putImages(value: PortalAppearanceImages) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // text - computed: true, optional: true, required: false
  private _text = new PortalAppearanceTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: PortalAppearanceText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }

  // theme_name - computed: true, optional: true, required: false
  private _themeName?: string; 
  public get themeName() {
    return this.getStringAttribute('theme_name');
  }
  public set themeName(value: string) {
    this._themeName = value;
  }
  public resetThemeName() {
    this._themeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeNameInput() {
    return this._themeName;
  }

  // use_custom_fonts - computed: true, optional: true, required: false
  private _useCustomFonts?: boolean | cdktf.IResolvable; 
  public get useCustomFonts() {
    return this.getBooleanAttribute('use_custom_fonts');
  }
  public set useCustomFonts(value: boolean | cdktf.IResolvable) {
    this._useCustomFonts = value;
  }
  public resetUseCustomFonts() {
    this._useCustomFonts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomFontsInput() {
    return this._useCustomFonts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_fonts: portalAppearanceCustomFontsToTerraform(this._customFonts.internalValue),
      custom_theme: portalAppearanceCustomThemeToTerraform(this._customTheme.internalValue),
      images: portalAppearanceImagesToTerraform(this._images.internalValue),
      portal_id: cdktf.stringToTerraform(this._portalId),
      text: portalAppearanceTextToTerraform(this._text.internalValue),
      theme_name: cdktf.stringToTerraform(this._themeName),
      use_custom_fonts: cdktf.booleanToTerraform(this._useCustomFonts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_fonts: {
        value: portalAppearanceCustomFontsToHclTerraform(this._customFonts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalAppearanceCustomFonts",
      },
      custom_theme: {
        value: portalAppearanceCustomThemeToHclTerraform(this._customTheme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalAppearanceCustomTheme",
      },
      images: {
        value: portalAppearanceImagesToHclTerraform(this._images.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalAppearanceImages",
      },
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: portalAppearanceTextToHclTerraform(this._text.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalAppearanceText",
      },
      theme_name: {
        value: cdktf.stringToHclTerraform(this._themeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_custom_fonts: {
        value: cdktf.booleanToHclTerraform(this._useCustomFonts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
