// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dedicating the External Network will enable Route Advertisement for this Edge Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#dedicate_external_network NsxtEdgegateway#dedicate_external_network}
  */
  readonly dedicateExternalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Edge Gateway deployment mode. One of 'DISTRIBUTED_ONLY', 'ACTIVE_STANDBY'. Default 'ACTIVE_STANDBY'. VCD 10.6+ 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#deployment_mode NsxtEdgegateway#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Edge Gateway description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#description NsxtEdgegateway#description}
  */
  readonly description?: string;
  /**
  * Select specific NSX-T Edge Cluster. Will be inherited from external network if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#edge_cluster_id NsxtEdgegateway#edge_cluster_id}
  */
  readonly edgeClusterId?: string;
  /**
  * External network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#external_network_id NsxtEdgegateway#external_network_id}
  */
  readonly externalNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#id NsxtEdgegateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How many maximum IPs should be reported in 'used_ipcount' and 'unused_ip_count'. Default 1000000, 0 - unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#ip_count_read_limit NsxtEdgegateway#ip_count_read_limit}
  */
  readonly ipCountReadLimit?: number;
  /**
  * Edge Gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#name NsxtEdgegateway#name}
  */
  readonly name: string;
  /**
  * A flag indicating whether non-distributed routing is enabled or not (`false` by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#non_distributed_routing_enabled NsxtEdgegateway#non_distributed_routing_enabled}
  */
  readonly nonDistributedRoutingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#org NsxtEdgegateway#org}
  */
  readonly org?: string;
  /**
  * ID of VDC or VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#owner_id NsxtEdgegateway#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Optional ID of starting VDC if the 'owner_id' is a VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#starting_vdc_id NsxtEdgegateway#starting_vdc_id}
  */
  readonly startingVdcId?: string;
  /**
  * Total number of IP addresses allocated for this gateway from Tier0 uplink. Can be set with 'subnet_with_total_ip_count' definitions only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#total_allocated_ip_count NsxtEdgegateway#total_allocated_ip_count}
  */
  readonly totalAllocatedIpCount?: number;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#vdc NsxtEdgegateway#vdc}
  */
  readonly vdc?: string;
  /**
  * external_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#external_network NsxtEdgegateway#external_network}
  */
  readonly externalNetwork?: NsxtEdgegatewayExternalNetwork[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#subnet NsxtEdgegateway#subnet}
  */
  readonly subnet?: NsxtEdgegatewaySubnet[] | cdktf.IResolvable;
  /**
  * subnet_with_ip_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#subnet_with_ip_count NsxtEdgegateway#subnet_with_ip_count}
  */
  readonly subnetWithIpCount?: NsxtEdgegatewaySubnetWithIpCount[] | cdktf.IResolvable;
  /**
  * subnet_with_total_ip_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#subnet_with_total_ip_count NsxtEdgegateway#subnet_with_total_ip_count}
  */
  readonly subnetWithTotalIpCount?: NsxtEdgegatewaySubnetWithTotalIpCount[] | cdktf.IResolvable;
}
export interface NsxtEdgegatewayExternalNetwork {
  /**
  * Number of allocated IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#allocated_ip_count NsxtEdgegateway#allocated_ip_count}
  */
  readonly allocatedIpCount: number;
  /**
  * NSX-T Segment backed External Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#external_network_id NsxtEdgegateway#external_network_id}
  */
  readonly externalNetworkId: string;
  /**
  * Gateway IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#gateway NsxtEdgegateway#gateway}
  */
  readonly gateway: string;
  /**
  * Prefix length for a subnet (e.g. 24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#prefix_length NsxtEdgegateway#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Primary IP address for the Edge Gateway - will be auto-assigned if not defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#primary_ip NsxtEdgegateway#primary_ip}
  */
  readonly primaryIp?: string;
}

export function nsxtEdgegatewayExternalNetworkToTerraform(struct?: NsxtEdgegatewayExternalNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_count: cdktf.numberToTerraform(struct!.allocatedIpCount),
    external_network_id: cdktf.stringToTerraform(struct!.externalNetworkId),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    primary_ip: cdktf.stringToTerraform(struct!.primaryIp),
  }
}


