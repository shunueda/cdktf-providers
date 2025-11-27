// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BmcEipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of zone that the EIP locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip#availability_zone BmcEip#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * The tenancy (time unit is month) of the prepaid EIP, NOTE: it only works when eip_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip#eip_charge_prepaid_period BmcEip#eip_charge_prepaid_period}
  */
  readonly eipChargePrepaidPeriod?: number;
  /**
  * The charge type of EIP. Valid values are `PREPAID`, `POSTPAID`. The default is `POSTPAID`. Note: `PREPAID` EIP may not allow to delete before expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip#eip_charge_type BmcEip#eip_charge_type}
  */
  readonly eipChargeType?: string;
  /**
  * Indicate whether to force delete the EIP. Default is `false`. If set true, the EIP will be permanently deleted instead of being moved into the recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip#force_delete BmcEip#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip#id BmcEip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource group id the EIP belongs to, default to Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip#resource_group_id BmcEip#resource_group_id}
  */
  readonly resourceGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip zenlayercloud_bmc_eip}
*/
export class BmcEip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_bmc_eip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BmcEip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BmcEip to import
  * @param importFromId The id of the existing BmcEip that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BmcEip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_bmc_eip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/resources/bmc_eip zenlayercloud_bmc_eip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BmcEipConfig
  */
  public constructor(scope: Construct, id: string, config: BmcEipConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_bmc_eip',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._eipChargePrepaidPeriod = config.eipChargePrepaidPeriod;
    this._eipChargeType = config.eipChargeType;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._resourceGroupId = config.resourceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eip_charge_prepaid_period - computed: false, optional: true, required: false
  private _eipChargePrepaidPeriod?: number; 
  public get eipChargePrepaidPeriod() {
    return this.getNumberAttribute('eip_charge_prepaid_period');
  }
  public set eipChargePrepaidPeriod(value: number) {
    this._eipChargePrepaidPeriod = value;
  }
  public resetEipChargePrepaidPeriod() {
    this._eipChargePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipChargePrepaidPeriodInput() {
    return this._eipChargePrepaidPeriod;
  }

  // eip_charge_type - computed: false, optional: true, required: false
  private _eipChargeType?: string; 
  public get eipChargeType() {
    return this.getStringAttribute('eip_charge_type');
  }
  public set eipChargeType(value: string) {
    this._eipChargeType = value;
  }
  public resetEipChargeType() {
    this._eipChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipChargeTypeInput() {
    return this._eipChargeType;
  }

  // eip_status - computed: true, optional: false, required: false
  public get eipStatus() {
    return this.getStringAttribute('eip_status');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      eip_charge_prepaid_period: cdktf.numberToTerraform(this._eipChargePrepaidPeriod),
      eip_charge_type: cdktf.stringToTerraform(this._eipChargeType),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip_charge_prepaid_period: {
        value: cdktf.numberToHclTerraform(this._eipChargePrepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eip_charge_type: {
        value: cdktf.stringToHclTerraform(this._eipChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
