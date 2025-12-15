// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLonghornIoInstanceManagerV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#metadata DataK8SLonghornIoInstanceManagerV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata;
  /**
  * InstanceManagerSpec defines the desired state of the Longhorn instance manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#spec DataK8SLonghornIoInstanceManagerV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec;
}
export interface DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#annotations DataK8SLonghornIoInstanceManagerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#labels DataK8SLonghornIoInstanceManagerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#name DataK8SLonghornIoInstanceManagerV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#namespace DataK8SLonghornIoInstanceManagerV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadataToTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#cpu_mask DataK8SLonghornIoInstanceManagerV1Beta2Manifest#cpu_mask}
  */
  readonly cpuMask?: string;
}

export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2ToTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_mask: cdktf.stringToTerraform(struct!.cpuMask),
  }
}


export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2ToHclTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_mask: {
      value: cdktf.stringToHclTerraform(struct!.cpuMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuMask = this._cpuMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuMask = value.cpuMask;
    }
  }

  // cpu_mask - computed: false, optional: true, required: false
  private _cpuMask?: string; 
  public get cpuMask() {
    return this.getStringAttribute('cpu_mask');
  }
  public set cpuMask(value: string) {
    this._cpuMask = value;
  }
  public resetCpuMask() {
    this._cpuMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMaskInput() {
    return this._cpuMask;
  }
}
export interface DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#v2 DataK8SLonghornIoInstanceManagerV1Beta2Manifest#v2}
  */
  readonly v2?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2;
}

export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecToTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    v2: dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2ToTerraform(struct!.v2),
  }
}


export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecToHclTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    v2: {
      value: dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2ToHclTerraform(struct!.v2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._v2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2 = this._v2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._v2.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._v2.internalValue = value.v2;
    }
  }

  // v2 - computed: false, optional: true, required: false
  private _v2 = new DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2OutputReference(this, "v2");
  public get v2() {
    return this._v2;
  }
  public putV2(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecV2) {
    this._v2.internalValue = value;
  }
  public resetV2() {
    this._v2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2Input() {
    return this._v2.internalValue;
  }
}
export interface DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#data_engine DataK8SLonghornIoInstanceManagerV1Beta2Manifest#data_engine}
  */
  readonly dataEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#data_engine_spec DataK8SLonghornIoInstanceManagerV1Beta2Manifest#data_engine_spec}
  */
  readonly dataEngineSpec?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#image DataK8SLonghornIoInstanceManagerV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#node_id DataK8SLonghornIoInstanceManagerV1Beta2Manifest#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#type DataK8SLonghornIoInstanceManagerV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecToTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_engine: cdktf.stringToTerraform(struct!.dataEngine),
    data_engine_spec: dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecToTerraform(struct!.dataEngineSpec),
    image: cdktf.stringToTerraform(struct!.image),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_engine: {
      value: cdktf.stringToHclTerraform(struct!.dataEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_engine_spec: {
      value: dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecToHclTerraform(struct!.dataEngineSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec",
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

export class DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEngine = this._dataEngine;
    }
    if (this._dataEngineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEngineSpec = this._dataEngineSpec?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataEngine = undefined;
      this._dataEngineSpec.internalValue = undefined;
      this._image = undefined;
      this._nodeId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataEngine = value.dataEngine;
      this._dataEngineSpec.internalValue = value.dataEngineSpec;
      this._image = value.image;
      this._nodeId = value.nodeId;
      this._type = value.type;
    }
  }

  // data_engine - computed: false, optional: true, required: false
  private _dataEngine?: string; 
  public get dataEngine() {
    return this.getStringAttribute('data_engine');
  }
  public set dataEngine(value: string) {
    this._dataEngine = value;
  }
  public resetDataEngine() {
    this._dataEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineInput() {
    return this._dataEngine;
  }

  // data_engine_spec - computed: false, optional: true, required: false
  private _dataEngineSpec = new DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpecOutputReference(this, "data_engine_spec");
  public get dataEngineSpec() {
    return this._dataEngineSpec;
  }
  public putDataEngineSpec(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecDataEngineSpec) {
    this._dataEngineSpec.internalValue = value;
  }
  public resetDataEngineSpec() {
    this._dataEngineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineSpecInput() {
    return this._dataEngineSpec.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest k8s_longhorn_io_instance_manager_v1beta2_manifest}
*/
export class DataK8SLonghornIoInstanceManagerV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_longhorn_io_instance_manager_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLonghornIoInstanceManagerV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLonghornIoInstanceManagerV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SLonghornIoInstanceManagerV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLonghornIoInstanceManagerV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_longhorn_io_instance_manager_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/longhorn_io_instance_manager_v1beta2_manifest k8s_longhorn_io_instance_manager_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLonghornIoInstanceManagerV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLonghornIoInstanceManagerV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_longhorn_io_instance_manager_v1beta2_manifest',
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
  private _metadata = new DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec) {
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
      metadata: dataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoInstanceManagerV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SLonghornIoInstanceManagerV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLonghornIoInstanceManagerV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
