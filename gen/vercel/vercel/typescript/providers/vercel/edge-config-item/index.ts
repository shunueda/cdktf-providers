// https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeConfigItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Edge Config store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item#edge_config_id EdgeConfigItem#edge_config_id}
  */
  readonly edgeConfigId: string;
  /**
  * The name of the key you want to add to or update within your Edge Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item#key EdgeConfigItem#key}
  */
  readonly key: string;
  /**
  * The ID of the team the Edge Config should exist under. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item#team_id EdgeConfigItem#team_id}
  */
  readonly teamId?: string;
  /**
  * The value you want to assign to the key when using a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item#value EdgeConfigItem#value}
  */
  readonly value?: string;
  /**
  * Structured JSON value to assign to the key (object/array/number/bool/null).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item#value_json EdgeConfigItem#value_json}
  */
  readonly valueJson?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item vercel_edge_config_item}
*/
export class EdgeConfigItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_edge_config_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeConfigItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeConfigItem to import
  * @param importFromId The id of the existing EdgeConfigItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeConfigItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_edge_config_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/resources/edge_config_item vercel_edge_config_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeConfigItemConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeConfigItemConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_edge_config_item',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.1',
        providerVersionConstraint: '4.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeConfigId = config.edgeConfigId;
    this._key = config.key;
    this._teamId = config.teamId;
    this._value = config.value;
    this._valueJson = config.valueJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_config_id - computed: false, optional: false, required: true
  private _edgeConfigId?: string; 
  public get edgeConfigId() {
    return this.getStringAttribute('edge_config_id');
  }
  public set edgeConfigId(value: string) {
    this._edgeConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeConfigIdInput() {
    return this._edgeConfigId;
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

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_json - computed: true, optional: true, required: false
  private _valueJson?: { [key: string]: any }; 
  public get valueJson() {
    return this.getAnyMapAttribute('value_json');
  }
  public set valueJson(value: { [key: string]: any }) {
    this._valueJson = value;
  }
  public resetValueJson() {
    this._valueJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueJsonInput() {
    return this._valueJson;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_config_id: cdktf.stringToTerraform(this._edgeConfigId),
      key: cdktf.stringToTerraform(this._key),
      team_id: cdktf.stringToTerraform(this._teamId),
      value: cdktf.stringToTerraform(this._value),
      value_json: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_config_id: {
        value: cdktf.stringToHclTerraform(this._edgeConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_json: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._valueJson),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
