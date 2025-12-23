// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#id Pages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * change_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#change_password Pages#change_password}
  */
  readonly changePassword?: PagesChangePassword;
  /**
  * error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#error Pages#error}
  */
  readonly error?: PagesError;
  /**
  * guardian_mfa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#guardian_mfa Pages#guardian_mfa}
  */
  readonly guardianMfa?: PagesGuardianMfa;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#login Pages#login}
  */
  readonly login?: PagesLogin;
}
export interface PagesChangePassword {
  /**
  * Indicates whether to use the custom Reset Password HTML (`true`) or the default Auth0 page (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#enabled Pages#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Customized content for the Reset Password page. HTML format with supported [Liquid syntax](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#html Pages#html}
  */
  readonly html: string;
}

export function pagesChangePasswordToTerraform(struct?: PagesChangePasswordOutputReference | PagesChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    html: cdktf.stringToTerraform(struct!.html),
  }
}


export function pagesChangePasswordToHclTerraform(struct?: PagesChangePasswordOutputReference | PagesChangePassword): any {
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
    html: {
      value: cdktf.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesChangePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesChangePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesChangePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._html = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._html = value.html;
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

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }
}
export interface PagesError {
  /**
  * Customized content for the Error page. HTML format with supported [Liquid syntax](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#html Pages#html}
  */
  readonly html?: string;
  /**
  * Indicates whether to show the link to logs as part of the default error page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#show_log_link Pages#show_log_link}
  */
  readonly showLogLink: boolean | cdktf.IResolvable;
  /**
  * URL to redirect to when an error occurs, instead of showing the default error page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#url Pages#url}
  */
  readonly url?: string;
}

export function pagesErrorToTerraform(struct?: PagesErrorOutputReference | PagesError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    html: cdktf.stringToTerraform(struct!.html),
    show_log_link: cdktf.booleanToTerraform(struct!.showLogLink),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function pagesErrorToHclTerraform(struct?: PagesErrorOutputReference | PagesError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    html: {
      value: cdktf.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_log_link: {
      value: cdktf.booleanToHclTerraform(struct!.showLogLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class PagesErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    if (this._showLogLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLogLink = this._showLogLink;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._html = undefined;
      this._showLogLink = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._html = value.html;
      this._showLogLink = value.showLogLink;
      this._url = value.url;
    }
  }

  // html - computed: false, optional: true, required: false
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  public resetHtml() {
    this._html = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }

  // show_log_link - computed: false, optional: false, required: true
  private _showLogLink?: boolean | cdktf.IResolvable; 
  public get showLogLink() {
    return this.getBooleanAttribute('show_log_link');
  }
  public set showLogLink(value: boolean | cdktf.IResolvable) {
    this._showLogLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogLinkInput() {
    return this._showLogLink;
  }

  // url - computed: false, optional: true, required: false
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
export interface PagesGuardianMfa {
  /**
  * Indicates whether to use the custom Guardian MFA HTML (`true`) or the default Auth0 page (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#enabled Pages#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Customized content for the Guardian MFA page. HTML format with supported [Liquid syntax](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#html Pages#html}
  */
  readonly html: string;
}

export function pagesGuardianMfaToTerraform(struct?: PagesGuardianMfaOutputReference | PagesGuardianMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    html: cdktf.stringToTerraform(struct!.html),
  }
}


export function pagesGuardianMfaToHclTerraform(struct?: PagesGuardianMfaOutputReference | PagesGuardianMfa): any {
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
    html: {
      value: cdktf.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesGuardianMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesGuardianMfa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesGuardianMfa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._html = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._html = value.html;
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

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }
}
export interface PagesLogin {
  /**
  * Indicates whether to use the custom Login page HTML (`true`) or the default Auth0 page (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#enabled Pages#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Customized content for the Login page. HTML format with supported [Liquid syntax](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#html Pages#html}
  */
  readonly html: string;
}

export function pagesLoginToTerraform(struct?: PagesLoginOutputReference | PagesLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    html: cdktf.stringToTerraform(struct!.html),
  }
}


export function pagesLoginToHclTerraform(struct?: PagesLoginOutputReference | PagesLogin): any {
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
    html: {
      value: cdktf.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagesLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagesLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagesLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._html = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._html = value.html;
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

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages auth0_pages}
*/
export class Pages extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_pages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pages to import
  * @param importFromId The id of the existing Pages that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_pages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/pages auth0_pages} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_pages',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._changePassword.internalValue = config.changePassword;
    this._error.internalValue = config.error;
    this._guardianMfa.internalValue = config.guardianMfa;
    this._login.internalValue = config.login;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // change_password - computed: false, optional: true, required: false
  private _changePassword = new PagesChangePasswordOutputReference(this, "change_password");
  public get changePassword() {
    return this._changePassword;
  }
  public putChangePassword(value: PagesChangePassword) {
    this._changePassword.internalValue = value;
  }
  public resetChangePassword() {
    this._changePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new PagesErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: PagesError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // guardian_mfa - computed: false, optional: true, required: false
  private _guardianMfa = new PagesGuardianMfaOutputReference(this, "guardian_mfa");
  public get guardianMfa() {
    return this._guardianMfa;
  }
  public putGuardianMfa(value: PagesGuardianMfa) {
    this._guardianMfa.internalValue = value;
  }
  public resetGuardianMfa() {
    this._guardianMfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardianMfaInput() {
    return this._guardianMfa.internalValue;
  }

  // login - computed: false, optional: true, required: false
  private _login = new PagesLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: PagesLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      change_password: pagesChangePasswordToTerraform(this._changePassword.internalValue),
      error: pagesErrorToTerraform(this._error.internalValue),
      guardian_mfa: pagesGuardianMfaToTerraform(this._guardianMfa.internalValue),
      login: pagesLoginToTerraform(this._login.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password: {
        value: pagesChangePasswordToHclTerraform(this._changePassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PagesChangePasswordList",
      },
      error: {
        value: pagesErrorToHclTerraform(this._error.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PagesErrorList",
      },
      guardian_mfa: {
        value: pagesGuardianMfaToHclTerraform(this._guardianMfa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PagesGuardianMfaList",
      },
      login: {
        value: pagesLoginToHclTerraform(this._login.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PagesLoginList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
