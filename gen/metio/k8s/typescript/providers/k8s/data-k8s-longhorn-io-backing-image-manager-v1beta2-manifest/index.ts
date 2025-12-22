// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoBackingImageManagerV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#metadata DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata;
  /**
  * BackingImageManagerSpec defines the desired state of the Longhorn backing image manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#spec DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#annotations DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#labels DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#name DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#namespace DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#backing_images DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#backing_images}
  */
  readonly backingImages?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#disk_path DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#disk_path}
  */
  readonly diskPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#disk_uuid DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#disk_uuid}
  */
  readonly diskUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#image DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#node_id DataK8SLonghornIoBackingImageManagerV1Beta2Manifest#node_id}
  */
  readonly nodeId?: string;
}

export function dataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_images: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.backingImages),
    disk_path: cdktf.stringToTerraform(struct!.diskPath),
    disk_uuid: cdktf.stringToTerraform(struct!.diskUuid),
    image: cdktf.stringToTerraform(struct!.image),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
  }
}


export function dataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_images: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.backingImages),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disk_path: {
      value: cdktf.stringToHclTerraform(struct!.diskPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_uuid: {
      value: cdktf.stringToHclTerraform(struct!.diskUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingImages = this._backingImages;
    }
    if (this._diskPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPath = this._diskPath;
    }
    if (this._diskUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUuid = this._diskUuid;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingImages = undefined;
      this._diskPath = undefined;
      this._diskUuid = undefined;
      this._image = undefined;
      this._nodeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingImages = value.backingImages;
      this._diskPath = value.diskPath;
      this._diskUuid = value.diskUuid;
      this._image = value.image;
      this._nodeId = value.nodeId;
    }
  }

  // backing_images - computed: false, optional: true, required: false
  private _backingImages?: { [key: string]: string }; 
  public get backingImages() {
    return this.getStringMapAttribute('backing_images');
  }
  public set backingImages(value: { [key: string]: string }) {
    this._backingImages = value;
  }
  public resetBackingImages() {
    this._backingImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingImagesInput() {
    return this._backingImages;
  }

  // disk_path - computed: false, optional: true, required: false
  private _diskPath?: string; 
  public get diskPath() {
    return this.getStringAttribute('disk_path');
  }
  public set diskPath(value: string) {
    this._diskPath = value;
  }
  public resetDiskPath() {
    this._diskPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPathInput() {
    return this._diskPath;
  }

  // disk_uuid - computed: false, optional: true, required: false
  private _diskUuid?: string; 
  public get diskUuid() {
    return this.getStringAttribute('disk_uuid');
  }
  public set diskUuid(value: string) {
    this._diskUuid = value;
  }
  public resetDiskUuid() {
    this._diskUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUuidInput() {
    return this._diskUuid;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest k8s_longhorn_io_backing_image_manager_v1beta2_manifest}
*/
export class DataK8SLonghornIoBackingImageManagerV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_backing_image_manager_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoBackingImageManagerV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoBackingImageManagerV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoBackingImageManagerV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoBackingImageManagerV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_backing_image_manager_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/longhorn_io_backing_image_manager_v1beta2_manifest k8s_longhorn_io_backing_image_manager_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoBackingImageManagerV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_backing_image_manager_v1beta2_manifest',
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
  private _metadata = new DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
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
      metadata: dataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoBackingImageManagerV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoBackingImageManagerV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
