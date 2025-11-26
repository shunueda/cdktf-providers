// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/data-sources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether we should return the public deploy key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/data-sources/repository#fetch_deploy_key DataDbtcloudRepository#fetch_deploy_key}
  */
  readonly fetchDeployKey?: boolean | cdktf.IResolvable;
  /**
  * Project ID to create the repository in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/data-sources/repository#project_id DataDbtcloudRepository#project_id}
  */
  readonly projectId: number;
  /**
  * ID for the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/data-sources/repository#repository_id DataDbtcloudRepository#repository_id}
  */
  readonly repositoryId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/data-sources/repository dbtcloud_repository}
*/
export class DataDbtcloudRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudRepository to import
  * @param importFromId The id of the existing DataDbtcloudRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/data-sources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/data-sources/repository dbtcloud_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_repository',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fetchDeployKey = config.fetchDeployKey;
    this._projectId = config.projectId;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_active_directory_project_id - computed: true, optional: false, required: false
  public get azureActiveDirectoryProjectId() {
    return this.getStringAttribute('azure_active_directory_project_id');
  }

  // azure_active_directory_repository_id - computed: true, optional: false, required: false
  public get azureActiveDirectoryRepositoryId() {
    return this.getStringAttribute('azure_active_directory_repository_id');
  }

  // azure_bypass_webhook_registration_failure - computed: true, optional: false, required: false
  public get azureBypassWebhookRegistrationFailure() {
    return this.getBooleanAttribute('azure_bypass_webhook_registration_failure');
  }

  // deploy_key - computed: true, optional: false, required: false
  public get deployKey() {
    return this.getStringAttribute('deploy_key');
  }

  // fetch_deploy_key - computed: true, optional: true, required: false
  private _fetchDeployKey?: boolean | cdktf.IResolvable; 
  public get fetchDeployKey() {
    return this.getBooleanAttribute('fetch_deploy_key');
  }
  public set fetchDeployKey(value: boolean | cdktf.IResolvable) {
    this._fetchDeployKey = value;
  }
  public resetFetchDeployKey() {
    this._fetchDeployKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchDeployKeyInput() {
    return this._fetchDeployKey;
  }

  // git_clone_strategy - computed: true, optional: false, required: false
  public get gitCloneStrategy() {
    return this.getStringAttribute('git_clone_strategy');
  }

  // github_installation_id - computed: true, optional: false, required: false
  public get githubInstallationId() {
    return this.getNumberAttribute('github_installation_id');
  }

  // gitlab_project_id - computed: true, optional: false, required: false
  public get gitlabProjectId() {
    return this.getNumberAttribute('gitlab_project_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // private_link_endpoint_id - computed: true, optional: false, required: false
  public get privateLinkEndpointId() {
    return this.getStringAttribute('private_link_endpoint_id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // pull_request_url_template - computed: true, optional: false, required: false
  public get pullRequestUrlTemplate() {
    return this.getStringAttribute('pull_request_url_template');
  }

  // remote_url - computed: true, optional: false, required: false
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }

  // repository_credentials_id - computed: true, optional: false, required: false
  public get repositoryCredentialsId() {
    return this.getNumberAttribute('repository_credentials_id');
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: number; 
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }
  public set repositoryId(value: number) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fetch_deploy_key: cdktf.booleanToTerraform(this._fetchDeployKey),
      project_id: cdktf.numberToTerraform(this._projectId),
      repository_id: cdktf.numberToTerraform(this._repositoryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fetch_deploy_key: {
        value: cdktf.booleanToHclTerraform(this._fetchDeployKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repository_id: {
        value: cdktf.numberToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
