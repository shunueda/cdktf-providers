// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapCustomPageSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of domain IDs associated with this custom page set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#domains WaapCustomPageSet#domains}
  */
  readonly domains?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#id WaapCustomPageSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the custom page set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#name WaapCustomPageSet#name}
  */
  readonly name: string;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#block WaapCustomPageSet#block}
  */
  readonly block?: WaapCustomPageSetBlock;
  /**
  * block_csrf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#block_csrf WaapCustomPageSet#block_csrf}
  */
  readonly blockCsrf?: WaapCustomPageSetBlockCsrf;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#captcha WaapCustomPageSet#captcha}
  */
  readonly captcha?: WaapCustomPageSetCaptcha;
  /**
  * cookie_disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#cookie_disabled WaapCustomPageSet#cookie_disabled}
  */
  readonly cookieDisabled?: WaapCustomPageSetCookieDisabled;
  /**
  * handshake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#handshake WaapCustomPageSet#handshake}
  */
  readonly handshake?: WaapCustomPageSetHandshake;
  /**
  * javascript_disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#javascript_disabled WaapCustomPageSet#javascript_disabled}
  */
  readonly javascriptDisabled?: WaapCustomPageSetJavascriptDisabled;
}
export interface WaapCustomPageSetBlock {
  /**
  * Indicates whether the custom custom page is active or inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#enabled WaapCustomPageSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The text to display in the header of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#header WaapCustomPageSet#header}
  */
  readonly header?: string;
  /**
  * A base64 encoded image of the logo to present. Supported image types are JPEG, PNG and JPG, size is limited to width 450px, height 130px. This should be a base 64 encoding of the full HTML img tag compatible image, with the header included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#logo WaapCustomPageSet#logo}
  */
  readonly logo?: string;
  /**
  * The text to display in the body of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#text WaapCustomPageSet#text}
  */
  readonly text?: string;
  /**
  * The text to display in the title of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#title WaapCustomPageSet#title}
  */
  readonly title?: string;
}

