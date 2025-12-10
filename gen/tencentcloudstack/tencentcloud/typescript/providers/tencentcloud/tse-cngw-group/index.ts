// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * description information of group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#description TseCngwGroup#description}
  */
  readonly description?: string;
  /**
  * gateway IDonly postpaid gateway supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#gateway_id TseCngwGroup#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#id TseCngwGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * public network outbound traffic bandwidth,[1,2048]Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#internet_max_bandwidth_out TseCngwGroup#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * gateway group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#name TseCngwGroup#name}
  */
  readonly name: string;
  /**
  * subnet ID. Assign an IP address to the engine in the VPC subnet. Reference value:- subnet-ahde9me9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#subnet_id TseCngwGroup#subnet_id}
  */
  readonly subnetId: string;
  /**
  * internet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#internet_config TseCngwGroup#internet_config}
  */
  readonly internetConfig?: TseCngwGroupInternetConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#node_config TseCngwGroup#node_config}
  */
  readonly nodeConfig: TseCngwGroupNodeConfig;
}
export interface TseCngwGroupInternetConfig {
  /**
  * description of clb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#description TseCngwGroup#description}
  */
  readonly description?: string;
  /**
  * internet type. Reference value:- IPV4 (default value)- IPV6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#internet_address_version TseCngwGroup#internet_address_version}
  */
  readonly internetAddressVersion?: string;
  /**
  * public network bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#internet_max_bandwidth_out TseCngwGroup#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * trade type of internet. Reference value:- BANDWIDTH- TRAFFIC (default value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#internet_pay_mode TseCngwGroup#internet_pay_mode}
  */
  readonly internetPayMode?: string;
  /**
  * primary availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#master_zone_id TseCngwGroup#master_zone_id}
  */
  readonly masterZoneId?: string;
  /**
  * Whether load balancing has multiple availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#multi_zone_flag TseCngwGroup#multi_zone_flag}
  */
  readonly multiZoneFlag?: boolean | cdktf.IResolvable;
  /**
  * specification type of clb. Default shared type when this parameter is empty. Reference value:- SLA LCU-supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#sla_type TseCngwGroup#sla_type}
  */
  readonly slaType?: string;
  /**
  * alternate availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#slave_zone_id TseCngwGroup#slave_zone_id}
  */
  readonly slaveZoneId?: string;
}

export function tseCngwGroupInternetConfigToTerraform(struct?: TseCngwGroupInternetConfigOutputReference | TseCngwGroupInternetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    internet_address_version: cdktf.stringToTerraform(struct!.internetAddressVersion),
    internet_max_bandwidth_out: cdktf.numberToTerraform(struct!.internetMaxBandwidthOut),
    internet_pay_mode: cdktf.stringToTerraform(struct!.internetPayMode),
    master_zone_id: cdktf.stringToTerraform(struct!.masterZoneId),
    multi_zone_flag: cdktf.booleanToTerraform(struct!.multiZoneFlag),
    sla_type: cdktf.stringToTerraform(struct!.slaType),
    slave_zone_id: cdktf.stringToTerraform(struct!.slaveZoneId),
  }
}


export function tseCngwGroupInternetConfigToHclTerraform(struct?: TseCngwGroupInternetConfigOutputReference | TseCngwGroupInternetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_address_version: {
      value: cdktf.stringToHclTerraform(struct!.internetAddressVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.internetMaxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internet_pay_mode: {
      value: cdktf.stringToHclTerraform(struct!.internetPayMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.masterZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_zone_flag: {
      value: cdktf.booleanToHclTerraform(struct!.multiZoneFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sla_type: {
      value: cdktf.stringToHclTerraform(struct!.slaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slave_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.slaveZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwGroupInternetConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwGroupInternetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._internetAddressVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetAddressVersion = this._internetAddressVersion;
    }
    if (this._internetMaxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetMaxBandwidthOut = this._internetMaxBandwidthOut;
    }
    if (this._internetPayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetPayMode = this._internetPayMode;
    }
    if (this._masterZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterZoneId = this._masterZoneId;
    }
    if (this._multiZoneFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiZoneFlag = this._multiZoneFlag;
    }
    if (this._slaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaType = this._slaType;
    }
    if (this._slaveZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveZoneId = this._slaveZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwGroupInternetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._internetAddressVersion = undefined;
      this._internetMaxBandwidthOut = undefined;
      this._internetPayMode = undefined;
      this._masterZoneId = undefined;
      this._multiZoneFlag = undefined;
      this._slaType = undefined;
      this._slaveZoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._internetAddressVersion = value.internetAddressVersion;
      this._internetMaxBandwidthOut = value.internetMaxBandwidthOut;
      this._internetPayMode = value.internetPayMode;
      this._masterZoneId = value.masterZoneId;
      this._multiZoneFlag = value.multiZoneFlag;
      this._slaType = value.slaType;
      this._slaveZoneId = value.slaveZoneId;
    }
  }

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
}
export interface TseCngwGroupNodeConfig {
  /**
  * group node number, 2-50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#number TseCngwGroup#number}
  */
  readonly number: number;
  /**
  * group specification, 1c2g|2c4g|4c8g|8c16g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#specification TseCngwGroup#specification}
  */
  readonly specification: string;
}

export function tseCngwGroupNodeConfigToTerraform(struct?: TseCngwGroupNodeConfigOutputReference | TseCngwGroupNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    specification: cdktf.stringToTerraform(struct!.specification),
  }
}


export function tseCngwGroupNodeConfigToHclTerraform(struct?: TseCngwGroupNodeConfigOutputReference | TseCngwGroupNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specification: {
      value: cdktf.stringToHclTerraform(struct!.specification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwGroupNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwGroupNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._specification !== undefined) {
      hasAnyValues = true;
      internalValueResult.specification = this._specification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwGroupNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._specification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._specification = value.specification;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // specification - computed: false, optional: false, required: true
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group tencentcloud_tse_cngw_group}
*/
export class TseCngwGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwGroup to import
  * @param importFromId The id of the existing TseCngwGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tse_cngw_group tencentcloud_tse_cngw_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._id = config.id;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._name = config.name;
    this._subnetId = config.subnetId;
    this._internetConfig.internalValue = config.internetConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // internet_config - computed: false, optional: true, required: false
  private _internetConfig = new TseCngwGroupInternetConfigOutputReference(this, "internet_config");
  public get internetConfig() {
    return this._internetConfig;
  }
  public putInternetConfig(value: TseCngwGroupInternetConfig) {
    this._internetConfig.internalValue = value;
  }
  public resetInternetConfig() {
    this._internetConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetConfigInput() {
    return this._internetConfig.internalValue;
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig = new TseCngwGroupNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: TseCngwGroupNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      name: cdktf.stringToTerraform(this._name),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      internet_config: tseCngwGroupInternetConfigToTerraform(this._internetConfig.internalValue),
      node_config: tseCngwGroupNodeConfigToTerraform(this._nodeConfig.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_config: {
        value: tseCngwGroupInternetConfigToHclTerraform(this._internetConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwGroupInternetConfigList",
      },
      node_config: {
        value: tseCngwGroupNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwGroupNodeConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
