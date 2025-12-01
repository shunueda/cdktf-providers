// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#metadata DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata;
  /**
  * KafkaServerConfigSpec defines the desired state of KafkaServerConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#spec DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec;
}
export interface DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#annotations DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#labels DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#name DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#namespace DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#name DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecServiceToTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecServiceToHclTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService | cdktf.IResolvable): any {
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

export class DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#cert_file DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#cert_file}
  */
  readonly certFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#key_file DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#key_file}
  */
  readonly keyFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#root_ca_file DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#root_ca_file}
  */
  readonly rootCaFile: string;
}

export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTlsToTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    root_ca_file: cdktf.stringToTerraform(struct!.rootCaFile),
  }
}


export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTlsToHclTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_ca_file: {
      value: cdktf.stringToHclTerraform(struct!.rootCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._rootCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCaFile = this._rootCaFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._keyFile = undefined;
      this._rootCaFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._keyFile = value.keyFile;
      this._rootCaFile = value.rootCaFile;
    }
  }

  // cert_file - computed: false, optional: false, required: true
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // key_file - computed: false, optional: false, required: true
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // root_ca_file - computed: false, optional: false, required: true
  private _rootCaFile?: string; 
  public get rootCaFile() {
    return this.getStringAttribute('root_ca_file');
  }
  public set rootCaFile(value: string) {
    this._rootCaFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaFileInput() {
    return this._rootCaFile;
  }
}
export interface DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#client_identity_required DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#client_identity_required}
  */
  readonly clientIdentityRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#intents_required DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#intents_required}
  */
  readonly intentsRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#pattern DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#topic DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#topic}
  */
  readonly topic: string;
}

export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsToTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_identity_required: cdktf.booleanToTerraform(struct!.clientIdentityRequired),
    intents_required: cdktf.booleanToTerraform(struct!.intentsRequired),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsToHclTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_identity_required: {
      value: cdktf.booleanToHclTerraform(struct!.clientIdentityRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intents_required: {
      value: cdktf.booleanToHclTerraform(struct!.intentsRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdentityRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentityRequired = this._clientIdentityRequired;
    }
    if (this._intentsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.intentsRequired = this._intentsRequired;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdentityRequired = undefined;
      this._intentsRequired = undefined;
      this._pattern = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdentityRequired = value.clientIdentityRequired;
      this._intentsRequired = value.intentsRequired;
      this._pattern = value.pattern;
      this._topic = value.topic;
    }
  }

  // client_identity_required - computed: false, optional: false, required: true
  private _clientIdentityRequired?: boolean | cdktf.IResolvable; 
  public get clientIdentityRequired() {
    return this.getBooleanAttribute('client_identity_required');
  }
  public set clientIdentityRequired(value: boolean | cdktf.IResolvable) {
    this._clientIdentityRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentityRequiredInput() {
    return this._clientIdentityRequired;
  }

  // intents_required - computed: false, optional: false, required: true
  private _intentsRequired?: boolean | cdktf.IResolvable; 
  public get intentsRequired() {
    return this.getBooleanAttribute('intents_required');
  }
  public set intentsRequired(value: boolean | cdktf.IResolvable) {
    this._intentsRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentsRequiredInput() {
    return this._intentsRequired;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsOutputReference {
    return new DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#addr DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#addr}
  */
  readonly addr?: string;
  /**
  * If Intents for network policies are enabled, and there are other Intents to this Kafka server, will automatically create an Intent so that the Intents Operator can connect. Set to true to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#no_auto_create_intents_for_operator DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#no_auto_create_intents_for_operator}
  */
  readonly noAutoCreateIntentsForOperator?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#service DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#service}
  */
  readonly service?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#tls DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#tls}
  */
  readonly tls?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#topics DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest#topics}
  */
  readonly topics?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics[] | cdktf.IResolvable;
}

export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecToTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    no_auto_create_intents_for_operator: cdktf.booleanToTerraform(struct!.noAutoCreateIntentsForOperator),
    service: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecServiceToTerraform(struct!.service),
    tls: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTlsToTerraform(struct!.tls),
    topics: cdktf.listMapper(dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsToTerraform, false)(struct!.topics),
  }
}


export function dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_auto_create_intents_for_operator: {
      value: cdktf.booleanToHclTerraform(struct!.noAutoCreateIntentsForOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService",
    },
    tls: {
      value: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls",
    },
    topics: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsToHclTerraform, false)(struct!.topics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._noAutoCreateIntentsForOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAutoCreateIntentsForOperator = this._noAutoCreateIntentsForOperator;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._noAutoCreateIntentsForOperator = undefined;
      this._service.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._topics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._noAutoCreateIntentsForOperator = value.noAutoCreateIntentsForOperator;
      this._service.internalValue = value.service;
      this._tls.internalValue = value.tls;
      this._topics.internalValue = value.topics;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // no_auto_create_intents_for_operator - computed: false, optional: true, required: false
  private _noAutoCreateIntentsForOperator?: boolean | cdktf.IResolvable; 
  public get noAutoCreateIntentsForOperator() {
    return this.getBooleanAttribute('no_auto_create_intents_for_operator');
  }
  public set noAutoCreateIntentsForOperator(value: boolean | cdktf.IResolvable) {
    this._noAutoCreateIntentsForOperator = value;
  }
  public resetNoAutoCreateIntentsForOperator() {
    this._noAutoCreateIntentsForOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoCreateIntentsForOperatorInput() {
    return this._noAutoCreateIntentsForOperator;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // topics - computed: false, optional: true, required: false
  private _topics = new DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  public resetTopics() {
    this._topics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest k8s_k8s_otterize_com_kafka_server_config_v1alpha2_manifest}
*/
export class DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_otterize_com_kafka_server_config_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_otterize_com_kafka_server_config_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_otterize_com_kafka_server_config_v1alpha2_manifest k8s_k8s_otterize_com_kafka_server_config_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_otterize_com_kafka_server_config_v1alpha2_manifest',
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
  private _metadata = new DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec) {
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
      metadata: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SOtterizeComKafkaServerConfigV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
