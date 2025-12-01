// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#metadata DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#spec DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec;
}
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#annotations DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#labels DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#name DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#namespace DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#pull_policy DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#repository DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#tag DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#repository DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#tag DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImageToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImageToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#memory DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimitsToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimitsToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memory = value.memory;
    }
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#disable_beta_arch_node_selector DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#disable_beta_arch_node_selector}
  */
  readonly disableBetaArchNodeSelector?: boolean | cdktf.IResolvable;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinityToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_beta_arch_node_selector: cdktf.booleanToTerraform(struct!.disableBetaArchNodeSelector),
  }
}


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinityToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_beta_arch_node_selector: {
      value: cdktf.booleanToHclTerraform(struct!.disableBetaArchNodeSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableBetaArchNodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBetaArchNodeSelector = this._disableBetaArchNodeSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableBetaArchNodeSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableBetaArchNodeSelector = value.disableBetaArchNodeSelector;
    }
  }

  // disable_beta_arch_node_selector - computed: false, optional: true, required: false
  private _disableBetaArchNodeSelector?: boolean | cdktf.IResolvable; 
  public get disableBetaArchNodeSelector() {
    return this.getBooleanAttribute('disable_beta_arch_node_selector');
  }
  public set disableBetaArchNodeSelector(value: boolean | cdktf.IResolvable) {
    this._disableBetaArchNodeSelector = value;
  }
  public resetDisableBetaArchNodeSelector() {
    this._disableBetaArchNodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBetaArchNodeSelectorInput() {
    return this._disableBetaArchNodeSelector;
  }
}
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#create DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#enabled DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#name DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#storage_class_name DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvcToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvcToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._enabled = value.enabled;
      this._name = value.name;
      this._storageClassName = value.storageClassName;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#memory DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequestsToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequestsToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memory = value.memory;
    }
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#cluster_name DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#image DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#init_container_image DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#init_container_image}
  */
  readonly initContainerImage?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#integration_api DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#integration_api}
  */
  readonly integrationApi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#limits DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#limits}
  */
  readonly limits?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits;
  /**
  * The name of the secret object that stores the Snyk controller secrets. The secret needs to contain the following data fields: - integrationId - dockercfg.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#monitor_secrets DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#monitor_secrets}
  */
  readonly monitorSecrets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#node_affinity DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#pvc DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#pvc}
  */
  readonly pvc?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#requests DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#requests}
  */
  readonly requests?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#scope DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#temporary_storage_size DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest#temporary_storage_size}
  */
  readonly temporaryStorageSize?: string;
}

export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    image: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    init_container_image: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImageToTerraform(struct!.initContainerImage),
    integration_api: cdktf.stringToTerraform(struct!.integrationApi),
    limits: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimitsToTerraform(struct!.limits),
    monitor_secrets: cdktf.stringToTerraform(struct!.monitorSecrets),
    node_affinity: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinityToTerraform(struct!.nodeAffinity),
    pvc: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvcToTerraform(struct!.pvc),
    requests: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequestsToTerraform(struct!.requests),
    scope: cdktf.stringToTerraform(struct!.scope),
    temporary_storage_size: cdktf.stringToTerraform(struct!.temporaryStorageSize),
  }
}


export function dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage",
    },
    init_container_image: {
      value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImageToHclTerraform(struct!.initContainerImage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage",
    },
    integration_api: {
      value: cdktf.stringToHclTerraform(struct!.integrationApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limits: {
      value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits",
    },
    monitor_secrets: {
      value: cdktf.stringToHclTerraform(struct!.monitorSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_affinity: {
      value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity",
    },
    pvc: {
      value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvcToHclTerraform(struct!.pvc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc",
    },
    requests: {
      value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_storage_size: {
      value: cdktf.stringToHclTerraform(struct!.temporaryStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._initContainerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainerImage = this._initContainerImage?.internalValue;
    }
    if (this._integrationApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationApi = this._integrationApi;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._monitorSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorSecrets = this._monitorSecrets;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._pvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._temporaryStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryStorageSize = this._temporaryStorageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._image.internalValue = undefined;
      this._initContainerImage.internalValue = undefined;
      this._integrationApi = undefined;
      this._limits.internalValue = undefined;
      this._monitorSecrets = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._pvc.internalValue = undefined;
      this._requests.internalValue = undefined;
      this._scope = undefined;
      this._temporaryStorageSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._image.internalValue = value.image;
      this._initContainerImage.internalValue = value.initContainerImage;
      this._integrationApi = value.integrationApi;
      this._limits.internalValue = value.limits;
      this._monitorSecrets = value.monitorSecrets;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._pvc.internalValue = value.pvc;
      this._requests.internalValue = value.requests;
      this._scope = value.scope;
      this._temporaryStorageSize = value.temporaryStorageSize;
    }
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // init_container_image - computed: false, optional: true, required: false
  private _initContainerImage = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImageOutputReference(this, "init_container_image");
  public get initContainerImage() {
    return this._initContainerImage;
  }
  public putInitContainerImage(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecInitContainerImage) {
    this._initContainerImage.internalValue = value;
  }
  public resetInitContainerImage() {
    this._initContainerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerImageInput() {
    return this._initContainerImage.internalValue;
  }

  // integration_api - computed: false, optional: true, required: false
  private _integrationApi?: string; 
  public get integrationApi() {
    return this.getStringAttribute('integration_api');
  }
  public set integrationApi(value: string) {
    this._integrationApi = value;
  }
  public resetIntegrationApi() {
    this._integrationApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationApiInput() {
    return this._integrationApi;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // monitor_secrets - computed: false, optional: true, required: false
  private _monitorSecrets?: string; 
  public get monitorSecrets() {
    return this.getStringAttribute('monitor_secrets');
  }
  public set monitorSecrets(value: string) {
    this._monitorSecrets = value;
  }
  public resetMonitorSecrets() {
    this._monitorSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorSecretsInput() {
    return this._monitorSecrets;
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pvc - computed: false, optional: true, required: false
  private _pvc = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvcOutputReference(this, "pvc");
  public get pvc() {
    return this._pvc;
  }
  public putPvc(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecPvc) {
    this._pvc.internalValue = value;
  }
  public resetPvc() {
    this._pvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // temporary_storage_size - computed: false, optional: true, required: false
  private _temporaryStorageSize?: string; 
  public get temporaryStorageSize() {
    return this.getStringAttribute('temporary_storage_size');
  }
  public set temporaryStorageSize(value: string) {
    this._temporaryStorageSize = value;
  }
  public resetTemporaryStorageSize() {
    this._temporaryStorageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryStorageSizeInput() {
    return this._temporaryStorageSize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest k8s_charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest}
*/
export class DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest k8s_charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_charts_helm_k8s_io_snyk_monitor_v1alpha1_manifest',
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
  private _metadata = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChartsHelmK8SIoSnykMonitorV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
