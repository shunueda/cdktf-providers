// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * description information, up to 120 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#description TseCngwGateway#description}
  */
  readonly description?: string;
  /**
  * whether to enable CLS log. Default value: fasle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#enable_cls TseCngwGateway#enable_cls}
  */
  readonly enableCls?: boolean | cdktf.IResolvable;
  /**
  * engine region of gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#engine_region TseCngwGateway#engine_region}
  */
  readonly engineRegion?: string;
  /**
  * product version. Reference value: `TRIAL`, `STANDARD`(default value), `PROFESSIONAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#feature_version TseCngwGateway#feature_version}
  */
  readonly featureVersion?: string;
  /**
  * gateway vwersion. Reference value: `2.4.1`, `2.5.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#gateway_version TseCngwGateway#gateway_version}
  */
  readonly gatewayVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#id TseCngwGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ingress class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#ingress_class_name TseCngwGateway#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * public network outbound traffic bandwidth,[1,2048]Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#internet_max_bandwidth_out TseCngwGateway#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * gateway name, supports up to 60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#name TseCngwGateway#name}
  */
  readonly name: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#tags TseCngwGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * trade type. Reference value: `0`: postpaid, `1`:Prepaid (Interface does not support the creation of prepaid instances yet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#trade_type TseCngwGateway#trade_type}
  */
  readonly tradeType?: number;
  /**
  * gateway type,currently only supports kong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#type TseCngwGateway#type}
  */
  readonly type: string;
  /**
  * internet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#internet_config TseCngwGateway#internet_config}
  */
  readonly internetConfig?: TseCngwGatewayInternetConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#node_config TseCngwGateway#node_config}
  */
  readonly nodeConfig: TseCngwGatewayNodeConfig;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#vpc_config TseCngwGateway#vpc_config}
  */
  readonly vpcConfig: TseCngwGatewayVpcConfig;
}
export interface TseCngwGatewayInstancePort {
}

export function tseCngwGatewayInstancePortToTerraform(struct?: TseCngwGatewayInstancePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tseCngwGatewayInstancePortToHclTerraform(struct?: TseCngwGatewayInstancePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TseCngwGatewayInstancePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TseCngwGatewayInstancePort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwGatewayInstancePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getStringAttribute('https_port');
  }

  // tcp_port - computed: true, optional: false, required: false
  public get tcpPort() {
    return this.getStringAttribute('tcp_port');
  }

  // udp_port - computed: true, optional: false, required: false
  public get udpPort() {
    return this.getStringAttribute('udp_port');
  }
}

