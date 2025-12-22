// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#metadata DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata;
  /**
  * SecretMirrorSpec defines the desired state of SecretMirror
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#spec DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec;
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#annotations DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#labels DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#namespace DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#namespace DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#namespace_regex DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#namespace_regex}
  */
  readonly namespaceRegex?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestinationToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_regex: cdktf.stringToTerraform(struct!.namespaceRegex),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestinationToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_regex: {
      value: cdktf.stringToHclTerraform(struct!.namespaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceRegex = this._namespaceRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._namespaceRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._namespaceRegex = value.namespaceRegex;
    }
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

  // namespace_regex - computed: false, optional: true, required: false
  private _namespaceRegex?: string; 
  public get namespaceRegex() {
    return this.getStringAttribute('namespace_regex');
  }
  public set namespaceRegex(value: string) {
    this._namespaceRegex = value;
  }
  public resetNamespaceRegex() {
    this._namespaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceRegexInput() {
    return this._namespaceRegex;
  }
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSourceToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSourceToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#destination DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#destination}
  */
  readonly destination?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#poll_period_seconds DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#poll_period_seconds}
  */
  readonly pollPeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#source DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest#source}
  */
  readonly source?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestinationToTerraform(struct!.destination),
    poll_period_seconds: cdktf.numberToTerraform(struct!.pollPeriodSeconds),
    source: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSourceToTerraform(struct!.source),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination",
    },
    poll_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.pollPeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._pollPeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollPeriodSeconds = this._pollPeriodSeconds;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._pollPeriodSeconds = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._pollPeriodSeconds = value.pollPeriodSeconds;
      this._source.internalValue = value.source;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // poll_period_seconds - computed: false, optional: true, required: false
  private _pollPeriodSeconds?: number; 
  public get pollPeriodSeconds() {
    return this.getNumberAttribute('poll_period_seconds');
  }
  public set pollPeriodSeconds(value: number) {
    this._pollPeriodSeconds = value;
  }
  public resetPollPeriodSeconds() {
    this._pollPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollPeriodSecondsInput() {
    return this._pollPeriodSeconds;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest k8s_mirrors_kts_studio_secret_mirror_v1alpha1_manifest}
*/
export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_mirrors_kts_studio_secret_mirror_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_mirrors_kts_studio_secret_mirror_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha1_manifest k8s_mirrors_kts_studio_secret_mirror_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_mirrors_kts_studio_secret_mirror_v1alpha1_manifest',
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
  private _metadata = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
