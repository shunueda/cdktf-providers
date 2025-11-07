// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixKarbonClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster#id DataNutanixKarbonCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster#karbon_cluster_id DataNutanixKarbonCluster#karbon_cluster_id}
  */
  readonly karbonClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster#karbon_cluster_name DataNutanixKarbonCluster#karbon_cluster_name}
  */
  readonly karbonClusterName?: string;
}
export interface DataNutanixKarbonClusterEtcdNodePoolAhvConfig {
}

export function dataNutanixKarbonClusterEtcdNodePoolAhvConfigToTerraform(struct?: DataNutanixKarbonClusterEtcdNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterEtcdNodePoolAhvConfigToHclTerraform(struct?: DataNutanixKarbonClusterEtcdNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterEtcdNodePoolAhvConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterEtcdNodePoolAhvConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterEtcdNodePoolAhvConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // disk_mib - computed: true, optional: false, required: false
  public get diskMib() {
    return this.getNumberAttribute('disk_mib');
  }

  // memory_mib - computed: true, optional: false, required: false
  public get memoryMib() {
    return this.getNumberAttribute('memory_mib');
  }

  // network_uuid - computed: true, optional: false, required: false
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }

  // prism_element_cluster_uuid - computed: true, optional: false, required: false
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
}

