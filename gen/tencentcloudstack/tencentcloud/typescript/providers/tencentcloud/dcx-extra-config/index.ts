// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcxExtraConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * direct connect tunnel bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#bandwidth DcxExtraConfig#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * be enabled BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#bfd_enable DcxExtraConfig#bfd_enable}
  */
  readonly bfdEnable?: number;
  /**
  * direct connect tunnel user idc connect ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#customer_address DcxExtraConfig#customer_address}
  */
  readonly customerAddress?: string;
  /**
  * direct connect tunnel id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#direct_connect_tunnel_id DcxExtraConfig#direct_connect_tunnel_id}
  */
  readonly directConnectTunnelId: string;
  /**
  * BGP community attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#enable_bgp_community DcxExtraConfig#enable_bgp_community}
  */
  readonly enableBgpCommunity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#id DcxExtraConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 0: disable IPv61: enable IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#ipv6_enable DcxExtraConfig#ipv6_enable}
  */
  readonly ipv6Enable?: number;
  /**
  * direct connect tunnel support jumbo frame1: enable direct connect tunnel jumbo frame0: disable direct connect tunnel jumbo frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#jumbo_enable DcxExtraConfig#jumbo_enable}
  */
  readonly jumboEnable?: number;
  /**
  * be enabled NQA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#nqa_enable DcxExtraConfig#nqa_enable}
  */
  readonly nqaEnable?: number;
  /**
  * direct connect tunnel tencent cloud connect ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#tencent_address DcxExtraConfig#tencent_address}
  */
  readonly tencentAddress?: string;
  /**
  * direct connect tunnel tencent cloud backup connect ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#tencent_backup_address DcxExtraConfig#tencent_backup_address}
  */
  readonly tencentBackupAddress?: string;
  /**
  * direct connect tunnel vlan id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#vlan DcxExtraConfig#vlan}
  */
  readonly vlan?: number;
  /**
  * bfd_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#bfd_info DcxExtraConfig#bfd_info}
  */
  readonly bfdInfo?: DcxExtraConfigBfdInfo;
  /**
  * bgp_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#bgp_peer DcxExtraConfig#bgp_peer}
  */
  readonly bgpPeer?: DcxExtraConfigBgpPeer;
  /**
  * nqa_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#nqa_info DcxExtraConfig#nqa_info}
  */
  readonly nqaInfo?: DcxExtraConfigNqaInfo;
  /**
  * route_filter_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#route_filter_prefixes DcxExtraConfig#route_filter_prefixes}
  */
  readonly routeFilterPrefixes?: DcxExtraConfigRouteFilterPrefixes;
}
export interface DcxExtraConfigBfdInfo {
  /**
  * detect interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#interval DcxExtraConfig#interval}
  */
  readonly interval?: number;
  /**
  * detect times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#probe_failed_times DcxExtraConfig#probe_failed_times}
  */
  readonly probeFailedTimes?: number;
}

export function dcxExtraConfigBfdInfoToTerraform(struct?: DcxExtraConfigBfdInfoOutputReference | DcxExtraConfigBfdInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    probe_failed_times: cdktf.numberToTerraform(struct!.probeFailedTimes),
  }
}


