// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#metadata DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#metadata}
  */
  readonly metadata: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#spec DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#spec}
  */
  readonly spec?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec;
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#annotations DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#labels DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#namespace DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadataToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadataToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#container DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#credentials_secret DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#endpoint_url DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#storage_class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzureToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzureToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable): any {
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
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable | undefined {
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
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._credentialsSecret = undefined;
      this._endpointUrl = undefined;
      this._storageClass = undefined;
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
      this._storageClass = value.storageClass;
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
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#last_transition_time DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#last_transition_time}
  */
  readonly lastTransitionTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#message DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#observed_generation DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#observed_generation}
  */
  readonly observedGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#reason DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#reason}
  */
  readonly reason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#status DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#type DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_transition_time: cdktf.stringToTerraform(struct!.lastTransitionTime),
    message: cdktf.stringToTerraform(struct!.message),
    observed_generation: cdktf.numberToTerraform(struct!.observedGeneration),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_transition_time: {
      value: cdktf.stringToHclTerraform(struct!.lastTransitionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    observed_generation: {
      value: cdktf.numberToHclTerraform(struct!.observedGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastTransitionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransitionTime = this._lastTransitionTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._observedGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.observedGeneration = this._observedGeneration;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastTransitionTime = undefined;
      this._message = undefined;
      this._observedGeneration = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastTransitionTime = value.lastTransitionTime;
      this._message = value.message;
      this._observedGeneration = value.observedGeneration;
      this._reason = value.reason;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // last_transition_time - computed: false, optional: false, required: true
  private _lastTransitionTime?: string; 
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }
  public set lastTransitionTime(value: string) {
    this._lastTransitionTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionTimeInput() {
    return this._lastTransitionTime;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // observed_generation - computed: false, optional: true, required: false
  private _observedGeneration?: number; 
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }
  public set observedGeneration(value: number) {
    this._observedGeneration = value;
  }
  public resetObservedGeneration() {
    this._observedGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observedGenerationInput() {
    return this._observedGeneration;
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsOutputReference {
    return new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#bucket DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#credentials_secret DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#endpoint_url DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#region DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#region}
  */
  readonly region?: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3ToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3ToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable): any {
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
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable | undefined {
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
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentialsSecret = undefined;
      this._endpointUrl = undefined;
      this._region = undefined;
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
      this._endpointUrl = value.endpointUrl;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
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
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#azure DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#azure}
  */
  readonly azure?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#completed DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#completed}
  */
  readonly completed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#conditions DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#conditions}
  */
  readonly conditions?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#destination DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#image DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#lastscheduled DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#lastscheduled}
  */
  readonly lastscheduled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#latest_restorable_time DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#latest_restorable_time}
  */
  readonly latestRestorableTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#s3 DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#s3}
  */
  readonly s3?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#ssl_internal_secret_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#ssl_internal_secret_name}
  */
  readonly sslInternalSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#ssl_secret_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#ssl_secret_name}
  */
  readonly sslSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#state DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#storage_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#storage_name}
  */
  readonly storageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#storage_type DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#vault_secret_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#vault_secret_name}
  */
  readonly vaultSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#verify_tls DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzureToTerraform(struct!.azure),
    completed: cdktf.stringToTerraform(struct!.completed),
    conditions: cdktf.listMapper(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsToTerraform, false)(struct!.conditions),
    destination: cdktf.stringToTerraform(struct!.destination),
    image: cdktf.stringToTerraform(struct!.image),
    lastscheduled: cdktf.stringToTerraform(struct!.lastscheduled),
    latest_restorable_time: cdktf.stringToTerraform(struct!.latestRestorableTime),
    s3: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3ToTerraform(struct!.s3),
    ssl_internal_secret_name: cdktf.stringToTerraform(struct!.sslInternalSecretName),
    ssl_secret_name: cdktf.stringToTerraform(struct!.sslSecretName),
    state: cdktf.stringToTerraform(struct!.state),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    vault_secret_name: cdktf.stringToTerraform(struct!.vaultSecretName),
    verify_tls: cdktf.booleanToTerraform(struct!.verifyTls),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure",
    },
    completed: {
      value: cdktf.stringToHclTerraform(struct!.completed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsList",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastscheduled: {
      value: cdktf.stringToHclTerraform(struct!.lastscheduled),
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
    s3: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3",
    },
    ssl_internal_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.sslInternalSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.sslSecretName),
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
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.vaultSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource | cdktf.IResolvable | undefined {
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
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._lastscheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastscheduled = this._lastscheduled;
    }
    if (this._latestRestorableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestRestorableTime = this._latestRestorableTime;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sslInternalSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInternalSecretName = this._sslInternalSecretName;
    }
    if (this._sslSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecretName = this._sslSecretName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._vaultSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretName = this._vaultSecretName;
    }
    if (this._verifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTls = this._verifyTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._completed = undefined;
      this._conditions.internalValue = undefined;
      this._destination = undefined;
      this._image = undefined;
      this._lastscheduled = undefined;
      this._latestRestorableTime = undefined;
      this._s3.internalValue = undefined;
      this._sslInternalSecretName = undefined;
      this._sslSecretName = undefined;
      this._state = undefined;
      this._storageName = undefined;
      this._storageType = undefined;
      this._vaultSecretName = undefined;
      this._verifyTls = undefined;
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
      this._conditions.internalValue = value.conditions;
      this._destination = value.destination;
      this._image = value.image;
      this._lastscheduled = value.lastscheduled;
      this._latestRestorableTime = value.latestRestorableTime;
      this._s3.internalValue = value.s3;
      this._sslInternalSecretName = value.sslInternalSecretName;
      this._sslSecretName = value.sslSecretName;
      this._state = value.state;
      this._storageName = value.storageName;
      this._storageType = value.storageType;
      this._vaultSecretName = value.vaultSecretName;
      this._verifyTls = value.verifyTls;
    }
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceAzure) {
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

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // lastscheduled - computed: false, optional: true, required: false
  private _lastscheduled?: string; 
  public get lastscheduled() {
    return this.getStringAttribute('lastscheduled');
  }
  public set lastscheduled(value: string) {
    this._lastscheduled = value;
  }
  public resetLastscheduled() {
    this._lastscheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastscheduledInput() {
    return this._lastscheduled;
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

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // ssl_internal_secret_name - computed: false, optional: true, required: false
  private _sslInternalSecretName?: string; 
  public get sslInternalSecretName() {
    return this.getStringAttribute('ssl_internal_secret_name');
  }
  public set sslInternalSecretName(value: string) {
    this._sslInternalSecretName = value;
  }
  public resetSslInternalSecretName() {
    this._sslInternalSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInternalSecretNameInput() {
    return this._sslInternalSecretName;
  }

  // ssl_secret_name - computed: false, optional: true, required: false
  private _sslSecretName?: string; 
  public get sslSecretName() {
    return this.getStringAttribute('ssl_secret_name');
  }
  public set sslSecretName(value: string) {
    this._sslSecretName = value;
  }
  public resetSslSecretName() {
    this._sslSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecretNameInput() {
    return this._sslSecretName;
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

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // vault_secret_name - computed: false, optional: true, required: false
  private _vaultSecretName?: string; 
  public get vaultSecretName() {
    return this.getStringAttribute('vault_secret_name');
  }
  public set vaultSecretName(value: string) {
    this._vaultSecretName = value;
  }
  public resetVaultSecretName() {
    this._vaultSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretNameInput() {
    return this._vaultSecretName;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this.getBooleanAttribute('verify_tls');
  }
  public set verifyTls(value: boolean | cdktf.IResolvable) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#xbcloud DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#xbcloud}
  */
  readonly xbcloud?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#xbstream DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#xbstream}
  */
  readonly xbstream?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#xtrabackup DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#xtrabackup}
  */
  readonly xtrabackup?: string[];
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgsToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xbcloud: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xbcloud),
    xbstream: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xbstream),
    xtrabackup: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xtrabackup),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgsToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xbcloud: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xbcloud),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    xbstream: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xbstream),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    xtrabackup: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xtrabackup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xbcloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.xbcloud = this._xbcloud;
    }
    if (this._xbstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.xbstream = this._xbstream;
    }
    if (this._xtrabackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.xtrabackup = this._xtrabackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xbcloud = undefined;
      this._xbstream = undefined;
      this._xtrabackup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xbcloud = value.xbcloud;
      this._xbstream = value.xbstream;
      this._xtrabackup = value.xtrabackup;
    }
  }

  // xbcloud - computed: false, optional: true, required: false
  private _xbcloud?: string[]; 
  public get xbcloud() {
    return this.getListAttribute('xbcloud');
  }
  public set xbcloud(value: string[]) {
    this._xbcloud = value;
  }
  public resetXbcloud() {
    this._xbcloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xbcloudInput() {
    return this._xbcloud;
  }

  // xbstream - computed: false, optional: true, required: false
  private _xbstream?: string[]; 
  public get xbstream() {
    return this.getListAttribute('xbstream');
  }
  public set xbstream(value: string[]) {
    this._xbstream = value;
  }
  public resetXbstream() {
    this._xbstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xbstreamInput() {
    return this._xbstream;
  }

  // xtrabackup - computed: false, optional: true, required: false
  private _xtrabackup?: string[]; 
  public get xtrabackup() {
    return this.getListAttribute('xtrabackup');
  }
  public set xtrabackup(value: string[]) {
    this._xtrabackup = value;
  }
  public resetXtrabackup() {
    this._xtrabackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xtrabackupInput() {
    return this._xtrabackup;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#key DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#optional DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#api_version DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#field_path DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#container_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#divisor DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#resource DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#key DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#optional DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#config_map_key_ref DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#field_ref DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#resource_field_ref DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#secret_key_ref DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#value DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#value_from DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvOutputReference {
    return new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#args DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#args}
  */
  readonly args?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#env DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#env}
  */
  readonly env?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv[] | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgsToTerraform(struct!.args),
    env: cdktf.listMapper(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvToTerraform, false)(struct!.env),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgsToHclTerraform(struct!.args),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args.internalValue = undefined;
      this._env.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args.internalValue = value.args;
      this._env.internalValue = value.env;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgsOutputReference(this, "args");
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsArgs) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#container DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#credentials_secret DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#endpoint_url DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#storage_class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzureToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzureToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure | cdktf.IResolvable): any {
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
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure | cdktf.IResolvable | undefined {
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
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._credentialsSecret = undefined;
      this._endpointUrl = undefined;
      this._storageClass = undefined;
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
      this._storageClass = value.storageClass;
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
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#last_transition_time DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#last_transition_time}
  */
  readonly lastTransitionTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#message DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#observed_generation DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#observed_generation}
  */
  readonly observedGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#reason DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#reason}
  */
  readonly reason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#status DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#type DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_transition_time: cdktf.stringToTerraform(struct!.lastTransitionTime),
    message: cdktf.stringToTerraform(struct!.message),
    observed_generation: cdktf.numberToTerraform(struct!.observedGeneration),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_transition_time: {
      value: cdktf.stringToHclTerraform(struct!.lastTransitionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    observed_generation: {
      value: cdktf.numberToHclTerraform(struct!.observedGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastTransitionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransitionTime = this._lastTransitionTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._observedGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.observedGeneration = this._observedGeneration;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastTransitionTime = undefined;
      this._message = undefined;
      this._observedGeneration = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastTransitionTime = value.lastTransitionTime;
      this._message = value.message;
      this._observedGeneration = value.observedGeneration;
      this._reason = value.reason;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // last_transition_time - computed: false, optional: false, required: true
  private _lastTransitionTime?: string; 
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }
  public set lastTransitionTime(value: string) {
    this._lastTransitionTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionTimeInput() {
    return this._lastTransitionTime;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // observed_generation - computed: false, optional: true, required: false
  private _observedGeneration?: number; 
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }
  public set observedGeneration(value: number) {
    this._observedGeneration = value;
  }
  public resetObservedGeneration() {
    this._observedGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observedGenerationInput() {
    return this._observedGeneration;
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsOutputReference {
    return new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#bucket DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#credentials_secret DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#endpoint_url DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#region DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#region}
  */
  readonly region?: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3ToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3ToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3 | cdktf.IResolvable): any {
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
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3 | cdktf.IResolvable | undefined {
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
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentialsSecret = undefined;
      this._endpointUrl = undefined;
      this._region = undefined;
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
      this._endpointUrl = value.endpointUrl;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
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
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#azure DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#azure}
  */
  readonly azure?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#completed DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#completed}
  */
  readonly completed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#conditions DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#conditions}
  */
  readonly conditions?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#destination DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#image DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#lastscheduled DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#lastscheduled}
  */
  readonly lastscheduled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#latest_restorable_time DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#latest_restorable_time}
  */
  readonly latestRestorableTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#s3 DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#s3}
  */
  readonly s3?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#ssl_internal_secret_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#ssl_internal_secret_name}
  */
  readonly sslInternalSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#ssl_secret_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#ssl_secret_name}
  */
  readonly sslSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#state DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#storage_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#storage_name}
  */
  readonly storageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#storage_type DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#vault_secret_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#vault_secret_name}
  */
  readonly vaultSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#verify_tls DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzureToTerraform(struct!.azure),
    completed: cdktf.stringToTerraform(struct!.completed),
    conditions: cdktf.listMapper(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsToTerraform, false)(struct!.conditions),
    destination: cdktf.stringToTerraform(struct!.destination),
    image: cdktf.stringToTerraform(struct!.image),
    lastscheduled: cdktf.stringToTerraform(struct!.lastscheduled),
    latest_restorable_time: cdktf.stringToTerraform(struct!.latestRestorableTime),
    s3: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3ToTerraform(struct!.s3),
    ssl_internal_secret_name: cdktf.stringToTerraform(struct!.sslInternalSecretName),
    ssl_secret_name: cdktf.stringToTerraform(struct!.sslSecretName),
    state: cdktf.stringToTerraform(struct!.state),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    vault_secret_name: cdktf.stringToTerraform(struct!.vaultSecretName),
    verify_tls: cdktf.booleanToTerraform(struct!.verifyTls),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure",
    },
    completed: {
      value: cdktf.stringToHclTerraform(struct!.completed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsList",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastscheduled: {
      value: cdktf.stringToHclTerraform(struct!.lastscheduled),
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
    s3: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3",
    },
    ssl_internal_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.sslInternalSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.sslSecretName),
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
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.vaultSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource | cdktf.IResolvable | undefined {
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
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._lastscheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastscheduled = this._lastscheduled;
    }
    if (this._latestRestorableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestRestorableTime = this._latestRestorableTime;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sslInternalSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInternalSecretName = this._sslInternalSecretName;
    }
    if (this._sslSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecretName = this._sslSecretName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._vaultSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretName = this._vaultSecretName;
    }
    if (this._verifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTls = this._verifyTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._completed = undefined;
      this._conditions.internalValue = undefined;
      this._destination = undefined;
      this._image = undefined;
      this._lastscheduled = undefined;
      this._latestRestorableTime = undefined;
      this._s3.internalValue = undefined;
      this._sslInternalSecretName = undefined;
      this._sslSecretName = undefined;
      this._state = undefined;
      this._storageName = undefined;
      this._storageType = undefined;
      this._vaultSecretName = undefined;
      this._verifyTls = undefined;
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
      this._conditions.internalValue = value.conditions;
      this._destination = value.destination;
      this._image = value.image;
      this._lastscheduled = value.lastscheduled;
      this._latestRestorableTime = value.latestRestorableTime;
      this._s3.internalValue = value.s3;
      this._sslInternalSecretName = value.sslInternalSecretName;
      this._sslSecretName = value.sslSecretName;
      this._state = value.state;
      this._storageName = value.storageName;
      this._storageType = value.storageType;
      this._vaultSecretName = value.vaultSecretName;
      this._verifyTls = value.verifyTls;
    }
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceAzure) {
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

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // lastscheduled - computed: false, optional: true, required: false
  private _lastscheduled?: string; 
  public get lastscheduled() {
    return this.getStringAttribute('lastscheduled');
  }
  public set lastscheduled(value: string) {
    this._lastscheduled = value;
  }
  public resetLastscheduled() {
    this._lastscheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastscheduledInput() {
    return this._lastscheduled;
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

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // ssl_internal_secret_name - computed: false, optional: true, required: false
  private _sslInternalSecretName?: string; 
  public get sslInternalSecretName() {
    return this.getStringAttribute('ssl_internal_secret_name');
  }
  public set sslInternalSecretName(value: string) {
    this._sslInternalSecretName = value;
  }
  public resetSslInternalSecretName() {
    this._sslInternalSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInternalSecretNameInput() {
    return this._sslInternalSecretName;
  }

  // ssl_secret_name - computed: false, optional: true, required: false
  private _sslSecretName?: string; 
  public get sslSecretName() {
    return this.getStringAttribute('ssl_secret_name');
  }
  public set sslSecretName(value: string) {
    this._sslSecretName = value;
  }
  public resetSslSecretName() {
    this._sslSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecretNameInput() {
    return this._sslSecretName;
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

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // vault_secret_name - computed: false, optional: true, required: false
  private _vaultSecretName?: string; 
  public get vaultSecretName() {
    return this.getStringAttribute('vault_secret_name');
  }
  public set vaultSecretName(value: string) {
    this._vaultSecretName = value;
  }
  public resetVaultSecretName() {
    this._vaultSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretNameInput() {
    return this._vaultSecretName;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this.getBooleanAttribute('verify_tls');
  }
  public set verifyTls(value: boolean | cdktf.IResolvable) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#backup_source DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#backup_source}
  */
  readonly backupSource?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#date DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#gtid DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#gtid}
  */
  readonly gtid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#type DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_source: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceToTerraform(struct!.backupSource),
    date: cdktf.stringToTerraform(struct!.date),
    gtid: cdktf.stringToTerraform(struct!.gtid),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_source: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceToHclTerraform(struct!.backupSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource",
    },
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtid: {
      value: cdktf.stringToHclTerraform(struct!.gtid),
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

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSource = this._backupSource?.internalValue;
    }
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._gtid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtid = this._gtid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupSource.internalValue = undefined;
      this._date = undefined;
      this._gtid = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupSource.internalValue = value.backupSource;
      this._date = value.date;
      this._gtid = value.gtid;
      this._type = value.type;
    }
  }

  // backup_source - computed: false, optional: true, required: false
  private _backupSource = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSourceOutputReference(this, "backup_source");
  public get backupSource() {
    return this._backupSource;
  }
  public putBackupSource(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrBackupSource) {
    this._backupSource.internalValue = value;
  }
  public resetBackupSource() {
    this._backupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSourceInput() {
    return this._backupSource.internalValue;
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

  // gtid - computed: false, optional: true, required: false
  private _gtid?: string; 
  public get gtid() {
    return this.getStringAttribute('gtid');
  }
  public set gtid(value: string) {
    this._gtid = value;
  }
  public resetGtid() {
    this._gtid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtidInput() {
    return this._gtid;
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
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#request DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#claims DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#claims}
  */
  readonly claims?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#limits DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#requests DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#backup_name DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#backup_name}
  */
  readonly backupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#backup_source DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#backup_source}
  */
  readonly backupSource?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#container_options DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#container_options}
  */
  readonly containerOptions?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#pitr DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#pitr}
  */
  readonly pitr?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#pxc_cluster DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#pxc_cluster}
  */
  readonly pxcCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#resources DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest#resources}
  */
  readonly resources?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_name: cdktf.stringToTerraform(struct!.backupName),
    backup_source: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceToTerraform(struct!.backupSource),
    container_options: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsToTerraform(struct!.containerOptions),
    pitr: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrToTerraform(struct!.pitr),
    pxc_cluster: cdktf.stringToTerraform(struct!.pxcCluster),
    resources: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceToHclTerraform(struct!.backupSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource",
    },
    container_options: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsToHclTerraform(struct!.containerOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions",
    },
    pitr: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrToHclTerraform(struct!.pitr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr",
    },
    pxc_cluster: {
      value: cdktf.stringToHclTerraform(struct!.pxcCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._containerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOptions = this._containerOptions?.internalValue;
    }
    if (this._pitr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitr = this._pitr?.internalValue;
    }
    if (this._pxcCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.pxcCluster = this._pxcCluster;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupName = undefined;
      this._backupSource.internalValue = undefined;
      this._containerOptions.internalValue = undefined;
      this._pitr.internalValue = undefined;
      this._pxcCluster = undefined;
      this._resources.internalValue = undefined;
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
      this._containerOptions.internalValue = value.containerOptions;
      this._pitr.internalValue = value.pitr;
      this._pxcCluster = value.pxcCluster;
      this._resources.internalValue = value.resources;
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
  private _backupSource = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSourceOutputReference(this, "backup_source");
  public get backupSource() {
    return this._backupSource;
  }
  public putBackupSource(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecBackupSource) {
    this._backupSource.internalValue = value;
  }
  public resetBackupSource() {
    this._backupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSourceInput() {
    return this._backupSource.internalValue;
  }

  // container_options - computed: false, optional: true, required: false
  private _containerOptions = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptionsOutputReference(this, "container_options");
  public get containerOptions() {
    return this._containerOptions;
  }
  public putContainerOptions(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecContainerOptions) {
    this._containerOptions.internalValue = value;
  }
  public resetContainerOptions() {
    this._containerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOptionsInput() {
    return this._containerOptions.internalValue;
  }

  // pitr - computed: false, optional: true, required: false
  private _pitr = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitrOutputReference(this, "pitr");
  public get pitr() {
    return this._pitr;
  }
  public putPitr(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecPitr) {
    this._pitr.internalValue = value;
  }
  public resetPitr() {
    this._pitr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitrInput() {
    return this._pitr.internalValue;
  }

  // pxc_cluster - computed: false, optional: true, required: false
  private _pxcCluster?: string; 
  public get pxcCluster() {
    return this.getStringAttribute('pxc_cluster');
  }
  public set pxcCluster(value: string) {
    this._pxcCluster = value;
  }
  public resetPxcCluster() {
    this._pxcCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxcClusterInput() {
    return this._pxcCluster;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest k8s_pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest}
*/
export class DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest to import
  * @param importFromId The id of the existing DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest k8s_pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pxc_percona_com_percona_xtra_db_cluster_restore_v1_manifest',
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
  private _metadata = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec) {
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
      metadata: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterRestoreV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
