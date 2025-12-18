// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/environment#environment_id DataDbtcloudEnvironment#environment_id}
  */
  readonly environmentId: number;
  /**
  * The project ID to which the environment belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/environment#project_id DataDbtcloudEnvironment#project_id}
  */
  readonly projectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/environment dbtcloud_environment}
*/
export class DataDbtcloudEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudEnvironment to import
  * @param importFromId The id of the existing DataDbtcloudEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/environment dbtcloud_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_environment',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getNumberAttribute('connection_id');
  }

  // credentials_id - computed: true, optional: false, required: false
  public get credentialsId() {
    return this.getNumberAttribute('credentials_id');
  }

  // custom_branch - computed: true, optional: false, required: false
  public get customBranch() {
    return this.getStringAttribute('custom_branch');
  }

  // dbt_version - computed: true, optional: false, required: false
  public get dbtVersion() {
    return this.getStringAttribute('dbt_version');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // enable_model_query_history - computed: true, optional: false, required: false
  public get enableModelQueryHistory() {
    return this.getBooleanAttribute('enable_model_query_history');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: number; 
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }
  public set environmentId(value: number) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // extended_attributes_id - computed: true, optional: false, required: false
  public get extendedAttributesId() {
    return this.getNumberAttribute('extended_attributes_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_custom_branch - computed: true, optional: false, required: false
  public get useCustomBranch() {
    return this.getBooleanAttribute('use_custom_branch');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.numberToTerraform(this._environmentId),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.numberToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
