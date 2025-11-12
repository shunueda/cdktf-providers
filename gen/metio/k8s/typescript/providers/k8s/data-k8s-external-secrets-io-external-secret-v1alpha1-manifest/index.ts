// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#metadata DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata;
  /**
  * ExternalSecretSpec defines the desired state of ExternalSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#spec DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec;
}
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#annotations DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#labels DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#namespace DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#conversion_strategy DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Key is the key used in the Provider, mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Used to select a specific property of the Provider value (if a map), if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#property DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#property}
  */
  readonly property?: string;
  /**
  * Used to select a specific version of the Provider value, if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#version DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversion_strategy: cdktf.stringToTerraform(struct!.conversionStrategy),
    key: cdktf.stringToTerraform(struct!.key),
    property: cdktf.stringToTerraform(struct!.property),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversionStrategy = this._conversionStrategy;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversionStrategy = undefined;
      this._key = undefined;
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
      this._key = value.key;
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData {
  /**
  * ExternalSecretDataRemoteRef defines Provider data location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#remote_ref DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#remote_ref}
  */
  readonly remoteRef: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#secret_key DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#secret_key}
  */
  readonly secretKey: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_ref: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRefToTerraform(struct!.remoteRef),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRefToHclTerraform(struct!.remoteRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteRef.internalValue = undefined;
      this._secretKey = undefined;
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
    }
  }

  // remote_ref - computed: false, optional: false, required: true
  private _remoteRef = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRefOutputReference(this, "remote_ref");
  public get remoteRef() {
    return this._remoteRef;
  }
  public putRemoteRef(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataRemoteRef) {
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
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom {
  /**
  * Used to define a conversion Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#conversion_strategy DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#conversion_strategy}
  */
  readonly conversionStrategy?: string;
  /**
  * Key is the key used in the Provider, mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Used to select a specific property of the Provider value (if a map), if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#property DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#property}
  */
  readonly property?: string;
  /**
  * Used to select a specific version of the Provider value, if supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#version DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversion_strategy: cdktf.stringToTerraform(struct!.conversionStrategy),
    key: cdktf.stringToTerraform(struct!.key),
    property: cdktf.stringToTerraform(struct!.property),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversionStrategy = this._conversionStrategy;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversionStrategy = undefined;
      this._key = undefined;
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
      this._key = value.key;
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef {
  /**
  * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to 'SecretStore'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#kind DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the SecretStore resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRefToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRefToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#annotations DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#labels DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadataToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadataToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#key}
  */
  readonly key: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#items DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#items}
  */
  readonly items: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsList",
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#key DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#key}
  */
  readonly key: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#items DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#items}
  */
  readonly items: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsList",
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#config_map DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#secret DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapToTerraform(struct!.configMap),
    secret: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretToTerraform(struct!.secret),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap",
    },
    secret: {
      value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromOutputReference {
    return new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#data DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * EngineVersion specifies the template engine version that should be used to compile/execute the template specified in .data and .templateFrom[].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#engine_version DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * ExternalSecretTemplateMetadata defines metadata fields for the Secret blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#metadata DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#template_from DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#template_from}
  */
  readonly templateFrom?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#type DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    metadata: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadataToTerraform(struct!.metadata),
    template_from: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromToTerraform, false)(struct!.templateFrom),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate | cdktf.IResolvable): any {
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
    metadata: {
      value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata",
    },
    template_from: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromToHclTerraform, false)(struct!.templateFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromList",
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

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._engineVersion = undefined;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateMetadata) {
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
  private _templateFrom = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFromList(this, "template_from", false);
  public get templateFrom() {
    return this._templateFrom;
  }
  public putTemplateFrom(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateTemplateFrom[] | cdktf.IResolvable) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget {
  /**
  * CreationPolicy defines rules on how to create the resulting Secret Defaults to 'Owner'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#creation_policy DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#creation_policy}
  */
  readonly creationPolicy?: string;
  /**
  * Immutable defines if the final secret will be immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#immutable DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Name defines the name of the Secret resource to be managed This field is immutable Defaults to the .metadata.name of the ExternalSecret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#name DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Template defines a blueprint for the created Secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#template DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#template}
  */
  readonly template?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_policy: cdktf.stringToTerraform(struct!.creationPolicy),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    name: cdktf.stringToTerraform(struct!.name),
    template: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateToTerraform(struct!.template),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
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
      value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationPolicy = this._creationPolicy;
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationPolicy = undefined;
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
  private _template = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetTemplate) {
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
export interface DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec {
  /**
  * Data defines the connection between the Kubernetes Secret keys and the Provider data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#data DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData[] | cdktf.IResolvable;
  /**
  * DataFrom is used to fetch all properties from a specific Provider data If multiple entries are specified, the Secret keys are merged in the specified order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#data_from DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#data_from}
  */
  readonly dataFrom?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom[] | cdktf.IResolvable;
  /**
  * RefreshInterval is the amount of time before the values are read again from the SecretStore provider Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' May be set to zero to fetch and create it once. Defaults to 1h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#refresh_interval DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#secret_store_ref DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#secret_store_ref}
  */
  readonly secretStoreRef: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef;
  /**
  * ExternalSecretTarget defines the Kubernetes Secret to be created There can be only one target per ExternalSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#target DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest#target}
  */
  readonly target: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget;
}

export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecToTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataToTerraform, false)(struct!.data),
    data_from: cdktf.listMapper(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromToTerraform, false)(struct!.dataFrom),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    secret_store_ref: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRefToTerraform(struct!.secretStoreRef),
    target: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetToTerraform(struct!.target),
  }
}


export function dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataList",
    },
    data_from: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromToHclTerraform, false)(struct!.dataFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromList",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_store_ref: {
      value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRefToHclTerraform(struct!.secretStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef",
    },
    target: {
      value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _data = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecData[] | cdktf.IResolvable) {
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
  private _dataFrom = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFromList(this, "data_from", false);
  public get dataFrom() {
    return this._dataFrom;
  }
  public putDataFrom(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecDataFrom[] | cdktf.IResolvable) {
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

  // secret_store_ref - computed: false, optional: false, required: true
  private _secretStoreRef = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRefOutputReference(this, "secret_store_ref");
  public get secretStoreRef() {
    return this._secretStoreRef;
  }
  public putSecretStoreRef(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecSecretStoreRef) {
    this._secretStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStoreRefInput() {
    return this._secretStoreRef.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest k8s_external_secrets_io_external_secret_v1alpha1_manifest}
*/
export class DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_external_secrets_io_external_secret_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExternalSecretsIoExternalSecretV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_external_secrets_io_external_secret_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/external_secrets_io_external_secret_v1alpha1_manifest k8s_external_secrets_io_external_secret_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_external_secrets_io_external_secret_v1alpha1_manifest',
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
  private _metadata = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec) {
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
      metadata: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExternalSecretsIoExternalSecretV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
