// https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HerokuProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#api_key HerokuProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#email HerokuProvider#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#headers HerokuProvider#headers}
  */
  readonly headers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#url HerokuProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#alias HerokuProvider#alias}
  */
  readonly alias?: string;
  /**
  * customizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#customizations HerokuProvider#customizations}
  */
  readonly customizations?: HerokuProviderCustomizations[] | cdktf.IResolvable;
  /**
  * delays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#delays HerokuProvider#delays}
  */
  readonly delays?: HerokuProviderDelays;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#timeouts HerokuProvider#timeouts}
  */
  readonly timeouts?: HerokuProviderTimeouts;
}
export interface HerokuProviderCustomizations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#set_addon_config_vars_in_state HerokuProvider#set_addon_config_vars_in_state}
  */
  readonly setAddonConfigVarsInState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#set_app_all_config_vars_in_state HerokuProvider#set_app_all_config_vars_in_state}
  */
  readonly setAppAllConfigVarsInState?: boolean | cdktf.IResolvable;
}

export function herokuProviderCustomizationsToTerraform(struct?: HerokuProviderCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_addon_config_vars_in_state: cdktf.booleanToTerraform(struct!.setAddonConfigVarsInState),
    set_app_all_config_vars_in_state: cdktf.booleanToTerraform(struct!.setAppAllConfigVarsInState),
  }
}


export function herokuProviderCustomizationsToHclTerraform(struct?: HerokuProviderCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_addon_config_vars_in_state: {
      value: cdktf.booleanToHclTerraform(struct!.setAddonConfigVarsInState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_app_all_config_vars_in_state: {
      value: cdktf.booleanToHclTerraform(struct!.setAppAllConfigVarsInState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HerokuProviderDelays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#post_app_create_delay HerokuProvider#post_app_create_delay}
  */
  readonly postAppCreateDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#post_domain_create_delay HerokuProvider#post_domain_create_delay}
  */
  readonly postDomainCreateDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#post_space_create_delay HerokuProvider#post_space_create_delay}
  */
  readonly postSpaceCreateDelay?: number;
}

export function herokuProviderDelaysToTerraform(struct?: HerokuProviderDelays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_app_create_delay: cdktf.numberToTerraform(struct!.postAppCreateDelay),
    post_domain_create_delay: cdktf.numberToTerraform(struct!.postDomainCreateDelay),
    post_space_create_delay: cdktf.numberToTerraform(struct!.postSpaceCreateDelay),
  }
}


export function herokuProviderDelaysToHclTerraform(struct?: HerokuProviderDelays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_app_create_delay: {
      value: cdktf.numberToHclTerraform(struct!.postAppCreateDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_domain_create_delay: {
      value: cdktf.numberToHclTerraform(struct!.postDomainCreateDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_space_create_delay: {
      value: cdktf.numberToHclTerraform(struct!.postSpaceCreateDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HerokuProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#addon_create_timeout HerokuProvider#addon_create_timeout}
  */
  readonly addonCreateTimeout?: number;
}

export function herokuProviderTimeoutsToTerraform(struct?: HerokuProviderTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_create_timeout: cdktf.numberToTerraform(struct!.addonCreateTimeout),
  }
}


export function herokuProviderTimeoutsToHclTerraform(struct?: HerokuProviderTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_create_timeout: {
      value: cdktf.numberToHclTerraform(struct!.addonCreateTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs heroku}
*/
export class HerokuProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "heroku";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HerokuProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HerokuProvider to import
  * @param importFromId The id of the existing HerokuProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HerokuProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "heroku", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs heroku} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HerokuProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HerokuProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'heroku',
      terraformGeneratorMetadata: {
        providerName: 'heroku',
        providerVersion: '5.3.2'
      },
      terraformProviderSource: 'heroku/heroku'
    });
    this._apiKey = config.apiKey;
    this._email = config.email;
    this._headers = config.headers;
    this._url = config.url;
    this._alias = config.alias;
    this._customizations = config.customizations;
    this._delays = config.delays;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this._email;
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: string | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // customizations - computed: false, optional: true, required: false
  private _customizations?: HerokuProviderCustomizations[] | cdktf.IResolvable; 
  public get customizations() {
    return this._customizations;
  }
  public set customizations(value: HerokuProviderCustomizations[] | cdktf.IResolvable | undefined) {
    this._customizations = value;
  }
  public resetCustomizations() {
    this._customizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationsInput() {
    return this._customizations;
  }

  // delays - computed: false, optional: true, required: false
  private _delays?: HerokuProviderDelays; 
  public get delays() {
    return this._delays;
  }
  public set delays(value: HerokuProviderDelays | undefined) {
    this._delays = value;
  }
  public resetDelays() {
    this._delays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaysInput() {
    return this._delays;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HerokuProviderTimeouts; 
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HerokuProviderTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      email: cdktf.stringToTerraform(this._email),
      headers: cdktf.stringToTerraform(this._headers),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
      customizations: cdktf.listMapper(herokuProviderCustomizationsToTerraform, true)(this._customizations),
      delays: herokuProviderDelaysToTerraform(this._delays),
      timeouts: herokuProviderTimeoutsToTerraform(this._timeouts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.stringToHclTerraform(this._headers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customizations: {
        value: cdktf.listMapperHcl(herokuProviderCustomizationsToHclTerraform, true)(this._customizations),
        isBlock: true,
        type: "list",
        storageClassType: "HerokuProviderCustomizationsList",
      },
      delays: {
        value: herokuProviderDelaysToHclTerraform(this._delays),
        isBlock: true,
        type: "list",
        storageClassType: "HerokuProviderDelaysList",
      },
      timeouts: {
        value: herokuProviderTimeoutsToHclTerraform(this._timeouts),
        isBlock: true,
        type: "list",
        storageClassType: "HerokuProviderTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
