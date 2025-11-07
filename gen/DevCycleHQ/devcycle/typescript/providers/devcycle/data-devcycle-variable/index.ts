// https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDevcycleVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Variable key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/variable#key DataDevcycleVariable#key}
  */
  readonly key: string;
  /**
  * Project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/variable#project_key DataDevcycleVariable#project_key}
  */
  readonly projectKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/variable devcycle_variable}
*/
export class DataDevcycleVariable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "devcycle_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDevcycleVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDevcycleVariable to import
  * @param importFromId The id of the existing DataDevcycleVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDevcycleVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "devcycle_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/variable devcycle_variable} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDevcycleVariableConfig
  */
  public constructor(scope: Construct, id: string, config: DataDevcycleVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'devcycle_variable',
      terraformGeneratorMetadata: {
        providerName: 'devcycle',
        providerVersion: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._projectKey = config.projectKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // feature_id - computed: true, optional: false, required: false
  public get featureId() {
    return this.getStringAttribute('feature_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      project_key: cdktf.stringToTerraform(this._projectKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
