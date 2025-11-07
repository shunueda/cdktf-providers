// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#metadata DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata;
  /**
  * SriovOperatorConfigSpec defines the desired state of SriovOperatorConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#spec DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec;
}
export interface DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#annotations DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#labels DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#namespace DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadataToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec {
  /**
  * NodeSelector selects the nodes to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#config_daemon_node_selector DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#config_daemon_node_selector}
  */
  readonly configDaemonNodeSelector?: { [key: string]: string };
  /**
  * Flag to enable the sriov-network-config-daemon to use a systemd service to configure SR-IOV devices on boot Default mode: daemon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#configuration_mode DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#configuration_mode}
  */
  readonly configurationMode?: string;
  /**
  * Flag to disable nodes drain during debugging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#disable_drain DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#disable_drain}
  */
  readonly disableDrain?: boolean | cdktf.IResolvable;
  /**
  * DisablePlugins is a list of sriov-network-config-daemon plugins to disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#disable_plugins DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#disable_plugins}
  */
  readonly disablePlugins?: string[];
  /**
  * Flag to control whether the network resource injector webhook shall be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#enable_injector DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#enable_injector}
  */
  readonly enableInjector?: boolean | cdktf.IResolvable;
  /**
  * Flag to control whether the operator admission controller webhook shall be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#enable_operator_webhook DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#enable_operator_webhook}
  */
  readonly enableOperatorWebhook?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable OVS hardware offload. Set to 'true' to provision switchdev-configuration.service and enable OpenvSwitch hw-offload on nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#enable_ovs_offload DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#enable_ovs_offload}
  */
  readonly enableOvsOffload?: boolean | cdktf.IResolvable;
  /**
  * FeatureGates to enable experimental features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#feature_gates DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#feature_gates}
  */
  readonly featureGates?: { [key: string]: string };
  /**
  * Flag to control the log verbose level of the operator. Set to '0' to show only the basic logs. And set to '2' to show all the available logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#log_level DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#log_level}
  */
  readonly logLevel?: number;
  /**
  * Flag to enable Container Device Interface mode for SR-IOV Network Device Plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#use_cdi DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest#use_cdi}
  */
  readonly useCdi?: boolean | cdktf.IResolvable;
}

