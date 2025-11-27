// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectRegionNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#name CloudProjectRegionNetwork#name}
  */
  readonly name: string;
  /**
  * Region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#region_name CloudProjectRegionNetwork#region_name}
  */
  readonly regionName: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#service_name CloudProjectRegionNetwork#service_name}
  */
  readonly serviceName: string;
  /**
  * Parameters to create a subnet from another resource creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#subnet CloudProjectRegionNetwork#subnet}
  */
  readonly subnet: CloudProjectRegionNetworkSubnet;
  /**
  * VLAN id, between 1 and 4000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#vlan_id CloudProjectRegionNetwork#vlan_id}
  */
  readonly vlanId?: number;
}
export interface CloudProjectRegionNetworkSubnetAllocationPools {
  /**
  * Last IP for the pool (eg: 192.168.1.24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#end CloudProjectRegionNetwork#end}
  */
  readonly end?: string;
  /**
  * First IP for the pool (eg: 192.168.1.12)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#start CloudProjectRegionNetwork#start}
  */
  readonly start?: string;
}

export function cloudProjectRegionNetworkSubnetAllocationPoolsToTerraform(struct?: CloudProjectRegionNetworkSubnetAllocationPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function cloudProjectRegionNetworkSubnetAllocationPoolsToHclTerraform(struct?: CloudProjectRegionNetworkSubnetAllocationPools | cdktf.IResolvable): any {
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

export class CloudProjectRegionNetworkSubnetAllocationPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectRegionNetworkSubnetAllocationPools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudProjectRegionNetworkSubnetAllocationPools | cdktf.IResolvable | undefined) {
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

export class CloudProjectRegionNetworkSubnetAllocationPoolsList extends cdktf.ComplexList {
  public internalValue? : CloudProjectRegionNetworkSubnetAllocationPools[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectRegionNetworkSubnetAllocationPoolsOutputReference {
    return new CloudProjectRegionNetworkSubnetAllocationPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectRegionNetworkSubnetHostRoutes {
  /**
  * Host route destination (eg: 192.168.1.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#destination CloudProjectRegionNetwork#destination}
  */
  readonly destination?: string;
  /**
  * Host route next hop (eg: 192.168.1.254)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#next_hop CloudProjectRegionNetwork#next_hop}
  */
  readonly nextHop?: string;
}

export function cloudProjectRegionNetworkSubnetHostRoutesToTerraform(struct?: CloudProjectRegionNetworkSubnetHostRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function cloudProjectRegionNetworkSubnetHostRoutesToHclTerraform(struct?: CloudProjectRegionNetworkSubnetHostRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectRegionNetworkSubnetHostRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectRegionNetworkSubnetHostRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRegionNetworkSubnetHostRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._nextHop = value.nextHop;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class CloudProjectRegionNetworkSubnetHostRoutesList extends cdktf.ComplexList {
  public internalValue? : CloudProjectRegionNetworkSubnetHostRoutes[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectRegionNetworkSubnetHostRoutesOutputReference {
    return new CloudProjectRegionNetworkSubnetHostRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectRegionNetworkSubnet {
  /**
  * List of ip pools allocated in subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#allocation_pools CloudProjectRegionNetwork#allocation_pools}
  */
  readonly allocationPools?: CloudProjectRegionNetworkSubnetAllocationPools[] | cdktf.IResolvable;
  /**
  * Subnet range in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#cidr CloudProjectRegionNetwork#cidr}
  */
  readonly cidr: string;
  /**
  * DNS nameservers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#dns_name_servers CloudProjectRegionNetwork#dns_name_servers}
  */
  readonly dnsNameServers?: string[];
  /**
  * Enable DHCP for the subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#enable_dhcp CloudProjectRegionNetwork#enable_dhcp}
  */
  readonly enableDhcp: boolean | cdktf.IResolvable;
  /**
  * Set a gateway ip for the subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#enable_gateway_ip CloudProjectRegionNetwork#enable_gateway_ip}
  */
  readonly enableGatewayIp: boolean | cdktf.IResolvable;
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#gateway_ip CloudProjectRegionNetwork#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Host routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#host_routes CloudProjectRegionNetwork#host_routes}
  */
  readonly hostRoutes?: CloudProjectRegionNetworkSubnetHostRoutes[] | cdktf.IResolvable;
  /**
  * IP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#ip_version CloudProjectRegionNetwork#ip_version}
  */
  readonly ipVersion: number;
  /**
  * Subnet name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#name CloudProjectRegionNetwork#name}
  */
  readonly name?: string;
  /**
  * Use default DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#use_default_public_dnsresolver CloudProjectRegionNetwork#use_default_public_dnsresolver}
  */
  readonly useDefaultPublicDnsresolver?: boolean | cdktf.IResolvable;
}

export function cloudProjectRegionNetworkSubnetToTerraform(struct?: CloudProjectRegionNetworkSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_pools: cdktf.listMapper(cloudProjectRegionNetworkSubnetAllocationPoolsToTerraform, false)(struct!.allocationPools),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    dns_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNameServers),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    enable_gateway_ip: cdktf.booleanToTerraform(struct!.enableGatewayIp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    host_routes: cdktf.listMapper(cloudProjectRegionNetworkSubnetHostRoutesToTerraform, false)(struct!.hostRoutes),
    ip_version: cdktf.numberToTerraform(struct!.ipVersion),
    name: cdktf.stringToTerraform(struct!.name),
    use_default_public_dnsresolver: cdktf.booleanToTerraform(struct!.useDefaultPublicDnsresolver),
  }
}


export function cloudProjectRegionNetworkSubnetToHclTerraform(struct?: CloudProjectRegionNetworkSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_pools: {
      value: cdktf.listMapperHcl(cloudProjectRegionNetworkSubnetAllocationPoolsToHclTerraform, false)(struct!.allocationPools),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProjectRegionNetworkSubnetAllocationPoolsList",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_gateway_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableGatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_routes: {
      value: cdktf.listMapperHcl(cloudProjectRegionNetworkSubnetHostRoutesToHclTerraform, false)(struct!.hostRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProjectRegionNetworkSubnetHostRoutesList",
    },
    ip_version: {
      value: cdktf.numberToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_public_dnsresolver: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultPublicDnsresolver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectRegionNetworkSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectRegionNetworkSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationPools = this._allocationPools?.internalValue;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._dnsNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNameServers = this._dnsNameServers;
    }
    if (this._enableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcp = this._enableDhcp;
    }
    if (this._enableGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGatewayIp = this._enableGatewayIp;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._hostRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRoutes = this._hostRoutes?.internalValue;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useDefaultPublicDnsresolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultPublicDnsresolver = this._useDefaultPublicDnsresolver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRegionNetworkSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationPools.internalValue = undefined;
      this._cidr = undefined;
      this._dnsNameServers = undefined;
      this._enableDhcp = undefined;
      this._enableGatewayIp = undefined;
      this._gatewayIp = undefined;
      this._hostRoutes.internalValue = undefined;
      this._ipVersion = undefined;
      this._name = undefined;
      this._useDefaultPublicDnsresolver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationPools.internalValue = value.allocationPools;
      this._cidr = value.cidr;
      this._dnsNameServers = value.dnsNameServers;
      this._enableDhcp = value.enableDhcp;
      this._enableGatewayIp = value.enableGatewayIp;
      this._gatewayIp = value.gatewayIp;
      this._hostRoutes.internalValue = value.hostRoutes;
      this._ipVersion = value.ipVersion;
      this._name = value.name;
      this._useDefaultPublicDnsresolver = value.useDefaultPublicDnsresolver;
    }
  }

  // allocation_pools - computed: false, optional: true, required: false
  private _allocationPools = new CloudProjectRegionNetworkSubnetAllocationPoolsList(this, "allocation_pools", false);
  public get allocationPools() {
    return this._allocationPools;
  }
  public putAllocationPools(value: CloudProjectRegionNetworkSubnetAllocationPools[] | cdktf.IResolvable) {
    this._allocationPools.internalValue = value;
  }
  public resetAllocationPools() {
    this._allocationPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPoolsInput() {
    return this._allocationPools.internalValue;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dns_name_servers - computed: false, optional: true, required: false
  private _dnsNameServers?: string[]; 
  public get dnsNameServers() {
    return this.getListAttribute('dns_name_servers');
  }
  public set dnsNameServers(value: string[]) {
    this._dnsNameServers = value;
  }
  public resetDnsNameServers() {
    this._dnsNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameServersInput() {
    return this._dnsNameServers;
  }

  // enable_dhcp - computed: false, optional: false, required: true
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
  }

  // enable_gateway_ip - computed: false, optional: false, required: true
  private _enableGatewayIp?: boolean | cdktf.IResolvable; 
  public get enableGatewayIp() {
    return this.getBooleanAttribute('enable_gateway_ip');
  }
  public set enableGatewayIp(value: boolean | cdktf.IResolvable) {
    this._enableGatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayIpInput() {
    return this._enableGatewayIp;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // host_routes - computed: false, optional: true, required: false
  private _hostRoutes = new CloudProjectRegionNetworkSubnetHostRoutesList(this, "host_routes", false);
  public get hostRoutes() {
    return this._hostRoutes;
  }
  public putHostRoutes(value: CloudProjectRegionNetworkSubnetHostRoutes[] | cdktf.IResolvable) {
    this._hostRoutes.internalValue = value;
  }
  public resetHostRoutes() {
    this._hostRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRoutesInput() {
    return this._hostRoutes.internalValue;
  }

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // use_default_public_dnsresolver - computed: false, optional: true, required: false
  private _useDefaultPublicDnsresolver?: boolean | cdktf.IResolvable; 
  public get useDefaultPublicDnsresolver() {
    return this.getBooleanAttribute('use_default_public_dnsresolver');
  }
  public set useDefaultPublicDnsresolver(value: boolean | cdktf.IResolvable) {
    this._useDefaultPublicDnsresolver = value;
  }
  public resetUseDefaultPublicDnsresolver() {
    this._useDefaultPublicDnsresolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPublicDnsresolverInput() {
    return this._useDefaultPublicDnsresolver;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network ovh_cloud_project_region_network}
*/
export class CloudProjectRegionNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_region_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectRegionNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectRegionNetwork to import
  * @param importFromId The id of the existing CloudProjectRegionNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectRegionNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_region_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_region_network ovh_cloud_project_region_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectRegionNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectRegionNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_region_network',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._regionName = config.regionName;
    this._serviceName = config.serviceName;
    this._subnet.internalValue = config.subnet;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet = new CloudProjectRegionNetworkSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: CloudProjectRegionNetworkSubnet) {
    this._subnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region_name: cdktf.stringToTerraform(this._regionName),
      service_name: cdktf.stringToTerraform(this._serviceName),
      subnet: cloudProjectRegionNetworkSubnetToTerraform(this._subnet.internalValue),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cloudProjectRegionNetworkSubnetToHclTerraform(this._subnet.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectRegionNetworkSubnet",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
