// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKubernetesClusterInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#cluster_id DataTencentcloudKubernetesClusterInstances#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#id DataTencentcloudKubernetesClusterInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of node instance IDs to be obtained. If it is empty, it means pulling all node instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#instance_ids DataTencentcloudKubernetesClusterInstances#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Node role, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, default is WORKER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#instance_role DataTencentcloudKubernetesClusterInstances#instance_role}
  */
  readonly instanceRole?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#result_output_file DataTencentcloudKubernetesClusterInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#filters DataTencentcloudKubernetesClusterInstances#filters}
  */
  readonly filters?: DataTencentcloudKubernetesClusterInstancesFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisks {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisksToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisksToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisks | undefined) {
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

  // file_system - computed: true, optional: false, required: false
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }

  // mount_target - computed: true, optional: false, required: false
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisksOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgs {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgsToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgsToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kubelet - computed: true, optional: false, required: false
  public get kubelet() {
    return cdktf.Fn.tolist(this.getListAttribute('kubelet'));
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgsOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCuda {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudaToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCuda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudaToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCuda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCuda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCuda | undefined) {
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudaList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudaOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnn {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnnToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnnToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dev_name - computed: true, optional: false, required: false
  public get devName() {
    return this.getStringAttribute('dev_name');
  }

  // doc_name - computed: true, optional: false, required: false
  public get docName() {
    return this.getStringAttribute('doc_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnnList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnnOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriver {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriverToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriverToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriverList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriverOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriver {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriverToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriverToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriver | undefined) {
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriverList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriverOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgs {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cuda - computed: true, optional: false, required: false
  private _cuda = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudaList(this, "cuda", false);
  public get cuda() {
    return this._cuda;
  }

  // cudnn - computed: true, optional: false, required: false
  private _cudnn = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCudnnList(this, "cudnn", false);
  public get cudnn() {
    return this._cudnn;
  }

  // custom_driver - computed: true, optional: false, required: false
  private _customDriver = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsCustomDriverList(this, "custom_driver", false);
  public get customDriver() {
    return this._customDriver;
  }

  // driver - computed: true, optional: false, required: false
  private _driver = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsDriverList(this, "driver", false);
  public get driver() {
    return this._driver;
  }

  // mig_enable - computed: true, optional: false, required: false
  public get migEnable() {
    return this.getBooleanAttribute('mig_enable');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabels {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabelsToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabelsToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabels | undefined) {
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

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabelsOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaints {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaintsToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaintsToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaints | undefined) {
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

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaintsOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettings {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // desired_pod_number - computed: true, optional: false, required: false
  public get desiredPodNumber() {
    return this.getNumberAttribute('desired_pod_number');
  }

  // docker_graph_path - computed: true, optional: false, required: false
  public get dockerGraphPath() {
    return this.getStringAttribute('docker_graph_path');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsExtraArgsList(this, "extra_args", false);
  public get extraArgs() {
    return this._extraArgs;
  }

  // gpu_args - computed: true, optional: false, required: false
  private _gpuArgs = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsGpuArgsList(this, "gpu_args", false);
  public get gpuArgs() {
    return this._gpuArgs;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // mount_target - computed: true, optional: false, required: false
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }

  // pre_start_user_script - computed: true, optional: false, required: false
  public get preStartUserScript() {
    return this.getStringAttribute('pre_start_user_script');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }

  // unschedulable - computed: true, optional: false, required: false
  public get unschedulable() {
    return this.getNumberAttribute('unschedulable');
  }

  // user_script - computed: true, optional: false, required: false
  public get userScript() {
    return this.getStringAttribute('user_script');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesInstanceSet {
}

export function dataTencentcloudKubernetesClusterInstancesInstanceSetToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterInstancesInstanceSetToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesInstanceSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesInstanceSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_group_id - computed: true, optional: false, required: false
  public get autoscalingGroupId() {
    return this.getStringAttribute('autoscaling_group_id');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // drain_status - computed: true, optional: false, required: false
  public get drainStatus() {
    return this.getStringAttribute('drain_status');
  }

  // failed_reason - computed: true, optional: false, required: false
  public get failedReason() {
    return this.getStringAttribute('failed_reason');
  }

  // instance_advanced_settings - computed: true, optional: false, required: false
  private _instanceAdvancedSettings = new DataTencentcloudKubernetesClusterInstancesInstanceSetInstanceAdvancedSettingsList(this, "instance_advanced_settings", false);
  public get instanceAdvancedSettings() {
    return this._instanceAdvancedSettings;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_role - computed: true, optional: false, required: false
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // lan_ip - computed: true, optional: false, required: false
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }
}

export class DataTencentcloudKubernetesClusterInstancesInstanceSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesInstanceSetOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesInstanceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterInstancesFilters {
  /**
  * The attribute name, if there are multiple filters, the relationship between the filters is a logical AND relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#name DataTencentcloudKubernetesClusterInstances#name}
  */
  readonly name: string;
  /**
  * Attribute values, if there are multiple values in the same filter, the relationship between values under the same filter is a logical OR relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#values DataTencentcloudKubernetesClusterInstances#values}
  */
  readonly values: string[];
}

export function dataTencentcloudKubernetesClusterInstancesFiltersToTerraform(struct?: DataTencentcloudKubernetesClusterInstancesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudKubernetesClusterInstancesFiltersToHclTerraform(struct?: DataTencentcloudKubernetesClusterInstancesFilters | cdktf.IResolvable): any {
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

export class DataTencentcloudKubernetesClusterInstancesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterInstancesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudKubernetesClusterInstancesFilters | cdktf.IResolvable | undefined) {
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

export class DataTencentcloudKubernetesClusterInstancesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudKubernetesClusterInstancesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudKubernetesClusterInstancesFiltersOutputReference {
    return new DataTencentcloudKubernetesClusterInstancesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances tencentcloud_kubernetes_cluster_instances}
*/
export class DataTencentcloudKubernetesClusterInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKubernetesClusterInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKubernetesClusterInstances to import
  * @param importFromId The id of the existing DataTencentcloudKubernetesClusterInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKubernetesClusterInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kubernetes_cluster_instances tencentcloud_kubernetes_cluster_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKubernetesClusterInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKubernetesClusterInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._instanceIds = config.instanceIds;
    this._instanceRole = config.instanceRole;
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

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_role - computed: false, optional: true, required: false
  private _instanceRole?: string; 
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }
  public set instanceRole(value: string) {
    this._instanceRole = value;
  }
  public resetInstanceRole() {
    this._instanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleInput() {
    return this._instanceRole;
  }

  // instance_set - computed: true, optional: false, required: false
  private _instanceSet = new DataTencentcloudKubernetesClusterInstancesInstanceSetList(this, "instance_set", false);
  public get instanceSet() {
    return this._instanceSet;
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
  private _filters = new DataTencentcloudKubernetesClusterInstancesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudKubernetesClusterInstancesFilters[] | cdktf.IResolvable) {
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
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      instance_role: cdktf.stringToTerraform(this._instanceRole),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudKubernetesClusterInstancesFiltersToTerraform, true)(this._filters.internalValue),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_role: {
        value: cdktf.stringToHclTerraform(this._instanceRole),
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
        value: cdktf.listMapperHcl(dataTencentcloudKubernetesClusterInstancesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudKubernetesClusterInstancesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
