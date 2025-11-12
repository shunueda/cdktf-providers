// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_gitops_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountGitopsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Git provider name - currently supported values are: GITHUB ,GERRIT ,GITLAB ,BITBUCKET ,BITBUCKET_SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_gitops_settings#git_provider AccountGitopsSettings#git_provider}
  */
  readonly gitProvider: string;
  /**
  * Git provider API url. If not provided can automatically be set for known SaaS git providers. For example - for github it will be set to https://api.github.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_gitops_settings#git_provider_api_url AccountGitopsSettings#git_provider_api_url}
  */
  readonly gitProviderApiUrl?: string;
  /**
  * Shared config repository url. Must be a valid git url which contains `.git`. May also include path and branch references
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_gitops_settings#shared_config_repository AccountGitopsSettings#shared_config_repository}
  */
  readonly sharedConfigRepository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_gitops_settings codefresh_account_gitops_settings}
*/
export class AccountGitopsSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_account_gitops_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountGitopsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountGitopsSettings to import
  * @param importFromId The id of the existing AccountGitopsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_gitops_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountGitopsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_account_gitops_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_gitops_settings codefresh_account_gitops_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountGitopsSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AccountGitopsSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_account_gitops_settings',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
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
    this._gitProvider = config.gitProvider;
    this._gitProviderApiUrl = config.gitProviderApiUrl;
    this._sharedConfigRepository = config.sharedConfigRepository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_provider - computed: false, optional: false, required: true
  private _gitProvider?: string; 
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }
  public set gitProvider(value: string) {
    this._gitProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderInput() {
    return this._gitProvider;
  }

  // git_provider_api_url - computed: false, optional: true, required: false
  private _gitProviderApiUrl?: string; 
  public get gitProviderApiUrl() {
    return this.getStringAttribute('git_provider_api_url');
  }
  public set gitProviderApiUrl(value: string) {
    this._gitProviderApiUrl = value;
  }
  public resetGitProviderApiUrl() {
    this._gitProviderApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderApiUrlInput() {
    return this._gitProviderApiUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_config_repository - computed: false, optional: false, required: true
  private _sharedConfigRepository?: string; 
  public get sharedConfigRepository() {
    return this.getStringAttribute('shared_config_repository');
  }
  public set sharedConfigRepository(value: string) {
    this._sharedConfigRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedConfigRepositoryInput() {
    return this._sharedConfigRepository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      git_provider: cdktf.stringToTerraform(this._gitProvider),
      git_provider_api_url: cdktf.stringToTerraform(this._gitProviderApiUrl),
      shared_config_repository: cdktf.stringToTerraform(this._sharedConfigRepository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      git_provider: {
        value: cdktf.stringToHclTerraform(this._gitProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_provider_api_url: {
        value: cdktf.stringToHclTerraform(this._gitProviderApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_config_repository: {
        value: cdktf.stringToHclTerraform(this._sharedConfigRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
