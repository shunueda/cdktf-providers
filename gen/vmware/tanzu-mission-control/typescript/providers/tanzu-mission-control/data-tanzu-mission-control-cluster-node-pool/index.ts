// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlClusterNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#cluster_name DataTanzuMissionControlClusterNodePool#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#id DataTanzuMissionControlClusterNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#management_cluster_name DataTanzuMissionControlClusterNodePool#management_cluster_name}
  */
  readonly managementClusterName: string;
  /**
  * Name of this nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#name DataTanzuMissionControlClusterNodePool#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#provisioner_name DataTanzuMissionControlClusterNodePool#provisioner_name}
  */
  readonly provisionerName: string;
  /**
  * Wait timeout duration until nodepool resource reaches READY state. Accepted timeout duration values like 5s, 45m, or 3h, higher than zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#ready_wait_timeout DataTanzuMissionControlClusterNodePool#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#meta DataTanzuMissionControlClusterNodePool#meta}
  */
  readonly meta?: DataTanzuMissionControlClusterNodePoolMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#spec DataTanzuMissionControlClusterNodePool#spec}
  */
  readonly spec?: DataTanzuMissionControlClusterNodePoolSpec[] | cdktf.IResolvable;
}
export interface DataTanzuMissionControlClusterNodePoolMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#annotations DataTanzuMissionControlClusterNodePool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#description DataTanzuMissionControlClusterNodePool#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#labels DataTanzuMissionControlClusterNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataTanzuMissionControlClusterNodePoolMetaToTerraform(struct?: DataTanzuMissionControlClusterNodePoolMetaOutputReference | DataTanzuMissionControlClusterNodePoolMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataTanzuMissionControlClusterNodePoolMetaToHclTerraform(struct?: DataTanzuMissionControlClusterNodePoolMetaOutputReference | DataTanzuMissionControlClusterNodePoolMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterNodePoolMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterNodePoolMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterNodePoolMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
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
export interface DataTanzuMissionControlClusterNodePoolSpecTkgAws {
  /**
  * Nodepool instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#class DataTanzuMissionControlClusterNodePool#class}
  */
  readonly class?: string;
  /**
  * Storage Class to be used for storage of the disks which store the root filesystem of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#storage_class DataTanzuMissionControlClusterNodePool#storage_class}
  */
  readonly storageClass?: string;
}

export function dataTanzuMissionControlClusterNodePoolSpecTkgAwsToTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataTanzuMissionControlClusterNodePoolSpecTkgAwsToHclTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgAwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterNodePoolSpecTkgAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterNodePoolSpecTkgAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._storageClass = value.storageClass;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgAwsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterNodePoolSpecTkgAws[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterNodePoolSpecTkgAwsOutputReference {
    return new DataTanzuMissionControlClusterNodePoolSpecTkgAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes {
  /**
  * Volume capacity is in gib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#capacity DataTanzuMissionControlClusterNodePool#capacity}
  */
  readonly capacity?: number;
  /**
  * It is the directory where the volume device is to be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#mount_path DataTanzuMissionControlClusterNodePool#mount_path}
  */
  readonly mountPath?: string;
  /**
  * It is the volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#name DataTanzuMissionControlClusterNodePool#name}
  */
  readonly name?: string;
  /**
  * This is the storage class for PVC which in case omitted, default storage class will be used for the disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#pvc_storage_class DataTanzuMissionControlClusterNodePool#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
}

export function dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesToTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
  }
}


export function dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesToHclTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._pvcStorageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._pvcStorageClass = value.pvcStorageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesOutputReference {
    return new DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere {
  /**
  * Nodepool instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#class DataTanzuMissionControlClusterNodePool#class}
  */
  readonly class: string;
  /**
  * Configure the failure domain of node pool. The potential values could be found using cluster:options api. This parameter will be ignored by the backend if the TKG service vsphere cluster doesn't support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#failure_domain DataTanzuMissionControlClusterNodePool#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * Storage Class to be used for storage of the disks which store the root filesystem of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#storage_class DataTanzuMissionControlClusterNodePool#storage_class}
  */
  readonly storageClass: string;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#volumes DataTanzuMissionControlClusterNodePool#volumes}
  */
  readonly volumes?: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereToTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volumes: cdktf.listMapper(dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesToTerraform, true)(struct!.volumes),
  }
}


export function dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereToHclTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._failureDomain = undefined;
      this._storageClass = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._failureDomain = value.failureDomain;
      this._storageClass = value.storageClass;
      this._volumes.internalValue = value.volumes;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereOutputReference {
    return new DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfig {
  /**
  * Number of CPUs per node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#cpu DataTanzuMissionControlClusterNodePool#cpu}
  */
  readonly cpu?: string;
  /**
  * Root disk size in gigabytes for the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#disk_size DataTanzuMissionControlClusterNodePool#disk_size}
  */
  readonly diskSize?: string;
  /**
  * Memory associated with the node in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#memory DataTanzuMissionControlClusterNodePool#memory}
  */
  readonly memory?: string;
}

export function dataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigToTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigOutputReference | DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    disk_size: cdktf.stringToTerraform(struct!.diskSize),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigToHclTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigOutputReference | DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.stringToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: string; 
  public get diskSize() {
    return this.getStringAttribute('disk_size');
  }
  public set diskSize(value: string) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataTanzuMissionControlClusterNodePoolSpecTkgVsphere {
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#vm_config DataTanzuMissionControlClusterNodePool#vm_config}
  */
  readonly vmConfig: DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfig;
}

export function dataTanzuMissionControlClusterNodePoolSpecTkgVsphereToTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_config: dataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigToTerraform(struct!.vmConfig),
  }
}


