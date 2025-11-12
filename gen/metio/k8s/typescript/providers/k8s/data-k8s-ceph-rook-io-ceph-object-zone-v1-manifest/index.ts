// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCephRookIoCephObjectZoneV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#metadata DataK8SCephRookIoCephObjectZoneV1Manifest#metadata}
  */
  readonly metadata: DataK8SCephRookIoCephObjectZoneV1ManifestMetadata;
  /**
  * ObjectZoneSpec represent the spec of an ObjectZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#spec DataK8SCephRookIoCephObjectZoneV1Manifest#spec}
  */
  readonly spec: DataK8SCephRookIoCephObjectZoneV1ManifestSpec;
}
export interface DataK8SCephRookIoCephObjectZoneV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#annotations DataK8SCephRookIoCephObjectZoneV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#labels DataK8SCephRookIoCephObjectZoneV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#name DataK8SCephRookIoCephObjectZoneV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#namespace DataK8SCephRookIoCephObjectZoneV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestMetadataToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestMetadataToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded {
  /**
  * The algorithm for erasure coding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#algorithm DataK8SCephRookIoCephObjectZoneV1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type). This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#coding_chunks DataK8SCephRookIoCephObjectZoneV1Manifest#coding_chunks}
  */
  readonly codingChunks: number;
  /**
  * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type). The number of chunks required to recover an object when any single OSD is lost is the same as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#data_chunks DataK8SCephRookIoCephObjectZoneV1Manifest#data_chunks}
  */
  readonly dataChunks: number;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCodedToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCodedToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCodedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers {
  /**
  * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#secret_names DataK8SCephRookIoCephObjectZoneV1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeersToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeersToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#interval DataK8SCephRookIoCephObjectZoneV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#path DataK8SCephRookIoCephObjectZoneV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#start_time DataK8SCephRookIoCephObjectZoneV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring {
  /**
  * Enabled whether this pool is mirrored or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#enabled DataK8SCephRookIoCephObjectZoneV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode is the mirroring mode: either pool or image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#mode DataK8SCephRookIoCephObjectZoneV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Peers represents the peers spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#peers DataK8SCephRookIoCephObjectZoneV1Manifest#peers}
  */
  readonly peers?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#snapshot_schedules DataK8SCephRookIoCephObjectZoneV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    peers: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeersToTerraform(struct!.peers),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring | cdktf.IResolvable): any {
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
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeersToHclTerraform(struct!.peers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring | cdktf.IResolvable | undefined) {
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
  private _peers = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeersOutputReference(this, "peers");
  public get peers() {
    return this._peers;
  }
  public putPeers(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringPeers) {
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
  private _snapshotSchedules = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas {
  /**
  * MaxBytes represents the quota in bytes Deprecated in favor of MaxSize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#max_bytes DataK8SCephRookIoCephObjectZoneV1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * MaxObjects represents the quota in objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#max_objects DataK8SCephRookIoCephObjectZoneV1Manifest#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * MaxSize represents the quota in bytes as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#max_size DataK8SCephRookIoCephObjectZoneV1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotasToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotasToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage {
  /**
  * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#primary_device_class DataK8SCephRookIoCephObjectZoneV1Manifest#primary_device_class}
  */
  readonly primaryDeviceClass: string;
  /**
  * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#secondary_device_class DataK8SCephRookIoCephObjectZoneV1Manifest#secondary_device_class}
  */
  readonly secondaryDeviceClass: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorageToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_device_class: cdktf.stringToTerraform(struct!.primaryDeviceClass),
    secondary_device_class: cdktf.stringToTerraform(struct!.secondaryDeviceClass),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorageToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated {
  /**
  * HybridStorage represents hybrid storage tier settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#hybrid_storage DataK8SCephRookIoCephObjectZoneV1Manifest#hybrid_storage}
  */
  readonly hybridStorage?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage;
  /**
  * ReplicasPerFailureDomain the number of replica in the specified failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#replicas_per_failure_domain DataK8SCephRookIoCephObjectZoneV1Manifest#replicas_per_failure_domain}
  */
  readonly replicasPerFailureDomain?: number;
  /**
  * RequireSafeReplicaSize if false allows you to set replica 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#require_safe_replica_size DataK8SCephRookIoCephObjectZoneV1Manifest#require_safe_replica_size}
  */
  readonly requireSafeReplicaSize?: boolean | cdktf.IResolvable;
  /**
  * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#size DataK8SCephRookIoCephObjectZoneV1Manifest#size}
  */
  readonly size: number;
  /**
  * SubFailureDomain the name of the sub-failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#sub_failure_domain DataK8SCephRookIoCephObjectZoneV1Manifest#sub_failure_domain}
  */
  readonly subFailureDomain?: string;
  /**
  * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#target_size_ratio DataK8SCephRookIoCephObjectZoneV1Manifest#target_size_ratio}
  */
  readonly targetSizeRatio?: number;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_storage: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorageToTerraform(struct!.hybridStorage),
    replicas_per_failure_domain: cdktf.numberToTerraform(struct!.replicasPerFailureDomain),
    require_safe_replica_size: cdktf.booleanToTerraform(struct!.requireSafeReplicaSize),
    size: cdktf.numberToTerraform(struct!.size),
    sub_failure_domain: cdktf.stringToTerraform(struct!.subFailureDomain),
    target_size_ratio: cdktf.numberToTerraform(struct!.targetSizeRatio),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hybrid_storage: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorageToHclTerraform(struct!.hybridStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage",
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated | cdktf.IResolvable | undefined) {
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
  private _hybridStorage = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorageOutputReference(this, "hybrid_storage");
  public get hybridStorage() {
    return this._hybridStorage;
  }
  public putHybridStorage(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedHybridStorage) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#disabled DataK8SCephRookIoCephObjectZoneV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#interval DataK8SCephRookIoCephObjectZoneV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#timeout DataK8SCephRookIoCephObjectZoneV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirrorToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirrorToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck {
  /**
  * HealthCheckSpec represents the health check of an object store bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#mirror DataK8SCephRookIoCephObjectZoneV1Manifest#mirror}
  */
  readonly mirror?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirrorToTerraform(struct!.mirror),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck | cdktf.IResolvable | undefined) {
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
  private _mirror = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckMirror) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool {
  /**
  * The application name to set on the pool. Only expected to be set for rgw pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#application DataK8SCephRookIoCephObjectZoneV1Manifest#application}
  */
  readonly application?: string;
  /**
  * DEPRECATED: use Parameters instead, e.g., Parameters['compression_mode'] = 'force' The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force) Do NOT set a default value for kubebuilder as this will override the Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#compression_mode DataK8SCephRookIoCephObjectZoneV1Manifest#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * The root of the crush hierarchy utilized by the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#crush_root DataK8SCephRookIoCephObjectZoneV1Manifest#crush_root}
  */
  readonly crushRoot?: string;
  /**
  * The device class the OSD should set to for use in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#device_class DataK8SCephRookIoCephObjectZoneV1Manifest#device_class}
  */
  readonly deviceClass?: string;
  /**
  * Allow rook operator to change the pool CRUSH tunables once the pool is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#enable_crush_updates DataK8SCephRookIoCephObjectZoneV1Manifest#enable_crush_updates}
  */
  readonly enableCrushUpdates?: boolean | cdktf.IResolvable;
  /**
  * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#enable_rbd_stats DataK8SCephRookIoCephObjectZoneV1Manifest#enable_rbd_stats}
  */
  readonly enableRbdStats?: boolean | cdktf.IResolvable;
  /**
  * The erasure code settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#erasure_coded DataK8SCephRookIoCephObjectZoneV1Manifest#erasure_coded}
  */
  readonly erasureCoded?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded;
  /**
  * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#failure_domain DataK8SCephRookIoCephObjectZoneV1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * The mirroring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#mirroring DataK8SCephRookIoCephObjectZoneV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring;
  /**
  * Parameters is a list of properties to enable on a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#parameters DataK8SCephRookIoCephObjectZoneV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The quota settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#quotas DataK8SCephRookIoCephObjectZoneV1Manifest#quotas}
  */
  readonly quotas?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas;
  /**
  * The replication settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#replicated DataK8SCephRookIoCephObjectZoneV1Manifest#replicated}
  */
  readonly replicated?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated;
  /**
  * The mirroring statusCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#status_check DataK8SCephRookIoCephObjectZoneV1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool | cdktf.IResolvable): any {
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
    erasure_coded: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCodedToTerraform(struct!.erasureCoded),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    mirroring: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringToTerraform(struct!.mirroring),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    quotas: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotasToTerraform(struct!.quotas),
    replicated: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedToTerraform(struct!.replicated),
    status_check: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckToTerraform(struct!.statusCheck),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool | cdktf.IResolvable): any {
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
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCodedToHclTerraform(struct!.erasureCoded),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    quotas: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas",
    },
    replicated: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedToHclTerraform(struct!.replicated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated",
    },
    status_check: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool | cdktf.IResolvable | undefined) {
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
  private _erasureCoded = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCodedOutputReference(this, "erasure_coded");
  public get erasureCoded() {
    return this._erasureCoded;
  }
  public putErasureCoded(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolErasureCoded) {
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
  private _mirroring = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolMirroring) {
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
  private _quotas = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolQuotas) {
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
  private _replicated = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicatedOutputReference(this, "replicated");
  public get replicated() {
    return this._replicated;
  }
  public putReplicated(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolReplicated) {
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
  private _statusCheck = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolStatusCheck) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded {
  /**
  * The algorithm for erasure coding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#algorithm DataK8SCephRookIoCephObjectZoneV1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type). This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#coding_chunks DataK8SCephRookIoCephObjectZoneV1Manifest#coding_chunks}
  */
  readonly codingChunks: number;
  /**
  * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type). The number of chunks required to recover an object when any single OSD is lost is the same as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#data_chunks DataK8SCephRookIoCephObjectZoneV1Manifest#data_chunks}
  */
  readonly dataChunks: number;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCodedToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCodedToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCodedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers {
  /**
  * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#secret_names DataK8SCephRookIoCephObjectZoneV1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeersToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeersToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules {
  /**
  * Interval represent the periodicity of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#interval DataK8SCephRookIoCephObjectZoneV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Path is the path to snapshot, only valid for CephFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#path DataK8SCephRookIoCephObjectZoneV1Manifest#path}
  */
  readonly path?: string;
  /**
  * StartTime indicates when to start the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#start_time DataK8SCephRookIoCephObjectZoneV1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules | cdktf.IResolvable | undefined) {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference {
    return new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring {
  /**
  * Enabled whether this pool is mirrored or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#enabled DataK8SCephRookIoCephObjectZoneV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode is the mirroring mode: either pool or image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#mode DataK8SCephRookIoCephObjectZoneV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Peers represents the peers spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#peers DataK8SCephRookIoCephObjectZoneV1Manifest#peers}
  */
  readonly peers?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers;
  /**
  * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#snapshot_schedules DataK8SCephRookIoCephObjectZoneV1Manifest#snapshot_schedules}
  */
  readonly snapshotSchedules?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    peers: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeersToTerraform(struct!.peers),
    snapshot_schedules: cdktf.listMapper(dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToTerraform, false)(struct!.snapshotSchedules),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable): any {
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
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeersToHclTerraform(struct!.peers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers",
    },
    snapshot_schedules: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesToHclTerraform, false)(struct!.snapshotSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring | cdktf.IResolvable | undefined) {
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
  private _peers = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeersOutputReference(this, "peers");
  public get peers() {
    return this._peers;
  }
  public putPeers(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringPeers) {
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
  private _snapshotSchedules = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedulesList(this, "snapshot_schedules", false);
  public get snapshotSchedules() {
    return this._snapshotSchedules;
  }
  public putSnapshotSchedules(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringSnapshotSchedules[] | cdktf.IResolvable) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas {
  /**
  * MaxBytes represents the quota in bytes Deprecated in favor of MaxSize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#max_bytes DataK8SCephRookIoCephObjectZoneV1Manifest#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * MaxObjects represents the quota in objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#max_objects DataK8SCephRookIoCephObjectZoneV1Manifest#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * MaxSize represents the quota in bytes as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#max_size DataK8SCephRookIoCephObjectZoneV1Manifest#max_size}
  */
  readonly maxSize?: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotasToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotasToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage {
  /**
  * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#primary_device_class DataK8SCephRookIoCephObjectZoneV1Manifest#primary_device_class}
  */
  readonly primaryDeviceClass: string;
  /**
  * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#secondary_device_class DataK8SCephRookIoCephObjectZoneV1Manifest#secondary_device_class}
  */
  readonly secondaryDeviceClass: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorageToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_device_class: cdktf.stringToTerraform(struct!.primaryDeviceClass),
    secondary_device_class: cdktf.stringToTerraform(struct!.secondaryDeviceClass),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorageToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated {
  /**
  * HybridStorage represents hybrid storage tier settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#hybrid_storage DataK8SCephRookIoCephObjectZoneV1Manifest#hybrid_storage}
  */
  readonly hybridStorage?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage;
  /**
  * ReplicasPerFailureDomain the number of replica in the specified failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#replicas_per_failure_domain DataK8SCephRookIoCephObjectZoneV1Manifest#replicas_per_failure_domain}
  */
  readonly replicasPerFailureDomain?: number;
  /**
  * RequireSafeReplicaSize if false allows you to set replica 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#require_safe_replica_size DataK8SCephRookIoCephObjectZoneV1Manifest#require_safe_replica_size}
  */
  readonly requireSafeReplicaSize?: boolean | cdktf.IResolvable;
  /**
  * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#size DataK8SCephRookIoCephObjectZoneV1Manifest#size}
  */
  readonly size: number;
  /**
  * SubFailureDomain the name of the sub-failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#sub_failure_domain DataK8SCephRookIoCephObjectZoneV1Manifest#sub_failure_domain}
  */
  readonly subFailureDomain?: string;
  /**
  * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#target_size_ratio DataK8SCephRookIoCephObjectZoneV1Manifest#target_size_ratio}
  */
  readonly targetSizeRatio?: number;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hybrid_storage: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorageToTerraform(struct!.hybridStorage),
    replicas_per_failure_domain: cdktf.numberToTerraform(struct!.replicasPerFailureDomain),
    require_safe_replica_size: cdktf.booleanToTerraform(struct!.requireSafeReplicaSize),
    size: cdktf.numberToTerraform(struct!.size),
    sub_failure_domain: cdktf.stringToTerraform(struct!.subFailureDomain),
    target_size_ratio: cdktf.numberToTerraform(struct!.targetSizeRatio),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hybrid_storage: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorageToHclTerraform(struct!.hybridStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage",
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated | cdktf.IResolvable | undefined) {
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
  private _hybridStorage = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorageOutputReference(this, "hybrid_storage");
  public get hybridStorage() {
    return this._hybridStorage;
  }
  public putHybridStorage(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedHybridStorage) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#disabled DataK8SCephRookIoCephObjectZoneV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#interval DataK8SCephRookIoCephObjectZoneV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#timeout DataK8SCephRookIoCephObjectZoneV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirrorToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirrorToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck {
  /**
  * HealthCheckSpec represents the health check of an object store bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#mirror DataK8SCephRookIoCephObjectZoneV1Manifest#mirror}
  */
  readonly mirror?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirrorToTerraform(struct!.mirror),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck | cdktf.IResolvable | undefined) {
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
  private _mirror = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckMirror) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool {
  /**
  * The application name to set on the pool. Only expected to be set for rgw pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#application DataK8SCephRookIoCephObjectZoneV1Manifest#application}
  */
  readonly application?: string;
  /**
  * DEPRECATED: use Parameters instead, e.g., Parameters['compression_mode'] = 'force' The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force) Do NOT set a default value for kubebuilder as this will override the Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#compression_mode DataK8SCephRookIoCephObjectZoneV1Manifest#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * The root of the crush hierarchy utilized by the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#crush_root DataK8SCephRookIoCephObjectZoneV1Manifest#crush_root}
  */
  readonly crushRoot?: string;
  /**
  * The device class the OSD should set to for use in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#device_class DataK8SCephRookIoCephObjectZoneV1Manifest#device_class}
  */
  readonly deviceClass?: string;
  /**
  * Allow rook operator to change the pool CRUSH tunables once the pool is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#enable_crush_updates DataK8SCephRookIoCephObjectZoneV1Manifest#enable_crush_updates}
  */
  readonly enableCrushUpdates?: boolean | cdktf.IResolvable;
  /**
  * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#enable_rbd_stats DataK8SCephRookIoCephObjectZoneV1Manifest#enable_rbd_stats}
  */
  readonly enableRbdStats?: boolean | cdktf.IResolvable;
  /**
  * The erasure code settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#erasure_coded DataK8SCephRookIoCephObjectZoneV1Manifest#erasure_coded}
  */
  readonly erasureCoded?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded;
  /**
  * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#failure_domain DataK8SCephRookIoCephObjectZoneV1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * The mirroring settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#mirroring DataK8SCephRookIoCephObjectZoneV1Manifest#mirroring}
  */
  readonly mirroring?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring;
  /**
  * Parameters is a list of properties to enable on a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#parameters DataK8SCephRookIoCephObjectZoneV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The quota settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#quotas DataK8SCephRookIoCephObjectZoneV1Manifest#quotas}
  */
  readonly quotas?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas;
  /**
  * The replication settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#replicated DataK8SCephRookIoCephObjectZoneV1Manifest#replicated}
  */
  readonly replicated?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated;
  /**
  * The mirroring statusCheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#status_check DataK8SCephRookIoCephObjectZoneV1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool | cdktf.IResolvable): any {
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
    erasure_coded: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCodedToTerraform(struct!.erasureCoded),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    mirroring: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringToTerraform(struct!.mirroring),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    quotas: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotasToTerraform(struct!.quotas),
    replicated: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedToTerraform(struct!.replicated),
    status_check: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckToTerraform(struct!.statusCheck),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool | cdktf.IResolvable): any {
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
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCodedToHclTerraform(struct!.erasureCoded),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringToHclTerraform(struct!.mirroring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    quotas: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas",
    },
    replicated: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedToHclTerraform(struct!.replicated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated",
    },
    status_check: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool | cdktf.IResolvable | undefined) {
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
  private _erasureCoded = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCodedOutputReference(this, "erasure_coded");
  public get erasureCoded() {
    return this._erasureCoded;
  }
  public putErasureCoded(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolErasureCoded) {
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
  private _mirroring = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroringOutputReference(this, "mirroring");
  public get mirroring() {
    return this._mirroring;
  }
  public putMirroring(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolMirroring) {
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
  private _quotas = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolQuotas) {
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
  private _replicated = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicatedOutputReference(this, "replicated");
  public get replicated() {
    return this._replicated;
  }
  public putReplicated(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolReplicated) {
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
  private _statusCheck = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolStatusCheck) {
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
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses {
  /**
  * DataPoolName is the data pool used to store ObjectStore objects data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#data_pool_name DataK8SCephRookIoCephObjectZoneV1Manifest#data_pool_name}
  */
  readonly dataPoolName: string;
  /**
  * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses, however most clients/libs insist on AWS names so it is recommended to use one of the valid x-amz-storage-class values for better compatibility: REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#name DataK8SCephRookIoCephObjectZoneV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_pool_name: cdktf.stringToTerraform(struct!.dataPoolName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPoolName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPoolName = this._dataPoolName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPoolName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPoolName = value.dataPoolName;
      this._name = value.name;
    }
  }

  // data_pool_name - computed: false, optional: false, required: true
  private _dataPoolName?: string; 
  public get dataPoolName() {
    return this.getStringAttribute('data_pool_name');
  }
  public set dataPoolName(value: string) {
    this._dataPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolNameInput() {
    return this._dataPoolName;
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
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesOutputReference {
    return new DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements {
  /**
  * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads). If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#data_non_ec_pool_name DataK8SCephRookIoCephObjectZoneV1Manifest#data_non_ec_pool_name}
  */
  readonly dataNonEcPoolName?: string;
  /**
  * The data pool used to store ObjectStore objects data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#data_pool_name DataK8SCephRookIoCephObjectZoneV1Manifest#data_pool_name}
  */
  readonly dataPoolName: string;
  /**
  * The metadata pool used to store ObjectStore bucket index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#metadata_pool_name DataK8SCephRookIoCephObjectZoneV1Manifest#metadata_pool_name}
  */
  readonly metadataPoolName: string;
  /**
  * Pool placement name. Name can be arbitrary. Placement with name 'default' will be used as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#name DataK8SCephRookIoCephObjectZoneV1Manifest#name}
  */
  readonly name: string;
  /**
  * StorageClasses can be selected by user to override dataPoolName during object creation. Each placement has default STANDARD StorageClass pointing to dataPoolName. This list allows defining additional StorageClasses on top of default STANDARD storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#storage_classes DataK8SCephRookIoCephObjectZoneV1Manifest#storage_classes}
  */
  readonly storageClasses?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses[] | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_non_ec_pool_name: cdktf.stringToTerraform(struct!.dataNonEcPoolName),
    data_pool_name: cdktf.stringToTerraform(struct!.dataPoolName),
    metadata_pool_name: cdktf.stringToTerraform(struct!.metadataPoolName),
    name: cdktf.stringToTerraform(struct!.name),
    storage_classes: cdktf.listMapper(dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToTerraform, false)(struct!.storageClasses),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_non_ec_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataNonEcPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.metadataPoolName),
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
    storage_classes: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesToHclTerraform, false)(struct!.storageClasses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataNonEcPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNonEcPoolName = this._dataNonEcPoolName;
    }
    if (this._dataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPoolName = this._dataPoolName;
    }
    if (this._metadataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPoolName = this._metadataPoolName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataNonEcPoolName = undefined;
      this._dataPoolName = undefined;
      this._metadataPoolName = undefined;
      this._name = undefined;
      this._storageClasses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataNonEcPoolName = value.dataNonEcPoolName;
      this._dataPoolName = value.dataPoolName;
      this._metadataPoolName = value.metadataPoolName;
      this._name = value.name;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // data_non_ec_pool_name - computed: false, optional: true, required: false
  private _dataNonEcPoolName?: string; 
  public get dataNonEcPoolName() {
    return this.getStringAttribute('data_non_ec_pool_name');
  }
  public set dataNonEcPoolName(value: string) {
    this._dataNonEcPoolName = value;
  }
  public resetDataNonEcPoolName() {
    this._dataNonEcPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNonEcPoolNameInput() {
    return this._dataNonEcPoolName;
  }

  // data_pool_name - computed: false, optional: false, required: true
  private _dataPoolName?: string; 
  public get dataPoolName() {
    return this.getStringAttribute('data_pool_name');
  }
  public set dataPoolName(value: string) {
    this._dataPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolNameInput() {
    return this._dataPoolName;
  }

  // metadata_pool_name - computed: false, optional: false, required: true
  private _metadataPoolName?: string; 
  public get metadataPoolName() {
    return this.getStringAttribute('metadata_pool_name');
  }
  public set metadataPoolName(value: string) {
    this._metadataPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPoolNameInput() {
    return this._metadataPoolName;
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

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClassesList(this, "storage_classes", false);
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsStorageClasses[] | cdktf.IResolvable) {
    this._storageClasses.internalValue = value;
  }
  public resetStorageClasses() {
    this._storageClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses.internalValue;
  }
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsOutputReference {
    return new DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools {
  /**
  * The data pool used for creating RADOS namespaces in the object store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#data_pool_name DataK8SCephRookIoCephObjectZoneV1Manifest#data_pool_name}
  */
  readonly dataPoolName?: string;
  /**
  * The metadata pool used for creating RADOS namespaces in the object store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#metadata_pool_name DataK8SCephRookIoCephObjectZoneV1Manifest#metadata_pool_name}
  */
  readonly metadataPoolName?: string;
  /**
  * PoolPlacements control which Pools are associated with a particular RGW bucket. Once PoolPlacements are defined, RGW client will be able to associate pool with ObjectStore bucket by providing '<LocationConstraint>' during s3 bucket creation or 'X-Storage-Policy' header during swift container creation. See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets PoolPlacement with name: 'default' will be used as a default pool if no option is provided during bucket creation. If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools. If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#pool_placements DataK8SCephRookIoCephObjectZoneV1Manifest#pool_placements}
  */
  readonly poolPlacements?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements[] | cdktf.IResolvable;
  /**
  * Whether the RADOS namespaces should be preserved on deletion of the object store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#preserve_rados_namespace_data_on_delete DataK8SCephRookIoCephObjectZoneV1Manifest#preserve_rados_namespace_data_on_delete}
  */
  readonly preserveRadosNamespaceDataOnDelete?: boolean | cdktf.IResolvable;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_pool_name: cdktf.stringToTerraform(struct!.dataPoolName),
    metadata_pool_name: cdktf.stringToTerraform(struct!.metadataPoolName),
    pool_placements: cdktf.listMapper(dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsToTerraform, false)(struct!.poolPlacements),
    preserve_rados_namespace_data_on_delete: cdktf.booleanToTerraform(struct!.preserveRadosNamespaceDataOnDelete),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.metadataPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_placements: {
      value: cdktf.listMapperHcl(dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsToHclTerraform, false)(struct!.poolPlacements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsList",
    },
    preserve_rados_namespace_data_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preserveRadosNamespaceDataOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPoolName = this._dataPoolName;
    }
    if (this._metadataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPoolName = this._metadataPoolName;
    }
    if (this._poolPlacements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolPlacements = this._poolPlacements?.internalValue;
    }
    if (this._preserveRadosNamespaceDataOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveRadosNamespaceDataOnDelete = this._preserveRadosNamespaceDataOnDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPoolName = undefined;
      this._metadataPoolName = undefined;
      this._poolPlacements.internalValue = undefined;
      this._preserveRadosNamespaceDataOnDelete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPoolName = value.dataPoolName;
      this._metadataPoolName = value.metadataPoolName;
      this._poolPlacements.internalValue = value.poolPlacements;
      this._preserveRadosNamespaceDataOnDelete = value.preserveRadosNamespaceDataOnDelete;
    }
  }

  // data_pool_name - computed: false, optional: true, required: false
  private _dataPoolName?: string; 
  public get dataPoolName() {
    return this.getStringAttribute('data_pool_name');
  }
  public set dataPoolName(value: string) {
    this._dataPoolName = value;
  }
  public resetDataPoolName() {
    this._dataPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolNameInput() {
    return this._dataPoolName;
  }

  // metadata_pool_name - computed: false, optional: true, required: false
  private _metadataPoolName?: string; 
  public get metadataPoolName() {
    return this.getStringAttribute('metadata_pool_name');
  }
  public set metadataPoolName(value: string) {
    this._metadataPoolName = value;
  }
  public resetMetadataPoolName() {
    this._metadataPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPoolNameInput() {
    return this._metadataPoolName;
  }

  // pool_placements - computed: false, optional: true, required: false
  private _poolPlacements = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacementsList(this, "pool_placements", false);
  public get poolPlacements() {
    return this._poolPlacements;
  }
  public putPoolPlacements(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsPoolPlacements[] | cdktf.IResolvable) {
    this._poolPlacements.internalValue = value;
  }
  public resetPoolPlacements() {
    this._poolPlacements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPlacementsInput() {
    return this._poolPlacements.internalValue;
  }

  // preserve_rados_namespace_data_on_delete - computed: false, optional: true, required: false
  private _preserveRadosNamespaceDataOnDelete?: boolean | cdktf.IResolvable; 
  public get preserveRadosNamespaceDataOnDelete() {
    return this.getBooleanAttribute('preserve_rados_namespace_data_on_delete');
  }
  public set preserveRadosNamespaceDataOnDelete(value: boolean | cdktf.IResolvable) {
    this._preserveRadosNamespaceDataOnDelete = value;
  }
  public resetPreserveRadosNamespaceDataOnDelete() {
    this._preserveRadosNamespaceDataOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveRadosNamespaceDataOnDeleteInput() {
    return this._preserveRadosNamespaceDataOnDelete;
  }
}
export interface DataK8SCephRookIoCephObjectZoneV1ManifestSpec {
  /**
  * If this zone cannot be accessed from other peer Ceph clusters via the ClusterIP Service endpoint created by Rook, you must set this to the externally reachable endpoint(s). You may include the port in the definition. For example: 'https://my-object-store.my-domain.net:443'. In many cases, you should set this to the endpoint of the ingress resource that makes the CephObjectStore associated with this CephObjectStoreZone reachable to peer clusters. The list can have one or more endpoints pointing to different RGW servers in the zone. If a CephObjectStore endpoint is omitted from this list, that object store's gateways will not receive multisite replication data (see CephObjectStore.spec.gateway.disableMultisiteSyncTraffic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#custom_endpoints DataK8SCephRookIoCephObjectZoneV1Manifest#custom_endpoints}
  */
  readonly customEndpoints?: string[];
  /**
  * The data pool settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#data_pool DataK8SCephRookIoCephObjectZoneV1Manifest#data_pool}
  */
  readonly dataPool?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool;
  /**
  * The metadata pool settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#metadata_pool DataK8SCephRookIoCephObjectZoneV1Manifest#metadata_pool}
  */
  readonly metadataPool?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool;
  /**
  * Preserve pools on object zone deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#preserve_pools_on_delete DataK8SCephRookIoCephObjectZoneV1Manifest#preserve_pools_on_delete}
  */
  readonly preservePoolsOnDelete?: boolean | cdktf.IResolvable;
  /**
  * The pool information when configuring RADOS namespaces in existing pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#shared_pools DataK8SCephRookIoCephObjectZoneV1Manifest#shared_pools}
  */
  readonly sharedPools?: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools;
  /**
  * The display name for the ceph users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#zone_group DataK8SCephRookIoCephObjectZoneV1Manifest#zone_group}
  */
  readonly zoneGroup: string;
}

export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customEndpoints),
    data_pool: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolToTerraform(struct!.dataPool),
    metadata_pool: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolToTerraform(struct!.metadataPool),
    preserve_pools_on_delete: cdktf.booleanToTerraform(struct!.preservePoolsOnDelete),
    shared_pools: dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsToTerraform(struct!.sharedPools),
    zone_group: cdktf.stringToTerraform(struct!.zoneGroup),
  }
}


export function dataK8SCephRookIoCephObjectZoneV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephObjectZoneV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_pool: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolToHclTerraform(struct!.dataPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool",
    },
    metadata_pool: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolToHclTerraform(struct!.metadataPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool",
    },
    preserve_pools_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preservePoolsOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared_pools: {
      value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsToHclTerraform(struct!.sharedPools),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools",
    },
    zone_group: {
      value: cdktf.stringToHclTerraform(struct!.zoneGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephObjectZoneV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephObjectZoneV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpoints = this._customEndpoints;
    }
    if (this._dataPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPool = this._dataPool?.internalValue;
    }
    if (this._metadataPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPool = this._metadataPool?.internalValue;
    }
    if (this._preservePoolsOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preservePoolsOnDelete = this._preservePoolsOnDelete;
    }
    if (this._sharedPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPools = this._sharedPools?.internalValue;
    }
    if (this._zoneGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneGroup = this._zoneGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEndpoints = undefined;
      this._dataPool.internalValue = undefined;
      this._metadataPool.internalValue = undefined;
      this._preservePoolsOnDelete = undefined;
      this._sharedPools.internalValue = undefined;
      this._zoneGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEndpoints = value.customEndpoints;
      this._dataPool.internalValue = value.dataPool;
      this._metadataPool.internalValue = value.metadataPool;
      this._preservePoolsOnDelete = value.preservePoolsOnDelete;
      this._sharedPools.internalValue = value.sharedPools;
      this._zoneGroup = value.zoneGroup;
    }
  }

  // custom_endpoints - computed: false, optional: true, required: false
  private _customEndpoints?: string[]; 
  public get customEndpoints() {
    return this.getListAttribute('custom_endpoints');
  }
  public set customEndpoints(value: string[]) {
    this._customEndpoints = value;
  }
  public resetCustomEndpoints() {
    this._customEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointsInput() {
    return this._customEndpoints;
  }

  // data_pool - computed: false, optional: true, required: false
  private _dataPool = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPoolOutputReference(this, "data_pool");
  public get dataPool() {
    return this._dataPool;
  }
  public putDataPool(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecDataPool) {
    this._dataPool.internalValue = value;
  }
  public resetDataPool() {
    this._dataPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolInput() {
    return this._dataPool.internalValue;
  }

  // metadata_pool - computed: false, optional: true, required: false
  private _metadataPool = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPoolOutputReference(this, "metadata_pool");
  public get metadataPool() {
    return this._metadataPool;
  }
  public putMetadataPool(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecMetadataPool) {
    this._metadataPool.internalValue = value;
  }
  public resetMetadataPool() {
    this._metadataPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPoolInput() {
    return this._metadataPool.internalValue;
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

  // shared_pools - computed: false, optional: true, required: false
  private _sharedPools = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPoolsOutputReference(this, "shared_pools");
  public get sharedPools() {
    return this._sharedPools;
  }
  public putSharedPools(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpecSharedPools) {
    this._sharedPools.internalValue = value;
  }
  public resetSharedPools() {
    this._sharedPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPoolsInput() {
    return this._sharedPools.internalValue;
  }

  // zone_group - computed: false, optional: false, required: true
  private _zoneGroup?: string; 
  public get zoneGroup() {
    return this.getStringAttribute('zone_group');
  }
  public set zoneGroup(value: string) {
    this._zoneGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneGroupInput() {
    return this._zoneGroup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest k8s_ceph_rook_io_ceph_object_zone_v1_manifest}
*/
export class DataK8SCephRookIoCephObjectZoneV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ceph_rook_io_ceph_object_zone_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCephRookIoCephObjectZoneV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCephRookIoCephObjectZoneV1Manifest to import
  * @param importFromId The id of the existing DataK8SCephRookIoCephObjectZoneV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCephRookIoCephObjectZoneV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ceph_rook_io_ceph_object_zone_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ceph_rook_io_ceph_object_zone_v1_manifest k8s_ceph_rook_io_ceph_object_zone_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCephRookIoCephObjectZoneV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCephRookIoCephObjectZoneV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ceph_rook_io_ceph_object_zone_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SCephRookIoCephObjectZoneV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephObjectZoneV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCephRookIoCephObjectZoneV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephObjectZoneV1ManifestSpec) {
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
      metadata: dataK8SCephRookIoCephObjectZoneV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCephRookIoCephObjectZoneV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCephRookIoCephObjectZoneV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCephRookIoCephObjectZoneV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephObjectZoneV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
