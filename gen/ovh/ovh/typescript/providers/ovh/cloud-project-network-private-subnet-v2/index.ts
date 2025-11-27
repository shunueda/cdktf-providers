// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectNetworkPrivateSubnetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * CIDR of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#cidr CloudProjectNetworkPrivateSubnetV2#cidr}
  */
  readonly cidr: string;
  /**
  * Enable DHCP in subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#dhcp CloudProjectNetworkPrivateSubnetV2#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * List of DNS nameservers, default: 213.186.33.99
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#dns_nameservers CloudProjectNetworkPrivateSubnetV2#dns_nameservers}
  */
  readonly dnsNameservers?: string[];
  /**
  * Enable gateway IP in subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#enable_gateway_ip CloudProjectNetworkPrivateSubnetV2#enable_gateway_ip}
  */
  readonly enableGatewayIp?: boolean | cdktf.IResolvable;
  /**
  * Gateway IP of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#gateway_ip CloudProjectNetworkPrivateSubnetV2#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#id CloudProjectNetworkPrivateSubnetV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#name CloudProjectNetworkPrivateSubnetV2#name}
  */
  readonly name: string;
  /**
  * Network ID of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#network_id CloudProjectNetworkPrivateSubnetV2#network_id}
  */
  readonly networkId: string;
  /**
  * Region of network/subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#region CloudProjectNetworkPrivateSubnetV2#region}
  */
  readonly region: string;
  /**
  * Service name of the resource representing the id of the cloud project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#service_name CloudProjectNetworkPrivateSubnetV2#service_name}
  */
  readonly serviceName: string;
  /**
  * Use OVH default DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#use_default_public_dns_resolver CloudProjectNetworkPrivateSubnetV2#use_default_public_dns_resolver}
  */
  readonly useDefaultPublicDnsResolver?: boolean | cdktf.IResolvable;
  /**
  * allocation_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#allocation_pools CloudProjectNetworkPrivateSubnetV2#allocation_pools}
  */
  readonly allocationPools?: CloudProjectNetworkPrivateSubnetV2AllocationPools[] | cdktf.IResolvable;
  /**
  * host_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#host_route CloudProjectNetworkPrivateSubnetV2#host_route}
  */
  readonly hostRoute?: CloudProjectNetworkPrivateSubnetV2HostRoute[] | cdktf.IResolvable;
}
export interface CloudProjectNetworkPrivateSubnetV2AllocationPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#end CloudProjectNetworkPrivateSubnetV2#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#start CloudProjectNetworkPrivateSubnetV2#start}
  */
  readonly start: string;
}

