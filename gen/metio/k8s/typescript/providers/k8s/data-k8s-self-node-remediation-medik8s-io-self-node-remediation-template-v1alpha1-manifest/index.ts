// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#metadata DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata;
  /**
  * SelfNodeRemediationTemplateSpec defines the desired state of SelfNodeRemediationTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#spec DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec;
}
export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#annotations DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#labels DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#name DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#namespace DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec {
  /**
  * RemediationStrategy is the remediation method for unhealthy nodes. Currently, it could be either 'Automatic', 'OutOfServiceTaint' or 'ResourceDeletion'. ResourceDeletion will iterate over all pods and VolumeAttachment related to the unhealthy node and delete them. OutOfServiceTaint will add the out-of-service taint which is a new well-known taint 'node.kubernetes.io/out-of-service' that enables automatic deletion of pv-attached pods on failed nodes, 'out-of-service' taint is only supported on clusters with k8s version 1.26+ or OCP/OKD version 4.13+. Automatic will choose the most appropriate strategy during runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#remediation_strategy DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#remediation_strategy}
  */
  readonly remediationStrategy?: string;
}

export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remediation_strategy: cdktf.stringToTerraform(struct!.remediationStrategy),
  }
}


export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remediation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.remediationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remediationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationStrategy = this._remediationStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remediationStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remediationStrategy = value.remediationStrategy;
    }
  }

  // remediation_strategy - computed: false, optional: true, required: false
  private _remediationStrategy?: string; 
  public get remediationStrategy() {
    return this.getStringAttribute('remediation_strategy');
  }
  public set remediationStrategy(value: string) {
    this._remediationStrategy = value;
  }
  public resetRemediationStrategy() {
    this._remediationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationStrategyInput() {
    return this._remediationStrategy;
  }
}
export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate {
  /**
  * SelfNodeRemediationSpec defines the desired state of SelfNodeRemediation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#spec DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec;
}

export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec {
  /**
  * Template defines the desired state of SelfNodeRemediationTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#template DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest#template}
  */
  readonly template: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate;
}

export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest k8s_self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest}
*/
export class DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest k8s_self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_self_node_remediation_medik8s_io_self_node_remediation_template_v1alpha1_manifest',
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
  private _metadata = new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSelfNodeRemediationMedik8SIoSelfNodeRemediationTemplateV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
