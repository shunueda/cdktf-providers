// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/data-sources/azure_dev_ops_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudAzureDevOpsRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The internal Azure Dev Ops ID of the ADO Project. Can be retrieved using the data source dbtcloud_azure_dev_ops_project and the project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/data-sources/azure_dev_ops_repository#azure_dev_ops_project_id DataDbtcloudAzureDevOpsRepository#azure_dev_ops_project_id}
  */
  readonly azureDevOpsProjectId: string;
  /**
  * The name of the ADO repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/data-sources/azure_dev_ops_repository#name DataDbtcloudAzureDevOpsRepository#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/data-sources/azure_dev_ops_repository dbtcloud_azure_dev_ops_repository}
*/
export class DataDbtcloudAzureDevOpsRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_azure_dev_ops_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudAzureDevOpsRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudAzureDevOpsRepository to import
  * @param importFromId The id of the existing DataDbtcloudAzureDevOpsRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/data-sources/azure_dev_ops_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudAzureDevOpsRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_azure_dev_ops_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/data-sources/azure_dev_ops_repository dbtcloud_azure_dev_ops_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudAzureDevOpsRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudAzureDevOpsRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_azure_dev_ops_repository',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureDevOpsProjectId = config.azureDevOpsProjectId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_dev_ops_project_id - computed: false, optional: false, required: true
  private _azureDevOpsProjectId?: string; 
  public get azureDevOpsProjectId() {
    return this.getStringAttribute('azure_dev_ops_project_id');
  }
  public set azureDevOpsProjectId(value: string) {
    this._azureDevOpsProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevOpsProjectIdInput() {
    return this._azureDevOpsProjectId;
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // details_url - computed: true, optional: false, required: false
  public get detailsUrl() {
    return this.getStringAttribute('details_url');
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

  // remote_url - computed: true, optional: false, required: false
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_dev_ops_project_id: cdktf.stringToTerraform(this._azureDevOpsProjectId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_dev_ops_project_id: {
        value: cdktf.stringToHclTerraform(this._azureDevOpsProjectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