export function nsxtEdgegatewayExternalNetworkToHclTerraform(struct?: NsxtEdgegatewayExternalNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_count: {
      value: cdktf.numberToHclTerraform(struct!.allocatedIpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_network_id: {
      value: cdktf.stringToHclTerraform(struct!.externalNetworkId),
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
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_ip: {
      value: cdktf.stringToHclTerraform(struct!.primaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewayExternalNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtEdgegatewayExternalNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpCount = this._allocatedIpCount;
    }
    if (this._externalNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNetworkId = this._externalNetworkId;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._primaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIp = this._primaryIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewayExternalNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedIpCount = undefined;
      this._externalNetworkId = undefined;
      this._gateway = undefined;
      this._prefixLength = undefined;
      this._primaryIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedIpCount = value.allocatedIpCount;
      this._externalNetworkId = value.externalNetworkId;
      this._gateway = value.gateway;
      this._prefixLength = value.prefixLength;
      this._primaryIp = value.primaryIp;
    }
  }

  // allocated_ip_count - computed: false, optional: false, required: true
  private _allocatedIpCount?: number; 
  public get allocatedIpCount() {
    return this.getNumberAttribute('allocated_ip_count');
  }
  public set allocatedIpCount(value: number) {
    this._allocatedIpCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpCountInput() {
    return this._allocatedIpCount;
  }

  // external_network_id - computed: false, optional: false, required: true
  private _externalNetworkId?: string; 
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }
  public set externalNetworkId(value: string) {
    this._externalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkIdInput() {
    return this._externalNetworkId;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // primary_ip - computed: true, optional: true, required: false
  private _primaryIp?: string; 
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
  public set primaryIp(value: string) {
    this._primaryIp = value;
  }
  public resetPrimaryIp() {
    this._primaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpInput() {
    return this._primaryIp;
  }
}

export class NsxtEdgegatewayExternalNetworkList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewayExternalNetwork[] | cdktf.IResolvable

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
  public get(index: number): NsxtEdgegatewayExternalNetworkOutputReference {
    return new NsxtEdgegatewayExternalNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtEdgegatewaySubnetAllocatedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#end_address NsxtEdgegateway#end_address}
  */
  readonly endAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#start_address NsxtEdgegateway#start_address}
  */
  readonly startAddress: string;
}

export function nsxtEdgegatewaySubnetAllocatedIpsToTerraform(struct?: NsxtEdgegatewaySubnetAllocatedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function nsxtEdgegatewaySubnetAllocatedIpsToHclTerraform(struct?: NsxtEdgegatewaySubnetAllocatedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewaySubnetAllocatedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtEdgegatewaySubnetAllocatedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewaySubnetAllocatedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class NsxtEdgegatewaySubnetAllocatedIpsList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewaySubnetAllocatedIps[] | cdktf.IResolvable

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
  public get(index: number): NsxtEdgegatewaySubnetAllocatedIpsOutputReference {
    return new NsxtEdgegatewaySubnetAllocatedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtEdgegatewaySubnet {
  /**
  * Gateway address for a subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#gateway NsxtEdgegateway#gateway}
  */
  readonly gateway: string;
  /**
  * Prefix length for a subnet (e.g. 24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#prefix_length NsxtEdgegateway#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Primary IP address for the edge gateway - will be auto-assigned if not defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#primary_ip NsxtEdgegateway#primary_ip}
  */
  readonly primaryIp?: string;
  /**
  * allocated_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#allocated_ips NsxtEdgegateway#allocated_ips}
  */
  readonly allocatedIps?: NsxtEdgegatewaySubnetAllocatedIps[] | cdktf.IResolvable;
}

export function nsxtEdgegatewaySubnetToTerraform(struct?: NsxtEdgegatewaySubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    primary_ip: cdktf.stringToTerraform(struct!.primaryIp),
    allocated_ips: cdktf.listMapper(nsxtEdgegatewaySubnetAllocatedIpsToTerraform, true)(struct!.allocatedIps),
  }
}


export function nsxtEdgegatewaySubnetToHclTerraform(struct?: NsxtEdgegatewaySubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_ip: {
      value: cdktf.stringToHclTerraform(struct!.primaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocated_ips: {
      value: cdktf.listMapperHcl(nsxtEdgegatewaySubnetAllocatedIpsToHclTerraform, true)(struct!.allocatedIps),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtEdgegatewaySubnetAllocatedIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewaySubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtEdgegatewaySubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._primaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIp = this._primaryIp;
    }
    if (this._allocatedIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIps = this._allocatedIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewaySubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._prefixLength = undefined;
      this._primaryIp = undefined;
      this._allocatedIps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._prefixLength = value.prefixLength;
      this._primaryIp = value.primaryIp;
      this._allocatedIps.internalValue = value.allocatedIps;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // primary_ip - computed: false, optional: true, required: false
  private _primaryIp?: string; 
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
  public set primaryIp(value: string) {
    this._primaryIp = value;
  }
  public resetPrimaryIp() {
    this._primaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpInput() {
    return this._primaryIp;
  }

  // allocated_ips - computed: false, optional: true, required: false
  private _allocatedIps = new NsxtEdgegatewaySubnetAllocatedIpsList(this, "allocated_ips", true);
  public get allocatedIps() {
    return this._allocatedIps;
  }
  public putAllocatedIps(value: NsxtEdgegatewaySubnetAllocatedIps[] | cdktf.IResolvable) {
    this._allocatedIps.internalValue = value;
  }
  public resetAllocatedIps() {
    this._allocatedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpsInput() {
    return this._allocatedIps.internalValue;
  }
}

export class NsxtEdgegatewaySubnetList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewaySubnet[] | cdktf.IResolvable

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
  public get(index: number): NsxtEdgegatewaySubnetOutputReference {
    return new NsxtEdgegatewaySubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtEdgegatewaySubnetWithIpCount {
  /**
  * Number of IP addresses to allocate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#allocated_ip_count NsxtEdgegateway#allocated_ip_count}
  */
  readonly allocatedIpCount: number;
  /**
  * Gateway address for a subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#gateway NsxtEdgegateway#gateway}
  */
  readonly gateway: string;
  /**
  * Prefix length for a subnet (e.g. 24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#prefix_length NsxtEdgegateway#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Primary IP address for the edge gateway - will be auto-assigned if not defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#primary_ip NsxtEdgegateway#primary_ip}
  */
  readonly primaryIp?: string;
}

export function nsxtEdgegatewaySubnetWithIpCountToTerraform(struct?: NsxtEdgegatewaySubnetWithIpCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_count: cdktf.numberToTerraform(struct!.allocatedIpCount),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    primary_ip: cdktf.stringToTerraform(struct!.primaryIp),
  }
}


export function nsxtEdgegatewaySubnetWithIpCountToHclTerraform(struct?: NsxtEdgegatewaySubnetWithIpCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_count: {
      value: cdktf.numberToHclTerraform(struct!.allocatedIpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_ip: {
      value: cdktf.stringToHclTerraform(struct!.primaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewaySubnetWithIpCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtEdgegatewaySubnetWithIpCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpCount = this._allocatedIpCount;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._primaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIp = this._primaryIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewaySubnetWithIpCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedIpCount = undefined;
      this._gateway = undefined;
      this._prefixLength = undefined;
      this._primaryIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatedIpCount = value.allocatedIpCount;
      this._gateway = value.gateway;
      this._prefixLength = value.prefixLength;
      this._primaryIp = value.primaryIp;
    }
  }

  // allocated_ip_count - computed: false, optional: false, required: true
  private _allocatedIpCount?: number; 
  public get allocatedIpCount() {
    return this.getNumberAttribute('allocated_ip_count');
  }
  public set allocatedIpCount(value: number) {
    this._allocatedIpCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpCountInput() {
    return this._allocatedIpCount;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // primary_ip - computed: true, optional: true, required: false
  private _primaryIp?: string; 
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
  public set primaryIp(value: string) {
    this._primaryIp = value;
  }
  public resetPrimaryIp() {
    this._primaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpInput() {
    return this._primaryIp;
  }
}

export class NsxtEdgegatewaySubnetWithIpCountList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewaySubnetWithIpCount[] | cdktf.IResolvable

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
  public get(index: number): NsxtEdgegatewaySubnetWithIpCountOutputReference {
    return new NsxtEdgegatewaySubnetWithIpCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtEdgegatewaySubnetWithTotalIpCount {
  /**
  * Gateway address for a subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#gateway NsxtEdgegateway#gateway}
  */
  readonly gateway: string;
  /**
  * Prefix length for a subnet (e.g. 24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#prefix_length NsxtEdgegateway#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * Primary IP address for the edge gateway - will be auto-assigned if not defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#primary_ip NsxtEdgegateway#primary_ip}
  */
  readonly primaryIp?: string;
}

export function nsxtEdgegatewaySubnetWithTotalIpCountToTerraform(struct?: NsxtEdgegatewaySubnetWithTotalIpCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    primary_ip: cdktf.stringToTerraform(struct!.primaryIp),
  }
}


export function nsxtEdgegatewaySubnetWithTotalIpCountToHclTerraform(struct?: NsxtEdgegatewaySubnetWithTotalIpCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_ip: {
      value: cdktf.stringToHclTerraform(struct!.primaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewaySubnetWithTotalIpCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtEdgegatewaySubnetWithTotalIpCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._primaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIp = this._primaryIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewaySubnetWithTotalIpCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._prefixLength = undefined;
      this._primaryIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._prefixLength = value.prefixLength;
      this._primaryIp = value.primaryIp;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // primary_ip - computed: true, optional: true, required: false
  private _primaryIp?: string; 
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
  public set primaryIp(value: string) {
    this._primaryIp = value;
  }
  public resetPrimaryIp() {
    this._primaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpInput() {
    return this._primaryIp;
  }
}

export class NsxtEdgegatewaySubnetWithTotalIpCountList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewaySubnetWithTotalIpCount[] | cdktf.IResolvable

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
  public get(index: number): NsxtEdgegatewaySubnetWithTotalIpCountOutputReference {
    return new NsxtEdgegatewaySubnetWithTotalIpCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway vcd_nsxt_edgegateway}
*/
export class NsxtEdgegateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegateway to import
  * @param importFromId The id of the existing NsxtEdgegateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway vcd_nsxt_edgegateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicateExternalNetwork = config.dedicateExternalNetwork;
    this._deploymentMode = config.deploymentMode;
    this._description = config.description;
    this._edgeClusterId = config.edgeClusterId;
    this._externalNetworkId = config.externalNetworkId;
    this._id = config.id;
    this._ipCountReadLimit = config.ipCountReadLimit;
    this._name = config.name;
    this._nonDistributedRoutingEnabled = config.nonDistributedRoutingEnabled;
    this._org = config.org;
    this._ownerId = config.ownerId;
    this._startingVdcId = config.startingVdcId;
    this._totalAllocatedIpCount = config.totalAllocatedIpCount;
    this._vdc = config.vdc;
    this._externalNetwork.internalValue = config.externalNetwork;
    this._subnet.internalValue = config.subnet;
    this._subnetWithIpCount.internalValue = config.subnetWithIpCount;
    this._subnetWithTotalIpCount.internalValue = config.subnetWithTotalIpCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicate_external_network - computed: false, optional: true, required: false
  private _dedicateExternalNetwork?: boolean | cdktf.IResolvable; 
  public get dedicateExternalNetwork() {
    return this.getBooleanAttribute('dedicate_external_network');
  }
  public set dedicateExternalNetwork(value: boolean | cdktf.IResolvable) {
    this._dedicateExternalNetwork = value;
  }
  public resetDedicateExternalNetwork() {
    this._dedicateExternalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicateExternalNetworkInput() {
    return this._dedicateExternalNetwork;
  }

  // deployment_mode - computed: true, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
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

  // edge_cluster_id - computed: true, optional: true, required: false
  private _edgeClusterId?: string; 
  public get edgeClusterId() {
    return this.getStringAttribute('edge_cluster_id');
  }
  public set edgeClusterId(value: string) {
    this._edgeClusterId = value;
  }
  public resetEdgeClusterId() {
    this._edgeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterIdInput() {
    return this._edgeClusterId;
  }

  // external_network_allocated_ip_count - computed: true, optional: false, required: false
  public get externalNetworkAllocatedIpCount() {
    return this.getNumberAttribute('external_network_allocated_ip_count');
  }

  // external_network_id - computed: false, optional: false, required: true
  private _externalNetworkId?: string; 
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }
  public set externalNetworkId(value: string) {
    this._externalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkIdInput() {
    return this._externalNetworkId;
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

  // ip_count_read_limit - computed: false, optional: true, required: false
  private _ipCountReadLimit?: number; 
  public get ipCountReadLimit() {
    return this.getNumberAttribute('ip_count_read_limit');
  }
  public set ipCountReadLimit(value: number) {
    this._ipCountReadLimit = value;
  }
  public resetIpCountReadLimit() {
    this._ipCountReadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCountReadLimitInput() {
    return this._ipCountReadLimit;
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

  // non_distributed_routing_enabled - computed: true, optional: true, required: false
  private _nonDistributedRoutingEnabled?: boolean | cdktf.IResolvable; 
  public get nonDistributedRoutingEnabled() {
    return this.getBooleanAttribute('non_distributed_routing_enabled');
  }
  public set nonDistributedRoutingEnabled(value: boolean | cdktf.IResolvable) {
    this._nonDistributedRoutingEnabled = value;
  }
  public resetNonDistributedRoutingEnabled() {
    this._nonDistributedRoutingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonDistributedRoutingEnabledInput() {
    return this._nonDistributedRoutingEnabled;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // primary_ip - computed: true, optional: false, required: false
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }

  // starting_vdc_id - computed: false, optional: true, required: false
  private _startingVdcId?: string; 
  public get startingVdcId() {
    return this.getStringAttribute('starting_vdc_id');
  }
  public set startingVdcId(value: string) {
    this._startingVdcId = value;
  }
  public resetStartingVdcId() {
    this._startingVdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingVdcIdInput() {
    return this._startingVdcId;
  }

  // total_allocated_ip_count - computed: true, optional: true, required: false
  private _totalAllocatedIpCount?: number; 
  public get totalAllocatedIpCount() {
    return this.getNumberAttribute('total_allocated_ip_count');
  }
  public set totalAllocatedIpCount(value: number) {
    this._totalAllocatedIpCount = value;
  }
  public resetTotalAllocatedIpCount() {
    this._totalAllocatedIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAllocatedIpCountInput() {
    return this._totalAllocatedIpCount;
  }

  // unused_ip_count - computed: true, optional: false, required: false
  public get unusedIpCount() {
    return this.getNumberAttribute('unused_ip_count');
  }

  // use_ip_spaces - computed: true, optional: false, required: false
  public get useIpSpaces() {
    return this.getBooleanAttribute('use_ip_spaces');
  }

  // used_ip_count - computed: true, optional: false, required: false
  public get usedIpCount() {
    return this.getNumberAttribute('used_ip_count');
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // external_network - computed: false, optional: true, required: false
  private _externalNetwork = new NsxtEdgegatewayExternalNetworkList(this, "external_network", true);
  public get externalNetwork() {
    return this._externalNetwork;
  }
  public putExternalNetwork(value: NsxtEdgegatewayExternalNetwork[] | cdktf.IResolvable) {
    this._externalNetwork.internalValue = value;
  }
  public resetExternalNetwork() {
    this._externalNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkInput() {
    return this._externalNetwork.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new NsxtEdgegatewaySubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: NsxtEdgegatewaySubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_with_ip_count - computed: false, optional: true, required: false
  private _subnetWithIpCount = new NsxtEdgegatewaySubnetWithIpCountList(this, "subnet_with_ip_count", true);
  public get subnetWithIpCount() {
    return this._subnetWithIpCount;
  }
  public putSubnetWithIpCount(value: NsxtEdgegatewaySubnetWithIpCount[] | cdktf.IResolvable) {
    this._subnetWithIpCount.internalValue = value;
  }
  public resetSubnetWithIpCount() {
    this._subnetWithIpCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetWithIpCountInput() {
    return this._subnetWithIpCount.internalValue;
  }

  // subnet_with_total_ip_count - computed: false, optional: true, required: false
  private _subnetWithTotalIpCount = new NsxtEdgegatewaySubnetWithTotalIpCountList(this, "subnet_with_total_ip_count", true);
  public get subnetWithTotalIpCount() {
    return this._subnetWithTotalIpCount;
  }
  public putSubnetWithTotalIpCount(value: NsxtEdgegatewaySubnetWithTotalIpCount[] | cdktf.IResolvable) {
    this._subnetWithTotalIpCount.internalValue = value;
  }
  public resetSubnetWithTotalIpCount() {
    this._subnetWithTotalIpCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetWithTotalIpCountInput() {
    return this._subnetWithTotalIpCount.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicate_external_network: cdktf.booleanToTerraform(this._dedicateExternalNetwork),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      description: cdktf.stringToTerraform(this._description),
      edge_cluster_id: cdktf.stringToTerraform(this._edgeClusterId),
      external_network_id: cdktf.stringToTerraform(this._externalNetworkId),
      id: cdktf.stringToTerraform(this._id),
      ip_count_read_limit: cdktf.numberToTerraform(this._ipCountReadLimit),
      name: cdktf.stringToTerraform(this._name),
      non_distributed_routing_enabled: cdktf.booleanToTerraform(this._nonDistributedRoutingEnabled),
      org: cdktf.stringToTerraform(this._org),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      starting_vdc_id: cdktf.stringToTerraform(this._startingVdcId),
      total_allocated_ip_count: cdktf.numberToTerraform(this._totalAllocatedIpCount),
      vdc: cdktf.stringToTerraform(this._vdc),
      external_network: cdktf.listMapper(nsxtEdgegatewayExternalNetworkToTerraform, true)(this._externalNetwork.internalValue),
      subnet: cdktf.listMapper(nsxtEdgegatewaySubnetToTerraform, true)(this._subnet.internalValue),
      subnet_with_ip_count: cdktf.listMapper(nsxtEdgegatewaySubnetWithIpCountToTerraform, true)(this._subnetWithIpCount.internalValue),
      subnet_with_total_ip_count: cdktf.listMapper(nsxtEdgegatewaySubnetWithTotalIpCountToTerraform, true)(this._subnetWithTotalIpCount.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicate_external_network: {
        value: cdktf.booleanToHclTerraform(this._dedicateExternalNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cluster_id: {
        value: cdktf.stringToHclTerraform(this._edgeClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_network_id: {
        value: cdktf.stringToHclTerraform(this._externalNetworkId),
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
      ip_count_read_limit: {
        value: cdktf.numberToHclTerraform(this._ipCountReadLimit),
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
      non_distributed_routing_enabled: {
        value: cdktf.booleanToHclTerraform(this._nonDistributedRoutingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_vdc_id: {
        value: cdktf.stringToHclTerraform(this._startingVdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_allocated_ip_count: {
        value: cdktf.numberToHclTerraform(this._totalAllocatedIpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_network: {
        value: cdktf.listMapperHcl(nsxtEdgegatewayExternalNetworkToHclTerraform, true)(this._externalNetwork.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtEdgegatewayExternalNetworkList",
      },
      subnet: {
        value: cdktf.listMapperHcl(nsxtEdgegatewaySubnetToHclTerraform, true)(this._subnet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtEdgegatewaySubnetList",
      },
      subnet_with_ip_count: {
        value: cdktf.listMapperHcl(nsxtEdgegatewaySubnetWithIpCountToHclTerraform, true)(this._subnetWithIpCount.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtEdgegatewaySubnetWithIpCountList",
      },
      subnet_with_total_ip_count: {
        value: cdktf.listMapperHcl(nsxtEdgegatewaySubnetWithTotalIpCountToHclTerraform, true)(this._subnetWithTotalIpCount.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtEdgegatewaySubnetWithTotalIpCountList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
