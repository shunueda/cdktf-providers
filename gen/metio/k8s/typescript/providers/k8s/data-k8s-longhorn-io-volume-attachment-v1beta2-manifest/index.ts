// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#metadata DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata;
  /**
  * VolumeAttachmentSpec defines the desired state of Longhorn VolumeAttachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#spec DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#annotations DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#labels DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#name DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#namespace DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets {
  /**
  * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#generation DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#generation}
  */
  readonly generation?: number;
  /**
  * The unique ID of this attachment. Used to differentiate different attachments of the same volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#id DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The node that this attachment is requesting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#node_id DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#node_id}
  */
  readonly nodeId?: string;
  /**
  * Optional additional parameter for this attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#parameters DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#type DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTicketsToTerraform(struct?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.numberToTerraform(struct!.generation),
    id: cdktf.stringToTerraform(struct!.id),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTicketsToHclTerraform(struct?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.numberToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTicketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generation = undefined;
      this._id = undefined;
      this._nodeId = undefined;
      this._parameters = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generation = value.generation;
      this._id = value.id;
      this._nodeId = value.nodeId;
      this._parameters = value.parameters;
      this._type = value.type;
    }
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#attachment_tickets DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#attachment_tickets}
  */
  readonly attachmentTickets?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets;
  /**
  * The name of Longhorn volume of this VolumeAttachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#volume DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment_tickets: dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTicketsToTerraform(struct!.attachmentTickets),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment_tickets: {
      value: dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTicketsToHclTerraform(struct!.attachmentTickets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentTickets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentTickets = this._attachmentTickets?.internalValue;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentTickets.internalValue = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentTickets.internalValue = value.attachmentTickets;
      this._volume = value.volume;
    }
  }

  // attachment_tickets - computed: false, optional: true, required: false
  private _attachmentTickets = new DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTicketsOutputReference(this, "attachment_tickets");
  public get attachmentTickets() {
    return this._attachmentTickets;
  }
  public putAttachmentTickets(value: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecAttachmentTickets) {
    this._attachmentTickets.internalValue = value;
  }
  public resetAttachmentTickets() {
    this._attachmentTickets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTicketsInput() {
    return this._attachmentTickets.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest k8s_longhorn_io_volume_attachment_v1beta2_manifest}
*/
export class DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_volume_attachment_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoVolumeAttachmentV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_volume_attachment_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/longhorn_io_volume_attachment_v1beta2_manifest k8s_longhorn_io_volume_attachment_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_volume_attachment_v1beta2_manifest',
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
  private _metadata = new DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoVolumeAttachmentV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