export function dataTanzuMissionControlClusterNodePoolSpecTkgVsphereToHclTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpecTkgVsphere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_config: {
      value: dataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigToHclTerraform(struct!.vmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgVsphereOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterNodePoolSpecTkgVsphere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmConfig = this._vmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterNodePoolSpecTkgVsphere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vmConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vmConfig.internalValue = value.vmConfig;
    }
  }

  // vm_config - computed: false, optional: false, required: true
  private _vmConfig = new DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: DataTanzuMissionControlClusterNodePoolSpecTkgVsphereVmConfig) {
    this._vmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }
}

export class DataTanzuMissionControlClusterNodePoolSpecTkgVsphereList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterNodePoolSpecTkgVsphere[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterNodePoolSpecTkgVsphereOutputReference {
    return new DataTanzuMissionControlClusterNodePoolSpecTkgVsphereOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterNodePoolSpec {
  /**
  * Cloud labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#cloud_labels DataTanzuMissionControlClusterNodePool#cloud_labels}
  */
  readonly cloudLabels?: { [key: string]: string };
  /**
  * Node labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#node_labels DataTanzuMissionControlClusterNodePool#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#worker_node_count DataTanzuMissionControlClusterNodePool#worker_node_count}
  */
  readonly workerNodeCount: string;
  /**
  * tkg_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#tkg_aws DataTanzuMissionControlClusterNodePool#tkg_aws}
  */
  readonly tkgAws?: DataTanzuMissionControlClusterNodePoolSpecTkgAws[] | cdktf.IResolvable;
  /**
  * tkg_service_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#tkg_service_vsphere DataTanzuMissionControlClusterNodePool#tkg_service_vsphere}
  */
  readonly tkgServiceVsphere?: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere[] | cdktf.IResolvable;
  /**
  * tkg_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#tkg_vsphere DataTanzuMissionControlClusterNodePool#tkg_vsphere}
  */
  readonly tkgVsphere?: DataTanzuMissionControlClusterNodePoolSpecTkgVsphere[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterNodePoolSpecToTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cloudLabels),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    worker_node_count: cdktf.stringToTerraform(struct!.workerNodeCount),
    tkg_aws: cdktf.listMapper(dataTanzuMissionControlClusterNodePoolSpecTkgAwsToTerraform, true)(struct!.tkgAws),
    tkg_service_vsphere: cdktf.listMapper(dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereToTerraform, true)(struct!.tkgServiceVsphere),
    tkg_vsphere: cdktf.listMapper(dataTanzuMissionControlClusterNodePoolSpecTkgVsphereToTerraform, true)(struct!.tkgVsphere),
  }
}


export function dataTanzuMissionControlClusterNodePoolSpecToHclTerraform(struct?: DataTanzuMissionControlClusterNodePoolSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cloudLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    worker_node_count: {
      value: cdktf.stringToHclTerraform(struct!.workerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tkg_aws: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterNodePoolSpecTkgAwsToHclTerraform, true)(struct!.tkgAws),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterNodePoolSpecTkgAwsList",
    },
    tkg_service_vsphere: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereToHclTerraform, true)(struct!.tkgServiceVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereList",
    },
    tkg_vsphere: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterNodePoolSpecTkgVsphereToHclTerraform, true)(struct!.tkgVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterNodePoolSpecTkgVsphereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterNodePoolSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterNodePoolSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLabels = this._cloudLabels;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._workerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeCount = this._workerNodeCount;
    }
    if (this._tkgAws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgAws = this._tkgAws?.internalValue;
    }
    if (this._tkgServiceVsphere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgServiceVsphere = this._tkgServiceVsphere?.internalValue;
    }
    if (this._tkgVsphere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgVsphere = this._tkgVsphere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterNodePoolSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudLabels = undefined;
      this._nodeLabels = undefined;
      this._workerNodeCount = undefined;
      this._tkgAws.internalValue = undefined;
      this._tkgServiceVsphere.internalValue = undefined;
      this._tkgVsphere.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudLabels = value.cloudLabels;
      this._nodeLabels = value.nodeLabels;
      this._workerNodeCount = value.workerNodeCount;
      this._tkgAws.internalValue = value.tkgAws;
      this._tkgServiceVsphere.internalValue = value.tkgServiceVsphere;
      this._tkgVsphere.internalValue = value.tkgVsphere;
    }
  }

  // cloud_labels - computed: false, optional: true, required: false
  private _cloudLabels?: { [key: string]: string }; 
  public get cloudLabels() {
    return this.getStringMapAttribute('cloud_labels');
  }
  public set cloudLabels(value: { [key: string]: string }) {
    this._cloudLabels = value;
  }
  public resetCloudLabels() {
    this._cloudLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLabelsInput() {
    return this._cloudLabels;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // worker_node_count - computed: false, optional: false, required: true
  private _workerNodeCount?: string; 
  public get workerNodeCount() {
    return this.getStringAttribute('worker_node_count');
  }
  public set workerNodeCount(value: string) {
    this._workerNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeCountInput() {
    return this._workerNodeCount;
  }

  // tkg_aws - computed: false, optional: true, required: false
  private _tkgAws = new DataTanzuMissionControlClusterNodePoolSpecTkgAwsList(this, "tkg_aws", false);
  public get tkgAws() {
    return this._tkgAws;
  }
  public putTkgAws(value: DataTanzuMissionControlClusterNodePoolSpecTkgAws[] | cdktf.IResolvable) {
    this._tkgAws.internalValue = value;
  }
  public resetTkgAws() {
    this._tkgAws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgAwsInput() {
    return this._tkgAws.internalValue;
  }

  // tkg_service_vsphere - computed: false, optional: true, required: false
  private _tkgServiceVsphere = new DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphereList(this, "tkg_service_vsphere", false);
  public get tkgServiceVsphere() {
    return this._tkgServiceVsphere;
  }
  public putTkgServiceVsphere(value: DataTanzuMissionControlClusterNodePoolSpecTkgServiceVsphere[] | cdktf.IResolvable) {
    this._tkgServiceVsphere.internalValue = value;
  }
  public resetTkgServiceVsphere() {
    this._tkgServiceVsphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgServiceVsphereInput() {
    return this._tkgServiceVsphere.internalValue;
  }

  // tkg_vsphere - computed: false, optional: true, required: false
  private _tkgVsphere = new DataTanzuMissionControlClusterNodePoolSpecTkgVsphereList(this, "tkg_vsphere", false);
  public get tkgVsphere() {
    return this._tkgVsphere;
  }
  public putTkgVsphere(value: DataTanzuMissionControlClusterNodePoolSpecTkgVsphere[] | cdktf.IResolvable) {
    this._tkgVsphere.internalValue = value;
  }
  public resetTkgVsphere() {
    this._tkgVsphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgVsphereInput() {
    return this._tkgVsphere.internalValue;
  }
}

export class DataTanzuMissionControlClusterNodePoolSpecList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterNodePoolSpec[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterNodePoolSpecOutputReference {
    return new DataTanzuMissionControlClusterNodePoolSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool tanzu-mission-control_cluster_node_pool}
*/
export class DataTanzuMissionControlClusterNodePool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_cluster_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlClusterNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlClusterNodePool to import
  * @param importFromId The id of the existing DataTanzuMissionControlClusterNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlClusterNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_cluster_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_node_pool tanzu-mission-control_cluster_node_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlClusterNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlClusterNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_cluster_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9',
        providerVersionConstraint: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._managementClusterName = config.managementClusterName;
    this._name = config.name;
    this._provisionerName = config.provisionerName;
    this._readyWaitTimeout = config.readyWaitTimeout;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // ready_wait_timeout - computed: false, optional: true, required: false
  private _readyWaitTimeout?: string; 
  public get readyWaitTimeout() {
    return this.getStringAttribute('ready_wait_timeout');
  }
  public set readyWaitTimeout(value: string) {
    this._readyWaitTimeout = value;
  }
  public resetReadyWaitTimeout() {
    this._readyWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitTimeoutInput() {
    return this._readyWaitTimeout;
  }

  // status - computed: true, optional: false, required: false
  private _status = new cdktf.StringMap(this, "status");
  public get status() {
    return this._status;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataTanzuMissionControlClusterNodePoolMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataTanzuMissionControlClusterNodePoolMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlClusterNodePoolSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlClusterNodePoolSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      management_cluster_name: cdktf.stringToTerraform(this._managementClusterName),
      name: cdktf.stringToTerraform(this._name),
      provisioner_name: cdktf.stringToTerraform(this._provisionerName),
      ready_wait_timeout: cdktf.stringToTerraform(this._readyWaitTimeout),
      meta: dataTanzuMissionControlClusterNodePoolMetaToTerraform(this._meta.internalValue),
      spec: cdktf.listMapper(dataTanzuMissionControlClusterNodePoolSpecToTerraform, true)(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      ready_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._readyWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: dataTanzuMissionControlClusterNodePoolMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlClusterNodePoolMetaList",
      },
      spec: {
        value: cdktf.listMapperHcl(dataTanzuMissionControlClusterNodePoolSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlClusterNodePoolSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
