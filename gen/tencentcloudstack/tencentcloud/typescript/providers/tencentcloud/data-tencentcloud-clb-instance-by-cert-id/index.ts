// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/clb_instance_by_cert_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClbInstanceByCertIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Server or client certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/clb_instance_by_cert_id#cert_ids DataTencentcloudClbInstanceByCertId#cert_ids}
  */
  readonly certIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/clb_instance_by_cert_id#id DataTencentcloudClbInstanceByCertId#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/clb_instance_by_cert_id#result_output_file DataTencentcloudClbInstanceByCertId#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSet {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSetToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSetToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // edge_zone - computed: true, optional: false, required: false
  public get edgeZone() {
    return this.getBooleanAttribute('edge_zone');
  }

  // local_zone - computed: true, optional: false, required: false
  public get localZone() {
    return this.getBooleanAttribute('local_zone');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // zone_region - computed: true, optional: false, required: false
  public get zoneRegion() {
    return this.getStringAttribute('zone_region');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSetOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalCluster {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalClusterToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalClusterToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalClusterOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4Clusters {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4ClustersToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4Clusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4ClustersToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4Clusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4ClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4Clusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4Clusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4ClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4ClustersOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4ClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7Clusters {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7ClustersToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7Clusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7ClustersToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7Clusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7ClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7Clusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7Clusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7ClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7ClustersOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7ClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveCluster {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // classical_cluster - computed: true, optional: false, required: false
  private _classicalCluster = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterClassicalClusterList(this, "classical_cluster", false);
  public get classicalCluster() {
    return this._classicalCluster;
  }

  // l4_clusters - computed: true, optional: false, required: false
  private _l4Clusters = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL4ClustersList(this, "l4_clusters", false);
  public get l4Clusters() {
    return this._l4Clusters;
  }

  // l7_clusters - computed: true, optional: false, required: false
  private _l7Clusters = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterL7ClustersList(this, "l7_clusters", false);
  public get l7Clusters() {
    return this._l7Clusters;
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfo {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfoToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfoToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tgw_group_name - computed: true, optional: false, required: false
  public get tgwGroupName() {
    return this.getStringAttribute('tgw_group_name');
  }

  // zhi_tong - computed: true, optional: false, required: false
  public get zhiTong() {
    return this.getBooleanAttribute('zhi_tong');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfoOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZone {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZoneToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZoneToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // edge_zone - computed: true, optional: false, required: false
  public get edgeZone() {
    return this.getBooleanAttribute('edge_zone');
  }

  // local_zone - computed: true, optional: false, required: false
  public get localZone() {
    return this.getBooleanAttribute('local_zone');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // zone_region - computed: true, optional: false, required: false
  public get zoneRegion() {
    return this.getStringAttribute('zone_region');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZoneList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZoneOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributes {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributesToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributesToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidthpkg_sub_type - computed: true, optional: false, required: false
  public get bandwidthpkgSubType() {
    return this.getStringAttribute('bandwidthpkg_sub_type');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // internet_max_bandwidth_out - computed: true, optional: false, required: false
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributesOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributes {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributesToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributesToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributesOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIps {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIpsToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIpsToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIpsOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTags {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTagsToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTagsToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTagsOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfo {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfoToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfoToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfoOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSetLoadBalancers {
}

export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetLoadBalancersToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSetLoadBalancers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_i_p_version - computed: true, optional: false, required: false
  public get addressIPVersion() {
    return this.getStringAttribute('address_i_p_version');
  }

  // address_i_pv6 - computed: true, optional: false, required: false
  public get addressIPv6() {
    return this.getStringAttribute('address_i_pv6');
  }

  // anycast_zone - computed: true, optional: false, required: false
  public get anycastZone() {
    return this.getStringAttribute('anycast_zone');
  }

  // attribute_flags - computed: true, optional: false, required: false
  public get attributeFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_flags'));
  }

  // backup_zone_set - computed: true, optional: false, required: false
  private _backupZoneSet = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersBackupZoneSetList(this, "backup_zone_set", false);
  public get backupZoneSet() {
    return this._backupZoneSet;
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // cluster_ids - computed: true, optional: false, required: false
  public get clusterIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_ids'));
  }

  // cluster_tag - computed: true, optional: false, required: false
  public get clusterTag() {
    return this.getStringAttribute('cluster_tag');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // exclusive_cluster - computed: true, optional: false, required: false
  private _exclusiveCluster = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExclusiveClusterList(this, "exclusive_cluster", false);
  public get exclusiveCluster() {
    return this._exclusiveCluster;
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // extra_info - computed: true, optional: false, required: false
  private _extraInfo = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersExtraInfoList(this, "extra_info", false);
  public get extraInfo() {
    return this._extraInfo;
  }

  // forward - computed: true, optional: false, required: false
  public get forward() {
    return this.getNumberAttribute('forward');
  }

  // health_log_set_id - computed: true, optional: false, required: false
  public get healthLogSetId() {
    return this.getStringAttribute('health_log_set_id');
  }

  // health_log_topic_id - computed: true, optional: false, required: false
  public get healthLogTopicId() {
    return this.getStringAttribute('health_log_topic_id');
  }

  // ipv6_mode - computed: true, optional: false, required: false
  public get ipv6Mode() {
    return this.getStringAttribute('ipv6_mode');
  }

  // is_block - computed: true, optional: false, required: false
  public get isBlock() {
    return this.getBooleanAttribute('is_block');
  }

  // is_block_time - computed: true, optional: false, required: false
  public get isBlockTime() {
    return this.getStringAttribute('is_block_time');
  }

  // is_ddos - computed: true, optional: false, required: false
  public get isDdos() {
    return this.getBooleanAttribute('is_ddos');
  }

  // isolated_time - computed: true, optional: false, required: false
  public get isolatedTime() {
    return this.getStringAttribute('isolated_time');
  }

  // isolation - computed: true, optional: false, required: false
  public get isolation() {
    return this.getNumberAttribute('isolation');
  }

  // load_balancer_domain - computed: true, optional: false, required: false
  public get loadBalancerDomain() {
    return this.getStringAttribute('load_balancer_domain');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // load_balancer_pass_to_target - computed: true, optional: false, required: false
  public get loadBalancerPassToTarget() {
    return this.getBooleanAttribute('load_balancer_pass_to_target');
  }

  // load_balancer_type - computed: true, optional: false, required: false
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }

  // load_balancer_vips - computed: true, optional: false, required: false
  public get loadBalancerVips() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_vips'));
  }

  // local_bgp - computed: true, optional: false, required: false
  public get localBgp() {
    return this.getBooleanAttribute('local_bgp');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getStringAttribute('log');
  }

  // log_set_id - computed: true, optional: false, required: false
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }

  // log_topic_id - computed: true, optional: false, required: false
  public get logTopicId() {
    return this.getStringAttribute('log_topic_id');
  }

  // master_zone - computed: true, optional: false, required: false
  private _masterZone = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersMasterZoneList(this, "master_zone", false);
  public get masterZone() {
    return this._masterZone;
  }

  // mix_ip_target - computed: true, optional: false, required: false
  public get mixIpTarget() {
    return this.getBooleanAttribute('mix_ip_target');
  }

  // network_attributes - computed: true, optional: false, required: false
  private _networkAttributes = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersNetworkAttributesList(this, "network_attributes", false);
  public get networkAttributes() {
    return this._networkAttributes;
  }

  // nfv_info - computed: true, optional: false, required: false
  public get nfvInfo() {
    return this.getStringAttribute('nfv_info');
  }

  // numerical_vpc_id - computed: true, optional: false, required: false
  public get numericalVpcId() {
    return this.getNumberAttribute('numerical_vpc_id');
  }

  // open_bgp - computed: true, optional: false, required: false
  public get openBgp() {
    return this.getNumberAttribute('open_bgp');
  }

  // prepaid_attributes - computed: true, optional: false, required: false
  private _prepaidAttributes = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersPrepaidAttributesList(this, "prepaid_attributes", false);
  public get prepaidAttributes() {
    return this._prepaidAttributes;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // secure_groups - computed: true, optional: false, required: false
  public get secureGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('secure_groups'));
  }

  // sla_type - computed: true, optional: false, required: false
  public get slaType() {
    return this.getStringAttribute('sla_type');
  }

  // snat - computed: true, optional: false, required: false
  public get snat() {
    return this.getBooleanAttribute('snat');
  }

  // snat_ips - computed: true, optional: false, required: false
  private _snatIps = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersSnatIpsList(this, "snat_ips", false);
  public get snatIps() {
    return this._snatIps;
  }

  // snat_pro - computed: true, optional: false, required: false
  public get snatPro() {
    return this.getBooleanAttribute('snat_pro');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_time - computed: true, optional: false, required: false
  public get statusTime() {
    return this.getStringAttribute('status_time');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_region_info - computed: true, optional: false, required: false
  private _targetRegionInfo = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersTargetRegionInfoList(this, "target_region_info", false);
  public get targetRegionInfo() {
    return this._targetRegionInfo;
  }

  // vip_isp - computed: true, optional: false, required: false
  public get vipIsp() {
    return this.getStringAttribute('vip_isp');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbInstanceByCertIdCertSet {
}

export function dataTencentcloudClbInstanceByCertIdCertSetToTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbInstanceByCertIdCertSetToHclTerraform(struct?: DataTencentcloudClbInstanceByCertIdCertSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbInstanceByCertIdCertSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbInstanceByCertIdCertSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbInstanceByCertIdCertSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_id - computed: true, optional: false, required: false
  public get certId() {
    return this.getStringAttribute('cert_id');
  }

  // load_balancers - computed: true, optional: false, required: false
  private _loadBalancers = new DataTencentcloudClbInstanceByCertIdCertSetLoadBalancersList(this, "load_balancers", false);
  public get loadBalancers() {
    return this._loadBalancers;
  }
}

export class DataTencentcloudClbInstanceByCertIdCertSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbInstanceByCertIdCertSetOutputReference {
    return new DataTencentcloudClbInstanceByCertIdCertSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/clb_instance_by_cert_id tencentcloud_clb_instance_by_cert_id}
*/
export class DataTencentcloudClbInstanceByCertId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_instance_by_cert_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClbInstanceByCertId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClbInstanceByCertId to import
  * @param importFromId The id of the existing DataTencentcloudClbInstanceByCertId that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/clb_instance_by_cert_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClbInstanceByCertId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_instance_by_cert_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/clb_instance_by_cert_id tencentcloud_clb_instance_by_cert_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClbInstanceByCertIdConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClbInstanceByCertIdConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_instance_by_cert_id',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certIds = config.certIds;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_ids - computed: false, optional: false, required: true
  private _certIds?: string[]; 
  public get certIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cert_ids'));
  }
  public set certIds(value: string[]) {
    this._certIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdsInput() {
    return this._certIds;
  }

  // cert_set - computed: true, optional: false, required: false
  private _certSet = new DataTencentcloudClbInstanceByCertIdCertSetList(this, "cert_set", false);
  public get certSet() {
    return this._certSet;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certIds),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
