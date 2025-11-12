// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretGitlabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Protection from accidental deletion of this item, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#delete_protection DynamicSecretGitlab#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#description DynamicSecretGitlab#description}
  */
  readonly description?: string;
  /**
  * Gitlab access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#gitlab_access_token DynamicSecretGitlab#gitlab_access_token}
  */
  readonly gitlabAccessToken?: string;
  /**
  * Gitlab access token type [project,group]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#gitlab_access_type DynamicSecretGitlab#gitlab_access_type}
  */
  readonly gitlabAccessType?: string;
  /**
  * Gitlab tls certificate (base64 encoded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#gitlab_certificate DynamicSecretGitlab#gitlab_certificate}
  */
  readonly gitlabCertificate?: string;
  /**
  * Gitlab role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#gitlab_role DynamicSecretGitlab#gitlab_role}
  */
  readonly gitlabRole?: string;
  /**
  * Comma-separated list of access token scopes to grant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#gitlab_token_scopes DynamicSecretGitlab#gitlab_token_scopes}
  */
  readonly gitlabTokenScopes?: string;
  /**
  * Gitlab base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#gitlab_url DynamicSecretGitlab#gitlab_url}
  */
  readonly gitlabUrl?: string;
  /**
  * Gitlab group name, required for access-type=group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#group_name DynamicSecretGitlab#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#id DynamicSecretGitlab#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Gitlab project name, required for access-type=project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#installation_organization DynamicSecretGitlab#installation_organization}
  */
  readonly installationOrganization?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#name DynamicSecretGitlab#name}
  */
  readonly name: string;
  /**
  * A comma-separated list of tags attached to this secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#tags DynamicSecretGitlab#tags}
  */
  readonly tags?: string[];
  /**
  * Name of an existing target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#target_name DynamicSecretGitlab#target_name}
  */
  readonly targetName?: string;
  /**
  * Access Token TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#ttl DynamicSecretGitlab#ttl}
  */
  readonly ttl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab akeyless_dynamic_secret_gitlab}
*/
export class DynamicSecretGitlab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_gitlab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretGitlab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretGitlab to import
  * @param importFromId The id of the existing DynamicSecretGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretGitlab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_gitlab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_gitlab akeyless_dynamic_secret_gitlab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretGitlabConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretGitlabConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_gitlab',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._gitlabAccessToken = config.gitlabAccessToken;
    this._gitlabAccessType = config.gitlabAccessType;
    this._gitlabCertificate = config.gitlabCertificate;
    this._gitlabRole = config.gitlabRole;
    this._gitlabTokenScopes = config.gitlabTokenScopes;
    this._gitlabUrl = config.gitlabUrl;
    this._groupName = config.groupName;
    this._id = config.id;
    this._installationOrganization = config.installationOrganization;
    this._name = config.name;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // description - computed: false, optional: true, required: false
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

  // gitlab_access_token - computed: false, optional: true, required: false
  private _gitlabAccessToken?: string; 
  public get gitlabAccessToken() {
    return this.getStringAttribute('gitlab_access_token');
  }
  public set gitlabAccessToken(value: string) {
    this._gitlabAccessToken = value;
  }
  public resetGitlabAccessToken() {
    this._gitlabAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabAccessTokenInput() {
    return this._gitlabAccessToken;
  }

  // gitlab_access_type - computed: false, optional: true, required: false
  private _gitlabAccessType?: string; 
  public get gitlabAccessType() {
    return this.getStringAttribute('gitlab_access_type');
  }
  public set gitlabAccessType(value: string) {
    this._gitlabAccessType = value;
  }
  public resetGitlabAccessType() {
    this._gitlabAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabAccessTypeInput() {
    return this._gitlabAccessType;
  }

  // gitlab_certificate - computed: false, optional: true, required: false
  private _gitlabCertificate?: string; 
  public get gitlabCertificate() {
    return this.getStringAttribute('gitlab_certificate');
  }
  public set gitlabCertificate(value: string) {
    this._gitlabCertificate = value;
  }
  public resetGitlabCertificate() {
    this._gitlabCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabCertificateInput() {
    return this._gitlabCertificate;
  }

  // gitlab_role - computed: false, optional: true, required: false
  private _gitlabRole?: string; 
  public get gitlabRole() {
    return this.getStringAttribute('gitlab_role');
  }
  public set gitlabRole(value: string) {
    this._gitlabRole = value;
  }
  public resetGitlabRole() {
    this._gitlabRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabRoleInput() {
    return this._gitlabRole;
  }

  // gitlab_token_scopes - computed: false, optional: true, required: false
  private _gitlabTokenScopes?: string; 
  public get gitlabTokenScopes() {
    return this.getStringAttribute('gitlab_token_scopes');
  }
  public set gitlabTokenScopes(value: string) {
    this._gitlabTokenScopes = value;
  }
  public resetGitlabTokenScopes() {
    this._gitlabTokenScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabTokenScopesInput() {
    return this._gitlabTokenScopes;
  }

  // gitlab_url - computed: false, optional: true, required: false
  private _gitlabUrl?: string; 
  public get gitlabUrl() {
    return this.getStringAttribute('gitlab_url');
  }
  public set gitlabUrl(value: string) {
    this._gitlabUrl = value;
  }
  public resetGitlabUrl() {
    this._gitlabUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabUrlInput() {
    return this._gitlabUrl;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // installation_organization - computed: false, optional: true, required: false
  private _installationOrganization?: string; 
  public get installationOrganization() {
    return this.getStringAttribute('installation_organization');
  }
  public set installationOrganization(value: string) {
    this._installationOrganization = value;
  }
  public resetInstallationOrganization() {
    this._installationOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationOrganizationInput() {
    return this._installationOrganization;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      gitlab_access_token: cdktf.stringToTerraform(this._gitlabAccessToken),
      gitlab_access_type: cdktf.stringToTerraform(this._gitlabAccessType),
      gitlab_certificate: cdktf.stringToTerraform(this._gitlabCertificate),
      gitlab_role: cdktf.stringToTerraform(this._gitlabRole),
      gitlab_token_scopes: cdktf.stringToTerraform(this._gitlabTokenScopes),
      gitlab_url: cdktf.stringToTerraform(this._gitlabUrl),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      installation_organization: cdktf.stringToTerraform(this._installationOrganization),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      ttl: cdktf.stringToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_access_token: {
        value: cdktf.stringToHclTerraform(this._gitlabAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_access_type: {
        value: cdktf.stringToHclTerraform(this._gitlabAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_certificate: {
        value: cdktf.stringToHclTerraform(this._gitlabCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_role: {
        value: cdktf.stringToHclTerraform(this._gitlabRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_token_scopes: {
        value: cdktf.stringToHclTerraform(this._gitlabTokenScopes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gitlab_url: {
        value: cdktf.stringToHclTerraform(this._gitlabUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      installation_organization: {
        value: cdktf.stringToHclTerraform(this._installationOrganization),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