export function waapCustomPageSetBlockToTerraform(struct?: WaapCustomPageSetBlockOutputReference | WaapCustomPageSetBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    logo: cdktf.stringToTerraform(struct!.logo),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function waapCustomPageSetBlockToHclTerraform(struct?: WaapCustomPageSetBlockOutputReference | WaapCustomPageSetBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomPageSetBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomPageSetBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomPageSetBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._header = undefined;
      this._logo = undefined;
      this._text = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._header = value.header;
      this._logo = value.logo;
      this._text = value.text;
      this._title = value.title;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface WaapCustomPageSetBlockCsrf {
  /**
  * Indicates whether the custom custom page is active or inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#enabled WaapCustomPageSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The text to display in the header of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#header WaapCustomPageSet#header}
  */
  readonly header?: string;
  /**
  * A base64 encoded image of the logo to present. Supported image types are JPEG, PNG and JPG, size is limited to width 450px, height 130px. This should be a base 64 encoding of the full HTML img tag compatible image, with the header included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#logo WaapCustomPageSet#logo}
  */
  readonly logo?: string;
  /**
  * The text to display in the body of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#text WaapCustomPageSet#text}
  */
  readonly text?: string;
  /**
  * The text to display in the title of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#title WaapCustomPageSet#title}
  */
  readonly title?: string;
}

export function waapCustomPageSetBlockCsrfToTerraform(struct?: WaapCustomPageSetBlockCsrfOutputReference | WaapCustomPageSetBlockCsrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    logo: cdktf.stringToTerraform(struct!.logo),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function waapCustomPageSetBlockCsrfToHclTerraform(struct?: WaapCustomPageSetBlockCsrfOutputReference | WaapCustomPageSetBlockCsrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomPageSetBlockCsrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomPageSetBlockCsrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomPageSetBlockCsrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._header = undefined;
      this._logo = undefined;
      this._text = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._header = value.header;
      this._logo = value.logo;
      this._text = value.text;
      this._title = value.title;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface WaapCustomPageSetCaptcha {
  /**
  * Indicates whether the custom custom page is active or inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#enabled WaapCustomPageSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Error message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#error WaapCustomPageSet#error}
  */
  readonly error?: string;
  /**
  * The text to display in the header of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#header WaapCustomPageSet#header}
  */
  readonly header?: string;
  /**
  * A base64 encoded image of the logo to present. Supported image types are JPEG, PNG and JPG, size is limited to width 450px, height 130px. This should be a base 64 encoding of the full HTML img tag compatible image, with the header included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#logo WaapCustomPageSet#logo}
  */
  readonly logo?: string;
  /**
  * The text to display in the body of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#text WaapCustomPageSet#text}
  */
  readonly text?: string;
  /**
  * The text to display in the title of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#title WaapCustomPageSet#title}
  */
  readonly title?: string;
}

export function waapCustomPageSetCaptchaToTerraform(struct?: WaapCustomPageSetCaptchaOutputReference | WaapCustomPageSetCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    error: cdktf.stringToTerraform(struct!.error),
    header: cdktf.stringToTerraform(struct!.header),
    logo: cdktf.stringToTerraform(struct!.logo),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function waapCustomPageSetCaptchaToHclTerraform(struct?: WaapCustomPageSetCaptchaOutputReference | WaapCustomPageSetCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomPageSetCaptchaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomPageSetCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomPageSetCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._error = undefined;
      this._header = undefined;
      this._logo = undefined;
      this._text = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._error = value.error;
      this._header = value.header;
      this._logo = value.logo;
      this._text = value.text;
      this._title = value.title;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface WaapCustomPageSetCookieDisabled {
  /**
  * Indicates whether the custom custom page is active or inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#enabled WaapCustomPageSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The text to display in the header of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#header WaapCustomPageSet#header}
  */
  readonly header?: string;
  /**
  * The text to display in the body of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#text WaapCustomPageSet#text}
  */
  readonly text?: string;
}

export function waapCustomPageSetCookieDisabledToTerraform(struct?: WaapCustomPageSetCookieDisabledOutputReference | WaapCustomPageSetCookieDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function waapCustomPageSetCookieDisabledToHclTerraform(struct?: WaapCustomPageSetCookieDisabledOutputReference | WaapCustomPageSetCookieDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomPageSetCookieDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomPageSetCookieDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomPageSetCookieDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._header = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._header = value.header;
      this._text = value.text;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface WaapCustomPageSetHandshake {
  /**
  * Indicates whether the custom custom page is active or inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#enabled WaapCustomPageSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The text to display in the header of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#header WaapCustomPageSet#header}
  */
  readonly header?: string;
  /**
  * A base64 encoded image of the logo to present. Supported image types are JPEG, PNG and JPG, size is limited to width 450px, height 130px. This should be a base 64 encoding of the full HTML img tag compatible image, with the header included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#logo WaapCustomPageSet#logo}
  */
  readonly logo?: string;
  /**
  * The text to display in the title of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#title WaapCustomPageSet#title}
  */
  readonly title?: string;
}

export function waapCustomPageSetHandshakeToTerraform(struct?: WaapCustomPageSetHandshakeOutputReference | WaapCustomPageSetHandshake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    logo: cdktf.stringToTerraform(struct!.logo),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function waapCustomPageSetHandshakeToHclTerraform(struct?: WaapCustomPageSetHandshakeOutputReference | WaapCustomPageSetHandshake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomPageSetHandshakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomPageSetHandshake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomPageSetHandshake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._header = undefined;
      this._logo = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._header = value.header;
      this._logo = value.logo;
      this._title = value.title;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface WaapCustomPageSetJavascriptDisabled {
  /**
  * Indicates whether the custom custom page is active or inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#enabled WaapCustomPageSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The text to display in the header of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#header WaapCustomPageSet#header}
  */
  readonly header?: string;
  /**
  * The text to display in the body of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#text WaapCustomPageSet#text}
  */
  readonly text?: string;
}

export function waapCustomPageSetJavascriptDisabledToTerraform(struct?: WaapCustomPageSetJavascriptDisabledOutputReference | WaapCustomPageSetJavascriptDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function waapCustomPageSetJavascriptDisabledToHclTerraform(struct?: WaapCustomPageSetJavascriptDisabledOutputReference | WaapCustomPageSetJavascriptDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapCustomPageSetJavascriptDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapCustomPageSetJavascriptDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapCustomPageSetJavascriptDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._header = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._header = value.header;
      this._text = value.text;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set gcore_waap_custom_page_set}
*/
export class WaapCustomPageSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_custom_page_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapCustomPageSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapCustomPageSet to import
  * @param importFromId The id of the existing WaapCustomPageSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapCustomPageSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_custom_page_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_custom_page_set gcore_waap_custom_page_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapCustomPageSetConfig
  */
  public constructor(scope: Construct, id: string, config: WaapCustomPageSetConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_custom_page_set',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domains = config.domains;
    this._id = config.id;
    this._name = config.name;
    this._block.internalValue = config.block;
    this._blockCsrf.internalValue = config.blockCsrf;
    this._captcha.internalValue = config.captcha;
    this._cookieDisabled.internalValue = config.cookieDisabled;
    this._handshake.internalValue = config.handshake;
    this._javascriptDisabled.internalValue = config.javascriptDisabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domains - computed: false, optional: true, required: false
  private _domains?: number[]; 
  public get domains() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('domains')));
  }
  public set domains(value: number[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // block - computed: false, optional: true, required: false
  private _block = new WaapCustomPageSetBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: WaapCustomPageSetBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // block_csrf - computed: false, optional: true, required: false
  private _blockCsrf = new WaapCustomPageSetBlockCsrfOutputReference(this, "block_csrf");
  public get blockCsrf() {
    return this._blockCsrf;
  }
  public putBlockCsrf(value: WaapCustomPageSetBlockCsrf) {
    this._blockCsrf.internalValue = value;
  }
  public resetBlockCsrf() {
    this._blockCsrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCsrfInput() {
    return this._blockCsrf.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new WaapCustomPageSetCaptchaOutputReference(this, "captcha");
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: WaapCustomPageSetCaptcha) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // cookie_disabled - computed: false, optional: true, required: false
  private _cookieDisabled = new WaapCustomPageSetCookieDisabledOutputReference(this, "cookie_disabled");
  public get cookieDisabled() {
    return this._cookieDisabled;
  }
  public putCookieDisabled(value: WaapCustomPageSetCookieDisabled) {
    this._cookieDisabled.internalValue = value;
  }
  public resetCookieDisabled() {
    this._cookieDisabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDisabledInput() {
    return this._cookieDisabled.internalValue;
  }

  // handshake - computed: false, optional: true, required: false
  private _handshake = new WaapCustomPageSetHandshakeOutputReference(this, "handshake");
  public get handshake() {
    return this._handshake;
  }
  public putHandshake(value: WaapCustomPageSetHandshake) {
    this._handshake.internalValue = value;
  }
  public resetHandshake() {
    this._handshake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeInput() {
    return this._handshake.internalValue;
  }

  // javascript_disabled - computed: false, optional: true, required: false
  private _javascriptDisabled = new WaapCustomPageSetJavascriptDisabledOutputReference(this, "javascript_disabled");
  public get javascriptDisabled() {
    return this._javascriptDisabled;
  }
  public putJavascriptDisabled(value: WaapCustomPageSetJavascriptDisabled) {
    this._javascriptDisabled.internalValue = value;
  }
  public resetJavascriptDisabled() {
    this._javascriptDisabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptDisabledInput() {
    return this._javascriptDisabled.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domains: cdktf.listMapper(cdktf.numberToTerraform, false)(this._domains),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      block: waapCustomPageSetBlockToTerraform(this._block.internalValue),
      block_csrf: waapCustomPageSetBlockCsrfToTerraform(this._blockCsrf.internalValue),
      captcha: waapCustomPageSetCaptchaToTerraform(this._captcha.internalValue),
      cookie_disabled: waapCustomPageSetCookieDisabledToTerraform(this._cookieDisabled.internalValue),
      handshake: waapCustomPageSetHandshakeToTerraform(this._handshake.internalValue),
      javascript_disabled: waapCustomPageSetJavascriptDisabledToTerraform(this._javascriptDisabled.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domains: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      block: {
        value: waapCustomPageSetBlockToHclTerraform(this._block.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomPageSetBlockList",
      },
      block_csrf: {
        value: waapCustomPageSetBlockCsrfToHclTerraform(this._blockCsrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomPageSetBlockCsrfList",
      },
      captcha: {
        value: waapCustomPageSetCaptchaToHclTerraform(this._captcha.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomPageSetCaptchaList",
      },
      cookie_disabled: {
        value: waapCustomPageSetCookieDisabledToHclTerraform(this._cookieDisabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomPageSetCookieDisabledList",
      },
      handshake: {
        value: waapCustomPageSetHandshakeToHclTerraform(this._handshake.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomPageSetHandshakeList",
      },
      javascript_disabled: {
        value: waapCustomPageSetJavascriptDisabledToHclTerraform(this._javascriptDisabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapCustomPageSetJavascriptDisabledList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