export function dcxExtraConfigBfdInfoToHclTerraform(struct?: DcxExtraConfigBfdInfoOutputReference | DcxExtraConfigBfdInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_failed_times: {
      value: cdktf.numberToHclTerraform(struct!.probeFailedTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcxExtraConfigBfdInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcxExtraConfigBfdInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probeFailedTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeFailedTimes = this._probeFailedTimes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcxExtraConfigBfdInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._probeFailedTimes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._probeFailedTimes = value.probeFailedTimes;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probe_failed_times - computed: true, optional: true, required: false
  private _probeFailedTimes?: number; 
  public get probeFailedTimes() {
    return this.getNumberAttribute('probe_failed_times');
  }
  public set probeFailedTimes(value: number) {
    this._probeFailedTimes = value;
  }
  public resetProbeFailedTimes() {
    this._probeFailedTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeFailedTimesInput() {
    return this._probeFailedTimes;
  }
}
export interface DcxExtraConfigBgpPeer {
  /**
  * user idc BGP Asn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#asn DcxExtraConfig#asn}
  */
  readonly asn?: number;
  /**
  * user bgp key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#auth_key DcxExtraConfig#auth_key}
  */
  readonly authKey?: string;
}

export function dcxExtraConfigBgpPeerToTerraform(struct?: DcxExtraConfigBgpPeerOutputReference | DcxExtraConfigBgpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    auth_key: cdktf.stringToTerraform(struct!.authKey),
  }
}


export function dcxExtraConfigBgpPeerToHclTerraform(struct?: DcxExtraConfigBgpPeerOutputReference | DcxExtraConfigBgpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcxExtraConfigBgpPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcxExtraConfigBgpPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcxExtraConfigBgpPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._authKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._authKey = value.authKey;
    }
  }

  // asn - computed: true, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }
}
export interface DcxExtraConfigNqaInfo {
  /**
  * detect ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#destination_ip DcxExtraConfig#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * detect interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#interval DcxExtraConfig#interval}
  */
  readonly interval?: number;
  /**
  * detect times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#probe_failed_times DcxExtraConfig#probe_failed_times}
  */
  readonly probeFailedTimes?: number;
}

export function dcxExtraConfigNqaInfoToTerraform(struct?: DcxExtraConfigNqaInfoOutputReference | DcxExtraConfigNqaInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    interval: cdktf.numberToTerraform(struct!.interval),
    probe_failed_times: cdktf.numberToTerraform(struct!.probeFailedTimes),
  }
}


