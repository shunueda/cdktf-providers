// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#metadata DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata;
  /**
  * Webhooks is a list of webhooks and the affected resources and operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#webhooks DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#webhooks}
  */
  readonly webhooks: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks[] | cdktf.IResolvable;
}
export interface DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#annotations DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#labels DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#name DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService {
  /**
  * 'name' is the name of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#name DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * 'namespace' is the namespace of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#namespace DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * 'path' is an optional URL path which will be sent in any request to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#path DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. 'port' should be a valid port number (1-65535, inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#port DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigServiceToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigServiceToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._path = value.path;
      this._port = value.port;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig {
  /**
  * 'caBundle' is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#ca_bundle DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * 'service' is a reference to the service for this webhook. Either 'service' or 'url' must be specified. If the webhook is running within the cluster, then you should use 'service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#service DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#service}
  */
  readonly service?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService;
  /**
  * 'url' gives the location of the webhook, in standard URL form ('scheme://host:port/path'). Exactly one of 'url' or 'service' must be specified. The 'host' should not refer to a service running in the cluster; use the 'service' field instead. The host might be resolved via external DNS in some apiservers (e.g., 'kube-apiserver' cannot resolve in-cluster DNS as that would be a layering violation). 'host' may also be an IP address. Please note that using 'localhost' or '127.0.0.1' as a 'host' is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster. The scheme must be 'https'; the URL must begin with 'https://'. A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier. Attempting to use a user or basic auth e.g. 'user:password@' is not allowed. Fragments ('#...') and query parameters ('?...') are not allowed, either.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#url DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    service: dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigServiceToTerraform(struct!.service),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle = undefined;
      this._service.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundle = value.caBundle;
      this._service.internalValue = value.service;
      this._url = value.url;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules {
  /**
  * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. For example: ['apps', 'batch', 'example.io'] means matches 3 groups. ['*'] means matches all group Note: The group could be empty, e.g the 'core' group of kubernetes, in that case use [''].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#api_groups DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. For example: ['v1alpha1', 'v1beta1'] means matches 2 versions. ['*'] means matches all versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#api_versions DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#api_versions}
  */
  readonly apiVersions: string[];
  /**
  * Kinds is a list of resources this rule applies to. If '*' is present, the length of the slice must be one. For example: ['Deployment', 'Pod'] means matches Deployment and Pod. ['*'] means apply to all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#kinds DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#kinds}
  */
  readonly kinds: string[];
  /**
  * Operations is the operations the hook cares about. If '*' is present, the length of the slice must be one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#operations DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#operations}
  */
  readonly operations: string[];
}

export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiVersions),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._apiVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersions = this._apiVersions;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._apiVersions = undefined;
      this._kinds = undefined;
      this._operations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._apiVersions = value.apiVersions;
      this._kinds = value.kinds;
      this._operations = value.operations;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // api_versions - computed: false, optional: false, required: true
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

  // kinds - computed: false, optional: false, required: true
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}

export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesOutputReference {
    return new DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks {
  /**
  * ClientConfig defines how to communicate with the hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#client_config DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#client_config}
  */
  readonly clientConfig: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig;
  /**
  * InterpreterContextVersions is an ordered list of preferred 'ResourceInterpreterContext' versions the Webhook expects. Karmada will try to use first version in the list which it supports. If none of the versions specified in this list supported by Karmada, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the Karmada, calls to the webhook will fail and be subject to the failure policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#interpreter_context_versions DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#interpreter_context_versions}
  */
  readonly interpreterContextVersions: string[];
  /**
  * Name is the full-qualified name of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#name DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Rules describes what operations on what resources the webhook cares about. The webhook cares about an operation if it matches any Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#rules DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules[] | cdktf.IResolvable;
  /**
  * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#timeout_seconds DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_config: dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigToTerraform(struct!.clientConfig),
    interpreter_context_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interpreterContextVersions),
    name: cdktf.stringToTerraform(struct!.name),
    rules: cdktf.listMapper(dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesToTerraform, false)(struct!.rules),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_config: {
      value: dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig",
    },
    interpreter_context_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interpreterContextVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesList",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._interpreterContextVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreterContextVersions = this._interpreterContextVersions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = undefined;
      this._interpreterContextVersions = undefined;
      this._name = undefined;
      this._rules.internalValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = value.clientConfig;
      this._interpreterContextVersions = value.interpreterContextVersions;
      this._name = value.name;
      this._rules.internalValue = value.rules;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // client_config - computed: false, optional: false, required: true
  private _clientConfig = new DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksClientConfig) {
    this._clientConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // interpreter_context_versions - computed: false, optional: false, required: true
  private _interpreterContextVersions?: string[]; 
  public get interpreterContextVersions() {
    return this.getListAttribute('interpreter_context_versions');
  }
  public set interpreterContextVersions(value: string[]) {
    this._interpreterContextVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterContextVersionsInput() {
    return this._interpreterContextVersions;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}

export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksOutputReference {
    return new DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest k8s_config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest}
*/
export class DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest k8s_config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_config_karmada_io_resource_interpreter_webhook_configuration_v1alpha1_manifest',
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
    this._webhooks.internalValue = config.webhooks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // webhooks - computed: false, optional: false, required: true
  private _webhooks = new DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }
  public putWebhooks(value: DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooks[] | cdktf.IResolvable) {
    this._webhooks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksInput() {
    return this._webhooks.internalValue;
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
      metadata: dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      webhooks: cdktf.listMapper(dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksToTerraform, false)(this._webhooks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestMetadata",
      },
      webhooks: {
        value: cdktf.listMapperHcl(dataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksToHclTerraform, false)(this._webhooks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterWebhookConfigurationV1Alpha1ManifestWebhooksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
