// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#metadata DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata;
  /**
  * BackingImageDataSourceSpec defines the desired state of the Longhorn backing image data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#spec DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#annotations DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#labels DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#name DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#namespace DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#checksum DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#disk_path DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#disk_path}
  */
  readonly diskPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#disk_uuid DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#disk_uuid}
  */
  readonly diskUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#file_transferred DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#file_transferred}
  */
  readonly fileTransferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#node_id DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#parameters DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#source_type DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#uuid DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest#uuid}
  */
  readonly uuid?: string;
}

export function dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    disk_path: cdktf.stringToTerraform(struct!.diskPath),
    disk_uuid: cdktf.stringToTerraform(struct!.diskUuid),
    file_transferred: cdktf.booleanToTerraform(struct!.fileTransferred),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    file_transferred: {
      value: cdktf.booleanToHclTerraform(struct!.fileTransferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
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
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._diskPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPath = this._diskPath;
    }
    if (this._diskUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUuid = this._diskUuid;
    }
    if (this._fileTransferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTransferred = this._fileTransferred;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksum = undefined;
      this._diskPath = undefined;
      this._diskUuid = undefined;
      this._fileTransferred = undefined;
      this._nodeId = undefined;
      this._parameters = undefined;
      this._sourceType = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksum = value.checksum;
      this._diskPath = value.diskPath;
      this._diskUuid = value.diskUuid;
      this._fileTransferred = value.fileTransferred;
      this._nodeId = value.nodeId;
      this._parameters = value.parameters;
      this._sourceType = value.sourceType;
      this._uuid = value.uuid;
    }
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
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

  // file_transferred - computed: false, optional: true, required: false
  private _fileTransferred?: boolean | cdktf.IResolvable; 
  public get fileTransferred() {
    return this.getBooleanAttribute('file_transferred');
  }
  public set fileTransferred(value: boolean | cdktf.IResolvable) {
    this._fileTransferred = value;
  }
  public resetFileTransferred() {
    this._fileTransferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTransferredInput() {
    return this._fileTransferred;
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

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest k8s_longhorn_io_backing_image_data_source_v1beta2_manifest}
*/
export class DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_backing_image_data_source_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoBackingImageDataSourceV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_backing_image_data_source_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_backing_image_data_source_v1beta2_manifest k8s_longhorn_io_backing_image_data_source_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_backing_image_data_source_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoBackingImageDataSourceV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
