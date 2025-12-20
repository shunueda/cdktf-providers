// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_reconnection_setting_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BhReconnectionSettingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * true: limit reconnection count, false: do not limit reconnection count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_reconnection_setting_config#enable BhReconnectionSettingConfig#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_reconnection_setting_config#id BhReconnectionSettingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retry count, value range: 0-20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_reconnection_setting_config#reconnection_max_count BhReconnectionSettingConfig#reconnection_max_count}
  */
  readonly reconnectionMaxCount: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_reconnection_setting_config tencentcloud_bh_reconnection_setting_config}
*/
export class BhReconnectionSettingConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_reconnection_setting_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BhReconnectionSettingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BhReconnectionSettingConfig to import
  * @param importFromId The id of the existing BhReconnectionSettingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_reconnection_setting_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BhReconnectionSettingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_reconnection_setting_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_reconnection_setting_config tencentcloud_bh_reconnection_setting_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BhReconnectionSettingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: BhReconnectionSettingConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_reconnection_setting_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._reconnectionMaxCount = config.reconnectionMaxCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // reconnection_max_count - computed: false, optional: false, required: true
  private _reconnectionMaxCount?: number; 
  public get reconnectionMaxCount() {
    return this.getNumberAttribute('reconnection_max_count');
  }
  public set reconnectionMaxCount(value: number) {
    this._reconnectionMaxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnectionMaxCountInput() {
    return this._reconnectionMaxCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      reconnection_max_count: cdktf.numberToTerraform(this._reconnectionMaxCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reconnection_max_count: {
        value: cdktf.numberToHclTerraform(this._reconnectionMaxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
