// https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the cluster to create the resource into. If omitted, resource will be created on the replica hit by the query.
  * This field must be left null when using a ClickHouse Cloud cluster.
  * When using a self hosted ClickHouse instance, this field should only be set when there is more than one replica and you are not using 'replicated' storage for user_directory.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#cluster_name Setting#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Max Value for the setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#max Setting#max}
  */
  readonly max?: string;
  /**
  * Min Value for the setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#min Setting#min}
  */
  readonly min?: string;
  /**
  * Name of the setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#name Setting#name}
  */
  readonly name: string;
  /**
  * ID of the settings profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#settings_profile_id Setting#settings_profile_id}
  */
  readonly settingsProfileId: string;
  /**
  * Value for the setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#value Setting#value}
  */
  readonly value?: string;
  /**
  * Writability attribute for the setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#writability Setting#writability}
  */
  readonly writability?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting clickhousedbops_setting}
*/
export class Setting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhousedbops_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Setting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Setting to import
  * @param importFromId The id of the existing Setting that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Setting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhousedbops_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs/resources/setting clickhousedbops_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingConfig
  */
  public constructor(scope: Construct, id: string, config: SettingConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhousedbops_setting',
      terraformGeneratorMetadata: {
        providerName: 'clickhousedbops',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._max = config.max;
    this._min = config.min;
    this._name = config.name;
    this._settingsProfileId = config.settingsProfileId;
    this._value = config.value;
    this._writability = config.writability;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // settings_profile_id - computed: false, optional: false, required: true
  private _settingsProfileId?: string; 
  public get settingsProfileId() {
    return this.getStringAttribute('settings_profile_id');
  }
  public set settingsProfileId(value: string) {
    this._settingsProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsProfileIdInput() {
    return this._settingsProfileId;
  }

  // value - computed: false, optional: true, required: false
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

  // writability - computed: false, optional: true, required: false
  private _writability?: string; 
  public get writability() {
    return this.getStringAttribute('writability');
  }
  public set writability(value: string) {
    this._writability = value;
  }
  public resetWritability() {
    this._writability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writabilityInput() {
    return this._writability;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      max: cdktf.stringToTerraform(this._max),
      min: cdktf.stringToTerraform(this._min),
      name: cdktf.stringToTerraform(this._name),
      settings_profile_id: cdktf.stringToTerraform(this._settingsProfileId),
      value: cdktf.stringToTerraform(this._value),
      writability: cdktf.stringToTerraform(this._writability),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max: {
        value: cdktf.stringToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min: {
        value: cdktf.stringToHclTerraform(this._min),
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
      settings_profile_id: {
        value: cdktf.stringToHclTerraform(this._settingsProfileId),
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
      writability: {
        value: cdktf.stringToHclTerraform(this._writability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
