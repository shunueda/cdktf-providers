// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#metadata DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata;
  /**
  * FenceAgentsRemediationTemplateSpec defines the desired state of FenceAgentsRemediationTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#spec DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec;
}
export interface DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#annotations DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#labels DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#name DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#namespace DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec {
  /**
  * Agent is the name of fence agent that will be used. It should have a fence_ prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#agent DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#agent}
  */
  readonly agent: string;
  /**
  * NodeParameters are passed to the fencing agent according to the node that is fenced, since they are node specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#nodeparameters DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#nodeparameters}
  */
  readonly nodeparameters?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * RemediationStrategy is the remediation method for unhealthy nodes. Currently, it could be either 'OutOfServiceTaint' or 'ResourceDeletion'. ResourceDeletion will iterate over all pods related to the unhealthy node and delete them. OutOfServiceTaint will add the out-of-service taint which is a new well-known taint 'node.kubernetes.io/out-of-service' that enables automatic deletion of pv-attached pods on failed nodes, 'out-of-service' taint is only supported on clusters with k8s version 1.26+ or OCP/OKD version 4.13+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#remediation_strategy DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#remediation_strategy}
  */
  readonly remediationStrategy?: string;
  /**
  * RetryCount is the number of times the fencing agent will be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#retrycount DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#retrycount}
  */
  readonly retrycount?: number;
  /**
  * RetryInterval is the interval between each fencing agent execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#retryinterval DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#retryinterval}
  */
  readonly retryinterval?: string;
  /**
  * SharedParameters are passed to the fencing agent regardless of which node is about to be fenced (i.e., they are common for all the nodes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#sharedparameters DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#sharedparameters}
  */
  readonly sharedparameters?: { [key: string]: string };
  /**
  * Timeout is the timeout for each fencing agent execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#timeout DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    nodeparameters: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.nodeparameters),
    remediation_strategy: cdktf.stringToTerraform(struct!.remediationStrategy),
    retrycount: cdktf.numberToTerraform(struct!.retrycount),
    retryinterval: cdktf.stringToTerraform(struct!.retryinterval),
    sharedparameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sharedparameters),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodeparameters: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.nodeparameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    remediation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.remediationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrycount: {
      value: cdktf.numberToHclTerraform(struct!.retrycount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retryinterval: {
      value: cdktf.stringToHclTerraform(struct!.retryinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sharedparameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sharedparameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._nodeparameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeparameters = this._nodeparameters;
    }
    if (this._remediationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationStrategy = this._remediationStrategy;
    }
    if (this._retrycount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrycount = this._retrycount;
    }
    if (this._retryinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryinterval = this._retryinterval;
    }
    if (this._sharedparameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedparameters = this._sharedparameters;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._nodeparameters = undefined;
      this._remediationStrategy = undefined;
      this._retrycount = undefined;
      this._retryinterval = undefined;
      this._sharedparameters = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._nodeparameters = value.nodeparameters;
      this._remediationStrategy = value.remediationStrategy;
      this._retrycount = value.retrycount;
      this._retryinterval = value.retryinterval;
      this._sharedparameters = value.sharedparameters;
      this._timeout = value.timeout;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // nodeparameters - computed: false, optional: true, required: false
  private _nodeparameters?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get nodeparameters() {
    return this.interpolationForAttribute('nodeparameters');
  }
  public set nodeparameters(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._nodeparameters = value;
  }
  public resetNodeparameters() {
    this._nodeparameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeparametersInput() {
    return this._nodeparameters;
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

  // retrycount - computed: false, optional: true, required: false
  private _retrycount?: number; 
  public get retrycount() {
    return this.getNumberAttribute('retrycount');
  }
  public set retrycount(value: number) {
    this._retrycount = value;
  }
  public resetRetrycount() {
    this._retrycount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrycountInput() {
    return this._retrycount;
  }

  // retryinterval - computed: false, optional: true, required: false
  private _retryinterval?: string; 
  public get retryinterval() {
    return this.getStringAttribute('retryinterval');
  }
  public set retryinterval(value: string) {
    this._retryinterval = value;
  }
  public resetRetryinterval() {
    this._retryinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryintervalInput() {
    return this._retryinterval;
  }

  // sharedparameters - computed: false, optional: true, required: false
  private _sharedparameters?: { [key: string]: string }; 
  public get sharedparameters() {
    return this.getStringMapAttribute('sharedparameters');
  }
  public set sharedparameters(value: { [key: string]: string }) {
    this._sharedparameters = value;
  }
  public resetSharedparameters() {
    this._sharedparameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedparametersInput() {
    return this._sharedparameters;
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
export interface DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate {
  /**
  * FenceAgentsRemediationSpec defines the desired state of FenceAgentsRemediation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#spec DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec;
}

export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec {
  /**
  * Template defines the desired state of FenceAgentsRemediationTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#template DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest#template}
  */
  readonly template: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate;
}

export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecToTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest k8s_fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest}
*/
export class DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest k8s_fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fence_agents_remediation_medik8s_io_fence_agents_remediation_template_v1alpha1_manifest',
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
  private _metadata = new DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec) {
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
      metadata: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFenceAgentsRemediationMedik8SIoFenceAgentsRemediationTemplateV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