export class TseCngwGatewayInstancePortList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TseCngwGatewayInstancePortOutputReference {
    return new TseCngwGatewayInstancePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwGatewayInternetConfig {
  /**
  * description of clb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#description TseCngwGateway#description}
  */
  readonly description?: string;
  /**
  * internet type. Reference value: `IPV4`(default value), `IPV6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#internet_address_version TseCngwGateway#internet_address_version}
  */
  readonly internetAddressVersion?: string;
  /**
  * public network bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#internet_max_bandwidth_out TseCngwGateway#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * trade type of internet. Reference value: `BANDWIDTH`, `TRAFFIC`(default value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#internet_pay_mode TseCngwGateway#internet_pay_mode}
  */
  readonly internetPayMode?: string;
  /**
  * primary availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#master_zone_id TseCngwGateway#master_zone_id}
  */
  readonly masterZoneId?: string;
  /**
  * Whether load balancing has multiple availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#multi_zone_flag TseCngwGateway#multi_zone_flag}
  */
  readonly multiZoneFlag?: boolean | cdktf.IResolvable;
  /**
  * specification type of clb. Default shared type when this parameter is empty. Reference value:- SLA LCU-supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#sla_type TseCngwGateway#sla_type}
  */
  readonly slaType?: string;
  /**
  * alternate availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#slave_zone_id TseCngwGateway#slave_zone_id}
  */
  readonly slaveZoneId?: string;
}

export function tseCngwGatewayInternetConfigToTerraform(struct?: TseCngwGatewayInternetConfigOutputReference | TseCngwGatewayInternetConfig): any {
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


export function tseCngwGatewayInternetConfigToHclTerraform(struct?: TseCngwGatewayInternetConfigOutputReference | TseCngwGatewayInternetConfig): any {
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

export class TseCngwGatewayInternetConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwGatewayInternetConfig | undefined {
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

  public set internalValue(value: TseCngwGatewayInternetConfig | undefined) {
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
export interface TseCngwGatewayNodeConfig {
  /**
  * node number, 2-50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#number TseCngwGateway#number}
  */
  readonly number: number;
  /**
  * specification, 1c2g|2c4g|4c8g|8c16g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#specification TseCngwGateway#specification}
  */
  readonly specification: string;
}

export function tseCngwGatewayNodeConfigToTerraform(struct?: TseCngwGatewayNodeConfigOutputReference | TseCngwGatewayNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    specification: cdktf.stringToTerraform(struct!.specification),
  }
}


export function tseCngwGatewayNodeConfigToHclTerraform(struct?: TseCngwGatewayNodeConfigOutputReference | TseCngwGatewayNodeConfig): any {
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

export class TseCngwGatewayNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwGatewayNodeConfig | undefined {
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

  public set internalValue(value: TseCngwGatewayNodeConfig | undefined) {
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
export interface TseCngwGatewayVpcConfig {
  /**
  * subnet ID. Assign an IP address to the engine in the VPC subnet. Reference value: subnet-ahde9me9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#subnet_id TseCngwGateway#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * VPC ID. Assign an IP address to the engine in the VPC subnet. Reference value: vpc-conz6aix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#vpc_id TseCngwGateway#vpc_id}
  */
  readonly vpcId?: string;
}

export function tseCngwGatewayVpcConfigToTerraform(struct?: TseCngwGatewayVpcConfigOutputReference | TseCngwGatewayVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function tseCngwGatewayVpcConfigToHclTerraform(struct?: TseCngwGatewayVpcConfigOutputReference | TseCngwGatewayVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwGatewayVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwGatewayVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwGatewayVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway tencentcloud_tse_cngw_gateway}
*/
export class TseCngwGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwGateway to import
  * @param importFromId The id of the existing TseCngwGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tse_cngw_gateway tencentcloud_tse_cngw_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_gateway',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._enableCls = config.enableCls;
    this._engineRegion = config.engineRegion;
    this._featureVersion = config.featureVersion;
    this._gatewayVersion = config.gatewayVersion;
    this._id = config.id;
    this._ingressClassName = config.ingressClassName;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._name = config.name;
    this._tags = config.tags;
    this._tradeType = config.tradeType;
    this._type = config.type;
    this._internetConfig.internalValue = config.internetConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._vpcConfig.internalValue = config.vpcConfig;
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

  // enable_cls - computed: false, optional: true, required: false
  private _enableCls?: boolean | cdktf.IResolvable; 
  public get enableCls() {
    return this.getBooleanAttribute('enable_cls');
  }
  public set enableCls(value: boolean | cdktf.IResolvable) {
    this._enableCls = value;
  }
  public resetEnableCls() {
    this._enableCls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClsInput() {
    return this._enableCls;
  }

  // engine_region - computed: true, optional: true, required: false
  private _engineRegion?: string; 
  public get engineRegion() {
    return this.getStringAttribute('engine_region');
  }
  public set engineRegion(value: string) {
    this._engineRegion = value;
  }
  public resetEngineRegion() {
    this._engineRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineRegionInput() {
    return this._engineRegion;
  }

  // feature_version - computed: true, optional: true, required: false
  private _featureVersion?: string; 
  public get featureVersion() {
    return this.getStringAttribute('feature_version');
  }
  public set featureVersion(value: string) {
    this._featureVersion = value;
  }
  public resetFeatureVersion() {
    this._featureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureVersionInput() {
    return this._featureVersion;
  }

  // gateway_version - computed: false, optional: false, required: true
  private _gatewayVersion?: string; 
  public get gatewayVersion() {
    return this.getStringAttribute('gateway_version');
  }
  public set gatewayVersion(value: string) {
    this._gatewayVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayVersionInput() {
    return this._gatewayVersion;
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

  // ingress_class_name - computed: true, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // instance_port - computed: true, optional: false, required: false
  private _instancePort = new TseCngwGatewayInstancePortList(this, "instance_port", false);
  public get instancePort() {
    return this._instancePort;
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

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ip_addresses'));
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trade_type - computed: false, optional: true, required: false
  private _tradeType?: number; 
  public get tradeType() {
    return this.getNumberAttribute('trade_type');
  }
  public set tradeType(value: number) {
    this._tradeType = value;
  }
  public resetTradeType() {
    this._tradeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tradeTypeInput() {
    return this._tradeType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // internet_config - computed: false, optional: true, required: false
  private _internetConfig = new TseCngwGatewayInternetConfigOutputReference(this, "internet_config");
  public get internetConfig() {
    return this._internetConfig;
  }
  public putInternetConfig(value: TseCngwGatewayInternetConfig) {
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
  private _nodeConfig = new TseCngwGatewayNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: TseCngwGatewayNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig = new TseCngwGatewayVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: TseCngwGatewayVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable_cls: cdktf.booleanToTerraform(this._enableCls),
      engine_region: cdktf.stringToTerraform(this._engineRegion),
      feature_version: cdktf.stringToTerraform(this._featureVersion),
      gateway_version: cdktf.stringToTerraform(this._gatewayVersion),
      id: cdktf.stringToTerraform(this._id),
      ingress_class_name: cdktf.stringToTerraform(this._ingressClassName),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trade_type: cdktf.numberToTerraform(this._tradeType),
      type: cdktf.stringToTerraform(this._type),
      internet_config: tseCngwGatewayInternetConfigToTerraform(this._internetConfig.internalValue),
      node_config: tseCngwGatewayNodeConfigToTerraform(this._nodeConfig.internalValue),
      vpc_config: tseCngwGatewayVpcConfigToTerraform(this._vpcConfig.internalValue),
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
      enable_cls: {
        value: cdktf.booleanToHclTerraform(this._enableCls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_region: {
        value: cdktf.stringToHclTerraform(this._engineRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_version: {
        value: cdktf.stringToHclTerraform(this._featureVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_version: {
        value: cdktf.stringToHclTerraform(this._gatewayVersion),
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
      ingress_class_name: {
        value: cdktf.stringToHclTerraform(this._ingressClassName),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trade_type: {
        value: cdktf.numberToHclTerraform(this._tradeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_config: {
        value: tseCngwGatewayInternetConfigToHclTerraform(this._internetConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwGatewayInternetConfigList",
      },
      node_config: {
        value: tseCngwGatewayNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwGatewayNodeConfigList",
      },
      vpc_config: {
        value: tseCngwGatewayVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwGatewayVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