export function dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpecToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_daemon_node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configDaemonNodeSelector),
    configuration_mode: cdktf.stringToTerraform(struct!.configurationMode),
    disable_drain: cdktf.booleanToTerraform(struct!.disableDrain),
    disable_plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disablePlugins),
    enable_injector: cdktf.booleanToTerraform(struct!.enableInjector),
    enable_operator_webhook: cdktf.booleanToTerraform(struct!.enableOperatorWebhook),
    enable_ovs_offload: cdktf.booleanToTerraform(struct!.enableOvsOffload),
    feature_gates: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.featureGates),
    log_level: cdktf.numberToTerraform(struct!.logLevel),
    use_cdi: cdktf.booleanToTerraform(struct!.useCdi),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpecToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_daemon_node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configDaemonNodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    configuration_mode: {
      value: cdktf.stringToHclTerraform(struct!.configurationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_drain: {
      value: cdktf.booleanToHclTerraform(struct!.disableDrain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_plugins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disablePlugins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_injector: {
      value: cdktf.booleanToHclTerraform(struct!.enableInjector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_operator_webhook: {
      value: cdktf.booleanToHclTerraform(struct!.enableOperatorWebhook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ovs_offload: {
      value: cdktf.booleanToHclTerraform(struct!.enableOvsOffload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_gates: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.featureGates),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_level: {
      value: cdktf.numberToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_cdi: {
      value: cdktf.booleanToHclTerraform(struct!.useCdi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configDaemonNodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.configDaemonNodeSelector = this._configDaemonNodeSelector;
    }
    if (this._configurationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationMode = this._configurationMode;
    }
    if (this._disableDrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDrain = this._disableDrain;
    }
    if (this._disablePlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePlugins = this._disablePlugins;
    }
    if (this._enableInjector !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInjector = this._enableInjector;
    }
    if (this._enableOperatorWebhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOperatorWebhook = this._enableOperatorWebhook;
    }
    if (this._enableOvsOffload !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOvsOffload = this._enableOvsOffload;
    }
    if (this._featureGates !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._useCdi !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCdi = this._useCdi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configDaemonNodeSelector = undefined;
      this._configurationMode = undefined;
      this._disableDrain = undefined;
      this._disablePlugins = undefined;
      this._enableInjector = undefined;
      this._enableOperatorWebhook = undefined;
      this._enableOvsOffload = undefined;
      this._featureGates = undefined;
      this._logLevel = undefined;
      this._useCdi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configDaemonNodeSelector = value.configDaemonNodeSelector;
      this._configurationMode = value.configurationMode;
      this._disableDrain = value.disableDrain;
      this._disablePlugins = value.disablePlugins;
      this._enableInjector = value.enableInjector;
      this._enableOperatorWebhook = value.enableOperatorWebhook;
      this._enableOvsOffload = value.enableOvsOffload;
      this._featureGates = value.featureGates;
      this._logLevel = value.logLevel;
      this._useCdi = value.useCdi;
    }
  }

  // config_daemon_node_selector - computed: false, optional: true, required: false
  private _configDaemonNodeSelector?: { [key: string]: string }; 
  public get configDaemonNodeSelector() {
    return this.getStringMapAttribute('config_daemon_node_selector');
  }
  public set configDaemonNodeSelector(value: { [key: string]: string }) {
    this._configDaemonNodeSelector = value;
  }
  public resetConfigDaemonNodeSelector() {
    this._configDaemonNodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDaemonNodeSelectorInput() {
    return this._configDaemonNodeSelector;
  }

  // configuration_mode - computed: false, optional: true, required: false
  private _configurationMode?: string; 
  public get configurationMode() {
    return this.getStringAttribute('configuration_mode');
  }
  public set configurationMode(value: string) {
    this._configurationMode = value;
  }
  public resetConfigurationMode() {
    this._configurationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationModeInput() {
    return this._configurationMode;
  }

  // disable_drain - computed: false, optional: true, required: false
  private _disableDrain?: boolean | cdktf.IResolvable; 
  public get disableDrain() {
    return this.getBooleanAttribute('disable_drain');
  }
  public set disableDrain(value: boolean | cdktf.IResolvable) {
    this._disableDrain = value;
  }
  public resetDisableDrain() {
    this._disableDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDrainInput() {
    return this._disableDrain;
  }

  // disable_plugins - computed: false, optional: true, required: false
  private _disablePlugins?: string[]; 
  public get disablePlugins() {
    return this.getListAttribute('disable_plugins');
  }
  public set disablePlugins(value: string[]) {
    this._disablePlugins = value;
  }
  public resetDisablePlugins() {
    this._disablePlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePluginsInput() {
    return this._disablePlugins;
  }

  // enable_injector - computed: false, optional: true, required: false
  private _enableInjector?: boolean | cdktf.IResolvable; 
  public get enableInjector() {
    return this.getBooleanAttribute('enable_injector');
  }
  public set enableInjector(value: boolean | cdktf.IResolvable) {
    this._enableInjector = value;
  }
  public resetEnableInjector() {
    this._enableInjector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInjectorInput() {
    return this._enableInjector;
  }

  // enable_operator_webhook - computed: false, optional: true, required: false
  private _enableOperatorWebhook?: boolean | cdktf.IResolvable; 
  public get enableOperatorWebhook() {
    return this.getBooleanAttribute('enable_operator_webhook');
  }
  public set enableOperatorWebhook(value: boolean | cdktf.IResolvable) {
    this._enableOperatorWebhook = value;
  }
  public resetEnableOperatorWebhook() {
    this._enableOperatorWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOperatorWebhookInput() {
    return this._enableOperatorWebhook;
  }

  // enable_ovs_offload - computed: false, optional: true, required: false
  private _enableOvsOffload?: boolean | cdktf.IResolvable; 
  public get enableOvsOffload() {
    return this.getBooleanAttribute('enable_ovs_offload');
  }
  public set enableOvsOffload(value: boolean | cdktf.IResolvable) {
    this._enableOvsOffload = value;
  }
  public resetEnableOvsOffload() {
    this._enableOvsOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOvsOffloadInput() {
    return this._enableOvsOffload;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: { [key: string]: string }; 
  public get featureGates() {
    return this.getStringMapAttribute('feature_gates');
  }
  public set featureGates(value: { [key: string]: string }) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }
  public set logLevel(value: number) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // use_cdi - computed: false, optional: true, required: false
  private _useCdi?: boolean | cdktf.IResolvable; 
  public get useCdi() {
    return this.getBooleanAttribute('use_cdi');
  }
  public set useCdi(value: boolean | cdktf.IResolvable) {
    this._useCdi = value;
  }
  public resetUseCdi() {
    this._useCdi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCdiInput() {
    return this._useCdi;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest k8s_sriovnetwork_openshift_io_sriov_operator_config_v1_manifest}
*/
export class DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sriovnetwork_openshift_io_sriov_operator_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sriovnetwork_openshift_io_sriov_operator_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_operator_config_v1_manifest k8s_sriovnetwork_openshift_io_sriov_operator_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sriovnetwork_openshift_io_sriov_operator_config_v1_manifest',
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
  private _metadata = new DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec) {
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
      metadata: dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovOperatorConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
