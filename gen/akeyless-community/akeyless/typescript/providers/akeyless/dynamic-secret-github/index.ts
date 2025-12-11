// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Github application id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#github_app_id DynamicSecretGithub#github_app_id}
  */
  readonly githubAppId?: number;
  /**
  * Github application private key (base64 encoded key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#github_app_private_key DynamicSecretGithub#github_app_private_key}
  */
  readonly githubAppPrivateKey?: string;
  /**
  * Github base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#github_base_url DynamicSecretGithub#github_base_url}
  */
  readonly githubBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#id DynamicSecretGithub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Github application installation id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#installation_id DynamicSecretGithub#installation_id}
  */
  readonly installationId?: number;
  /**
  * Instead of installation id, set a GitHub organization name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#installation_organization DynamicSecretGithub#installation_organization}
  */
  readonly installationOrganization?: string;
  /**
  * Instead of installation id, set a GitHub repository '<owner>/<repo-name>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#installation_repository DynamicSecretGithub#installation_repository}
  */
  readonly installationRepository?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#name DynamicSecretGithub#name}
  */
  readonly name: string;
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#target_name DynamicSecretGithub#target_name}
  */
  readonly targetName?: string;
  /**
  * Tokens' allowed permissions. By default use installation allowed permissions. Input format: key=value pairs or JSON strings, e.g - -p contents=read -p issues=write or -p '{content:read}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#token_permissions DynamicSecretGithub#token_permissions}
  */
  readonly tokenPermissions?: string[];
  /**
  * Tokens' allowed repositories. By default use installation allowed repositories. To specify multiple repositories use argument multiple times: -r RepoName1 -r RepoName2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#token_repositories DynamicSecretGithub#token_repositories}
  */
  readonly tokenRepositories?: string[];
  /**
  * Token TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#token_ttl DynamicSecretGithub#token_ttl}
  */
  readonly tokenTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github akeyless_dynamic_secret_github}
*/
export class DynamicSecretGithub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretGithub to import
  * @param importFromId The id of the existing DynamicSecretGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_github akeyless_dynamic_secret_github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretGithubConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_github',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._githubAppId = config.githubAppId;
    this._githubAppPrivateKey = config.githubAppPrivateKey;
    this._githubBaseUrl = config.githubBaseUrl;
    this._id = config.id;
    this._installationId = config.installationId;
    this._installationOrganization = config.installationOrganization;
    this._installationRepository = config.installationRepository;
    this._name = config.name;
    this._targetName = config.targetName;
    this._tokenPermissions = config.tokenPermissions;
    this._tokenRepositories = config.tokenRepositories;
    this._tokenTtl = config.tokenTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // github_app_id - computed: false, optional: true, required: false
  private _githubAppId?: number; 
  public get githubAppId() {
    return this.getNumberAttribute('github_app_id');
  }
  public set githubAppId(value: number) {
    this._githubAppId = value;
  }
  public resetGithubAppId() {
    this._githubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppIdInput() {
    return this._githubAppId;
  }

  // github_app_private_key - computed: false, optional: true, required: false
  private _githubAppPrivateKey?: string; 
  public get githubAppPrivateKey() {
    return this.getStringAttribute('github_app_private_key');
  }
  public set githubAppPrivateKey(value: string) {
    this._githubAppPrivateKey = value;
  }
  public resetGithubAppPrivateKey() {
    this._githubAppPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppPrivateKeyInput() {
    return this._githubAppPrivateKey;
  }

  // github_base_url - computed: false, optional: true, required: false
  private _githubBaseUrl?: string; 
  public get githubBaseUrl() {
    return this.getStringAttribute('github_base_url');
  }
  public set githubBaseUrl(value: string) {
    this._githubBaseUrl = value;
  }
  public resetGithubBaseUrl() {
    this._githubBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubBaseUrlInput() {
    return this._githubBaseUrl;
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

  // installation_id - computed: false, optional: true, required: false
  private _installationId?: number; 
  public get installationId() {
    return this.getNumberAttribute('installation_id');
  }
  public set installationId(value: number) {
    this._installationId = value;
  }
  public resetInstallationId() {
    this._installationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
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

  // installation_repository - computed: false, optional: true, required: false
  private _installationRepository?: string; 
  public get installationRepository() {
    return this.getStringAttribute('installation_repository');
  }
  public set installationRepository(value: string) {
    this._installationRepository = value;
  }
  public resetInstallationRepository() {
    this._installationRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationRepositoryInput() {
    return this._installationRepository;
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

  // token_permissions - computed: false, optional: true, required: false
  private _tokenPermissions?: string[]; 
  public get tokenPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('token_permissions'));
  }
  public set tokenPermissions(value: string[]) {
    this._tokenPermissions = value;
  }
  public resetTokenPermissions() {
    this._tokenPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPermissionsInput() {
    return this._tokenPermissions;
  }

  // token_repositories - computed: false, optional: true, required: false
  private _tokenRepositories?: string[]; 
  public get tokenRepositories() {
    return cdktf.Fn.tolist(this.getListAttribute('token_repositories'));
  }
  public set tokenRepositories(value: string[]) {
    this._tokenRepositories = value;
  }
  public resetTokenRepositories() {
    this._tokenRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRepositoriesInput() {
    return this._tokenRepositories;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: string; 
  public get tokenTtl() {
    return this.getStringAttribute('token_ttl');
  }
  public set tokenTtl(value: string) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      github_app_id: cdktf.numberToTerraform(this._githubAppId),
      github_app_private_key: cdktf.stringToTerraform(this._githubAppPrivateKey),
      github_base_url: cdktf.stringToTerraform(this._githubBaseUrl),
      id: cdktf.stringToTerraform(this._id),
      installation_id: cdktf.numberToTerraform(this._installationId),
      installation_organization: cdktf.stringToTerraform(this._installationOrganization),
      installation_repository: cdktf.stringToTerraform(this._installationRepository),
      name: cdktf.stringToTerraform(this._name),
      target_name: cdktf.stringToTerraform(this._targetName),
      token_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenPermissions),
      token_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenRepositories),
      token_ttl: cdktf.stringToTerraform(this._tokenTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      github_app_id: {
        value: cdktf.numberToHclTerraform(this._githubAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      github_app_private_key: {
        value: cdktf.stringToHclTerraform(this._githubAppPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_base_url: {
        value: cdktf.stringToHclTerraform(this._githubBaseUrl),
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
      installation_id: {
        value: cdktf.numberToHclTerraform(this._installationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      installation_organization: {
        value: cdktf.stringToHclTerraform(this._installationOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation_repository: {
        value: cdktf.stringToHclTerraform(this._installationRepository),
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
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenRepositories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_ttl: {
        value: cdktf.stringToHclTerraform(this._tokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
