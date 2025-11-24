// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#metadata DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata;
  /**
  * ClusterExternalSecretSpec defines the desired state of ClusterExternalSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#spec DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec;
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#annotations DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#labels DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadataToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#annotations DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#labels DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadataToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#conversion_strategy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Used to define a decoding Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#decoding_strategy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#decoding_strategy}
  */
  readonly decodingStrategy?: string;
  /**
  * Key is the key used in the Provider, mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#metadata_policy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#metadata_policy}
  */
  readonly metadataPolicy?: string;
  /**
  * Used to select a specific property of the Provider value (if a map), if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#property DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#property}
  */
  readonly property?: string;
  /**
  * Used to select a specific version of the Provider value, if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#version DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversion_strategy: cdktf.stringToTerraform(struct!.conversionStrategy),
    decoding_strategy: cdktf.stringToTerraform(struct!.decodingStrategy),
    key: cdktf.stringToTerraform(struct!.key),
    metadata_policy: cdktf.stringToTerraform(struct!.metadataPolicy),
    property: cdktf.stringToTerraform(struct!.property),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversion_strategy: {
      value: cdktf.stringToHclTerraform(struct!.conversionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decodingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_policy: {
      value: cdktf.stringToHclTerraform(struct!.metadataPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversionStrategy = this._conversionStrategy;
    }
    if (this._decodingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodingStrategy = this._decodingStrategy;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._metadataPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPolicy = this._metadataPolicy;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversionStrategy = undefined;
      this._decodingStrategy = undefined;
      this._key = undefined;
      this._metadataPolicy = undefined;
      this._property = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conversionStrategy = value.conversionStrategy;
      this._decodingStrategy = value.decodingStrategy;
      this._key = value.key;
      this._metadataPolicy = value.metadataPolicy;
      this._property = value.property;
      this._version = value.version;
    }
  }

  // conversion_strategy - computed: false, optional: true, required: false
  private _conversionStrategy?: string; 
  public get conversionStrategy() {
    return this.getStringAttribute('conversion_strategy');
  }
  public set conversionStrategy(value: string) {
    this._conversionStrategy = value;
  }
  public resetConversionStrategy() {
    this._conversionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversionStrategyInput() {
    return this._conversionStrategy;
  }

  // decoding_strategy - computed: false, optional: true, required: false
  private _decodingStrategy?: string; 
  public get decodingStrategy() {
    return this.getStringAttribute('decoding_strategy');
  }
  public set decodingStrategy(value: string) {
    this._decodingStrategy = value;
  }
  public resetDecodingStrategy() {
    this._decodingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingStrategyInput() {
    return this._decodingStrategy;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // metadata_policy - computed: false, optional: true, required: false
  private _metadataPolicy?: string; 
  public get metadataPolicy() {
    return this.getStringAttribute('metadata_policy');
  }
  public set metadataPolicy(value: string) {
    this._metadataPolicy = value;
  }
  public resetMetadataPolicy() {
    this._metadataPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPolicyInput() {
    return this._metadataPolicy;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef {
  /**
  * Specify the apiVersion of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#api_version DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Specify the Kind of the resource, e.g. Password, ACRAccessToken etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Specify the name of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
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
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef {
  /**
  * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to 'SecretStore'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the SecretStore resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef {
  /**
  * GeneratorRef points to a generator custom resource. Deprecated: The generatorRef is not implemented in .data[]. this will be removed with v1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#generator_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#generator_ref}
  */
  readonly generatorRef?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef;
  /**
  * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#store_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#store_ref}
  */
  readonly storeRef?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generator_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRefToTerraform(struct!.generatorRef),
    store_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRefToTerraform(struct!.storeRef),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generator_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRefToHclTerraform(struct!.generatorRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef",
    },
    store_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRefToHclTerraform(struct!.storeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatorRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatorRef = this._generatorRef?.internalValue;
    }
    if (this._storeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeRef = this._storeRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generatorRef.internalValue = undefined;
      this._storeRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generatorRef.internalValue = value.generatorRef;
      this._storeRef.internalValue = value.storeRef;
    }
  }

  // generator_ref - computed: false, optional: true, required: false
  private _generatorRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRefOutputReference(this, "generator_ref");
  public get generatorRef() {
    return this._generatorRef;
  }
  public putGeneratorRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefGeneratorRef) {
    this._generatorRef.internalValue = value;
  }
  public resetGeneratorRef() {
    this._generatorRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorRefInput() {
    return this._generatorRef.internalValue;
  }

  // store_ref - computed: false, optional: true, required: false
  private _storeRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRefOutputReference(this, "store_ref");
  public get storeRef() {
    return this._storeRef;
  }
  public putStoreRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefStoreRef) {
    this._storeRef.internalValue = value;
  }
  public resetStoreRef() {
    this._storeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeRefInput() {
    return this._storeRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData {
  /**
  * RemoteRef points to the remote secret and defines which secret (version/property/..) to fetch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#remote_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#remote_ref}
  */
  readonly remoteRef: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef;
  /**
  * SecretKey defines the key in which the controller stores the value. This is the key in the Kind=Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#secret_key DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#secret_key}
  */
  readonly secretKey: string;
  /**
  * SourceRef allows you to override the source from which the value will pulled from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#source_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#source_ref}
  */
  readonly sourceRef?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRefToTerraform(struct!.remoteRef),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    source_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefToTerraform(struct!.sourceRef),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRefToHclTerraform(struct!.remoteRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteRef = this._remoteRef?.internalValue;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteRef.internalValue = undefined;
      this._secretKey = undefined;
      this._sourceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remoteRef.internalValue = value.remoteRef;
      this._secretKey = value.secretKey;
      this._sourceRef.internalValue = value.sourceRef;
    }
  }

  // remote_ref - computed: false, optional: false, required: true
  private _remoteRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRefOutputReference(this, "remote_ref");
  public get remoteRef() {
    return this._remoteRef;
  }
  public putRemoteRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataRemoteRef) {
    this._remoteRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRefInput() {
    return this._remoteRef.internalValue;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // source_ref - computed: false, optional: true, required: false
  private _sourceRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataSourceRef) {
    this._sourceRef.internalValue = value;
  }
  public resetSourceRef() {
    this._sourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#conversion_strategy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Used to define a decoding Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#decoding_strategy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#decoding_strategy}
  */
  readonly decodingStrategy?: string;
  /**
  * Key is the key used in the Provider, mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#metadata_policy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#metadata_policy}
  */
  readonly metadataPolicy?: string;
  /**
  * Used to select a specific property of the Provider value (if a map), if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#property DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#property}
  */
  readonly property?: string;
  /**
  * Used to select a specific version of the Provider value, if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#version DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtractToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversion_strategy: cdktf.stringToTerraform(struct!.conversionStrategy),
    decoding_strategy: cdktf.stringToTerraform(struct!.decodingStrategy),
    key: cdktf.stringToTerraform(struct!.key),
    metadata_policy: cdktf.stringToTerraform(struct!.metadataPolicy),
    property: cdktf.stringToTerraform(struct!.property),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtractToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversion_strategy: {
      value: cdktf.stringToHclTerraform(struct!.conversionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decodingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_policy: {
      value: cdktf.stringToHclTerraform(struct!.metadataPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversionStrategy = this._conversionStrategy;
    }
    if (this._decodingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodingStrategy = this._decodingStrategy;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._metadataPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPolicy = this._metadataPolicy;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversionStrategy = undefined;
      this._decodingStrategy = undefined;
      this._key = undefined;
      this._metadataPolicy = undefined;
      this._property = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conversionStrategy = value.conversionStrategy;
      this._decodingStrategy = value.decodingStrategy;
      this._key = value.key;
      this._metadataPolicy = value.metadataPolicy;
      this._property = value.property;
      this._version = value.version;
    }
  }

  // conversion_strategy - computed: false, optional: true, required: false
  private _conversionStrategy?: string; 
  public get conversionStrategy() {
    return this.getStringAttribute('conversion_strategy');
  }
  public set conversionStrategy(value: string) {
    this._conversionStrategy = value;
  }
  public resetConversionStrategy() {
    this._conversionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversionStrategyInput() {
    return this._conversionStrategy;
  }

  // decoding_strategy - computed: false, optional: true, required: false
  private _decodingStrategy?: string; 
  public get decodingStrategy() {
    return this.getStringAttribute('decoding_strategy');
  }
  public set decodingStrategy(value: string) {
    this._decodingStrategy = value;
  }
  public resetDecodingStrategy() {
    this._decodingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingStrategyInput() {
    return this._decodingStrategy;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // metadata_policy - computed: false, optional: true, required: false
  private _metadataPolicy?: string; 
  public get metadataPolicy() {
    return this.getStringAttribute('metadata_policy');
  }
  public set metadataPolicy(value: string) {
    this._metadataPolicy = value;
  }
  public resetMetadataPolicy() {
    this._metadataPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPolicyInput() {
    return this._metadataPolicy;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName {
  /**
  * Finds secrets base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#regexp DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#regexp}
  */
  readonly regexp?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindNameToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexp: cdktf.stringToTerraform(struct!.regexp),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindNameToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexp = value.regexp;
    }
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#conversion_strategy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Used to define a decoding Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#decoding_strategy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#decoding_strategy}
  */
  readonly decodingStrategy?: string;
  /**
  * Finds secrets based on the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName;
  /**
  * A root path to start the find operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#path DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Find secrets based on tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#tags DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversion_strategy: cdktf.stringToTerraform(struct!.conversionStrategy),
    decoding_strategy: cdktf.stringToTerraform(struct!.decodingStrategy),
    name: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindNameToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversion_strategy: {
      value: cdktf.stringToHclTerraform(struct!.conversionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decodingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversionStrategy = this._conversionStrategy;
    }
    if (this._decodingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodingStrategy = this._decodingStrategy;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversionStrategy = undefined;
      this._decodingStrategy = undefined;
      this._name.internalValue = undefined;
      this._path = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conversionStrategy = value.conversionStrategy;
      this._decodingStrategy = value.decodingStrategy;
      this._name.internalValue = value.name;
      this._path = value.path;
      this._tags = value.tags;
    }
  }

  // conversion_strategy - computed: false, optional: true, required: false
  private _conversionStrategy?: string; 
  public get conversionStrategy() {
    return this.getStringAttribute('conversion_strategy');
  }
  public set conversionStrategy(value: string) {
    this._conversionStrategy = value;
  }
  public resetConversionStrategy() {
    this._conversionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversionStrategyInput() {
    return this._conversionStrategy;
  }

  // decoding_strategy - computed: false, optional: true, required: false
  private _decodingStrategy?: string; 
  public get decodingStrategy() {
    return this.getStringAttribute('decoding_strategy');
  }
  public set decodingStrategy(value: string) {
    this._decodingStrategy = value;
  }
  public resetDecodingStrategy() {
    this._decodingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingStrategyInput() {
    return this._decodingStrategy;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp {
  /**
  * Used to define the regular expression of a re.Compiler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#source DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#source}
  */
  readonly source: string;
  /**
  * Used to define the target pattern of a ReplaceAll operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#target DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#target}
  */
  readonly target: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexpToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexpToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform {
  /**
  * Used to define the template to apply on the secret name. '.value ' will specify the secret name in the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#template DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#template}
  */
  readonly template: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransformToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransformToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite {
  /**
  * Used to rewrite with regular expressions. The resulting key will be the output of a regexp.ReplaceAll operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#regexp DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp;
  /**
  * Used to apply string transformation on the secrets. The resulting key will be the output of the template applied by the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#transform DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#transform}
  */
  readonly transform?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexp: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexpToTerraform(struct!.regexp),
    transform: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransformToTerraform(struct!.transform),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regexp: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp",
    },
    transform: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransformToHclTerraform(struct!.transform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    if (this._transform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexp.internalValue = undefined;
      this._transform.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexp.internalValue = value.regexp;
      this._transform.internalValue = value.transform;
    }
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteRegexp) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }

  // transform - computed: false, optional: true, required: false
  private _transform = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }
  public putTransform(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteTransform) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef {
  /**
  * Specify the apiVersion of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#api_version DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Specify the Kind of the resource, e.g. Password, ACRAccessToken etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Specify the name of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
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
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef {
  /**
  * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to 'SecretStore'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the SecretStore resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef {
  /**
  * GeneratorRef points to a generator custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#generator_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#generator_ref}
  */
  readonly generatorRef?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef;
  /**
  * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#store_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#store_ref}
  */
  readonly storeRef?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generator_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRefToTerraform(struct!.generatorRef),
    store_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRefToTerraform(struct!.storeRef),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generator_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRefToHclTerraform(struct!.generatorRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef",
    },
    store_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRefToHclTerraform(struct!.storeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatorRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatorRef = this._generatorRef?.internalValue;
    }
    if (this._storeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeRef = this._storeRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generatorRef.internalValue = undefined;
      this._storeRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generatorRef.internalValue = value.generatorRef;
      this._storeRef.internalValue = value.storeRef;
    }
  }

  // generator_ref - computed: false, optional: true, required: false
  private _generatorRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRefOutputReference(this, "generator_ref");
  public get generatorRef() {
    return this._generatorRef;
  }
  public putGeneratorRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefGeneratorRef) {
    this._generatorRef.internalValue = value;
  }
  public resetGeneratorRef() {
    this._generatorRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorRefInput() {
    return this._generatorRef.internalValue;
  }

  // store_ref - computed: false, optional: true, required: false
  private _storeRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRefOutputReference(this, "store_ref");
  public get storeRef() {
    return this._storeRef;
  }
  public putStoreRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefStoreRef) {
    this._storeRef.internalValue = value;
  }
  public resetStoreRef() {
    this._storeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeRefInput() {
    return this._storeRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom {
  /**
  * Used to extract multiple key/value pairs from one secret Note: Extract does not support sourceRef.Generator or sourceRef.GeneratorRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#extract DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#extract}
  */
  readonly extract?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract;
  /**
  * Used to find secrets based on tags or regular expressions Note: Find does not support sourceRef.Generator or sourceRef.GeneratorRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#find DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#find}
  */
  readonly find?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind;
  /**
  * Used to rewrite secret Keys after getting them from the secret Provider Multiple Rewrite operations can be provided. They are applied in a layered order (first to last)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#rewrite DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#rewrite}
  */
  readonly rewrite?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite[] | cdktf.IResolvable;
  /**
  * SourceRef points to a store or generator which contains secret values ready to use. Use this in combination with Extract or Find pull values out of a specific SecretStore. When sourceRef points to a generator Extract or Find is not supported. The generator returns a static map of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#source_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#source_ref}
  */
  readonly sourceRef?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtractToTerraform(struct!.extract),
    find: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindToTerraform(struct!.find),
    rewrite: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteToTerraform, false)(struct!.rewrite),
    source_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefToTerraform(struct!.sourceRef),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extract: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtractToHclTerraform(struct!.extract),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract",
    },
    find: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindToHclTerraform(struct!.find),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind",
    },
    rewrite: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteToHclTerraform, false)(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteList",
    },
    source_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract?.internalValue;
    }
    if (this._find?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.find = this._find?.internalValue;
    }
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extract.internalValue = undefined;
      this._find.internalValue = undefined;
      this._rewrite.internalValue = undefined;
      this._sourceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extract.internalValue = value.extract;
      this._find.internalValue = value.find;
      this._rewrite.internalValue = value.rewrite;
      this._sourceRef.internalValue = value.sourceRef;
    }
  }

  // extract - computed: false, optional: true, required: false
  private _extract = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromExtract) {
    this._extract.internalValue = value;
  }
  public resetExtract() {
    this._extract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract.internalValue;
  }

  // find - computed: false, optional: true, required: false
  private _find = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFindOutputReference(this, "find");
  public get find() {
    return this._find;
  }
  public putFind(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromFind) {
    this._find.internalValue = value;
  }
  public resetFind() {
    this._find.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findInput() {
    return this._find.internalValue;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewriteList(this, "rewrite", false);
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromRewrite[] | cdktf.IResolvable) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // source_ref - computed: false, optional: true, required: false
  private _sourceRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromSourceRef) {
    this._sourceRef.internalValue = value;
  }
  public resetSourceRef() {
    this._sourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef {
  /**
  * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to 'SecretStore'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the SecretStore resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRefToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#annotations DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#labels DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadataToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#template_as DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#template_as}
  */
  readonly templateAs?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    template_as: cdktf.stringToTerraform(struct!.templateAs),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_as: {
      value: cdktf.stringToHclTerraform(struct!.templateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._templateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateAs = this._templateAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._templateAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._templateAs = value.templateAs;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // template_as - computed: false, optional: true, required: false
  private _templateAs?: string; 
  public get templateAs() {
    return this.getStringAttribute('template_as');
  }
  public set templateAs(value: string) {
    this._templateAs = value;
  }
  public resetTemplateAs() {
    this._templateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateAsInput() {
    return this._templateAs;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#items DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#items}
  */
  readonly items: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsList",
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

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._name = value.name;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#template_as DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#template_as}
  */
  readonly templateAs?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    template_as: cdktf.stringToTerraform(struct!.templateAs),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_as: {
      value: cdktf.stringToHclTerraform(struct!.templateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._templateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateAs = this._templateAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._templateAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._templateAs = value.templateAs;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // template_as - computed: false, optional: true, required: false
  private _templateAs?: string; 
  public get templateAs() {
    return this.getStringAttribute('template_as');
  }
  public set templateAs(value: string) {
    this._templateAs = value;
  }
  public resetTemplateAs() {
    this._templateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateAsInput() {
    return this._templateAs;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#items DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#items}
  */
  readonly items: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsList",
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

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._name = value.name;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#config_map DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#literal DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#literal}
  */
  readonly literal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#secret DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#target DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#target}
  */
  readonly target?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapToTerraform(struct!.configMap),
    literal: cdktf.stringToTerraform(struct!.literal),
    secret: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretToTerraform(struct!.secret),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap",
    },
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._literal = undefined;
      this._secret.internalValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._literal = value.literal;
      this._secret.internalValue = value.secret;
      this._target = value.target;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#data DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * EngineVersion specifies the template engine version that should be used to compile/execute the template specified in .data and .templateFrom[].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#engine_version DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#merge_policy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#merge_policy}
  */
  readonly mergePolicy?: string;
  /**
  * ExternalSecretTemplateMetadata defines metadata fields for the Secret blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#metadata DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#template_from DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#template_from}
  */
  readonly templateFrom?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#type DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    merge_policy: cdktf.stringToTerraform(struct!.mergePolicy),
    metadata: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadataToTerraform(struct!.metadata),
    template_from: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromToTerraform, false)(struct!.templateFrom),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_policy: {
      value: cdktf.stringToHclTerraform(struct!.mergePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata",
    },
    template_from: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromToHclTerraform, false)(struct!.templateFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromList",
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

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._mergePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergePolicy = this._mergePolicy;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._templateFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateFrom = this._templateFrom?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._engineVersion = undefined;
      this._mergePolicy = undefined;
      this._metadata.internalValue = undefined;
      this._templateFrom.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._engineVersion = value.engineVersion;
      this._mergePolicy = value.mergePolicy;
      this._metadata.internalValue = value.metadata;
      this._templateFrom.internalValue = value.templateFrom;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // merge_policy - computed: false, optional: true, required: false
  private _mergePolicy?: string; 
  public get mergePolicy() {
    return this.getStringAttribute('merge_policy');
  }
  public set mergePolicy(value: string) {
    this._mergePolicy = value;
  }
  public resetMergePolicy() {
    this._mergePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergePolicyInput() {
    return this._mergePolicy;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // template_from - computed: false, optional: true, required: false
  private _templateFrom = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFromList(this, "template_from", false);
  public get templateFrom() {
    return this._templateFrom;
  }
  public putTemplateFrom(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable) {
    this._templateFrom.internalValue = value;
  }
  public resetTemplateFrom() {
    this._templateFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFromInput() {
    return this._templateFrom.internalValue;
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
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget {
  /**
  * CreationPolicy defines rules on how to create the resulting Secret Defaults to 'Owner'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#creation_policy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#creation_policy}
  */
  readonly creationPolicy?: string;
  /**
  * DeletionPolicy defines rules on how to delete the resulting Secret Defaults to 'Retain'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#deletion_policy DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Immutable defines if the final secret will be immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#immutable DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Name defines the name of the Secret resource to be managed This field is immutable Defaults to the .metadata.name of the ExternalSecret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Template defines a blueprint for the created Secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#template DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#template}
  */
  readonly template?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_policy: cdktf.stringToTerraform(struct!.creationPolicy),
    deletion_policy: cdktf.stringToTerraform(struct!.deletionPolicy),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    name: cdktf.stringToTerraform(struct!.name),
    template: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateToTerraform(struct!.template),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_policy: {
      value: cdktf.stringToHclTerraform(struct!.creationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    immutable: {
      value: cdktf.booleanToHclTerraform(struct!.immutable),
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
    template: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationPolicy = this._creationPolicy;
    }
    if (this._deletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPolicy = this._deletionPolicy;
    }
    if (this._immutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutable = this._immutable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationPolicy = undefined;
      this._deletionPolicy = undefined;
      this._immutable = undefined;
      this._name = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationPolicy = value.creationPolicy;
      this._deletionPolicy = value.deletionPolicy;
      this._immutable = value.immutable;
      this._name = value.name;
      this._template.internalValue = value.template;
    }
  }

  // creation_policy - computed: false, optional: true, required: false
  private _creationPolicy?: string; 
  public get creationPolicy() {
    return this.getStringAttribute('creation_policy');
  }
  public set creationPolicy(value: string) {
    this._creationPolicy = value;
  }
  public resetCreationPolicy() {
    this._creationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationPolicyInput() {
    return this._creationPolicy;
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
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
  private _template = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec {
  /**
  * Data defines the connection between the Kubernetes Secret keys and the Provider data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#data DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#data}
  */
  readonly data?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData[] | cdktf.IResolvable;
  /**
  * DataFrom is used to fetch all properties from a specific Provider data If multiple entries are specified, the Secret keys are merged in the specified order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#data_from DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#data_from}
  */
  readonly dataFrom?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom[] | cdktf.IResolvable;
  /**
  * RefreshInterval is the amount of time before the values are read again from the SecretStore provider Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' May be set to zero to fetch and create it once. Defaults to 1h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#refresh_interval DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#secret_store_ref DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#secret_store_ref}
  */
  readonly secretStoreRef?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef;
  /**
  * ExternalSecretTarget defines the Kubernetes Secret to be created There can be only one target per ExternalSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#target DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#target}
  */
  readonly target?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataToTerraform, false)(struct!.data),
    data_from: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromToTerraform, false)(struct!.dataFrom),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    secret_store_ref: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRefToTerraform(struct!.secretStoreRef),
    target: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetToTerraform(struct!.target),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataList",
    },
    data_from: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromToHclTerraform, false)(struct!.dataFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromList",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_store_ref: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRefToHclTerraform(struct!.secretStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef",
    },
    target: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._dataFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFrom = this._dataFrom?.internalValue;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._secretStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStoreRef = this._secretStoreRef?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._dataFrom.internalValue = undefined;
      this._refreshInterval = undefined;
      this._secretStoreRef.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
      this._dataFrom.internalValue = value.dataFrom;
      this._refreshInterval = value.refreshInterval;
      this._secretStoreRef.internalValue = value.secretStoreRef;
      this._target.internalValue = value.target;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // data_from - computed: false, optional: true, required: false
  private _dataFrom = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFromList(this, "data_from", false);
  public get dataFrom() {
    return this._dataFrom;
  }
  public putDataFrom(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecDataFrom[] | cdktf.IResolvable) {
    this._dataFrom.internalValue = value;
  }
  public resetDataFrom() {
    this._dataFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFromInput() {
    return this._dataFrom.internalValue;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // secret_store_ref - computed: false, optional: true, required: false
  private _secretStoreRef = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRefOutputReference(this, "secret_store_ref");
  public get secretStoreRef() {
    return this._secretStoreRef;
  }
  public putSecretStoreRef(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecSecretStoreRef) {
    this._secretStoreRef.internalValue = value;
  }
  public resetSecretStoreRef() {
    this._secretStoreRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreRefInput() {
    return this._secretStoreRef.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#operator DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#values DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#match_expressions DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#match_labels DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#operator DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#values DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#match_expressions DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#match_labels DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsOutputReference {
    return new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec {
  /**
  * The metadata of the external secrets to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#external_secret_metadata DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#external_secret_metadata}
  */
  readonly externalSecretMetadata?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata;
  /**
  * The name of the external secrets to be created defaults to the name of the ClusterExternalSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#external_secret_name DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#external_secret_name}
  */
  readonly externalSecretName?: string;
  /**
  * The spec for the ExternalSecrets to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#external_secret_spec DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#external_secret_spec}
  */
  readonly externalSecretSpec: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec;
  /**
  * The labels to select by to find the Namespaces to create the ExternalSecrets in. Deprecated: Use NamespaceSelectors instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#namespace_selector DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector;
  /**
  * A list of labels to select by to find the Namespaces to create the ExternalSecrets in. The selectors are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#namespace_selectors DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#namespace_selectors}
  */
  readonly namespaceSelectors?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors[] | cdktf.IResolvable;
  /**
  * Choose namespaces by name. This field is ORed with anything that NamespaceSelectors ends up choosing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#namespaces DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * The time in which the controller should reconcile its objects and recheck namespaces for labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#refresh_time DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest#refresh_time}
  */
  readonly refreshTime?: string;
}

export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecToTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_secret_metadata: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadataToTerraform(struct!.externalSecretMetadata),
    external_secret_name: cdktf.stringToTerraform(struct!.externalSecretName),
    external_secret_spec: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecToTerraform(struct!.externalSecretSpec),
    namespace_selector: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespace_selectors: cdktf.listMapper(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsToTerraform, false)(struct!.namespaceSelectors),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    refresh_time: cdktf.stringToTerraform(struct!.refreshTime),
  }
}


export function dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_secret_metadata: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadataToHclTerraform(struct!.externalSecretMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata",
    },
    external_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.externalSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_secret_spec: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecToHclTerraform(struct!.externalSecretSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec",
    },
    namespace_selector: {
      value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector",
    },
    namespace_selectors: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsToHclTerraform, false)(struct!.namespaceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsList",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_time: {
      value: cdktf.stringToHclTerraform(struct!.refreshTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalSecretMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSecretMetadata = this._externalSecretMetadata?.internalValue;
    }
    if (this._externalSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSecretName = this._externalSecretName;
    }
    if (this._externalSecretSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSecretSpec = this._externalSecretSpec?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaceSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelectors = this._namespaceSelectors?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._refreshTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTime = this._refreshTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalSecretMetadata.internalValue = undefined;
      this._externalSecretName = undefined;
      this._externalSecretSpec.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaceSelectors.internalValue = undefined;
      this._namespaces = undefined;
      this._refreshTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalSecretMetadata.internalValue = value.externalSecretMetadata;
      this._externalSecretName = value.externalSecretName;
      this._externalSecretSpec.internalValue = value.externalSecretSpec;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaceSelectors.internalValue = value.namespaceSelectors;
      this._namespaces = value.namespaces;
      this._refreshTime = value.refreshTime;
    }
  }

  // external_secret_metadata - computed: false, optional: true, required: false
  private _externalSecretMetadata = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadataOutputReference(this, "external_secret_metadata");
  public get externalSecretMetadata() {
    return this._externalSecretMetadata;
  }
  public putExternalSecretMetadata(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretMetadata) {
    this._externalSecretMetadata.internalValue = value;
  }
  public resetExternalSecretMetadata() {
    this._externalSecretMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecretMetadataInput() {
    return this._externalSecretMetadata.internalValue;
  }

  // external_secret_name - computed: false, optional: true, required: false
  private _externalSecretName?: string; 
  public get externalSecretName() {
    return this.getStringAttribute('external_secret_name');
  }
  public set externalSecretName(value: string) {
    this._externalSecretName = value;
  }
  public resetExternalSecretName() {
    this._externalSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecretNameInput() {
    return this._externalSecretName;
  }

  // external_secret_spec - computed: false, optional: false, required: true
  private _externalSecretSpec = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpecOutputReference(this, "external_secret_spec");
  public get externalSecretSpec() {
    return this._externalSecretSpec;
  }
  public putExternalSecretSpec(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecExternalSecretSpec) {
    this._externalSecretSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecretSpecInput() {
    return this._externalSecretSpec.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespace_selectors - computed: false, optional: true, required: false
  private _namespaceSelectors = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectorsList(this, "namespace_selectors", false);
  public get namespaceSelectors() {
    return this._namespaceSelectors;
  }
  public putNamespaceSelectors(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecNamespaceSelectors[] | cdktf.IResolvable) {
    this._namespaceSelectors.internalValue = value;
  }
  public resetNamespaceSelectors() {
    this._namespaceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorsInput() {
    return this._namespaceSelectors.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // refresh_time - computed: false, optional: true, required: false
  private _refreshTime?: string; 
  public get refreshTime() {
    return this.getStringAttribute('refresh_time');
  }
  public set refreshTime(value: string) {
    this._refreshTime = value;
  }
  public resetRefreshTime() {
    this._refreshTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTimeInput() {
    return this._refreshTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest k8s_external_secrets_io_cluster_external_secret_v1beta1_manifest}
*/
export class DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_external_secrets_io_cluster_external_secret_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExternalSecretsIoClusterExternalSecretV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_external_secrets_io_cluster_external_secret_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/external_secrets_io_cluster_external_secret_v1beta1_manifest k8s_external_secrets_io_cluster_external_secret_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_external_secrets_io_cluster_external_secret_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec) {
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
      metadata: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoClusterExternalSecretV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
