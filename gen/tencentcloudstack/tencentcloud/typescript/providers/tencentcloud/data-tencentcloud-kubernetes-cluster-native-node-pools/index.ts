// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKubernetesClusterNativeNodePoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools#cluster_id DataTencentcloudKubernetesClusterNativeNodePools#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools#id DataTencentcloudKubernetesClusterNativeNodePools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools#result_output_file DataTencentcloudKubernetesClusterNativeNodePools#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools#filters DataTencentcloudKubernetesClusterNativeNodePools#filters}
  */
  readonly filters?: DataTencentcloudKubernetesClusterNativeNodePoolsFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotations {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotationsToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotationsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotationsOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabels {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabelsToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabelsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabelsOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisks {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisksToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisksToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_format_and_mount - computed: true, optional: false, required: false
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }

  // disk_partition - computed: true, optional: false, required: false
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getStringAttribute('encrypt');
  }

  // file_system - computed: true, optional: false, required: false
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // mount_target - computed: true, optional: false, required: false
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // throughput_performance - computed: true, optional: false, required: false
  public get throughputPerformance() {
    return this.getNumberAttribute('throughput_performance');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisksOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaid {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaidToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaidToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaid | undefined) {
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

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaidList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaidOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessible {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessibleToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessibleToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessibleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_package_id - computed: true, optional: false, required: false
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // max_bandwidth_out - computed: true, optional: false, required: false
  public get maxBandwidthOut() {
    return this.getNumberAttribute('max_bandwidth_out');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessibleList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessibleOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessibleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycle {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycleToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycleToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // post_init - computed: true, optional: false, required: false
  public get postInit() {
    return this.getStringAttribute('post_init');
  }

  // pre_init - computed: true, optional: false, required: false
  public get preInit() {
    return this.getStringAttribute('pre_init');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycleList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycleOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagement {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagementToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagementToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // kernel_args - computed: true, optional: false, required: false
  public get kernelArgs() {
    return this.getListAttribute('kernel_args');
  }

  // nameservers - computed: true, optional: false, required: false
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagementList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagementOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScaling {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScalingToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScalingToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_policy - computed: true, optional: false, required: false
  public get createPolicy() {
    return this.getStringAttribute('create_policy');
  }

  // max_replicas - computed: true, optional: false, required: false
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }

  // min_replicas - computed: true, optional: false, required: false
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScalingList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScalingOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDisk {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDiskToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDiskToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDiskOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNative {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_repair - computed: true, optional: false, required: false
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // enable_autoscaling - computed: true, optional: false, required: false
  public get enableAutoscaling() {
    return this.getBooleanAttribute('enable_autoscaling');
  }

  // health_check_policy_name - computed: true, optional: false, required: false
  public get healthCheckPolicyName() {
    return this.getStringAttribute('health_check_policy_name');
  }

  // host_name_pattern - computed: true, optional: false, required: false
  public get hostNamePattern() {
    return this.getStringAttribute('host_name_pattern');
  }

  // instance_charge_prepaid - computed: true, optional: false, required: false
  private _instanceChargePrepaid = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInstanceChargePrepaidList(this, "instance_charge_prepaid", false);
  public get instanceChargePrepaid() {
    return this._instanceChargePrepaid;
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // internet_accessible - computed: true, optional: false, required: false
  private _internetAccessible = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeInternetAccessibleList(this, "internet_accessible", false);
  public get internetAccessible() {
    return this._internetAccessible;
  }

  // key_ids - computed: true, optional: false, required: false
  public get keyIds() {
    return this.getListAttribute('key_ids');
  }

  // kubelet_args - computed: true, optional: false, required: false
  public get kubeletArgs() {
    return this.getListAttribute('kubelet_args');
  }

  // lifecycle - computed: true, optional: false, required: false
  private _lifecycle = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeLifecycleList(this, "lifecycle", false);
  public get lifecycle() {
    return this._lifecycle;
  }

  // management - computed: true, optional: false, required: false
  private _management = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeManagementList(this, "management", false);
  public get management() {
    return this._management;
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // runtime_root_dir - computed: true, optional: false, required: false
  public get runtimeRootDir() {
    return this.getStringAttribute('runtime_root_dir');
  }

  // scaling - computed: true, optional: false, required: false
  private _scaling = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeScalingList(this, "scaling", false);
  public get scaling() {
    return this._scaling;
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // system_disk - computed: true, optional: false, required: false
  private _systemDisk = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeSystemDiskList(this, "system_disk", false);
  public get systemDisk() {
    return this._systemDisk;
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTags {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTagsToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTagsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTagsOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTags {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaints {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaintsToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaintsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaintsOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsNodePools {
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsNodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsNodePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsNodePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // life_state - computed: true, optional: false, required: false
  public get lifeState() {
    return this.getStringAttribute('life_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // native - computed: true, optional: false, required: false
  private _native = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsNativeList(this, "native", false);
  public get native() {
    return this._native;
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unschedulable - computed: true, optional: false, required: false
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNativeNodePoolsFilters {
  /**
  * The attribute name, if there are multiple filters, the relationship between the filters is a logical AND relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools#name DataTencentcloudKubernetesClusterNativeNodePools#name}
  */
  readonly name: string;
  /**
  * Attribute values, if there are multiple values in the same filter, the relationship between values under the same filter is a logical OR relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools#values DataTencentcloudKubernetesClusterNativeNodePools#values}
  */
  readonly values: string[];
}

export function dataTencentcloudKubernetesClusterNativeNodePoolsFiltersToTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudKubernetesClusterNativeNodePoolsFiltersToHclTerraform(struct?: DataTencentcloudKubernetesClusterNativeNodePoolsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNativeNodePoolsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNativeNodePoolsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudKubernetesClusterNativeNodePoolsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudKubernetesClusterNativeNodePoolsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudKubernetesClusterNativeNodePoolsFiltersOutputReference {
    return new DataTencentcloudKubernetesClusterNativeNodePoolsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools tencentcloud_kubernetes_cluster_native_node_pools}
*/
export class DataTencentcloudKubernetesClusterNativeNodePools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_native_node_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKubernetesClusterNativeNodePools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKubernetesClusterNativeNodePools to import
  * @param importFromId The id of the existing DataTencentcloudKubernetesClusterNativeNodePools that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKubernetesClusterNativeNodePools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_native_node_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/kubernetes_cluster_native_node_pools tencentcloud_kubernetes_cluster_native_node_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKubernetesClusterNativeNodePoolsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKubernetesClusterNativeNodePoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_native_node_pools',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // node_pools - computed: true, optional: false, required: false
  private _nodePools = new DataTencentcloudKubernetesClusterNativeNodePoolsNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudKubernetesClusterNativeNodePoolsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudKubernetesClusterNativeNodePoolsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudKubernetesClusterNativeNodePoolsFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudKubernetesClusterNativeNodePoolsFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudKubernetesClusterNativeNodePoolsFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
