// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_asset_sync_flag_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BhAssetSyncFlagConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable asset auto-sync, false - disabled, true - enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_asset_sync_flag_config#auto_sync BhAssetSyncFlagConfig#auto_sync}
  */
  readonly autoSync: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_asset_sync_flag_config#id BhAssetSyncFlagConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_asset_sync_flag_config tencentcloud_bh_asset_sync_flag_config}
*/
export class BhAssetSyncFlagConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_asset_sync_flag_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BhAssetSyncFlagConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BhAssetSyncFlagConfig to import
  * @param importFromId The id of the existing BhAssetSyncFlagConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_asset_sync_flag_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BhAssetSyncFlagConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_asset_sync_flag_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_asset_sync_flag_config tencentcloud_bh_asset_sync_flag_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BhAssetSyncFlagConfigConfig
  */
  public constructor(scope: Construct, id: string, config: BhAssetSyncFlagConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_asset_sync_flag_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSync = config.autoSync;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_sync - computed: false, optional: false, required: true
  private _autoSync?: boolean | cdktf.IResolvable; 
  public get autoSync() {
    return this.getBooleanAttribute('auto_sync');
  }
  public set autoSync(value: boolean | cdktf.IResolvable) {
    this._autoSync = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncInput() {
    return this._autoSync;
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

  // role_granted - computed: true, optional: false, required: false
  public get roleGranted() {
    return this.getBooleanAttribute('role_granted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_sync: cdktf.booleanToTerraform(this._autoSync),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_sync: {
        value: cdktf.booleanToHclTerraform(this._autoSync),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
