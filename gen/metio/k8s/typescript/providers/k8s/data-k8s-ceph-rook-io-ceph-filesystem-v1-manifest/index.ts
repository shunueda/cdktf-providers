// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCephRookIoCephFilesystemV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#metadata DataK8SCephRookIoCephFilesystemV1Manifest#metadata}
  */
  readonly metadata: DataK8SCephRookIoCephFilesystemV1ManifestMetadata;
  /**
  * FilesystemSpec represents the spec of a file system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#spec DataK8SCephRookIoCephFilesystemV1Manifest#spec}
  */
  readonly spec: DataK8SCephRookIoCephFilesystemV1ManifestSpec;
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#annotations DataK8SCephRookIoCephFilesystemV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#labels DataK8SCephRookIoCephFilesystemV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#name DataK8SCephRookIoCephFilesystemV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespace DataK8SCephRookIoCephFilesystemV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestMetadataToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephFilesystemV1ManifestMetadataToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded {
  /**
  * The algorithm for erasure coding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#algorithm DataK8SCephRookIoCephFilesystemV1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type). This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#coding_chunks DataK8SCephRookIoCephFilesystemV1Manifest#coding_chunks}
  */
  readonly codingChunks: number;
  /**
  * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type). The number of chunks required to recover an object when any single OSD is lost is the same as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#data_chunks DataK8SCephRookIoCephFilesystemV1Manifest#data_chunks}
  */
  readonly dataChunks: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCodedToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    coding_chunks: cdktf.numberToTerraform(struct!.codingChunks),
    data_chunks: cdktf.numberToTerraform(struct!.dataChunks),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCodedToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coding_chunks: {
      value: cdktf.numberToHclTerraform(struct!.codingChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_chunks: {
      value: cdktf.numberToHclTerraform(struct!.dataChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCodedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._codingChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingChunks = this._codingChunks;
    }
    if (this._dataChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataChunks = this._dataChunks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._codingChunks = undefined;
      this._dataChunks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._codingChunks = value.codingChunks;
      this._dataChunks = value.dataChunks;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // coding_chunks - computed: false, optional: false, required: true
  private _codingChunks?: number; 
  public get codingChunks() {
    return this.getNumberAttribute('coding_chunks');
  }
  public set codingChunks(value: number) {
    this._codingChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codingChunksInput() {
    return this._codingChunks;
  }

  // data_chunks - computed: false, optional: false, required: true
  private _dataChunks?: number; 
  public get dataChunks() {
    return this.getNumberAttribute('data_chunks');
  }
  public set dataChunks(value: number) {
    this._dataChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataChunksInput() {
    return this._dataChunks;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers {
  /**
  * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#secret_names DataK8SCephRookIoCephFilesystemV1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeersToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeersToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNames = this._secretNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretNames = value.secretNames;
    }
  }

  // secret_names - computed: false, optional: true, required: false
  private _secretNames?: string[]; 
  public get secretNames() {
    return this.getListAttribute('secret_names');
  }
  public set secretNames(value: string[]) {
    this._secretNames = value;
  }
  public resetSecretNames() {
    this._secretNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamesInput() {
    return this._secretNames;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#interval DataK8SCephRookIoCephFilesystemV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#path DataK8SCephRookIoCephFilesystemV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#start_time DataK8SCephRookIoCephFilesystemV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring {
  /**
  * Enabled whether this pool is mirrored or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#enabled DataK8SCephRookIoCephFilesystemV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode is the mirroring mode: either pool or image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mode DataK8SCephRookIoCephFilesystemV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Peers represents the peers spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#peers DataK8SCephRookIoCephFilesystemV1Manifest#peers}
  */
  readonly peers?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#snapshot_schedules DataK8SCephRookIoCephFilesystemV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    peers: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeersToTerraform(struct!.peers),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeersToHclTerraform(struct!.peers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._snapshotSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotSchedules = this._snapshotSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
      this._peers.internalValue = undefined;
      this._snapshotSchedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mode = value.mode;
      this._peers.internalValue = value.peers;
      this._snapshotSchedules.internalValue = value.snapshotSchedules;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeersOutputReference(this, "peers");
  public get peers() {
    return this._peers;
  }
  public putPeers(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringPeers) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // snapshot_schedules - computed: false, optional: true, required: false
  private _snapshotSchedules = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringSnapshotSchedules[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas {
  /**
  * MaxBytes represents the quota in bytes Deprecated in favor of MaxSize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#max_bytes DataK8SCephRookIoCephFilesystemV1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * MaxObjects represents the quota in objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#max_objects DataK8SCephRookIoCephFilesystemV1Manifest#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * MaxSize represents the quota in bytes as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#max_size DataK8SCephRookIoCephFilesystemV1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotasToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_objects: cdktf.numberToTerraform(struct!.maxObjects),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotasToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_objects: {
      value: cdktf.numberToHclTerraform(struct!.maxObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjects = this._maxObjects;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytes = undefined;
      this._maxObjects = undefined;
      this._maxSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytes = value.maxBytes;
      this._maxObjects = value.maxObjects;
      this._maxSize = value.maxSize;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_objects - computed: false, optional: true, required: false
  private _maxObjects?: number; 
  public get maxObjects() {
    return this.getNumberAttribute('max_objects');
  }
  public set maxObjects(value: number) {
    this._maxObjects = value;
  }
  public resetMaxObjects() {
    this._maxObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectsInput() {
    return this._maxObjects;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage {
  /**
  * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#primary_device_class DataK8SCephRookIoCephFilesystemV1Manifest#primary_device_class}
  */
  readonly primaryDeviceClass: string;
  /**
  * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#secondary_device_class DataK8SCephRookIoCephFilesystemV1Manifest#secondary_device_class}
  */
  readonly secondaryDeviceClass: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorageToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_device_class: cdktf.stringToTerraform(struct!.primaryDeviceClass),
    secondary_device_class: cdktf.stringToTerraform(struct!.secondaryDeviceClass),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorageToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.primaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.secondaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDeviceClass = this._primaryDeviceClass;
    }
    if (this._secondaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDeviceClass = this._secondaryDeviceClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = undefined;
      this._secondaryDeviceClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = value.primaryDeviceClass;
      this._secondaryDeviceClass = value.secondaryDeviceClass;
    }
  }

  // primary_device_class - computed: false, optional: false, required: true
  private _primaryDeviceClass?: string; 
  public get primaryDeviceClass() {
    return this.getStringAttribute('primary_device_class');
  }
  public set primaryDeviceClass(value: string) {
    this._primaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceClassInput() {
    return this._primaryDeviceClass;
  }

  // secondary_device_class - computed: false, optional: false, required: true
  private _secondaryDeviceClass?: string; 
  public get secondaryDeviceClass() {
    return this.getStringAttribute('secondary_device_class');
  }
  public set secondaryDeviceClass(value: string) {
    this._secondaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDeviceClassInput() {
    return this._secondaryDeviceClass;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated {
  /**
  * HybridStorage represents hybrid storage tier settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#hybrid_storage DataK8SCephRookIoCephFilesystemV1Manifest#hybrid_storage}
  */
  readonly hybridStorage?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage;
  /**
  * ReplicasPerFailureDomain the number of replica in the specified failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#replicas_per_failure_domain DataK8SCephRookIoCephFilesystemV1Manifest#replicas_per_failure_domain}
  */
  readonly replicasPerFailureDomain?: number;
  /**
  * RequireSafeReplicaSize if false allows you to set replica 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#require_safe_replica_size DataK8SCephRookIoCephFilesystemV1Manifest#require_safe_replica_size}
  */
  readonly requireSafeReplicaSize?: boolean | cdktf.IResolvable;
  /**
  * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#size DataK8SCephRookIoCephFilesystemV1Manifest#size}
  */
  readonly size: number;
  /**
  * SubFailureDomain the name of the sub-failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#sub_failure_domain DataK8SCephRookIoCephFilesystemV1Manifest#sub_failure_domain}
  */
  readonly subFailureDomain?: string;
  /**
  * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#target_size_ratio DataK8SCephRookIoCephFilesystemV1Manifest#target_size_ratio}
  */
  readonly targetSizeRatio?: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_storage: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorageToTerraform(struct!.hybridStorage),
    replicas_per_failure_domain: cdktf.numberToTerraform(struct!.replicasPerFailureDomain),
    require_safe_replica_size: cdktf.booleanToTerraform(struct!.requireSafeReplicaSize),
    size: cdktf.numberToTerraform(struct!.size),
    sub_failure_domain: cdktf.stringToTerraform(struct!.subFailureDomain),
    target_size_ratio: cdktf.numberToTerraform(struct!.targetSizeRatio),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hybrid_storage: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorageToHclTerraform(struct!.hybridStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage",
    },
    replicas_per_failure_domain: {
      value: cdktf.numberToHclTerraform(struct!.replicasPerFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_safe_replica_size: {
      value: cdktf.booleanToHclTerraform(struct!.requireSafeReplicaSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.subFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_size_ratio: {
      value: cdktf.numberToHclTerraform(struct!.targetSizeRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hybridStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridStorage = this._hybridStorage?.internalValue;
    }
    if (this._replicasPerFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasPerFailureDomain = this._replicasPerFailureDomain;
    }
    if (this._requireSafeReplicaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSafeReplicaSize = this._requireSafeReplicaSize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._subFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subFailureDomain = this._subFailureDomain;
    }
    if (this._targetSizeRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSizeRatio = this._targetSizeRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = undefined;
      this._replicasPerFailureDomain = undefined;
      this._requireSafeReplicaSize = undefined;
      this._size = undefined;
      this._subFailureDomain = undefined;
      this._targetSizeRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = value.hybridStorage;
      this._replicasPerFailureDomain = value.replicasPerFailureDomain;
      this._requireSafeReplicaSize = value.requireSafeReplicaSize;
      this._size = value.size;
      this._subFailureDomain = value.subFailureDomain;
      this._targetSizeRatio = value.targetSizeRatio;
    }
  }

  // hybrid_storage - computed: false, optional: true, required: false
  private _hybridStorage = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorageOutputReference(this, "hybrid_storage");
  public get hybridStorage() {
    return this._hybridStorage;
  }
  public putHybridStorage(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedHybridStorage) {
    this._hybridStorage.internalValue = value;
  }
  public resetHybridStorage() {
    this._hybridStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridStorageInput() {
    return this._hybridStorage.internalValue;
  }

  // replicas_per_failure_domain - computed: false, optional: true, required: false
  private _replicasPerFailureDomain?: number; 
  public get replicasPerFailureDomain() {
    return this.getNumberAttribute('replicas_per_failure_domain');
  }
  public set replicasPerFailureDomain(value: number) {
    this._replicasPerFailureDomain = value;
  }
  public resetReplicasPerFailureDomain() {
    this._replicasPerFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerFailureDomainInput() {
    return this._replicasPerFailureDomain;
  }

  // require_safe_replica_size - computed: false, optional: true, required: false
  private _requireSafeReplicaSize?: boolean | cdktf.IResolvable; 
  public get requireSafeReplicaSize() {
    return this.getBooleanAttribute('require_safe_replica_size');
  }
  public set requireSafeReplicaSize(value: boolean | cdktf.IResolvable) {
    this._requireSafeReplicaSize = value;
  }
  public resetRequireSafeReplicaSize() {
    this._requireSafeReplicaSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSafeReplicaSizeInput() {
    return this._requireSafeReplicaSize;
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

  // sub_failure_domain - computed: false, optional: true, required: false
  private _subFailureDomain?: string; 
  public get subFailureDomain() {
    return this.getStringAttribute('sub_failure_domain');
  }
  public set subFailureDomain(value: string) {
    this._subFailureDomain = value;
  }
  public resetSubFailureDomain() {
    this._subFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subFailureDomainInput() {
    return this._subFailureDomain;
  }

  // target_size_ratio - computed: false, optional: true, required: false
  private _targetSizeRatio?: number; 
  public get targetSizeRatio() {
    return this.getNumberAttribute('target_size_ratio');
  }
  public set targetSizeRatio(value: number) {
    this._targetSizeRatio = value;
  }
  public resetTargetSizeRatio() {
    this._targetSizeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeRatioInput() {
    return this._targetSizeRatio;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#disabled DataK8SCephRookIoCephFilesystemV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#interval DataK8SCephRookIoCephFilesystemV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#timeout DataK8SCephRookIoCephFilesystemV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirrorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirrorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._interval = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._interval = value.interval;
      this._timeout = value.timeout;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck {
  /**
  * HealthCheckSpec represents the health check of an object store bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mirror DataK8SCephRookIoCephFilesystemV1Manifest#mirror}
  */
  readonly mirror?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirrorToTerraform(struct!.mirror),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirror.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirror.internalValue = value.mirror;
    }
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools {
  /**
  * The application name to set on the pool. Only expected to be set for rgw pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#application DataK8SCephRookIoCephFilesystemV1Manifest#application}
  */
  readonly application?: string;
  /**
  * DEPRECATED: use Parameters instead, e.g., Parameters['compression_mode'] = 'force' The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force) Do NOT set a default value for kubebuilder as this will override the Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#compression_mode DataK8SCephRookIoCephFilesystemV1Manifest#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * The root of the crush hierarchy utilized by the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#crush_root DataK8SCephRookIoCephFilesystemV1Manifest#crush_root}
  */
  readonly crushRoot?: string;
  /**
  * The device class the OSD should set to for use in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#device_class DataK8SCephRookIoCephFilesystemV1Manifest#device_class}
  */
  readonly deviceClass?: string;
  /**
  * Allow rook operator to change the pool CRUSH tunables once the pool is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#enable_crush_updates DataK8SCephRookIoCephFilesystemV1Manifest#enable_crush_updates}
  */
  readonly enableCrushUpdates?: boolean | cdktf.IResolvable;
  /**
  * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#enable_rbd_stats DataK8SCephRookIoCephFilesystemV1Manifest#enable_rbd_stats}
  */
  readonly enableRbdStats?: boolean | cdktf.IResolvable;
  /**
  * The erasure code settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#erasure_coded DataK8SCephRookIoCephFilesystemV1Manifest#erasure_coded}
  */
  readonly erasureCoded?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded;
  /**
  * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#failure_domain DataK8SCephRookIoCephFilesystemV1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * The mirroring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mirroring DataK8SCephRookIoCephFilesystemV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring;
  /**
  * Name of the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#name DataK8SCephRookIoCephFilesystemV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Parameters is a list of properties to enable on a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#parameters DataK8SCephRookIoCephFilesystemV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The quota settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#quotas DataK8SCephRookIoCephFilesystemV1Manifest#quotas}
  */
  readonly quotas?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas;
  /**
  * The replication settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#replicated DataK8SCephRookIoCephFilesystemV1Manifest#replicated}
  */
  readonly replicated?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated;
  /**
  * The mirroring statusCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#status_check DataK8SCephRookIoCephFilesystemV1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    compression_mode: cdktf.stringToTerraform(struct!.compressionMode),
    crush_root: cdktf.stringToTerraform(struct!.crushRoot),
    device_class: cdktf.stringToTerraform(struct!.deviceClass),
    enable_crush_updates: cdktf.booleanToTerraform(struct!.enableCrushUpdates),
    enable_rbd_stats: cdktf.booleanToTerraform(struct!.enableRbdStats),
    erasure_coded: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCodedToTerraform(struct!.erasureCoded),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    mirroring: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringToTerraform(struct!.mirroring),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    quotas: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotasToTerraform(struct!.quotas),
    replicated: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedToTerraform(struct!.replicated),
    status_check: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckToTerraform(struct!.statusCheck),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_mode: {
      value: cdktf.stringToHclTerraform(struct!.compressionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crush_root: {
      value: cdktf.stringToHclTerraform(struct!.crushRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_class: {
      value: cdktf.stringToHclTerraform(struct!.deviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_crush_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableCrushUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rbd_stats: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbdStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    erasure_coded: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCodedToHclTerraform(struct!.erasureCoded),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    quotas: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas",
    },
    replicated: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedToHclTerraform(struct!.replicated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated",
    },
    status_check: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._compressionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMode = this._compressionMode;
    }
    if (this._crushRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.crushRoot = this._crushRoot;
    }
    if (this._deviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceClass = this._deviceClass;
    }
    if (this._enableCrushUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrushUpdates = this._enableCrushUpdates;
    }
    if (this._enableRbdStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbdStats = this._enableRbdStats;
    }
    if (this._erasureCoded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.erasureCoded = this._erasureCoded?.internalValue;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._mirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroring = this._mirroring?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._quotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotas = this._quotas?.internalValue;
    }
    if (this._replicated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicated = this._replicated?.internalValue;
    }
    if (this._statusCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCheck = this._statusCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._compressionMode = undefined;
      this._crushRoot = undefined;
      this._deviceClass = undefined;
      this._enableCrushUpdates = undefined;
      this._enableRbdStats = undefined;
      this._erasureCoded.internalValue = undefined;
      this._failureDomain = undefined;
      this._mirroring.internalValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._quotas.internalValue = undefined;
      this._replicated.internalValue = undefined;
      this._statusCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._compressionMode = value.compressionMode;
      this._crushRoot = value.crushRoot;
      this._deviceClass = value.deviceClass;
      this._enableCrushUpdates = value.enableCrushUpdates;
      this._enableRbdStats = value.enableRbdStats;
      this._erasureCoded.internalValue = value.erasureCoded;
      this._failureDomain = value.failureDomain;
      this._mirroring.internalValue = value.mirroring;
      this._name = value.name;
      this._parameters = value.parameters;
      this._quotas.internalValue = value.quotas;
      this._replicated.internalValue = value.replicated;
      this._statusCheck.internalValue = value.statusCheck;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // compression_mode - computed: false, optional: true, required: false
  private _compressionMode?: string; 
  public get compressionMode() {
    return this.getStringAttribute('compression_mode');
  }
  public set compressionMode(value: string) {
    this._compressionMode = value;
  }
  public resetCompressionMode() {
    this._compressionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionModeInput() {
    return this._compressionMode;
  }

  // crush_root - computed: false, optional: true, required: false
  private _crushRoot?: string; 
  public get crushRoot() {
    return this.getStringAttribute('crush_root');
  }
  public set crushRoot(value: string) {
    this._crushRoot = value;
  }
  public resetCrushRoot() {
    this._crushRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crushRootInput() {
    return this._crushRoot;
  }

  // device_class - computed: false, optional: true, required: false
  private _deviceClass?: string; 
  public get deviceClass() {
    return this.getStringAttribute('device_class');
  }
  public set deviceClass(value: string) {
    this._deviceClass = value;
  }
  public resetDeviceClass() {
    this._deviceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassInput() {
    return this._deviceClass;
  }

  // enable_crush_updates - computed: false, optional: true, required: false
  private _enableCrushUpdates?: boolean | cdktf.IResolvable; 
  public get enableCrushUpdates() {
    return this.getBooleanAttribute('enable_crush_updates');
  }
  public set enableCrushUpdates(value: boolean | cdktf.IResolvable) {
    this._enableCrushUpdates = value;
  }
  public resetEnableCrushUpdates() {
    this._enableCrushUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrushUpdatesInput() {
    return this._enableCrushUpdates;
  }

  // enable_rbd_stats - computed: false, optional: true, required: false
  private _enableRbdStats?: boolean | cdktf.IResolvable; 
  public get enableRbdStats() {
    return this.getBooleanAttribute('enable_rbd_stats');
  }
  public set enableRbdStats(value: boolean | cdktf.IResolvable) {
    this._enableRbdStats = value;
  }
  public resetEnableRbdStats() {
    this._enableRbdStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbdStatsInput() {
    return this._enableRbdStats;
  }

  // erasure_coded - computed: false, optional: true, required: false
  private _erasureCoded = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCodedOutputReference(this, "erasure_coded");
  public get erasureCoded() {
    return this._erasureCoded;
  }
  public putErasureCoded(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsErasureCoded) {
    this._erasureCoded.internalValue = value;
  }
  public resetErasureCoded() {
    this._erasureCoded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erasureCodedInput() {
    return this._erasureCoded.internalValue;
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

  // mirroring - computed: false, optional: true, required: false
  private _mirroring = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsMirroring) {
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // replicated - computed: false, optional: true, required: false
  private _replicated = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicatedOutputReference(this, "replicated");
  public get replicated() {
    return this._replicated;
  }
  public putReplicated(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsReplicated) {
    this._replicated.internalValue = value;
  }
  public resetReplicated() {
    this._replicated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedInput() {
    return this._replicated.internalValue;
  }

  // status_check - computed: false, optional: true, required: false
  private _statusCheck = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsStatusCheck) {
    this._statusCheck.internalValue = value;
  }
  public resetStatusCheck() {
    this._statusCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck.internalValue;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded {
  /**
  * The algorithm for erasure coding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#algorithm DataK8SCephRookIoCephFilesystemV1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type). This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#coding_chunks DataK8SCephRookIoCephFilesystemV1Manifest#coding_chunks}
  */
  readonly codingChunks: number;
  /**
  * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type). The number of chunks required to recover an object when any single OSD is lost is the same as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#data_chunks DataK8SCephRookIoCephFilesystemV1Manifest#data_chunks}
  */
  readonly dataChunks: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCodedToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    coding_chunks: cdktf.numberToTerraform(struct!.codingChunks),
    data_chunks: cdktf.numberToTerraform(struct!.dataChunks),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCodedToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coding_chunks: {
      value: cdktf.numberToHclTerraform(struct!.codingChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_chunks: {
      value: cdktf.numberToHclTerraform(struct!.dataChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCodedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._codingChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.codingChunks = this._codingChunks;
    }
    if (this._dataChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataChunks = this._dataChunks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._codingChunks = undefined;
      this._dataChunks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._codingChunks = value.codingChunks;
      this._dataChunks = value.dataChunks;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // coding_chunks - computed: false, optional: false, required: true
  private _codingChunks?: number; 
  public get codingChunks() {
    return this.getNumberAttribute('coding_chunks');
  }
  public set codingChunks(value: number) {
    this._codingChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codingChunksInput() {
    return this._codingChunks;
  }

  // data_chunks - computed: false, optional: false, required: true
  private _dataChunks?: number; 
  public get dataChunks() {
    return this.getNumberAttribute('data_chunks');
  }
  public set dataChunks(value: number) {
    this._dataChunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataChunksInput() {
    return this._dataChunks;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers {
  /**
  * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#secret_names DataK8SCephRookIoCephFilesystemV1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeersToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeersToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNames = this._secretNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretNames = value.secretNames;
    }
  }

  // secret_names - computed: false, optional: true, required: false
  private _secretNames?: string[]; 
  public get secretNames() {
    return this.getListAttribute('secret_names');
  }
  public set secretNames(value: string[]) {
    this._secretNames = value;
  }
  public resetSecretNames() {
    this._secretNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamesInput() {
    return this._secretNames;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#interval DataK8SCephRookIoCephFilesystemV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#path DataK8SCephRookIoCephFilesystemV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#start_time DataK8SCephRookIoCephFilesystemV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring {
  /**
  * Enabled whether this pool is mirrored or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#enabled DataK8SCephRookIoCephFilesystemV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode is the mirroring mode: either pool or image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mode DataK8SCephRookIoCephFilesystemV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Peers represents the peers spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#peers DataK8SCephRookIoCephFilesystemV1Manifest#peers}
  */
  readonly peers?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#snapshot_schedules DataK8SCephRookIoCephFilesystemV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    peers: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeersToTerraform(struct!.peers),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeersToHclTerraform(struct!.peers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._snapshotSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotSchedules = this._snapshotSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
      this._peers.internalValue = undefined;
      this._snapshotSchedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mode = value.mode;
      this._peers.internalValue = value.peers;
      this._snapshotSchedules.internalValue = value.snapshotSchedules;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeersOutputReference(this, "peers");
  public get peers() {
    return this._peers;
  }
  public putPeers(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringPeers) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // snapshot_schedules - computed: false, optional: true, required: false
  private _snapshotSchedules = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas {
  /**
  * MaxBytes represents the quota in bytes Deprecated in favor of MaxSize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#max_bytes DataK8SCephRookIoCephFilesystemV1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * MaxObjects represents the quota in objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#max_objects DataK8SCephRookIoCephFilesystemV1Manifest#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * MaxSize represents the quota in bytes as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#max_size DataK8SCephRookIoCephFilesystemV1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotasToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_objects: cdktf.numberToTerraform(struct!.maxObjects),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotasToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_objects: {
      value: cdktf.numberToHclTerraform(struct!.maxObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjects = this._maxObjects;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytes = undefined;
      this._maxObjects = undefined;
      this._maxSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytes = value.maxBytes;
      this._maxObjects = value.maxObjects;
      this._maxSize = value.maxSize;
    }
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_objects - computed: false, optional: true, required: false
  private _maxObjects?: number; 
  public get maxObjects() {
    return this.getNumberAttribute('max_objects');
  }
  public set maxObjects(value: number) {
    this._maxObjects = value;
  }
  public resetMaxObjects() {
    this._maxObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectsInput() {
    return this._maxObjects;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage {
  /**
  * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#primary_device_class DataK8SCephRookIoCephFilesystemV1Manifest#primary_device_class}
  */
  readonly primaryDeviceClass: string;
  /**
  * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#secondary_device_class DataK8SCephRookIoCephFilesystemV1Manifest#secondary_device_class}
  */
  readonly secondaryDeviceClass: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorageToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_device_class: cdktf.stringToTerraform(struct!.primaryDeviceClass),
    secondary_device_class: cdktf.stringToTerraform(struct!.secondaryDeviceClass),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorageToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.primaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_device_class: {
      value: cdktf.stringToHclTerraform(struct!.secondaryDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDeviceClass = this._primaryDeviceClass;
    }
    if (this._secondaryDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDeviceClass = this._secondaryDeviceClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = undefined;
      this._secondaryDeviceClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryDeviceClass = value.primaryDeviceClass;
      this._secondaryDeviceClass = value.secondaryDeviceClass;
    }
  }

  // primary_device_class - computed: false, optional: false, required: true
  private _primaryDeviceClass?: string; 
  public get primaryDeviceClass() {
    return this.getStringAttribute('primary_device_class');
  }
  public set primaryDeviceClass(value: string) {
    this._primaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceClassInput() {
    return this._primaryDeviceClass;
  }

  // secondary_device_class - computed: false, optional: false, required: true
  private _secondaryDeviceClass?: string; 
  public get secondaryDeviceClass() {
    return this.getStringAttribute('secondary_device_class');
  }
  public set secondaryDeviceClass(value: string) {
    this._secondaryDeviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDeviceClassInput() {
    return this._secondaryDeviceClass;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated {
  /**
  * HybridStorage represents hybrid storage tier settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#hybrid_storage DataK8SCephRookIoCephFilesystemV1Manifest#hybrid_storage}
  */
  readonly hybridStorage?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage;
  /**
  * ReplicasPerFailureDomain the number of replica in the specified failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#replicas_per_failure_domain DataK8SCephRookIoCephFilesystemV1Manifest#replicas_per_failure_domain}
  */
  readonly replicasPerFailureDomain?: number;
  /**
  * RequireSafeReplicaSize if false allows you to set replica 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#require_safe_replica_size DataK8SCephRookIoCephFilesystemV1Manifest#require_safe_replica_size}
  */
  readonly requireSafeReplicaSize?: boolean | cdktf.IResolvable;
  /**
  * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#size DataK8SCephRookIoCephFilesystemV1Manifest#size}
  */
  readonly size: number;
  /**
  * SubFailureDomain the name of the sub-failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#sub_failure_domain DataK8SCephRookIoCephFilesystemV1Manifest#sub_failure_domain}
  */
  readonly subFailureDomain?: string;
  /**
  * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#target_size_ratio DataK8SCephRookIoCephFilesystemV1Manifest#target_size_ratio}
  */
  readonly targetSizeRatio?: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_storage: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorageToTerraform(struct!.hybridStorage),
    replicas_per_failure_domain: cdktf.numberToTerraform(struct!.replicasPerFailureDomain),
    require_safe_replica_size: cdktf.booleanToTerraform(struct!.requireSafeReplicaSize),
    size: cdktf.numberToTerraform(struct!.size),
    sub_failure_domain: cdktf.stringToTerraform(struct!.subFailureDomain),
    target_size_ratio: cdktf.numberToTerraform(struct!.targetSizeRatio),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hybrid_storage: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorageToHclTerraform(struct!.hybridStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage",
    },
    replicas_per_failure_domain: {
      value: cdktf.numberToHclTerraform(struct!.replicasPerFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_safe_replica_size: {
      value: cdktf.booleanToHclTerraform(struct!.requireSafeReplicaSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.subFailureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_size_ratio: {
      value: cdktf.numberToHclTerraform(struct!.targetSizeRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hybridStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridStorage = this._hybridStorage?.internalValue;
    }
    if (this._replicasPerFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasPerFailureDomain = this._replicasPerFailureDomain;
    }
    if (this._requireSafeReplicaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSafeReplicaSize = this._requireSafeReplicaSize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._subFailureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subFailureDomain = this._subFailureDomain;
    }
    if (this._targetSizeRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSizeRatio = this._targetSizeRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = undefined;
      this._replicasPerFailureDomain = undefined;
      this._requireSafeReplicaSize = undefined;
      this._size = undefined;
      this._subFailureDomain = undefined;
      this._targetSizeRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hybridStorage.internalValue = value.hybridStorage;
      this._replicasPerFailureDomain = value.replicasPerFailureDomain;
      this._requireSafeReplicaSize = value.requireSafeReplicaSize;
      this._size = value.size;
      this._subFailureDomain = value.subFailureDomain;
      this._targetSizeRatio = value.targetSizeRatio;
    }
  }

  // hybrid_storage - computed: false, optional: true, required: false
  private _hybridStorage = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorageOutputReference(this, "hybrid_storage");
  public get hybridStorage() {
    return this._hybridStorage;
  }
  public putHybridStorage(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedHybridStorage) {
    this._hybridStorage.internalValue = value;
  }
  public resetHybridStorage() {
    this._hybridStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridStorageInput() {
    return this._hybridStorage.internalValue;
  }

  // replicas_per_failure_domain - computed: false, optional: true, required: false
  private _replicasPerFailureDomain?: number; 
  public get replicasPerFailureDomain() {
    return this.getNumberAttribute('replicas_per_failure_domain');
  }
  public set replicasPerFailureDomain(value: number) {
    this._replicasPerFailureDomain = value;
  }
  public resetReplicasPerFailureDomain() {
    this._replicasPerFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerFailureDomainInput() {
    return this._replicasPerFailureDomain;
  }

  // require_safe_replica_size - computed: false, optional: true, required: false
  private _requireSafeReplicaSize?: boolean | cdktf.IResolvable; 
  public get requireSafeReplicaSize() {
    return this.getBooleanAttribute('require_safe_replica_size');
  }
  public set requireSafeReplicaSize(value: boolean | cdktf.IResolvable) {
    this._requireSafeReplicaSize = value;
  }
  public resetRequireSafeReplicaSize() {
    this._requireSafeReplicaSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSafeReplicaSizeInput() {
    return this._requireSafeReplicaSize;
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

  // sub_failure_domain - computed: false, optional: true, required: false
  private _subFailureDomain?: string; 
  public get subFailureDomain() {
    return this.getStringAttribute('sub_failure_domain');
  }
  public set subFailureDomain(value: string) {
    this._subFailureDomain = value;
  }
  public resetSubFailureDomain() {
    this._subFailureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subFailureDomainInput() {
    return this._subFailureDomain;
  }

  // target_size_ratio - computed: false, optional: true, required: false
  private _targetSizeRatio?: number; 
  public get targetSizeRatio() {
    return this.getNumberAttribute('target_size_ratio');
  }
  public set targetSizeRatio(value: number) {
    this._targetSizeRatio = value;
  }
  public resetTargetSizeRatio() {
    this._targetSizeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeRatioInput() {
    return this._targetSizeRatio;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#disabled DataK8SCephRookIoCephFilesystemV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#interval DataK8SCephRookIoCephFilesystemV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#timeout DataK8SCephRookIoCephFilesystemV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirrorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirrorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._interval = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._interval = value.interval;
      this._timeout = value.timeout;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck {
  /**
  * HealthCheckSpec represents the health check of an object store bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mirror DataK8SCephRookIoCephFilesystemV1Manifest#mirror}
  */
  readonly mirror?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirrorToTerraform(struct!.mirror),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirror.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirror.internalValue = value.mirror;
    }
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool {
  /**
  * The application name to set on the pool. Only expected to be set for rgw pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#application DataK8SCephRookIoCephFilesystemV1Manifest#application}
  */
  readonly application?: string;
  /**
  * DEPRECATED: use Parameters instead, e.g., Parameters['compression_mode'] = 'force' The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force) Do NOT set a default value for kubebuilder as this will override the Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#compression_mode DataK8SCephRookIoCephFilesystemV1Manifest#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * The root of the crush hierarchy utilized by the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#crush_root DataK8SCephRookIoCephFilesystemV1Manifest#crush_root}
  */
  readonly crushRoot?: string;
  /**
  * The device class the OSD should set to for use in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#device_class DataK8SCephRookIoCephFilesystemV1Manifest#device_class}
  */
  readonly deviceClass?: string;
  /**
  * Allow rook operator to change the pool CRUSH tunables once the pool is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#enable_crush_updates DataK8SCephRookIoCephFilesystemV1Manifest#enable_crush_updates}
  */
  readonly enableCrushUpdates?: boolean | cdktf.IResolvable;
  /**
  * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#enable_rbd_stats DataK8SCephRookIoCephFilesystemV1Manifest#enable_rbd_stats}
  */
  readonly enableRbdStats?: boolean | cdktf.IResolvable;
  /**
  * The erasure code settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#erasure_coded DataK8SCephRookIoCephFilesystemV1Manifest#erasure_coded}
  */
  readonly erasureCoded?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded;
  /**
  * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#failure_domain DataK8SCephRookIoCephFilesystemV1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * The mirroring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mirroring DataK8SCephRookIoCephFilesystemV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring;
  /**
  * Parameters is a list of properties to enable on a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#parameters DataK8SCephRookIoCephFilesystemV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The quota settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#quotas DataK8SCephRookIoCephFilesystemV1Manifest#quotas}
  */
  readonly quotas?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas;
  /**
  * The replication settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#replicated DataK8SCephRookIoCephFilesystemV1Manifest#replicated}
  */
  readonly replicated?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated;
  /**
  * The mirroring statusCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#status_check DataK8SCephRookIoCephFilesystemV1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    compression_mode: cdktf.stringToTerraform(struct!.compressionMode),
    crush_root: cdktf.stringToTerraform(struct!.crushRoot),
    device_class: cdktf.stringToTerraform(struct!.deviceClass),
    enable_crush_updates: cdktf.booleanToTerraform(struct!.enableCrushUpdates),
    enable_rbd_stats: cdktf.booleanToTerraform(struct!.enableRbdStats),
    erasure_coded: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCodedToTerraform(struct!.erasureCoded),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    mirroring: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringToTerraform(struct!.mirroring),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    quotas: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotasToTerraform(struct!.quotas),
    replicated: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedToTerraform(struct!.replicated),
    status_check: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckToTerraform(struct!.statusCheck),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_mode: {
      value: cdktf.stringToHclTerraform(struct!.compressionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crush_root: {
      value: cdktf.stringToHclTerraform(struct!.crushRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_class: {
      value: cdktf.stringToHclTerraform(struct!.deviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_crush_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableCrushUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rbd_stats: {
      value: cdktf.booleanToHclTerraform(struct!.enableRbdStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    erasure_coded: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCodedToHclTerraform(struct!.erasureCoded),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    quotas: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas",
    },
    replicated: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedToHclTerraform(struct!.replicated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated",
    },
    status_check: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._compressionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMode = this._compressionMode;
    }
    if (this._crushRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.crushRoot = this._crushRoot;
    }
    if (this._deviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceClass = this._deviceClass;
    }
    if (this._enableCrushUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrushUpdates = this._enableCrushUpdates;
    }
    if (this._enableRbdStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRbdStats = this._enableRbdStats;
    }
    if (this._erasureCoded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.erasureCoded = this._erasureCoded?.internalValue;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._mirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroring = this._mirroring?.internalValue;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._quotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotas = this._quotas?.internalValue;
    }
    if (this._replicated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicated = this._replicated?.internalValue;
    }
    if (this._statusCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCheck = this._statusCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._compressionMode = undefined;
      this._crushRoot = undefined;
      this._deviceClass = undefined;
      this._enableCrushUpdates = undefined;
      this._enableRbdStats = undefined;
      this._erasureCoded.internalValue = undefined;
      this._failureDomain = undefined;
      this._mirroring.internalValue = undefined;
      this._parameters = undefined;
      this._quotas.internalValue = undefined;
      this._replicated.internalValue = undefined;
      this._statusCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._compressionMode = value.compressionMode;
      this._crushRoot = value.crushRoot;
      this._deviceClass = value.deviceClass;
      this._enableCrushUpdates = value.enableCrushUpdates;
      this._enableRbdStats = value.enableRbdStats;
      this._erasureCoded.internalValue = value.erasureCoded;
      this._failureDomain = value.failureDomain;
      this._mirroring.internalValue = value.mirroring;
      this._parameters = value.parameters;
      this._quotas.internalValue = value.quotas;
      this._replicated.internalValue = value.replicated;
      this._statusCheck.internalValue = value.statusCheck;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // compression_mode - computed: false, optional: true, required: false
  private _compressionMode?: string; 
  public get compressionMode() {
    return this.getStringAttribute('compression_mode');
  }
  public set compressionMode(value: string) {
    this._compressionMode = value;
  }
  public resetCompressionMode() {
    this._compressionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionModeInput() {
    return this._compressionMode;
  }

  // crush_root - computed: false, optional: true, required: false
  private _crushRoot?: string; 
  public get crushRoot() {
    return this.getStringAttribute('crush_root');
  }
  public set crushRoot(value: string) {
    this._crushRoot = value;
  }
  public resetCrushRoot() {
    this._crushRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crushRootInput() {
    return this._crushRoot;
  }

  // device_class - computed: false, optional: true, required: false
  private _deviceClass?: string; 
  public get deviceClass() {
    return this.getStringAttribute('device_class');
  }
  public set deviceClass(value: string) {
    this._deviceClass = value;
  }
  public resetDeviceClass() {
    this._deviceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassInput() {
    return this._deviceClass;
  }

  // enable_crush_updates - computed: false, optional: true, required: false
  private _enableCrushUpdates?: boolean | cdktf.IResolvable; 
  public get enableCrushUpdates() {
    return this.getBooleanAttribute('enable_crush_updates');
  }
  public set enableCrushUpdates(value: boolean | cdktf.IResolvable) {
    this._enableCrushUpdates = value;
  }
  public resetEnableCrushUpdates() {
    this._enableCrushUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrushUpdatesInput() {
    return this._enableCrushUpdates;
  }

  // enable_rbd_stats - computed: false, optional: true, required: false
  private _enableRbdStats?: boolean | cdktf.IResolvable; 
  public get enableRbdStats() {
    return this.getBooleanAttribute('enable_rbd_stats');
  }
  public set enableRbdStats(value: boolean | cdktf.IResolvable) {
    this._enableRbdStats = value;
  }
  public resetEnableRbdStats() {
    this._enableRbdStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbdStatsInput() {
    return this._enableRbdStats;
  }

  // erasure_coded - computed: false, optional: true, required: false
  private _erasureCoded = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCodedOutputReference(this, "erasure_coded");
  public get erasureCoded() {
    return this._erasureCoded;
  }
  public putErasureCoded(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolErasureCoded) {
    this._erasureCoded.internalValue = value;
  }
  public resetErasureCoded() {
    this._erasureCoded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erasureCodedInput() {
    return this._erasureCoded.internalValue;
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

  // mirroring - computed: false, optional: true, required: false
  private _mirroring = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolMirroring) {
    this._mirroring.internalValue = value;
  }
  public resetMirroring() {
    this._mirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringInput() {
    return this._mirroring.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // replicated - computed: false, optional: true, required: false
  private _replicated = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicatedOutputReference(this, "replicated");
  public get replicated() {
    return this._replicated;
  }
  public putReplicated(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolReplicated) {
    this._replicated.internalValue = value;
  }
  public resetReplicated() {
    this._replicated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedInput() {
    return this._replicated.internalValue;
  }

  // status_check - computed: false, optional: true, required: false
  private _statusCheck = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolStatusCheck) {
    this._statusCheck.internalValue = value;
  }
  public resetStatusCheck() {
    this._statusCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#command DataK8SCephRookIoCephFilesystemV1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExecToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExecToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#port DataK8SCephRookIoCephFilesystemV1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#service DataK8SCephRookIoCephFilesystemV1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpcToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpcToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#name DataK8SCephRookIoCephFilesystemV1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#value DataK8SCephRookIoCephFilesystemV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#host DataK8SCephRookIoCephFilesystemV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#http_headers DataK8SCephRookIoCephFilesystemV1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#path DataK8SCephRookIoCephFilesystemV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#port DataK8SCephRookIoCephFilesystemV1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#scheme DataK8SCephRookIoCephFilesystemV1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#host DataK8SCephRookIoCephFilesystemV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#port DataK8SCephRookIoCephFilesystemV1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocketToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocketToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#exec DataK8SCephRookIoCephFilesystemV1Manifest#exec}
  */
  readonly exec?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#failure_threshold DataK8SCephRookIoCephFilesystemV1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#grpc DataK8SCephRookIoCephFilesystemV1Manifest#grpc}
  */
  readonly grpc?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#http_get DataK8SCephRookIoCephFilesystemV1Manifest#http_get}
  */
  readonly httpGet?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#initial_delay_seconds DataK8SCephRookIoCephFilesystemV1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#period_seconds DataK8SCephRookIoCephFilesystemV1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#success_threshold DataK8SCephRookIoCephFilesystemV1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#tcp_socket DataK8SCephRookIoCephFilesystemV1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#termination_grace_period_seconds DataK8SCephRookIoCephFilesystemV1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#timeout_seconds DataK8SCephRookIoCephFilesystemV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc",
    },
    http_get: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe {
  /**
  * Disabled determines whether probe is disable or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#disabled DataK8SCephRookIoCephFilesystemV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#probe DataK8SCephRookIoCephFilesystemV1Manifest#probe}
  */
  readonly probe?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    probe: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeToTerraform(struct!.probe),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probe: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeToHclTerraform(struct!.probe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._probe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._probe.internalValue = value.probe;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_fields DataK8SCephRookIoCephFilesystemV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#preference DataK8SCephRookIoCephFilesystemV1Manifest#preference}
  */
  readonly preference: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#weight DataK8SCephRookIoCephFilesystemV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_fields DataK8SCephRookIoCephFilesystemV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#node_selector_terms DataK8SCephRookIoCephFilesystemV1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCephRookIoCephFilesystemV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SCephRookIoCephFilesystemV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#label_selector DataK8SCephRookIoCephFilesystemV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespace_selector DataK8SCephRookIoCephFilesystemV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespaces DataK8SCephRookIoCephFilesystemV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#topology_key DataK8SCephRookIoCephFilesystemV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#pod_affinity_term DataK8SCephRookIoCephFilesystemV1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#weight DataK8SCephRookIoCephFilesystemV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#label_selector DataK8SCephRookIoCephFilesystemV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespace_selector DataK8SCephRookIoCephFilesystemV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespaces DataK8SCephRookIoCephFilesystemV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#topology_key DataK8SCephRookIoCephFilesystemV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCephRookIoCephFilesystemV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SCephRookIoCephFilesystemV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#label_selector DataK8SCephRookIoCephFilesystemV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespace_selector DataK8SCephRookIoCephFilesystemV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespaces DataK8SCephRookIoCephFilesystemV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#topology_key DataK8SCephRookIoCephFilesystemV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#pod_affinity_term DataK8SCephRookIoCephFilesystemV1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#weight DataK8SCephRookIoCephFilesystemV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#label_selector DataK8SCephRookIoCephFilesystemV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mismatch_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespace_selector DataK8SCephRookIoCephFilesystemV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#namespaces DataK8SCephRookIoCephFilesystemV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#topology_key DataK8SCephRookIoCephFilesystemV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCephRookIoCephFilesystemV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SCephRookIoCephFilesystemV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#effect DataK8SCephRookIoCephFilesystemV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#toleration_seconds DataK8SCephRookIoCephFilesystemV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#value DataK8SCephRookIoCephFilesystemV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#key DataK8SCephRookIoCephFilesystemV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#operator DataK8SCephRookIoCephFilesystemV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#values DataK8SCephRookIoCephFilesystemV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_expressions DataK8SCephRookIoCephFilesystemV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_labels DataK8SCephRookIoCephFilesystemV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#label_selector DataK8SCephRookIoCephFilesystemV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#match_label_keys DataK8SCephRookIoCephFilesystemV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#max_skew DataK8SCephRookIoCephFilesystemV1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#min_domains DataK8SCephRookIoCephFilesystemV1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#node_affinity_policy DataK8SCephRookIoCephFilesystemV1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#node_taints_policy DataK8SCephRookIoCephFilesystemV1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#topology_key DataK8SCephRookIoCephFilesystemV1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#when_unsatisfiable DataK8SCephRookIoCephFilesystemV1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#node_affinity DataK8SCephRookIoCephFilesystemV1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#pod_affinity DataK8SCephRookIoCephFilesystemV1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#pod_anti_affinity DataK8SCephRookIoCephFilesystemV1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#tolerations DataK8SCephRookIoCephFilesystemV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#topology_spread_constraints DataK8SCephRookIoCephFilesystemV1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityToTerraform(struct!.podAntiAffinity),
    tolerations: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#name DataK8SCephRookIoCephFilesystemV1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#request DataK8SCephRookIoCephFilesystemV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#claims DataK8SCephRookIoCephFilesystemV1Manifest#claims}
  */
  readonly claims?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#limits DataK8SCephRookIoCephFilesystemV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#requests DataK8SCephRookIoCephFilesystemV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#command DataK8SCephRookIoCephFilesystemV1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExecToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExecToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#port DataK8SCephRookIoCephFilesystemV1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#service DataK8SCephRookIoCephFilesystemV1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpcToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpcToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#name DataK8SCephRookIoCephFilesystemV1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#value DataK8SCephRookIoCephFilesystemV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#host DataK8SCephRookIoCephFilesystemV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#http_headers DataK8SCephRookIoCephFilesystemV1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#path DataK8SCephRookIoCephFilesystemV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#port DataK8SCephRookIoCephFilesystemV1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#scheme DataK8SCephRookIoCephFilesystemV1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#host DataK8SCephRookIoCephFilesystemV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#port DataK8SCephRookIoCephFilesystemV1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocketToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocketToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#exec DataK8SCephRookIoCephFilesystemV1Manifest#exec}
  */
  readonly exec?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#failure_threshold DataK8SCephRookIoCephFilesystemV1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#grpc DataK8SCephRookIoCephFilesystemV1Manifest#grpc}
  */
  readonly grpc?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#http_get DataK8SCephRookIoCephFilesystemV1Manifest#http_get}
  */
  readonly httpGet?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#initial_delay_seconds DataK8SCephRookIoCephFilesystemV1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#period_seconds DataK8SCephRookIoCephFilesystemV1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#success_threshold DataK8SCephRookIoCephFilesystemV1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#tcp_socket DataK8SCephRookIoCephFilesystemV1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#termination_grace_period_seconds DataK8SCephRookIoCephFilesystemV1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#timeout_seconds DataK8SCephRookIoCephFilesystemV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc",
    },
    http_get: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe {
  /**
  * Disabled determines whether probe is disable or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#disabled DataK8SCephRookIoCephFilesystemV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#probe DataK8SCephRookIoCephFilesystemV1Manifest#probe}
  */
  readonly probe?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    probe: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeToTerraform(struct!.probe),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probe: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeToHclTerraform(struct!.probe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._probe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._probe.internalValue = value.probe;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer {
  /**
  * The number of metadata servers that are active. The remaining servers in the cluster will be in standby mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#active_count DataK8SCephRookIoCephFilesystemV1Manifest#active_count}
  */
  readonly activeCount: number;
  /**
  * Whether each active MDS instance will have an active standby with a warm metadata cache for faster failover. If false, standbys will still be available, but will not have a warm metadata cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#active_standby DataK8SCephRookIoCephFilesystemV1Manifest#active_standby}
  */
  readonly activeStandby?: boolean | cdktf.IResolvable;
  /**
  * The annotations-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#annotations DataK8SCephRookIoCephFilesystemV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The labels-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#labels DataK8SCephRookIoCephFilesystemV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#liveness_probe DataK8SCephRookIoCephFilesystemV1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#placement DataK8SCephRookIoCephFilesystemV1Manifest#placement}
  */
  readonly placement?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement;
  /**
  * PriorityClassName sets priority classes on components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#priority_class_name DataK8SCephRookIoCephFilesystemV1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * The resource requirements for the mds pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#resources DataK8SCephRookIoCephFilesystemV1Manifest#resources}
  */
  readonly resources?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources;
  /**
  * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#startup_probe DataK8SCephRookIoCephFilesystemV1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_count: cdktf.numberToTerraform(struct!.activeCount),
    active_standby: cdktf.booleanToTerraform(struct!.activeStandby),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    liveness_probe: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeToTerraform(struct!.livenessProbe),
    placement: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementToTerraform(struct!.placement),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    resources: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesToTerraform(struct!.resources),
    startup_probe: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeToTerraform(struct!.startupProbe),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_count: {
      value: cdktf.numberToHclTerraform(struct!.activeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_standby: {
      value: cdktf.booleanToHclTerraform(struct!.activeStandby),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    liveness_probe: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe",
    },
    placement: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources",
    },
    startup_probe: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeCount = this._activeCount;
    }
    if (this._activeStandby !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeStandby = this._activeStandby;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeCount = undefined;
      this._activeStandby = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._livenessProbe.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._priorityClassName = undefined;
      this._resources.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeCount = value.activeCount;
      this._activeStandby = value.activeStandby;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._placement.internalValue = value.placement;
      this._priorityClassName = value.priorityClassName;
      this._resources.internalValue = value.resources;
      this._startupProbe.internalValue = value.startupProbe;
    }
  }

  // active_count - computed: false, optional: false, required: true
  private _activeCount?: number; 
  public get activeCount() {
    return this.getNumberAttribute('active_count');
  }
  public set activeCount(value: number) {
    this._activeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeCountInput() {
    return this._activeCount;
  }

  // active_standby - computed: false, optional: true, required: false
  private _activeStandby?: boolean | cdktf.IResolvable; 
  public get activeStandby() {
    return this.getBooleanAttribute('active_standby');
  }
  public set activeStandby(value: boolean | cdktf.IResolvable) {
    this._activeStandby = value;
  }
  public resetActiveStandby() {
    this._activeStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeStandbyInput() {
    return this._activeStandby;
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

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers {
  /**
  * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#secret_names DataK8SCephRookIoCephFilesystemV1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeersToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeersToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNames = this._secretNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretNames = value.secretNames;
    }
  }

  // secret_names - computed: false, optional: true, required: false
  private _secretNames?: string[]; 
  public get secretNames() {
    return this.getListAttribute('secret_names');
  }
  public set secretNames(value: string[]) {
    this._secretNames = value;
  }
  public resetSecretNames() {
    this._secretNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamesInput() {
    return this._secretNames;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention {
  /**
  * Duration represents the retention duration for a snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#duration DataK8SCephRookIoCephFilesystemV1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Path is the path to snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#path DataK8SCephRookIoCephFilesystemV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._path = value.path;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#interval DataK8SCephRookIoCephFilesystemV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#path DataK8SCephRookIoCephFilesystemV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#start_time DataK8SCephRookIoCephFilesystemV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring {
  /**
  * Enabled whether this filesystem is mirrored or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#enabled DataK8SCephRookIoCephFilesystemV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Peers represents the peers spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#peers DataK8SCephRookIoCephFilesystemV1Manifest#peers}
  */
  readonly peers?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers;
  /**
  * Retention is the retention policy for a snapshot schedule One path has exactly one retention policy. A policy can however contain multiple count-time period pairs in order to specify complex retention policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#snapshot_retention DataK8SCephRookIoCephFilesystemV1Manifest#snapshot_retention}
  */
  readonly snapshotRetention?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention[] | cdktf.IResolvable;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored filesystems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#snapshot_schedules DataK8SCephRookIoCephFilesystemV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    peers: dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeersToTerraform(struct!.peers),
    snapshot_retention: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionToTerraform, false)(struct!.snapshotRetention),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peers: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeersToHclTerraform(struct!.peers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers",
    },
    snapshot_retention: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionToHclTerraform, false)(struct!.snapshotRetention),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionList",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._snapshotRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetention = this._snapshotRetention?.internalValue;
    }
    if (this._snapshotSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotSchedules = this._snapshotSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._peers.internalValue = undefined;
      this._snapshotRetention.internalValue = undefined;
      this._snapshotSchedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._peers.internalValue = value.peers;
      this._snapshotRetention.internalValue = value.snapshotRetention;
      this._snapshotSchedules.internalValue = value.snapshotSchedules;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeersOutputReference(this, "peers");
  public get peers() {
    return this._peers;
  }
  public putPeers(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringPeers) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // snapshot_retention - computed: false, optional: true, required: false
  private _snapshotRetention = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetentionList(this, "snapshot_retention", false);
  public get snapshotRetention() {
    return this._snapshotRetention;
  }
  public putSnapshotRetention(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotRetention[] | cdktf.IResolvable) {
    this._snapshotRetention.internalValue = value;
  }
  public resetSnapshotRetention() {
    this._snapshotRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionInput() {
    return this._snapshotRetention.internalValue;
  }

  // snapshot_schedules - computed: false, optional: true, required: false
  private _snapshotSchedules = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringSnapshotSchedules[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#disabled DataK8SCephRookIoCephFilesystemV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#interval DataK8SCephRookIoCephFilesystemV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#timeout DataK8SCephRookIoCephFilesystemV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirrorToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirrorToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._interval = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._interval = value.interval;
      this._timeout = value.timeout;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck {
  /**
  * HealthCheckSpec represents the health check of an object store bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mirror DataK8SCephRookIoCephFilesystemV1Manifest#mirror}
  */
  readonly mirror?: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirrorToTerraform(struct!.mirror),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirror.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirror.internalValue = value.mirror;
    }
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }
}
export interface DataK8SCephRookIoCephFilesystemV1ManifestSpec {
  /**
  * The data pool settings, with optional predefined pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#data_pools DataK8SCephRookIoCephFilesystemV1Manifest#data_pools}
  */
  readonly dataPools: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools[] | cdktf.IResolvable;
  /**
  * The metadata pool settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#metadata_pool DataK8SCephRookIoCephFilesystemV1Manifest#metadata_pool}
  */
  readonly metadataPool: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool;
  /**
  * The mds pod info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#metadata_server DataK8SCephRookIoCephFilesystemV1Manifest#metadata_server}
  */
  readonly metadataServer: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer;
  /**
  * The mirroring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#mirroring DataK8SCephRookIoCephFilesystemV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring;
  /**
  * Preserve the fs in the cluster on CephFilesystem CR deletion. Setting this to true automatically implies PreservePoolsOnDelete is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#preserve_filesystem_on_delete DataK8SCephRookIoCephFilesystemV1Manifest#preserve_filesystem_on_delete}
  */
  readonly preserveFilesystemOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Preserve pools on filesystem deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#preserve_pools_on_delete DataK8SCephRookIoCephFilesystemV1Manifest#preserve_pools_on_delete}
  */
  readonly preservePoolsOnDelete?: boolean | cdktf.IResolvable;
  /**
  * The mirroring statusCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#status_check DataK8SCephRookIoCephFilesystemV1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck;
}

export function dataK8SCephRookIoCephFilesystemV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_pools: cdktf.listMapper(dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsToTerraform, false)(struct!.dataPools),
    metadata_pool: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolToTerraform(struct!.metadataPool),
    metadata_server: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerToTerraform(struct!.metadataServer),
    mirroring: dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringToTerraform(struct!.mirroring),
    preserve_filesystem_on_delete: cdktf.booleanToTerraform(struct!.preserveFilesystemOnDelete),
    preserve_pools_on_delete: cdktf.booleanToTerraform(struct!.preservePoolsOnDelete),
    status_check: dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckToTerraform(struct!.statusCheck),
  }
}


export function dataK8SCephRookIoCephFilesystemV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_pools: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsToHclTerraform, false)(struct!.dataPools),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsList",
    },
    metadata_pool: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolToHclTerraform(struct!.metadataPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool",
    },
    metadata_server: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerToHclTerraform(struct!.metadataServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer",
    },
    mirroring: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring",
    },
    preserve_filesystem_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preserveFilesystemOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_pools_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preservePoolsOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status_check: {
      value: dataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPools = this._dataPools?.internalValue;
    }
    if (this._metadataPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPool = this._metadataPool?.internalValue;
    }
    if (this._metadataServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataServer = this._metadataServer?.internalValue;
    }
    if (this._mirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroring = this._mirroring?.internalValue;
    }
    if (this._preserveFilesystemOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveFilesystemOnDelete = this._preserveFilesystemOnDelete;
    }
    if (this._preservePoolsOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preservePoolsOnDelete = this._preservePoolsOnDelete;
    }
    if (this._statusCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCheck = this._statusCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPools.internalValue = undefined;
      this._metadataPool.internalValue = undefined;
      this._metadataServer.internalValue = undefined;
      this._mirroring.internalValue = undefined;
      this._preserveFilesystemOnDelete = undefined;
      this._preservePoolsOnDelete = undefined;
      this._statusCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPools.internalValue = value.dataPools;
      this._metadataPool.internalValue = value.metadataPool;
      this._metadataServer.internalValue = value.metadataServer;
      this._mirroring.internalValue = value.mirroring;
      this._preserveFilesystemOnDelete = value.preserveFilesystemOnDelete;
      this._preservePoolsOnDelete = value.preservePoolsOnDelete;
      this._statusCheck.internalValue = value.statusCheck;
    }
  }

  // data_pools - computed: false, optional: false, required: true
  private _dataPools = new DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPoolsList(this, "data_pools", false);
  public get dataPools() {
    return this._dataPools;
  }
  public putDataPools(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecDataPools[] | cdktf.IResolvable) {
    this._dataPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolsInput() {
    return this._dataPools.internalValue;
  }

  // metadata_pool - computed: false, optional: false, required: true
  private _metadataPool = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPoolOutputReference(this, "metadata_pool");
  public get metadataPool() {
    return this._metadataPool;
  }
  public putMetadataPool(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataPool) {
    this._metadataPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPoolInput() {
    return this._metadataPool.internalValue;
  }

  // metadata_server - computed: false, optional: false, required: true
  private _metadataServer = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServerOutputReference(this, "metadata_server");
  public get metadataServer() {
    return this._metadataServer;
  }
  public putMetadataServer(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMetadataServer) {
    this._metadataServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataServerInput() {
    return this._metadataServer.internalValue;
  }

  // mirroring - computed: false, optional: true, required: false
  private _mirroring = new DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecMirroring) {
    this._mirroring.internalValue = value;
  }
  public resetMirroring() {
    this._mirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringInput() {
    return this._mirroring.internalValue;
  }

  // preserve_filesystem_on_delete - computed: false, optional: true, required: false
  private _preserveFilesystemOnDelete?: boolean | cdktf.IResolvable; 
  public get preserveFilesystemOnDelete() {
    return this.getBooleanAttribute('preserve_filesystem_on_delete');
  }
  public set preserveFilesystemOnDelete(value: boolean | cdktf.IResolvable) {
    this._preserveFilesystemOnDelete = value;
  }
  public resetPreserveFilesystemOnDelete() {
    this._preserveFilesystemOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveFilesystemOnDeleteInput() {
    return this._preserveFilesystemOnDelete;
  }

  // preserve_pools_on_delete - computed: false, optional: true, required: false
  private _preservePoolsOnDelete?: boolean | cdktf.IResolvable; 
  public get preservePoolsOnDelete() {
    return this.getBooleanAttribute('preserve_pools_on_delete');
  }
  public set preservePoolsOnDelete(value: boolean | cdktf.IResolvable) {
    this._preservePoolsOnDelete = value;
  }
  public resetPreservePoolsOnDelete() {
    this._preservePoolsOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservePoolsOnDeleteInput() {
    return this._preservePoolsOnDelete;
  }

  // status_check - computed: false, optional: true, required: false
  private _statusCheck = new DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SCephRookIoCephFilesystemV1ManifestSpecStatusCheck) {
    this._statusCheck.internalValue = value;
  }
  public resetStatusCheck() {
    this._statusCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest k8s_ceph_rook_io_ceph_filesystem_v1_manifest}
*/
export class DataK8SCephRookIoCephFilesystemV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ceph_rook_io_ceph_filesystem_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCephRookIoCephFilesystemV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCephRookIoCephFilesystemV1Manifest to import
  * @param importFromId The id of the existing DataK8SCephRookIoCephFilesystemV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCephRookIoCephFilesystemV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ceph_rook_io_ceph_filesystem_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_v1_manifest k8s_ceph_rook_io_ceph_filesystem_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCephRookIoCephFilesystemV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCephRookIoCephFilesystemV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ceph_rook_io_ceph_filesystem_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SCephRookIoCephFilesystemV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephFilesystemV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCephRookIoCephFilesystemV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephFilesystemV1ManifestSpec) {
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
      metadata: dataK8SCephRookIoCephFilesystemV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCephRookIoCephFilesystemV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCephRookIoCephFilesystemV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCephRookIoCephFilesystemV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephFilesystemV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
