// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/partial_environment_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartialEnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map from environment names to respective variable value. This field is not set as sensitive so take precautions when using secret environment variables. Only the specified environment values will be managed by this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/partial_environment_variable#environment_values PartialEnvironmentVariable#environment_values}
  */
  readonly environmentValues: { [key: string]: string };
  /**
  * Name for the variable, must be unique within a project, must be prefixed with 'DBT_'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/partial_environment_variable#name PartialEnvironmentVariable#name}
  */
  readonly name: string;
  /**
  * Project ID to create or update the environment variable in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/partial_environment_variable#project_id PartialEnvironmentVariable#project_id}
  */
  readonly projectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/partial_environment_variable dbtcloud_partial_environment_variable}
*/
export class PartialEnvironmentVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_partial_environment_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PartialEnvironmentVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PartialEnvironmentVariable to import
  * @param importFromId The id of the existing PartialEnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/partial_environment_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PartialEnvironmentVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_partial_environment_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/partial_environment_variable dbtcloud_partial_environment_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartialEnvironmentVariableConfig
  */
  public constructor(scope: Construct, id: string, config: PartialEnvironmentVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_partial_environment_variable',
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
    this._environmentValues = config.environmentValues;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_values - computed: false, optional: false, required: true
  private _environmentValues?: { [key: string]: string }; 
  public get environmentValues() {
    return this.getStringMapAttribute('environment_values');
  }
  public set environmentValues(value: { [key: string]: string }) {
    this._environmentValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentValuesInput() {
    return this._environmentValues;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentValues),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
