// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuDdosPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Business of resource instance. bgpip indicates anti-anti-ip ip; bgp means exclusive package; bgp-multip means shared packet; net indicates anti-anti-ip pro version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#business DayuDdosPolicyV2#business}
  */
  readonly business?: string;
  /**
  * AI protection switch, take the value [`on`, `off`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ddos_ai DayuDdosPolicyV2#ddos_ai}
  */
  readonly ddosAi?: string;
  /**
  * Protection class, value [`low`, `middle`, `high`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ddos_level DayuDdosPolicyV2#ddos_level}
  */
  readonly ddosLevel?: string;
  /**
  * DDoS cleaning threshold, value[0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000]; When the value is set to 0, it means that the default value is adopted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ddos_threshold DayuDdosPolicyV2#ddos_threshold}
  */
  readonly ddosThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#id DayuDdosPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the resource instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#resource_id DayuDdosPolicyV2#resource_id}
  */
  readonly resourceId: string;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#acls DayuDdosPolicyV2#acls}
  */
  readonly acls?: DayuDdosPolicyV2Acls[] | cdktf.IResolvable;
  /**
  * black_white_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#black_white_ips DayuDdosPolicyV2#black_white_ips}
  */
  readonly blackWhiteIps?: DayuDdosPolicyV2BlackWhiteIps[] | cdktf.IResolvable;
  /**
  * ddos_connect_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ddos_connect_limit DayuDdosPolicyV2#ddos_connect_limit}
  */
  readonly ddosConnectLimit?: DayuDdosPolicyV2DdosConnectLimit;
  /**
  * ddos_geo_ip_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ddos_geo_ip_block_config DayuDdosPolicyV2#ddos_geo_ip_block_config}
  */
  readonly ddosGeoIpBlockConfig?: DayuDdosPolicyV2DdosGeoIpBlockConfig[] | cdktf.IResolvable;
  /**
  * ddos_speed_limit_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ddos_speed_limit_config DayuDdosPolicyV2#ddos_speed_limit_config}
  */
  readonly ddosSpeedLimitConfig?: DayuDdosPolicyV2DdosSpeedLimitConfig[] | cdktf.IResolvable;
  /**
  * packet_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#packet_filters DayuDdosPolicyV2#packet_filters}
  */
  readonly packetFilters?: DayuDdosPolicyV2PacketFilters[] | cdktf.IResolvable;
  /**
  * protocol_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#protocol_block_config DayuDdosPolicyV2#protocol_block_config}
  */
  readonly protocolBlockConfig?: DayuDdosPolicyV2ProtocolBlockConfig[] | cdktf.IResolvable;
  /**
  * water_print_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#water_print_config DayuDdosPolicyV2#water_print_config}
  */
  readonly waterPrintConfig?: DayuDdosPolicyV2WaterPrintConfig[] | cdktf.IResolvable;
}
export interface DayuDdosPolicyV2Acls {
  /**
  * Action, optional values: drop, transmit, forward.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#action DayuDdosPolicyV2#action}
  */
  readonly action: string;
  /**
  * The destination port ends, and the value range is 0~65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#d_port_end DayuDdosPolicyV2#d_port_end}
  */
  readonly dPortEnd: number;
  /**
  * The destination port starts, and the value range is 0~65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#d_port_start DayuDdosPolicyV2#d_port_start}
  */
  readonly dPortStart: number;
  /**
  * Protocol type, desirable values tcp, udp, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#forward_protocol DayuDdosPolicyV2#forward_protocol}
  */
  readonly forwardProtocol: string;
  /**
  * Policy priority, the lower the number, the higher the level, the higher the rule matches, taking a value of 1-1000.Note: This field may return null, indicating that a valid value could not be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#priority DayuDdosPolicyV2#priority}
  */
  readonly priority: number;
  /**
  * The source port ends, and the acceptable value ranges from 0 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#s_port_end DayuDdosPolicyV2#s_port_end}
  */
  readonly sPortEnd: number;
  /**
  * The source port starts, and the value range is 0~65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#s_port_start DayuDdosPolicyV2#s_port_start}
  */
  readonly sPortStart: number;
}

export function dayuDdosPolicyV2AclsToTerraform(struct?: DayuDdosPolicyV2Acls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    d_port_end: cdktf.numberToTerraform(struct!.dPortEnd),
    d_port_start: cdktf.numberToTerraform(struct!.dPortStart),
    forward_protocol: cdktf.stringToTerraform(struct!.forwardProtocol),
    priority: cdktf.numberToTerraform(struct!.priority),
    s_port_end: cdktf.numberToTerraform(struct!.sPortEnd),
    s_port_start: cdktf.numberToTerraform(struct!.sPortStart),
  }
}


