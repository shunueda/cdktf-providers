// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#metadata DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#metadata}
  */
  readonly metadata: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata;
  /**
  * Spec represents the specification of a Ceph BlockPool Rados Namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#spec DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#spec}
  */
  readonly spec: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec;
}
export interface DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#annotations DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#labels DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#name DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#namespace DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadataToTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadataToHclTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata | cdktf.IResolvable): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#interval DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#path DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#start_time DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._path = value.path;
      this._startTime = value.startTime;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring {
  /**
  * Mode is the mirroring mode; either pool or image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#mode DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#mode}
  */
  readonly mode: string;
  /**
  * RemoteNamespace is the name of the CephBlockPoolRadosNamespace on the secondary cluster CephBlockPool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#remote_namespace DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#remote_namespace}
  */
  readonly remoteNamespace?: string;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#snapshot_schedules DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringToTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    remote_namespace: cdktf.stringToTerraform(struct!.remoteNamespace),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringToHclTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_namespace: {
      value: cdktf.stringToHclTerraform(struct!.remoteNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._remoteNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteNamespace = this._remoteNamespace;
    }
    if (this._snapshotSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotSchedules = this._snapshotSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._remoteNamespace = undefined;
      this._snapshotSchedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._remoteNamespace = value.remoteNamespace;
      this._snapshotSchedules.internalValue = value.snapshotSchedules;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // remote_namespace - computed: false, optional: true, required: false
  private _remoteNamespace?: string; 
  public get remoteNamespace() {
    return this.getStringAttribute('remote_namespace');
  }
  public set remoteNamespace(value: string) {
    this._remoteNamespace = value;
  }
  public resetRemoteNamespace() {
    this._remoteNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNamespaceInput() {
    return this._remoteNamespace;
  }

  // snapshot_schedules - computed: false, optional: true, required: false
  private _snapshotSchedules = new DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringSnapshotSchedules[] | cdktf.IResolvable) {
    this._snapshotSchedules.internalValue = value;
  }
  public resetSnapshotSchedules() {
    this._snapshotSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSchedulesInput() {
    return this._snapshotSchedules.internalValue;
  }
}
export interface DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec {
  /**
  * BlockPoolName is the name of Ceph BlockPool. Typically it's the name of the CephBlockPool CR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#block_pool_name DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#block_pool_name}
  */
  readonly blockPoolName: string;
  /**
  * Mirroring configuration of CephBlockPoolRadosNamespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#mirroring DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring;
  /**
  * The name of the CephBlockPoolRadosNamespaceSpec namespace. If not set, the default is the name of the CR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#name DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_pool_name: cdktf.stringToTerraform(struct!.blockPoolName),
    mirroring: dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringToTerraform(struct!.mirroring),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.blockPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring: {
      value: dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPoolName = this._blockPoolName;
    }
    if (this._mirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroring = this._mirroring?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockPoolName = undefined;
      this._mirroring.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockPoolName = value.blockPoolName;
      this._mirroring.internalValue = value.mirroring;
      this._name = value.name;
    }
  }

  // block_pool_name - computed: false, optional: false, required: true
  private _blockPoolName?: string; 
  public get blockPoolName() {
    return this.getStringAttribute('block_pool_name');
  }
  public set blockPoolName(value: string) {
    this._blockPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPoolNameInput() {
    return this._blockPoolName;
  }

  // mirroring - computed: false, optional: true, required: false
  private _mirroring = new DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecMirroring) {
    this._mirroring.internalValue = value;
  }
  public resetMirroring() {
    this._mirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringInput() {
    return this._mirroring.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest k8s_ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest}
*/
export class DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest to import
  * @param importFromId The id of the existing DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCephRookIoCephBlockPoolRadosNamespaceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest k8s_ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ceph_rook_io_ceph_block_pool_rados_namespace_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephBlockPoolRadosNamespaceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
