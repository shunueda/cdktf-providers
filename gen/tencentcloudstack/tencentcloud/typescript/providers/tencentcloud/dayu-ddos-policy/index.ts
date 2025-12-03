// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuDdosPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Black IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#black_ips DayuDdosPolicy#black_ips}
  */
  readonly blackIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#id DayuDdosPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the DDoS policy. Length should between 1 and 32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#name DayuDdosPolicy#name}
  */
  readonly name: string;
  /**
  * Type of the resource that the DDoS policy works for. Valid values: `bgpip`, `bgp`, `bgp-multip` and `net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#resource_type DayuDdosPolicy#resource_type}
  */
  readonly resourceType: string;
  /**
  * White IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#white_ips DayuDdosPolicy#white_ips}
  */
  readonly whiteIps?: string[];
  /**
  * drop_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#drop_options DayuDdosPolicy#drop_options}
  */
  readonly dropOptions: DayuDdosPolicyDropOptions[] | cdktf.IResolvable;
  /**
  * packet_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#packet_filters DayuDdosPolicy#packet_filters}
  */
  readonly packetFilters?: DayuDdosPolicyPacketFilters[] | cdktf.IResolvable;
  /**
  * port_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#port_filters DayuDdosPolicy#port_filters}
  */
  readonly portFilters?: DayuDdosPolicyPortFilters[] | cdktf.IResolvable;
  /**
  * watermark_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#watermark_filters DayuDdosPolicy#watermark_filters}
  */
  readonly watermarkFilters?: DayuDdosPolicyWatermarkFilters[] | cdktf.IResolvable;
}
export interface DayuDdosPolicyWatermarkKey {
}

