// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbSiteSlbDevConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify administrative preference (Specify admin-preference value,default is 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#admin_preference GslbSiteSlbDev#admin_preference}
  */
  readonly adminPreference?: number;
  /**
  * 'ip': Service IP only; 'port': Service Port only; 'ip-and-port': Both service IP and service port; 'disabled': disable auto-detect;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#auto_detect GslbSiteSlbDev#auto_detect}
  */
  readonly autoDetect?: string;
  /**
  * Enable DNS Auto Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#auto_map GslbSiteSlbDev#auto_map}
  */
  readonly autoMap?: number;
  /**
  * Specify client IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#client_ip GslbSiteSlbDev#client_ip}
  */
  readonly clientIp?: string;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve FQDN (Default Query type); 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN; 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#dev_resolve_as GslbSiteSlbDev#dev_resolve_as}
  */
  readonly devResolveAs?: string;
  /**
  * Specify SLB device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#device_name GslbSiteSlbDev#device_name}
  */
  readonly deviceName: string;
  /**
  * Device hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#domain GslbSiteSlbDev#domain}
  */
  readonly domain?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#gateway_ip_addr GslbSiteSlbDev#gateway_ip_addr}
  */
  readonly gatewayIpAddr?: string;
  /**
  * 'health-check': Enable health Check; 'health-check-disable': Disable health check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#health_check_action GslbSiteSlbDev#health_check_action}
  */
  readonly healthCheckAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#id GslbSiteSlbDev#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#ip_address GslbSiteSlbDev#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#ipv6_address GslbSiteSlbDev#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Specify maximum number of clients, default is 32768
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#max_client GslbSiteSlbDev#max_client}
  */
  readonly maxClient?: number;
  /**
  * Run GSLB Protocol in compatible mode with a ACOS 2.x GSLB peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#msg_format_acos_2x GslbSiteSlbDev#msg_format_acos_2x}
  */
  readonly msgFormatAcos2X?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#probe_timer GslbSiteSlbDev#probe_timer}
  */
  readonly probeTimer?: number;
  /**
  * Fast GSLB Protocol aging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#proto_aging_fast GslbSiteSlbDev#proto_aging_fast}
  */
  readonly protoAgingFast?: number;
  /**
  * Specify GSLB Protocol aging time, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#proto_aging_time GslbSiteSlbDev#proto_aging_time}
  */
  readonly protoAgingTime?: number;
  /**
  * Run GSLB Protocol in compatible mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#proto_compatible GslbSiteSlbDev#proto_compatible}
  */
  readonly protoCompatible?: number;
  /**
  * 'rdt': rdt; 'site-rdt': site-rdt;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#rdt_type GslbSiteSlbDev#rdt_type}
  */
  readonly rdtType?: string;
  /**
  * Specify Round-delay-time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#rdt_value GslbSiteSlbDev#rdt_value}
  */
  readonly rdtValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#session_number GslbSiteSlbDev#session_number}
  */
  readonly sessionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#session_utilization GslbSiteSlbDev#session_utilization}
  */
  readonly sessionUtilization?: number;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#site_name GslbSiteSlbDev#site_name}
  */
  readonly siteName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#user_tag GslbSiteSlbDev#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#uuid GslbSiteSlbDev#uuid}
  */
  readonly uuid?: string;
  /**
  * vip_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#vip_server GslbSiteSlbDev#vip_server}
  */
  readonly vipServer?: GslbSiteSlbDevVipServer;
}
export interface GslbSiteSlbDevVipServerVipServerNameListSamplingEnable {
  /**
  * 'all': all; 'dev_vip_hits': Number of times the service-ip was selected; 'dev_vip_recent': Recent hits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#counters1 GslbSiteSlbDev#counters1}
  */
  readonly counters1?: string;
}