export function cloudProjectNetworkPrivateSubnetV2AllocationPoolsToTerraform(struct?: CloudProjectNetworkPrivateSubnetV2AllocationPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function cloudProjectNetworkPrivateSubnetV2AllocationPoolsToHclTerraform(struct?: CloudProjectNetworkPrivateSubnetV2AllocationPools | cdktf.IResolvable): any {
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

export class CloudProjectNetworkPrivateSubnetV2AllocationPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectNetworkPrivateSubnetV2AllocationPools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudProjectNetworkPrivateSubnetV2AllocationPools | cdktf.IResolvable | undefined) {
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

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class CloudProjectNetworkPrivateSubnetV2AllocationPoolsList extends cdktf.ComplexList {
  public internalValue? : CloudProjectNetworkPrivateSubnetV2AllocationPools[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectNetworkPrivateSubnetV2AllocationPoolsOutputReference {
    return new CloudProjectNetworkPrivateSubnetV2AllocationPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectNetworkPrivateSubnetV2HostRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#destination CloudProjectNetworkPrivateSubnetV2#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#nexthop CloudProjectNetworkPrivateSubnetV2#nexthop}
  */
  readonly nexthop: string;
}

export function cloudProjectNetworkPrivateSubnetV2HostRouteToTerraform(struct?: CloudProjectNetworkPrivateSubnetV2HostRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    nexthop: cdktf.stringToTerraform(struct!.nexthop),
  }
}


export function cloudProjectNetworkPrivateSubnetV2HostRouteToHclTerraform(struct?: CloudProjectNetworkPrivateSubnetV2HostRoute | cdktf.IResolvable): any {
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
    nexthop: {
      value: cdktf.stringToHclTerraform(struct!.nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectNetworkPrivateSubnetV2HostRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectNetworkPrivateSubnetV2HostRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectNetworkPrivateSubnetV2HostRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._nexthop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._nexthop = value.nexthop;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // nexthop - computed: false, optional: false, required: true
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }
}

export class CloudProjectNetworkPrivateSubnetV2HostRouteList extends cdktf.ComplexList {
  public internalValue? : CloudProjectNetworkPrivateSubnetV2HostRoute[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectNetworkPrivateSubnetV2HostRouteOutputReference {
    return new CloudProjectNetworkPrivateSubnetV2HostRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2 ovh_cloud_project_network_private_subnet_v2}
*/
export class CloudProjectNetworkPrivateSubnetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_network_private_subnet_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectNetworkPrivateSubnetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectNetworkPrivateSubnetV2 to import
  * @param importFromId The id of the existing CloudProjectNetworkPrivateSubnetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectNetworkPrivateSubnetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_network_private_subnet_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_network_private_subnet_v2 ovh_cloud_project_network_private_subnet_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectNetworkPrivateSubnetV2Config
  */
  public constructor(scope: Construct, id: string, config: CloudProjectNetworkPrivateSubnetV2Config) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_network_private_subnet_v2',
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
    this._cidr = config.cidr;
    this._dhcp = config.dhcp;
    this._dnsNameservers = config.dnsNameservers;
    this._enableGatewayIp = config.enableGatewayIp;
    this._gatewayIp = config.gatewayIp;
    this._id = config.id;
    this._name = config.name;
    this._networkId = config.networkId;
    this._region = config.region;
    this._serviceName = config.serviceName;
    this._useDefaultPublicDnsResolver = config.useDefaultPublicDnsResolver;
    this._allocationPools.internalValue = config.allocationPools;
    this._hostRoute.internalValue = config.hostRoute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dns_nameservers - computed: true, optional: true, required: false
  private _dnsNameservers?: string[]; 
  public get dnsNameservers() {
    return this.getListAttribute('dns_nameservers');
  }
  public set dnsNameservers(value: string[]) {
    this._dnsNameservers = value;
  }
  public resetDnsNameservers() {
    this._dnsNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversInput() {
    return this._dnsNameservers;
  }

  // enable_gateway_ip - computed: false, optional: true, required: false
  private _enableGatewayIp?: boolean | cdktf.IResolvable; 
  public get enableGatewayIp() {
    return this.getBooleanAttribute('enable_gateway_ip');
  }
  public set enableGatewayIp(value: boolean | cdktf.IResolvable) {
    this._enableGatewayIp = value;
  }
  public resetEnableGatewayIp() {
    this._enableGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayIpInput() {
    return this._enableGatewayIp;
  }

  // gateway_ip - computed: true, optional: true, required: false
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // use_default_public_dns_resolver - computed: false, optional: true, required: false
  private _useDefaultPublicDnsResolver?: boolean | cdktf.IResolvable; 
  public get useDefaultPublicDnsResolver() {
    return this.getBooleanAttribute('use_default_public_dns_resolver');
  }
  public set useDefaultPublicDnsResolver(value: boolean | cdktf.IResolvable) {
    this._useDefaultPublicDnsResolver = value;
  }
  public resetUseDefaultPublicDnsResolver() {
    this._useDefaultPublicDnsResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPublicDnsResolverInput() {
    return this._useDefaultPublicDnsResolver;
  }

  // allocation_pools - computed: false, optional: true, required: false
  private _allocationPools = new CloudProjectNetworkPrivateSubnetV2AllocationPoolsList(this, "allocation_pools", false);
  public get allocationPools() {
    return this._allocationPools;
  }
  public putAllocationPools(value: CloudProjectNetworkPrivateSubnetV2AllocationPools[] | cdktf.IResolvable) {
    this._allocationPools.internalValue = value;
  }
  public resetAllocationPools() {
    this._allocationPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationPoolsInput() {
    return this._allocationPools.internalValue;
  }

  // host_route - computed: false, optional: true, required: false
  private _hostRoute = new CloudProjectNetworkPrivateSubnetV2HostRouteList(this, "host_route", false);
  public get hostRoute() {
    return this._hostRoute;
  }
  public putHostRoute(value: CloudProjectNetworkPrivateSubnetV2HostRoute[] | cdktf.IResolvable) {
    this._hostRoute.internalValue = value;
  }
  public resetHostRoute() {
    this._hostRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRouteInput() {
    return this._hostRoute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      dhcp: cdktf.booleanToTerraform(this._dhcp),
      dns_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsNameservers),
      enable_gateway_ip: cdktf.booleanToTerraform(this._enableGatewayIp),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      region: cdktf.stringToTerraform(this._region),
      service_name: cdktf.stringToTerraform(this._serviceName),
      use_default_public_dns_resolver: cdktf.booleanToTerraform(this._useDefaultPublicDnsResolver),
      allocation_pools: cdktf.listMapper(cloudProjectNetworkPrivateSubnetV2AllocationPoolsToTerraform, true)(this._allocationPools.internalValue),
      host_route: cdktf.listMapper(cloudProjectNetworkPrivateSubnetV2HostRouteToTerraform, true)(this._hostRoute.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp: {
        value: cdktf.booleanToHclTerraform(this._dhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsNameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_gateway_ip: {
        value: cdktf.booleanToHclTerraform(this._enableGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      use_default_public_dns_resolver: {
        value: cdktf.booleanToHclTerraform(this._useDefaultPublicDnsResolver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allocation_pools: {
        value: cdktf.listMapperHcl(cloudProjectNetworkPrivateSubnetV2AllocationPoolsToHclTerraform, true)(this._allocationPools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProjectNetworkPrivateSubnetV2AllocationPoolsList",
      },
      host_route: {
        value: cdktf.listMapperHcl(cloudProjectNetworkPrivateSubnetV2HostRouteToHclTerraform, true)(this._hostRoute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudProjectNetworkPrivateSubnetV2HostRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
