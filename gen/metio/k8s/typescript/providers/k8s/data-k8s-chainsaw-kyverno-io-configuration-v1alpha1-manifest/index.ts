// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#metadata DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata;
  /**
  * Configuration spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#spec DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec;
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#annotations DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#labels DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#match DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._match = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._match = value.match;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand {
  /**
  * Args is the command arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#args DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings[] | cdktf.IResolvable;
  /**
  * Check is an assertion tree to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#check DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#check}
  */
  readonly check?: { [key: string]: string };
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters;
  /**
  * Entrypoint is the command entry point to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#entrypoint DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#entrypoint}
  */
  readonly entrypoint: string;
  /**
  * Env defines additional environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#env DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv[] | cdktf.IResolvable;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#outputs DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs[] | cdktf.IResolvable;
  /**
  * SkipLogOutput removes the output from the command. Useful for sensitive logs or to reduce noise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#skip_log_output DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#skip_log_output}
  */
  readonly skipLogOutput?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * WorkDir is the working directory for command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#work_dir DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#work_dir}
  */
  readonly workDir?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsToTerraform, false)(struct!.bindings),
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClustersToTerraform(struct!.clusters),
    entrypoint: cdktf.stringToTerraform(struct!.entrypoint),
    env: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvToTerraform, false)(struct!.env),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsToTerraform, false)(struct!.outputs),
    skip_log_output: cdktf.booleanToTerraform(struct!.skipLogOutput),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsList",
    },
    check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.check),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters",
    },
    entrypoint: {
      value: cdktf.stringToHclTerraform(struct!.entrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvList",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsList",
    },
    skip_log_output: {
      value: cdktf.booleanToHclTerraform(struct!.skipLogOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_dir: {
      value: cdktf.stringToHclTerraform(struct!.workDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._skipLogOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLogOutput = this._skipLogOutput;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._workDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDir = this._workDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._bindings.internalValue = undefined;
      this._check = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._entrypoint = undefined;
      this._env.internalValue = undefined;
      this._outputs.internalValue = undefined;
      this._skipLogOutput = undefined;
      this._timeout = undefined;
      this._workDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._bindings.internalValue = value.bindings;
      this._check = value.check;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._entrypoint = value.entrypoint;
      this._env.internalValue = value.env;
      this._outputs.internalValue = value.outputs;
      this._skipLogOutput = value.skipLogOutput;
      this._timeout = value.timeout;
      this._workDir = value.workDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // check - computed: false, optional: true, required: false
  private _check?: { [key: string]: string }; 
  public get check() {
    return this.getStringMapAttribute('check');
  }
  public set check(value: { [key: string]: string }) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // skip_log_output - computed: false, optional: true, required: false
  private _skipLogOutput?: boolean | cdktf.IResolvable; 
  public get skipLogOutput() {
    return this.getBooleanAttribute('skip_log_output');
  }
  public set skipLogOutput(value: boolean | cdktf.IResolvable) {
    this._skipLogOutput = value;
  }
  public resetSkipLogOutput() {
    this._skipLogOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLogOutputInput() {
    return this._skipLogOutput;
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

  // work_dir - computed: false, optional: true, required: false
  private _workDir?: string; 
  public get workDir() {
    return this.getStringAttribute('work_dir');
  }
  public set workDir(value: string) {
    this._workDir = value;
  }
  public resetWorkDir() {
    this._workDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDirInput() {
    return this._workDir;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect {
  /**
  * Check defines the verification statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#check DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#check}
  */
  readonly check: { [key: string]: string };
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#match DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.check),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._match = value.match;
    }
  }

  // check - computed: false, optional: false, required: true
  private _check?: { [key: string]: string }; 
  public get check() {
    return this.getStringMapAttribute('check');
  }
  public set check(value: { [key: string]: string }) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Label selector to match objects to delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#labels DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRefToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRefToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters;
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation. Overrides the deletion propagation policy set in the Configuration, the Test and the TestStep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#expect DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#file DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Ref determines objects to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#ref DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#ref}
  */
  readonly ref?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#template DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsToTerraform, false)(struct!.bindings),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClustersToTerraform(struct!.clusters),
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    ref: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRefToTerraform(struct!.ref),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters",
    },
    deletion_propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPropagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._deletionPropagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPropagationPolicy = this._deletionPropagationPolicy;
    }
    if (this._expect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect?.internalValue;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._deletionPropagationPolicy = undefined;
      this._expect.internalValue = undefined;
      this._file = undefined;
      this._ref.internalValue = undefined;
      this._template = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindings.internalValue = value.bindings;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._deletionPropagationPolicy = value.deletionPropagationPolicy;
      this._expect.internalValue = value.expect;
      this._file = value.file;
      this._ref.internalValue = value.ref;
      this._template = value.template;
      this._timeout = value.timeout;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // deletion_propagation_policy - computed: false, optional: true, required: false
  private _deletionPropagationPolicy?: string; 
  public get deletionPropagationPolicy() {
    return this.getStringAttribute('deletion_propagation_policy');
  }
  public set deletionPropagationPolicy(value: string) {
    this._deletionPropagationPolicy = value;
  }
  public resetDeletionPropagationPolicy() {
    this._deletionPropagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPropagationPolicyInput() {
    return this._deletionPropagationPolicy;
  }

  // expect - computed: false, optional: true, required: false
  private _expect = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteExpect[] | cdktf.IResolvable) {
    this._expect.internalValue = value;
  }
  public resetExpect() {
    this._expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteRef) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Show Events indicates whether to include related events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#show_events DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#show_events}
  */
  readonly showEvents?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClustersToTerraform(struct!.clusters),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    show_events: cdktf.booleanToTerraform(struct!.showEvents),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_events: {
      value: cdktf.booleanToHclTerraform(struct!.showEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._showEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.showEvents = this._showEvents;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._showEvents = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._showEvents = value.showEvents;
      this._timeout = value.timeout;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // show_events - computed: false, optional: true, required: false
  private _showEvents?: boolean | cdktf.IResolvable; 
  public get showEvents() {
    return this.getBooleanAttribute('show_events');
  }
  public set showEvents(value: boolean | cdktf.IResolvable) {
    this._showEvents = value;
  }
  public resetShowEvents() {
    this._showEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEventsInput() {
    return this._showEvents;
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents {
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#format DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClustersToTerraform(struct!.clusters),
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._format = value.format;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._timeout = value.timeout;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#format DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClustersToTerraform(struct!.clusters),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._format = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._format = value.format;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._timeout = value.timeout;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs {
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters;
  /**
  * Container in pod to get logs from else --all-containers is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#container DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#container}
  */
  readonly container?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Tail is the number of last lines to collect from pods. If omitted or zero, then the default is 10 if you use a selector, or -1 (all) if you use a pod name. This matches default behavior of 'kubectl logs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#tail DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#tail}
  */
  readonly tail?: number;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClustersToTerraform(struct!.clusters),
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    tail: cdktf.numberToTerraform(struct!.tail),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tail: {
      value: cdktf.numberToHclTerraform(struct!.tail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._tail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tail = this._tail;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._tail = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._container = value.container;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._tail = value.tail;
      this._timeout = value.timeout;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // tail - computed: false, optional: true, required: false
  private _tail?: number; 
  public get tail() {
    return this.getNumberAttribute('tail');
  }
  public set tail(value: number) {
    this._tail = value;
  }
  public resetTail() {
    this._tail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailInput() {
    return this._tail;
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#match DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._match = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._match = value.match;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#bindings DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings[] | cdktf.IResolvable;
  /**
  * Check is an assertion tree to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#check DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#check}
  */
  readonly check?: { [key: string]: string };
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters;
  /**
  * Content defines a shell script (run with 'sh -c ...').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#content DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#content}
  */
  readonly content?: string;
  /**
  * Env defines additional environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#env DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv[] | cdktf.IResolvable;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#outputs DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs[] | cdktf.IResolvable;
  /**
  * SkipLogOutput removes the output from the command. Useful for sensitive logs or to reduce noise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#skip_log_output DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#skip_log_output}
  */
  readonly skipLogOutput?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * WorkDir is the working directory for script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#work_dir DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#work_dir}
  */
  readonly workDir?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsToTerraform, false)(struct!.bindings),
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClustersToTerraform(struct!.clusters),
    content: cdktf.stringToTerraform(struct!.content),
    env: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvToTerraform, false)(struct!.env),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsToTerraform, false)(struct!.outputs),
    skip_log_output: cdktf.booleanToTerraform(struct!.skipLogOutput),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsList",
    },
    check: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.check),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvList",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsList",
    },
    skip_log_output: {
      value: cdktf.booleanToHclTerraform(struct!.skipLogOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_dir: {
      value: cdktf.stringToHclTerraform(struct!.workDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._skipLogOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLogOutput = this._skipLogOutput;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._workDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workDir = this._workDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindings.internalValue = undefined;
      this._check = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._content = undefined;
      this._env.internalValue = undefined;
      this._outputs.internalValue = undefined;
      this._skipLogOutput = undefined;
      this._timeout = undefined;
      this._workDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindings.internalValue = value.bindings;
      this._check = value.check;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._content = value.content;
      this._env.internalValue = value.env;
      this._outputs.internalValue = value.outputs;
      this._skipLogOutput = value.skipLogOutput;
      this._timeout = value.timeout;
      this._workDir = value.workDir;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // check - computed: false, optional: true, required: false
  private _check?: { [key: string]: string }; 
  public get check() {
    return this.getStringMapAttribute('check');
  }
  public set check(value: { [key: string]: string }) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // skip_log_output - computed: false, optional: true, required: false
  private _skipLogOutput?: boolean | cdktf.IResolvable; 
  public get skipLogOutput() {
    return this.getBooleanAttribute('skip_log_output');
  }
  public set skipLogOutput(value: boolean | cdktf.IResolvable) {
    this._skipLogOutput = value;
  }
  public resetSkipLogOutput() {
    this._skipLogOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLogOutputInput() {
    return this._skipLogOutput;
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

  // work_dir - computed: false, optional: true, required: false
  private _workDir?: string; 
  public get workDir() {
    return this.getStringAttribute('work_dir');
  }
  public set workDir(value: string) {
    this._workDir = value;
  }
  public resetWorkDir() {
    this._workDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workDirInput() {
    return this._workDir;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep {
  /**
  * Duration is the delay used for sleeping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#duration DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#duration}
  */
  readonly duration: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleepToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleepToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition {
  /**
  * Name defines the specific condition to wait for, e.g., 'Available', 'Ready'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value defines the specific condition status to wait for, e.g., 'True', 'False'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForConditionToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForConditionToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath {
  /**
  * Path defines the json path to wait for, e.g. '{.status.phase}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#path DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Value defines the expected value to wait for, e.g., 'Running'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPathToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPathToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor {
  /**
  * Condition specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#condition DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#condition}
  */
  readonly condition?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition;
  /**
  * Deletion specifies parameters for waiting on a resource's deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#deletion DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#deletion}
  */
  readonly deletion?: { [key: string]: string };
  /**
  * JsonPath specifies the json path condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#json_path DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#json_path}
  */
  readonly jsonPath?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForConditionToTerraform(struct!.condition),
    deletion: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deletion),
    json_path: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPathToTerraform(struct!.jsonPath),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition",
    },
    deletion: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deletion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    json_path: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPathToHclTerraform(struct!.jsonPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion;
    }
    if (this._jsonPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._deletion = undefined;
      this._jsonPath.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._deletion = value.deletion;
      this._jsonPath.internalValue = value.jsonPath;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion?: { [key: string]: string }; 
  public get deletion() {
    return this.getStringMapAttribute('deletion');
  }
  public set deletion(value: { [key: string]: string }) {
    this._deletion = value;
  }
  public resetDeletion() {
    this._deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPathOutputReference(this, "json_path");
  public get jsonPath() {
    return this._jsonPath;
  }
  public putJsonPath(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForJsonPath) {
    this._jsonPath.internalValue = value;
  }
  public resetJsonPath() {
    this._jsonPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath.internalValue;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters;
  /**
  * WaitFor specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#for DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#for}
  */
  readonly for: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#format DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClustersToTerraform(struct!.clusters),
    for: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForToTerraform(struct!.for),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters",
    },
    for: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForToHclTerraform(struct!.for),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._for?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._cluster = undefined;
      this._clusters.internalValue = undefined;
      this._for.internalValue = undefined;
      this._format = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._selector = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._cluster = value.cluster;
      this._clusters.internalValue = value.clusters;
      this._for.internalValue = value.for;
      this._format = value.format;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._selector = value.selector;
      this._timeout = value.timeout;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // for - computed: false, optional: false, required: true
  private _for = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitForOutputReference(this, "for");
  public get for() {
    return this._for;
  }
  public putFor(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitFor) {
    this._for.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch {
  /**
  * Command defines a command to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#command DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#command}
  */
  readonly command?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand;
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Delete represents a deletion operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#delete DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#delete}
  */
  readonly delete?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete;
  /**
  * Describe determines the resource describe collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#describe DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#describe}
  */
  readonly describe?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe;
  /**
  * Description contains a description of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#description DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Events determines the events collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#events DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#events}
  */
  readonly events?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents;
  /**
  * Get determines the resource get collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#get DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#get}
  */
  readonly get?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet;
  /**
  * PodLogs determines the pod logs collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#pod_logs DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#pod_logs}
  */
  readonly podLogs?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs;
  /**
  * Script defines a script to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#script DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#script}
  */
  readonly script?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript;
  /**
  * Sleep defines zzzz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#sleep DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#sleep}
  */
  readonly sleep?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep;
  /**
  * Wait determines the resource wait collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#wait DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#wait}
  */
  readonly wait?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandToTerraform(struct!.command),
    compiler: cdktf.stringToTerraform(struct!.compiler),
    delete: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteToTerraform(struct!.delete),
    describe: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeToTerraform(struct!.describe),
    description: cdktf.stringToTerraform(struct!.description),
    events: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsToTerraform(struct!.events),
    get: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetToTerraform(struct!.get),
    pod_logs: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsToTerraform(struct!.podLogs),
    script: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptToTerraform(struct!.script),
    sleep: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleepToTerraform(struct!.sleep),
    wait: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitToTerraform(struct!.wait),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandToHclTerraform(struct!.command),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand",
    },
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteToHclTerraform(struct!.delete),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete",
    },
    describe: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeToHclTerraform(struct!.describe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsToHclTerraform(struct!.events),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents",
    },
    get: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetToHclTerraform(struct!.get),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet",
    },
    pod_logs: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsToHclTerraform(struct!.podLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs",
    },
    script: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript",
    },
    sleep: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleepToHclTerraform(struct!.sleep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep",
    },
    wait: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command?.internalValue;
    }
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    if (this._describe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describe = this._describe?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    if (this._get?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.get = this._get?.internalValue;
    }
    if (this._podLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLogs = this._podLogs?.internalValue;
    }
    if (this._script?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script?.internalValue;
    }
    if (this._sleep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sleep = this._sleep?.internalValue;
    }
    if (this._wait?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command.internalValue = undefined;
      this._compiler = undefined;
      this._delete.internalValue = undefined;
      this._describe.internalValue = undefined;
      this._description = undefined;
      this._events.internalValue = undefined;
      this._get.internalValue = undefined;
      this._podLogs.internalValue = undefined;
      this._script.internalValue = undefined;
      this._sleep.internalValue = undefined;
      this._wait.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command.internalValue = value.command;
      this._compiler = value.compiler;
      this._delete.internalValue = value.delete;
      this._describe.internalValue = value.describe;
      this._description = value.description;
      this._events.internalValue = value.events;
      this._get.internalValue = value.get;
      this._podLogs.internalValue = value.podLogs;
      this._script.internalValue = value.script;
      this._sleep.internalValue = value.sleep;
      this._wait.internalValue = value.wait;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommandOutputReference(this, "command");
  public get command() {
    return this._command;
  }
  public putCommand(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchCommand) {
    this._command.internalValue = value;
  }
  public resetCommand() {
    this._command.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command.internalValue;
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDelete) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // describe - computed: false, optional: true, required: false
  private _describe = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribeOutputReference(this, "describe");
  public get describe() {
    return this._describe;
  }
  public putDescribe(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchDescribe) {
    this._describe.internalValue = value;
  }
  public resetDescribe() {
    this._describe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get describeInput() {
    return this._describe.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // events - computed: false, optional: true, required: false
  private _events = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchEvents) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // get - computed: false, optional: true, required: false
  private _get = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGetOutputReference(this, "get");
  public get get() {
    return this._get;
  }
  public putGet(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchGet) {
    this._get.internalValue = value;
  }
  public resetGet() {
    this._get.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get getInput() {
    return this._get.internalValue;
  }

  // pod_logs - computed: false, optional: true, required: false
  private _podLogs = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogsOutputReference(this, "pod_logs");
  public get podLogs() {
    return this._podLogs;
  }
  public putPodLogs(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchPodLogs) {
    this._podLogs.internalValue = value;
  }
  public resetPodLogs() {
    this._podLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLogsInput() {
    return this._podLogs.internalValue;
  }

  // script - computed: false, optional: true, required: false
  private _script = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchScript) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleepOutputReference(this, "sleep");
  public get sleep() {
    return this._sleep;
  }
  public putSleep(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchSleep) {
    this._sleep.internalValue = value;
  }
  public resetSleep() {
    this._sleep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep.internalValue;
  }

  // wait - computed: false, optional: true, required: false
  private _wait = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchWait) {
    this._wait.internalValue = value;
  }
  public resetWait() {
    this._wait.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait.internalValue;
  }
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._kubeconfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._kubeconfig = value.kubeconfig;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts {
  /**
  * Apply defines the timeout for the apply operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#apply DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#apply}
  */
  readonly apply?: string;
  /**
  * Assert defines the timeout for the assert operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#assert DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#assert}
  */
  readonly assert?: string;
  /**
  * Cleanup defines the timeout for the cleanup operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#cleanup DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#cleanup}
  */
  readonly cleanup?: string;
  /**
  * Delete defines the timeout for the delete operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#delete DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#delete}
  */
  readonly delete?: string;
  /**
  * Error defines the timeout for the error operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#error DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#error}
  */
  readonly error?: string;
  /**
  * Exec defines the timeout for exec operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#exec DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#exec}
  */
  readonly exec?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeoutsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: cdktf.stringToTerraform(struct!.apply),
    assert: cdktf.stringToTerraform(struct!.assert),
    cleanup: cdktf.stringToTerraform(struct!.cleanup),
    delete: cdktf.stringToTerraform(struct!.delete),
    error: cdktf.stringToTerraform(struct!.error),
    exec: cdktf.stringToTerraform(struct!.exec),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeoutsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: cdktf.stringToHclTerraform(struct!.apply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assert: {
      value: cdktf.stringToHclTerraform(struct!.assert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup: {
      value: cdktf.stringToHclTerraform(struct!.cleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec: {
      value: cdktf.stringToHclTerraform(struct!.exec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply;
    }
    if (this._assert !== undefined) {
      hasAnyValues = true;
      internalValueResult.assert = this._assert;
    }
    if (this._cleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply = undefined;
      this._assert = undefined;
      this._cleanup = undefined;
      this._delete = undefined;
      this._error = undefined;
      this._exec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apply = value.apply;
      this._assert = value.assert;
      this._cleanup = value.cleanup;
      this._delete = value.delete;
      this._error = value.error;
      this._exec = value.exec;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply?: string; 
  public get apply() {
    return this.getStringAttribute('apply');
  }
  public set apply(value: string) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }

  // assert - computed: false, optional: true, required: false
  private _assert?: string; 
  public get assert() {
    return this.getStringAttribute('assert');
  }
  public set assert(value: string) {
    this._assert = value;
  }
  public resetAssert() {
    this._assert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertInput() {
    return this._assert;
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup?: string; 
  public get cleanup() {
    return this.getStringAttribute('cleanup');
  }
  public set cleanup(value: string) {
    this._cleanup = value;
  }
  public resetCleanup() {
    this._cleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string; 
  public get exec() {
    return this.getStringAttribute('exec');
  }
  public set exec(value: string) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec {
  /**
  * Catch defines what the tests steps will execute when an error happens. This will be combined with catch handlers defined at the test and step levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#catch DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#catch}
  */
  readonly catch?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch[] | cdktf.IResolvable;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters;
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * DelayBeforeCleanup adds a delay between the time a test ends and the time cleanup starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#delay_before_cleanup DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#delay_before_cleanup}
  */
  readonly delayBeforeCleanup?: string;
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * ExcludeTestRegex is used to exclude tests based on a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#exclude_test_regex DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#exclude_test_regex}
  */
  readonly excludeTestRegex?: string;
  /**
  * FailFast determines whether the test should stop upon encountering the first failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#fail_fast DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#fail_fast}
  */
  readonly failFast?: boolean | cdktf.IResolvable;
  /**
  * ForceTerminationGracePeriod forces the termination grace period on pods, statefulsets, daemonsets and deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#force_termination_grace_period DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#force_termination_grace_period}
  */
  readonly forceTerminationGracePeriod?: string;
  /**
  * FullName makes use of the full test case folder path instead of the folder name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#full_name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#full_name}
  */
  readonly fullName?: boolean | cdktf.IResolvable;
  /**
  * IncludeTestRegex is used to include tests based on a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#include_test_regex DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#include_test_regex}
  */
  readonly includeTestRegex?: string;
  /**
  * Namespace defines the namespace to use for tests. If not specified, every test will execute in a random ephemeral namespace unless the namespace is overridden in a the test spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NamespaceTemplate defines a template to create the test namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace_template DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace_template}
  */
  readonly namespaceTemplate?: { [key: string]: string };
  /**
  * NamespaceTemplateCompiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#namespace_template_compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#namespace_template_compiler}
  */
  readonly namespaceTemplateCompiler?: string;
  /**
  * The maximum number of tests to run at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#parallel DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#parallel}
  */
  readonly parallel?: number;
  /**
  * RepeatCount indicates how many times the tests should be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#repeat_count DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * ReportFormat determines test report format (JSON|XML|JUNIT-TEST|JUNIT-STEP|JUNIT-OPERATION|nil) nil == no report. maps to report.Type, however we don't want generated.deepcopy to have reference to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#report_format DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#report_format}
  */
  readonly reportFormat?: string;
  /**
  * ReportName defines the name of report to create. It defaults to 'chainsaw-report'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#report_name DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#report_name}
  */
  readonly reportName?: string;
  /**
  * ReportPath defines the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#report_path DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#report_path}
  */
  readonly reportPath?: string;
  /**
  * If set, do not delete the resources after running the tests (implies SkipClusterDelete).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#skip_delete DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#skip_delete}
  */
  readonly skipDelete?: boolean | cdktf.IResolvable;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#template DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * TestFile is the name of the file containing the test to run. If no extension is provided, chainsaw will try with .yaml first and .yml if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#test_file DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#test_file}
  */
  readonly testFile?: string;
  /**
  * Global timeouts configuration. Applies to all tests/test steps if not overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#timeouts DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest#timeouts}
  */
  readonly timeouts?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catch: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchToTerraform, false)(struct!.catch),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClustersToTerraform(struct!.clusters),
    compiler: cdktf.stringToTerraform(struct!.compiler),
    delay_before_cleanup: cdktf.stringToTerraform(struct!.delayBeforeCleanup),
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    exclude_test_regex: cdktf.stringToTerraform(struct!.excludeTestRegex),
    fail_fast: cdktf.booleanToTerraform(struct!.failFast),
    force_termination_grace_period: cdktf.stringToTerraform(struct!.forceTerminationGracePeriod),
    full_name: cdktf.booleanToTerraform(struct!.fullName),
    include_test_regex: cdktf.stringToTerraform(struct!.includeTestRegex),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.namespaceTemplate),
    namespace_template_compiler: cdktf.stringToTerraform(struct!.namespaceTemplateCompiler),
    parallel: cdktf.numberToTerraform(struct!.parallel),
    repeat_count: cdktf.numberToTerraform(struct!.repeatCount),
    report_format: cdktf.stringToTerraform(struct!.reportFormat),
    report_name: cdktf.stringToTerraform(struct!.reportName),
    report_path: cdktf.stringToTerraform(struct!.reportPath),
    skip_delete: cdktf.booleanToTerraform(struct!.skipDelete),
    template: cdktf.booleanToTerraform(struct!.template),
    test_file: cdktf.stringToTerraform(struct!.testFile),
    timeouts: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeoutsToTerraform(struct!.timeouts),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catch: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchToHclTerraform, false)(struct!.catch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchList",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters",
    },
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_before_cleanup: {
      value: cdktf.stringToHclTerraform(struct!.delayBeforeCleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPropagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_test_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeTestRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_fast: {
      value: cdktf.booleanToHclTerraform(struct!.failFast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_termination_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.forceTerminationGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktf.booleanToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_test_regex: {
      value: cdktf.stringToHclTerraform(struct!.includeTestRegex),
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
    namespace_template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.namespaceTemplate),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace_template_compiler: {
      value: cdktf.stringToHclTerraform(struct!.namespaceTemplateCompiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel: {
      value: cdktf.numberToHclTerraform(struct!.parallel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat_count: {
      value: cdktf.numberToHclTerraform(struct!.repeatCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    report_format: {
      value: cdktf.stringToHclTerraform(struct!.reportFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_name: {
      value: cdktf.stringToHclTerraform(struct!.reportName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_path: {
      value: cdktf.stringToHclTerraform(struct!.reportPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_delete: {
      value: cdktf.booleanToHclTerraform(struct!.skipDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    test_file: {
      value: cdktf.stringToHclTerraform(struct!.testFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeouts: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catch = this._catch?.internalValue;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._delayBeforeCleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayBeforeCleanup = this._delayBeforeCleanup;
    }
    if (this._deletionPropagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPropagationPolicy = this._deletionPropagationPolicy;
    }
    if (this._excludeTestRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTestRegex = this._excludeTestRegex;
    }
    if (this._failFast !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFast = this._failFast;
    }
    if (this._forceTerminationGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTerminationGracePeriod = this._forceTerminationGracePeriod;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._includeTestRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTestRegex = this._includeTestRegex;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplate = this._namespaceTemplate;
    }
    if (this._namespaceTemplateCompiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplateCompiler = this._namespaceTemplateCompiler;
    }
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._repeatCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCount = this._repeatCount;
    }
    if (this._reportFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportFormat = this._reportFormat;
    }
    if (this._reportName !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportName = this._reportName;
    }
    if (this._reportPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportPath = this._reportPath;
    }
    if (this._skipDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDelete = this._skipDelete;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._testFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFile = this._testFile;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catch.internalValue = undefined;
      this._clusters.internalValue = undefined;
      this._compiler = undefined;
      this._delayBeforeCleanup = undefined;
      this._deletionPropagationPolicy = undefined;
      this._excludeTestRegex = undefined;
      this._failFast = undefined;
      this._forceTerminationGracePeriod = undefined;
      this._fullName = undefined;
      this._includeTestRegex = undefined;
      this._namespace = undefined;
      this._namespaceTemplate = undefined;
      this._namespaceTemplateCompiler = undefined;
      this._parallel = undefined;
      this._repeatCount = undefined;
      this._reportFormat = undefined;
      this._reportName = undefined;
      this._reportPath = undefined;
      this._skipDelete = undefined;
      this._template = undefined;
      this._testFile = undefined;
      this._timeouts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catch.internalValue = value.catch;
      this._clusters.internalValue = value.clusters;
      this._compiler = value.compiler;
      this._delayBeforeCleanup = value.delayBeforeCleanup;
      this._deletionPropagationPolicy = value.deletionPropagationPolicy;
      this._excludeTestRegex = value.excludeTestRegex;
      this._failFast = value.failFast;
      this._forceTerminationGracePeriod = value.forceTerminationGracePeriod;
      this._fullName = value.fullName;
      this._includeTestRegex = value.includeTestRegex;
      this._namespace = value.namespace;
      this._namespaceTemplate = value.namespaceTemplate;
      this._namespaceTemplateCompiler = value.namespaceTemplateCompiler;
      this._parallel = value.parallel;
      this._repeatCount = value.repeatCount;
      this._reportFormat = value.reportFormat;
      this._reportName = value.reportName;
      this._reportPath = value.reportPath;
      this._skipDelete = value.skipDelete;
      this._template = value.template;
      this._testFile = value.testFile;
      this._timeouts.internalValue = value.timeouts;
    }
  }

  // catch - computed: false, optional: true, required: false
  private _catch = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatchList(this, "catch", false);
  public get catch() {
    return this._catch;
  }
  public putCatch(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecCatch[] | cdktf.IResolvable) {
    this._catch.internalValue = value;
  }
  public resetCatch() {
    this._catch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchInput() {
    return this._catch.internalValue;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // compiler - computed: false, optional: true, required: false
  private _compiler?: string; 
  public get compiler() {
    return this.getStringAttribute('compiler');
  }
  public set compiler(value: string) {
    this._compiler = value;
  }
  public resetCompiler() {
    this._compiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compilerInput() {
    return this._compiler;
  }

  // delay_before_cleanup - computed: false, optional: true, required: false
  private _delayBeforeCleanup?: string; 
  public get delayBeforeCleanup() {
    return this.getStringAttribute('delay_before_cleanup');
  }
  public set delayBeforeCleanup(value: string) {
    this._delayBeforeCleanup = value;
  }
  public resetDelayBeforeCleanup() {
    this._delayBeforeCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayBeforeCleanupInput() {
    return this._delayBeforeCleanup;
  }

  // deletion_propagation_policy - computed: false, optional: true, required: false
  private _deletionPropagationPolicy?: string; 
  public get deletionPropagationPolicy() {
    return this.getStringAttribute('deletion_propagation_policy');
  }
  public set deletionPropagationPolicy(value: string) {
    this._deletionPropagationPolicy = value;
  }
  public resetDeletionPropagationPolicy() {
    this._deletionPropagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPropagationPolicyInput() {
    return this._deletionPropagationPolicy;
  }

  // exclude_test_regex - computed: false, optional: true, required: false
  private _excludeTestRegex?: string; 
  public get excludeTestRegex() {
    return this.getStringAttribute('exclude_test_regex');
  }
  public set excludeTestRegex(value: string) {
    this._excludeTestRegex = value;
  }
  public resetExcludeTestRegex() {
    this._excludeTestRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTestRegexInput() {
    return this._excludeTestRegex;
  }

  // fail_fast - computed: false, optional: true, required: false
  private _failFast?: boolean | cdktf.IResolvable; 
  public get failFast() {
    return this.getBooleanAttribute('fail_fast');
  }
  public set failFast(value: boolean | cdktf.IResolvable) {
    this._failFast = value;
  }
  public resetFailFast() {
    this._failFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failFastInput() {
    return this._failFast;
  }

  // force_termination_grace_period - computed: false, optional: true, required: false
  private _forceTerminationGracePeriod?: string; 
  public get forceTerminationGracePeriod() {
    return this.getStringAttribute('force_termination_grace_period');
  }
  public set forceTerminationGracePeriod(value: string) {
    this._forceTerminationGracePeriod = value;
  }
  public resetForceTerminationGracePeriod() {
    this._forceTerminationGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTerminationGracePeriodInput() {
    return this._forceTerminationGracePeriod;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: boolean | cdktf.IResolvable; 
  public get fullName() {
    return this.getBooleanAttribute('full_name');
  }
  public set fullName(value: boolean | cdktf.IResolvable) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // include_test_regex - computed: false, optional: true, required: false
  private _includeTestRegex?: string; 
  public get includeTestRegex() {
    return this.getStringAttribute('include_test_regex');
  }
  public set includeTestRegex(value: string) {
    this._includeTestRegex = value;
  }
  public resetIncludeTestRegex() {
    this._includeTestRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTestRegexInput() {
    return this._includeTestRegex;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespace_template - computed: false, optional: true, required: false
  private _namespaceTemplate?: { [key: string]: string }; 
  public get namespaceTemplate() {
    return this.getStringMapAttribute('namespace_template');
  }
  public set namespaceTemplate(value: { [key: string]: string }) {
    this._namespaceTemplate = value;
  }
  public resetNamespaceTemplate() {
    this._namespaceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplateInput() {
    return this._namespaceTemplate;
  }

  // namespace_template_compiler - computed: false, optional: true, required: false
  private _namespaceTemplateCompiler?: string; 
  public get namespaceTemplateCompiler() {
    return this.getStringAttribute('namespace_template_compiler');
  }
  public set namespaceTemplateCompiler(value: string) {
    this._namespaceTemplateCompiler = value;
  }
  public resetNamespaceTemplateCompiler() {
    this._namespaceTemplateCompiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplateCompilerInput() {
    return this._namespaceTemplateCompiler;
  }

  // parallel - computed: false, optional: true, required: false
  private _parallel?: number; 
  public get parallel() {
    return this.getNumberAttribute('parallel');
  }
  public set parallel(value: number) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // repeat_count - computed: false, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // report_format - computed: false, optional: true, required: false
  private _reportFormat?: string; 
  public get reportFormat() {
    return this.getStringAttribute('report_format');
  }
  public set reportFormat(value: string) {
    this._reportFormat = value;
  }
  public resetReportFormat() {
    this._reportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportFormatInput() {
    return this._reportFormat;
  }

  // report_name - computed: false, optional: true, required: false
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  public resetReportName() {
    this._reportName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // report_path - computed: false, optional: true, required: false
  private _reportPath?: string; 
  public get reportPath() {
    return this.getStringAttribute('report_path');
  }
  public set reportPath(value: string) {
    this._reportPath = value;
  }
  public resetReportPath() {
    this._reportPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportPathInput() {
    return this._reportPath;
  }

  // skip_delete - computed: false, optional: true, required: false
  private _skipDelete?: boolean | cdktf.IResolvable; 
  public get skipDelete() {
    return this.getBooleanAttribute('skip_delete');
  }
  public set skipDelete(value: boolean | cdktf.IResolvable) {
    this._skipDelete = value;
  }
  public resetSkipDelete() {
    this._skipDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeleteInput() {
    return this._skipDelete;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // test_file - computed: false, optional: true, required: false
  private _testFile?: string; 
  public get testFile() {
    return this.getStringAttribute('test_file');
  }
  public set testFile(value: string) {
    this._testFile = value;
  }
  public resetTestFile() {
    this._testFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFileInput() {
    return this._testFile;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest k8s_chainsaw_kyverno_io_configuration_v1alpha1_manifest}
*/
export class DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chainsaw_kyverno_io_configuration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChainsawKyvernoIoConfigurationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chainsaw_kyverno_io_configuration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha1_manifest k8s_chainsaw_kyverno_io_configuration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chainsaw_kyverno_io_configuration_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
