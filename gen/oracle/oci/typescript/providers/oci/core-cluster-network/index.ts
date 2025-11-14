// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreClusterNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#compartment_id CoreClusterNetwork#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#defined_tags CoreClusterNetwork#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#display_name CoreClusterNetwork#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#freeform_tags CoreClusterNetwork#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#id CoreClusterNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cluster_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#cluster_configuration CoreClusterNetwork#cluster_configuration}
  */
  readonly clusterConfiguration?: CoreClusterNetworkClusterConfiguration;
  /**
  * instance_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#instance_pools CoreClusterNetwork#instance_pools}
  */
  readonly instancePools: CoreClusterNetworkInstancePools[] | cdktf.IResolvable;
  /**
  * placement_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#placement_configuration CoreClusterNetwork#placement_configuration}
  */
  readonly placementConfiguration: CoreClusterNetworkPlacementConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#timeouts CoreClusterNetwork#timeouts}
  */
  readonly timeouts?: CoreClusterNetworkTimeouts;
}
export interface CoreClusterNetworkClusterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#hpc_island_id CoreClusterNetwork#hpc_island_id}
  */
  readonly hpcIslandId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#network_block_ids CoreClusterNetwork#network_block_ids}
  */
  readonly networkBlockIds?: string[];
}

export function coreClusterNetworkClusterConfigurationToTerraform(struct?: CoreClusterNetworkClusterConfigurationOutputReference | CoreClusterNetworkClusterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hpc_island_id: cdktf.stringToTerraform(struct!.hpcIslandId),
    network_block_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkBlockIds),
  }
}