export function dayuDdosPolicyWatermarkKeyToTerraform(struct?: DayuDdosPolicyWatermarkKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dayuDdosPolicyWatermarkKeyToHclTerraform(struct?: DayuDdosPolicyWatermarkKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DayuDdosPolicyWatermarkKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuDdosPolicyWatermarkKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyWatermarkKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // open_switch - computed: true, optional: false, required: false
  public get openSwitch() {
    return this.getBooleanAttribute('open_switch');
  }
}

export class DayuDdosPolicyWatermarkKeyList extends cdktf.ComplexList {

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
  public get(index: number): DayuDdosPolicyWatermarkKeyOutputReference {
    return new DayuDdosPolicyWatermarkKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyDropOptions {
  /**
  * The number of new connections based on destination IP that trigger suppression of connections. Valid value ranges: (0~4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#bad_conn_threshold DayuDdosPolicy#bad_conn_threshold}
  */
  readonly badConnThreshold: number;
  /**
  * Indicate whether to check null connection or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#check_sync_conn DayuDdosPolicy#check_sync_conn}
  */
  readonly checkSyncConn: boolean | cdktf.IResolvable;
  /**
  * Connection timeout of abnormal connection check. Valid value ranges: (0~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#conn_timeout DayuDdosPolicy#conn_timeout}
  */
  readonly connTimeout: number;
  /**
  * The limit of concurrent connections based on destination IP. Valid value ranges: (0~4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#d_conn_limit DayuDdosPolicy#d_conn_limit}
  */
  readonly dConnLimit: number;
  /**
  * The limit of new connections based on destination IP. Valid value ranges: (0~4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#d_new_limit DayuDdosPolicy#d_new_limit}
  */
  readonly dNewLimit: number;
  /**
  * Indicate whether to drop abroad traffic or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#drop_abroad DayuDdosPolicy#drop_abroad}
  */
  readonly dropAbroad: boolean | cdktf.IResolvable;
  /**
  * Indicate whether to drop ICMP protocol or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#drop_icmp DayuDdosPolicy#drop_icmp}
  */
  readonly dropIcmp: boolean | cdktf.IResolvable;
  /**
  * Indicate whether to drop other protocols(exclude TCP/UDP/ICMP) or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#drop_other DayuDdosPolicy#drop_other}
  */
  readonly dropOther: boolean | cdktf.IResolvable;
  /**
  * Indicate whether to drop TCP protocol or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#drop_tcp DayuDdosPolicy#drop_tcp}
  */
  readonly dropTcp: boolean | cdktf.IResolvable;
  /**
  * Indicate to drop UDP protocol or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#drop_udp DayuDdosPolicy#drop_udp}
  */
  readonly dropUdp: boolean | cdktf.IResolvable;
  /**
  * The limit of ICMP traffic rate. Valid value ranges: (0~4294967295)(Mbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#icmp_mbps_limit DayuDdosPolicy#icmp_mbps_limit}
  */
  readonly icmpMbpsLimit: number;
  /**
  * Indicate to enable null connection or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#null_conn_enable DayuDdosPolicy#null_conn_enable}
  */
  readonly nullConnEnable: boolean | cdktf.IResolvable;
  /**
  * The limit of other protocols(exclude TCP/UDP/ICMP) traffic rate. Valid value ranges: (0~4294967295)(Mbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#other_mbps_limit DayuDdosPolicy#other_mbps_limit}
  */
  readonly otherMbpsLimit: number;
  /**
  * The limit of concurrent connections based on source IP. Valid value ranges: (0~4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#s_conn_limit DayuDdosPolicy#s_conn_limit}
  */
  readonly sConnLimit: number;
  /**
  * The limit of new connections based on source IP. Valid value ranges: (0~4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#s_new_limit DayuDdosPolicy#s_new_limit}
  */
  readonly sNewLimit: number;
  /**
  * The limit of syn of abnormal connection check. Valid value ranges: (0~100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#syn_limit DayuDdosPolicy#syn_limit}
  */
  readonly synLimit: number;
  /**
  * The percentage of syn in ack of abnormal connection check. Valid value ranges: (0~100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#syn_rate DayuDdosPolicy#syn_rate}
  */
  readonly synRate?: number;
  /**
  * The limit of TCP traffic. Valid value ranges: (0~4294967295)(Mbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#tcp_mbps_limit DayuDdosPolicy#tcp_mbps_limit}
  */
  readonly tcpMbpsLimit: number;
  /**
  * The limit of UDP traffic rate. Valid value ranges: (0~4294967295)(Mbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#udp_mbps_limit DayuDdosPolicy#udp_mbps_limit}
  */
  readonly udpMbpsLimit: number;
}

export function dayuDdosPolicyDropOptionsToTerraform(struct?: DayuDdosPolicyDropOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_conn_threshold: cdktf.numberToTerraform(struct!.badConnThreshold),
    check_sync_conn: cdktf.booleanToTerraform(struct!.checkSyncConn),
    conn_timeout: cdktf.numberToTerraform(struct!.connTimeout),
    d_conn_limit: cdktf.numberToTerraform(struct!.dConnLimit),
    d_new_limit: cdktf.numberToTerraform(struct!.dNewLimit),
    drop_abroad: cdktf.booleanToTerraform(struct!.dropAbroad),
    drop_icmp: cdktf.booleanToTerraform(struct!.dropIcmp),
    drop_other: cdktf.booleanToTerraform(struct!.dropOther),
    drop_tcp: cdktf.booleanToTerraform(struct!.dropTcp),
    drop_udp: cdktf.booleanToTerraform(struct!.dropUdp),
    icmp_mbps_limit: cdktf.numberToTerraform(struct!.icmpMbpsLimit),
    null_conn_enable: cdktf.booleanToTerraform(struct!.nullConnEnable),
    other_mbps_limit: cdktf.numberToTerraform(struct!.otherMbpsLimit),
    s_conn_limit: cdktf.numberToTerraform(struct!.sConnLimit),
    s_new_limit: cdktf.numberToTerraform(struct!.sNewLimit),
    syn_limit: cdktf.numberToTerraform(struct!.synLimit),
    syn_rate: cdktf.numberToTerraform(struct!.synRate),
    tcp_mbps_limit: cdktf.numberToTerraform(struct!.tcpMbpsLimit),
    udp_mbps_limit: cdktf.numberToTerraform(struct!.udpMbpsLimit),
  }
}


export function dayuDdosPolicyDropOptionsToHclTerraform(struct?: DayuDdosPolicyDropOptions | cdktf.IResolvable): any {
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
    check_sync_conn: {
      value: cdktf.booleanToHclTerraform(struct!.checkSyncConn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    d_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.dConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    d_new_limit: {
      value: cdktf.numberToHclTerraform(struct!.dNewLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_abroad: {
      value: cdktf.booleanToHclTerraform(struct!.dropAbroad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_icmp: {
      value: cdktf.booleanToHclTerraform(struct!.dropIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_other: {
      value: cdktf.booleanToHclTerraform(struct!.dropOther),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_tcp: {
      value: cdktf.booleanToHclTerraform(struct!.dropTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_udp: {
      value: cdktf.booleanToHclTerraform(struct!.dropUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icmp_mbps_limit: {
      value: cdktf.numberToHclTerraform(struct!.icmpMbpsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    null_conn_enable: {
      value: cdktf.booleanToHclTerraform(struct!.nullConnEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    other_mbps_limit: {
      value: cdktf.numberToHclTerraform(struct!.otherMbpsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.sConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_new_limit: {
      value: cdktf.numberToHclTerraform(struct!.sNewLimit),
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
    tcp_mbps_limit: {
      value: cdktf.numberToHclTerraform(struct!.tcpMbpsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_mbps_limit: {
      value: cdktf.numberToHclTerraform(struct!.udpMbpsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyDropOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuDdosPolicyDropOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badConnThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.badConnThreshold = this._badConnThreshold;
    }
    if (this._checkSyncConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSyncConn = this._checkSyncConn;
    }
    if (this._connTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTimeout = this._connTimeout;
    }
    if (this._dConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dConnLimit = this._dConnLimit;
    }
    if (this._dNewLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dNewLimit = this._dNewLimit;
    }
    if (this._dropAbroad !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAbroad = this._dropAbroad;
    }
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
    if (this._icmpMbpsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMbpsLimit = this._icmpMbpsLimit;
    }
    if (this._nullConnEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullConnEnable = this._nullConnEnable;
    }
    if (this._otherMbpsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherMbpsLimit = this._otherMbpsLimit;
    }
    if (this._sConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sConnLimit = this._sConnLimit;
    }
    if (this._sNewLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sNewLimit = this._sNewLimit;
    }
    if (this._synLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.synLimit = this._synLimit;
    }
    if (this._synRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRate = this._synRate;
    }
    if (this._tcpMbpsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMbpsLimit = this._tcpMbpsLimit;
    }
    if (this._udpMbpsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpMbpsLimit = this._udpMbpsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyDropOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._badConnThreshold = undefined;
      this._checkSyncConn = undefined;
      this._connTimeout = undefined;
      this._dConnLimit = undefined;
      this._dNewLimit = undefined;
      this._dropAbroad = undefined;
      this._dropIcmp = undefined;
      this._dropOther = undefined;
      this._dropTcp = undefined;
      this._dropUdp = undefined;
      this._icmpMbpsLimit = undefined;
      this._nullConnEnable = undefined;
      this._otherMbpsLimit = undefined;
      this._sConnLimit = undefined;
      this._sNewLimit = undefined;
      this._synLimit = undefined;
      this._synRate = undefined;
      this._tcpMbpsLimit = undefined;
      this._udpMbpsLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._badConnThreshold = value.badConnThreshold;
      this._checkSyncConn = value.checkSyncConn;
      this._connTimeout = value.connTimeout;
      this._dConnLimit = value.dConnLimit;
      this._dNewLimit = value.dNewLimit;
      this._dropAbroad = value.dropAbroad;
      this._dropIcmp = value.dropIcmp;
      this._dropOther = value.dropOther;
      this._dropTcp = value.dropTcp;
      this._dropUdp = value.dropUdp;
      this._icmpMbpsLimit = value.icmpMbpsLimit;
      this._nullConnEnable = value.nullConnEnable;
      this._otherMbpsLimit = value.otherMbpsLimit;
      this._sConnLimit = value.sConnLimit;
      this._sNewLimit = value.sNewLimit;
      this._synLimit = value.synLimit;
      this._synRate = value.synRate;
      this._tcpMbpsLimit = value.tcpMbpsLimit;
      this._udpMbpsLimit = value.udpMbpsLimit;
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

  // check_sync_conn - computed: false, optional: false, required: true
  private _checkSyncConn?: boolean | cdktf.IResolvable; 
  public get checkSyncConn() {
    return this.getBooleanAttribute('check_sync_conn');
  }
  public set checkSyncConn(value: boolean | cdktf.IResolvable) {
    this._checkSyncConn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSyncConnInput() {
    return this._checkSyncConn;
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

  // d_conn_limit - computed: false, optional: false, required: true
  private _dConnLimit?: number; 
  public get dConnLimit() {
    return this.getNumberAttribute('d_conn_limit');
  }
  public set dConnLimit(value: number) {
    this._dConnLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dConnLimitInput() {
    return this._dConnLimit;
  }

  // d_new_limit - computed: false, optional: false, required: true
  private _dNewLimit?: number; 
  public get dNewLimit() {
    return this.getNumberAttribute('d_new_limit');
  }
  public set dNewLimit(value: number) {
    this._dNewLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dNewLimitInput() {
    return this._dNewLimit;
  }

  // drop_abroad - computed: false, optional: false, required: true
  private _dropAbroad?: boolean | cdktf.IResolvable; 
  public get dropAbroad() {
    return this.getBooleanAttribute('drop_abroad');
  }
  public set dropAbroad(value: boolean | cdktf.IResolvable) {
    this._dropAbroad = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAbroadInput() {
    return this._dropAbroad;
  }

  // drop_icmp - computed: false, optional: false, required: true
  private _dropIcmp?: boolean | cdktf.IResolvable; 
  public get dropIcmp() {
    return this.getBooleanAttribute('drop_icmp');
  }
  public set dropIcmp(value: boolean | cdktf.IResolvable) {
    this._dropIcmp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIcmpInput() {
    return this._dropIcmp;
  }

  // drop_other - computed: false, optional: false, required: true
  private _dropOther?: boolean | cdktf.IResolvable; 
  public get dropOther() {
    return this.getBooleanAttribute('drop_other');
  }
  public set dropOther(value: boolean | cdktf.IResolvable) {
    this._dropOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOtherInput() {
    return this._dropOther;
  }

  // drop_tcp - computed: false, optional: false, required: true
  private _dropTcp?: boolean | cdktf.IResolvable; 
  public get dropTcp() {
    return this.getBooleanAttribute('drop_tcp');
  }
  public set dropTcp(value: boolean | cdktf.IResolvable) {
    this._dropTcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTcpInput() {
    return this._dropTcp;
  }

  // drop_udp - computed: false, optional: false, required: true
  private _dropUdp?: boolean | cdktf.IResolvable; 
  public get dropUdp() {
    return this.getBooleanAttribute('drop_udp');
  }
  public set dropUdp(value: boolean | cdktf.IResolvable) {
    this._dropUdp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUdpInput() {
    return this._dropUdp;
  }

  // icmp_mbps_limit - computed: false, optional: false, required: true
  private _icmpMbpsLimit?: number; 
  public get icmpMbpsLimit() {
    return this.getNumberAttribute('icmp_mbps_limit');
  }
  public set icmpMbpsLimit(value: number) {
    this._icmpMbpsLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMbpsLimitInput() {
    return this._icmpMbpsLimit;
  }

  // null_conn_enable - computed: false, optional: false, required: true
  private _nullConnEnable?: boolean | cdktf.IResolvable; 
  public get nullConnEnable() {
    return this.getBooleanAttribute('null_conn_enable');
  }
  public set nullConnEnable(value: boolean | cdktf.IResolvable) {
    this._nullConnEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullConnEnableInput() {
    return this._nullConnEnable;
  }

  // other_mbps_limit - computed: false, optional: false, required: true
  private _otherMbpsLimit?: number; 
  public get otherMbpsLimit() {
    return this.getNumberAttribute('other_mbps_limit');
  }
  public set otherMbpsLimit(value: number) {
    this._otherMbpsLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otherMbpsLimitInput() {
    return this._otherMbpsLimit;
  }

  // s_conn_limit - computed: false, optional: false, required: true
  private _sConnLimit?: number; 
  public get sConnLimit() {
    return this.getNumberAttribute('s_conn_limit');
  }
  public set sConnLimit(value: number) {
    this._sConnLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sConnLimitInput() {
    return this._sConnLimit;
  }

  // s_new_limit - computed: false, optional: false, required: true
  private _sNewLimit?: number; 
  public get sNewLimit() {
    return this.getNumberAttribute('s_new_limit');
  }
  public set sNewLimit(value: number) {
    this._sNewLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sNewLimitInput() {
    return this._sNewLimit;
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

  // syn_rate - computed: false, optional: true, required: false
  private _synRate?: number; 
  public get synRate() {
    return this.getNumberAttribute('syn_rate');
  }
  public set synRate(value: number) {
    this._synRate = value;
  }
  public resetSynRate() {
    this._synRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRateInput() {
    return this._synRate;
  }

  // tcp_mbps_limit - computed: false, optional: false, required: true
  private _tcpMbpsLimit?: number; 
  public get tcpMbpsLimit() {
    return this.getNumberAttribute('tcp_mbps_limit');
  }
  public set tcpMbpsLimit(value: number) {
    this._tcpMbpsLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMbpsLimitInput() {
    return this._tcpMbpsLimit;
  }

  // udp_mbps_limit - computed: false, optional: false, required: true
  private _udpMbpsLimit?: number; 
  public get udpMbpsLimit() {
    return this.getNumberAttribute('udp_mbps_limit');
  }
  public set udpMbpsLimit(value: number) {
    this._udpMbpsLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpMbpsLimitInput() {
    return this._udpMbpsLimit;
  }
}

export class DayuDdosPolicyDropOptionsList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyDropOptions[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyDropOptionsOutputReference {
    return new DayuDdosPolicyDropOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyPacketFilters {
  /**
  * Action of port to take. Valid values: `drop`, `drop_black`,`drop_rst`,`drop_black_rst`,`transmit`.`drop`(drop the packet), `drop_black`(drop the packet and black the ip),`drop_rst`(drop the packet and disconnect),`drop_black_rst`(drop the packet, black the ip and disconnect),`transmit`(transmit the packet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#action DayuDdosPolicy#action}
  */
  readonly action?: string;
  /**
  * End port of the destination. Valid value ranges: (0~65535). It must be greater than `d_start_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#d_end_port DayuDdosPolicy#d_end_port}
  */
  readonly dEndPort?: number;
  /**
  * Start port of the destination. Valid value ranges: (0~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#d_start_port DayuDdosPolicy#d_start_port}
  */
  readonly dStartPort?: number;
  /**
  * The depth of match. Valid value ranges: (0~1500).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#depth DayuDdosPolicy#depth}
  */
  readonly depth?: number;
  /**
  * Indicate whether to include the key word/regular expression or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#is_include DayuDdosPolicy#is_include}
  */
  readonly isInclude?: boolean | cdktf.IResolvable;
  /**
  * Indicate whether to check load or not, `begin_l5` means to match and `no_match` means not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#match_begin DayuDdosPolicy#match_begin}
  */
  readonly matchBegin?: string;
  /**
  * The key word or regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#match_str DayuDdosPolicy#match_str}
  */
  readonly matchStr?: string;
  /**
  * Match type. Valid values: `sunday` and `pcre`. `sunday` means key word match while `pcre` means regular match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#match_type DayuDdosPolicy#match_type}
  */
  readonly matchType?: string;
  /**
  * The offset of match. Valid value ranges: (0~1500).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#offset DayuDdosPolicy#offset}
  */
  readonly offset?: number;
  /**
  * The max length of the packet. Valid value ranges: (0~1500)(Mbps). It must be greater than `pkt_length_min`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#pkt_length_max DayuDdosPolicy#pkt_length_max}
  */
  readonly pktLengthMax?: number;
  /**
  * The minimum length of the packet. Valid value ranges: (0~1500)(Mbps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#pkt_length_min DayuDdosPolicy#pkt_length_min}
  */
  readonly pktLengthMin?: number;
  /**
  * Protocol. Valid values: `tcp`, `udp`, `icmp`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#protocol DayuDdosPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * End port of the source. Valid value ranges: (0~65535). It must be greater than `s_start_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#s_end_port DayuDdosPolicy#s_end_port}
  */
  readonly sEndPort?: number;
  /**
  * Start port of the source. Valid value ranges: (0~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#s_start_port DayuDdosPolicy#s_start_port}
  */
  readonly sStartPort?: number;
}

export function dayuDdosPolicyPacketFiltersToTerraform(struct?: DayuDdosPolicyPacketFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    d_end_port: cdktf.numberToTerraform(struct!.dEndPort),
    d_start_port: cdktf.numberToTerraform(struct!.dStartPort),
    depth: cdktf.numberToTerraform(struct!.depth),
    is_include: cdktf.booleanToTerraform(struct!.isInclude),
    match_begin: cdktf.stringToTerraform(struct!.matchBegin),
    match_str: cdktf.stringToTerraform(struct!.matchStr),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    offset: cdktf.numberToTerraform(struct!.offset),
    pkt_length_max: cdktf.numberToTerraform(struct!.pktLengthMax),
    pkt_length_min: cdktf.numberToTerraform(struct!.pktLengthMin),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    s_end_port: cdktf.numberToTerraform(struct!.sEndPort),
    s_start_port: cdktf.numberToTerraform(struct!.sStartPort),
  }
}


export function dayuDdosPolicyPacketFiltersToHclTerraform(struct?: DayuDdosPolicyPacketFilters | cdktf.IResolvable): any {
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
    d_end_port: {
      value: cdktf.numberToHclTerraform(struct!.dEndPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    d_start_port: {
      value: cdktf.numberToHclTerraform(struct!.dStartPort),
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
    is_include: {
      value: cdktf.booleanToHclTerraform(struct!.isInclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_begin: {
      value: cdktf.stringToHclTerraform(struct!.matchBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.stringToHclTerraform(struct!.matchStr),
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
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_length_max: {
      value: cdktf.numberToHclTerraform(struct!.pktLengthMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_length_min: {
      value: cdktf.numberToHclTerraform(struct!.pktLengthMin),
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
    s_end_port: {
      value: cdktf.numberToHclTerraform(struct!.sEndPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s_start_port: {
      value: cdktf.numberToHclTerraform(struct!.sStartPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyPacketFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuDdosPolicyPacketFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dEndPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dEndPort = this._dEndPort;
    }
    if (this._dStartPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dStartPort = this._dStartPort;
    }
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._isInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInclude = this._isInclude;
    }
    if (this._matchBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBegin = this._matchBegin;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._pktLengthMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktLengthMax = this._pktLengthMax;
    }
    if (this._pktLengthMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktLengthMin = this._pktLengthMin;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sEndPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sEndPort = this._sEndPort;
    }
    if (this._sStartPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sStartPort = this._sStartPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyPacketFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dEndPort = undefined;
      this._dStartPort = undefined;
      this._depth = undefined;
      this._isInclude = undefined;
      this._matchBegin = undefined;
      this._matchStr = undefined;
      this._matchType = undefined;
      this._offset = undefined;
      this._pktLengthMax = undefined;
      this._pktLengthMin = undefined;
      this._protocol = undefined;
      this._sEndPort = undefined;
      this._sStartPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dEndPort = value.dEndPort;
      this._dStartPort = value.dStartPort;
      this._depth = value.depth;
      this._isInclude = value.isInclude;
      this._matchBegin = value.matchBegin;
      this._matchStr = value.matchStr;
      this._matchType = value.matchType;
      this._offset = value.offset;
      this._pktLengthMax = value.pktLengthMax;
      this._pktLengthMin = value.pktLengthMin;
      this._protocol = value.protocol;
      this._sEndPort = value.sEndPort;
      this._sStartPort = value.sStartPort;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // d_end_port - computed: false, optional: true, required: false
  private _dEndPort?: number; 
  public get dEndPort() {
    return this.getNumberAttribute('d_end_port');
  }
  public set dEndPort(value: number) {
    this._dEndPort = value;
  }
  public resetDEndPort() {
    this._dEndPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dEndPortInput() {
    return this._dEndPort;
  }

  // d_start_port - computed: false, optional: true, required: false
  private _dStartPort?: number; 
  public get dStartPort() {
    return this.getNumberAttribute('d_start_port');
  }
  public set dStartPort(value: number) {
    this._dStartPort = value;
  }
  public resetDStartPort() {
    this._dStartPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dStartPortInput() {
    return this._dStartPort;
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // is_include - computed: false, optional: true, required: false
  private _isInclude?: boolean | cdktf.IResolvable; 
  public get isInclude() {
    return this.getBooleanAttribute('is_include');
  }
  public set isInclude(value: boolean | cdktf.IResolvable) {
    this._isInclude = value;
  }
  public resetIsInclude() {
    this._isInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludeInput() {
    return this._isInclude;
  }

  // match_begin - computed: false, optional: true, required: false
  private _matchBegin?: string; 
  public get matchBegin() {
    return this.getStringAttribute('match_begin');
  }
  public set matchBegin(value: string) {
    this._matchBegin = value;
  }
  public resetMatchBegin() {
    this._matchBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBeginInput() {
    return this._matchBegin;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string; 
  public get matchStr() {
    return this.getStringAttribute('match_str');
  }
  public set matchStr(value: string) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // pkt_length_max - computed: false, optional: true, required: false
  private _pktLengthMax?: number; 
  public get pktLengthMax() {
    return this.getNumberAttribute('pkt_length_max');
  }
  public set pktLengthMax(value: number) {
    this._pktLengthMax = value;
  }
  public resetPktLengthMax() {
    this._pktLengthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktLengthMaxInput() {
    return this._pktLengthMax;
  }

  // pkt_length_min - computed: false, optional: true, required: false
  private _pktLengthMin?: number; 
  public get pktLengthMin() {
    return this.getNumberAttribute('pkt_length_min');
  }
  public set pktLengthMin(value: number) {
    this._pktLengthMin = value;
  }
  public resetPktLengthMin() {
    this._pktLengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktLengthMinInput() {
    return this._pktLengthMin;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // s_end_port - computed: false, optional: true, required: false
  private _sEndPort?: number; 
  public get sEndPort() {
    return this.getNumberAttribute('s_end_port');
  }
  public set sEndPort(value: number) {
    this._sEndPort = value;
  }
  public resetSEndPort() {
    this._sEndPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sEndPortInput() {
    return this._sEndPort;
  }

  // s_start_port - computed: false, optional: true, required: false
  private _sStartPort?: number; 
  public get sStartPort() {
    return this.getNumberAttribute('s_start_port');
  }
  public set sStartPort(value: number) {
    this._sStartPort = value;
  }
  public resetSStartPort() {
    this._sStartPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sStartPortInput() {
    return this._sStartPort;
  }
}

export class DayuDdosPolicyPacketFiltersList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyPacketFilters[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyPacketFiltersOutputReference {
    return new DayuDdosPolicyPacketFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyPortFilters {
  /**
  * Action of port to take. Valid values: `drop`, `transmit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#action DayuDdosPolicy#action}
  */
  readonly action?: string;
  /**
  * End port. Valid value ranges: (0~65535). It must be greater than `start_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#end_port DayuDdosPolicy#end_port}
  */
  readonly endPort?: number;
  /**
  * The type of forbidden port. Valid values: `0`, `1`, `2`. `0` for destination ports make effect, `1` for source ports make effect. `2` for both destination and source ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#kind DayuDdosPolicy#kind}
  */
  readonly kind?: number;
  /**
  * Protocol. Valid values are `tcp`, `udp`, `icmp`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#protocol DayuDdosPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Start port. Valid value ranges: (0~65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#start_port DayuDdosPolicy#start_port}
  */
  readonly startPort?: number;
}

export function dayuDdosPolicyPortFiltersToTerraform(struct?: DayuDdosPolicyPortFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    kind: cdktf.numberToTerraform(struct!.kind),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function dayuDdosPolicyPortFiltersToHclTerraform(struct?: DayuDdosPolicyPortFilters | cdktf.IResolvable): any {
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
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.numberToHclTerraform(struct!.kind),
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
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyPortFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuDdosPolicyPortFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyPortFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._endPort = undefined;
      this._kind = undefined;
      this._protocol = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._endPort = value.endPort;
      this._kind = value.kind;
      this._protocol = value.protocol;
      this._startPort = value.startPort;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: number; 
  public get kind() {
    return this.getNumberAttribute('kind');
  }
  public set kind(value: number) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class DayuDdosPolicyPortFiltersList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyPortFilters[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyPortFiltersOutputReference {
    return new DayuDdosPolicyPortFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuDdosPolicyWatermarkFilters {
  /**
  * Indicate whether to auto-remove the watermark or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#auto_remove DayuDdosPolicy#auto_remove}
  */
  readonly autoRemove?: boolean | cdktf.IResolvable;
  /**
  * The offset of watermark. Valid value ranges: (0~1500).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#offset DayuDdosPolicy#offset}
  */
  readonly offset?: number;
  /**
  * Indicate whether to open watermark or not. It muse be set `true` when any field of watermark was set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#open_switch DayuDdosPolicy#open_switch}
  */
  readonly openSwitch?: boolean | cdktf.IResolvable;
  /**
  * Port range of TCP, the format is like `2000-3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#tcp_port_list DayuDdosPolicy#tcp_port_list}
  */
  readonly tcpPortList?: string[];
  /**
  * Port range of TCP, the format is like `2000-3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#udp_port_list DayuDdosPolicy#udp_port_list}
  */
  readonly udpPortList?: string[];
}

export function dayuDdosPolicyWatermarkFiltersToTerraform(struct?: DayuDdosPolicyWatermarkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_remove: cdktf.booleanToTerraform(struct!.autoRemove),
    offset: cdktf.numberToTerraform(struct!.offset),
    open_switch: cdktf.booleanToTerraform(struct!.openSwitch),
    tcp_port_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpPortList),
    udp_port_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.udpPortList),
  }
}


export function dayuDdosPolicyWatermarkFiltersToHclTerraform(struct?: DayuDdosPolicyWatermarkFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_remove: {
      value: cdktf.booleanToHclTerraform(struct!.autoRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_switch: {
      value: cdktf.booleanToHclTerraform(struct!.openSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_port_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpPortList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    udp_port_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.udpPortList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosPolicyWatermarkFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuDdosPolicyWatermarkFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRemove = this._autoRemove;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._openSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSwitch = this._openSwitch;
    }
    if (this._tcpPortList !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortList = this._tcpPortList;
    }
    if (this._udpPortList !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortList = this._udpPortList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosPolicyWatermarkFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRemove = undefined;
      this._offset = undefined;
      this._openSwitch = undefined;
      this._tcpPortList = undefined;
      this._udpPortList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRemove = value.autoRemove;
      this._offset = value.offset;
      this._openSwitch = value.openSwitch;
      this._tcpPortList = value.tcpPortList;
      this._udpPortList = value.udpPortList;
    }
  }

  // auto_remove - computed: false, optional: true, required: false
  private _autoRemove?: boolean | cdktf.IResolvable; 
  public get autoRemove() {
    return this.getBooleanAttribute('auto_remove');
  }
  public set autoRemove(value: boolean | cdktf.IResolvable) {
    this._autoRemove = value;
  }
  public resetAutoRemove() {
    this._autoRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRemoveInput() {
    return this._autoRemove;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // open_switch - computed: false, optional: true, required: false
  private _openSwitch?: boolean | cdktf.IResolvable; 
  public get openSwitch() {
    return this.getBooleanAttribute('open_switch');
  }
  public set openSwitch(value: boolean | cdktf.IResolvable) {
    this._openSwitch = value;
  }
  public resetOpenSwitch() {
    this._openSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSwitchInput() {
    return this._openSwitch;
  }

  // tcp_port_list - computed: false, optional: true, required: false
  private _tcpPortList?: string[]; 
  public get tcpPortList() {
    return this.getListAttribute('tcp_port_list');
  }
  public set tcpPortList(value: string[]) {
    this._tcpPortList = value;
  }
  public resetTcpPortList() {
    this._tcpPortList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortListInput() {
    return this._tcpPortList;
  }

  // udp_port_list - computed: false, optional: true, required: false
  private _udpPortList?: string[]; 
  public get udpPortList() {
    return this.getListAttribute('udp_port_list');
  }
  public set udpPortList(value: string[]) {
    this._udpPortList = value;
  }
  public resetUdpPortList() {
    this._udpPortList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortListInput() {
    return this._udpPortList;
  }
}

export class DayuDdosPolicyWatermarkFiltersList extends cdktf.ComplexList {
  public internalValue? : DayuDdosPolicyWatermarkFilters[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosPolicyWatermarkFiltersOutputReference {
    return new DayuDdosPolicyWatermarkFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy tencentcloud_dayu_ddos_policy}
*/
export class DayuDdosPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_ddos_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuDdosPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuDdosPolicy to import
  * @param importFromId The id of the existing DayuDdosPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuDdosPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_ddos_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dayu_ddos_policy tencentcloud_dayu_ddos_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuDdosPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DayuDdosPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_ddos_policy',
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
    this._blackIps = config.blackIps;
    this._id = config.id;
    this._name = config.name;
    this._resourceType = config.resourceType;
    this._whiteIps = config.whiteIps;
    this._dropOptions.internalValue = config.dropOptions;
    this._packetFilters.internalValue = config.packetFilters;
    this._portFilters.internalValue = config.portFilters;
    this._watermarkFilters.internalValue = config.watermarkFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // black_ips - computed: false, optional: true, required: false
  private _blackIps?: string[]; 
  public get blackIps() {
    return cdktf.Fn.tolist(this.getListAttribute('black_ips'));
  }
  public set blackIps(value: string[]) {
    this._blackIps = value;
  }
  public resetBlackIps() {
    this._blackIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackIpsInput() {
    return this._blackIps;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // scene_id - computed: true, optional: false, required: false
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }

  // watermark_key - computed: true, optional: false, required: false
  private _watermarkKey = new DayuDdosPolicyWatermarkKeyList(this, "watermark_key", false);
  public get watermarkKey() {
    return this._watermarkKey;
  }

  // white_ips - computed: false, optional: true, required: false
  private _whiteIps?: string[]; 
  public get whiteIps() {
    return cdktf.Fn.tolist(this.getListAttribute('white_ips'));
  }
  public set whiteIps(value: string[]) {
    this._whiteIps = value;
  }
  public resetWhiteIps() {
    this._whiteIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteIpsInput() {
    return this._whiteIps;
  }

  // drop_options - computed: false, optional: false, required: true
  private _dropOptions = new DayuDdosPolicyDropOptionsList(this, "drop_options", false);
  public get dropOptions() {
    return this._dropOptions;
  }
  public putDropOptions(value: DayuDdosPolicyDropOptions[] | cdktf.IResolvable) {
    this._dropOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOptionsInput() {
    return this._dropOptions.internalValue;
  }

  // packet_filters - computed: false, optional: true, required: false
  private _packetFilters = new DayuDdosPolicyPacketFiltersList(this, "packet_filters", false);
  public get packetFilters() {
    return this._packetFilters;
  }
  public putPacketFilters(value: DayuDdosPolicyPacketFilters[] | cdktf.IResolvable) {
    this._packetFilters.internalValue = value;
  }
  public resetPacketFilters() {
    this._packetFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetFiltersInput() {
    return this._packetFilters.internalValue;
  }

  // port_filters - computed: false, optional: true, required: false
  private _portFilters = new DayuDdosPolicyPortFiltersList(this, "port_filters", false);
  public get portFilters() {
    return this._portFilters;
  }
  public putPortFilters(value: DayuDdosPolicyPortFilters[] | cdktf.IResolvable) {
    this._portFilters.internalValue = value;
  }
  public resetPortFilters() {
    this._portFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portFiltersInput() {
    return this._portFilters.internalValue;
  }

  // watermark_filters - computed: false, optional: true, required: false
  private _watermarkFilters = new DayuDdosPolicyWatermarkFiltersList(this, "watermark_filters", false);
  public get watermarkFilters() {
    return this._watermarkFilters;
  }
  public putWatermarkFilters(value: DayuDdosPolicyWatermarkFilters[] | cdktf.IResolvable) {
    this._watermarkFilters.internalValue = value;
  }
  public resetWatermarkFilters() {
    this._watermarkFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkFiltersInput() {
    return this._watermarkFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      black_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blackIps),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      white_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whiteIps),
      drop_options: cdktf.listMapper(dayuDdosPolicyDropOptionsToTerraform, true)(this._dropOptions.internalValue),
      packet_filters: cdktf.listMapper(dayuDdosPolicyPacketFiltersToTerraform, true)(this._packetFilters.internalValue),
      port_filters: cdktf.listMapper(dayuDdosPolicyPortFiltersToTerraform, true)(this._portFilters.internalValue),
      watermark_filters: cdktf.listMapper(dayuDdosPolicyWatermarkFiltersToTerraform, true)(this._watermarkFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      black_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blackIps),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      white_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whiteIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      drop_options: {
        value: cdktf.listMapperHcl(dayuDdosPolicyDropOptionsToHclTerraform, true)(this._dropOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyDropOptionsList",
      },
      packet_filters: {
        value: cdktf.listMapperHcl(dayuDdosPolicyPacketFiltersToHclTerraform, true)(this._packetFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyPacketFiltersList",
      },
      port_filters: {
        value: cdktf.listMapperHcl(dayuDdosPolicyPortFiltersToHclTerraform, true)(this._portFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyPortFiltersList",
      },
      watermark_filters: {
        value: cdktf.listMapperHcl(dayuDdosPolicyWatermarkFiltersToHclTerraform, true)(this._watermarkFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosPolicyWatermarkFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
