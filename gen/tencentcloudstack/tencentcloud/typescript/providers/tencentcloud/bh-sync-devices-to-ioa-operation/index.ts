// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_sync_devices_to_ioa_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BhSyncDevicesToIoaOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Asset ID collection. Assets must be bound to bastion host instances that support IOA functionality. Maximum 200 assets can be synchronized at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_sync_devices_to_ioa_operation#device_id_set BhSyncDevicesToIoaOperation#device_id_set}
  */
  readonly deviceIdSet: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_sync_devices_to_ioa_operation#id BhSyncDevicesToIoaOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_sync_devices_to_ioa_operation tencentcloud_bh_sync_devices_to_ioa_operation}
*/
export class BhSyncDevicesToIoaOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_sync_devices_to_ioa_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BhSyncDevicesToIoaOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BhSyncDevicesToIoaOperation to import
  * @param importFromId The id of the existing BhSyncDevicesToIoaOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_sync_devices_to_ioa_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BhSyncDevicesToIoaOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_sync_devices_to_ioa_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/bh_sync_devices_to_ioa_operation tencentcloud_bh_sync_devices_to_ioa_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BhSyncDevicesToIoaOperationConfig
  */
  public constructor(scope: Construct, id: string, config: BhSyncDevicesToIoaOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_sync_devices_to_ioa_operation',
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
    this._deviceIdSet = config.deviceIdSet;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id_set - computed: false, optional: false, required: true
  private _deviceIdSet?: number[]; 
  public get deviceIdSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('device_id_set')));
  }
  public set deviceIdSet(value: number[]) {
    this._deviceIdSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdSetInput() {
    return this._deviceIdSet;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceIdSet),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
