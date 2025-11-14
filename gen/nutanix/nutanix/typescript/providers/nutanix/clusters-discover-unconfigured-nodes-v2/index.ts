// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClustersDiscoverUnconfiguredNodesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#address_type ClustersDiscoverUnconfiguredNodesV2#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#ext_id ClustersDiscoverUnconfiguredNodesV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#id ClustersDiscoverUnconfiguredNodesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#interface_filter_list ClustersDiscoverUnconfiguredNodesV2#interface_filter_list}
  */
  readonly interfaceFilterList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#is_manual_discovery ClustersDiscoverUnconfiguredNodesV2#is_manual_discovery}
  */
  readonly isManualDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#timeout ClustersDiscoverUnconfiguredNodesV2#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#uuid_filter_list ClustersDiscoverUnconfiguredNodesV2#uuid_filter_list}
  */
  readonly uuidFilterList?: string[];
  /**
  * ip_filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#ip_filter_list ClustersDiscoverUnconfiguredNodesV2#ip_filter_list}
  */
  readonly ipFilterList?: ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct[] | cdktf.IResolvable;
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributes {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributesToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributesToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_workload - computed: true, optional: false, required: false
  public get defaultWorkload() {
    return this.getStringAttribute('default_workload');
  }

  // is_model_supported - computed: true, optional: false, required: false
  public get isModelSupported() {
    return this.getBooleanAttribute('is_model_supported');
  }

  // is_robo_mixed_hypervisor - computed: true, optional: false, required: false
  public get isRoboMixedHypervisor() {
    return this.getBooleanAttribute('is_robo_mixed_hypervisor');
  }

  // lcm_family - computed: true, optional: false, required: false
  public get lcmFamily() {
    return this.getStringAttribute('lcm_family');
  }

  // should_work_with_1g_nic - computed: true, optional: false, required: false
  public get shouldWorkWith1GNic() {
    return this.getBooleanAttribute('should_work_with_1g_nic');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributesList extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributesOutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4 {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6 {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIp {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpList extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpOutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4 {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6 {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIp {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpList extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpOutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4 {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6 {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIp {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpList extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpOutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodes {
}

export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clustersDiscoverUnconfiguredNodesV2UnconfiguredNodesToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cpu_type - computed: true, optional: false, required: false
  public get cpuType() {
    return this.getListAttribute('cpu_type');
  }

  // current_cvm_vlan_tag - computed: true, optional: false, required: false
  public get currentCvmVlanTag() {
    return this.getStringAttribute('current_cvm_vlan_tag');
  }

  // current_network_interface - computed: true, optional: false, required: false
  public get currentNetworkInterface() {
    return this.getStringAttribute('current_network_interface');
  }

  // cvm_ip - computed: true, optional: false, required: false
  private _cvmIp = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesCvmIpList(this, "cvm_ip", false);
  public get cvmIp() {
    return this._cvmIp;
  }

  // foundation_version - computed: true, optional: false, required: false
  public get foundationVersion() {
    return this.getStringAttribute('foundation_version');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // hypervisor_ip - computed: true, optional: false, required: false
  private _hypervisorIp = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesHypervisorIpList(this, "hypervisor_ip", false);
  public get hypervisorIp() {
    return this._hypervisorIp;
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // hypervisor_version - computed: true, optional: false, required: false
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }

  // interface_ipv6 - computed: true, optional: false, required: false
  public get interfaceIpv6() {
    return this.getStringAttribute('interface_ipv6');
  }

  // ipmi_ip - computed: true, optional: false, required: false
  private _ipmiIp = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesIpmiIpList(this, "ipmi_ip", false);
  public get ipmiIp() {
    return this._ipmiIp;
  }

  // is_secure_booted - computed: true, optional: false, required: false
  public get isSecureBooted() {
    return this.getBooleanAttribute('is_secure_booted');
  }

  // node_position - computed: true, optional: false, required: false
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }

  // node_uuid - computed: true, optional: false, required: false
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }

  // nos_version - computed: true, optional: false, required: false
  public get nosVersion() {
    return this.getStringAttribute('nos_version');
  }

  // rackable_unit_max_nodes - computed: true, optional: false, required: false
  public get rackableUnitMaxNodes() {
    return this.getNumberAttribute('rackable_unit_max_nodes');
  }

  // rackable_unit_model - computed: true, optional: false, required: false
  public get rackableUnitModel() {
    return this.getStringAttribute('rackable_unit_model');
  }

  // rackable_unit_serial - computed: true, optional: false, required: false
  public get rackableUnitSerial() {
    return this.getStringAttribute('rackable_unit_serial');
  }
}

export class ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesList extends cdktf.ComplexList {

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesOutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#prefix_length ClustersDiscoverUnconfiguredNodesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#value ClustersDiscoverUnconfiguredNodesV2#value}
  */
  readonly value?: string;
}

export function clustersDiscoverUnconfiguredNodesV2IpFilterListIpv4ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersDiscoverUnconfiguredNodesV2IpFilterListIpv4ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4List extends cdktf.ComplexList {
  public internalValue? : ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#prefix_length ClustersDiscoverUnconfiguredNodesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#value ClustersDiscoverUnconfiguredNodesV2#value}
  */
  readonly value?: string;
}

export function clustersDiscoverUnconfiguredNodesV2IpFilterListIpv6ToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clustersDiscoverUnconfiguredNodesV2IpFilterListIpv6ToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6List extends cdktf.ComplexList {
  public internalValue? : ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6OutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#ipv4 ClustersDiscoverUnconfiguredNodesV2#ipv4}
  */
  readonly ipv4?: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#ipv6 ClustersDiscoverUnconfiguredNodesV2#ipv6}
  */
  readonly ipv6?: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6[] | cdktf.IResolvable;
}

export function clustersDiscoverUnconfiguredNodesV2IpFilterListStructToTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clustersDiscoverUnconfiguredNodesV2IpFilterListIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clustersDiscoverUnconfiguredNodesV2IpFilterListIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clustersDiscoverUnconfiguredNodesV2IpFilterListStructToHclTerraform(struct?: ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clustersDiscoverUnconfiguredNodesV2IpFilterListIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clustersDiscoverUnconfiguredNodesV2IpFilterListIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClustersDiscoverUnconfiguredNodesV2IpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClustersDiscoverUnconfiguredNodesV2IpFilterListIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClustersDiscoverUnconfiguredNodesV2IpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClustersDiscoverUnconfiguredNodesV2IpFilterListStructOutputReference {
    return new ClustersDiscoverUnconfiguredNodesV2IpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2 nutanix_clusters_discover_unconfigured_nodes_v2}
*/
export class ClustersDiscoverUnconfiguredNodesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_clusters_discover_unconfigured_nodes_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClustersDiscoverUnconfiguredNodesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClustersDiscoverUnconfiguredNodesV2 to import
  * @param importFromId The id of the existing ClustersDiscoverUnconfiguredNodesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClustersDiscoverUnconfiguredNodesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_clusters_discover_unconfigured_nodes_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/clusters_discover_unconfigured_nodes_v2 nutanix_clusters_discover_unconfigured_nodes_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClustersDiscoverUnconfiguredNodesV2Config
  */
  public constructor(scope: Construct, id: string, config: ClustersDiscoverUnconfiguredNodesV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_clusters_discover_unconfigured_nodes_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressType = config.addressType;
    this._extId = config.extId;
    this._id = config.id;
    this._interfaceFilterList = config.interfaceFilterList;
    this._isManualDiscovery = config.isManualDiscovery;
    this._timeout = config.timeout;
    this._uuidFilterList = config.uuidFilterList;
    this._ipFilterList.internalValue = config.ipFilterList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // interface_filter_list - computed: false, optional: true, required: false
  private _interfaceFilterList?: string[]; 
  public get interfaceFilterList() {
    return this.getListAttribute('interface_filter_list');
  }
  public set interfaceFilterList(value: string[]) {
    this._interfaceFilterList = value;
  }
  public resetInterfaceFilterList() {
    this._interfaceFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceFilterListInput() {
    return this._interfaceFilterList;
  }

  // is_manual_discovery - computed: false, optional: true, required: false
  private _isManualDiscovery?: boolean | cdktf.IResolvable; 
  public get isManualDiscovery() {
    return this.getBooleanAttribute('is_manual_discovery');
  }
  public set isManualDiscovery(value: boolean | cdktf.IResolvable) {
    this._isManualDiscovery = value;
  }
  public resetIsManualDiscovery() {
    this._isManualDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManualDiscoveryInput() {
    return this._isManualDiscovery;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unconfigured_nodes - computed: true, optional: false, required: false
  private _unconfiguredNodes = new ClustersDiscoverUnconfiguredNodesV2UnconfiguredNodesList(this, "unconfigured_nodes", false);
  public get unconfiguredNodes() {
    return this._unconfiguredNodes;
  }

  // uuid_filter_list - computed: false, optional: true, required: false
  private _uuidFilterList?: string[]; 
  public get uuidFilterList() {
    return this.getListAttribute('uuid_filter_list');
  }
  public set uuidFilterList(value: string[]) {
    this._uuidFilterList = value;
  }
  public resetUuidFilterList() {
    this._uuidFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidFilterListInput() {
    return this._uuidFilterList;
  }

  // ip_filter_list - computed: false, optional: true, required: false
  private _ipFilterList = new ClustersDiscoverUnconfiguredNodesV2IpFilterListStructList(this, "ip_filter_list", false);
  public get ipFilterList() {
    return this._ipFilterList;
  }
  public putIpFilterList(value: ClustersDiscoverUnconfiguredNodesV2IpFilterListStruct[] | cdktf.IResolvable) {
    this._ipFilterList.internalValue = value;
  }
  public resetIpFilterList() {
    this._ipFilterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterListInput() {
    return this._ipFilterList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_type: cdktf.stringToTerraform(this._addressType),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      interface_filter_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaceFilterList),
      is_manual_discovery: cdktf.booleanToTerraform(this._isManualDiscovery),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid_filter_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uuidFilterList),
      ip_filter_list: cdktf.listMapper(clustersDiscoverUnconfiguredNodesV2IpFilterListStructToTerraform, true)(this._ipFilterList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      interface_filter_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaceFilterList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_manual_discovery: {
        value: cdktf.booleanToHclTerraform(this._isManualDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid_filter_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uuidFilterList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ip_filter_list: {
        value: cdktf.listMapperHcl(clustersDiscoverUnconfiguredNodesV2IpFilterListStructToHclTerraform, true)(this._ipFilterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClustersDiscoverUnconfiguredNodesV2IpFilterListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
