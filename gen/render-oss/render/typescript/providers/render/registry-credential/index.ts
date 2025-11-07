// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The auth token to use when pulling the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential#auth_token RegistryCredential#auth_token}
  */
  readonly authToken: string;
  /**
  * Descriptive name for this credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential#name RegistryCredential#name}
  */
  readonly name: string;
  /**
  * The registry to use this credential with. One of `GITHUB`, `GITLAB`, `DOCKER`, `AWS_ECR`, `GOOGLE_ARTIFACT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential#registry RegistryCredential#registry}
  */
  readonly registry: string;
  /**
  * The username associated with the credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential#username RegistryCredential#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential render_registry_credential}
*/
export class RegistryCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_registry_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RegistryCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RegistryCredential to import
  * @param importFromId The id of the existing RegistryCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RegistryCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_registry_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/registry_credential render_registry_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'render_registry_credential',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authToken = config.authToken;
    this._name = config.name;
    this._registry = config.registry;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: false, required: true
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
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

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_token: cdktf.stringToTerraform(this._authToken),
      name: cdktf.stringToTerraform(this._name),
      registry: cdktf.stringToTerraform(this._registry),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
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
      registry: {
        value: cdktf.stringToHclTerraform(this._registry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
