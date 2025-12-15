// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * deletionPolicy determines whether a VolumeSnapshotContent created through the VolumeSnapshotClass should be deleted when its bound VolumeSnapshot is deleted. Supported values are 'Retain' and 'Delete'. 'Retain' means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are kept. 'Delete' means that the VolumeSnapshotContent and its physical snapshot on underlying storage system are deleted. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#deletion_policy DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest#deletion_policy}
  */
  readonly deletionPolicy: string;
  /**
  * driver is the name of the storage driver that handles this VolumeSnapshotClass. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#driver DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest#driver}
  */
  readonly driver: string;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#metadata DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata;
  /**
  * parameters is a key-value map with storage driver specific parameters for creating snapshots. These values are opaque to Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#parameters DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
}
export interface DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#annotations DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#labels DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#name DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest k8s_snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest}
*/
export class DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest k8s_snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_snapshot_storage_k8s_io_volume_snapshot_class_v1beta1_manifest',
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
    this._deletionPolicy = config.deletionPolicy;
    this._driver = config.driver;
    this._metadata.internalValue = config.metadata;
    this._parameters = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_policy - computed: false, optional: false, required: true
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      driver: cdktf.stringToTerraform(this._driver),
      metadata: dataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: dataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnapshotStorageK8SIoVolumeSnapshotClassV1Beta1ManifestMetadata",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
