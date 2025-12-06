// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlTanzuKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster#id DataTanzuMissionControlTanzuKubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Management cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster#management_cluster_name DataTanzuMissionControlTanzuKubernetesCluster#management_cluster_name}
  */
  readonly managementClusterName: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster#name DataTanzuMissionControlTanzuKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Cluster provisioner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster#provisioner_name DataTanzuMissionControlTanzuKubernetesCluster#provisioner_name}
  */
  readonly provisionerName: string;
}
export interface DataTanzuMissionControlTanzuKubernetesClusterMeta {
}

export function dataTanzuMissionControlTanzuKubernetesClusterMetaToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterMetaToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterMetaOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMeta {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMetaToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMetaToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMetaOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImage {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImageToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImageToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImage | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImageList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImageOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlane {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // os_image - computed: true, optional: false, required: false
  private _osImage = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOsImageList(this, "os_image", false);
  public get osImage() {
    return this._osImage;
  }

  // overrides - computed: true, optional: false, required: false
  public get overrides() {
    return this.getStringAttribute('overrides');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddon {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddonToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddonToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddonList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddonOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetwork {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetworkToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetworkToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pod_cidr_blocks - computed: true, optional: false, required: false
  public get podCidrBlocks() {
    return this.getListAttribute('pod_cidr_blocks');
  }

  // service_cidr_blocks - computed: true, optional: false, required: false
  public get serviceCidrBlocks() {
    return this.getListAttribute('service_cidr_blocks');
  }

  // service_domain - computed: true, optional: false, required: false
  public get serviceDomain() {
    return this.getStringAttribute('service_domain');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetworkOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMeta {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMetaToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMetaToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMetaOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImage | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpec {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_domain - computed: true, optional: false, required: false
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // os_image - computed: true, optional: false, required: false
  private _osImage = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOsImageList(this, "os_image", false);
  public get osImage() {
    return this._osImage;
  }

  // overrides - computed: true, optional: false, required: false
  public get overrides() {
    return this.getStringAttribute('overrides');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // worker_class - computed: true, optional: false, required: false
  public get workerClass() {
    return this.getStringAttribute('worker_class');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepool {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpecTopology {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecTopologyToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpecTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpecTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpecTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_class - computed: true, optional: false, required: false
  public get clusterClass() {
    return this.getStringAttribute('cluster_class');
  }

  // cluster_variables - computed: true, optional: false, required: false
  public get clusterVariables() {
    return this.getStringAttribute('cluster_variables');
  }

  // control_plane - computed: true, optional: false, required: false
  private _controlPlane = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyControlPlaneList(this, "control_plane", false);
  public get controlPlane() {
    return this._controlPlane;
  }

  // core_addon - computed: true, optional: false, required: false
  private _coreAddon = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyCoreAddonList(this, "core_addon", false);
  public get coreAddon() {
    return this._coreAddon;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // nodepool - computed: true, optional: false, required: false
  private _nodepool = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyNodepoolList(this, "nodepool", false);
  public get nodepool() {
    return this._nodepool;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterSpec {
}

export function dataTanzuMissionControlTanzuKubernetesClusterSpecToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterSpecToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_group_name - computed: true, optional: false, required: false
  public get clusterGroupName() {
    return this.getStringAttribute('cluster_group_name');
  }

  // image_registry - computed: true, optional: false, required: false
  public get imageRegistry() {
    return this.getStringAttribute('image_registry');
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // proxy_name - computed: true, optional: false, required: false
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }

  // tmc_managed - computed: true, optional: false, required: false
  public get tmcManaged() {
    return this.getBooleanAttribute('tmc_managed');
  }

  // topology - computed: true, optional: false, required: false
  private _topology = new DataTanzuMissionControlTanzuKubernetesClusterSpecTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterSpecOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicy {
}

export function dataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicyToTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicyToHclTerraform(struct?: DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_on_timeout - computed: true, optional: false, required: false
  public get failOnTimeout() {
    return this.getBooleanAttribute('fail_on_timeout');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // wait_for_kubeconfig - computed: true, optional: false, required: false
  public get waitForKubeconfig() {
    return this.getBooleanAttribute('wait_for_kubeconfig');
  }
}

export class DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicyOutputReference {
    return new DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster tanzu-mission-control_tanzu_kubernetes_cluster}
*/
export class DataTanzuMissionControlTanzuKubernetesCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_tanzu_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlTanzuKubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlTanzuKubernetesCluster to import
  * @param importFromId The id of the existing DataTanzuMissionControlTanzuKubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlTanzuKubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_tanzu_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/tanzu_kubernetes_cluster tanzu-mission-control_tanzu_kubernetes_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlTanzuKubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlTanzuKubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_tanzu_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.10',
        providerVersionConstraint: '1.4.10'
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
    this._managementClusterName = config.managementClusterName;
    this._name = config.name;
    this._provisionerName = config.provisionerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // management_cluster_name - computed: false, optional: false, required: true
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataTanzuMissionControlTanzuKubernetesClusterMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
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

  // provisioner_name - computed: false, optional: false, required: true
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataTanzuMissionControlTanzuKubernetesClusterSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }

  // timeout_policy - computed: true, optional: false, required: false
  private _timeoutPolicy = new DataTanzuMissionControlTanzuKubernetesClusterTimeoutPolicyList(this, "timeout_policy", false);
  public get timeoutPolicy() {
    return this._timeoutPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      management_cluster_name: cdktf.stringToTerraform(this._managementClusterName),
      name: cdktf.stringToTerraform(this._name),
      provisioner_name: cdktf.stringToTerraform(this._provisionerName),
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
      management_cluster_name: {
        value: cdktf.stringToHclTerraform(this._managementClusterName),
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
      provisioner_name: {
        value: cdktf.stringToHclTerraform(this._provisionerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
