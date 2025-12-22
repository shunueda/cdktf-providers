// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#metadata DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#metadata}
  */
  readonly metadata: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata;
  /**
  * spec defines the desired characteristics of a snapshot requested by a user. More info: https://kubernetes.io/docs/concepts/storage/volume-snapshots#volumesnapshots Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#spec DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#spec}
  */
  readonly spec: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec;
}
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#annotations DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#labels DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#name DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#namespace DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadataToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadataToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource {
  /**
  * persistentVolumeClaimName specifies the name of the PersistentVolumeClaim object representing the volume from which a snapshot should be created. This PVC is assumed to be in the same namespace as the VolumeSnapshot object. This field should be set if the snapshot does not exists, and needs to be created. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#persistent_volume_claim_name DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#persistent_volume_claim_name}
  */
  readonly persistentVolumeClaimName?: string;
  /**
  * volumeSnapshotContentName specifies the name of a pre-existing VolumeSnapshotContent object representing an existing volume snapshot. This field should be set if the snapshot already exists and only needs a representation in Kubernetes. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#volume_snapshot_content_name DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#volume_snapshot_content_name}
  */
  readonly volumeSnapshotContentName?: string;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSourceToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_volume_claim_name: cdktf.stringToTerraform(struct!.persistentVolumeClaimName),
    volume_snapshot_content_name: cdktf.stringToTerraform(struct!.volumeSnapshotContentName),
  }
}


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSourceToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistent_volume_claim_name: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_snapshot_content_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeSnapshotContentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentVolumeClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaimName = this._persistentVolumeClaimName;
    }
    if (this._volumeSnapshotContentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotContentName = this._volumeSnapshotContentName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistentVolumeClaimName = undefined;
      this._volumeSnapshotContentName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistentVolumeClaimName = value.persistentVolumeClaimName;
      this._volumeSnapshotContentName = value.volumeSnapshotContentName;
    }
  }

  // persistent_volume_claim_name - computed: false, optional: true, required: false
  private _persistentVolumeClaimName?: string; 
  public get persistentVolumeClaimName() {
    return this.getStringAttribute('persistent_volume_claim_name');
  }
  public set persistentVolumeClaimName(value: string) {
    this._persistentVolumeClaimName = value;
  }
  public resetPersistentVolumeClaimName() {
    this._persistentVolumeClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimNameInput() {
    return this._persistentVolumeClaimName;
  }

  // volume_snapshot_content_name - computed: false, optional: true, required: false
  private _volumeSnapshotContentName?: string; 
  public get volumeSnapshotContentName() {
    return this.getStringAttribute('volume_snapshot_content_name');
  }
  public set volumeSnapshotContentName(value: string) {
    this._volumeSnapshotContentName = value;
  }
  public resetVolumeSnapshotContentName() {
    this._volumeSnapshotContentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotContentNameInput() {
    return this._volumeSnapshotContentName;
  }
}
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec {
  /**
  * source specifies where a snapshot will be created from. This field is immutable after creation. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#source DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#source}
  */
  readonly source: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource;
  /**
  * VolumeSnapshotClassName is the name of the VolumeSnapshotClass requested by the VolumeSnapshot. VolumeSnapshotClassName may be left nil to indicate that the default SnapshotClass should be used. A given cluster may have multiple default Volume SnapshotClasses: one default per CSI Driver. If a VolumeSnapshot does not specify a SnapshotClass, VolumeSnapshotSource will be checked to figure out what the associated CSI Driver is, and the default VolumeSnapshotClass associated with that CSI Driver will be used. If more than one VolumeSnapshotClass exist for a given CSI Driver and more than one have been marked as default, CreateSnapshot will fail and generate an event. Empty string is not allowed for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#volume_snapshot_class_name DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest#volume_snapshot_class_name}
  */
  readonly volumeSnapshotClassName?: string;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSourceToTerraform(struct!.source),
    volume_snapshot_class_name: cdktf.stringToTerraform(struct!.volumeSnapshotClassName),
  }
}


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource",
    },
    volume_snapshot_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeSnapshotClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._volumeSnapshotClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotClassName = this._volumeSnapshotClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._volumeSnapshotClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._volumeSnapshotClassName = value.volumeSnapshotClassName;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // volume_snapshot_class_name - computed: false, optional: true, required: false
  private _volumeSnapshotClassName?: string; 
  public get volumeSnapshotClassName() {
    return this.getStringAttribute('volume_snapshot_class_name');
  }
  public set volumeSnapshotClassName(value: string) {
    this._volumeSnapshotClassName = value;
  }
  public resetVolumeSnapshotClassName() {
    this._volumeSnapshotClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotClassNameInput() {
    return this._volumeSnapshotClassName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest k8s_snapshot_storage_k8s_io_volume_snapshot_v1_manifest}
*/
export class DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_snapshot_storage_k8s_io_volume_snapshot_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest to import
  * @param importFromId The id of the existing DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSnapshotStorageK8SIoVolumeSnapshotV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_snapshot_storage_k8s_io_volume_snapshot_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_v1_manifest k8s_snapshot_storage_k8s_io_volume_snapshot_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_snapshot_storage_k8s_io_volume_snapshot_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec) {
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
      metadata: dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
