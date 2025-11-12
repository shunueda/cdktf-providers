// https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandingConfig extends cdktf.TerraformMetaArguments {
  /**
  * URL for the favicon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#favicon_url Branding#favicon_url}
  */
  readonly faviconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#id Branding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * URL of logo for branding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#logo_url Branding#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#colors Branding#colors}
  */
  readonly colors?: BrandingColors;
  /**
  * font block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#font Branding#font}
  */
  readonly font?: BrandingFont;
  /**
  * universal_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#universal_login Branding#universal_login}
  */
  readonly universalLogin?: BrandingUniversalLogin;
}
export interface BrandingColors {
  /**
  * String, Hexadecimal. Primary button background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#page_background Branding#page_background}
  */
  readonly pageBackground?: string;
  /**
  * String, Hexadecimal. Background color of login pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#primary Branding#primary}
  */
  readonly primary?: string;
}

export function brandingColorsToTerraform(struct?: BrandingColorsOutputReference | BrandingColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_background: cdktf.stringToTerraform(struct!.pageBackground),
    primary: cdktf.stringToTerraform(struct!.primary),
  }
}


export function brandingColorsToHclTerraform(struct?: BrandingColorsOutputReference | BrandingColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    page_background: {
      value: cdktf.stringToHclTerraform(struct!.pageBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageBackground = this._pageBackground;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageBackground = undefined;
      this._primary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageBackground = value.pageBackground;
      this._primary = value.primary;
    }
  }

  // page_background - computed: true, optional: true, required: false
  private _pageBackground?: string; 
  public get pageBackground() {
    return this.getStringAttribute('page_background');
  }
  public set pageBackground(value: string) {
    this._pageBackground = value;
  }
  public resetPageBackground() {
    this._pageBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBackgroundInput() {
    return this._pageBackground;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}
export interface BrandingFont {
  /**
  * URL for the custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#url Branding#url}
  */
  readonly url?: string;
}

export function brandingFontToTerraform(struct?: BrandingFontOutputReference | BrandingFont): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function brandingFontToHclTerraform(struct?: BrandingFontOutputReference | BrandingFont): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingFontOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingFont | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingFont | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface BrandingUniversalLogin {
  /**
  * body of login pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#body Branding#body}
  */
  readonly body?: string;
}

export function brandingUniversalLoginToTerraform(struct?: BrandingUniversalLoginOutputReference | BrandingUniversalLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
  }
}


export function brandingUniversalLoginToHclTerraform(struct?: BrandingUniversalLoginOutputReference | BrandingUniversalLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BrandingUniversalLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BrandingUniversalLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BrandingUniversalLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding auth0_branding}
*/
export class Branding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_branding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Branding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Branding to import
  * @param importFromId The id of the existing Branding that should be imported. Refer to the {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Branding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_branding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alekc/auth0/1.1.3/docs/resources/branding auth0_branding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BrandingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_branding',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.1.3',
        providerVersionConstraint: '1.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._faviconUrl = config.faviconUrl;
    this._id = config.id;
    this._logoUrl = config.logoUrl;
    this._colors.internalValue = config.colors;
    this._font.internalValue = config.font;
    this._universalLogin.internalValue = config.universalLogin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // favicon_url - computed: true, optional: true, required: false
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

  // logo_url - computed: true, optional: true, required: false
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

  // colors - computed: false, optional: true, required: false
  private _colors = new BrandingColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: BrandingColors) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // font - computed: false, optional: true, required: false
  private _font = new BrandingFontOutputReference(this, "font");
  public get font() {
    return this._font;
  }
  public putFont(value: BrandingFont) {
    this._font.internalValue = value;
  }
  public resetFont() {
    this._font.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontInput() {
    return this._font.internalValue;
  }

  // universal_login - computed: false, optional: true, required: false
  private _universalLogin = new BrandingUniversalLoginOutputReference(this, "universal_login");
  public get universalLogin() {
    return this._universalLogin;
  }
  public putUniversalLogin(value: BrandingUniversalLogin) {
    this._universalLogin.internalValue = value;
  }
  public resetUniversalLogin() {
    this._universalLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalLoginInput() {
    return this._universalLogin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      favicon_url: cdktf.stringToTerraform(this._faviconUrl),
      id: cdktf.stringToTerraform(this._id),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      colors: brandingColorsToTerraform(this._colors.internalValue),
      font: brandingFontToTerraform(this._font.internalValue),
      universal_login: brandingUniversalLoginToTerraform(this._universalLogin.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      favicon_url: {
        value: cdktf.stringToHclTerraform(this._faviconUrl),
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
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      colors: {
        value: brandingColorsToHclTerraform(this._colors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingColorsList",
      },
      font: {
        value: brandingFontToHclTerraform(this._font.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingFontList",
      },
      universal_login: {
        value: brandingUniversalLoginToHclTerraform(this._universalLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BrandingUniversalLoginList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
