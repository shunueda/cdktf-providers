// https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Callback URLs to use. Used together with `type` set to `frontend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client#callback_urls AppClient#callback_urls}
  */
  readonly callbackUrls?: string[];
  /**
  * Should a secret be generated? Automatically set by `type`, but you're able to override it with this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client#generate_secret AppClient#generate_secret}
  */
  readonly generateSecret?: boolean | cdktf.IResolvable;
  /**
  * Logout URLs to use. Used together with `type` set to `frontend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client#logout_urls AppClient#logout_urls}
  */
  readonly logoutUrls?: string[];
  /**
  * The name of this app client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client#name AppClient#name}
  */
  readonly name: string;
  /**
  * Scopes that this client has access to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client#scopes AppClient#scopes}
  */
  readonly scopes?: string[];
  /**
  * The use-case for this app client. Used to automatically add OAuth options. Must be either `frontend` or `backend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client#type AppClient#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client vy_app_client}
*/
export class AppClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vy_app_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppClient to import
  * @param importFromId The id of the existing AppClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vy_app_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/resources/app_client vy_app_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppClientConfig
  */
  public constructor(scope: Construct, id: string, config: AppClientConfig) {
    super(scope, id, {
      terraformResourceType: 'vy_app_client',
      terraformGeneratorMetadata: {
        providerName: 'vy',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._callbackUrls = config.callbackUrls;
    this._generateSecret = config.generateSecret;
    this._logoutUrls = config.logoutUrls;
    this._name = config.name;
    this._scopes = config.scopes;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_urls - computed: false, optional: true, required: false
  private _callbackUrls?: string[]; 
  public get callbackUrls() {
    return this.getListAttribute('callback_urls');
  }
  public set callbackUrls(value: string[]) {
    this._callbackUrls = value;
  }
  public resetCallbackUrls() {
    this._callbackUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlsInput() {
    return this._callbackUrls;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // generate_secret - computed: true, optional: true, required: false
  private _generateSecret?: boolean | cdktf.IResolvable; 
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret');
  }
  public set generateSecret(value: boolean | cdktf.IResolvable) {
    this._generateSecret = value;
  }
  public resetGenerateSecret() {
    this._generateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSecretInput() {
    return this._generateSecret;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logout_urls - computed: false, optional: true, required: false
  private _logoutUrls?: string[]; 
  public get logoutUrls() {
    return this.getListAttribute('logout_urls');
  }
  public set logoutUrls(value: string[]) {
    this._logoutUrls = value;
  }
  public resetLogoutUrls() {
    this._logoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlsInput() {
    return this._logoutUrls;
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

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      callback_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackUrls),
      generate_secret: cdktf.booleanToTerraform(this._generateSecret),
      logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logoutUrls),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      callback_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbackUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      generate_secret: {
        value: cdktf.booleanToHclTerraform(this._generateSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logout_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logoutUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
