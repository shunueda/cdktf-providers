// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#metadata DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#metadata}
  */
  readonly metadata: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#spec DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#spec}
  */
  readonly spec?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec;
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#annotations DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#labels DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#name DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#namespace DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadataToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadataToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#container DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#credentials_secret DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#credentials_secret}
  */
  readonly credentialsSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#endpoint_url DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#prefix DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzureToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzureToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._credentialsSecret = undefined;
      this._endpointUrl = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._credentialsSecret = value.credentialsSecret;
      this._endpointUrl = value.endpointUrl;
      this._prefix = value.prefix;
    }
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

  // credentials_secret - computed: false, optional: false, required: true
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#max_retry_delay DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#max_retry_delay}
  */
  readonly maxRetryDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#min_retry_delay DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#min_retry_delay}
  */
  readonly minRetryDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#num_max_retries DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#num_max_retries}
  */
  readonly numMaxRetries?: number;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3RetryerToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retry_delay: cdktf.stringToTerraform(struct!.maxRetryDelay),
    min_retry_delay: cdktf.stringToTerraform(struct!.minRetryDelay),
    num_max_retries: cdktf.numberToTerraform(struct!.numMaxRetries),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3RetryerToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retry_delay: {
      value: cdktf.stringToHclTerraform(struct!.maxRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_retry_delay: {
      value: cdktf.stringToHclTerraform(struct!.minRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.numMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3RetryerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryDelay = this._maxRetryDelay;
    }
    if (this._minRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryDelay = this._minRetryDelay;
    }
    if (this._numMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numMaxRetries = this._numMaxRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRetryDelay = undefined;
      this._minRetryDelay = undefined;
      this._numMaxRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRetryDelay = value.maxRetryDelay;
      this._minRetryDelay = value.minRetryDelay;
      this._numMaxRetries = value.numMaxRetries;
    }
  }

  // max_retry_delay - computed: false, optional: true, required: false
  private _maxRetryDelay?: string; 
  public get maxRetryDelay() {
    return this.getStringAttribute('max_retry_delay');
  }
  public set maxRetryDelay(value: string) {
    this._maxRetryDelay = value;
  }
  public resetMaxRetryDelay() {
    this._maxRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDelayInput() {
    return this._maxRetryDelay;
  }

  // min_retry_delay - computed: false, optional: true, required: false
  private _minRetryDelay?: string; 
  public get minRetryDelay() {
    return this.getStringAttribute('min_retry_delay');
  }
  public set minRetryDelay(value: string) {
    this._minRetryDelay = value;
  }
  public resetMinRetryDelay() {
    this._minRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryDelayInput() {
    return this._minRetryDelay;
  }

  // num_max_retries - computed: false, optional: true, required: false
  private _numMaxRetries?: number; 
  public get numMaxRetries() {
    return this.getNumberAttribute('num_max_retries');
  }
  public set numMaxRetries(value: number) {
    this._numMaxRetries = value;
  }
  public resetNumMaxRetries() {
    this._numMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMaxRetriesInput() {
    return this._numMaxRetries;
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#kms_key_id DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#sse_algorithm DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#sse_customer_algorithm DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#sse_customer_algorithm}
  */
  readonly sseCustomerAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#sse_customer_key DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#sse_customer_key}
  */
  readonly sseCustomerKey?: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryptionToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
    sse_customer_algorithm: cdktf.stringToTerraform(struct!.sseCustomerAlgorithm),
    sse_customer_key: cdktf.stringToTerraform(struct!.sseCustomerKey),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryptionToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_customer_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseCustomerAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_customer_key: {
      value: cdktf.stringToHclTerraform(struct!.sseCustomerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    if (this._sseCustomerAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCustomerAlgorithm = this._sseCustomerAlgorithm;
    }
    if (this._sseCustomerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCustomerKey = this._sseCustomerKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._sseAlgorithm = undefined;
      this._sseCustomerAlgorithm = undefined;
      this._sseCustomerKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._sseAlgorithm = value.sseAlgorithm;
      this._sseCustomerAlgorithm = value.sseCustomerAlgorithm;
      this._sseCustomerKey = value.sseCustomerKey;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // sse_algorithm - computed: false, optional: true, required: false
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  public resetSseAlgorithm() {
    this._sseAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }

  // sse_customer_algorithm - computed: false, optional: true, required: false
  private _sseCustomerAlgorithm?: string; 
  public get sseCustomerAlgorithm() {
    return this.getStringAttribute('sse_customer_algorithm');
  }
  public set sseCustomerAlgorithm(value: string) {
    this._sseCustomerAlgorithm = value;
  }
  public resetSseCustomerAlgorithm() {
    this._sseCustomerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCustomerAlgorithmInput() {
    return this._sseCustomerAlgorithm;
  }

  // sse_customer_key - computed: false, optional: true, required: false
  private _sseCustomerKey?: string; 
  public get sseCustomerKey() {
    return this.getStringAttribute('sse_customer_key');
  }
  public set sseCustomerKey(value: string) {
    this._sseCustomerKey = value;
  }
  public resetSseCustomerKey() {
    this._sseCustomerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCustomerKeyInput() {
    return this._sseCustomerKey;
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#bucket DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#credentials_secret DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#debug_log_levels DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#debug_log_levels}
  */
  readonly debugLogLevels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#endpoint_url DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#force_path_style DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#force_path_style}
  */
  readonly forcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#insecure_skip_tls_verify DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#max_upload_parts DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#max_upload_parts}
  */
  readonly maxUploadParts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#prefix DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#region DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#retryer DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#retryer}
  */
  readonly retryer?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#server_side_encryption DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#server_side_encryption}
  */
  readonly serverSideEncryption?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#storage_class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#upload_part_size DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#upload_part_size}
  */
  readonly uploadPartSize?: number;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    debug_log_levels: cdktf.stringToTerraform(struct!.debugLogLevels),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    force_path_style: cdktf.booleanToTerraform(struct!.forcePathStyle),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
    max_upload_parts: cdktf.numberToTerraform(struct!.maxUploadParts),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    region: cdktf.stringToTerraform(struct!.region),
    retryer: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3RetryerToTerraform(struct!.retryer),
    server_side_encryption: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryptionToTerraform(struct!.serverSideEncryption),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    upload_part_size: cdktf.numberToTerraform(struct!.uploadPartSize),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_log_levels: {
      value: cdktf.stringToHclTerraform(struct!.debugLogLevels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.forcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_upload_parts: {
      value: cdktf.numberToHclTerraform(struct!.maxUploadParts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retryer: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3RetryerToHclTerraform(struct!.retryer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer",
    },
    server_side_encryption: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryptionToHclTerraform(struct!.serverSideEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_part_size: {
      value: cdktf.numberToHclTerraform(struct!.uploadPartSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._debugLogLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugLogLevels = this._debugLogLevels;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._forcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePathStyle = this._forcePathStyle;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    if (this._maxUploadParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUploadParts = this._maxUploadParts;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._retryer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryer = this._retryer?.internalValue;
    }
    if (this._serverSideEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryption = this._serverSideEncryption?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._uploadPartSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPartSize = this._uploadPartSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentialsSecret = undefined;
      this._debugLogLevels = undefined;
      this._endpointUrl = undefined;
      this._forcePathStyle = undefined;
      this._insecureSkipTlsVerify = undefined;
      this._maxUploadParts = undefined;
      this._prefix = undefined;
      this._region = undefined;
      this._retryer.internalValue = undefined;
      this._serverSideEncryption.internalValue = undefined;
      this._storageClass = undefined;
      this._uploadPartSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._credentialsSecret = value.credentialsSecret;
      this._debugLogLevels = value.debugLogLevels;
      this._endpointUrl = value.endpointUrl;
      this._forcePathStyle = value.forcePathStyle;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
      this._maxUploadParts = value.maxUploadParts;
      this._prefix = value.prefix;
      this._region = value.region;
      this._retryer.internalValue = value.retryer;
      this._serverSideEncryption.internalValue = value.serverSideEncryption;
      this._storageClass = value.storageClass;
      this._uploadPartSize = value.uploadPartSize;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials_secret - computed: false, optional: true, required: false
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  public resetCredentialsSecret() {
    this._credentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // debug_log_levels - computed: false, optional: true, required: false
  private _debugLogLevels?: string; 
  public get debugLogLevels() {
    return this.getStringAttribute('debug_log_levels');
  }
  public set debugLogLevels(value: string) {
    this._debugLogLevels = value;
  }
  public resetDebugLogLevels() {
    this._debugLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLogLevelsInput() {
    return this._debugLogLevels;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // force_path_style - computed: false, optional: true, required: false
  private _forcePathStyle?: boolean | cdktf.IResolvable; 
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }
  public set forcePathStyle(value: boolean | cdktf.IResolvable) {
    this._forcePathStyle = value;
  }
  public resetForcePathStyle() {
    this._forcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePathStyleInput() {
    return this._forcePathStyle;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
  }

  // max_upload_parts - computed: false, optional: true, required: false
  private _maxUploadParts?: number; 
  public get maxUploadParts() {
    return this.getNumberAttribute('max_upload_parts');
  }
  public set maxUploadParts(value: number) {
    this._maxUploadParts = value;
  }
  public resetMaxUploadParts() {
    this._maxUploadParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUploadPartsInput() {
    return this._maxUploadParts;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retryer - computed: false, optional: true, required: false
  private _retryer = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3RetryerOutputReference(this, "retryer");
  public get retryer() {
    return this._retryer;
  }
  public putRetryer(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3Retryer) {
    this._retryer.internalValue = value;
  }
  public resetRetryer() {
    this._retryer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryerInput() {
    return this._retryer.internalValue;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryptionOutputReference(this, "server_side_encryption");
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public putServerSideEncryption(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ServerSideEncryption) {
    this._serverSideEncryption.internalValue = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // upload_part_size - computed: false, optional: true, required: false
  private _uploadPartSize?: number; 
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
  public set uploadPartSize(value: number) {
    this._uploadPartSize = value;
  }
  public resetUploadPartSize() {
    this._uploadPartSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPartSizeInput() {
    return this._uploadPartSize;
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#azure DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#azure}
  */
  readonly azure?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#completed DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#completed}
  */
  readonly completed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#destination DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#error DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#error}
  */
  readonly error?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#last_transition DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#last_transition}
  */
  readonly lastTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#latest_restorable_time DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#latest_restorable_time}
  */
  readonly latestRestorableTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#pbm_name DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#pbm_name}
  */
  readonly pbmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#pbm_pod DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#pbm_pod}
  */
  readonly pbmPod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#pbm_pods DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#pbm_pods}
  */
  readonly pbmPods?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#replset_names DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#replset_names}
  */
  readonly replsetNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#s3 DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#s3}
  */
  readonly s3?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#start DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#start}
  */
  readonly start?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#state DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#storage_name DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#storage_name}
  */
  readonly storageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#type DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzureToTerraform(struct!.azure),
    completed: cdktf.stringToTerraform(struct!.completed),
    destination: cdktf.stringToTerraform(struct!.destination),
    error: cdktf.stringToTerraform(struct!.error),
    last_transition: cdktf.stringToTerraform(struct!.lastTransition),
    latest_restorable_time: cdktf.stringToTerraform(struct!.latestRestorableTime),
    pbm_name: cdktf.stringToTerraform(struct!.pbmName),
    pbm_pod: cdktf.stringToTerraform(struct!.pbmPod),
    pbm_pods: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pbmPods),
    replset_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replsetNames),
    s3: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ToTerraform(struct!.s3),
    start: cdktf.stringToTerraform(struct!.start),
    state: cdktf.stringToTerraform(struct!.state),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure",
    },
    completed: {
      value: cdktf.stringToHclTerraform(struct!.completed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
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
    last_transition: {
      value: cdktf.stringToHclTerraform(struct!.lastTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_restorable_time: {
      value: cdktf.stringToHclTerraform(struct!.latestRestorableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pbm_name: {
      value: cdktf.stringToHclTerraform(struct!.pbmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pbm_pod: {
      value: cdktf.stringToHclTerraform(struct!.pbmPod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pbm_pods: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pbmPods),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replset_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replsetNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    s3: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._completed !== undefined) {
      hasAnyValues = true;
      internalValueResult.completed = this._completed;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._lastTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransition = this._lastTransition;
    }
    if (this._latestRestorableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestRestorableTime = this._latestRestorableTime;
    }
    if (this._pbmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbmName = this._pbmName;
    }
    if (this._pbmPod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbmPod = this._pbmPod;
    }
    if (this._pbmPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbmPods = this._pbmPods;
    }
    if (this._replsetNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.replsetNames = this._replsetNames;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._completed = undefined;
      this._destination = undefined;
      this._error = undefined;
      this._lastTransition = undefined;
      this._latestRestorableTime = undefined;
      this._pbmName = undefined;
      this._pbmPod = undefined;
      this._pbmPods = undefined;
      this._replsetNames = undefined;
      this._s3.internalValue = undefined;
      this._start = undefined;
      this._state = undefined;
      this._storageName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
      this._completed = value.completed;
      this._destination = value.destination;
      this._error = value.error;
      this._lastTransition = value.lastTransition;
      this._latestRestorableTime = value.latestRestorableTime;
      this._pbmName = value.pbmName;
      this._pbmPod = value.pbmPod;
      this._pbmPods = value.pbmPods;
      this._replsetNames = value.replsetNames;
      this._s3.internalValue = value.s3;
      this._start = value.start;
      this._state = value.state;
      this._storageName = value.storageName;
      this._type = value.type;
    }
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // completed - computed: false, optional: true, required: false
  private _completed?: string; 
  public get completed() {
    return this.getStringAttribute('completed');
  }
  public set completed(value: string) {
    this._completed = value;
  }
  public resetCompleted() {
    this._completed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedInput() {
    return this._completed;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // last_transition - computed: false, optional: true, required: false
  private _lastTransition?: string; 
  public get lastTransition() {
    return this.getStringAttribute('last_transition');
  }
  public set lastTransition(value: string) {
    this._lastTransition = value;
  }
  public resetLastTransition() {
    this._lastTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionInput() {
    return this._lastTransition;
  }

  // latest_restorable_time - computed: false, optional: true, required: false
  private _latestRestorableTime?: string; 
  public get latestRestorableTime() {
    return this.getStringAttribute('latest_restorable_time');
  }
  public set latestRestorableTime(value: string) {
    this._latestRestorableTime = value;
  }
  public resetLatestRestorableTime() {
    this._latestRestorableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestRestorableTimeInput() {
    return this._latestRestorableTime;
  }

  // pbm_name - computed: false, optional: true, required: false
  private _pbmName?: string; 
  public get pbmName() {
    return this.getStringAttribute('pbm_name');
  }
  public set pbmName(value: string) {
    this._pbmName = value;
  }
  public resetPbmName() {
    this._pbmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbmNameInput() {
    return this._pbmName;
  }

  // pbm_pod - computed: false, optional: true, required: false
  private _pbmPod?: string; 
  public get pbmPod() {
    return this.getStringAttribute('pbm_pod');
  }
  public set pbmPod(value: string) {
    this._pbmPod = value;
  }
  public resetPbmPod() {
    this._pbmPod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbmPodInput() {
    return this._pbmPod;
  }

  // pbm_pods - computed: false, optional: true, required: false
  private _pbmPods?: { [key: string]: string }; 
  public get pbmPods() {
    return this.getStringMapAttribute('pbm_pods');
  }
  public set pbmPods(value: { [key: string]: string }) {
    this._pbmPods = value;
  }
  public resetPbmPods() {
    this._pbmPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbmPodsInput() {
    return this._pbmPods;
  }

  // replset_names - computed: false, optional: true, required: false
  private _replsetNames?: string[]; 
  public get replsetNames() {
    return this.getListAttribute('replset_names');
  }
  public set replsetNames(value: string[]) {
    this._replsetNames = value;
  }
  public resetReplsetNames() {
    this._replsetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replsetNamesInput() {
    return this._replsetNames;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // storage_name - computed: false, optional: true, required: false
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  public resetStorageName() {
    this._storageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
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
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#date DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#type DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitrToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitrToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._type = value.type;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
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
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#namespaces DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#with_users_and_roles DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#with_users_and_roles}
  */
  readonly withUsersAndRoles?: boolean | cdktf.IResolvable;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelectiveToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    with_users_and_roles: cdktf.booleanToTerraform(struct!.withUsersAndRoles),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelectiveToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    with_users_and_roles: {
      value: cdktf.booleanToHclTerraform(struct!.withUsersAndRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelectiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._withUsersAndRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.withUsersAndRoles = this._withUsersAndRoles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._withUsersAndRoles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._withUsersAndRoles = value.withUsersAndRoles;
    }
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

  // with_users_and_roles - computed: false, optional: true, required: false
  private _withUsersAndRoles?: boolean | cdktf.IResolvable; 
  public get withUsersAndRoles() {
    return this.getBooleanAttribute('with_users_and_roles');
  }
  public set withUsersAndRoles(value: boolean | cdktf.IResolvable) {
    this._withUsersAndRoles = value;
  }
  public resetWithUsersAndRoles() {
    this._withUsersAndRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withUsersAndRolesInput() {
    return this._withUsersAndRoles;
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#backup_name DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#backup_name}
  */
  readonly backupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#backup_source DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#backup_source}
  */
  readonly backupSource?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#cluster_name DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#pitr DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#pitr}
  */
  readonly pitr?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#replset DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#replset}
  */
  readonly replset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#selective DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#selective}
  */
  readonly selective?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#storage_name DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest#storage_name}
  */
  readonly storageName?: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_name: cdktf.stringToTerraform(struct!.backupName),
    backup_source: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceToTerraform(struct!.backupSource),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    pitr: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitrToTerraform(struct!.pitr),
    replset: cdktf.stringToTerraform(struct!.replset),
    selective: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelectiveToTerraform(struct!.selective),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_name: {
      value: cdktf.stringToHclTerraform(struct!.backupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_source: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceToHclTerraform(struct!.backupSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pitr: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitrToHclTerraform(struct!.pitr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr",
    },
    replset: {
      value: cdktf.stringToHclTerraform(struct!.replset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selective: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelectiveToHclTerraform(struct!.selective),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective",
    },
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupName = this._backupName;
    }
    if (this._backupSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSource = this._backupSource?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._pitr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitr = this._pitr?.internalValue;
    }
    if (this._replset !== undefined) {
      hasAnyValues = true;
      internalValueResult.replset = this._replset;
    }
    if (this._selective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selective = this._selective?.internalValue;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupName = undefined;
      this._backupSource.internalValue = undefined;
      this._clusterName = undefined;
      this._pitr.internalValue = undefined;
      this._replset = undefined;
      this._selective.internalValue = undefined;
      this._storageName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupName = value.backupName;
      this._backupSource.internalValue = value.backupSource;
      this._clusterName = value.clusterName;
      this._pitr.internalValue = value.pitr;
      this._replset = value.replset;
      this._selective.internalValue = value.selective;
      this._storageName = value.storageName;
    }
  }

  // backup_name - computed: false, optional: true, required: false
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  public resetBackupName() {
    this._backupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }

  // backup_source - computed: false, optional: true, required: false
  private _backupSource = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSourceOutputReference(this, "backup_source");
  public get backupSource() {
    return this._backupSource;
  }
  public putBackupSource(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecBackupSource) {
    this._backupSource.internalValue = value;
  }
  public resetBackupSource() {
    this._backupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSourceInput() {
    return this._backupSource.internalValue;
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

  // pitr - computed: false, optional: true, required: false
  private _pitr = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitrOutputReference(this, "pitr");
  public get pitr() {
    return this._pitr;
  }
  public putPitr(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecPitr) {
    this._pitr.internalValue = value;
  }
  public resetPitr() {
    this._pitr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitrInput() {
    return this._pitr.internalValue;
  }

  // replset - computed: false, optional: true, required: false
  private _replset?: string; 
  public get replset() {
    return this.getStringAttribute('replset');
  }
  public set replset(value: string) {
    this._replset = value;
  }
  public resetReplset() {
    this._replset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replsetInput() {
    return this._replset;
  }

  // selective - computed: false, optional: true, required: false
  private _selective = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelectiveOutputReference(this, "selective");
  public get selective() {
    return this._selective;
  }
  public putSelective(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecSelective) {
    this._selective.internalValue = value;
  }
  public resetSelective() {
    this._selective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveInput() {
    return this._selective.internalValue;
  }

  // storage_name - computed: false, optional: true, required: false
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  public resetStorageName() {
    this._storageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest k8s_psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest}
*/
export class DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest to import
  * @param importFromId The id of the existing DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest k8s_psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_psmdb_percona_com_percona_server_mongo_db_restore_v1_manifest',
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
  private _metadata = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec) {
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
      metadata: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbRestoreV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
