// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKubernetesClusterNodePoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools#cluster_id DataTencentcloudKubernetesClusterNodePools#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools#id DataTencentcloudKubernetesClusterNodePools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools#result_output_file DataTencentcloudKubernetesClusterNodePools#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools#filters DataTencentcloudKubernetesClusterNodePools#filters}
  */
  readonly filters?: DataTencentcloudKubernetesClusterNodePoolsFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisks {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisksToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisksToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisks | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisksOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgs {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgsToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgs | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgsOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCuda {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudaToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCuda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudaToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCuda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCuda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCuda | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudaList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudaOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnn {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnnToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnnToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnn | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnnList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnnOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriver {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriverToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriverToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriver | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriverList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriverOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriver {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriverToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriverToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriver | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriverList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriverOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgs {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cuda - computed: true, optional: false, required: false
  private _cuda = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudaList(this, "cuda", false);
  public get cuda() {
    return this._cuda;
  }

  // cudnn - computed: true, optional: false, required: false
  private _cudnn = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCudnnList(this, "cudnn", false);
  public get cudnn() {
    return this._cudnn;
  }

  // custom_driver - computed: true, optional: false, required: false
  private _customDriver = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsCustomDriverList(this, "custom_driver", false);
  public get customDriver() {
    return this._customDriver;
  }

  // driver - computed: true, optional: false, required: false
  private _driver = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsDriverList(this, "driver", false);
  public get driver() {
    return this._driver;
  }

  // mig_enable - computed: true, optional: false, required: false
  public get migEnable() {
    return this.getBooleanAttribute('mig_enable');
  }
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabels {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabelsToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabelsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabels | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabelsOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAdded {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAddedToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAdded): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAddedToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAdded): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAddedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAdded | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAdded | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // initializing - computed: true, optional: false, required: false
  public get initializing() {
    return this.getNumberAttribute('initializing');
  }

  // joining - computed: true, optional: false, required: false
  public get joining() {
    return this.getNumberAttribute('joining');
  }

  // normal - computed: true, optional: false, required: false
  public get normal() {
    return this.getNumberAttribute('normal');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAddedList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAddedOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAddedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAdded {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAddedToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAdded): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAddedToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAdded): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAddedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAdded | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAdded | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // initializing - computed: true, optional: false, required: false
  public get initializing() {
    return this.getNumberAttribute('initializing');
  }

  // joining - computed: true, optional: false, required: false
  public get joining() {
    return this.getNumberAttribute('joining');
  }

  // normal - computed: true, optional: false, required: false
  public get normal() {
    return this.getNumberAttribute('normal');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAddedList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAddedOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAddedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummary {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_added - computed: true, optional: false, required: false
  private _autoscalingAdded = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryAutoscalingAddedList(this, "autoscaling_added", false);
  public get autoscalingAdded() {
    return this._autoscalingAdded;
  }

  // manually_added - computed: true, optional: false, required: false
  private _manuallyAdded = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryManuallyAddedList(this, "manually_added", false);
  public get manuallyAdded() {
    return this._manuallyAdded;
  }
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTags {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetTagsToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetTagsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTags | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTagsOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaints {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaintsToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaintsToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaints | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaintsOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsNodePoolSet {
}

export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsNodePoolSetToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsNodePoolSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsNodePoolSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsNodePoolSet | undefined) {
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

  // autoscaling_group_status - computed: true, optional: false, required: false
  public get autoscalingGroupStatus() {
    return this.getStringAttribute('autoscaling_group_status');
  }

  // cluster_instance_id - computed: true, optional: false, required: false
  public get clusterInstanceId() {
    return this.getStringAttribute('cluster_instance_id');
  }

  // data_disks - computed: true, optional: false, required: false
  private _dataDisks = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // desired_nodes_num - computed: true, optional: false, required: false
  public get desiredNodesNum() {
    return this.getNumberAttribute('desired_nodes_num');
  }

  // desired_pod_num - computed: true, optional: false, required: false
  public get desiredPodNum() {
    return this.getNumberAttribute('desired_pod_num');
  }

  // docker_graph_path - computed: true, optional: false, required: false
  public get dockerGraphPath() {
    return this.getStringAttribute('docker_graph_path');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetExtraArgsList(this, "extra_args", false);
  public get extraArgs() {
    return this._extraArgs;
  }

  // gpu_args - computed: true, optional: false, required: false
  private _gpuArgs = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetGpuArgsList(this, "gpu_args", false);
  public get gpuArgs() {
    return this._gpuArgs;
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // launch_configuration_id - computed: true, optional: false, required: false
  public get launchConfigurationId() {
    return this.getStringAttribute('launch_configuration_id');
  }

  // life_state - computed: true, optional: false, required: false
  public get lifeState() {
    return this.getStringAttribute('life_state');
  }

  // max_nodes_num - computed: true, optional: false, required: false
  public get maxNodesNum() {
    return this.getNumberAttribute('max_nodes_num');
  }

  // min_nodes_num - computed: true, optional: false, required: false
  public get minNodesNum() {
    return this.getNumberAttribute('min_nodes_num');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_count_summary - computed: true, optional: false, required: false
  private _nodeCountSummary = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetNodeCountSummaryList(this, "node_count_summary", false);
  public get nodeCountSummary() {
    return this._nodeCountSummary;
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_pool_os - computed: true, optional: false, required: false
  public get nodePoolOs() {
    return this.getStringAttribute('node_pool_os');
  }

  // os_customize_type - computed: true, optional: false, required: false
  public get osCustomizeType() {
    return this.getStringAttribute('os_customize_type');
  }

  // pre_start_user_script - computed: true, optional: false, required: false
  public get preStartUserScript() {
    return this.getStringAttribute('pre_start_user_script');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetTaintsList(this, "taints", false);
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

export class DataTencentcloudKubernetesClusterNodePoolsNodePoolSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsNodePoolSetOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudKubernetesClusterNodePoolsFilters {
  /**
  * The attribute name, if there are multiple filters, the relationship between the filters is a logical AND relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools#name DataTencentcloudKubernetesClusterNodePools#name}
  */
  readonly name: string;
  /**
  * Attribute values, if there are multiple values in the same filter, the relationship between values under the same filter is a logical OR relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools#values DataTencentcloudKubernetesClusterNodePools#values}
  */
  readonly values: string[];
}

export function dataTencentcloudKubernetesClusterNodePoolsFiltersToTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudKubernetesClusterNodePoolsFiltersToHclTerraform(struct?: DataTencentcloudKubernetesClusterNodePoolsFilters | cdktf.IResolvable): any {
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

export class DataTencentcloudKubernetesClusterNodePoolsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKubernetesClusterNodePoolsFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudKubernetesClusterNodePoolsFilters | cdktf.IResolvable | undefined) {
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

export class DataTencentcloudKubernetesClusterNodePoolsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudKubernetesClusterNodePoolsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudKubernetesClusterNodePoolsFiltersOutputReference {
    return new DataTencentcloudKubernetesClusterNodePoolsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools tencentcloud_kubernetes_cluster_node_pools}
*/
export class DataTencentcloudKubernetesClusterNodePools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_node_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKubernetesClusterNodePools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKubernetesClusterNodePools to import
  * @param importFromId The id of the existing DataTencentcloudKubernetesClusterNodePools that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKubernetesClusterNodePools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_node_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/kubernetes_cluster_node_pools tencentcloud_kubernetes_cluster_node_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKubernetesClusterNodePoolsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKubernetesClusterNodePoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_node_pools',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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

  // node_pool_set - computed: true, optional: false, required: false
  private _nodePoolSet = new DataTencentcloudKubernetesClusterNodePoolsNodePoolSetList(this, "node_pool_set", false);
  public get nodePoolSet() {
    return this._nodePoolSet;
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
  private _filters = new DataTencentcloudKubernetesClusterNodePoolsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudKubernetesClusterNodePoolsFilters[] | cdktf.IResolvable) {
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
      filters: cdktf.listMapper(dataTencentcloudKubernetesClusterNodePoolsFiltersToTerraform, true)(this._filters.internalValue),
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
        value: cdktf.listMapperHcl(dataTencentcloudKubernetesClusterNodePoolsFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudKubernetesClusterNodePoolsFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
