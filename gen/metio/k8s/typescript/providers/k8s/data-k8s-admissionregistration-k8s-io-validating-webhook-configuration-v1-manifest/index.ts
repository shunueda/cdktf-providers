// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#metadata DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#metadata}
  */
  readonly metadata: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata;
  /**
  * Webhooks is a list of webhooks and the affected resources and operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#webhooks DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#webhooks}
  */
  readonly webhooks?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks[] | cdktf.IResolvable;
}
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#annotations DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#labels DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#name DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadataToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadataToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService {
  /**
  * 'name' is the name of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#name DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#name}
  */
  readonly name: string;
  /**
  * 'namespace' is the namespace of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#namespace DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * 'path' is an optional URL path which will be sent in any request to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#path DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#path}
  */
  readonly path?: string;
  /**
  * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. 'port' should be a valid port number (1-65535, inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#port DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigServiceToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService | cdktf.IResolvable): any {
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


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigServiceToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService | cdktf.IResolvable): any {
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService | cdktf.IResolvable | undefined) {
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
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig {
  /**
  * 'caBundle' is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#ca_bundle DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * ServiceReference holds a reference to Service.legacy.k8s.io
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#service DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#service}
  */
  readonly service?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService;
  /**
  * 'url' gives the location of the webhook, in standard URL form ('scheme://host:port/path'). Exactly one of 'url' or 'service' must be specified. The 'host' should not refer to a service running in the cluster; use the 'service' field instead. The host might be resolved via external DNS in some apiservers (e.g., 'kube-apiserver' cannot resolve in-cluster DNS as that would be a layering violation). 'host' may also be an IP address. Please note that using 'localhost' or '127.0.0.1' as a 'host' is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster. The scheme must be 'https'; the URL must begin with 'https://'. A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier. Attempting to use a user or basic auth e.g. 'user:password@' is not allowed. Fragments ('#...') and query parameters ('?...') are not allowed, either.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#url DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    service: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigServiceToTerraform(struct!.service),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig | cdktf.IResolvable): any {
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
      value: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService",
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig | cdktf.IResolvable | undefined) {
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
  private _service = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigService) {
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
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions {
  /**
  * Expression represents the expression which will be evaluated by CEL. Must evaluate to bool. CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables: 'object' - The object from the incoming request. The value is null for DELETE requests. 'oldObject' - The existing object. The value is null for CREATE requests. 'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest). 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request. See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the request resource. Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/ Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#expression DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#expression}
  */
  readonly expression: string;
  /**
  * Name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes. A good name should be descriptive of the associated expression. Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and must start and end with an alphanumeric character (e.g. 'MyName', or 'my.name', or '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName') Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#name DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsOutputReference {
    return new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#key DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#operator DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#values DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#match_expressions DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#match_labels DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsList",
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#key DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#operator DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#values DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsOutputReference {
    return new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#match_expressions DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#match_labels DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsList",
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules {
  /**
  * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#api_groups DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#api_versions DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#api_versions}
  */
  readonly apiVersions?: string[];
  /**
  * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#operations DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Resources is a list of resources this rule applies to. For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '* /scale' means all scale subresources. '* /*' means all resources and their subresources. If wildcard is present, the validation rule will ensure resources do not overlap with each other. Depending on the enclosing object, subresources might not be allowed. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#resources DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#resources}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly resources?: string[];
  /**
  * scope specifies the scope of this rule. Valid values are 'Cluster', 'Namespaced', and '*' 'Cluster' means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. 'Namespaced' means that only namespaced resources will match this rule. '*' means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is '*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#scope DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#scope}
  */
  readonly scope?: string;
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiVersions),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules | cdktf.IResolvable): any {
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
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules | cdktf.IResolvable | undefined {
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
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._apiVersions = undefined;
      this._operations = undefined;
      this._resources = undefined;
      this._scope = undefined;
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
      this._operations = value.operations;
      this._resources = value.resources;
      this._scope = value.scope;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // api_versions - computed: false, optional: true, required: false
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  public resetApiVersions() {
    this._apiVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesOutputReference {
    return new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks {
  /**
  * AdmissionReviewVersions is an ordered list of preferred 'AdmissionReview' versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#admission_review_versions DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#admission_review_versions}
  */
  readonly admissionReviewVersions: string[];
  /**
  * WebhookClientConfig contains the information to make a TLS connection with the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#client_config DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#client_config}
  */
  readonly clientConfig: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig;
  /**
  * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#failure_policy DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed. The exact matching logic is (in order): 1. If ANY matchCondition evaluates to FALSE, the webhook is skipped. 2. If ALL matchConditions evaluate to TRUE, the webhook is called. 3. If any matchCondition evaluates to an error (but none are FALSE): - If failurePolicy=Fail, reject the request - If failurePolicy=Ignore, the error is ignored and the webhook is skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#match_conditions DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#match_conditions}
  */
  readonly matchConditions?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions[] | cdktf.IResolvable;
  /**
  * matchPolicy defines how the 'rules' list is used to match incoming requests. Allowed values are 'Exact' or 'Equivalent'. - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but 'rules' only included 'apiGroups:['apps'], apiVersions:['v1'], resources: ['deployments']', a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook. - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and 'rules' only included 'apiGroups:['apps'], apiVersions:['v1'], resources: ['deployments']', a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook. Defaults to 'Equivalent'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#match_policy DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#match_policy}
  */
  readonly matchPolicy?: string;
  /**
  * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where 'imagepolicy' is the name of the webhook, and kubernetes.io is the name of the organization. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#name DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#name}
  */
  readonly name: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#namespace_selector DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#object_selector DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#object_selector}
  */
  readonly objectSelector?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector;
  /**
  * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#rules DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#rules}
  */
  readonly rules?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules[] | cdktf.IResolvable;
  /**
  * SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#side_effects DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#side_effects}
  */
  readonly sideEffects: string;
  /**
  * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#timeout_seconds DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksToTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_review_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.admissionReviewVersions),
    client_config: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigToTerraform(struct!.clientConfig),
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    match_conditions: cdktf.listMapper(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsToTerraform, false)(struct!.matchConditions),
    match_policy: cdktf.stringToTerraform(struct!.matchPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    namespace_selector: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorToTerraform(struct!.namespaceSelector),
    object_selector: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorToTerraform(struct!.objectSelector),
    rules: cdktf.listMapper(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesToTerraform, false)(struct!.rules),
    side_effects: cdktf.stringToTerraform(struct!.sideEffects),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksToHclTerraform(struct?: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_review_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.admissionReviewVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_config: {
      value: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig",
    },
    failure_policy: {
      value: cdktf.stringToHclTerraform(struct!.failurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_conditions: {
      value: cdktf.listMapperHcl(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsToHclTerraform, false)(struct!.matchConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsList",
    },
    match_policy: {
      value: cdktf.stringToHclTerraform(struct!.matchPolicy),
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
    namespace_selector: {
      value: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector",
    },
    object_selector: {
      value: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorToHclTerraform(struct!.objectSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesList",
    },
    side_effects: {
      value: cdktf.stringToHclTerraform(struct!.sideEffects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionReviewVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionReviewVersions = this._admissionReviewVersions;
    }
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._matchConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchConditions = this._matchConditions?.internalValue;
    }
    if (this._matchPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPolicy = this._matchPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._objectSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSelector = this._objectSelector?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._sideEffects !== undefined) {
      hasAnyValues = true;
      internalValueResult.sideEffects = this._sideEffects;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionReviewVersions = undefined;
      this._clientConfig.internalValue = undefined;
      this._failurePolicy = undefined;
      this._matchConditions.internalValue = undefined;
      this._matchPolicy = undefined;
      this._name = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._objectSelector.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._sideEffects = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionReviewVersions = value.admissionReviewVersions;
      this._clientConfig.internalValue = value.clientConfig;
      this._failurePolicy = value.failurePolicy;
      this._matchConditions.internalValue = value.matchConditions;
      this._matchPolicy = value.matchPolicy;
      this._name = value.name;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._objectSelector.internalValue = value.objectSelector;
      this._rules.internalValue = value.rules;
      this._sideEffects = value.sideEffects;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // admission_review_versions - computed: false, optional: false, required: true
  private _admissionReviewVersions?: string[]; 
  public get admissionReviewVersions() {
    return this.getListAttribute('admission_review_versions');
  }
  public set admissionReviewVersions(value: string[]) {
    this._admissionReviewVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionReviewVersionsInput() {
    return this._admissionReviewVersions;
  }

  // client_config - computed: false, optional: false, required: true
  private _clientConfig = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksClientConfig) {
    this._clientConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
  }

  // match_conditions - computed: false, optional: true, required: false
  private _matchConditions = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditionsList(this, "match_conditions", false);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksMatchConditions[] | cdktf.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  public resetMatchConditions() {
    this._matchConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
  }

  // match_policy - computed: false, optional: true, required: false
  private _matchPolicy?: string; 
  public get matchPolicy() {
    return this.getStringAttribute('match_policy');
  }
  public set matchPolicy(value: string) {
    this._matchPolicy = value;
  }
  public resetMatchPolicy() {
    this._matchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPolicyInput() {
    return this._matchPolicy;
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

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // object_selector - computed: false, optional: true, required: false
  private _objectSelector = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelectorOutputReference(this, "object_selector");
  public get objectSelector() {
    return this._objectSelector;
  }
  public putObjectSelector(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksObjectSelector) {
    this._objectSelector.internalValue = value;
  }
  public resetObjectSelector() {
    this._objectSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSelectorInput() {
    return this._objectSelector.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // side_effects - computed: false, optional: false, required: true
  private _sideEffects?: string; 
  public get sideEffects() {
    return this.getStringAttribute('side_effects');
  }
  public set sideEffects(value: string) {
    this._sideEffects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sideEffectsInput() {
    return this._sideEffects;
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

export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksList extends cdktf.ComplexList {
  public internalValue? : DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksOutputReference {
    return new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest k8s_admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest}
*/
export class DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest to import
  * @param importFromId The id of the existing DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest k8s_admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_admissionregistration_k8s_io_validating_webhook_configuration_v1_manifest',
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
    this._webhooks.internalValue = config.webhooks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // webhooks - computed: false, optional: true, required: false
  private _webhooks = new DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }
  public putWebhooks(value: DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooks[] | cdktf.IResolvable) {
    this._webhooks.internalValue = value;
  }
  public resetWebhooks() {
    this._webhooks.internalValue = undefined;
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
      metadata: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      webhooks: cdktf.listMapper(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksToTerraform, false)(this._webhooks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestMetadata",
      },
      webhooks: {
        value: cdktf.listMapperHcl(dataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksToHclTerraform, false)(this._webhooks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SAdmissionregistrationK8SIoValidatingWebhookConfigurationV1ManifestWebhooksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
