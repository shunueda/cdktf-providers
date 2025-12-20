// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * description of clb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#description TseCngwNetwork#description}
  */
  readonly description?: string;
  /**
  * gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#gateway_id TseCngwNetwork#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * gateway group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#group_id TseCngwNetwork#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#id TseCngwNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * internet type. Reference value:`IPV4` (default value), `IPV6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#internet_address_version TseCngwNetwork#internet_address_version}
  */
  readonly internetAddressVersion?: string;
  /**
  * public network bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#internet_max_bandwidth_out TseCngwNetwork#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * trade type of internet. Reference value:`BANDWIDTH` (default value), `TRAFFIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#internet_pay_mode TseCngwNetwork#internet_pay_mode}
  */
  readonly internetPayMode?: string;
  /**
  * primary availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#master_zone_id TseCngwNetwork#master_zone_id}
  */
  readonly masterZoneId?: string;
  /**
  * Whether load balancing has multiple availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#multi_zone_flag TseCngwNetwork#multi_zone_flag}
  */
  readonly multiZoneFlag?: boolean | cdktf.IResolvable;
  /**
  * specification type of clb. Default `shared` type when this parameter is empty, Note: input `shared` is not supported when creating. Reference value:`clb.c2.medium`, `clb.c3.small`, `clb.c3.medium`, `clb.c4.small`, `clb.c4.medium`, `clb.c4.large`, `clb.c4.xlarge`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#sla_type TseCngwNetwork#sla_type}
  */
  readonly slaType?: string;
  /**
  * alternate availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#slave_zone_id TseCngwNetwork#slave_zone_id}
  */
  readonly slaveZoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network tencentcloud_tse_cngw_network}
*/
export class TseCngwNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwNetwork to import
  * @param importFromId The id of the existing TseCngwNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network tencentcloud_tse_cngw_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_network',
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
    this._description = config.description;
    this._gatewayId = config.gatewayId;
    this._groupId = config.groupId;
    this._id = config.id;
    this._internetAddressVersion = config.internetAddressVersion;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._internetPayMode = config.internetPayMode;
    this._masterZoneId = config.masterZoneId;
    this._multiZoneFlag = config.multiZoneFlag;
    this._slaType = config.slaType;
    this._slaveZoneId = config.slaveZoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // internet_address_version - computed: false, optional: true, required: false
  private _internetAddressVersion?: string; 
  public get internetAddressVersion() {
    return this.getStringAttribute('internet_address_version');
  }
  public set internetAddressVersion(value: string) {
    this._internetAddressVersion = value;
  }
  public resetInternetAddressVersion() {
    this._internetAddressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAddressVersionInput() {
    return this._internetAddressVersion;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // internet_pay_mode - computed: false, optional: true, required: false
  private _internetPayMode?: string; 
  public get internetPayMode() {
    return this.getStringAttribute('internet_pay_mode');
  }
  public set internetPayMode(value: string) {
    this._internetPayMode = value;
  }
  public resetInternetPayMode() {
    this._internetPayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetPayModeInput() {
    return this._internetPayMode;
  }

  // master_zone_id - computed: false, optional: true, required: false
  private _masterZoneId?: string; 
  public get masterZoneId() {
    return this.getStringAttribute('master_zone_id');
  }
  public set masterZoneId(value: string) {
    this._masterZoneId = value;
  }
  public resetMasterZoneId() {
    this._masterZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterZoneIdInput() {
    return this._masterZoneId;
  }

  // multi_zone_flag - computed: false, optional: true, required: false
  private _multiZoneFlag?: boolean | cdktf.IResolvable; 
  public get multiZoneFlag() {
    return this.getBooleanAttribute('multi_zone_flag');
  }
  public set multiZoneFlag(value: boolean | cdktf.IResolvable) {
    this._multiZoneFlag = value;
  }
  public resetMultiZoneFlag() {
    this._multiZoneFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneFlagInput() {
    return this._multiZoneFlag;
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // sla_type - computed: false, optional: true, required: false
  private _slaType?: string; 
  public get slaType() {
    return this.getStringAttribute('sla_type');
  }
  public set slaType(value: string) {
    this._slaType = value;
  }
  public resetSlaType() {
    this._slaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTypeInput() {
    return this._slaType;
  }

  // slave_zone_id - computed: false, optional: true, required: false
  private _slaveZoneId?: string; 
  public get slaveZoneId() {
    return this.getStringAttribute('slave_zone_id');
  }
  public set slaveZoneId(value: string) {
    this._slaveZoneId = value;
  }
  public resetSlaveZoneId() {
    this._slaveZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveZoneIdInput() {
    return this._slaveZoneId;
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      internet_address_version: cdktf.stringToTerraform(this._internetAddressVersion),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      internet_pay_mode: cdktf.stringToTerraform(this._internetPayMode),
      master_zone_id: cdktf.stringToTerraform(this._masterZoneId),
      multi_zone_flag: cdktf.booleanToTerraform(this._multiZoneFlag),
      sla_type: cdktf.stringToTerraform(this._slaType),
      slave_zone_id: cdktf.stringToTerraform(this._slaveZoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_address_version: {
        value: cdktf.stringToHclTerraform(this._internetAddressVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_pay_mode: {
        value: cdktf.stringToHclTerraform(this._internetPayMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_zone_id: {
        value: cdktf.stringToHclTerraform(this._masterZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_zone_flag: {
        value: cdktf.booleanToHclTerraform(this._multiZoneFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sla_type: {
        value: cdktf.stringToHclTerraform(this._slaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slave_zone_id: {
        value: cdktf.stringToHclTerraform(this._slaveZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
