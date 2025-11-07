// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STinkerbellOrgWorkflowV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#metadata DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#spec DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec;
}
export interface DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#annotations DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#labels DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#name DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#namespace DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadataToTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#name DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRefToTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRefToHclTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
export interface DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#name DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRefToTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRefToHclTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
export interface DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec {
  /**
  * HardwareRef is a reference to a Hardware resource this workflow will execute on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#hardware_ref DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#hardware_ref}
  */
  readonly hardwareRef?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef;
  /**
  * TemplateParams are a list of key-value pairs that are injected into templates at render time. TemplateParams are exposed to templates using a top level .Params key. For example, TemplateParams = {'foo': 'bar'}, the foo key can be accessed via .Params.foo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#template_params DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#template_params}
  */
  readonly templateParams?: { [key: string]: string };
  /**
  * TemplateRef is a reference to a Template resource used to render workflow actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#template_ref DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#template_ref}
  */
  readonly templateRef?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef;
  /**
  * TimeoutSeconds defines the time the workflow has to complete. The timer begins when the first action is requested. When set to 0, no timeout is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#timeout DataK8STinkerbellOrgWorkflowV1Alpha2Manifest#timeout}
  */
  readonly timeout?: number;
}

export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecToTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_ref: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRefToTerraform(struct!.hardwareRef),
    template_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.templateParams),
    template_ref: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRefToTerraform(struct!.templateRef),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_ref: {
      value: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRefToHclTerraform(struct!.hardwareRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef",
    },
    template_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.templateParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template_ref: {
      value: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRefToHclTerraform(struct!.templateRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareRef = this._hardwareRef?.internalValue;
    }
    if (this._templateParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateParams = this._templateParams;
    }
    if (this._templateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareRef.internalValue = undefined;
      this._templateParams = undefined;
      this._templateRef.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareRef.internalValue = value.hardwareRef;
      this._templateParams = value.templateParams;
      this._templateRef.internalValue = value.templateRef;
      this._timeout = value.timeout;
    }
  }

  // hardware_ref - computed: false, optional: true, required: false
  private _hardwareRef = new DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRefOutputReference(this, "hardware_ref");
  public get hardwareRef() {
    return this._hardwareRef;
  }
  public putHardwareRef(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecHardwareRef) {
    this._hardwareRef.internalValue = value;
  }
  public resetHardwareRef() {
    this._hardwareRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareRefInput() {
    return this._hardwareRef.internalValue;
  }

  // template_params - computed: false, optional: true, required: false
  private _templateParams?: { [key: string]: string }; 
  public get templateParams() {
    return this.getStringMapAttribute('template_params');
  }
  public set templateParams(value: { [key: string]: string }) {
    this._templateParams = value;
  }
  public resetTemplateParams() {
    this._templateParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParamsInput() {
    return this._templateParams;
  }

  // template_ref - computed: false, optional: true, required: false
  private _templateRef = new DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRefOutputReference(this, "template_ref");
  public get templateRef() {
    return this._templateRef;
  }
  public putTemplateRef(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecTemplateRef) {
    this._templateRef.internalValue = value;
  }
  public resetTemplateRef() {
    this._templateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest k8s_tinkerbell_org_workflow_v1alpha2_manifest}
*/
export class DataK8STinkerbellOrgWorkflowV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tinkerbell_org_workflow_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STinkerbellOrgWorkflowV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STinkerbellOrgWorkflowV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8STinkerbellOrgWorkflowV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STinkerbellOrgWorkflowV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tinkerbell_org_workflow_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/tinkerbell_org_workflow_v1alpha2_manifest k8s_tinkerbell_org_workflow_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STinkerbellOrgWorkflowV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tinkerbell_org_workflow_v1alpha2_manifest',
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
  private _metadata = new DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec) {
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
      metadata: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgWorkflowV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgWorkflowV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
