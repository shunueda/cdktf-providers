// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandingThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The background color for the theme. It must be a valid hexadecimal color code.  Conflicts with `background_image`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#background_color BrandingTheme#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * A single object that specifies the HREF and ID for the background image.  Conflicts with `background_color`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#background_image BrandingTheme#background_image}
  */
  readonly backgroundImage?: BrandingThemeBackgroundImage;
  /**
  * The body text color for the theme. It must be a valid hexadecimal color code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#body_text_color BrandingTheme#body_text_color}
  */
  readonly bodyTextColor: string;
  /**
  * The button color for the theme. It must be a valid hexadecimal color code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#button_color BrandingTheme#button_color}
  */
  readonly buttonColor: string;
  /**
  * The button text color for the branding theme. It must be a valid hexadecimal color code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#button_text_color BrandingTheme#button_text_color}
  */
  readonly buttonTextColor: string;
  /**
  * The card color for the branding theme. It must be a valid hexadecimal color code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#card_color BrandingTheme#card_color}
  */
  readonly cardColor: string;
  /**
  * The ID of the environment to set branding settings for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#environment_id BrandingTheme#environment_id}
  */
  readonly environmentId: string;
  /**
  * The text to be displayed in the footer of the branding theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#footer_text BrandingTheme#footer_text}
  */
  readonly footerText?: string;
  /**
  * The heading text color for the branding theme. It must be a valid hexadecimal color code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#heading_text_color BrandingTheme#heading_text_color}
  */
  readonly headingTextColor: string;
  /**
  * The hyperlink text color for the branding theme. It must be a valid hexadecimal color code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#link_text_color BrandingTheme#link_text_color}
  */
  readonly linkTextColor: string;
  /**
  * A single object that specifies the HREF and ID for the company logo, for this branding template.  If not set, the environment's default logo (set with the `pingone_branding_settings` resource) will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#logo BrandingTheme#logo}
  */
  readonly logo?: BrandingThemeLogo;
  /**
  * A string that specifies the unique name of the branding theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#name BrandingTheme#name}
  */
  readonly name: string;
  /**
  * The template name of the branding theme associated with the environment.  Options are `default`, `focus`, `mural`, `slate`, `split`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#template BrandingTheme#template}
  */
  readonly template: string;
  /**
  * A boolean to specify that the background should be set to the theme template's default.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#use_default_background BrandingTheme#use_default_background}
  */
  readonly useDefaultBackground?: boolean | cdktf.IResolvable;
}
export interface BrandingThemeBackgroundImage {
  /**
  * The URL or fully qualified path to the background image file used for branding.  This can be retrieved from the `uploaded_image.href` parameter of the `pingone_image` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#href BrandingTheme#href}
  */
  readonly href: string;
  /**
  * The ID of the background image.  This can be retrieved from the `id` parameter of the `pingone_image` resource.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#id BrandingTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function brandingThemeBackgroundImageToTerraform(struct?: BrandingThemeBackgroundImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function brandingThemeBackgroundImageToHclTerraform(struct?: BrandingThemeBackgroundImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeBackgroundImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrandingThemeBackgroundImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeBackgroundImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._id = value.id;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface BrandingThemeLogo {
  /**
  * The URL or fully qualified path to the logo file used for branding.  This can be retrieved from the `uploaded_image.href` parameter of the `pingone_image` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#href BrandingTheme#href}
  */
  readonly href: string;
  /**
  * The ID of the logo image.  This can be retrieved from the `id` parameter of the `pingone_image` resource.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#id BrandingTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function brandingThemeLogoToTerraform(struct?: BrandingThemeLogo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function brandingThemeLogoToHclTerraform(struct?: BrandingThemeLogo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingThemeLogoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BrandingThemeLogo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingThemeLogo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._id = value.id;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme pingone_branding_theme}
*/
export class BrandingTheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_branding_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrandingTheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrandingTheme to import
  * @param importFromId The id of the existing BrandingTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrandingTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_branding_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme pingone_branding_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandingThemeConfig
  */
  public constructor(scope: Construct, id: string, config: BrandingThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_branding_theme',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backgroundColor = config.backgroundColor;
    this._backgroundImage.internalValue = config.backgroundImage;
    this._bodyTextColor = config.bodyTextColor;
    this._buttonColor = config.buttonColor;
    this._buttonTextColor = config.buttonTextColor;
    this._cardColor = config.cardColor;
    this._environmentId = config.environmentId;
    this._footerText = config.footerText;
    this._headingTextColor = config.headingTextColor;
    this._linkTextColor = config.linkTextColor;
    this._logo.internalValue = config.logo;
    this._name = config.name;
    this._template = config.template;
    this._useDefaultBackground = config.useDefaultBackground;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // background_image - computed: false, optional: true, required: false
  private _backgroundImage = new BrandingThemeBackgroundImageOutputReference(this, "background_image");
  public get backgroundImage() {
    return this._backgroundImage;
  }
  public putBackgroundImage(value: BrandingThemeBackgroundImage) {
    this._backgroundImage.internalValue = value;
  }
  public resetBackgroundImage() {
    this._backgroundImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundImageInput() {
    return this._backgroundImage.internalValue;
  }

  // body_text_color - computed: false, optional: false, required: true
  private _bodyTextColor?: string; 
  public get bodyTextColor() {
    return this.getStringAttribute('body_text_color');
  }
  public set bodyTextColor(value: string) {
    this._bodyTextColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTextColorInput() {
    return this._bodyTextColor;
  }

  // button_color - computed: false, optional: false, required: true
  private _buttonColor?: string; 
  public get buttonColor() {
    return this.getStringAttribute('button_color');
  }
  public set buttonColor(value: string) {
    this._buttonColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonColorInput() {
    return this._buttonColor;
  }

  // button_text_color - computed: false, optional: false, required: true
  private _buttonTextColor?: string; 
  public get buttonTextColor() {
    return this.getStringAttribute('button_text_color');
  }
  public set buttonTextColor(value: string) {
    this._buttonTextColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextColorInput() {
    return this._buttonTextColor;
  }

  // card_color - computed: false, optional: false, required: true
  private _cardColor?: string; 
  public get cardColor() {
    return this.getStringAttribute('card_color');
  }
  public set cardColor(value: string) {
    this._cardColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cardColorInput() {
    return this._cardColor;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // footer_text - computed: false, optional: true, required: false
  private _footerText?: string; 
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }
  public set footerText(value: string) {
    this._footerText = value;
  }
  public resetFooterText() {
    this._footerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerTextInput() {
    return this._footerText;
  }

  // heading_text_color - computed: false, optional: false, required: true
  private _headingTextColor?: string; 
  public get headingTextColor() {
    return this.getStringAttribute('heading_text_color');
  }
  public set headingTextColor(value: string) {
    this._headingTextColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headingTextColorInput() {
    return this._headingTextColor;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_text_color - computed: false, optional: false, required: true
  private _linkTextColor?: string; 
  public get linkTextColor() {
    return this.getStringAttribute('link_text_color');
  }
  public set linkTextColor(value: string) {
    this._linkTextColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTextColorInput() {
    return this._linkTextColor;
  }

  // logo - computed: false, optional: true, required: false
  private _logo = new BrandingThemeLogoOutputReference(this, "logo");
  public get logo() {
    return this._logo;
  }
  public putLogo(value: BrandingThemeLogo) {
    this._logo.internalValue = value;
  }
  public resetLogo() {
    this._logo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo.internalValue;
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

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // use_default_background - computed: true, optional: true, required: false
  private _useDefaultBackground?: boolean | cdktf.IResolvable; 
  public get useDefaultBackground() {
    return this.getBooleanAttribute('use_default_background');
  }
  public set useDefaultBackground(value: boolean | cdktf.IResolvable) {
    this._useDefaultBackground = value;
  }
  public resetUseDefaultBackground() {
    this._useDefaultBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultBackgroundInput() {
    return this._useDefaultBackground;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      background_color: cdktf.stringToTerraform(this._backgroundColor),
      background_image: brandingThemeBackgroundImageToTerraform(this._backgroundImage.internalValue),
      body_text_color: cdktf.stringToTerraform(this._bodyTextColor),
      button_color: cdktf.stringToTerraform(this._buttonColor),
      button_text_color: cdktf.stringToTerraform(this._buttonTextColor),
      card_color: cdktf.stringToTerraform(this._cardColor),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      footer_text: cdktf.stringToTerraform(this._footerText),
      heading_text_color: cdktf.stringToTerraform(this._headingTextColor),
      link_text_color: cdktf.stringToTerraform(this._linkTextColor),
      logo: brandingThemeLogoToTerraform(this._logo.internalValue),
      name: cdktf.stringToTerraform(this._name),
      template: cdktf.stringToTerraform(this._template),
      use_default_background: cdktf.booleanToTerraform(this._useDefaultBackground),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      background_color: {
        value: cdktf.stringToHclTerraform(this._backgroundColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      background_image: {
        value: brandingThemeBackgroundImageToHclTerraform(this._backgroundImage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrandingThemeBackgroundImage",
      },
      body_text_color: {
        value: cdktf.stringToHclTerraform(this._bodyTextColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      button_color: {
        value: cdktf.stringToHclTerraform(this._buttonColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      button_text_color: {
        value: cdktf.stringToHclTerraform(this._buttonTextColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      card_color: {
        value: cdktf.stringToHclTerraform(this._cardColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer_text: {
        value: cdktf.stringToHclTerraform(this._footerText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heading_text_color: {
        value: cdktf.stringToHclTerraform(this._headingTextColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_text_color: {
        value: cdktf.stringToHclTerraform(this._linkTextColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo: {
        value: brandingThemeLogoToHclTerraform(this._logo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BrandingThemeLogo",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_background: {
        value: cdktf.booleanToHclTerraform(this._useDefaultBackground),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
