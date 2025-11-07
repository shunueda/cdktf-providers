// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detailed description of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#description DataZedcloudNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#enterprise_default DataZedcloudNetwork#enterprise_default}
  */
  readonly enterpriseDefault?: boolean | cdktf.IResolvable;
  /**
  * Kind of network:
  * NETWORK_KIND_V4
  * NETWORK_KIND_V6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#kind DataZedcloudNetwork#kind}
  */
  readonly kind: string;
  /**
  * Maximum Transmission Unit (MTU) for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#mtu DataZedcloudNetwork#mtu}
  */
  readonly mtu?: number;
  /**
  * User defined name of the network, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#name DataZedcloudNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#project_id DataZedcloudNetwork#project_id}
  */
  readonly projectId: string;
  /**
  * User defined title of the network. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#title DataZedcloudNetwork#title}
  */
  readonly title: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#dns_list DataZedcloudNetwork#dns_list}
  */
  readonly dnsList?: DataZedcloudNetworkDnsListStruct[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#ip DataZedcloudNetwork#ip}
  */
  readonly ip?: DataZedcloudNetworkIp[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#proxy DataZedcloudNetwork#proxy}
  */
  readonly proxy?: DataZedcloudNetworkProxy[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#revision DataZedcloudNetwork#revision}
  */
  readonly revision?: DataZedcloudNetworkRevision[] | cdktf.IResolvable;
  /**
  * wireless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#wireless DataZedcloudNetwork#wireless}
  */
  readonly wireless?: DataZedcloudNetworkWireless[] | cdktf.IResolvable;
}
export interface DataZedcloudNetworkDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#addrs DataZedcloudNetwork#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#hostname DataZedcloudNetwork#hostname}
  */
  readonly hostname?: string;
}

export function dataZedcloudNetworkDnsListStructToTerraform(struct?: DataZedcloudNetworkDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataZedcloudNetworkDnsListStructToHclTerraform(struct?: DataZedcloudNetworkDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class DataZedcloudNetworkDnsListStructList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkDnsListStructOutputReference {
    return new DataZedcloudNetworkDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#end DataZedcloudNetwork#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#start DataZedcloudNetwork#start}
  */
  readonly start?: string;
}

export function dataZedcloudNetworkIpDhcpRangeToTerraform(struct?: DataZedcloudNetworkIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataZedcloudNetworkIpDhcpRangeToHclTerraform(struct?: DataZedcloudNetworkIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataZedcloudNetworkIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkIpDhcpRange[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkIpDhcpRangeOutputReference {
    return new DataZedcloudNetworkIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#deprecated_dhcp DataZedcloudNetwork#deprecated_dhcp}
  */
  readonly deprecatedDhcp?: boolean | cdktf.IResolvable;
  /**
  * DHCP type:
  * NETWORK_DHCP_TYPE_STATIC
  * NETWORK_DHCP_TYPE_PASSTHROUGH
  * NETWORK_DHCP_TYPE_CLIENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#dhcp DataZedcloudNetwork#dhcp}
  */
  readonly dhcp?: string;
  /**
  * List of IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#dns DataZedcloudNetwork#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#domain DataZedcloudNetwork#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#gateway DataZedcloudNetwork#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#mask DataZedcloudNetwork#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#ntp DataZedcloudNetwork#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#subnet DataZedcloudNetwork#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#dhcp_range DataZedcloudNetwork#dhcp_range}
  */
  readonly dhcpRange?: DataZedcloudNetworkIpDhcpRange[] | cdktf.IResolvable;
}

export function dataZedcloudNetworkIpToTerraform(struct?: DataZedcloudNetworkIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deprecated_dhcp: cdktf.booleanToTerraform(struct!.deprecatedDhcp),
    dhcp: cdktf.stringToTerraform(struct!.dhcp),
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(dataZedcloudNetworkIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function dataZedcloudNetworkIpToHclTerraform(struct?: DataZedcloudNetworkIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deprecated_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.deprecatedDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp: {
      value: cdktf.stringToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(dataZedcloudNetworkIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudNetworkIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deprecatedDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecatedDhcp = this._deprecatedDhcp;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deprecatedDhcp = undefined;
      this._dhcp = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deprecatedDhcp = value.deprecatedDhcp;
      this._dhcp = value.dhcp;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // deprecated_dhcp - computed: false, optional: true, required: false
  private _deprecatedDhcp?: boolean | cdktf.IResolvable; 
  public get deprecatedDhcp() {
    return this.getBooleanAttribute('deprecated_dhcp');
  }
  public set deprecatedDhcp(value: boolean | cdktf.IResolvable) {
    this._deprecatedDhcp = value;
  }
  public resetDeprecatedDhcp() {
    this._deprecatedDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedDhcpInput() {
    return this._deprecatedDhcp;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: string; 
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }
  public set dhcp(value: string) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new DataZedcloudNetworkIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: DataZedcloudNetworkIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class DataZedcloudNetworkIpList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkIp[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkIpOutputReference {
    return new DataZedcloudNetworkIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkProxyProxies {
  /**
  * Net Proxy Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#port DataZedcloudNetwork#port}
  */
  readonly port?: number;
  /**
  * Net Proxy protocol:
  * NETWORK_PROXY_PROTO_HTTP
  * NETWORK_PROXY_PROTO_HTTPS
  * NETWORK_PROXY_PROTO_SOCKS
  * NETWORK_PROXY_PROTO_FTP
  * NETWORK_PROXY_PROTO_OTHER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#proto DataZedcloudNetwork#proto}
  */
  readonly proto?: string;
  /**
  * Net Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#server DataZedcloudNetwork#server}
  */
  readonly server?: string;
}

export function dataZedcloudNetworkProxyProxiesToTerraform(struct?: DataZedcloudNetworkProxyProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataZedcloudNetworkProxyProxiesToHclTerraform(struct?: DataZedcloudNetworkProxyProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkProxyProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkProxyProxies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkProxyProxies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._proto = value.proto;
      this._server = value.server;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class DataZedcloudNetworkProxyProxiesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkProxyProxies[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkProxyProxiesOutputReference {
    return new DataZedcloudNetworkProxyProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkProxy {
  /**
  * Proxy exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#exceptions DataZedcloudNetwork#exceptions}
  */
  readonly exceptions?: string;
  /**
  * Enable WPAD (Web Proxy Auto Discovery) protocol to discover and download PAC file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#network_proxy DataZedcloudNetwork#network_proxy}
  */
  readonly networkProxy?: boolean | cdktf.IResolvable;
  /**
  * Network Proxy Certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#network_proxy_certs DataZedcloudNetwork#network_proxy_certs}
  */
  readonly networkProxyCerts?: string[];
  /**
  * URL for wpad.dat file to be downloaded. Used when network_proxy is set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#network_proxy_url DataZedcloudNetwork#network_proxy_url}
  */
  readonly networkProxyUrl?: string;
  /**
  * Proxy configuration in a pacfile. Used when network_proxy is set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#pacfile DataZedcloudNetwork#pacfile}
  */
  readonly pacfile?: string;
  /**
  * proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#proxies DataZedcloudNetwork#proxies}
  */
  readonly proxies?: DataZedcloudNetworkProxyProxies[] | cdktf.IResolvable;
}

export function dataZedcloudNetworkProxyToTerraform(struct?: DataZedcloudNetworkProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exceptions: cdktf.stringToTerraform(struct!.exceptions),
    network_proxy: cdktf.booleanToTerraform(struct!.networkProxy),
    network_proxy_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkProxyCerts),
    network_proxy_url: cdktf.stringToTerraform(struct!.networkProxyUrl),
    pacfile: cdktf.stringToTerraform(struct!.pacfile),
    proxies: cdktf.listMapper(dataZedcloudNetworkProxyProxiesToTerraform, true)(struct!.proxies),
  }
}


export function dataZedcloudNetworkProxyToHclTerraform(struct?: DataZedcloudNetworkProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exceptions: {
      value: cdktf.stringToHclTerraform(struct!.exceptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.networkProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_proxy_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkProxyCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.networkProxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pacfile: {
      value: cdktf.stringToHclTerraform(struct!.pacfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxies: {
      value: cdktf.listMapperHcl(dataZedcloudNetworkProxyProxiesToHclTerraform, true)(struct!.proxies),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudNetworkProxyProxiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptions = this._exceptions;
    }
    if (this._networkProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxy = this._networkProxy;
    }
    if (this._networkProxyCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxyCerts = this._networkProxyCerts;
    }
    if (this._networkProxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxyUrl = this._networkProxyUrl;
    }
    if (this._pacfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacfile = this._pacfile;
    }
    if (this._proxies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxies = this._proxies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptions = undefined;
      this._networkProxy = undefined;
      this._networkProxyCerts = undefined;
      this._networkProxyUrl = undefined;
      this._pacfile = undefined;
      this._proxies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptions = value.exceptions;
      this._networkProxy = value.networkProxy;
      this._networkProxyCerts = value.networkProxyCerts;
      this._networkProxyUrl = value.networkProxyUrl;
      this._pacfile = value.pacfile;
      this._proxies.internalValue = value.proxies;
    }
  }

  // exceptions - computed: false, optional: true, required: false
  private _exceptions?: string; 
  public get exceptions() {
    return this.getStringAttribute('exceptions');
  }
  public set exceptions(value: string) {
    this._exceptions = value;
  }
  public resetExceptions() {
    this._exceptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions;
  }

  // network_proxy - computed: false, optional: true, required: false
  private _networkProxy?: boolean | cdktf.IResolvable; 
  public get networkProxy() {
    return this.getBooleanAttribute('network_proxy');
  }
  public set networkProxy(value: boolean | cdktf.IResolvable) {
    this._networkProxy = value;
  }
  public resetNetworkProxy() {
    this._networkProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyInput() {
    return this._networkProxy;
  }

  // network_proxy_certs - computed: false, optional: true, required: false
  private _networkProxyCerts?: string[]; 
  public get networkProxyCerts() {
    return this.getListAttribute('network_proxy_certs');
  }
  public set networkProxyCerts(value: string[]) {
    this._networkProxyCerts = value;
  }
  public resetNetworkProxyCerts() {
    this._networkProxyCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyCertsInput() {
    return this._networkProxyCerts;
  }

  // network_proxy_url - computed: false, optional: true, required: false
  private _networkProxyUrl?: string; 
  public get networkProxyUrl() {
    return this.getStringAttribute('network_proxy_url');
  }
  public set networkProxyUrl(value: string) {
    this._networkProxyUrl = value;
  }
  public resetNetworkProxyUrl() {
    this._networkProxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyUrlInput() {
    return this._networkProxyUrl;
  }

  // pacfile - computed: false, optional: true, required: false
  private _pacfile?: string; 
  public get pacfile() {
    return this.getStringAttribute('pacfile');
  }
  public set pacfile(value: string) {
    this._pacfile = value;
  }
  public resetPacfile() {
    this._pacfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacfileInput() {
    return this._pacfile;
  }

  // proxies - computed: false, optional: true, required: false
  private _proxies = new DataZedcloudNetworkProxyProxiesList(this, "proxies", false);
  public get proxies() {
    return this._proxies;
  }
  public putProxies(value: DataZedcloudNetworkProxyProxies[] | cdktf.IResolvable) {
    this._proxies.internalValue = value;
  }
  public resetProxies() {
    this._proxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies.internalValue;
  }
}

export class DataZedcloudNetworkProxyList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkProxy[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkProxyOutputReference {
    return new DataZedcloudNetworkProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkRevision {
}

export function dataZedcloudNetworkRevisionToTerraform(struct?: DataZedcloudNetworkRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudNetworkRevisionToHclTerraform(struct?: DataZedcloudNetworkRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudNetworkRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudNetworkRevisionList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkRevision[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkRevisionOutputReference {
    return new DataZedcloudNetworkRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkWirelessCellular {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#apn DataZedcloudNetwork#apn}
  */
  readonly apn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#location_tracking DataZedcloudNetwork#location_tracking}
  */
  readonly locationTracking?: boolean | cdktf.IResolvable;
}

export function dataZedcloudNetworkWirelessCellularToTerraform(struct?: DataZedcloudNetworkWirelessCellular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn: cdktf.stringToTerraform(struct!.apn),
    location_tracking: cdktf.booleanToTerraform(struct!.locationTracking),
  }
}


export function dataZedcloudNetworkWirelessCellularToHclTerraform(struct?: DataZedcloudNetworkWirelessCellular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn: {
      value: cdktf.stringToHclTerraform(struct!.apn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_tracking: {
      value: cdktf.booleanToHclTerraform(struct!.locationTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkWirelessCellularOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkWirelessCellular | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apn = this._apn;
    }
    if (this._locationTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationTracking = this._locationTracking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkWirelessCellular | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apn = undefined;
      this._locationTracking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apn = value.apn;
      this._locationTracking = value.locationTracking;
    }
  }

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // location_tracking - computed: true, optional: true, required: false
  private _locationTracking?: boolean | cdktf.IResolvable; 
  public get locationTracking() {
    return this.getBooleanAttribute('location_tracking');
  }
  public set locationTracking(value: boolean | cdktf.IResolvable) {
    this._locationTracking = value;
  }
  public resetLocationTracking() {
    this._locationTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTrackingInput() {
    return this._locationTracking;
  }
}

export class DataZedcloudNetworkWirelessCellularList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkWirelessCellular[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkWirelessCellularOutputReference {
    return new DataZedcloudNetworkWirelessCellularOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkWirelessWifi {
  /**
  * WPA2 enterprise user identity/username. Use value from Vault.	This field will not be published by terraform import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#identity DataZedcloudNetwork#identity}
  */
  readonly identity?: string;
  /**
  * Key management scheme:
  * NETWORK_WIFIKEY_SCHEME_WPAPSK
  * NETWORK_WIFIKEY_SCHEME_WPAEAPPSK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#key_scheme DataZedcloudNetwork#key_scheme}
  */
  readonly keyScheme?: string;
  /**
  * Priority of connection, default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#priority DataZedcloudNetwork#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#wifi_ssid DataZedcloudNetwork#wifi_ssid}
  */
  readonly wifiSsid?: string;
}

export function dataZedcloudNetworkWirelessWifiToTerraform(struct?: DataZedcloudNetworkWirelessWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity: cdktf.stringToTerraform(struct!.identity),
    key_scheme: cdktf.stringToTerraform(struct!.keyScheme),
    priority: cdktf.numberToTerraform(struct!.priority),
    wifi_ssid: cdktf.stringToTerraform(struct!.wifiSsid),
  }
}


export function dataZedcloudNetworkWirelessWifiToHclTerraform(struct?: DataZedcloudNetworkWirelessWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_scheme: {
      value: cdktf.stringToHclTerraform(struct!.keyScheme),
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
    wifi_ssid: {
      value: cdktf.stringToHclTerraform(struct!.wifiSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkWirelessWifiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkWirelessWifi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._keyScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyScheme = this._keyScheme;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._wifiSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiSsid = this._wifiSsid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkWirelessWifi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identity = undefined;
      this._keyScheme = undefined;
      this._priority = undefined;
      this._wifiSsid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identity = value.identity;
      this._keyScheme = value.keyScheme;
      this._priority = value.priority;
      this._wifiSsid = value.wifiSsid;
    }
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // key_scheme - computed: false, optional: true, required: false
  private _keyScheme?: string; 
  public get keyScheme() {
    return this.getStringAttribute('key_scheme');
  }
  public set keyScheme(value: string) {
    this._keyScheme = value;
  }
  public resetKeyScheme() {
    this._keyScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemeInput() {
    return this._keyScheme;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // wifi_ssid - computed: false, optional: true, required: false
  private _wifiSsid?: string; 
  public get wifiSsid() {
    return this.getStringAttribute('wifi_ssid');
  }
  public set wifiSsid(value: string) {
    this._wifiSsid = value;
  }
  public resetWifiSsid() {
    this._wifiSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSsidInput() {
    return this._wifiSsid;
  }
}

export class DataZedcloudNetworkWirelessWifiList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkWirelessWifi[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkWirelessWifiOutputReference {
    return new DataZedcloudNetworkWirelessWifiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudNetworkWireless {
  /**
  * Type of Wireless Network:
  * NETWORK_WIRELESS_TYPE_WIFI
  * NETWORK_WIRELESS_TYPE_CELLULAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#type DataZedcloudNetwork#type}
  */
  readonly type?: string;
  /**
  * cellular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#cellular DataZedcloudNetwork#cellular}
  */
  readonly cellular?: DataZedcloudNetworkWirelessCellular[] | cdktf.IResolvable;
  /**
  * wifi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#wifi DataZedcloudNetwork#wifi}
  */
  readonly wifi?: DataZedcloudNetworkWirelessWifi[] | cdktf.IResolvable;
}

export function dataZedcloudNetworkWirelessToTerraform(struct?: DataZedcloudNetworkWireless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cellular: cdktf.listMapper(dataZedcloudNetworkWirelessCellularToTerraform, true)(struct!.cellular),
    wifi: cdktf.listMapper(dataZedcloudNetworkWirelessWifiToTerraform, true)(struct!.wifi),
  }
}


export function dataZedcloudNetworkWirelessToHclTerraform(struct?: DataZedcloudNetworkWireless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cellular: {
      value: cdktf.listMapperHcl(dataZedcloudNetworkWirelessCellularToHclTerraform, true)(struct!.cellular),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudNetworkWirelessCellularList",
    },
    wifi: {
      value: cdktf.listMapperHcl(dataZedcloudNetworkWirelessWifiToHclTerraform, true)(struct!.wifi),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudNetworkWirelessWifiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudNetworkWirelessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudNetworkWireless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cellular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellular = this._cellular?.internalValue;
    }
    if (this._wifi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifi = this._wifi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudNetworkWireless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cellular.internalValue = undefined;
      this._wifi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cellular.internalValue = value.cellular;
      this._wifi.internalValue = value.wifi;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cellular - computed: false, optional: true, required: false
  private _cellular = new DataZedcloudNetworkWirelessCellularList(this, "cellular", false);
  public get cellular() {
    return this._cellular;
  }
  public putCellular(value: DataZedcloudNetworkWirelessCellular[] | cdktf.IResolvable) {
    this._cellular.internalValue = value;
  }
  public resetCellular() {
    this._cellular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularInput() {
    return this._cellular.internalValue;
  }

  // wifi - computed: false, optional: true, required: false
  private _wifi = new DataZedcloudNetworkWirelessWifiList(this, "wifi", false);
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: DataZedcloudNetworkWirelessWifi[] | cdktf.IResolvable) {
    this._wifi.internalValue = value;
  }
  public resetWifi() {
    this._wifi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi.internalValue;
  }
}

export class DataZedcloudNetworkWirelessList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudNetworkWireless[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudNetworkWirelessOutputReference {
    return new DataZedcloudNetworkWirelessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network zedcloud_network}
*/
export class DataZedcloudNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudNetwork to import
  * @param importFromId The id of the existing DataZedcloudNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/network zedcloud_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_network',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
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
    this._enterpriseDefault = config.enterpriseDefault;
    this._kind = config.kind;
    this._mtu = config.mtu;
    this._name = config.name;
    this._projectId = config.projectId;
    this._title = config.title;
    this._dnsList.internalValue = config.dnsList;
    this._ip.internalValue = config.ip;
    this._proxy.internalValue = config.proxy;
    this._revision.internalValue = config.revision;
    this._wireless.internalValue = config.wireless;
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

  // enterprise_default - computed: false, optional: true, required: false
  private _enterpriseDefault?: boolean | cdktf.IResolvable; 
  public get enterpriseDefault() {
    return this.getBooleanAttribute('enterprise_default');
  }
  public set enterpriseDefault(value: boolean | cdktf.IResolvable) {
    this._enterpriseDefault = value;
  }
  public resetEnterpriseDefault() {
    this._enterpriseDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseDefaultInput() {
    return this._enterpriseDefault;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new DataZedcloudNetworkDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: DataZedcloudNetworkDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DataZedcloudNetworkIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataZedcloudNetworkIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataZedcloudNetworkProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataZedcloudNetworkProxy[] | cdktf.IResolvable) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new DataZedcloudNetworkRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: DataZedcloudNetworkRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // wireless - computed: false, optional: true, required: false
  private _wireless = new DataZedcloudNetworkWirelessList(this, "wireless", false);
  public get wireless() {
    return this._wireless;
  }
  public putWireless(value: DataZedcloudNetworkWireless[] | cdktf.IResolvable) {
    this._wireless.internalValue = value;
  }
  public resetWireless() {
    this._wireless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessInput() {
    return this._wireless.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enterprise_default: cdktf.booleanToTerraform(this._enterpriseDefault),
      kind: cdktf.stringToTerraform(this._kind),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      title: cdktf.stringToTerraform(this._title),
      dns_list: cdktf.listMapper(dataZedcloudNetworkDnsListStructToTerraform, true)(this._dnsList.internalValue),
      ip: cdktf.listMapper(dataZedcloudNetworkIpToTerraform, true)(this._ip.internalValue),
      proxy: cdktf.listMapper(dataZedcloudNetworkProxyToTerraform, true)(this._proxy.internalValue),
      revision: cdktf.listMapper(dataZedcloudNetworkRevisionToTerraform, true)(this._revision.internalValue),
      wireless: cdktf.listMapper(dataZedcloudNetworkWirelessToTerraform, true)(this._wireless.internalValue),
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
      enterprise_default: {
        value: cdktf.booleanToHclTerraform(this._enterpriseDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_list: {
        value: cdktf.listMapperHcl(dataZedcloudNetworkDnsListStructToHclTerraform, true)(this._dnsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudNetworkDnsListStructList",
      },
      ip: {
        value: cdktf.listMapperHcl(dataZedcloudNetworkIpToHclTerraform, true)(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudNetworkIpList",
      },
      proxy: {
        value: cdktf.listMapperHcl(dataZedcloudNetworkProxyToHclTerraform, true)(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudNetworkProxyList",
      },
      revision: {
        value: cdktf.listMapperHcl(dataZedcloudNetworkRevisionToHclTerraform, true)(this._revision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudNetworkRevisionList",
      },
      wireless: {
        value: cdktf.listMapperHcl(dataZedcloudNetworkWirelessToHclTerraform, true)(this._wireless.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudNetworkWirelessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