export class DataNutanixKarbonClusterEtcdNodePoolAhvConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterEtcdNodePoolAhvConfigOutputReference {
    return new DataNutanixKarbonClusterEtcdNodePoolAhvConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterEtcdNodePoolNodes {
}

export function dataNutanixKarbonClusterEtcdNodePoolNodesToTerraform(struct?: DataNutanixKarbonClusterEtcdNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterEtcdNodePoolNodesToHclTerraform(struct?: DataNutanixKarbonClusterEtcdNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterEtcdNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterEtcdNodePoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterEtcdNodePoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class DataNutanixKarbonClusterEtcdNodePoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterEtcdNodePoolNodesOutputReference {
    return new DataNutanixKarbonClusterEtcdNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterEtcdNodePool {
}

export function dataNutanixKarbonClusterEtcdNodePoolToTerraform(struct?: DataNutanixKarbonClusterEtcdNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterEtcdNodePoolToHclTerraform(struct?: DataNutanixKarbonClusterEtcdNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterEtcdNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterEtcdNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterEtcdNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ahv_config - computed: true, optional: false, required: false
  private _ahvConfig = new DataNutanixKarbonClusterEtcdNodePoolAhvConfigList(this, "ahv_config", false);
  public get ahvConfig() {
    return this._ahvConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_os_version - computed: true, optional: false, required: false
  public get nodeOsVersion() {
    return this.getStringAttribute('node_os_version');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataNutanixKarbonClusterEtcdNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // num_instances - computed: true, optional: false, required: false
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
}

export class DataNutanixKarbonClusterEtcdNodePoolList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterEtcdNodePoolOutputReference {
    return new DataNutanixKarbonClusterEtcdNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterMasterNodePoolAhvConfig {
}

export function dataNutanixKarbonClusterMasterNodePoolAhvConfigToTerraform(struct?: DataNutanixKarbonClusterMasterNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterMasterNodePoolAhvConfigToHclTerraform(struct?: DataNutanixKarbonClusterMasterNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterMasterNodePoolAhvConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterMasterNodePoolAhvConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterMasterNodePoolAhvConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // disk_mib - computed: true, optional: false, required: false
  public get diskMib() {
    return this.getNumberAttribute('disk_mib');
  }

  // memory_mib - computed: true, optional: false, required: false
  public get memoryMib() {
    return this.getNumberAttribute('memory_mib');
  }

  // network_uuid - computed: true, optional: false, required: false
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }

  // prism_element_cluster_uuid - computed: true, optional: false, required: false
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
}

export class DataNutanixKarbonClusterMasterNodePoolAhvConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterMasterNodePoolAhvConfigOutputReference {
    return new DataNutanixKarbonClusterMasterNodePoolAhvConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterMasterNodePoolNodes {
}

export function dataNutanixKarbonClusterMasterNodePoolNodesToTerraform(struct?: DataNutanixKarbonClusterMasterNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterMasterNodePoolNodesToHclTerraform(struct?: DataNutanixKarbonClusterMasterNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterMasterNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterMasterNodePoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterMasterNodePoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class DataNutanixKarbonClusterMasterNodePoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterMasterNodePoolNodesOutputReference {
    return new DataNutanixKarbonClusterMasterNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterMasterNodePool {
}

export function dataNutanixKarbonClusterMasterNodePoolToTerraform(struct?: DataNutanixKarbonClusterMasterNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterMasterNodePoolToHclTerraform(struct?: DataNutanixKarbonClusterMasterNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterMasterNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterMasterNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterMasterNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ahv_config - computed: true, optional: false, required: false
  private _ahvConfig = new DataNutanixKarbonClusterMasterNodePoolAhvConfigList(this, "ahv_config", false);
  public get ahvConfig() {
    return this._ahvConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_os_version - computed: true, optional: false, required: false
  public get nodeOsVersion() {
    return this.getStringAttribute('node_os_version');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataNutanixKarbonClusterMasterNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // num_instances - computed: true, optional: false, required: false
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
}

export class DataNutanixKarbonClusterMasterNodePoolList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterMasterNodePoolOutputReference {
    return new DataNutanixKarbonClusterMasterNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterWorkerNodePoolAhvConfig {
}

export function dataNutanixKarbonClusterWorkerNodePoolAhvConfigToTerraform(struct?: DataNutanixKarbonClusterWorkerNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterWorkerNodePoolAhvConfigToHclTerraform(struct?: DataNutanixKarbonClusterWorkerNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterWorkerNodePoolAhvConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterWorkerNodePoolAhvConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterWorkerNodePoolAhvConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // disk_mib - computed: true, optional: false, required: false
  public get diskMib() {
    return this.getNumberAttribute('disk_mib');
  }

  // memory_mib - computed: true, optional: false, required: false
  public get memoryMib() {
    return this.getNumberAttribute('memory_mib');
  }

  // network_uuid - computed: true, optional: false, required: false
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }

  // prism_element_cluster_uuid - computed: true, optional: false, required: false
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
}

export class DataNutanixKarbonClusterWorkerNodePoolAhvConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterWorkerNodePoolAhvConfigOutputReference {
    return new DataNutanixKarbonClusterWorkerNodePoolAhvConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterWorkerNodePoolNodes {
}

export function dataNutanixKarbonClusterWorkerNodePoolNodesToTerraform(struct?: DataNutanixKarbonClusterWorkerNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterWorkerNodePoolNodesToHclTerraform(struct?: DataNutanixKarbonClusterWorkerNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterWorkerNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterWorkerNodePoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterWorkerNodePoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class DataNutanixKarbonClusterWorkerNodePoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterWorkerNodePoolNodesOutputReference {
    return new DataNutanixKarbonClusterWorkerNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixKarbonClusterWorkerNodePool {
}

export function dataNutanixKarbonClusterWorkerNodePoolToTerraform(struct?: DataNutanixKarbonClusterWorkerNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixKarbonClusterWorkerNodePoolToHclTerraform(struct?: DataNutanixKarbonClusterWorkerNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixKarbonClusterWorkerNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixKarbonClusterWorkerNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixKarbonClusterWorkerNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ahv_config - computed: true, optional: false, required: false
  private _ahvConfig = new DataNutanixKarbonClusterWorkerNodePoolAhvConfigList(this, "ahv_config", false);
  public get ahvConfig() {
    return this._ahvConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_os_version - computed: true, optional: false, required: false
  public get nodeOsVersion() {
    return this.getStringAttribute('node_os_version');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataNutanixKarbonClusterWorkerNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // num_instances - computed: true, optional: false, required: false
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
}

export class DataNutanixKarbonClusterWorkerNodePoolList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixKarbonClusterWorkerNodePoolOutputReference {
    return new DataNutanixKarbonClusterWorkerNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster nutanix_karbon_cluster}
*/
export class DataNutanixKarbonCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_karbon_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixKarbonCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixKarbonCluster to import
  * @param importFromId The id of the existing DataNutanixKarbonCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixKarbonCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_karbon_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster nutanix_karbon_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixKarbonClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixKarbonClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_karbon_cluster',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
    this._karbonClusterId = config.karbonClusterId;
    this._karbonClusterName = config.karbonClusterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // etcd_node_pool - computed: true, optional: false, required: false
  private _etcdNodePool = new DataNutanixKarbonClusterEtcdNodePoolList(this, "etcd_node_pool", false);
  public get etcdNodePool() {
    return this._etcdNodePool;
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

  // karbon_cluster_id - computed: false, optional: true, required: false
  private _karbonClusterId?: string; 
  public get karbonClusterId() {
    return this.getStringAttribute('karbon_cluster_id');
  }
  public set karbonClusterId(value: string) {
    this._karbonClusterId = value;
  }
  public resetKarbonClusterId() {
    this._karbonClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karbonClusterIdInput() {
    return this._karbonClusterId;
  }

  // karbon_cluster_name - computed: false, optional: true, required: false
  private _karbonClusterName?: string; 
  public get karbonClusterName() {
    return this.getStringAttribute('karbon_cluster_name');
  }
  public set karbonClusterName(value: string) {
    this._karbonClusterName = value;
  }
  public resetKarbonClusterName() {
    this._karbonClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karbonClusterNameInput() {
    return this._karbonClusterName;
  }

  // kubeapi_server_ipv4_address - computed: true, optional: false, required: false
  public get kubeapiServerIpv4Address() {
    return this.getStringAttribute('kubeapi_server_ipv4_address');
  }

  // master_node_pool - computed: true, optional: false, required: false
  private _masterNodePool = new DataNutanixKarbonClusterMasterNodePoolList(this, "master_node_pool", false);
  public get masterNodePool() {
    return this._masterNodePool;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // worker_node_pool - computed: true, optional: false, required: false
  private _workerNodePool = new DataNutanixKarbonClusterWorkerNodePoolList(this, "worker_node_pool", false);
  public get workerNodePool() {
    return this._workerNodePool;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      karbon_cluster_id: cdktf.stringToTerraform(this._karbonClusterId),
      karbon_cluster_name: cdktf.stringToTerraform(this._karbonClusterName),
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
      karbon_cluster_id: {
        value: cdktf.stringToHclTerraform(this._karbonClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      karbon_cluster_name: {
        value: cdktf.stringToHclTerraform(this._karbonClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