export function gslbSiteSlbDevVipServerVipServerNameListSamplingEnableToTerraform(struct?: GslbSiteSlbDevVipServerVipServerNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbSiteSlbDevVipServerVipServerNameListSamplingEnableToHclTerraform(struct?: GslbSiteSlbDevVipServerVipServerNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevVipServerVipServerNameListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevVipServerVipServerNameListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevVipServerVipServerNameListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbSiteSlbDevVipServerVipServerNameListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevVipServerVipServerNameListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevVipServerVipServerNameListSamplingEnableOutputReference {
    return new GslbSiteSlbDevVipServerVipServerNameListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevVipServerVipServerNameListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#uuid GslbSiteSlbDev#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify a VIP name for the SLB device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#vip_name GslbSiteSlbDev#vip_name}
  */
  readonly vipName: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#sampling_enable GslbSiteSlbDev#sampling_enable}
  */
  readonly samplingEnable?: GslbSiteSlbDevVipServerVipServerNameListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevVipServerVipServerNameListStructToTerraform(struct?: GslbSiteSlbDevVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vip_name: cdktf.stringToTerraform(struct!.vipName),
    sampling_enable: cdktf.listMapper(gslbSiteSlbDevVipServerVipServerNameListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbSiteSlbDevVipServerVipServerNameListStructToHclTerraform(struct?: GslbSiteSlbDevVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_name: {
      value: cdktf.stringToHclTerraform(struct!.vipName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevVipServerVipServerNameListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevVipServerVipServerNameListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevVipServerVipServerNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevVipServerVipServerNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vipName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipName = this._vipName;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevVipServerVipServerNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uuid = undefined;
      this._vipName = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uuid = value.uuid;
      this._vipName = value.vipName;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vip_name - computed: false, optional: false, required: true
  private _vipName?: string; 
  public get vipName() {
    return this.getStringAttribute('vip_name');
  }
  public set vipName(value: string) {
    this._vipName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNameInput() {
    return this._vipName;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbSiteSlbDevVipServerVipServerNameListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbSiteSlbDevVipServerVipServerNameListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbSiteSlbDevVipServerVipServerNameListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevVipServerVipServerNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevVipServerVipServerNameListStructOutputReference {
    return new GslbSiteSlbDevVipServerVipServerNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable {
  /**
  * 'all': all; 'dev_vip_hits': Number of times the service-ip was selected; 'dev_vip_recent': Recent hits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#counters1 GslbSiteSlbDev#counters1}
  */
  readonly counters1?: string;
}

export function gslbSiteSlbDevVipServerVipServerV4ListSamplingEnableToTerraform(struct?: GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbSiteSlbDevVipServerVipServerV4ListSamplingEnableToHclTerraform(struct?: GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevVipServerVipServerV4ListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbSiteSlbDevVipServerVipServerV4ListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevVipServerVipServerV4ListSamplingEnableOutputReference {
    return new GslbSiteSlbDevVipServerVipServerV4ListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevVipServerVipServerV4ListStruct {
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#ipv4 GslbSiteSlbDev#ipv4}
  */
  readonly ipv4: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#uuid GslbSiteSlbDev#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#sampling_enable GslbSiteSlbDev#sampling_enable}
  */
  readonly samplingEnable?: GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevVipServerVipServerV4ListStructToTerraform(struct?: GslbSiteSlbDevVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbSiteSlbDevVipServerVipServerV4ListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbSiteSlbDevVipServerVipServerV4ListStructToHclTerraform(struct?: GslbSiteSlbDevVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevVipServerVipServerV4ListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevVipServerVipServerV4ListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevVipServerVipServerV4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbSiteSlbDevVipServerVipServerV4ListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbSiteSlbDevVipServerVipServerV4ListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbSiteSlbDevVipServerVipServerV4ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevVipServerVipServerV4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevVipServerVipServerV4ListStructOutputReference {
    return new GslbSiteSlbDevVipServerVipServerV4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable {
  /**
  * 'all': all; 'dev_vip_hits': Number of times the service-ip was selected; 'dev_vip_recent': Recent hits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#counters1 GslbSiteSlbDev#counters1}
  */
  readonly counters1?: string;
}

export function gslbSiteSlbDevVipServerVipServerV6ListSamplingEnableToTerraform(struct?: GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbSiteSlbDevVipServerVipServerV6ListSamplingEnableToHclTerraform(struct?: GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevVipServerVipServerV6ListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbSiteSlbDevVipServerVipServerV6ListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevVipServerVipServerV6ListSamplingEnableOutputReference {
    return new GslbSiteSlbDevVipServerVipServerV6ListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevVipServerVipServerV6ListStruct {
  /**
  * Specify IP address (IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#ipv6 GslbSiteSlbDev#ipv6}
  */
  readonly ipv6: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#uuid GslbSiteSlbDev#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#sampling_enable GslbSiteSlbDev#sampling_enable}
  */
  readonly samplingEnable?: GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevVipServerVipServerV6ListStructToTerraform(struct?: GslbSiteSlbDevVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbSiteSlbDevVipServerVipServerV6ListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbSiteSlbDevVipServerVipServerV6ListStructToHclTerraform(struct?: GslbSiteSlbDevVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevVipServerVipServerV6ListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevVipServerVipServerV6ListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevVipServerVipServerV6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbSiteSlbDevVipServerVipServerV6ListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbSiteSlbDevVipServerVipServerV6ListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbSiteSlbDevVipServerVipServerV6ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevVipServerVipServerV6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevVipServerVipServerV6ListStructOutputReference {
    return new GslbSiteSlbDevVipServerVipServerV6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevVipServer {
  /**
  * vip_server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#vip_server_name_list GslbSiteSlbDev#vip_server_name_list}
  */
  readonly vipServerNameList?: GslbSiteSlbDevVipServerVipServerNameListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#vip_server_v4_list GslbSiteSlbDev#vip_server_v4_list}
  */
  readonly vipServerV4List?: GslbSiteSlbDevVipServerVipServerV4ListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#vip_server_v6_list GslbSiteSlbDev#vip_server_v6_list}
  */
  readonly vipServerV6List?: GslbSiteSlbDevVipServerVipServerV6ListStruct[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevVipServerToTerraform(struct?: GslbSiteSlbDevVipServerOutputReference | GslbSiteSlbDevVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_server_name_list: cdktf.listMapper(gslbSiteSlbDevVipServerVipServerNameListStructToTerraform, true)(struct!.vipServerNameList),
    vip_server_v4_list: cdktf.listMapper(gslbSiteSlbDevVipServerVipServerV4ListStructToTerraform, true)(struct!.vipServerV4List),
    vip_server_v6_list: cdktf.listMapper(gslbSiteSlbDevVipServerVipServerV6ListStructToTerraform, true)(struct!.vipServerV6List),
  }
}


export function gslbSiteSlbDevVipServerToHclTerraform(struct?: GslbSiteSlbDevVipServerOutputReference | GslbSiteSlbDevVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_server_name_list: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevVipServerVipServerNameListStructToHclTerraform, true)(struct!.vipServerNameList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevVipServerVipServerNameListStructList",
    },
    vip_server_v4_list: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevVipServerVipServerV4ListStructToHclTerraform, true)(struct!.vipServerV4List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevVipServerVipServerV4ListStructList",
    },
    vip_server_v6_list: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevVipServerVipServerV6ListStructToHclTerraform, true)(struct!.vipServerV6List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevVipServerVipServerV6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevVipServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbSiteSlbDevVipServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipServerNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerNameList = this._vipServerNameList?.internalValue;
    }
    if (this._vipServerV4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV4List = this._vipServerV4List?.internalValue;
    }
    if (this._vipServerV6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV6List = this._vipServerV6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevVipServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vipServerNameList.internalValue = undefined;
      this._vipServerV4List.internalValue = undefined;
      this._vipServerV6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vipServerNameList.internalValue = value.vipServerNameList;
      this._vipServerV4List.internalValue = value.vipServerV4List;
      this._vipServerV6List.internalValue = value.vipServerV6List;
    }
  }

  // vip_server_name_list - computed: false, optional: true, required: false
  private _vipServerNameList = new GslbSiteSlbDevVipServerVipServerNameListStructList(this, "vip_server_name_list", false);
  public get vipServerNameList() {
    return this._vipServerNameList;
  }
  public putVipServerNameList(value: GslbSiteSlbDevVipServerVipServerNameListStruct[] | cdktf.IResolvable) {
    this._vipServerNameList.internalValue = value;
  }
  public resetVipServerNameList() {
    this._vipServerNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerNameListInput() {
    return this._vipServerNameList.internalValue;
  }

  // vip_server_v4_list - computed: false, optional: true, required: false
  private _vipServerV4List = new GslbSiteSlbDevVipServerVipServerV4ListStructList(this, "vip_server_v4_list", false);
  public get vipServerV4List() {
    return this._vipServerV4List;
  }
  public putVipServerV4List(value: GslbSiteSlbDevVipServerVipServerV4ListStruct[] | cdktf.IResolvable) {
    this._vipServerV4List.internalValue = value;
  }
  public resetVipServerV4List() {
    this._vipServerV4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV4ListInput() {
    return this._vipServerV4List.internalValue;
  }

  // vip_server_v6_list - computed: false, optional: true, required: false
  private _vipServerV6List = new GslbSiteSlbDevVipServerVipServerV6ListStructList(this, "vip_server_v6_list", false);
  public get vipServerV6List() {
    return this._vipServerV6List;
  }
  public putVipServerV6List(value: GslbSiteSlbDevVipServerVipServerV6ListStruct[] | cdktf.IResolvable) {
    this._vipServerV6List.internalValue = value;
  }
  public resetVipServerV6List() {
    this._vipServerV6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV6ListInput() {
    return this._vipServerV6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev thunder_gslb_site_slb_dev}
*/
export class GslbSiteSlbDev extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_slb_dev";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbSiteSlbDev resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbSiteSlbDev to import
  * @param importFromId The id of the existing GslbSiteSlbDev that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbSiteSlbDev to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_slb_dev", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_slb_dev thunder_gslb_site_slb_dev} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbSiteSlbDevConfig
  */
  public constructor(scope: Construct, id: string, config: GslbSiteSlbDevConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_slb_dev',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPreference = config.adminPreference;
    this._autoDetect = config.autoDetect;
    this._autoMap = config.autoMap;
    this._clientIp = config.clientIp;
    this._devResolveAs = config.devResolveAs;
    this._deviceName = config.deviceName;
    this._domain = config.domain;
    this._gatewayIpAddr = config.gatewayIpAddr;
    this._healthCheckAction = config.healthCheckAction;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipv6Address = config.ipv6Address;
    this._maxClient = config.maxClient;
    this._msgFormatAcos2X = config.msgFormatAcos2X;
    this._probeTimer = config.probeTimer;
    this._protoAgingFast = config.protoAgingFast;
    this._protoAgingTime = config.protoAgingTime;
    this._protoCompatible = config.protoCompatible;
    this._rdtType = config.rdtType;
    this._rdtValue = config.rdtValue;
    this._sessionNumber = config.sessionNumber;
    this._sessionUtilization = config.sessionUtilization;
    this._siteName = config.siteName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vipServer.internalValue = config.vipServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_preference - computed: false, optional: true, required: false
  private _adminPreference?: number; 
  public get adminPreference() {
    return this.getNumberAttribute('admin_preference');
  }
  public set adminPreference(value: number) {
    this._adminPreference = value;
  }
  public resetAdminPreference() {
    this._adminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPreferenceInput() {
    return this._adminPreference;
  }

  // auto_detect - computed: false, optional: true, required: false
  private _autoDetect?: string; 
  public get autoDetect() {
    return this.getStringAttribute('auto_detect');
  }
  public set autoDetect(value: string) {
    this._autoDetect = value;
  }
  public resetAutoDetect() {
    this._autoDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectInput() {
    return this._autoDetect;
  }

  // auto_map - computed: false, optional: true, required: false
  private _autoMap?: number; 
  public get autoMap() {
    return this.getNumberAttribute('auto_map');
  }
  public set autoMap(value: number) {
    this._autoMap = value;
  }
  public resetAutoMap() {
    this._autoMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapInput() {
    return this._autoMap;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // dev_resolve_as - computed: false, optional: true, required: false
  private _devResolveAs?: string; 
  public get devResolveAs() {
    return this.getStringAttribute('dev_resolve_as');
  }
  public set devResolveAs(value: string) {
    this._devResolveAs = value;
  }
  public resetDevResolveAs() {
    this._devResolveAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devResolveAsInput() {
    return this._devResolveAs;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gateway_ip_addr - computed: false, optional: true, required: false
  private _gatewayIpAddr?: string; 
  public get gatewayIpAddr() {
    return this.getStringAttribute('gateway_ip_addr');
  }
  public set gatewayIpAddr(value: string) {
    this._gatewayIpAddr = value;
  }
  public resetGatewayIpAddr() {
    this._gatewayIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpAddrInput() {
    return this._gatewayIpAddr;
  }

  // health_check_action - computed: false, optional: true, required: false
  private _healthCheckAction?: string; 
  public get healthCheckAction() {
    return this.getStringAttribute('health_check_action');
  }
  public set healthCheckAction(value: string) {
    this._healthCheckAction = value;
  }
  public resetHealthCheckAction() {
    this._healthCheckAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckActionInput() {
    return this._healthCheckAction;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // max_client - computed: false, optional: true, required: false
  private _maxClient?: number; 
  public get maxClient() {
    return this.getNumberAttribute('max_client');
  }
  public set maxClient(value: number) {
    this._maxClient = value;
  }
  public resetMaxClient() {
    this._maxClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientInput() {
    return this._maxClient;
  }

  // msg_format_acos_2x - computed: false, optional: true, required: false
  private _msgFormatAcos2X?: number; 
  public get msgFormatAcos2X() {
    return this.getNumberAttribute('msg_format_acos_2x');
  }
  public set msgFormatAcos2X(value: number) {
    this._msgFormatAcos2X = value;
  }
  public resetMsgFormatAcos2X() {
    this._msgFormatAcos2X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgFormatAcos2XInput() {
    return this._msgFormatAcos2X;
  }

  // probe_timer - computed: false, optional: true, required: false
  private _probeTimer?: number; 
  public get probeTimer() {
    return this.getNumberAttribute('probe_timer');
  }
  public set probeTimer(value: number) {
    this._probeTimer = value;
  }
  public resetProbeTimer() {
    this._probeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimerInput() {
    return this._probeTimer;
  }

  // proto_aging_fast - computed: false, optional: true, required: false
  private _protoAgingFast?: number; 
  public get protoAgingFast() {
    return this.getNumberAttribute('proto_aging_fast');
  }
  public set protoAgingFast(value: number) {
    this._protoAgingFast = value;
  }
  public resetProtoAgingFast() {
    this._protoAgingFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAgingFastInput() {
    return this._protoAgingFast;
  }

  // proto_aging_time - computed: false, optional: true, required: false
  private _protoAgingTime?: number; 
  public get protoAgingTime() {
    return this.getNumberAttribute('proto_aging_time');
  }
  public set protoAgingTime(value: number) {
    this._protoAgingTime = value;
  }
  public resetProtoAgingTime() {
    this._protoAgingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAgingTimeInput() {
    return this._protoAgingTime;
  }

  // proto_compatible - computed: false, optional: true, required: false
  private _protoCompatible?: number; 
  public get protoCompatible() {
    return this.getNumberAttribute('proto_compatible');
  }
  public set protoCompatible(value: number) {
    this._protoCompatible = value;
  }
  public resetProtoCompatible() {
    this._protoCompatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoCompatibleInput() {
    return this._protoCompatible;
  }

  // rdt_type - computed: false, optional: true, required: false
  private _rdtType?: string; 
  public get rdtType() {
    return this.getStringAttribute('rdt_type');
  }
  public set rdtType(value: string) {
    this._rdtType = value;
  }
  public resetRdtType() {
    this._rdtType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtTypeInput() {
    return this._rdtType;
  }

  // rdt_value - computed: false, optional: true, required: false
  private _rdtValue?: number; 
  public get rdtValue() {
    return this.getNumberAttribute('rdt_value');
  }
  public set rdtValue(value: number) {
    this._rdtValue = value;
  }
  public resetRdtValue() {
    this._rdtValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtValueInput() {
    return this._rdtValue;
  }

  // session_number - computed: false, optional: true, required: false
  private _sessionNumber?: number; 
  public get sessionNumber() {
    return this.getNumberAttribute('session_number');
  }
  public set sessionNumber(value: number) {
    this._sessionNumber = value;
  }
  public resetSessionNumber() {
    this._sessionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNumberInput() {
    return this._sessionNumber;
  }

  // session_utilization - computed: false, optional: true, required: false
  private _sessionUtilization?: number; 
  public get sessionUtilization() {
    return this.getNumberAttribute('session_utilization');
  }
  public set sessionUtilization(value: number) {
    this._sessionUtilization = value;
  }
  public resetSessionUtilization() {
    this._sessionUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionUtilizationInput() {
    return this._sessionUtilization;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vip_server - computed: false, optional: true, required: false
  private _vipServer = new GslbSiteSlbDevVipServerOutputReference(this, "vip_server");
  public get vipServer() {
    return this._vipServer;
  }
  public putVipServer(value: GslbSiteSlbDevVipServer) {
    this._vipServer.internalValue = value;
  }
  public resetVipServer() {
    this._vipServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerInput() {
    return this._vipServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_preference: cdktf.numberToTerraform(this._adminPreference),
      auto_detect: cdktf.stringToTerraform(this._autoDetect),
      auto_map: cdktf.numberToTerraform(this._autoMap),
      client_ip: cdktf.stringToTerraform(this._clientIp),
      dev_resolve_as: cdktf.stringToTerraform(this._devResolveAs),
      device_name: cdktf.stringToTerraform(this._deviceName),
      domain: cdktf.stringToTerraform(this._domain),
      gateway_ip_addr: cdktf.stringToTerraform(this._gatewayIpAddr),
      health_check_action: cdktf.stringToTerraform(this._healthCheckAction),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      max_client: cdktf.numberToTerraform(this._maxClient),
      msg_format_acos_2x: cdktf.numberToTerraform(this._msgFormatAcos2X),
      probe_timer: cdktf.numberToTerraform(this._probeTimer),
      proto_aging_fast: cdktf.numberToTerraform(this._protoAgingFast),
      proto_aging_time: cdktf.numberToTerraform(this._protoAgingTime),
      proto_compatible: cdktf.numberToTerraform(this._protoCompatible),
      rdt_type: cdktf.stringToTerraform(this._rdtType),
      rdt_value: cdktf.numberToTerraform(this._rdtValue),
      session_number: cdktf.numberToTerraform(this._sessionNumber),
      session_utilization: cdktf.numberToTerraform(this._sessionUtilization),
      site_name: cdktf.stringToTerraform(this._siteName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vip_server: gslbSiteSlbDevVipServerToTerraform(this._vipServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_preference: {
        value: cdktf.numberToHclTerraform(this._adminPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_detect: {
        value: cdktf.stringToHclTerraform(this._autoDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_map: {
        value: cdktf.numberToHclTerraform(this._autoMap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_ip: {
        value: cdktf.stringToHclTerraform(this._clientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_resolve_as: {
        value: cdktf.stringToHclTerraform(this._devResolveAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_ip_addr: {
        value: cdktf.stringToHclTerraform(this._gatewayIpAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_action: {
        value: cdktf.stringToHclTerraform(this._healthCheckAction),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_client: {
        value: cdktf.numberToHclTerraform(this._maxClient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_format_acos_2x: {
        value: cdktf.numberToHclTerraform(this._msgFormatAcos2X),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe_timer: {
        value: cdktf.numberToHclTerraform(this._probeTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto_aging_fast: {
        value: cdktf.numberToHclTerraform(this._protoAgingFast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto_aging_time: {
        value: cdktf.numberToHclTerraform(this._protoAgingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto_compatible: {
        value: cdktf.numberToHclTerraform(this._protoCompatible),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdt_type: {
        value: cdktf.stringToHclTerraform(this._rdtType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdt_value: {
        value: cdktf.numberToHclTerraform(this._rdtValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_number: {
        value: cdktf.numberToHclTerraform(this._sessionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_utilization: {
        value: cdktf.numberToHclTerraform(this._sessionUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_server: {
        value: gslbSiteSlbDevVipServerToHclTerraform(this._vipServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSiteSlbDevVipServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
