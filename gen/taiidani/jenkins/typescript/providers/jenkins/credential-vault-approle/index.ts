// https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialVaultApproleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human readable description of the credentials being stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#description CredentialVaultApprole#description}
  */
  readonly description?: string;
  /**
  * The domain store to place the credentials into. If not set will default to the global credentials store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#domain CredentialVaultApprole#domain}
  */
  readonly domain?: string;
  /**
  * The folder namespace to store the resource in. If not set will default to global Jenkins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#folder CredentialVaultApprole#folder}
  */
  readonly folder?: string;
  /**
  * The name of the resource being created. This maps to the ID property within Jenkins, and cannot be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#name CredentialVaultApprole#name}
  */
  readonly name: string;
  /**
  * The Vault namespace of the approle credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#namespace CredentialVaultApprole#namespace}
  */
  readonly namespace?: string;
  /**
  * The unique name of the approle auth backend. Defaults to `approle`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#path CredentialVaultApprole#path}
  */
  readonly path?: string;
  /**
  * The role_id to be associated with the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#role_id CredentialVaultApprole#role_id}
  */
  readonly roleId: string;
  /**
  * The visibility of the credentials to Jenkins agents. This must be set to either "GLOBAL" or "SYSTEM". If not set will default to "GLOBAL".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#scope CredentialVaultApprole#scope}
  */
  readonly scope?: string;
  /**
  * The secret_id to be associated with the credentials. If empty then the secret_id property will become unmanaged and expected to be set manually within Jenkins. If set then the secret_id will be updated only upon changes -- if the secret_id is set manually within Jenkins then it will not reconcile this drift until the next time the secret_id property is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#secret_id CredentialVaultApprole#secret_id}
  */
  readonly secretId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle jenkins_credential_vault_approle}
*/
export class CredentialVaultApprole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jenkins_credential_vault_approle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialVaultApprole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialVaultApprole to import
  * @param importFromId The id of the existing CredentialVaultApprole that should be imported. Refer to the {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialVaultApprole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jenkins_credential_vault_approle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/resources/credential_vault_approle jenkins_credential_vault_approle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialVaultApproleConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialVaultApproleConfig) {
    super(scope, id, {
      terraformResourceType: 'jenkins_credential_vault_approle',
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
    this._namespace = config.namespace;
    this._path = config.path;
    this._roleId = config.roleId;
    this._scope = config.scope;
    this._secretId = config.secretId;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
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

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
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
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      role_id: cdktf.stringToTerraform(this._roleId),
      scope: cdktf.stringToTerraform(this._scope),
      secret_id: cdktf.stringToTerraform(this._secretId),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
