// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#metadata DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata;
  /**
  * Configuration spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#spec DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#spec}
  */
  readonly spec: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec;
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#annotations DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#labels DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup {
  /**
  * DelayBeforeCleanup adds a delay between the time a test ends and the time cleanup starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#delay_before_cleanup DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#delay_before_cleanup}
  */
  readonly delayBeforeCleanup?: string;
  /**
  * If set, do not delete the resources after running a test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#skip_delete DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#skip_delete}
  */
  readonly skipDelete?: boolean | cdktf.IResolvable;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanupToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_before_cleanup: cdktf.stringToTerraform(struct!.delayBeforeCleanup),
    skip_delete: cdktf.booleanToTerraform(struct!.skipDelete),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanupToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_before_cleanup: {
      value: cdktf.stringToHclTerraform(struct!.delayBeforeCleanup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayBeforeCleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayBeforeCleanup = this._delayBeforeCleanup;
    }
    if (this._skipDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDelete = this._skipDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayBeforeCleanup = undefined;
      this._skipDelete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayBeforeCleanup = value.delayBeforeCleanup;
      this._skipDelete = value.skipDelete;
    }
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
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion {
  /**
  * Propagation decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#propagation DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#propagation}
  */
  readonly propagation?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletionToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    propagation: cdktf.stringToTerraform(struct!.propagation),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletionToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    propagation: {
      value: cdktf.stringToHclTerraform(struct!.propagation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagation = this._propagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propagation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propagation = value.propagation;
    }
  }

  // propagation - computed: false, optional: true, required: false
  private _propagation?: string; 
  public get propagation() {
    return this.getStringAttribute('propagation');
  }
  public set propagation(value: string) {
    this._propagation = value;
  }
  public resetPropagation() {
    this._propagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationInput() {
    return this._propagation;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery {
  /**
  * ExcludeTestRegex is used to exclude tests based on a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#exclude_test_regex DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#exclude_test_regex}
  */
  readonly excludeTestRegex?: string;
  /**
  * FullName makes use of the full test case folder path instead of the folder name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#full_name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#full_name}
  */
  readonly fullName?: boolean | cdktf.IResolvable;
  /**
  * IncludeTestRegex is used to include tests based on a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#include_test_regex DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#include_test_regex}
  */
  readonly includeTestRegex?: string;
  /**
  * TestFile is the name of the file containing the test to run. If no extension is provided, chainsaw will try with .yaml first and .yml if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#test_file DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#test_file}
  */
  readonly testFile?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscoveryToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_test_regex: cdktf.stringToTerraform(struct!.excludeTestRegex),
    full_name: cdktf.booleanToTerraform(struct!.fullName),
    include_test_regex: cdktf.stringToTerraform(struct!.includeTestRegex),
    test_file: cdktf.stringToTerraform(struct!.testFile),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscoveryToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_test_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeTestRegex),
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
    test_file: {
      value: cdktf.stringToHclTerraform(struct!.testFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTestRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTestRegex = this._excludeTestRegex;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._includeTestRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTestRegex = this._includeTestRegex;
    }
    if (this._testFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFile = this._testFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeTestRegex = undefined;
      this._fullName = undefined;
      this._includeTestRegex = undefined;
      this._testFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeTestRegex = value.excludeTestRegex;
      this._fullName = value.fullName;
      this._includeTestRegex = value.includeTestRegex;
      this._testFile = value.testFile;
    }
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
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#match DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand {
  /**
  * Args is the command arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#args DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#args}
  */
  readonly args?: string[];
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#bindings DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings[] | cdktf.IResolvable;
  /**
  * Check is an assertion tree to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#check DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#check}
  */
  readonly check?: { [key: string]: string };
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters;
  /**
  * Entrypoint is the command entry point to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#entrypoint DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#entrypoint}
  */
  readonly entrypoint: string;
  /**
  * Env defines additional environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#env DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#env}
  */
  readonly env?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv[] | cdktf.IResolvable;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#outputs DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs[] | cdktf.IResolvable;
  /**
  * SkipLogOutput removes the output from the command. Useful for sensitive logs or to reduce noise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#skip_log_output DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#skip_log_output}
  */
  readonly skipLogOutput?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * WorkDir is the working directory for command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#work_dir DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#work_dir}
  */
  readonly workDir?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsToTerraform, false)(struct!.bindings),
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClustersToTerraform(struct!.clusters),
    entrypoint: cdktf.stringToTerraform(struct!.entrypoint),
    env: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvToTerraform, false)(struct!.env),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsToTerraform, false)(struct!.outputs),
    skip_log_output: cdktf.booleanToTerraform(struct!.skipLogOutput),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsList",
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
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters",
    },
    entrypoint: {
      value: cdktf.stringToHclTerraform(struct!.entrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvList",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsList",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand | cdktf.IResolvable | undefined) {
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
  private _bindings = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandBindings[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandClusters) {
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
  private _env = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandEnv[] | cdktf.IResolvable) {
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
  private _outputs = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputs[] | cdktf.IResolvable) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect {
  /**
  * Check defines the verification statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#check DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#check}
  */
  readonly check: { [key: string]: string };
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#match DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#match}
  */
  readonly match?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Label selector to match objects to delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#labels DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRefToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRefToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#bindings DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings[] | cdktf.IResolvable;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters;
  /**
  * DeletionPropagationPolicy decides if a deletion will propagate to the dependents of the object, and how the garbage collector will handle the propagation. Overrides the deletion propagation policy set in the Configuration, the Test and the TestStep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#deletion_propagation_policy DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#deletion_propagation_policy}
  */
  readonly deletionPropagationPolicy?: string;
  /**
  * Expect defines a list of matched checks to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#expect DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#expect}
  */
  readonly expect?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect[] | cdktf.IResolvable;
  /**
  * File is the path to the referenced file. This can be a direct path to a file or an expression that matches multiple files, such as 'manifest/*.yaml' for all YAML files within the 'manifest' directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#file DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#file}
  */
  readonly file?: string;
  /**
  * Ref determines objects to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#ref DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#ref}
  */
  readonly ref?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef;
  /**
  * Template determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#template DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsToTerraform, false)(struct!.bindings),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClustersToTerraform(struct!.clusters),
    deletion_propagation_policy: cdktf.stringToTerraform(struct!.deletionPropagationPolicy),
    expect: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectToTerraform, false)(struct!.expect),
    file: cdktf.stringToTerraform(struct!.file),
    ref: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRefToTerraform(struct!.ref),
    template: cdktf.booleanToTerraform(struct!.template),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsList",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters",
    },
    deletion_propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPropagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectToHclTerraform, false)(struct!.expect),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectList",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete | cdktf.IResolvable | undefined) {
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
  private _bindings = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteBindings[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteClusters) {
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
  private _expect = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpectList(this, "expect", false);
  public get expect() {
    return this._expect;
  }
  public putExpect(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteExpect[] | cdktf.IResolvable) {
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
  private _ref = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteRef) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Show Events indicates whether to include related events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#show_events DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#show_events}
  */
  readonly showEvents?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClustersToTerraform(struct!.clusters),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    show_events: cdktf.booleanToTerraform(struct!.showEvents),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe | cdktf.IResolvable): any {
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
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe | cdktf.IResolvable | undefined) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeClusters) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents {
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#format DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClustersToTerraform(struct!.clusters),
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents | cdktf.IResolvable): any {
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
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents | cdktf.IResolvable | undefined) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsClusters) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#format DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClustersToTerraform(struct!.clusters),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet | cdktf.IResolvable): any {
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
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet | cdktf.IResolvable | undefined) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetClusters) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs {
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters;
  /**
  * Container in pod to get logs from else --all-containers is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#container DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#container}
  */
  readonly container?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Tail is the number of last lines to collect from pods. If omitted or zero, then the default is 10 if you use a selector, or -1 (all) if you use a pod name. This matches default behavior of 'kubectl logs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#tail DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#tail}
  */
  readonly tail?: number;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClustersToTerraform(struct!.clusters),
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    tail: cdktf.numberToTerraform(struct!.tail),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs | cdktf.IResolvable): any {
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
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs | cdktf.IResolvable | undefined) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsClusters) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Match defines the matching statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#match DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Name the name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value value of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs | cdktf.IResolvable | undefined) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript {
  /**
  * Bindings defines additional binding key/values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#bindings DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#bindings}
  */
  readonly bindings?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings[] | cdktf.IResolvable;
  /**
  * Check is an assertion tree to validate the operation outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#check DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#check}
  */
  readonly check?: { [key: string]: string };
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters;
  /**
  * Content defines a shell script (run with 'sh -c ...').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#content DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#content}
  */
  readonly content?: string;
  /**
  * Env defines additional environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#env DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#env}
  */
  readonly env?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv[] | cdktf.IResolvable;
  /**
  * Outputs defines output bindings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#outputs DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#outputs}
  */
  readonly outputs?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs[] | cdktf.IResolvable;
  /**
  * SkipLogOutput removes the output from the command. Useful for sensitive logs or to reduce noise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#skip_log_output DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#skip_log_output}
  */
  readonly skipLogOutput?: boolean | cdktf.IResolvable;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * WorkDir is the working directory for script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#work_dir DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#work_dir}
  */
  readonly workDir?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsToTerraform, false)(struct!.bindings),
    check: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.check),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClustersToTerraform(struct!.clusters),
    content: cdktf.stringToTerraform(struct!.content),
    env: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvToTerraform, false)(struct!.env),
    outputs: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsToTerraform, false)(struct!.outputs),
    skip_log_output: cdktf.booleanToTerraform(struct!.skipLogOutput),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    work_dir: cdktf.stringToTerraform(struct!.workDir),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsToHclTerraform, false)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsList",
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
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvList",
    },
    outputs: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsList",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript | cdktf.IResolvable | undefined) {
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
  private _bindings = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptBindings[] | cdktf.IResolvable) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptClusters) {
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
  private _env = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptEnv[] | cdktf.IResolvable) {
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
  private _outputs = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputs[] | cdktf.IResolvable) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep {
  /**
  * Duration is the delay used for sleeping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#duration DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#duration}
  */
  readonly duration: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleepToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleepToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters {
  /**
  * Context is the name of the context to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#context DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#context}
  */
  readonly context?: string;
  /**
  * Kubeconfig is the path to the referenced file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kubeconfig DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClustersToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClustersToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition {
  /**
  * Name defines the specific condition to wait for, e.g., 'Available', 'Ready'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value defines the specific condition status to wait for, e.g., 'True', 'False'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForConditionToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForConditionToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath {
  /**
  * Path defines the json path to wait for, e.g. '{.status.phase}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#path DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#path}
  */
  readonly path: string;
  /**
  * Value defines the expected value to wait for, e.g., 'Running'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#value DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPathToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPathToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor {
  /**
  * Condition specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#condition DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#condition}
  */
  readonly condition?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition;
  /**
  * Deletion specifies parameters for waiting on a resource's deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#deletion DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#deletion}
  */
  readonly deletion?: { [key: string]: string };
  /**
  * JsonPath specifies the json path condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#json_path DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#json_path}
  */
  readonly jsonPath?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForConditionToTerraform(struct!.condition),
    deletion: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deletion),
    json_path: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPathToTerraform(struct!.jsonPath),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition",
    },
    deletion: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deletion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    json_path: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPathToHclTerraform(struct!.jsonPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor | cdktf.IResolvable | undefined) {
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
  private _condition = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForCondition) {
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
  private _jsonPath = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPathOutputReference(this, "json_path");
  public get jsonPath() {
    return this._jsonPath;
  }
  public putJsonPath(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForJsonPath) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#api_version DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Cluster defines the target cluster (will be inherited if not specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cluster DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters;
  /**
  * WaitFor specifies the condition to wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#for DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#for}
  */
  readonly for: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor;
  /**
  * Format determines the output format (json or yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#format DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#kind DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Selector defines labels selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#selector DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Timeout for the operation. Overrides the global timeout set in the Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeout DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClustersToTerraform(struct!.clusters),
    for: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForToTerraform(struct!.for),
    format: cdktf.stringToTerraform(struct!.format),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: cdktf.stringToTerraform(struct!.selector),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait | cdktf.IResolvable): any {
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
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters",
    },
    for: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForToHclTerraform(struct!.for),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor",
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait | cdktf.IResolvable | undefined) {
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
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitClusters) {
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
  private _for = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitForOutputReference(this, "for");
  public get for() {
    return this._for;
  }
  public putFor(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitFor) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch {
  /**
  * Command defines a command to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#command DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#command}
  */
  readonly command?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand;
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Delete represents a deletion operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#delete DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#delete}
  */
  readonly delete?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete;
  /**
  * Describe determines the resource describe collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#describe DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#describe}
  */
  readonly describe?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe;
  /**
  * Description contains a description of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#description DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#description}
  */
  readonly description?: string;
  /**
  * Events determines the events collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#events DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#events}
  */
  readonly events?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents;
  /**
  * Get determines the resource get collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#get DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#get}
  */
  readonly get?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet;
  /**
  * PodLogs determines the pod logs collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#pod_logs DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#pod_logs}
  */
  readonly podLogs?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs;
  /**
  * Script defines a script to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#script DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#script}
  */
  readonly script?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript;
  /**
  * Sleep defines zzzz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#sleep DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#sleep}
  */
  readonly sleep?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep;
  /**
  * Wait determines the resource wait collector to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#wait DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#wait}
  */
  readonly wait?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandToTerraform(struct!.command),
    compiler: cdktf.stringToTerraform(struct!.compiler),
    delete: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteToTerraform(struct!.delete),
    describe: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeToTerraform(struct!.describe),
    description: cdktf.stringToTerraform(struct!.description),
    events: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsToTerraform(struct!.events),
    get: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetToTerraform(struct!.get),
    pod_logs: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsToTerraform(struct!.podLogs),
    script: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptToTerraform(struct!.script),
    sleep: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleepToTerraform(struct!.sleep),
    wait: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitToTerraform(struct!.wait),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandToHclTerraform(struct!.command),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand",
    },
    compiler: {
      value: cdktf.stringToHclTerraform(struct!.compiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteToHclTerraform(struct!.delete),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete",
    },
    describe: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeToHclTerraform(struct!.describe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsToHclTerraform(struct!.events),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents",
    },
    get: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetToHclTerraform(struct!.get),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet",
    },
    pod_logs: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsToHclTerraform(struct!.podLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs",
    },
    script: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript",
    },
    sleep: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleepToHclTerraform(struct!.sleep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep",
    },
    wait: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitToHclTerraform(struct!.wait),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch | cdktf.IResolvable | undefined) {
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
  private _command = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommandOutputReference(this, "command");
  public get command() {
    return this._command;
  }
  public putCommand(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchCommand) {
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
  private _delete = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDelete) {
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
  private _describe = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribeOutputReference(this, "describe");
  public get describe() {
    return this._describe;
  }
  public putDescribe(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchDescribe) {
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
  private _events = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchEvents) {
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
  private _get = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGetOutputReference(this, "get");
  public get get() {
    return this._get;
  }
  public putGet(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchGet) {
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
  private _podLogs = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogsOutputReference(this, "pod_logs");
  public get podLogs() {
    return this._podLogs;
  }
  public putPodLogs(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchPodLogs) {
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
  private _script = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchScript) {
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
  private _sleep = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleepOutputReference(this, "sleep");
  public get sleep() {
    return this._sleep;
  }
  public putSleep(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchSleep) {
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
  private _wait = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWaitOutputReference(this, "wait");
  public get wait() {
    return this._wait;
  }
  public putWait(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchWait) {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchOutputReference {
    return new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError {
  /**
  * Catch defines what the tests steps will execute when an error happens. This will be combined with catch handlers defined at the test and step levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#catch DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#catch}
  */
  readonly catch?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch[] | cdktf.IResolvable;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catch: cdktf.listMapper(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchToTerraform, false)(struct!.catch),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catch: {
      value: cdktf.listMapperHcl(dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchToHclTerraform, false)(struct!.catch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catch = this._catch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catch.internalValue = value.catch;
    }
  }

  // catch - computed: false, optional: true, required: false
  private _catch = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatchList(this, "catch", false);
  public get catch() {
    return this._catch;
  }
  public putCatch(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorCatch[] | cdktf.IResolvable) {
    this._catch.internalValue = value;
  }
  public resetCatch() {
    this._catch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchInput() {
    return this._catch.internalValue;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution {
  /**
  * FailFast determines whether the test should stop upon encountering the first failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#fail_fast DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#fail_fast}
  */
  readonly failFast?: boolean | cdktf.IResolvable;
  /**
  * ForceTerminationGracePeriod forces the termination grace period on pods, statefulsets, daemonsets and deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#force_termination_grace_period DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#force_termination_grace_period}
  */
  readonly forceTerminationGracePeriod?: string;
  /**
  * The maximum number of tests to run at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#parallel DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#parallel}
  */
  readonly parallel?: number;
  /**
  * RepeatCount indicates how many times the tests should be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#repeat_count DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#repeat_count}
  */
  readonly repeatCount?: number;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecutionToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_fast: cdktf.booleanToTerraform(struct!.failFast),
    force_termination_grace_period: cdktf.stringToTerraform(struct!.forceTerminationGracePeriod),
    parallel: cdktf.numberToTerraform(struct!.parallel),
    repeat_count: cdktf.numberToTerraform(struct!.repeatCount),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecutionToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failFast !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFast = this._failFast;
    }
    if (this._forceTerminationGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTerminationGracePeriod = this._forceTerminationGracePeriod;
    }
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._repeatCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCount = this._repeatCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failFast = undefined;
      this._forceTerminationGracePeriod = undefined;
      this._parallel = undefined;
      this._repeatCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failFast = value.failFast;
      this._forceTerminationGracePeriod = value.forceTerminationGracePeriod;
      this._parallel = value.parallel;
      this._repeatCount = value.repeatCount;
    }
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
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Name defines the namespace to use for tests. If not specified, every test will execute in a random ephemeral namespace unless the namespace is overridden in a the test spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Template defines a template to create the test namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#template DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#template}
  */
  readonly template?: { [key: string]: string };
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespaceToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    name: cdktf.stringToTerraform(struct!.name),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespaceToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace | cdktf.IResolvable): any {
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
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace | cdktf.IResolvable | undefined {
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
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._name = undefined;
      this._template = undefined;
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
      this._template = value.template;
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

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport {
  /**
  * ReportFormat determines test report format (JSON|XML|JUNIT-TEST|JUNIT-STEP|JUNIT-OPERATION).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#format DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#format}
  */
  readonly format?: string;
  /**
  * ReportName defines the name of report to create. It defaults to 'chainsaw-report'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#name DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * ReportPath defines the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#path DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReportToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReportToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._path = value.path;
    }
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating {
  /**
  * Compiler defines the default compiler to use when evaluating expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#compiler DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#compiler}
  */
  readonly compiler?: string;
  /**
  * Enabled determines whether resources should be considered for templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#enabled DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplatingToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compiler: cdktf.stringToTerraform(struct!.compiler),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplatingToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplatingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.compiler = this._compiler;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compiler = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compiler = value.compiler;
      this._enabled = value.enabled;
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
}
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts {
  /**
  * Apply defines the timeout for the apply operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#apply DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#apply}
  */
  readonly apply?: string;
  /**
  * Assert defines the timeout for the assert operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#assert DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#assert}
  */
  readonly assert?: string;
  /**
  * Cleanup defines the timeout for the cleanup operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cleanup DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cleanup}
  */
  readonly cleanup?: string;
  /**
  * Delete defines the timeout for the delete operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#delete DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#delete}
  */
  readonly delete?: string;
  /**
  * Error defines the timeout for the error operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#error DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#error}
  */
  readonly error?: string;
  /**
  * Exec defines the timeout for exec operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#exec DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#exec}
  */
  readonly exec?: string;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeoutsToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable): any {
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


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeoutsToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable): any {
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

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec {
  /**
  * Cleanup contains cleanup configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#cleanup DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#cleanup}
  */
  readonly cleanup?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup;
  /**
  * Clusters holds a registry to clusters to support multi-cluster tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#clusters DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters;
  /**
  * Deletion contains the global deletion configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#deletion DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#deletion}
  */
  readonly deletion?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion;
  /**
  * Discovery contains tests discovery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#discovery DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#discovery}
  */
  readonly discovery?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery;
  /**
  * Error contains the global error configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#error DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#error}
  */
  readonly error?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError;
  /**
  * Execution contains tests execution configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#execution DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#execution}
  */
  readonly execution?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution;
  /**
  * Namespace contains properties for the namespace to use for tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#namespace DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#namespace}
  */
  readonly namespace?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace;
  /**
  * Report contains properties for the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#report DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#report}
  */
  readonly report?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport;
  /**
  * Templating contains the templating config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#templating DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#templating}
  */
  readonly templating?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating;
  /**
  * Global timeouts configuration. Applies to all tests/test steps if not overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#timeouts DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest#timeouts}
  */
  readonly timeouts?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts;
}

export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecToTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanupToTerraform(struct!.cleanup),
    clusters: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClustersToTerraform(struct!.clusters),
    deletion: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletionToTerraform(struct!.deletion),
    discovery: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscoveryToTerraform(struct!.discovery),
    error: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorToTerraform(struct!.error),
    execution: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecutionToTerraform(struct!.execution),
    namespace: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespaceToTerraform(struct!.namespace),
    report: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReportToTerraform(struct!.report),
    templating: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplatingToTerraform(struct!.templating),
    timeouts: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeoutsToTerraform(struct!.timeouts),
  }
}


export function dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanupToHclTerraform(struct!.cleanup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup",
    },
    clusters: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClustersToHclTerraform(struct!.clusters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters",
    },
    deletion: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletionToHclTerraform(struct!.deletion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion",
    },
    discovery: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery",
    },
    error: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError",
    },
    execution: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecutionToHclTerraform(struct!.execution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution",
    },
    namespace: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespaceToHclTerraform(struct!.namespace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace",
    },
    report: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReportToHclTerraform(struct!.report),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport",
    },
    templating: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplatingToHclTerraform(struct!.templating),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating",
    },
    timeouts: {
      value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup?.internalValue;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._deletion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion?.internalValue;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._execution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execution = this._execution?.internalValue;
    }
    if (this._namespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace?.internalValue;
    }
    if (this._report?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report?.internalValue;
    }
    if (this._templating?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templating = this._templating?.internalValue;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanup.internalValue = undefined;
      this._clusters.internalValue = undefined;
      this._deletion.internalValue = undefined;
      this._discovery.internalValue = undefined;
      this._error.internalValue = undefined;
      this._execution.internalValue = undefined;
      this._namespace.internalValue = undefined;
      this._report.internalValue = undefined;
      this._templating.internalValue = undefined;
      this._timeouts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanup.internalValue = value.cleanup;
      this._clusters.internalValue = value.clusters;
      this._deletion.internalValue = value.deletion;
      this._discovery.internalValue = value.discovery;
      this._error.internalValue = value.error;
      this._execution.internalValue = value.execution;
      this._namespace.internalValue = value.namespace;
      this._report.internalValue = value.report;
      this._templating.internalValue = value.templating;
      this._timeouts.internalValue = value.timeouts;
    }
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanupOutputReference(this, "cleanup");
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecCleanup) {
    this._cleanup.internalValue = value;
  }
  public resetCleanup() {
    this._cleanup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup.internalValue;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClustersOutputReference(this, "clusters");
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecClusters) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletionOutputReference(this, "deletion");
  public get deletion() {
    return this._deletion;
  }
  public putDeletion(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDeletion) {
    this._deletion.internalValue = value;
  }
  public resetDeletion() {
    this._deletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion.internalValue;
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // error - computed: false, optional: true, required: false
  private _error = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // execution - computed: false, optional: true, required: false
  private _execution = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecutionOutputReference(this, "execution");
  public get execution() {
    return this._execution;
  }
  public putExecution(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecExecution) {
    this._execution.internalValue = value;
  }
  public resetExecution() {
    this._execution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionInput() {
    return this._execution.internalValue;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespaceOutputReference(this, "namespace");
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecNamespace) {
    this._namespace.internalValue = value;
  }
  public resetNamespace() {
    this._namespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // report - computed: false, optional: true, required: false
  private _report = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecReport) {
    this._report.internalValue = value;
  }
  public resetReport() {
    this._report.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }

  // templating - computed: false, optional: true, required: false
  private _templating = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplatingOutputReference(this, "templating");
  public get templating() {
    return this._templating;
  }
  public putTemplating(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTemplating) {
    this._templating.internalValue = value;
  }
  public resetTemplating() {
    this._templating.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatingInput() {
    return this._templating.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecTimeouts) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest k8s_chainsaw_kyverno_io_configuration_v1alpha2_manifest}
*/
export class DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chainsaw_kyverno_io_configuration_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChainsawKyvernoIoConfigurationV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chainsaw_kyverno_io_configuration_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chainsaw_kyverno_io_configuration_v1alpha2_manifest k8s_chainsaw_kyverno_io_configuration_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chainsaw_kyverno_io_configuration_v1alpha2_manifest',
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
  private _metadata = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec) {
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
      metadata: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChainsawKyvernoIoConfigurationV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
