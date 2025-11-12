// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#id GlobalPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#parameters GlobalPool#parameters}
  */
  readonly parameters: GlobalPoolParameters;
}
export interface GlobalPoolItemContext {
}

export function globalPoolItemContextToTerraform(struct?: GlobalPoolItemContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globalPoolItemContextToHclTerraform(struct?: GlobalPoolItemContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GlobalPoolItemContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalPoolItemContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalPoolItemContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context_key - computed: true, optional: false, required: false
  public get contextKey() {
    return this.getStringAttribute('context_key');
  }

  // context_value - computed: true, optional: false, required: false
  public get contextValue() {
    return this.getStringAttribute('context_value');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }
}

export class GlobalPoolItemContextList extends cdktf.ComplexList {

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
  public get(index: number): GlobalPoolItemContextOutputReference {
    return new GlobalPoolItemContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalPoolItem {
}

export function globalPoolItemToTerraform(struct?: GlobalPoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globalPoolItemToHclTerraform(struct?: GlobalPoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GlobalPoolItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalPoolItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalPoolItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_ip_address_count - computed: true, optional: false, required: false
  public get availableIpAddressCount() {
    return this.getNumberAttribute('available_ip_address_count');
  }

  // client_options - computed: true, optional: false, required: false
  public get clientOptions() {
    return this.getStringAttribute('client_options');
  }

  // configure_external_dhcp - computed: true, optional: false, required: false
  public get configureExternalDhcp() {
    return this.getStringAttribute('configure_external_dhcp');
  }

  // context - computed: true, optional: false, required: false
  private _context = new GlobalPoolItemContextList(this, "context", false);
  public get context() {
    return this._context;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // default_assigned_ip_address_count - computed: true, optional: false, required: false
  public get defaultAssignedIpAddressCount() {
    return this.getNumberAttribute('default_assigned_ip_address_count');
  }

  // dhcp_server_ips - computed: true, optional: false, required: false
  public get dhcpServerIps() {
    return this.getListAttribute('dhcp_server_ips');
  }

  // dns_server_ips - computed: true, optional: false, required: false
  public get dnsServerIps() {
    return this.getListAttribute('dns_server_ips');
  }

  // gateways - computed: true, optional: false, required: false
  public get gateways() {
    return this.getListAttribute('gateways');
  }

  // has_subpools - computed: true, optional: false, required: false
  public get hasSubpools() {
    return this.getStringAttribute('has_subpools');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_pool_cidr - computed: true, optional: false, required: false
  public get ipPoolCidr() {
    return this.getStringAttribute('ip_pool_cidr');
  }

  // ip_pool_name - computed: true, optional: false, required: false
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }

  // ip_pool_type - computed: true, optional: false, required: false
  public get ipPoolType() {
    return this.getStringAttribute('ip_pool_type');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // overlapping - computed: true, optional: false, required: false
  public get overlapping() {
    return this.getStringAttribute('overlapping');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parent_uuid - computed: true, optional: false, required: false
  public get parentUuid() {
    return this.getStringAttribute('parent_uuid');
  }

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getStringAttribute('shared');
  }

  // total_assignable_ip_address_count - computed: true, optional: false, required: false
  public get totalAssignableIpAddressCount() {
    return this.getNumberAttribute('total_assignable_ip_address_count');
  }

  // total_ip_address_count - computed: true, optional: false, required: false
  public get totalIpAddressCount() {
    return this.getNumberAttribute('total_ip_address_count');
  }

  // unavailable_ip_address_count - computed: true, optional: false, required: false
  public get unavailableIpAddressCount() {
    return this.getNumberAttribute('unavailable_ip_address_count');
  }

  // used_ip_address_count - computed: true, optional: false, required: false
  public get usedIpAddressCount() {
    return this.getNumberAttribute('used_ip_address_count');
  }

  // used_percentage - computed: true, optional: false, required: false
  public get usedPercentage() {
    return this.getStringAttribute('used_percentage');
  }
}

export class GlobalPoolItemList extends cdktf.ComplexList {

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
  public get(index: number): GlobalPoolItemOutputReference {
    return new GlobalPoolItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalPoolParametersSettingsIppool {
  /**
  * Dhcp Server Ips
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#dhcp_server_ips GlobalPool#dhcp_server_ips}
  */
  readonly dhcpServerIps?: string[];
  /**
  * Dns Server Ips
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#dns_server_ips GlobalPool#dns_server_ips}
  */
  readonly dnsServerIps?: string[];
  /**
  * Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#gateway GlobalPool#gateway}
  */
  readonly gateway?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#id GlobalPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ip Address Space. Allowed values are IPv6 or IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#ip_address_space GlobalPool#ip_address_space}
  */
  readonly ipAddressSpace?: string;
  /**
  * Ip Pool Cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#ip_pool_cidr GlobalPool#ip_pool_cidr}
  */
  readonly ipPoolCidr?: string;
  /**
  * Ip Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#ip_pool_name GlobalPool#ip_pool_name}
  */
  readonly ipPoolName: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#type GlobalPool#type}
  */
  readonly type?: string;
}

export function globalPoolParametersSettingsIppoolToTerraform(struct?: GlobalPoolParametersSettingsIppoolOutputReference | GlobalPoolParametersSettingsIppool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpServerIps),
    dns_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerIps),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    id: cdktf.stringToTerraform(struct!.id),
    ip_address_space: cdktf.stringToTerraform(struct!.ipAddressSpace),
    ip_pool_cidr: cdktf.stringToTerraform(struct!.ipPoolCidr),
    ip_pool_name: cdktf.stringToTerraform(struct!.ipPoolName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function globalPoolParametersSettingsIppoolToHclTerraform(struct?: GlobalPoolParametersSettingsIppoolOutputReference | GlobalPoolParametersSettingsIppool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpServerIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_space: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pool_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalPoolParametersSettingsIppoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalPoolParametersSettingsIppool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerIps = this._dhcpServerIps;
    }
    if (this._dnsServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIps = this._dnsServerIps;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddressSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressSpace = this._ipAddressSpace;
    }
    if (this._ipPoolCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolCidr = this._ipPoolCidr;
    }
    if (this._ipPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolName = this._ipPoolName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalPoolParametersSettingsIppool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpServerIps = undefined;
      this._dnsServerIps = undefined;
      this._gateway = undefined;
      this._id = undefined;
      this._ipAddressSpace = undefined;
      this._ipPoolCidr = undefined;
      this._ipPoolName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpServerIps = value.dhcpServerIps;
      this._dnsServerIps = value.dnsServerIps;
      this._gateway = value.gateway;
      this._id = value.id;
      this._ipAddressSpace = value.ipAddressSpace;
      this._ipPoolCidr = value.ipPoolCidr;
      this._ipPoolName = value.ipPoolName;
      this._type = value.type;
    }
  }

  // dhcp_server_ips - computed: false, optional: true, required: false
  private _dhcpServerIps?: string[]; 
  public get dhcpServerIps() {
    return this.getListAttribute('dhcp_server_ips');
  }
  public set dhcpServerIps(value: string[]) {
    this._dhcpServerIps = value;
  }
  public resetDhcpServerIps() {
    this._dhcpServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerIpsInput() {
    return this._dhcpServerIps;
  }

  // dns_server_ips - computed: false, optional: true, required: false
  private _dnsServerIps?: string[]; 
  public get dnsServerIps() {
    return this.getListAttribute('dns_server_ips');
  }
  public set dnsServerIps(value: string[]) {
    this._dnsServerIps = value;
  }
  public resetDnsServerIps() {
    this._dnsServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpsInput() {
    return this._dnsServerIps;
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

  // id - computed: false, optional: true, required: false
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

  // ip_address_space - computed: false, optional: true, required: false
  private _ipAddressSpace?: string; 
  public get ipAddressSpace() {
    return this.getStringAttribute('ip_address_space');
  }
  public set ipAddressSpace(value: string) {
    this._ipAddressSpace = value;
  }
  public resetIpAddressSpace() {
    this._ipAddressSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressSpaceInput() {
    return this._ipAddressSpace;
  }

  // ip_pool_cidr - computed: false, optional: true, required: false
  private _ipPoolCidr?: string; 
  public get ipPoolCidr() {
    return this.getStringAttribute('ip_pool_cidr');
  }
  public set ipPoolCidr(value: string) {
    this._ipPoolCidr = value;
  }
  public resetIpPoolCidr() {
    this._ipPoolCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolCidrInput() {
    return this._ipPoolCidr;
  }

  // ip_pool_name - computed: false, optional: false, required: true
  private _ipPoolName?: string; 
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }
  public set ipPoolName(value: string) {
    this._ipPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolNameInput() {
    return this._ipPoolName;
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
}
export interface GlobalPoolParametersSettings {
  /**
  * ippool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#ippool GlobalPool#ippool}
  */
  readonly ippool: GlobalPoolParametersSettingsIppool;
}

export function globalPoolParametersSettingsToTerraform(struct?: GlobalPoolParametersSettingsOutputReference | GlobalPoolParametersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ippool: globalPoolParametersSettingsIppoolToTerraform(struct!.ippool),
  }
}


export function globalPoolParametersSettingsToHclTerraform(struct?: GlobalPoolParametersSettingsOutputReference | GlobalPoolParametersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ippool: {
      value: globalPoolParametersSettingsIppoolToHclTerraform(struct!.ippool),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalPoolParametersSettingsIppoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalPoolParametersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalPoolParametersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ippool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ippool = this._ippool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalPoolParametersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ippool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ippool.internalValue = value.ippool;
    }
  }

  // ippool - computed: false, optional: false, required: true
  private _ippool = new GlobalPoolParametersSettingsIppoolOutputReference(this, "ippool");
  public get ippool() {
    return this._ippool;
  }
  public putIppool(value: GlobalPoolParametersSettingsIppool) {
    this._ippool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolInput() {
    return this._ippool.internalValue;
  }
}
export interface GlobalPoolParameters {
  /**
  * id path parameter. global pool id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#id GlobalPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#settings GlobalPool#settings}
  */
  readonly settings: GlobalPoolParametersSettings;
}

export function globalPoolParametersToTerraform(struct?: GlobalPoolParametersOutputReference | GlobalPoolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    settings: globalPoolParametersSettingsToTerraform(struct!.settings),
  }
}


export function globalPoolParametersToHclTerraform(struct?: GlobalPoolParametersOutputReference | GlobalPoolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: globalPoolParametersSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalPoolParametersSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalPoolParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalPoolParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalPoolParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._settings.internalValue = value.settings;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // settings - computed: false, optional: false, required: true
  private _settings = new GlobalPoolParametersSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GlobalPoolParametersSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool dnacenter_global_pool}
*/
export class GlobalPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_global_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalPool to import
  * @param importFromId The id of the existing GlobalPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_global_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_pool dnacenter_global_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalPoolConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_global_pool',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new GlobalPoolItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new GlobalPoolParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GlobalPoolParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: globalPoolParametersToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: globalPoolParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalPoolParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
