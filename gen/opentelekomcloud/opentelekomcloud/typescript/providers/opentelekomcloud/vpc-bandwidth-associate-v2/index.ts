// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcBandwidthAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2#backup_charge_mode VpcBandwidthAssociateV2#backup_charge_mode}
  */
  readonly backupChargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2#backup_size VpcBandwidthAssociateV2#backup_size}
  */
  readonly backupSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2#bandwidth VpcBandwidthAssociateV2#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2#floating_ips VpcBandwidthAssociateV2#floating_ips}
  */
  readonly floatingIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2#id VpcBandwidthAssociateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2 opentelekomcloud_vpc_bandwidth_associate_v2}
*/
export class VpcBandwidthAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpc_bandwidth_associate_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcBandwidthAssociateV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcBandwidthAssociateV2 to import
  * @param importFromId The id of the existing VpcBandwidthAssociateV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcBandwidthAssociateV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_vpc_bandwidth_associate_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/vpc_bandwidth_associate_v2 opentelekomcloud_vpc_bandwidth_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcBandwidthAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: VpcBandwidthAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_bandwidth_associate_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupChargeMode = config.backupChargeMode;
    this._backupSize = config.backupSize;
    this._bandwidth = config.bandwidth;
    this._floatingIps = config.floatingIps;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_charge_mode - computed: false, optional: true, required: false
  private _backupChargeMode?: string; 
  public get backupChargeMode() {
    return this.getStringAttribute('backup_charge_mode');
  }
  public set backupChargeMode(value: string) {
    this._backupChargeMode = value;
  }
  public resetBackupChargeMode() {
    this._backupChargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupChargeModeInput() {
    return this._backupChargeMode;
  }

  // backup_size - computed: false, optional: true, required: false
  private _backupSize?: number; 
  public get backupSize() {
    return this.getNumberAttribute('backup_size');
  }
  public set backupSize(value: number) {
    this._backupSize = value;
  }
  public resetBackupSize() {
    this._backupSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSizeInput() {
    return this._backupSize;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // floating_ips - computed: false, optional: false, required: true
  private _floatingIps?: string[]; 
  public get floatingIps() {
    return cdktf.Fn.tolist(this.getListAttribute('floating_ips'));
  }
  public set floatingIps(value: string[]) {
    this._floatingIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpsInput() {
    return this._floatingIps;
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
      backup_charge_mode: cdktf.stringToTerraform(this._backupChargeMode),
      backup_size: cdktf.numberToTerraform(this._backupSize),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      floating_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._floatingIps),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_charge_mode: {
        value: cdktf.stringToHclTerraform(this._backupChargeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_size: {
        value: cdktf.numberToHclTerraform(this._backupSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._floatingIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
