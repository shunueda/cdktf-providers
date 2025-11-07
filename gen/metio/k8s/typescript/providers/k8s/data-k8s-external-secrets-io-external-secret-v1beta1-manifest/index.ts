// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#metadata DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata;
  /**
  * ExternalSecretSpec defines the desired state of ExternalSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#spec DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec;
}
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#annotations DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#labels DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#namespace DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadataToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#conversion_strategy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Used to define a decoding Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#decoding_strategy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#decoding_strategy}
  */
  readonly decodingStrategy?: string;
  /**
  * Key is the key used in the Provider, mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#metadata_policy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#metadata_policy}
  */
  readonly metadataPolicy?: string;
  /**
  * Used to select a specific property of the Provider value (if a map), if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#property DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#property}
  */
  readonly property?: string;
  /**
  * Used to select a specific version of the Provider value, if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#version DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef | cdktf.IResolvable): any {
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


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef {
  /**
  * Specify the apiVersion of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#api_version DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Specify the Kind of the resource, e.g. Password, ACRAccessToken etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Specify the name of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef | cdktf.IResolvable): any {
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


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef {
  /**
  * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to 'SecretStore'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the SecretStore resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef {
  /**
  * GeneratorRef points to a generator custom resource. Deprecated: The generatorRef is not implemented in .data[]. this will be removed with v1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#generator_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#generator_ref}
  */
  readonly generatorRef?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef;
  /**
  * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#store_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#store_ref}
  */
  readonly storeRef?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generator_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRefToTerraform(struct!.generatorRef),
    store_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRefToTerraform(struct!.storeRef),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generator_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRefToHclTerraform(struct!.generatorRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef",
    },
    store_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRefToHclTerraform(struct!.storeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
  private _generatorRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRefOutputReference(this, "generator_ref");
  public get generatorRef() {
    return this._generatorRef;
  }
  public putGeneratorRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefGeneratorRef) {
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
  private _storeRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRefOutputReference(this, "store_ref");
  public get storeRef() {
    return this._storeRef;
  }
  public putStoreRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefStoreRef) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData {
  /**
  * RemoteRef points to the remote secret and defines which secret (version/property/..) to fetch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#remote_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#remote_ref}
  */
  readonly remoteRef: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef;
  /**
  * SecretKey defines the key in which the controller stores the value. This is the key in the Kind=Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#secret_key DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#secret_key}
  */
  readonly secretKey: string;
  /**
  * SourceRef allows you to override the source from which the value will pulled from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#source_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#source_ref}
  */
  readonly sourceRef?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRefToTerraform(struct!.remoteRef),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    source_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefToTerraform(struct!.sourceRef),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRefToHclTerraform(struct!.remoteRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData | cdktf.IResolvable | undefined) {
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
  private _remoteRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRefOutputReference(this, "remote_ref");
  public get remoteRef() {
    return this._remoteRef;
  }
  public putRemoteRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataRemoteRef) {
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
  private _sourceRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataSourceRef) {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#conversion_strategy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Used to define a decoding Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#decoding_strategy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#decoding_strategy}
  */
  readonly decodingStrategy?: string;
  /**
  * Key is the key used in the Provider, mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#metadata_policy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#metadata_policy}
  */
  readonly metadataPolicy?: string;
  /**
  * Used to select a specific property of the Provider value (if a map), if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#property DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#property}
  */
  readonly property?: string;
  /**
  * Used to select a specific version of the Provider value, if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#version DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtractToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract | cdktf.IResolvable): any {
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


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtractToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName {
  /**
  * Finds secrets base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#regexp DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#regexp}
  */
  readonly regexp?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindNameToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexp: cdktf.stringToTerraform(struct!.regexp),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindNameToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#conversion_strategy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Used to define a decoding Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#decoding_strategy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#decoding_strategy}
  */
  readonly decodingStrategy?: string;
  /**
  * Finds secrets based on the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName;
  /**
  * A root path to start the find operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#path DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Find secrets based on tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#tags DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversion_strategy: cdktf.stringToTerraform(struct!.conversionStrategy),
    decoding_strategy: cdktf.stringToTerraform(struct!.decodingStrategy),
    name: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindNameToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind | cdktf.IResolvable): any {
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
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName",
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind | cdktf.IResolvable | undefined) {
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
  private _name = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindName) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp {
  /**
  * Used to define the regular expression of a re.Compiler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#source DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#source}
  */
  readonly source: string;
  /**
  * Used to define the target pattern of a ReplaceAll operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#target DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#target}
  */
  readonly target: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexpToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexpToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform {
  /**
  * Used to define the template to apply on the secret name. '.value ' will specify the secret name in the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#template DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#template}
  */
  readonly template: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransformToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransformToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite {
  /**
  * Used to rewrite with regular expressions. The resulting key will be the output of a regexp.ReplaceAll operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#regexp DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp;
  /**
  * Used to apply string transformation on the secrets. The resulting key will be the output of the template applied by the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#transform DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#transform}
  */
  readonly transform?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexp: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexpToTerraform(struct!.regexp),
    transform: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransformToTerraform(struct!.transform),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regexp: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp",
    },
    transform: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransformToHclTerraform(struct!.transform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite | cdktf.IResolvable | undefined) {
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
  private _regexp = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteRegexp) {
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
  private _transform = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }
  public putTransform(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteTransform) {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef {
  /**
  * Specify the apiVersion of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#api_version DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Specify the Kind of the resource, e.g. Password, ACRAccessToken etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Specify the name of the generator resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable): any {
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


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef {
  /**
  * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to 'SecretStore'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the SecretStore resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef {
  /**
  * GeneratorRef points to a generator custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#generator_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#generator_ref}
  */
  readonly generatorRef?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef;
  /**
  * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#store_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#store_ref}
  */
  readonly storeRef?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generator_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRefToTerraform(struct!.generatorRef),
    store_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRefToTerraform(struct!.storeRef),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generator_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRefToHclTerraform(struct!.generatorRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef",
    },
    store_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRefToHclTerraform(struct!.storeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef | cdktf.IResolvable | undefined) {
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
  private _generatorRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRefOutputReference(this, "generator_ref");
  public get generatorRef() {
    return this._generatorRef;
  }
  public putGeneratorRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefGeneratorRef) {
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
  private _storeRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRefOutputReference(this, "store_ref");
  public get storeRef() {
    return this._storeRef;
  }
  public putStoreRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefStoreRef) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom {
  /**
  * Used to extract multiple key/value pairs from one secret Note: Extract does not support sourceRef.Generator or sourceRef.GeneratorRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#extract DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#extract}
  */
  readonly extract?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract;
  /**
  * Used to find secrets based on tags or regular expressions Note: Find does not support sourceRef.Generator or sourceRef.GeneratorRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#find DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#find}
  */
  readonly find?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind;
  /**
  * Used to rewrite secret Keys after getting them from the secret Provider Multiple Rewrite operations can be provided. They are applied in a layered order (first to last)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#rewrite DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#rewrite}
  */
  readonly rewrite?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite[] | cdktf.IResolvable;
  /**
  * SourceRef points to a store or generator which contains secret values ready to use. Use this in combination with Extract or Find pull values out of a specific SecretStore. When sourceRef points to a generator Extract or Find is not supported. The generator returns a static map of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#source_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#source_ref}
  */
  readonly sourceRef?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtractToTerraform(struct!.extract),
    find: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindToTerraform(struct!.find),
    rewrite: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteToTerraform, false)(struct!.rewrite),
    source_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefToTerraform(struct!.sourceRef),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extract: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtractToHclTerraform(struct!.extract),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract",
    },
    find: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindToHclTerraform(struct!.find),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind",
    },
    rewrite: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteToHclTerraform, false)(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteList",
    },
    source_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom | cdktf.IResolvable | undefined) {
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
  private _extract = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromExtract) {
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
  private _find = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFindOutputReference(this, "find");
  public get find() {
    return this._find;
  }
  public putFind(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromFind) {
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
  private _rewrite = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewriteList(this, "rewrite", false);
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromRewrite[] | cdktf.IResolvable) {
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
  private _sourceRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromSourceRef) {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef {
  /**
  * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to 'SecretStore'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#kind DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the SecretStore resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#annotations DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#labels DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadataToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#template_as DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#template_as}
  */
  readonly templateAs?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    template_as: cdktf.stringToTerraform(struct!.templateAs),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#items DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#items}
  */
  readonly items: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsList",
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#template_as DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#template_as}
  */
  readonly templateAs?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    template_as: cdktf.stringToTerraform(struct!.templateAs),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#items DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#items}
  */
  readonly items: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsList",
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#config_map DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#literal DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#literal}
  */
  readonly literal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#secret DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#target DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#target}
  */
  readonly target?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapToTerraform(struct!.configMap),
    literal: cdktf.stringToTerraform(struct!.literal),
    secret: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretToTerraform(struct!.secret),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap",
    },
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret",
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromConfigMap) {
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
  private _secret = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromSecret) {
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#data DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * EngineVersion specifies the template engine version that should be used to compile/execute the template specified in .data and .templateFrom[].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#engine_version DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#merge_policy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#merge_policy}
  */
  readonly mergePolicy?: string;
  /**
  * ExternalSecretTemplateMetadata defines metadata fields for the Secret blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#metadata DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#template_from DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#template_from}
  */
  readonly templateFrom?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#type DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    merge_policy: cdktf.stringToTerraform(struct!.mergePolicy),
    metadata: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadataToTerraform(struct!.metadata),
    template_from: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromToTerraform, false)(struct!.templateFrom),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate | cdktf.IResolvable): any {
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
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata",
    },
    template_from: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromToHclTerraform, false)(struct!.templateFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromList",
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

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateMetadata) {
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
  private _templateFrom = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFromList(this, "template_from", false);
  public get templateFrom() {
    return this._templateFrom;
  }
  public putTemplateFrom(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget {
  /**
  * CreationPolicy defines rules on how to create the resulting Secret Defaults to 'Owner'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#creation_policy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#creation_policy}
  */
  readonly creationPolicy?: string;
  /**
  * DeletionPolicy defines rules on how to delete the resulting Secret Defaults to 'Retain'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#deletion_policy DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Immutable defines if the final secret will be immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#immutable DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Name defines the name of the Secret resource to be managed This field is immutable Defaults to the .metadata.name of the ExternalSecret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Template defines a blueprint for the created Secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#template DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#template}
  */
  readonly template?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_policy: cdktf.stringToTerraform(struct!.creationPolicy),
    deletion_policy: cdktf.stringToTerraform(struct!.deletionPolicy),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    name: cdktf.stringToTerraform(struct!.name),
    template: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateToTerraform(struct!.template),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget | cdktf.IResolvable): any {
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
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetTemplate) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec {
  /**
  * Data defines the connection between the Kubernetes Secret keys and the Provider data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#data DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#data}
  */
  readonly data?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData[] | cdktf.IResolvable;
  /**
  * DataFrom is used to fetch all properties from a specific Provider data If multiple entries are specified, the Secret keys are merged in the specified order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#data_from DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#data_from}
  */
  readonly dataFrom?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom[] | cdktf.IResolvable;
  /**
  * RefreshInterval is the amount of time before the values are read again from the SecretStore provider Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' May be set to zero to fetch and create it once. Defaults to 1h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#refresh_interval DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#secret_store_ref DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#secret_store_ref}
  */
  readonly secretStoreRef?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef;
  /**
  * ExternalSecretTarget defines the Kubernetes Secret to be created There can be only one target per ExternalSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#target DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest#target}
  */
  readonly target?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget;
}

export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataToTerraform, false)(struct!.data),
    data_from: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromToTerraform, false)(struct!.dataFrom),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    secret_store_ref: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRefToTerraform(struct!.secretStoreRef),
    target: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetToTerraform(struct!.target),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataList",
    },
    data_from: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromToHclTerraform, false)(struct!.dataFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromList",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_store_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRefToHclTerraform(struct!.secretStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef",
    },
    target: {
      value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _data = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecData[] | cdktf.IResolvable) {
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
  private _dataFrom = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFromList(this, "data_from", false);
  public get dataFrom() {
    return this._dataFrom;
  }
  public putDataFrom(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecDataFrom[] | cdktf.IResolvable) {
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
  private _secretStoreRef = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRefOutputReference(this, "secret_store_ref");
  public get secretStoreRef() {
    return this._secretStoreRef;
  }
  public putSecretStoreRef(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecSecretStoreRef) {
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
  private _target = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecTarget) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest k8s_external_secrets_io_external_secret_v1beta1_manifest}
*/
export class DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_external_secrets_io_external_secret_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExternalSecretsIoExternalSecretV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_external_secrets_io_external_secret_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1beta1_manifest k8s_external_secrets_io_external_secret_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_external_secrets_io_external_secret_v1beta1_manifest',
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
  private _metadata = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec) {
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
      metadata: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
