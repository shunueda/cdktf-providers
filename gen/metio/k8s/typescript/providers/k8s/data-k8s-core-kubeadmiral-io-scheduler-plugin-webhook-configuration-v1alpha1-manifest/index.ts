// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#metadata DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#spec DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec;
}
export interface DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#annotations DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#labels DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#name DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig {
  /**
  * CAData holds PEM-encoded bytes (typically read from a root certificates bundle).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#ca_data DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#ca_data}
  */
  readonly caData?: string;
  /**
  * CertData holds PEM-encoded bytes (typically read from a client certificate file).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#cert_data DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#cert_data}
  */
  readonly certData?: string;
  /**
  * Server should be accessed without verifying the TLS certificate. For testing only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#insecure DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * KeyData holds PEM-encoded bytes (typically read from a client certificate key file).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#key_data DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#key_data}
  */
  readonly keyData?: string;
  /**
  * ServerName is passed to the server for SNI and is used in the client to check server certificates against. If ServerName is empty, the hostname used to contact the server is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#server_name DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfigToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_data: cdktf.stringToTerraform(struct!.caData),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_data: {
      value: cdktf.stringToHclTerraform(struct!.caData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caData = this._caData;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caData = undefined;
      this._certData = undefined;
      this._insecure = undefined;
      this._keyData = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caData = value.caData;
      this._certData = value.certData;
      this._insecure = value.insecure;
      this._keyData = value.keyData;
      this._serverName = value.serverName;
    }
  }

  // ca_data - computed: false, optional: true, required: false
  private _caData?: string; 
  public get caData() {
    return this.getStringAttribute('ca_data');
  }
  public set caData(value: string) {
    this._caData = value;
  }
  public resetCaData() {
    this._caData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDataInput() {
    return this._caData;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec {
  /**
  * Path for the filter call, empty if not supported. This path is appended to the URLPrefix when issuing the filter call to webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#filter_path DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#filter_path}
  */
  readonly filterPath?: string;
  /**
  * HTTPTimeout specifies the timeout duration for a call to the webhook. Timeout fails the scheduling of the workload. Defaults to 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#http_timeout DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#http_timeout}
  */
  readonly httpTimeout?: string;
  /**
  * PayloadVersions is an ordered list of preferred request and response versions the webhook expects. The scheduler will try to use the first version in the list which it supports. If none of the versions specified in this list supported by the scheduler, scheduling will fail for this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#payload_versions DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#payload_versions}
  */
  readonly payloadVersions: string[];
  /**
  * Path for the score call, empty if not supported. This verb is appended to the URLPrefix when issuing the score call to webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#score_path DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#score_path}
  */
  readonly scorePath?: string;
  /**
  * Path for the select call, empty if not supported. This verb is appended to the URLPrefix when issuing the select call to webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#select_path DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#select_path}
  */
  readonly selectPath?: string;
  /**
  * TLSConfig specifies the transport layer security config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#tls_config DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig;
  /**
  * URLPrefix at which the webhook is available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#url_prefix DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest#url_prefix}
  */
  readonly urlPrefix: string;
}

export function dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_path: cdktf.stringToTerraform(struct!.filterPath),
    http_timeout: cdktf.stringToTerraform(struct!.httpTimeout),
    payload_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.payloadVersions),
    score_path: cdktf.stringToTerraform(struct!.scorePath),
    select_path: cdktf.stringToTerraform(struct!.selectPath),
    tls_config: dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfigToTerraform(struct!.tlsConfig),
    url_prefix: cdktf.stringToTerraform(struct!.urlPrefix),
  }
}


export function dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_path: {
      value: cdktf.stringToHclTerraform(struct!.filterPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_timeout: {
      value: cdktf.stringToHclTerraform(struct!.httpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.payloadVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    score_path: {
      value: cdktf.stringToHclTerraform(struct!.scorePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    select_path: {
      value: cdktf.stringToHclTerraform(struct!.selectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig",
    },
    url_prefix: {
      value: cdktf.stringToHclTerraform(struct!.urlPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPath = this._filterPath;
    }
    if (this._httpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTimeout = this._httpTimeout;
    }
    if (this._payloadVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadVersions = this._payloadVersions;
    }
    if (this._scorePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scorePath = this._scorePath;
    }
    if (this._selectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPath = this._selectPath;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._urlPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPrefix = this._urlPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterPath = undefined;
      this._httpTimeout = undefined;
      this._payloadVersions = undefined;
      this._scorePath = undefined;
      this._selectPath = undefined;
      this._tlsConfig.internalValue = undefined;
      this._urlPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterPath = value.filterPath;
      this._httpTimeout = value.httpTimeout;
      this._payloadVersions = value.payloadVersions;
      this._scorePath = value.scorePath;
      this._selectPath = value.selectPath;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._urlPrefix = value.urlPrefix;
    }
  }

  // filter_path - computed: false, optional: true, required: false
  private _filterPath?: string; 
  public get filterPath() {
    return this.getStringAttribute('filter_path');
  }
  public set filterPath(value: string) {
    this._filterPath = value;
  }
  public resetFilterPath() {
    this._filterPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPathInput() {
    return this._filterPath;
  }

  // http_timeout - computed: false, optional: true, required: false
  private _httpTimeout?: string; 
  public get httpTimeout() {
    return this.getStringAttribute('http_timeout');
  }
  public set httpTimeout(value: string) {
    this._httpTimeout = value;
  }
  public resetHttpTimeout() {
    this._httpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutInput() {
    return this._httpTimeout;
  }

  // payload_versions - computed: false, optional: false, required: true
  private _payloadVersions?: string[]; 
  public get payloadVersions() {
    return this.getListAttribute('payload_versions');
  }
  public set payloadVersions(value: string[]) {
    this._payloadVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadVersionsInput() {
    return this._payloadVersions;
  }

  // score_path - computed: false, optional: true, required: false
  private _scorePath?: string; 
  public get scorePath() {
    return this.getStringAttribute('score_path');
  }
  public set scorePath(value: string) {
    this._scorePath = value;
  }
  public resetScorePath() {
    this._scorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scorePathInput() {
    return this._scorePath;
  }

  // select_path - computed: false, optional: true, required: false
  private _selectPath?: string; 
  public get selectPath() {
    return this.getStringAttribute('select_path');
  }
  public set selectPath(value: string) {
    this._selectPath = value;
  }
  public resetSelectPath() {
    this._selectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPathInput() {
    return this._selectPath;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // url_prefix - computed: false, optional: false, required: true
  private _urlPrefix?: string; 
  public get urlPrefix() {
    return this.getStringAttribute('url_prefix');
  }
  public set urlPrefix(value: string) {
    this._urlPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPrefixInput() {
    return this._urlPrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest k8s_core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest}
*/
export class DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest k8s_core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_core_kubeadmiral_io_scheduler_plugin_webhook_configuration_v1alpha1_manifest',
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
  private _metadata = new DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCoreKubeadmiralIoSchedulerPluginWebhookConfigurationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
