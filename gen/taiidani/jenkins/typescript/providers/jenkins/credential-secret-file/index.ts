// https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialSecretFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human readable description of the credentials being stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#description CredentialSecretFile#description}
  */
  readonly description?: string;
  /**
  * The domain store to place the credentials into. If not set will default to the global credentials store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#domain CredentialSecretFile#domain}
  */
  readonly domain?: string;
  /**
  * The secret file filename on jenkins server side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#filename CredentialSecretFile#filename}
  */
  readonly filename: string;
  /**
  * The folder namespace to store the resource in. If not set will default to global Jenkins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#folder CredentialSecretFile#folder}
  */
  readonly folder?: string;
  /**
  * The name of the resource being created. This maps to the ID property within Jenkins, and cannot be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#name CredentialSecretFile#name}
  */
  readonly name: string;
  /**
  * The visibility of the credentials to Jenkins agents. This must be set to either "GLOBAL" or "SYSTEM". If not set will default to "GLOBAL".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#scope CredentialSecretFile#scope}
  */
  readonly scope?: string;
  /**
  * The secret file, base64 encoded content. It can be sourced directly from local file with filebase64(path) TF function or given directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#secretbytes CredentialSecretFile#secretbytes}
  */
  readonly secretbytes: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file jenkins_credential_secret_file}
*/
export class CredentialSecretFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jenkins_credential_secret_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialSecretFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialSecretFile to import
  * @param importFromId The id of the existing CredentialSecretFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialSecretFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jenkins_credential_secret_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_secret_file jenkins_credential_secret_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialSecretFileConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialSecretFileConfig) {
    super(scope, id, {
      terraformResourceType: 'jenkins_credential_secret_file',
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
    this._filename = config.filename;
    this._folder = config.folder;
    this._name = config.name;
    this._scope = config.scope;
    this._secretbytes = config.secretbytes;
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

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // secretbytes - computed: false, optional: false, required: true
  private _secretbytes?: string; 
  public get secretbytes() {
    return this.getStringAttribute('secretbytes');
  }
  public set secretbytes(value: string) {
    this._secretbytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretbytesInput() {
    return this._secretbytes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      filename: cdktf.stringToTerraform(this._filename),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      secretbytes: cdktf.stringToTerraform(this._secretbytes),
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
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secretbytes: {
        value: cdktf.stringToHclTerraform(this._secretbytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
