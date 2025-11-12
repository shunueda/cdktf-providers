// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentVariableJobOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * The job ID for which the environment variable is being overridden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override#job_definition_id EnvironmentVariableJobOverride#job_definition_id}
  */
  readonly jobDefinitionId: number;
  /**
  * The environment variable name to override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override#name EnvironmentVariableJobOverride#name}
  */
  readonly name: string;
  /**
  * Project ID to create the environment variable job override in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override#project_id EnvironmentVariableJobOverride#project_id}
  */
  readonly projectId: number;
  /**
  * The value for the override of the environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override#raw_value EnvironmentVariableJobOverride#raw_value}
  */
  readonly rawValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override dbtcloud_environment_variable_job_override}
*/
export class EnvironmentVariableJobOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_environment_variable_job_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentVariableJobOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentVariableJobOverride to import
  * @param importFromId The id of the existing EnvironmentVariableJobOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentVariableJobOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_environment_variable_job_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/environment_variable_job_override dbtcloud_environment_variable_job_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentVariableJobOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentVariableJobOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_environment_variable_job_override',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jobDefinitionId = config.jobDefinitionId;
    this._name = config.name;
    this._projectId = config.projectId;
    this._rawValue = config.rawValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // environment_variable_job_override_id - computed: true, optional: false, required: false
  public get environmentVariableJobOverrideId() {
    return this.getNumberAttribute('environment_variable_job_override_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_definition_id - computed: false, optional: false, required: true
  private _jobDefinitionId?: number; 
  public get jobDefinitionId() {
    return this.getNumberAttribute('job_definition_id');
  }
  public set jobDefinitionId(value: number) {
    this._jobDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionIdInput() {
    return this._jobDefinitionId;
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

  // raw_value - computed: false, optional: false, required: true
  private _rawValue?: string; 
  public get rawValue() {
    return this.getStringAttribute('raw_value');
  }
  public set rawValue(value: string) {
    this._rawValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawValueInput() {
    return this._rawValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      job_definition_id: cdktf.numberToTerraform(this._jobDefinitionId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      raw_value: cdktf.stringToTerraform(this._rawValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      job_definition_id: {
        value: cdktf.numberToHclTerraform(this._jobDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      raw_value: {
        value: cdktf.stringToHclTerraform(this._rawValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