export function dcxExtraConfigNqaInfoToHclTerraform(struct?: DcxExtraConfigNqaInfoOutputReference | DcxExtraConfigNqaInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_failed_times: {
      value: cdktf.numberToHclTerraform(struct!.probeFailedTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcxExtraConfigNqaInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcxExtraConfigNqaInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probeFailedTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeFailedTimes = this._probeFailedTimes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcxExtraConfigNqaInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationIp = undefined;
      this._interval = undefined;
      this._probeFailedTimes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationIp = value.destinationIp;
      this._interval = value.interval;
      this._probeFailedTimes = value.probeFailedTimes;
    }
  }

  // destination_ip - computed: true, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probe_failed_times - computed: true, optional: true, required: false
  private _probeFailedTimes?: number; 
  public get probeFailedTimes() {
    return this.getNumberAttribute('probe_failed_times');
  }
  public set probeFailedTimes(value: number) {
    this._probeFailedTimes = value;
  }
  public resetProbeFailedTimes() {
    this._probeFailedTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeFailedTimesInput() {
    return this._probeFailedTimes;
  }
}
export interface DcxExtraConfigRouteFilterPrefixes {
  /**
  * user network prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#cidr DcxExtraConfig#cidr}
  */
  readonly cidr?: string;
}

export function dcxExtraConfigRouteFilterPrefixesToTerraform(struct?: DcxExtraConfigRouteFilterPrefixesOutputReference | DcxExtraConfigRouteFilterPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function dcxExtraConfigRouteFilterPrefixesToHclTerraform(struct?: DcxExtraConfigRouteFilterPrefixesOutputReference | DcxExtraConfigRouteFilterPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcxExtraConfigRouteFilterPrefixesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcxExtraConfigRouteFilterPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcxExtraConfigRouteFilterPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config tencentcloud_dcx_extra_config}
*/
export class DcxExtraConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcx_extra_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcxExtraConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcxExtraConfig to import
  * @param importFromId The id of the existing DcxExtraConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcxExtraConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcx_extra_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dcx_extra_config tencentcloud_dcx_extra_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcxExtraConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DcxExtraConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcx_extra_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._bfdEnable = config.bfdEnable;
    this._customerAddress = config.customerAddress;
    this._directConnectTunnelId = config.directConnectTunnelId;
    this._enableBgpCommunity = config.enableBgpCommunity;
    this._id = config.id;
    this._ipv6Enable = config.ipv6Enable;
    this._jumboEnable = config.jumboEnable;
    this._nqaEnable = config.nqaEnable;
    this._tencentAddress = config.tencentAddress;
    this._tencentBackupAddress = config.tencentBackupAddress;
    this._vlan = config.vlan;
    this._bfdInfo.internalValue = config.bfdInfo;
    this._bgpPeer.internalValue = config.bgpPeer;
    this._nqaInfo.internalValue = config.nqaInfo;
    this._routeFilterPrefixes.internalValue = config.routeFilterPrefixes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bfd_enable - computed: true, optional: true, required: false
  private _bfdEnable?: number; 
  public get bfdEnable() {
    return this.getNumberAttribute('bfd_enable');
  }
  public set bfdEnable(value: number) {
    this._bfdEnable = value;
  }
  public resetBfdEnable() {
    this._bfdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnableInput() {
    return this._bfdEnable;
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string; 
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string) {
    this._customerAddress = value;
  }
  public resetCustomerAddress() {
    this._customerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAddressInput() {
    return this._customerAddress;
  }

  // direct_connect_tunnel_id - computed: false, optional: false, required: true
  private _directConnectTunnelId?: string; 
  public get directConnectTunnelId() {
    return this.getStringAttribute('direct_connect_tunnel_id');
  }
  public set directConnectTunnelId(value: string) {
    this._directConnectTunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectTunnelIdInput() {
    return this._directConnectTunnelId;
  }

  // enable_bgp_community - computed: true, optional: true, required: false
  private _enableBgpCommunity?: boolean | cdktf.IResolvable; 
  public get enableBgpCommunity() {
    return this.getBooleanAttribute('enable_bgp_community');
  }
  public set enableBgpCommunity(value: boolean | cdktf.IResolvable) {
    this._enableBgpCommunity = value;
  }
  public resetEnableBgpCommunity() {
    this._enableBgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpCommunityInput() {
    return this._enableBgpCommunity;
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

  // ipv6_enable - computed: true, optional: true, required: false
  private _ipv6Enable?: number; 
  public get ipv6Enable() {
    return this.getNumberAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: number) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // jumbo_enable - computed: true, optional: true, required: false
  private _jumboEnable?: number; 
  public get jumboEnable() {
    return this.getNumberAttribute('jumbo_enable');
  }
  public set jumboEnable(value: number) {
    this._jumboEnable = value;
  }
  public resetJumboEnable() {
    this._jumboEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboEnableInput() {
    return this._jumboEnable;
  }

  // nqa_enable - computed: true, optional: true, required: false
  private _nqaEnable?: number; 
  public get nqaEnable() {
    return this.getNumberAttribute('nqa_enable');
  }
  public set nqaEnable(value: number) {
    this._nqaEnable = value;
  }
  public resetNqaEnable() {
    this._nqaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nqaEnableInput() {
    return this._nqaEnable;
  }

  // tencent_address - computed: true, optional: true, required: false
  private _tencentAddress?: string; 
  public get tencentAddress() {
    return this.getStringAttribute('tencent_address');
  }
  public set tencentAddress(value: string) {
    this._tencentAddress = value;
  }
  public resetTencentAddress() {
    this._tencentAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tencentAddressInput() {
    return this._tencentAddress;
  }

  // tencent_backup_address - computed: true, optional: true, required: false
  private _tencentBackupAddress?: string; 
  public get tencentBackupAddress() {
    return this.getStringAttribute('tencent_backup_address');
  }
  public set tencentBackupAddress(value: string) {
    this._tencentBackupAddress = value;
  }
  public resetTencentBackupAddress() {
    this._tencentBackupAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tencentBackupAddressInput() {
    return this._tencentBackupAddress;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // bfd_info - computed: false, optional: true, required: false
  private _bfdInfo = new DcxExtraConfigBfdInfoOutputReference(this, "bfd_info");
  public get bfdInfo() {
    return this._bfdInfo;
  }
  public putBfdInfo(value: DcxExtraConfigBfdInfo) {
    this._bfdInfo.internalValue = value;
  }
  public resetBfdInfo() {
    this._bfdInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInfoInput() {
    return this._bfdInfo.internalValue;
  }

  // bgp_peer - computed: false, optional: true, required: false
  private _bgpPeer = new DcxExtraConfigBgpPeerOutputReference(this, "bgp_peer");
  public get bgpPeer() {
    return this._bgpPeer;
  }
  public putBgpPeer(value: DcxExtraConfigBgpPeer) {
    this._bgpPeer.internalValue = value;
  }
  public resetBgpPeer() {
    this._bgpPeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerInput() {
    return this._bgpPeer.internalValue;
  }

  // nqa_info - computed: false, optional: true, required: false
  private _nqaInfo = new DcxExtraConfigNqaInfoOutputReference(this, "nqa_info");
  public get nqaInfo() {
    return this._nqaInfo;
  }
  public putNqaInfo(value: DcxExtraConfigNqaInfo) {
    this._nqaInfo.internalValue = value;
  }
  public resetNqaInfo() {
    this._nqaInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nqaInfoInput() {
    return this._nqaInfo.internalValue;
  }

  // route_filter_prefixes - computed: false, optional: true, required: false
  private _routeFilterPrefixes = new DcxExtraConfigRouteFilterPrefixesOutputReference(this, "route_filter_prefixes");
  public get routeFilterPrefixes() {
    return this._routeFilterPrefixes;
  }
  public putRouteFilterPrefixes(value: DcxExtraConfigRouteFilterPrefixes) {
    this._routeFilterPrefixes.internalValue = value;
  }
  public resetRouteFilterPrefixes() {
    this._routeFilterPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterPrefixesInput() {
    return this._routeFilterPrefixes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bfd_enable: cdktf.numberToTerraform(this._bfdEnable),
      customer_address: cdktf.stringToTerraform(this._customerAddress),
      direct_connect_tunnel_id: cdktf.stringToTerraform(this._directConnectTunnelId),
      enable_bgp_community: cdktf.booleanToTerraform(this._enableBgpCommunity),
      id: cdktf.stringToTerraform(this._id),
      ipv6_enable: cdktf.numberToTerraform(this._ipv6Enable),
      jumbo_enable: cdktf.numberToTerraform(this._jumboEnable),
      nqa_enable: cdktf.numberToTerraform(this._nqaEnable),
      tencent_address: cdktf.stringToTerraform(this._tencentAddress),
      tencent_backup_address: cdktf.stringToTerraform(this._tencentBackupAddress),
      vlan: cdktf.numberToTerraform(this._vlan),
      bfd_info: dcxExtraConfigBfdInfoToTerraform(this._bfdInfo.internalValue),
      bgp_peer: dcxExtraConfigBgpPeerToTerraform(this._bgpPeer.internalValue),
      nqa_info: dcxExtraConfigNqaInfoToTerraform(this._nqaInfo.internalValue),
      route_filter_prefixes: dcxExtraConfigRouteFilterPrefixesToTerraform(this._routeFilterPrefixes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_enable: {
        value: cdktf.numberToHclTerraform(this._bfdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      customer_address: {
        value: cdktf.stringToHclTerraform(this._customerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_connect_tunnel_id: {
        value: cdktf.stringToHclTerraform(this._directConnectTunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_bgp_community: {
        value: cdktf.booleanToHclTerraform(this._enableBgpCommunity),
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
      ipv6_enable: {
        value: cdktf.numberToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jumbo_enable: {
        value: cdktf.numberToHclTerraform(this._jumboEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nqa_enable: {
        value: cdktf.numberToHclTerraform(this._nqaEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tencent_address: {
        value: cdktf.stringToHclTerraform(this._tencentAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tencent_backup_address: {
        value: cdktf.stringToHclTerraform(this._tencentBackupAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_info: {
        value: dcxExtraConfigBfdInfoToHclTerraform(this._bfdInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcxExtraConfigBfdInfoList",
      },
      bgp_peer: {
        value: dcxExtraConfigBgpPeerToHclTerraform(this._bgpPeer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcxExtraConfigBgpPeerList",
      },
      nqa_info: {
        value: dcxExtraConfigNqaInfoToHclTerraform(this._nqaInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcxExtraConfigNqaInfoList",
      },
      route_filter_prefixes: {
        value: dcxExtraConfigRouteFilterPrefixesToHclTerraform(this._routeFilterPrefixes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcxExtraConfigRouteFilterPrefixesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
