// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#metadata DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata;
  /**
  * PtpOperatorConfigSpec defines the desired state of PtpOperatorConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#spec DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec;
}
export interface DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#annotations DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#labels DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#name DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#namespace DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadataToTerraform(struct?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig {
  /**
  * ApiVersion is used to determine which API is used for the event service 1.0: default version. event service is mapped to internal REST-API. 2.x: event service is mapped to O-RAN v3.0 Compliant O-Cloud Notification REST-API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#api_version DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * EnableEventPublisher will deploy event proxy as a sidecar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#enable_event_publisher DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#enable_event_publisher}
  */
  readonly enableEventPublisher?: boolean | cdktf.IResolvable;
  /**
  * StorageType is the type of storage to store subscription data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#storage_type DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * TransportHost format is <protocol>://<transport-service>.<namespace>.svc.cluster.local:<transport-port> Example HTTP transport: 'http://ptp-event-publisher-service-NODE_NAME.openshift-ptp.svc.cluster.local:9043'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#transport_host DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#transport_host}
  */
  readonly transportHost?: string;
}

export function dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfigToTerraform(struct?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    enable_event_publisher: cdktf.booleanToTerraform(struct!.enableEventPublisher),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    transport_host: cdktf.stringToTerraform(struct!.transportHost),
  }
}


export function dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfigToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig | cdktf.IResolvable): any {
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
    enable_event_publisher: {
      value: cdktf.booleanToHclTerraform(struct!.enableEventPublisher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_host: {
      value: cdktf.stringToHclTerraform(struct!.transportHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._enableEventPublisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventPublisher = this._enableEventPublisher;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._transportHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportHost = this._transportHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._enableEventPublisher = undefined;
      this._storageType = undefined;
      this._transportHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._enableEventPublisher = value.enableEventPublisher;
      this._storageType = value.storageType;
      this._transportHost = value.transportHost;
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

  // enable_event_publisher - computed: false, optional: true, required: false
  private _enableEventPublisher?: boolean | cdktf.IResolvable; 
  public get enableEventPublisher() {
    return this.getBooleanAttribute('enable_event_publisher');
  }
  public set enableEventPublisher(value: boolean | cdktf.IResolvable) {
    this._enableEventPublisher = value;
  }
  public resetEnableEventPublisher() {
    this._enableEventPublisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventPublisherInput() {
    return this._enableEventPublisher;
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

  // transport_host - computed: false, optional: true, required: false
  private _transportHost?: string; 
  public get transportHost() {
    return this.getStringAttribute('transport_host');
  }
  public set transportHost(value: string) {
    this._transportHost = value;
  }
  public resetTransportHost() {
    this._transportHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportHostInput() {
    return this._transportHost;
  }
}
export interface DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec {
  /**
  * DaemonNodeSelector specifies the node selector for the linuxptp daemon. This is a map of key-value pairs used to select the nodes where the linuxptp daemon will run. If empty {}, the linuxptp daemon will be deployed on each node of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#daemon_node_selector DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#daemon_node_selector}
  */
  readonly daemonNodeSelector: { [key: string]: string };
  /**
  * EnabledPlugins is a map of plugin names to their configuration settings. Each entry in the map specifies the configuration for a specific plugin. This field is optional and can be omitted if no plugins are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#plugins DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#plugins}
  */
  readonly plugins?: { [key: string]: string };
  /**
  * EventConfig contains the configuration settings for the PTP event sidecar. This field is optional and can be omitted if event sidecar configuration is not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#ptp_event_config DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest#ptp_event_config}
  */
  readonly ptpEventConfig?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig;
}

export function dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecToTerraform(struct?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daemon_node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.daemonNodeSelector),
    plugins: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.plugins),
    ptp_event_config: dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfigToTerraform(struct!.ptpEventConfig),
  }
}


export function dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecToHclTerraform(struct?: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daemon_node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.daemonNodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    plugins: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.plugins),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ptp_event_config: {
      value: dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfigToHclTerraform(struct!.ptpEventConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daemonNodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonNodeSelector = this._daemonNodeSelector;
    }
    if (this._plugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins;
    }
    if (this._ptpEventConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpEventConfig = this._ptpEventConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daemonNodeSelector = undefined;
      this._plugins = undefined;
      this._ptpEventConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daemonNodeSelector = value.daemonNodeSelector;
      this._plugins = value.plugins;
      this._ptpEventConfig.internalValue = value.ptpEventConfig;
    }
  }

  // daemon_node_selector - computed: false, optional: false, required: true
  private _daemonNodeSelector?: { [key: string]: string }; 
  public get daemonNodeSelector() {
    return this.getStringMapAttribute('daemon_node_selector');
  }
  public set daemonNodeSelector(value: { [key: string]: string }) {
    this._daemonNodeSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonNodeSelectorInput() {
    return this._daemonNodeSelector;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins?: { [key: string]: string }; 
  public get plugins() {
    return this.getStringMapAttribute('plugins');
  }
  public set plugins(value: { [key: string]: string }) {
    this._plugins = value;
  }
  public resetPlugins() {
    this._plugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins;
  }

  // ptp_event_config - computed: false, optional: true, required: false
  private _ptpEventConfig = new DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfigOutputReference(this, "ptp_event_config");
  public get ptpEventConfig() {
    return this._ptpEventConfig;
  }
  public putPtpEventConfig(value: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecPtpEventConfig) {
    this._ptpEventConfig.internalValue = value;
  }
  public resetPtpEventConfig() {
    this._ptpEventConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpEventConfigInput() {
    return this._ptpEventConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest k8s_ptp_openshift_io_ptp_operator_config_v1_manifest}
*/
export class DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ptp_openshift_io_ptp_operator_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPtpOpenshiftIoPtpOperatorConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ptp_openshift_io_ptp_operator_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ptp_openshift_io_ptp_operator_config_v1_manifest k8s_ptp_openshift_io_ptp_operator_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ptp_openshift_io_ptp_operator_config_v1_manifest',
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
  private _metadata = new DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec) {
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
      metadata: dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPtpOpenshiftIoPtpOperatorConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