export function dayuDdosPolicyV2AclsToHclTerraform(struct?: DayuDdosPolicyV2Acls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    d_port_start: {
      value: cdktf.numberToHclTerraform(struct!.dPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_protocol: {
      value: cdktf.stringToHclTerraform(struct!.forwardProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_port_end: {
      value: cdktf.numberToHclTerraform(struct!.sPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_port_start: {
      value: cdktf.numberToHclTerraform(struct!.sPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2AclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2Acls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dPortEnd = this._dPortEnd;
    }
    if (this._dPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dPortStart = this._dPortStart;
    }
    if (this._forwardProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProtocol = this._forwardProtocol;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sPortEnd = this._sPortEnd;
    }
    if (this._sPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sPortStart = this._sPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2Acls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dPortEnd = undefined;
      this._dPortStart = undefined;
      this._forwardProtocol = undefined;
      this._priority = undefined;
      this._sPortEnd = undefined;
      this._sPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dPortEnd = value.dPortEnd;
      this._dPortStart = value.dPortStart;
      this._forwardProtocol = value.forwardProtocol;
      this._priority = value.priority;
      this._sPortEnd = value.sPortEnd;
      this._sPortStart = value.sPortStart;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // d_port_end - computed: false, optional: false, required: true
  private _dPortEnd?: number; 
  public get dPortEnd() {
    return this.getNumberAttribute('d_port_end');
  }
  public set dPortEnd(value: number) {
    this._dPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dPortEndInput() {
    return this._dPortEnd;
  }

  // d_port_start - computed: false, optional: false, required: true
  private _dPortStart?: number; 
  public get dPortStart() {
    return this.getNumberAttribute('d_port_start');
  }
  public set dPortStart(value: number) {
    this._dPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dPortStartInput() {
    return this._dPortStart;
  }

  // forward_protocol - computed: false, optional: false, required: true
  private _forwardProtocol?: string; 
  public get forwardProtocol() {
    return this.getStringAttribute('forward_protocol');
  }
  public set forwardProtocol(value: string) {
    this._forwardProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProtocolInput() {
    return this._forwardProtocol;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // s_port_end - computed: false, optional: false, required: true
  private _sPortEnd?: number; 
  public get sPortEnd() {
    return this.getNumberAttribute('s_port_end');
  }
  public set sPortEnd(value: number) {
    this._sPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sPortEndInput() {
    return this._sPortEnd;
  }

  // s_port_start - computed: false, optional: false, required: true
  private _sPortStart?: number; 
  public get sPortStart() {
    return this.getNumberAttribute('s_port_start');
  }
  public set sPortStart(value: number) {
    this._sPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sPortStartInput() {
    return this._sPortStart;
  }
}

export class DayuDdosPolicyV2AclsList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2Acls[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2AclsOutputReference {
    return new DayuDdosPolicyV2AclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyV2BlackWhiteIps {
  /**
  * Ip of resource instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ip DayuDdosPolicyV2#ip}
  */
  readonly ip: string;
  /**
  * IP type, value [`black`(blacklist IP), `white` (whitelist IP)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#ip_type DayuDdosPolicyV2#ip_type}
  */
  readonly ipType: string;
}

export function dayuDdosPolicyV2BlackWhiteIpsToTerraform(struct?: DayuDdosPolicyV2BlackWhiteIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_type: cdktf.stringToTerraform(struct!.ipType),
  }
}


export function dayuDdosPolicyV2BlackWhiteIpsToHclTerraform(struct?: DayuDdosPolicyV2BlackWhiteIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2BlackWhiteIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2BlackWhiteIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2BlackWhiteIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ipType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._ipType = value.ipType;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_type - computed: false, optional: false, required: true
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }
}

export class DayuDdosPolicyV2BlackWhiteIpsList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2BlackWhiteIps[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2BlackWhiteIpsOutputReference {
    return new DayuDdosPolicyV2BlackWhiteIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyV2DdosConnectLimit {
  /**
  * Based on connection suppression trigger threshold, value range [0,4294967295].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#bad_conn_threshold DayuDdosPolicyV2#bad_conn_threshold}
  */
  readonly badConnThreshold: number;
  /**
  * Abnormal connection detection condition, connection timeout, value range [0,65535].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#conn_timeout DayuDdosPolicyV2#conn_timeout}
  */
  readonly connTimeout: number;
  /**
  * Concurrent connection control based on destination IP+ destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#dst_conn_limit DayuDdosPolicyV2#dst_conn_limit}
  */
  readonly dstConnLimit: number;
  /**
  * Limit on the number of news per second based on the destination IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#dst_new_limit DayuDdosPolicyV2#dst_new_limit}
  */
  readonly dstNewLimit: number;
  /**
  * Abnormal connection detection conditions, empty connection guard switch, value range[0,1].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#null_conn_enable DayuDdosPolicyV2#null_conn_enable}
  */
  readonly nullConnEnable: number;
  /**
  * Concurrent connection control based on source IP + destination IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#sd_conn_limit DayuDdosPolicyV2#sd_conn_limit}
  */
  readonly sdConnLimit: number;
  /**
  * The limit on the number of news per second based on source IP + destination IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#sd_new_limit DayuDdosPolicyV2#sd_new_limit}
  */
  readonly sdNewLimit: number;
  /**
  * Anomaly connection detection condition, syn threshold, value range [0,100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#syn_limit DayuDdosPolicyV2#syn_limit}
  */
  readonly synLimit: number;
  /**
  * Anomalous connection detection condition, percentage of syn ack, value range [0,100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#syn_rate DayuDdosPolicyV2#syn_rate}
  */
  readonly synRate: number;
}

export function dayuDdosPolicyV2DdosConnectLimitToTerraform(struct?: DayuDdosPolicyV2DdosConnectLimitOutputReference | DayuDdosPolicyV2DdosConnectLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_conn_threshold: cdktf.numberToTerraform(struct!.badConnThreshold),
    conn_timeout: cdktf.numberToTerraform(struct!.connTimeout),
    dst_conn_limit: cdktf.numberToTerraform(struct!.dstConnLimit),
    dst_new_limit: cdktf.numberToTerraform(struct!.dstNewLimit),
    null_conn_enable: cdktf.numberToTerraform(struct!.nullConnEnable),
    sd_conn_limit: cdktf.numberToTerraform(struct!.sdConnLimit),
    sd_new_limit: cdktf.numberToTerraform(struct!.sdNewLimit),
    syn_limit: cdktf.numberToTerraform(struct!.synLimit),
    syn_rate: cdktf.numberToTerraform(struct!.synRate),
  }
}


export function dayuDdosPolicyV2DdosConnectLimitToHclTerraform(struct?: DayuDdosPolicyV2DdosConnectLimitOutputReference | DayuDdosPolicyV2DdosConnectLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_conn_threshold: {
      value: cdktf.numberToHclTerraform(struct!.badConnThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.dstConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_new_limit: {
      value: cdktf.numberToHclTerraform(struct!.dstNewLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    null_conn_enable: {
      value: cdktf.numberToHclTerraform(struct!.nullConnEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sd_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.sdConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sd_new_limit: {
      value: cdktf.numberToHclTerraform(struct!.sdNewLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_limit: {
      value: cdktf.numberToHclTerraform(struct!.synLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_rate: {
      value: cdktf.numberToHclTerraform(struct!.synRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2DdosConnectLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DayuDdosPolicyV2DdosConnectLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badConnThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.badConnThreshold = this._badConnThreshold;
    }
    if (this._connTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTimeout = this._connTimeout;
    }
    if (this._dstConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnLimit = this._dstConnLimit;
    }
    if (this._dstNewLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstNewLimit = this._dstNewLimit;
    }
    if (this._nullConnEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullConnEnable = this._nullConnEnable;
    }
    if (this._sdConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdConnLimit = this._sdConnLimit;
    }
    if (this._sdNewLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdNewLimit = this._sdNewLimit;
    }
    if (this._synLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.synLimit = this._synLimit;
    }
    if (this._synRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRate = this._synRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2DdosConnectLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badConnThreshold = undefined;
      this._connTimeout = undefined;
      this._dstConnLimit = undefined;
      this._dstNewLimit = undefined;
      this._nullConnEnable = undefined;
      this._sdConnLimit = undefined;
      this._sdNewLimit = undefined;
      this._synLimit = undefined;
      this._synRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badConnThreshold = value.badConnThreshold;
      this._connTimeout = value.connTimeout;
      this._dstConnLimit = value.dstConnLimit;
      this._dstNewLimit = value.dstNewLimit;
      this._nullConnEnable = value.nullConnEnable;
      this._sdConnLimit = value.sdConnLimit;
      this._sdNewLimit = value.sdNewLimit;
      this._synLimit = value.synLimit;
      this._synRate = value.synRate;
    }
  }

  // bad_conn_threshold - computed: false, optional: false, required: true
  private _badConnThreshold?: number; 
  public get badConnThreshold() {
    return this.getNumberAttribute('bad_conn_threshold');
  }
  public set badConnThreshold(value: number) {
    this._badConnThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get badConnThresholdInput() {
    return this._badConnThreshold;
  }

  // conn_timeout - computed: false, optional: false, required: true
  private _connTimeout?: number; 
  public get connTimeout() {
    return this.getNumberAttribute('conn_timeout');
  }
  public set connTimeout(value: number) {
    this._connTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connTimeoutInput() {
    return this._connTimeout;
  }

  // dst_conn_limit - computed: false, optional: false, required: true
  private _dstConnLimit?: number; 
  public get dstConnLimit() {
    return this.getNumberAttribute('dst_conn_limit');
  }
  public set dstConnLimit(value: number) {
    this._dstConnLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnLimitInput() {
    return this._dstConnLimit;
  }

  // dst_new_limit - computed: false, optional: false, required: true
  private _dstNewLimit?: number; 
  public get dstNewLimit() {
    return this.getNumberAttribute('dst_new_limit');
  }
  public set dstNewLimit(value: number) {
    this._dstNewLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNewLimitInput() {
    return this._dstNewLimit;
  }

  // null_conn_enable - computed: false, optional: false, required: true
  private _nullConnEnable?: number; 
  public get nullConnEnable() {
    return this.getNumberAttribute('null_conn_enable');
  }
  public set nullConnEnable(value: number) {
    this._nullConnEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullConnEnableInput() {
    return this._nullConnEnable;
  }

  // sd_conn_limit - computed: false, optional: false, required: true
  private _sdConnLimit?: number; 
  public get sdConnLimit() {
    return this.getNumberAttribute('sd_conn_limit');
  }
  public set sdConnLimit(value: number) {
    this._sdConnLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdConnLimitInput() {
    return this._sdConnLimit;
  }

  // sd_new_limit - computed: false, optional: false, required: true
  private _sdNewLimit?: number; 
  public get sdNewLimit() {
    return this.getNumberAttribute('sd_new_limit');
  }
  public set sdNewLimit(value: number) {
    this._sdNewLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdNewLimitInput() {
    return this._sdNewLimit;
  }

  // syn_limit - computed: false, optional: false, required: true
  private _synLimit?: number; 
  public get synLimit() {
    return this.getNumberAttribute('syn_limit');
  }
  public set synLimit(value: number) {
    this._synLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synLimitInput() {
    return this._synLimit;
  }

  // syn_rate - computed: false, optional: false, required: true
  private _synRate?: number; 
  public get synRate() {
    return this.getNumberAttribute('syn_rate');
  }
  public set synRate(value: number) {
    this._synRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synRateInput() {
    return this._synRate;
  }
}
export interface DayuDdosPolicyV2DdosGeoIpBlockConfig {
  /**
  * Block action, take the value [`drop`, `trans`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#action DayuDdosPolicyV2#action}
  */
  readonly action: string;
  /**
  * When the RegionType is customized, the AreaList must be filled in, and a maximum of 128 must be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#area_list DayuDdosPolicyV2#area_list}
  */
  readonly areaList: number[];
  /**
  * Zone type, value [oversea (overseas),china (domestic),customized (custom region)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#region_type DayuDdosPolicyV2#region_type}
  */
  readonly regionType: string;
}

export function dayuDdosPolicyV2DdosGeoIpBlockConfigToTerraform(struct?: DayuDdosPolicyV2DdosGeoIpBlockConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    area_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.areaList),
    region_type: cdktf.stringToTerraform(struct!.regionType),
  }
}


export function dayuDdosPolicyV2DdosGeoIpBlockConfigToHclTerraform(struct?: DayuDdosPolicyV2DdosGeoIpBlockConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.areaList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    region_type: {
      value: cdktf.stringToHclTerraform(struct!.regionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2DdosGeoIpBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2DdosGeoIpBlockConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._areaList !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList;
    }
    if (this._regionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionType = this._regionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2DdosGeoIpBlockConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._areaList = undefined;
      this._regionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._areaList = value.areaList;
      this._regionType = value.regionType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // area_list - computed: false, optional: false, required: true
  private _areaList?: number[]; 
  public get areaList() {
    return this.getNumberListAttribute('area_list');
  }
  public set areaList(value: number[]) {
    this._areaList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList;
  }

  // region_type - computed: false, optional: false, required: true
  private _regionType?: string; 
  public get regionType() {
    return this.getStringAttribute('region_type');
  }
  public set regionType(value: string) {
    this._regionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionTypeInput() {
    return this._regionType;
  }
}

export class DayuDdosPolicyV2DdosGeoIpBlockConfigList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2DdosGeoIpBlockConfig[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2DdosGeoIpBlockConfigOutputReference {
    return new DayuDdosPolicyV2DdosGeoIpBlockConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyV2DdosSpeedLimitConfig {
  /**
  * Bandwidth bps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#bandwidth DayuDdosPolicyV2#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * List of port ranges, up to 8, multiple; Separated, the range is represented with -; this port range must be filled in; fill in the style 1:0-65535, style 2:80; 443; 1000-2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#dst_port_list DayuDdosPolicyV2#dst_port_list}
  */
  readonly dstPortList: string;
  /**
  * Speed limit mode, take the value [1 (speed limit based on source IP),2 (speed limit based on destination port)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#mode DayuDdosPolicyV2#mode}
  */
  readonly mode: number;
  /**
  * Packet rate pps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#packet_rate DayuDdosPolicyV2#packet_rate}
  */
  readonly packetRate: number;
  /**
  * IP protocol numbers, take the value[ ALL (all protocols),TCP (tcp protocol),UDP (udp protocol),SMP (smp protocol),1; 2-100 (custom protocol number range, up to 8)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#protocol_list DayuDdosPolicyV2#protocol_list}
  */
  readonly protocolList: string;
}

export function dayuDdosPolicyV2DdosSpeedLimitConfigToTerraform(struct?: DayuDdosPolicyV2DdosSpeedLimitConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    dst_port_list: cdktf.stringToTerraform(struct!.dstPortList),
    mode: cdktf.numberToTerraform(struct!.mode),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
    protocol_list: cdktf.stringToTerraform(struct!.protocolList),
  }
}


export function dayuDdosPolicyV2DdosSpeedLimitConfigToHclTerraform(struct?: DayuDdosPolicyV2DdosSpeedLimitConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_list: {
      value: cdktf.stringToHclTerraform(struct!.dstPortList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_list: {
      value: cdktf.stringToHclTerraform(struct!.protocolList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2DdosSpeedLimitConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2DdosSpeedLimitConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._dstPortList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortList = this._dstPortList;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    if (this._protocolList !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolList = this._protocolList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2DdosSpeedLimitConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._dstPortList = undefined;
      this._mode = undefined;
      this._packetRate = undefined;
      this._protocolList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._dstPortList = value.dstPortList;
      this._mode = value.mode;
      this._packetRate = value.packetRate;
      this._protocolList = value.protocolList;
    }
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // dst_port_list - computed: false, optional: false, required: true
  private _dstPortList?: string; 
  public get dstPortList() {
    return this.getStringAttribute('dst_port_list');
  }
  public set dstPortList(value: string) {
    this._dstPortList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortListInput() {
    return this._dstPortList;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // packet_rate - computed: false, optional: false, required: true
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }

  // protocol_list - computed: false, optional: false, required: true
  private _protocolList?: string; 
  public get protocolList() {
    return this.getStringAttribute('protocol_list');
  }
  public set protocolList(value: string) {
    this._protocolList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolListInput() {
    return this._protocolList;
  }
}

export class DayuDdosPolicyV2DdosSpeedLimitConfigList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2DdosSpeedLimitConfig[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2DdosSpeedLimitConfigOutputReference {
    return new DayuDdosPolicyV2DdosSpeedLimitConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyV2PacketFilters {
  /**
  * Action, take the value [drop,transmit,drop_black (discard and black out),drop_rst (Interception),drop_black_rst (intercept and block),forward].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#action DayuDdosPolicyV2#action}
  */
  readonly action: string;
  /**
  * The end destination port, take the value 1~65535, which must be greater than or equal to the starting destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#d_port_end DayuDdosPolicyV2#d_port_end}
  */
  readonly dPortEnd: number;
  /**
  * From the destination port, take the value 0~65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#d_port_start DayuDdosPolicyV2#d_port_start}
  */
  readonly dPortStart: number;
  /**
  * Detection depth from the detection position, value [0,1500].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#depth DayuDdosPolicyV2#depth}
  */
  readonly depth: number;
  /**
  * Second detection depth starting from the second detection position, value [0,1500].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#depth2 DayuDdosPolicyV2#depth2}
  */
  readonly depth2: number;
  /**
  * Whether to include the detected value, take the value [0 (included),1 (not included)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#is_not DayuDdosPolicyV2#is_not}
  */
  readonly isNot: number;
  /**
  * Whether the second detection contains the detected value, the value [0 (included),1 (not included)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#is_not2 DayuDdosPolicyV2#is_not2}
  */
  readonly isNot2: number;
  /**
  * Detect position, take the value [begin_l3 (IP header),begin_l4 (TCP/UDP header),begin_l5 (T load), no_match (mismatch)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#match_begin DayuDdosPolicyV2#match_begin}
  */
  readonly matchBegin: string;
  /**
  * The second detection position. take the value [begin_l3 (IP header),begin_l4 (TCP/UDP header),begin_l5 (T load), no_match (mismatch)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#match_begin2 DayuDdosPolicyV2#match_begin2}
  */
  readonly matchBegin2: string;
  /**
  * When there is a second detection condition, the and/or relationship with the first detection condition, takes the value [And (and relationship),none (fill in this value when there is no second detection condition)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#match_logic DayuDdosPolicyV2#match_logic}
  */
  readonly matchLogic: string;
  /**
  * Detection type, value [sunday (keyword),pcre (regular expression)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#match_type DayuDdosPolicyV2#match_type}
  */
  readonly matchType: string;
  /**
  * The second type of detection, takes the value [sunday (keyword),pcre (regular expression)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#match_type2 DayuDdosPolicyV2#match_type2}
  */
  readonly matchType2: string;
  /**
  * Offset from detection position, value range [0, Depth].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#offset DayuDdosPolicyV2#offset}
  */
  readonly offset: number;
  /**
  * Offset from the second detection position, value range [0,Depth2].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#offset2 DayuDdosPolicyV2#offset2}
  */
  readonly offset2: number;
  /**
  * The maximum message length, taken from 1 to 1500, must be greater than or equal to the minimum message length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#pktlen_max DayuDdosPolicyV2#pktlen_max}
  */
  readonly pktlenMax: number;
  /**
  * Minimum message length, 1-1500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#pktlen_min DayuDdosPolicyV2#pktlen_min}
  */
  readonly pktlenMin: number;
  /**
  * Protocol, value [tcp udp icmp all].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#protocol DayuDdosPolicyV2#protocol}
  */
  readonly protocol: string;
  /**
  * End source port, take the value 1~65535, must be greater than or equal to the starting source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#s_port_end DayuDdosPolicyV2#s_port_end}
  */
  readonly sPortEnd: number;
  /**
  * Start the source port, take the value 0~65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#s_port_start DayuDdosPolicyV2#s_port_start}
  */
  readonly sPortStart: number;
  /**
  * Detect values, key strings or regular expressions, take the value [When the detection type is sunday, please fill in the string or hexadecimal bytecode, for example 13233 corresponds to the hexadecimal bytecode of the string `123`;When the detection type is pcre, please fill in the regular expression string;].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#str DayuDdosPolicyV2#str}
  */
  readonly str: string;
  /**
  * The second detection value, the key string or regular expression, takes the value [When the detection type is sunday, please fill in the string or hexadecimal bytecode, for example 13233 corresponds to the hexadecimal bytecode of the string `123`;When the detection type is pcre, please fill in the regular expression string;].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#str2 DayuDdosPolicyV2#str2}
  */
  readonly str2: string;
}

export function dayuDdosPolicyV2PacketFiltersToTerraform(struct?: DayuDdosPolicyV2PacketFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    d_port_end: cdktf.numberToTerraform(struct!.dPortEnd),
    d_port_start: cdktf.numberToTerraform(struct!.dPortStart),
    depth: cdktf.numberToTerraform(struct!.depth),
    depth2: cdktf.numberToTerraform(struct!.depth2),
    is_not: cdktf.numberToTerraform(struct!.isNot),
    is_not2: cdktf.numberToTerraform(struct!.isNot2),
    match_begin: cdktf.stringToTerraform(struct!.matchBegin),
    match_begin2: cdktf.stringToTerraform(struct!.matchBegin2),
    match_logic: cdktf.stringToTerraform(struct!.matchLogic),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    match_type2: cdktf.stringToTerraform(struct!.matchType2),
    offset: cdktf.numberToTerraform(struct!.offset),
    offset2: cdktf.numberToTerraform(struct!.offset2),
    pktlen_max: cdktf.numberToTerraform(struct!.pktlenMax),
    pktlen_min: cdktf.numberToTerraform(struct!.pktlenMin),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    s_port_end: cdktf.numberToTerraform(struct!.sPortEnd),
    s_port_start: cdktf.numberToTerraform(struct!.sPortStart),
    str: cdktf.stringToTerraform(struct!.str),
    str2: cdktf.stringToTerraform(struct!.str2),
  }
}


export function dayuDdosPolicyV2PacketFiltersToHclTerraform(struct?: DayuDdosPolicyV2PacketFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    d_port_start: {
      value: cdktf.numberToHclTerraform(struct!.dPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    depth2: {
      value: cdktf.numberToHclTerraform(struct!.depth2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_not: {
      value: cdktf.numberToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_not2: {
      value: cdktf.numberToHclTerraform(struct!.isNot2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_begin: {
      value: cdktf.stringToHclTerraform(struct!.matchBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_begin2: {
      value: cdktf.stringToHclTerraform(struct!.matchBegin2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_logic: {
      value: cdktf.stringToHclTerraform(struct!.matchLogic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type2: {
      value: cdktf.stringToHclTerraform(struct!.matchType2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset2: {
      value: cdktf.numberToHclTerraform(struct!.offset2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktlen_max: {
      value: cdktf.numberToHclTerraform(struct!.pktlenMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktlen_min: {
      value: cdktf.numberToHclTerraform(struct!.pktlenMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_port_end: {
      value: cdktf.numberToHclTerraform(struct!.sPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_port_start: {
      value: cdktf.numberToHclTerraform(struct!.sPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str2: {
      value: cdktf.stringToHclTerraform(struct!.str2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2PacketFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2PacketFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dPortEnd = this._dPortEnd;
    }
    if (this._dPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dPortStart = this._dPortStart;
    }
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._depth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth2 = this._depth2;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    if (this._isNot2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot2 = this._isNot2;
    }
    if (this._matchBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBegin = this._matchBegin;
    }
    if (this._matchBegin2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBegin2 = this._matchBegin2;
    }
    if (this._matchLogic !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLogic = this._matchLogic;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._matchType2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType2 = this._matchType2;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._offset2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset2 = this._offset2;
    }
    if (this._pktlenMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktlenMax = this._pktlenMax;
    }
    if (this._pktlenMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktlenMin = this._pktlenMin;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sPortEnd = this._sPortEnd;
    }
    if (this._sPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sPortStart = this._sPortStart;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    if (this._str2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.str2 = this._str2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2PacketFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dPortEnd = undefined;
      this._dPortStart = undefined;
      this._depth = undefined;
      this._depth2 = undefined;
      this._isNot = undefined;
      this._isNot2 = undefined;
      this._matchBegin = undefined;
      this._matchBegin2 = undefined;
      this._matchLogic = undefined;
      this._matchType = undefined;
      this._matchType2 = undefined;
      this._offset = undefined;
      this._offset2 = undefined;
      this._pktlenMax = undefined;
      this._pktlenMin = undefined;
      this._protocol = undefined;
      this._sPortEnd = undefined;
      this._sPortStart = undefined;
      this._str = undefined;
      this._str2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dPortEnd = value.dPortEnd;
      this._dPortStart = value.dPortStart;
      this._depth = value.depth;
      this._depth2 = value.depth2;
      this._isNot = value.isNot;
      this._isNot2 = value.isNot2;
      this._matchBegin = value.matchBegin;
      this._matchBegin2 = value.matchBegin2;
      this._matchLogic = value.matchLogic;
      this._matchType = value.matchType;
      this._matchType2 = value.matchType2;
      this._offset = value.offset;
      this._offset2 = value.offset2;
      this._pktlenMax = value.pktlenMax;
      this._pktlenMin = value.pktlenMin;
      this._protocol = value.protocol;
      this._sPortEnd = value.sPortEnd;
      this._sPortStart = value.sPortStart;
      this._str = value.str;
      this._str2 = value.str2;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // d_port_end - computed: false, optional: false, required: true
  private _dPortEnd?: number; 
  public get dPortEnd() {
    return this.getNumberAttribute('d_port_end');
  }
  public set dPortEnd(value: number) {
    this._dPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dPortEndInput() {
    return this._dPortEnd;
  }

  // d_port_start - computed: false, optional: false, required: true
  private _dPortStart?: number; 
  public get dPortStart() {
    return this.getNumberAttribute('d_port_start');
  }
  public set dPortStart(value: number) {
    this._dPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dPortStartInput() {
    return this._dPortStart;
  }

  // depth - computed: false, optional: false, required: true
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // depth2 - computed: false, optional: false, required: true
  private _depth2?: number; 
  public get depth2() {
    return this.getNumberAttribute('depth2');
  }
  public set depth2(value: number) {
    this._depth2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get depth2Input() {
    return this._depth2;
  }

  // is_not - computed: false, optional: false, required: true
  private _isNot?: number; 
  public get isNot() {
    return this.getNumberAttribute('is_not');
  }
  public set isNot(value: number) {
    this._isNot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }

  // is_not2 - computed: false, optional: false, required: true
  private _isNot2?: number; 
  public get isNot2() {
    return this.getNumberAttribute('is_not2');
  }
  public set isNot2(value: number) {
    this._isNot2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isNot2Input() {
    return this._isNot2;
  }

  // match_begin - computed: false, optional: false, required: true
  private _matchBegin?: string; 
  public get matchBegin() {
    return this.getStringAttribute('match_begin');
  }
  public set matchBegin(value: string) {
    this._matchBegin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBeginInput() {
    return this._matchBegin;
  }

  // match_begin2 - computed: false, optional: false, required: true
  private _matchBegin2?: string; 
  public get matchBegin2() {
    return this.getStringAttribute('match_begin2');
  }
  public set matchBegin2(value: string) {
    this._matchBegin2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBegin2Input() {
    return this._matchBegin2;
  }

  // match_logic - computed: false, optional: false, required: true
  private _matchLogic?: string; 
  public get matchLogic() {
    return this.getStringAttribute('match_logic');
  }
  public set matchLogic(value: string) {
    this._matchLogic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLogicInput() {
    return this._matchLogic;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // match_type2 - computed: false, optional: false, required: true
  private _matchType2?: string; 
  public get matchType2() {
    return this.getStringAttribute('match_type2');
  }
  public set matchType2(value: string) {
    this._matchType2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchType2Input() {
    return this._matchType2;
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // offset2 - computed: false, optional: false, required: true
  private _offset2?: number; 
  public get offset2() {
    return this.getNumberAttribute('offset2');
  }
  public set offset2(value: number) {
    this._offset2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offset2Input() {
    return this._offset2;
  }

  // pktlen_max - computed: false, optional: false, required: true
  private _pktlenMax?: number; 
  public get pktlenMax() {
    return this.getNumberAttribute('pktlen_max');
  }
  public set pktlenMax(value: number) {
    this._pktlenMax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pktlenMaxInput() {
    return this._pktlenMax;
  }

  // pktlen_min - computed: false, optional: false, required: true
  private _pktlenMin?: number; 
  public get pktlenMin() {
    return this.getNumberAttribute('pktlen_min');
  }
  public set pktlenMin(value: number) {
    this._pktlenMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pktlenMinInput() {
    return this._pktlenMin;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // s_port_end - computed: false, optional: false, required: true
  private _sPortEnd?: number; 
  public get sPortEnd() {
    return this.getNumberAttribute('s_port_end');
  }
  public set sPortEnd(value: number) {
    this._sPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sPortEndInput() {
    return this._sPortEnd;
  }

  // s_port_start - computed: false, optional: false, required: true
  private _sPortStart?: number; 
  public get sPortStart() {
    return this.getNumberAttribute('s_port_start');
  }
  public set sPortStart(value: number) {
    this._sPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sPortStartInput() {
    return this._sPortStart;
  }

  // str - computed: false, optional: false, required: true
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }

  // str2 - computed: false, optional: false, required: true
  private _str2?: string; 
  public get str2() {
    return this.getStringAttribute('str2');
  }
  public set str2(value: string) {
    this._str2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get str2Input() {
    return this._str2;
  }
}

export class DayuDdosPolicyV2PacketFiltersList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2PacketFilters[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2PacketFiltersOutputReference {
    return new DayuDdosPolicyV2PacketFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyV2ProtocolBlockConfig {
  /**
  * ICMP block, value [0 (block off), 1 (block on)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#drop_icmp DayuDdosPolicyV2#drop_icmp}
  */
  readonly dropIcmp: number;
  /**
  * Other block, value [0 (block off), 1 (block on)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#drop_other DayuDdosPolicyV2#drop_other}
  */
  readonly dropOther: number;
  /**
  * TCP block, value [0 (block off), 1 (block on)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#drop_tcp DayuDdosPolicyV2#drop_tcp}
  */
  readonly dropTcp: number;
  /**
  * UDP block, value [0 (block off), 1 (block on)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#drop_udp DayuDdosPolicyV2#drop_udp}
  */
  readonly dropUdp: number;
}

export function dayuDdosPolicyV2ProtocolBlockConfigToTerraform(struct?: DayuDdosPolicyV2ProtocolBlockConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_icmp: cdktf.numberToTerraform(struct!.dropIcmp),
    drop_other: cdktf.numberToTerraform(struct!.dropOther),
    drop_tcp: cdktf.numberToTerraform(struct!.dropTcp),
    drop_udp: cdktf.numberToTerraform(struct!.dropUdp),
  }
}


export function dayuDdosPolicyV2ProtocolBlockConfigToHclTerraform(struct?: DayuDdosPolicyV2ProtocolBlockConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_icmp: {
      value: cdktf.numberToHclTerraform(struct!.dropIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_other: {
      value: cdktf.numberToHclTerraform(struct!.dropOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_tcp: {
      value: cdktf.numberToHclTerraform(struct!.dropTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_udp: {
      value: cdktf.numberToHclTerraform(struct!.dropUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2ProtocolBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2ProtocolBlockConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropIcmp = this._dropIcmp;
    }
    if (this._dropOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropOther = this._dropOther;
    }
    if (this._dropTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropTcp = this._dropTcp;
    }
    if (this._dropUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUdp = this._dropUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2ProtocolBlockConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropIcmp = undefined;
      this._dropOther = undefined;
      this._dropTcp = undefined;
      this._dropUdp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropIcmp = value.dropIcmp;
      this._dropOther = value.dropOther;
      this._dropTcp = value.dropTcp;
      this._dropUdp = value.dropUdp;
    }
  }

  // drop_icmp - computed: false, optional: false, required: true
  private _dropIcmp?: number; 
  public get dropIcmp() {
    return this.getNumberAttribute('drop_icmp');
  }
  public set dropIcmp(value: number) {
    this._dropIcmp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIcmpInput() {
    return this._dropIcmp;
  }

  // drop_other - computed: false, optional: false, required: true
  private _dropOther?: number; 
  public get dropOther() {
    return this.getNumberAttribute('drop_other');
  }
  public set dropOther(value: number) {
    this._dropOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOtherInput() {
    return this._dropOther;
  }

  // drop_tcp - computed: false, optional: false, required: true
  private _dropTcp?: number; 
  public get dropTcp() {
    return this.getNumberAttribute('drop_tcp');
  }
  public set dropTcp(value: number) {
    this._dropTcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTcpInput() {
    return this._dropTcp;
  }

  // drop_udp - computed: false, optional: false, required: true
  private _dropUdp?: number; 
  public get dropUdp() {
    return this.getNumberAttribute('drop_udp');
  }
  public set dropUdp(value: number) {
    this._dropUdp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUdpInput() {
    return this._dropUdp;
  }
}

export class DayuDdosPolicyV2ProtocolBlockConfigList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2ProtocolBlockConfig[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2ProtocolBlockConfigOutputReference {
    return new DayuDdosPolicyV2ProtocolBlockConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyV2WaterPrintConfigListeners {
  /**
  * Forwarding protocol, value [TCP, UDP].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#forward_protocol DayuDdosPolicyV2#forward_protocol}
  */
  readonly forwardProtocol: string;
  /**
  * Lower limit of forwarding listening port. Values: [1-65535].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#frontend_port DayuDdosPolicyV2#frontend_port}
  */
  readonly frontendPort: number;
  /**
  * Upper limit of forwarding listening port. Values: [1-65535].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#frontend_port_end DayuDdosPolicyV2#frontend_port_end}
  */
  readonly frontendPortEnd: number;
}

export function dayuDdosPolicyV2WaterPrintConfigListenersToTerraform(struct?: DayuDdosPolicyV2WaterPrintConfigListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_protocol: cdktf.stringToTerraform(struct!.forwardProtocol),
    frontend_port: cdktf.numberToTerraform(struct!.frontendPort),
    frontend_port_end: cdktf.numberToTerraform(struct!.frontendPortEnd),
  }
}


export function dayuDdosPolicyV2WaterPrintConfigListenersToHclTerraform(struct?: DayuDdosPolicyV2WaterPrintConfigListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_protocol: {
      value: cdktf.stringToHclTerraform(struct!.forwardProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_port: {
      value: cdktf.numberToHclTerraform(struct!.frontendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frontend_port_end: {
      value: cdktf.numberToHclTerraform(struct!.frontendPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2WaterPrintConfigListenersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2WaterPrintConfigListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProtocol = this._forwardProtocol;
    }
    if (this._frontendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendPort = this._frontendPort;
    }
    if (this._frontendPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendPortEnd = this._frontendPortEnd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2WaterPrintConfigListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardProtocol = undefined;
      this._frontendPort = undefined;
      this._frontendPortEnd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardProtocol = value.forwardProtocol;
      this._frontendPort = value.frontendPort;
      this._frontendPortEnd = value.frontendPortEnd;
    }
  }

  // forward_protocol - computed: false, optional: false, required: true
  private _forwardProtocol?: string; 
  public get forwardProtocol() {
    return this.getStringAttribute('forward_protocol');
  }
  public set forwardProtocol(value: string) {
    this._forwardProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProtocolInput() {
    return this._forwardProtocol;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // frontend_port_end - computed: false, optional: false, required: true
  private _frontendPortEnd?: number; 
  public get frontendPortEnd() {
    return this.getNumberAttribute('frontend_port_end');
  }
  public set frontendPortEnd(value: number) {
    this._frontendPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortEndInput() {
    return this._frontendPortEnd;
  }
}

export class DayuDdosPolicyV2WaterPrintConfigListenersList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2WaterPrintConfigListeners[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2WaterPrintConfigListenersOutputReference {
    return new DayuDdosPolicyV2WaterPrintConfigListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyV2WaterPrintConfig {
  /**
  * Watermark offset, value range: [0-100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#offset DayuDdosPolicyV2#offset}
  */
  readonly offset: number;
  /**
  * Whether it is enabled, value [0 (manual open), 1 (immediate operation)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#open_status DayuDdosPolicyV2#open_status}
  */
  readonly openStatus: number;
  /**
  * Watermark check mode, value [`checkall`(normal mode), `shortfpcheckall`(simplified mode)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#verify DayuDdosPolicyV2#verify}
  */
  readonly verify: string;
  /**
  * listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#listeners DayuDdosPolicyV2#listeners}
  */
  readonly listeners: DayuDdosPolicyV2WaterPrintConfigListeners[] | cdktf.IResolvable;
}

export function dayuDdosPolicyV2WaterPrintConfigToTerraform(struct?: DayuDdosPolicyV2WaterPrintConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.numberToTerraform(struct!.offset),
    open_status: cdktf.numberToTerraform(struct!.openStatus),
    verify: cdktf.stringToTerraform(struct!.verify),
    listeners: cdktf.listMapper(dayuDdosPolicyV2WaterPrintConfigListenersToTerraform, true)(struct!.listeners),
  }
}


export function dayuDdosPolicyV2WaterPrintConfigToHclTerraform(struct?: DayuDdosPolicyV2WaterPrintConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_status: {
      value: cdktf.numberToHclTerraform(struct!.openStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify: {
      value: cdktf.stringToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listeners: {
      value: cdktf.listMapperHcl(dayuDdosPolicyV2WaterPrintConfigListenersToHclTerraform, true)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DayuDdosPolicyV2WaterPrintConfigListenersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyV2WaterPrintConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuDdosPolicyV2WaterPrintConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._openStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.openStatus = this._openStatus;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyV2WaterPrintConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offset = undefined;
      this._openStatus = undefined;
      this._verify = undefined;
      this._listeners.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offset = value.offset;
      this._openStatus = value.openStatus;
      this._verify = value.verify;
      this._listeners.internalValue = value.listeners;
    }
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // open_status - computed: false, optional: false, required: true
  private _openStatus?: number; 
  public get openStatus() {
    return this.getNumberAttribute('open_status');
  }
  public set openStatus(value: number) {
    this._openStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openStatusInput() {
    return this._openStatus;
  }

  // verify - computed: false, optional: false, required: true
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // listeners - computed: false, optional: false, required: true
  private _listeners = new DayuDdosPolicyV2WaterPrintConfigListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DayuDdosPolicyV2WaterPrintConfigListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }
}

export class DayuDdosPolicyV2WaterPrintConfigList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyV2WaterPrintConfig[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyV2WaterPrintConfigOutputReference {
    return new DayuDdosPolicyV2WaterPrintConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2 tencentcloud_dayu_ddos_policy_v2}
*/
export class DayuDdosPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_ddos_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuDdosPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuDdosPolicyV2 to import
  * @param importFromId The id of the existing DayuDdosPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuDdosPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_ddos_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dayu_ddos_policy_v2 tencentcloud_dayu_ddos_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuDdosPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: DayuDdosPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_ddos_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._business = config.business;
    this._ddosAi = config.ddosAi;
    this._ddosLevel = config.ddosLevel;
    this._ddosThreshold = config.ddosThreshold;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._acls.internalValue = config.acls;
    this._blackWhiteIps.internalValue = config.blackWhiteIps;
    this._ddosConnectLimit.internalValue = config.ddosConnectLimit;
    this._ddosGeoIpBlockConfig.internalValue = config.ddosGeoIpBlockConfig;
    this._ddosSpeedLimitConfig.internalValue = config.ddosSpeedLimitConfig;
    this._packetFilters.internalValue = config.packetFilters;
    this._protocolBlockConfig.internalValue = config.protocolBlockConfig;
    this._waterPrintConfig.internalValue = config.waterPrintConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business - computed: false, optional: true, required: false
  private _business?: string; 
  public get business() {
    return this.getStringAttribute('business');
  }
  public set business(value: string) {
    this._business = value;
  }
  public resetBusiness() {
    this._business = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
  }

  // ddos_ai - computed: false, optional: true, required: false
  private _ddosAi?: string; 
  public get ddosAi() {
    return this.getStringAttribute('ddos_ai');
  }
  public set ddosAi(value: string) {
    this._ddosAi = value;
  }
  public resetDdosAi() {
    this._ddosAi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosAiInput() {
    return this._ddosAi;
  }

  // ddos_level - computed: false, optional: true, required: false
  private _ddosLevel?: string; 
  public get ddosLevel() {
    return this.getStringAttribute('ddos_level');
  }
  public set ddosLevel(value: string) {
    this._ddosLevel = value;
  }
  public resetDdosLevel() {
    this._ddosLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosLevelInput() {
    return this._ddosLevel;
  }

  // ddos_threshold - computed: false, optional: true, required: false
  private _ddosThreshold?: number; 
  public get ddosThreshold() {
    return this.getNumberAttribute('ddos_threshold');
  }
  public set ddosThreshold(value: number) {
    this._ddosThreshold = value;
  }
  public resetDdosThreshold() {
    this._ddosThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosThresholdInput() {
    return this._ddosThreshold;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // acls - computed: false, optional: true, required: false
  private _acls = new DayuDdosPolicyV2AclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: DayuDdosPolicyV2Acls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // black_white_ips - computed: false, optional: true, required: false
  private _blackWhiteIps = new DayuDdosPolicyV2BlackWhiteIpsList(this, "black_white_ips", false);
  public get blackWhiteIps() {
    return this._blackWhiteIps;
  }
  public putBlackWhiteIps(value: DayuDdosPolicyV2BlackWhiteIps[] | cdktf.IResolvable) {
    this._blackWhiteIps.internalValue = value;
  }
  public resetBlackWhiteIps() {
    this._blackWhiteIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackWhiteIpsInput() {
    return this._blackWhiteIps.internalValue;
  }

  // ddos_connect_limit - computed: false, optional: true, required: false
  private _ddosConnectLimit = new DayuDdosPolicyV2DdosConnectLimitOutputReference(this, "ddos_connect_limit");
  public get ddosConnectLimit() {
    return this._ddosConnectLimit;
  }
  public putDdosConnectLimit(value: DayuDdosPolicyV2DdosConnectLimit) {
    this._ddosConnectLimit.internalValue = value;
  }
  public resetDdosConnectLimit() {
    this._ddosConnectLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosConnectLimitInput() {
    return this._ddosConnectLimit.internalValue;
  }

  // ddos_geo_ip_block_config - computed: false, optional: true, required: false
  private _ddosGeoIpBlockConfig = new DayuDdosPolicyV2DdosGeoIpBlockConfigList(this, "ddos_geo_ip_block_config", false);
  public get ddosGeoIpBlockConfig() {
    return this._ddosGeoIpBlockConfig;
  }
  public putDdosGeoIpBlockConfig(value: DayuDdosPolicyV2DdosGeoIpBlockConfig[] | cdktf.IResolvable) {
    this._ddosGeoIpBlockConfig.internalValue = value;
  }
  public resetDdosGeoIpBlockConfig() {
    this._ddosGeoIpBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosGeoIpBlockConfigInput() {
    return this._ddosGeoIpBlockConfig.internalValue;
  }

  // ddos_speed_limit_config - computed: false, optional: true, required: false
  private _ddosSpeedLimitConfig = new DayuDdosPolicyV2DdosSpeedLimitConfigList(this, "ddos_speed_limit_config", false);
  public get ddosSpeedLimitConfig() {
    return this._ddosSpeedLimitConfig;
  }
  public putDdosSpeedLimitConfig(value: DayuDdosPolicyV2DdosSpeedLimitConfig[] | cdktf.IResolvable) {
    this._ddosSpeedLimitConfig.internalValue = value;
  }
  public resetDdosSpeedLimitConfig() {
    this._ddosSpeedLimitConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosSpeedLimitConfigInput() {
    return this._ddosSpeedLimitConfig.internalValue;
  }

  // packet_filters - computed: false, optional: true, required: false
  private _packetFilters = new DayuDdosPolicyV2PacketFiltersList(this, "packet_filters", false);
  public get packetFilters() {
    return this._packetFilters;
  }
  public putPacketFilters(value: DayuDdosPolicyV2PacketFilters[] | cdktf.IResolvable) {
    this._packetFilters.internalValue = value;
  }
  public resetPacketFilters() {
    this._packetFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetFiltersInput() {
    return this._packetFilters.internalValue;
  }

  // protocol_block_config - computed: false, optional: true, required: false
  private _protocolBlockConfig = new DayuDdosPolicyV2ProtocolBlockConfigList(this, "protocol_block_config", false);
  public get protocolBlockConfig() {
    return this._protocolBlockConfig;
  }
  public putProtocolBlockConfig(value: DayuDdosPolicyV2ProtocolBlockConfig[] | cdktf.IResolvable) {
    this._protocolBlockConfig.internalValue = value;
  }
  public resetProtocolBlockConfig() {
    this._protocolBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolBlockConfigInput() {
    return this._protocolBlockConfig.internalValue;
  }

  // water_print_config - computed: false, optional: true, required: false
  private _waterPrintConfig = new DayuDdosPolicyV2WaterPrintConfigList(this, "water_print_config", false);
  public get waterPrintConfig() {
    return this._waterPrintConfig;
  }
  public putWaterPrintConfig(value: DayuDdosPolicyV2WaterPrintConfig[] | cdktf.IResolvable) {
    this._waterPrintConfig.internalValue = value;
  }
  public resetWaterPrintConfig() {
    this._waterPrintConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waterPrintConfigInput() {
    return this._waterPrintConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business: cdktf.stringToTerraform(this._business),
      ddos_ai: cdktf.stringToTerraform(this._ddosAi),
      ddos_level: cdktf.stringToTerraform(this._ddosLevel),
      ddos_threshold: cdktf.numberToTerraform(this._ddosThreshold),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      acls: cdktf.listMapper(dayuDdosPolicyV2AclsToTerraform, true)(this._acls.internalValue),
      black_white_ips: cdktf.listMapper(dayuDdosPolicyV2BlackWhiteIpsToTerraform, true)(this._blackWhiteIps.internalValue),
      ddos_connect_limit: dayuDdosPolicyV2DdosConnectLimitToTerraform(this._ddosConnectLimit.internalValue),
      ddos_geo_ip_block_config: cdktf.listMapper(dayuDdosPolicyV2DdosGeoIpBlockConfigToTerraform, true)(this._ddosGeoIpBlockConfig.internalValue),
      ddos_speed_limit_config: cdktf.listMapper(dayuDdosPolicyV2DdosSpeedLimitConfigToTerraform, true)(this._ddosSpeedLimitConfig.internalValue),
      packet_filters: cdktf.listMapper(dayuDdosPolicyV2PacketFiltersToTerraform, true)(this._packetFilters.internalValue),
      protocol_block_config: cdktf.listMapper(dayuDdosPolicyV2ProtocolBlockConfigToTerraform, true)(this._protocolBlockConfig.internalValue),
      water_print_config: cdktf.listMapper(dayuDdosPolicyV2WaterPrintConfigToTerraform, true)(this._waterPrintConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business: {
        value: cdktf.stringToHclTerraform(this._business),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_ai: {
        value: cdktf.stringToHclTerraform(this._ddosAi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_level: {
        value: cdktf.stringToHclTerraform(this._ddosLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_threshold: {
        value: cdktf.numberToHclTerraform(this._ddosThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acls: {
        value: cdktf.listMapperHcl(dayuDdosPolicyV2AclsToHclTerraform, true)(this._acls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2AclsList",
      },
      black_white_ips: {
        value: cdktf.listMapperHcl(dayuDdosPolicyV2BlackWhiteIpsToHclTerraform, true)(this._blackWhiteIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2BlackWhiteIpsList",
      },
      ddos_connect_limit: {
        value: dayuDdosPolicyV2DdosConnectLimitToHclTerraform(this._ddosConnectLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2DdosConnectLimitList",
      },
      ddos_geo_ip_block_config: {
        value: cdktf.listMapperHcl(dayuDdosPolicyV2DdosGeoIpBlockConfigToHclTerraform, true)(this._ddosGeoIpBlockConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2DdosGeoIpBlockConfigList",
      },
      ddos_speed_limit_config: {
        value: cdktf.listMapperHcl(dayuDdosPolicyV2DdosSpeedLimitConfigToHclTerraform, true)(this._ddosSpeedLimitConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2DdosSpeedLimitConfigList",
      },
      packet_filters: {
        value: cdktf.listMapperHcl(dayuDdosPolicyV2PacketFiltersToHclTerraform, true)(this._packetFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2PacketFiltersList",
      },
      protocol_block_config: {
        value: cdktf.listMapperHcl(dayuDdosPolicyV2ProtocolBlockConfigToHclTerraform, true)(this._protocolBlockConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2ProtocolBlockConfigList",
      },
      water_print_config: {
        value: cdktf.listMapperHcl(dayuDdosPolicyV2WaterPrintConfigToHclTerraform, true)(this._waterPrintConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyV2WaterPrintConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
