// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtEdgegatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * NSX-T Edge Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#edge_cluster_id DataVcdNsxtEdgegateway#edge_cluster_id}
  */
  readonly edgeClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#id DataVcdNsxtEdgegateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How many maximum IPs should be reported in 'used_ipcount' and 'unused_ip_count'. Default 1000000, 0 - unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#ip_count_read_limit DataVcdNsxtEdgegateway#ip_count_read_limit}
  */
  readonly ipCountReadLimit?: number;
  /**
  * Edge Gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#name DataVcdNsxtEdgegateway#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#org DataVcdNsxtEdgegateway#org}
  */
  readonly org?: string;
  /**
  * ID of VDC or VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#owner_id DataVcdNsxtEdgegateway#owner_id}
  */
  readonly ownerId?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#vdc DataVcdNsxtEdgegateway#vdc}
  */
  readonly vdc?: string;
}
export interface DataVcdNsxtEdgegatewayExternalNetwork {
}

export function dataVcdNsxtEdgegatewayExternalNetworkToTerraform(struct?: DataVcdNsxtEdgegatewayExternalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtEdgegatewayExternalNetworkToHclTerraform(struct?: DataVcdNsxtEdgegatewayExternalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtEdgegatewayExternalNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtEdgegatewayExternalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtEdgegatewayExternalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_ip_count - computed: true, optional: false, required: false
  public get allocatedIpCount() {
    return this.getNumberAttribute('allocated_ip_count');
  }

  // external_network_id - computed: true, optional: false, required: false
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // primary_ip - computed: true, optional: false, required: false
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
}

export class DataVcdNsxtEdgegatewayExternalNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtEdgegatewayExternalNetworkOutputReference {
    return new DataVcdNsxtEdgegatewayExternalNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtEdgegatewaySubnetAllocatedIps {
}

export function dataVcdNsxtEdgegatewaySubnetAllocatedIpsToTerraform(struct?: DataVcdNsxtEdgegatewaySubnetAllocatedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtEdgegatewaySubnetAllocatedIpsToHclTerraform(struct?: DataVcdNsxtEdgegatewaySubnetAllocatedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtEdgegatewaySubnetAllocatedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtEdgegatewaySubnetAllocatedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtEdgegatewaySubnetAllocatedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_address - computed: true, optional: false, required: false
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }

  // start_address - computed: true, optional: false, required: false
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
}

export class DataVcdNsxtEdgegatewaySubnetAllocatedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtEdgegatewaySubnetAllocatedIpsOutputReference {
    return new DataVcdNsxtEdgegatewaySubnetAllocatedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtEdgegatewaySubnet {
}

export function dataVcdNsxtEdgegatewaySubnetToTerraform(struct?: DataVcdNsxtEdgegatewaySubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtEdgegatewaySubnetToHclTerraform(struct?: DataVcdNsxtEdgegatewaySubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtEdgegatewaySubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtEdgegatewaySubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtEdgegatewaySubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_ips - computed: true, optional: false, required: false
  private _allocatedIps = new DataVcdNsxtEdgegatewaySubnetAllocatedIpsList(this, "allocated_ips", true);
  public get allocatedIps() {
    return this._allocatedIps;
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // primary_ip - computed: true, optional: false, required: false
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
}

export class DataVcdNsxtEdgegatewaySubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtEdgegatewaySubnetOutputReference {
    return new DataVcdNsxtEdgegatewaySubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtEdgegatewaySubnetWithIpCount {
}

export function dataVcdNsxtEdgegatewaySubnetWithIpCountToTerraform(struct?: DataVcdNsxtEdgegatewaySubnetWithIpCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtEdgegatewaySubnetWithIpCountToHclTerraform(struct?: DataVcdNsxtEdgegatewaySubnetWithIpCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtEdgegatewaySubnetWithIpCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtEdgegatewaySubnetWithIpCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtEdgegatewaySubnetWithIpCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_ip_count - computed: true, optional: false, required: false
  public get allocatedIpCount() {
    return this.getNumberAttribute('allocated_ip_count');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // primary_ip - computed: true, optional: false, required: false
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
}

export class DataVcdNsxtEdgegatewaySubnetWithIpCountList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtEdgegatewaySubnetWithIpCountOutputReference {
    return new DataVcdNsxtEdgegatewaySubnetWithIpCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtEdgegatewaySubnetWithTotalIpCount {
}

export function dataVcdNsxtEdgegatewaySubnetWithTotalIpCountToTerraform(struct?: DataVcdNsxtEdgegatewaySubnetWithTotalIpCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtEdgegatewaySubnetWithTotalIpCountToHclTerraform(struct?: DataVcdNsxtEdgegatewaySubnetWithTotalIpCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtEdgegatewaySubnetWithTotalIpCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtEdgegatewaySubnetWithTotalIpCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtEdgegatewaySubnetWithTotalIpCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // primary_ip - computed: true, optional: false, required: false
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
}

export class DataVcdNsxtEdgegatewaySubnetWithTotalIpCountList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtEdgegatewaySubnetWithTotalIpCountOutputReference {
    return new DataVcdNsxtEdgegatewaySubnetWithTotalIpCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway vcd_nsxt_edgegateway}
*/
export class DataVcdNsxtEdgegateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtEdgegateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtEdgegateway to import
  * @param importFromId The id of the existing DataVcdNsxtEdgegateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtEdgegateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edgegateway vcd_nsxt_edgegateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtEdgegatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtEdgegatewayConfig) {
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
    this._edgeClusterId = config.edgeClusterId;
    this._id = config.id;
    this._ipCountReadLimit = config.ipCountReadLimit;
    this._name = config.name;
    this._org = config.org;
    this._ownerId = config.ownerId;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicate_external_network - computed: true, optional: false, required: false
  public get dedicateExternalNetwork() {
    return this.getBooleanAttribute('dedicate_external_network');
  }

  // deployment_mode - computed: true, optional: false, required: false
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edge_cluster_id - computed: false, optional: true, required: false
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

  // external_network - computed: true, optional: false, required: false
  private _externalNetwork = new DataVcdNsxtEdgegatewayExternalNetworkList(this, "external_network", true);
  public get externalNetwork() {
    return this._externalNetwork;
  }

  // external_network_allocated_ip_count - computed: true, optional: false, required: false
  public get externalNetworkAllocatedIpCount() {
    return this.getNumberAttribute('external_network_allocated_ip_count');
  }

  // external_network_id - computed: true, optional: false, required: false
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
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

  // non_distributed_routing_enabled - computed: true, optional: false, required: false
  public get nonDistributedRoutingEnabled() {
    return this.getBooleanAttribute('non_distributed_routing_enabled');
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

  // subnet - computed: true, optional: false, required: false
  private _subnet = new DataVcdNsxtEdgegatewaySubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }

  // subnet_with_ip_count - computed: true, optional: false, required: false
  private _subnetWithIpCount = new DataVcdNsxtEdgegatewaySubnetWithIpCountList(this, "subnet_with_ip_count", true);
  public get subnetWithIpCount() {
    return this._subnetWithIpCount;
  }

  // subnet_with_total_ip_count - computed: true, optional: false, required: false
  private _subnetWithTotalIpCount = new DataVcdNsxtEdgegatewaySubnetWithTotalIpCountList(this, "subnet_with_total_ip_count", true);
  public get subnetWithTotalIpCount() {
    return this._subnetWithTotalIpCount;
  }

  // total_allocated_ip_count - computed: true, optional: false, required: false
  public get totalAllocatedIpCount() {
    return this.getNumberAttribute('total_allocated_ip_count');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_cluster_id: cdktf.stringToTerraform(this._edgeClusterId),
      id: cdktf.stringToTerraform(this._id),
      ip_count_read_limit: cdktf.numberToTerraform(this._ipCountReadLimit),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_cluster_id: {
        value: cdktf.stringToHclTerraform(this._edgeClusterId),
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
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
