// https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialUsernameConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human readable description of the credentials being stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#description CredentialUsername#description}
  */
  readonly description?: string;
  /**
  * The domain store to place the credentials into. If not set will default to the global credentials store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#domain CredentialUsername#domain}
  */
  readonly domain?: string;
  /**
  * The folder namespace to store the resource in. If not set will default to global Jenkins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#folder CredentialUsername#folder}
  */
  readonly folder?: string;
  /**
  * The name of the resource being created. This maps to the ID property within Jenkins, and cannot be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#name CredentialUsername#name}
  */
  readonly name: string;
  /**
  * The password to be associated with the credentials. If empty then the password property will become unmanaged and expected to be set manually within Jenkins. If set then the password will be updated only upon changes -- if the password is set manually within Jenkins then it will not reconcile this drift until the next time the password property is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#password CredentialUsername#password}
  */
  readonly password?: string;
  /**
  * The visibility of the credentials to Jenkins agents. This must be set to either "GLOBAL" or "SYSTEM". If not set will default to "GLOBAL".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#scope CredentialUsername#scope}
  */
  readonly scope?: string;
  /**
  * The username to be associated with the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#username CredentialUsername#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username jenkins_credential_username}
*/
export class CredentialUsername extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jenkins_credential_username";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialUsername resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialUsername to import
  * @param importFromId The id of the existing CredentialUsername that should be imported. Refer to the {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialUsername to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jenkins_credential_username", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_username jenkins_credential_username} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialUsernameConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialUsernameConfig) {
    super(scope, id, {
      terraformResourceType: 'jenkins_credential_username',
      terraformGeneratorMetadata: {
        providerName: 'jenkins',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domain = config.domain;
    this._folder = config.folder;
    this._name = config.name;
    this._password = config.password;
    this._scope = config.scope;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      scope: cdktf.stringToTerraform(this._scope),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
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