export function coreClusterNetworkClusterConfigurationToHclTerraform(struct?: CoreClusterNetworkClusterConfigurationOutputReference | CoreClusterNetworkClusterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hpc_island_id: {
      value: cdktf.stringToHclTerraform(struct!.hpcIslandId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_block_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkBlockIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkClusterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreClusterNetworkClusterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpcIslandId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpcIslandId = this._hpcIslandId;
    }
    if (this._networkBlockIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkBlockIds = this._networkBlockIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkClusterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hpcIslandId = undefined;
      this._networkBlockIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hpcIslandId = value.hpcIslandId;
      this._networkBlockIds = value.networkBlockIds;
    }
  }

  // hpc_island_id - computed: false, optional: false, required: true
  private _hpcIslandId?: string; 
  public get hpcIslandId() {
    return this.getStringAttribute('hpc_island_id');
  }
  public set hpcIslandId(value: string) {
    this._hpcIslandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcIslandIdInput() {
    return this._hpcIslandId;
  }

  // network_block_ids - computed: true, optional: true, required: false
  private _networkBlockIds?: string[]; 
  public get networkBlockIds() {
    return this.getListAttribute('network_block_ids');
  }
  public set networkBlockIds(value: string[]) {
    this._networkBlockIds = value;
  }
  public resetNetworkBlockIds() {
    this._networkBlockIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBlockIdsInput() {
    return this._networkBlockIds;
  }
}
export interface CoreClusterNetworkInstancePoolsLoadBalancers {
}

export function coreClusterNetworkInstancePoolsLoadBalancersToTerraform(struct?: CoreClusterNetworkInstancePoolsLoadBalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreClusterNetworkInstancePoolsLoadBalancersToHclTerraform(struct?: CoreClusterNetworkInstancePoolsLoadBalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreClusterNetworkInstancePoolsLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkInstancePoolsLoadBalancers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkInstancePoolsLoadBalancers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_set_name - computed: true, optional: false, required: false
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pool_id - computed: true, optional: false, required: false
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vnic_selection - computed: true, optional: false, required: false
  public get vnicSelection() {
    return this.getStringAttribute('vnic_selection');
  }
}

export class CoreClusterNetworkInstancePoolsLoadBalancersList extends cdktf.ComplexList {

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
  public get(index: number): CoreClusterNetworkInstancePoolsLoadBalancersOutputReference {
    return new CoreClusterNetworkInstancePoolsLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails {
}

export function coreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6subnet_cidr - computed: true, optional: false, required: false
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets {
}

export function coreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsToTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsToHclTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: true, optional: false, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }

  // is_assign_ipv6ip - computed: true, optional: false, required: false
  public get isAssignIpv6Ip() {
    return this.getBooleanAttribute('is_assign_ipv6ip');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference {
    return new CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails {
}

export function coreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6subnet_cidr - computed: true, optional: false, required: false
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets {
}

export function coreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsToTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsToHclTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: true, optional: false, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }

  // is_assign_ipv6ip - computed: true, optional: false, required: false
  public get isAssignIpv6Ip() {
    return this.getBooleanAttribute('is_assign_ipv6ip');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference {
    return new CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkInstancePoolsPlacementConfigurations {
}

export function coreClusterNetworkInstancePoolsPlacementConfigurationsToTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreClusterNetworkInstancePoolsPlacementConfigurationsToHclTerraform(struct?: CoreClusterNetworkInstancePoolsPlacementConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkInstancePoolsPlacementConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkInstancePoolsPlacementConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fault_domains - computed: true, optional: false, required: false
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }

  // primary_subnet_id - computed: true, optional: false, required: false
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }

  // primary_vnic_subnets - computed: true, optional: false, required: false
  private _primaryVnicSubnets = new CoreClusterNetworkInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList(this, "primary_vnic_subnets", false);
  public get primaryVnicSubnets() {
    return this._primaryVnicSubnets;
  }

  // secondary_vnic_subnets - computed: true, optional: false, required: false
  private _secondaryVnicSubnets = new CoreClusterNetworkInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList(this, "secondary_vnic_subnets", true);
  public get secondaryVnicSubnets() {
    return this._secondaryVnicSubnets;
  }
}

export class CoreClusterNetworkInstancePoolsPlacementConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): CoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference {
    return new CoreClusterNetworkInstancePoolsPlacementConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkInstancePools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#defined_tags CoreClusterNetwork#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#display_name CoreClusterNetwork#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#freeform_tags CoreClusterNetwork#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#instance_configuration_id CoreClusterNetwork#instance_configuration_id}
  */
  readonly instanceConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#size CoreClusterNetwork#size}
  */
  readonly size: number;
}

export function coreClusterNetworkInstancePoolsToTerraform(struct?: CoreClusterNetworkInstancePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function coreClusterNetworkInstancePoolsToHclTerraform(struct?: CoreClusterNetworkInstancePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkInstancePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkInstancePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkInstancePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._instanceConfigurationId = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._size = value.size;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_configuration_id - computed: false, optional: false, required: true
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_display_name_formatter - computed: true, optional: false, required: false
  public get instanceDisplayNameFormatter() {
    return this.getStringAttribute('instance_display_name_formatter');
  }

  // instance_hostname_formatter - computed: true, optional: false, required: false
  public get instanceHostnameFormatter() {
    return this.getStringAttribute('instance_hostname_formatter');
  }

  // load_balancers - computed: true, optional: false, required: false
  private _loadBalancers = new CoreClusterNetworkInstancePoolsLoadBalancersList(this, "load_balancers", false);
  public get loadBalancers() {
    return this._loadBalancers;
  }

  // placement_configurations - computed: true, optional: false, required: false
  private _placementConfigurations = new CoreClusterNetworkInstancePoolsPlacementConfigurationsList(this, "placement_configurations", false);
  public get placementConfigurations() {
    return this._placementConfigurations;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class CoreClusterNetworkInstancePoolsList extends cdktf.ComplexList {
  public internalValue? : CoreClusterNetworkInstancePools[] | cdktf.IResolvable

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
  public get(index: number): CoreClusterNetworkInstancePoolsOutputReference {
    return new CoreClusterNetworkInstancePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#ipv6subnet_cidr CoreClusterNetwork#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#is_assign_ipv6ip CoreClusterNetwork#is_assign_ipv6ip}
  */
  readonly isAssignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#subnet_id CoreClusterNetwork#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#ipv6address_ipv6subnet_cidr_pair_details CoreClusterNetwork#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsToTerraform(struct?: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference | CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_assign_ipv6ip: cdktf.booleanToTerraform(struct!.isAssignIpv6Ip),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsToHclTerraform(struct?: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference | CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.isAssignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAssignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAssignIpv6Ip = this._isAssignIpv6Ip;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isAssignIpv6Ip = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isAssignIpv6Ip = value.isAssignIpv6Ip;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // is_assign_ipv6ip - computed: true, optional: true, required: false
  private _isAssignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get isAssignIpv6Ip() {
    return this.getBooleanAttribute('is_assign_ipv6ip');
  }
  public set isAssignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._isAssignIpv6Ip = value;
  }
  public resetIsAssignIpv6Ip() {
    this._isAssignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAssignIpv6IpInput() {
    return this._isAssignIpv6Ip;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}
export interface CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#ipv6subnet_cidr CoreClusterNetwork#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#display_name CoreClusterNetwork#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#is_assign_ipv6ip CoreClusterNetwork#is_assign_ipv6ip}
  */
  readonly isAssignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#subnet_id CoreClusterNetwork#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#ipv6address_ipv6subnet_cidr_pair_details CoreClusterNetwork#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsToTerraform(struct?: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_assign_ipv6ip: cdktf.booleanToTerraform(struct!.isAssignIpv6Ip),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsToHclTerraform(struct?: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.isAssignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isAssignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAssignIpv6Ip = this._isAssignIpv6Ip;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isAssignIpv6Ip = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isAssignIpv6Ip = value.isAssignIpv6Ip;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_assign_ipv6ip - computed: true, optional: true, required: false
  private _isAssignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get isAssignIpv6Ip() {
    return this.getBooleanAttribute('is_assign_ipv6ip');
  }
  public set isAssignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._isAssignIpv6Ip = value;
  }
  public resetIsAssignIpv6Ip() {
    this._isAssignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAssignIpv6IpInput() {
    return this._isAssignIpv6Ip;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}

export class CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList extends cdktf.ComplexList {
  public internalValue? : CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets[] | cdktf.IResolvable

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
  public get(index: number): CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference {
    return new CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreClusterNetworkPlacementConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#availability_domain CoreClusterNetwork#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#placement_constraint CoreClusterNetwork#placement_constraint}
  */
  readonly placementConstraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#primary_subnet_id CoreClusterNetwork#primary_subnet_id}
  */
  readonly primarySubnetId?: string;
  /**
  * primary_vnic_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#primary_vnic_subnets CoreClusterNetwork#primary_vnic_subnets}
  */
  readonly primaryVnicSubnets?: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets;
  /**
  * secondary_vnic_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#secondary_vnic_subnets CoreClusterNetwork#secondary_vnic_subnets}
  */
  readonly secondaryVnicSubnets?: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets[] | cdktf.IResolvable;
}

export function coreClusterNetworkPlacementConfigurationToTerraform(struct?: CoreClusterNetworkPlacementConfigurationOutputReference | CoreClusterNetworkPlacementConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    placement_constraint: cdktf.stringToTerraform(struct!.placementConstraint),
    primary_subnet_id: cdktf.stringToTerraform(struct!.primarySubnetId),
    primary_vnic_subnets: coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsToTerraform(struct!.primaryVnicSubnets),
    secondary_vnic_subnets: cdktf.listMapper(coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsToTerraform, true)(struct!.secondaryVnicSubnets),
  }
}


export function coreClusterNetworkPlacementConfigurationToHclTerraform(struct?: CoreClusterNetworkPlacementConfigurationOutputReference | CoreClusterNetworkPlacementConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement_constraint: {
      value: cdktf.stringToHclTerraform(struct!.placementConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.primarySubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_vnic_subnets: {
      value: coreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsToHclTerraform(struct!.primaryVnicSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsList",
    },
    secondary_vnic_subnets: {
      value: cdktf.listMapperHcl(coreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsToHclTerraform, true)(struct!.secondaryVnicSubnets),
      isBlock: true,
      type: "set",
      storageClassType: "CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkPlacementConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreClusterNetworkPlacementConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._placementConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraint = this._placementConstraint;
    }
    if (this._primarySubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySubnetId = this._primarySubnetId;
    }
    if (this._primaryVnicSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryVnicSubnets = this._primaryVnicSubnets?.internalValue;
    }
    if (this._secondaryVnicSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVnicSubnets = this._secondaryVnicSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkPlacementConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._placementConstraint = undefined;
      this._primarySubnetId = undefined;
      this._primaryVnicSubnets.internalValue = undefined;
      this._secondaryVnicSubnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._placementConstraint = value.placementConstraint;
      this._primarySubnetId = value.primarySubnetId;
      this._primaryVnicSubnets.internalValue = value.primaryVnicSubnets;
      this._secondaryVnicSubnets.internalValue = value.secondaryVnicSubnets;
    }
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // placement_constraint - computed: true, optional: true, required: false
  private _placementConstraint?: string; 
  public get placementConstraint() {
    return this.getStringAttribute('placement_constraint');
  }
  public set placementConstraint(value: string) {
    this._placementConstraint = value;
  }
  public resetPlacementConstraint() {
    this._placementConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintInput() {
    return this._placementConstraint;
  }

  // primary_subnet_id - computed: true, optional: true, required: false
  private _primarySubnetId?: string; 
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }
  public set primarySubnetId(value: string) {
    this._primarySubnetId = value;
  }
  public resetPrimarySubnetId() {
    this._primarySubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetIdInput() {
    return this._primarySubnetId;
  }

  // primary_vnic_subnets - computed: false, optional: true, required: false
  private _primaryVnicSubnets = new CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnetsOutputReference(this, "primary_vnic_subnets");
  public get primaryVnicSubnets() {
    return this._primaryVnicSubnets;
  }
  public putPrimaryVnicSubnets(value: CoreClusterNetworkPlacementConfigurationPrimaryVnicSubnets) {
    this._primaryVnicSubnets.internalValue = value;
  }
  public resetPrimaryVnicSubnets() {
    this._primaryVnicSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVnicSubnetsInput() {
    return this._primaryVnicSubnets.internalValue;
  }

  // secondary_vnic_subnets - computed: false, optional: true, required: false
  private _secondaryVnicSubnets = new CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnetsList(this, "secondary_vnic_subnets", true);
  public get secondaryVnicSubnets() {
    return this._secondaryVnicSubnets;
  }
  public putSecondaryVnicSubnets(value: CoreClusterNetworkPlacementConfigurationSecondaryVnicSubnets[] | cdktf.IResolvable) {
    this._secondaryVnicSubnets.internalValue = value;
  }
  public resetSecondaryVnicSubnets() {
    this._secondaryVnicSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVnicSubnetsInput() {
    return this._secondaryVnicSubnets.internalValue;
  }
}
export interface CoreClusterNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#create CoreClusterNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#delete CoreClusterNetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#update CoreClusterNetwork#update}
  */
  readonly update?: string;
}

export function coreClusterNetworkTimeoutsToTerraform(struct?: CoreClusterNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreClusterNetworkTimeoutsToHclTerraform(struct?: CoreClusterNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreClusterNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreClusterNetworkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreClusterNetworkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network oci_core_cluster_network}
*/
export class CoreClusterNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_cluster_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreClusterNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreClusterNetwork to import
  * @param importFromId The id of the existing CoreClusterNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreClusterNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_cluster_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_cluster_network oci_core_cluster_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreClusterNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: CoreClusterNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cluster_network',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._clusterConfiguration.internalValue = config.clusterConfiguration;
    this._instancePools.internalValue = config.instancePools;
    this._placementConfiguration.internalValue = config.placementConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // hpc_island_id - computed: true, optional: false, required: false
  public get hpcIslandId() {
    return this.getStringAttribute('hpc_island_id');
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

  // network_block_ids - computed: true, optional: false, required: false
  public get networkBlockIds() {
    return this.getListAttribute('network_block_ids');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // cluster_configuration - computed: false, optional: true, required: false
  private _clusterConfiguration = new CoreClusterNetworkClusterConfigurationOutputReference(this, "cluster_configuration");
  public get clusterConfiguration() {
    return this._clusterConfiguration;
  }
  public putClusterConfiguration(value: CoreClusterNetworkClusterConfiguration) {
    this._clusterConfiguration.internalValue = value;
  }
  public resetClusterConfiguration() {
    this._clusterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigurationInput() {
    return this._clusterConfiguration.internalValue;
  }

  // instance_pools - computed: false, optional: false, required: true
  private _instancePools = new CoreClusterNetworkInstancePoolsList(this, "instance_pools", false);
  public get instancePools() {
    return this._instancePools;
  }
  public putInstancePools(value: CoreClusterNetworkInstancePools[] | cdktf.IResolvable) {
    this._instancePools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsInput() {
    return this._instancePools.internalValue;
  }

  // placement_configuration - computed: false, optional: false, required: true
  private _placementConfiguration = new CoreClusterNetworkPlacementConfigurationOutputReference(this, "placement_configuration");
  public get placementConfiguration() {
    return this._placementConfiguration;
  }
  public putPlacementConfiguration(value: CoreClusterNetworkPlacementConfiguration) {
    this._placementConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConfigurationInput() {
    return this._placementConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreClusterNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreClusterNetworkTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      cluster_configuration: coreClusterNetworkClusterConfigurationToTerraform(this._clusterConfiguration.internalValue),
      instance_pools: cdktf.listMapper(coreClusterNetworkInstancePoolsToTerraform, true)(this._instancePools.internalValue),
      placement_configuration: coreClusterNetworkPlacementConfigurationToTerraform(this._placementConfiguration.internalValue),
      timeouts: coreClusterNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_configuration: {
        value: coreClusterNetworkClusterConfigurationToHclTerraform(this._clusterConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreClusterNetworkClusterConfigurationList",
      },
      instance_pools: {
        value: cdktf.listMapperHcl(coreClusterNetworkInstancePoolsToHclTerraform, true)(this._instancePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreClusterNetworkInstancePoolsList",
      },
      placement_configuration: {
        value: coreClusterNetworkPlacementConfigurationToHclTerraform(this._placementConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreClusterNetworkPlacementConfigurationList",
      },
      timeouts: {
        value: coreClusterNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreClusterNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
