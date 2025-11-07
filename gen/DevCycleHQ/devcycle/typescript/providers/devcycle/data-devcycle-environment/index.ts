// https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDevcycleEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Environment Key (Human readable id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/environment#key DataDevcycleEnvironment#key}
  */
  readonly key: string;
  /**
  * Project key or id of the project to which the environment belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/environment#project_key DataDevcycleEnvironment#project_key}
  */
  readonly projectKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/environment devcycle_environment}
*/
export class DataDevcycleEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "devcycle_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDevcycleEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDevcycleEnvironment to import
  * @param importFromId The id of the existing DataDevcycleEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDevcycleEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "devcycle_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/environment devcycle_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDevcycleEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataDevcycleEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'devcycle_environment',
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

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // sdk_keys - computed: true, optional: false, required: false
  public get sdkKeys() {
    return this.getListAttribute('sdk_keys');
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
