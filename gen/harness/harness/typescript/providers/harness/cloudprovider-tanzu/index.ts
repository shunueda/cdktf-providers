// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudproviderTanzuConfig extends cdktf.TerraformMetaArguments {
  /**
  * The url of the Tanzu platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu#endpoint CloudproviderTanzu#endpoint}
  */
  readonly endpoint: string;
  /**
  * The name of the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu#name CloudproviderTanzu#name}
  */
  readonly name: string;
  /**
  * The name of the Harness secret containing the password to use to authenticate to Tanzu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu#password_secret_name CloudproviderTanzu#password_secret_name}
  */
  readonly passwordSecretName: string;
  /**
  * Skip validation of Tanzu configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu#skip_validation CloudproviderTanzu#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * The username to use to authenticate to Tanzu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu#username CloudproviderTanzu#username}
  */
  readonly username?: string;
  /**
  * The name of the Harness secret containing the username to authenticate to Tanzu with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu#username_secret_name CloudproviderTanzu#username_secret_name}
  */
  readonly usernameSecretName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu harness_cloudprovider_tanzu}
*/
export class CloudproviderTanzu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_cloudprovider_tanzu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudproviderTanzu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudproviderTanzu to import
  * @param importFromId The id of the existing CloudproviderTanzu that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudproviderTanzu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_cloudprovider_tanzu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_tanzu harness_cloudprovider_tanzu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudproviderTanzuConfig
  */
  public constructor(scope: Construct, id: string, config: CloudproviderTanzuConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_cloudprovider_tanzu',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpoint = config.endpoint;
    this._name = config.name;
    this._passwordSecretName = config.passwordSecretName;
    this._skipValidation = config.skipValidation;
    this._username = config.username;
    this._usernameSecretName = config.usernameSecretName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password_secret_name - computed: false, optional: false, required: true
  private _passwordSecretName?: string; 
  public get passwordSecretName() {
    return this.getStringAttribute('password_secret_name');
  }
  public set passwordSecretName(value: string) {
    this._passwordSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretNameInput() {
    return this._passwordSecretName;
  }

  // skip_validation - computed: false, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_secret_name - computed: false, optional: true, required: false
  private _usernameSecretName?: string; 
  public get usernameSecretName() {
    return this.getStringAttribute('username_secret_name');
  }
  public set usernameSecretName(value: string) {
    this._usernameSecretName = value;
  }
  public resetUsernameSecretName() {
    this._usernameSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameSecretNameInput() {
    return this._usernameSecretName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      name: cdktf.stringToTerraform(this._name),
      password_secret_name: cdktf.stringToTerraform(this._passwordSecretName),
      skip_validation: cdktf.booleanToTerraform(this._skipValidation),
      username: cdktf.stringToTerraform(this._username),
      username_secret_name: cdktf.stringToTerraform(this._usernameSecretName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      password_secret_name: {
        value: cdktf.stringToHclTerraform(this._passwordSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_validation: {
        value: cdktf.booleanToHclTerraform(this._skipValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_secret_name: {
        value: cdktf.stringToHclTerraform(this._usernameSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
