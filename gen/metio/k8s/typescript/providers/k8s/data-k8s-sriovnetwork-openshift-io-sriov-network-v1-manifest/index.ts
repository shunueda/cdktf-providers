// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#metadata DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#metadata}
  */
  readonly metadata: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata;
  /**
  * SriovNetworkSpec defines the desired state of SriovNetwork
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#spec DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#spec}
  */
  readonly spec?: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec;
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#annotations DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#labels DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#namespace DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadataToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadataToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec {
  /**
  * Capabilities to be configured for this network. Capabilities supported: (mac|ips), e.g. '{'mac': true}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#capabilities DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#capabilities}
  */
  readonly capabilities?: string;
  /**
  * IPAM configuration to be used for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#ipam DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#ipam}
  */
  readonly ipam?: string;
  /**
  * VF link state (enable|disable|auto)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#link_state DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#link_state}
  */
  readonly linkState?: string;
  /**
  * LogFile sets the log file of the SRIOV CNI plugin logs. If unset (default), this will log to stderr and thus to multus and container runtime logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#log_file DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#log_file}
  */
  readonly logFile?: string;
  /**
  * LogLevel sets the log level of the SRIOV CNI plugin - either of panic, error, warning, info, debug. Defaults to info if left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#log_level DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum tx rate, in Mbps, for the VF. Defaults to 0 (no rate limiting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#max_tx_rate DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#max_tx_rate}
  */
  readonly maxTxRate?: number;
  /**
  * MetaPluginsConfig configuration to be used in order to chain metaplugins to the sriov interface returned by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#meta_plugins DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#meta_plugins}
  */
  readonly metaPlugins?: string;
  /**
  * Minimum tx rate, in Mbps, for the VF. Defaults to 0 (no rate limiting). min_tx_rate should be <= max_tx_rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#min_tx_rate DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#min_tx_rate}
  */
  readonly minTxRate?: number;
  /**
  * Namespace of the NetworkAttachmentDefinition custom resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#network_namespace DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#network_namespace}
  */
  readonly networkNamespace?: string;
  /**
  * SRIOV Network device plugin endpoint resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#resource_name DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#resource_name}
  */
  readonly resourceName: string;
  /**
  * VF spoof check, (on|off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#spoof_chk DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#spoof_chk}
  */
  readonly spoofChk?: string;
  /**
  * VF trust mode (on|off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#trust DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#trust}
  */
  readonly trust?: string;
  /**
  * VLAN ID to assign for the VF. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#vlan DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#vlan}
  */
  readonly vlan?: number;
  /**
  * VLAN proto to assign for the VF. Defaults to 802.1q.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#vlan_proto DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#vlan_proto}
  */
  readonly vlanProto?: string;
  /**
  * VLAN QoS ID to assign for the VF. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#vlan_qo_s DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest#vlan_qo_s}
  */
  readonly vlanQoS?: number;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpecToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.stringToTerraform(struct!.capabilities),
    ipam: cdktf.stringToTerraform(struct!.ipam),
    link_state: cdktf.stringToTerraform(struct!.linkState),
    log_file: cdktf.stringToTerraform(struct!.logFile),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_tx_rate: cdktf.numberToTerraform(struct!.maxTxRate),
    meta_plugins: cdktf.stringToTerraform(struct!.metaPlugins),
    min_tx_rate: cdktf.numberToTerraform(struct!.minTxRate),
    network_namespace: cdktf.stringToTerraform(struct!.networkNamespace),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    spoof_chk: cdktf.stringToTerraform(struct!.spoofChk),
    trust: cdktf.stringToTerraform(struct!.trust),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    vlan_proto: cdktf.stringToTerraform(struct!.vlanProto),
    vlan_qo_s: cdktf.numberToTerraform(struct!.vlanQoS),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpecToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.stringToHclTerraform(struct!.capabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam: {
      value: cdktf.stringToHclTerraform(struct!.ipam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_state: {
      value: cdktf.stringToHclTerraform(struct!.linkState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_file: {
      value: cdktf.stringToHclTerraform(struct!.logFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tx_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxTxRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    meta_plugins: {
      value: cdktf.stringToHclTerraform(struct!.metaPlugins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_tx_rate: {
      value: cdktf.numberToHclTerraform(struct!.minTxRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_namespace: {
      value: cdktf.stringToHclTerraform(struct!.networkNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spoof_chk: {
      value: cdktf.stringToHclTerraform(struct!.spoofChk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust: {
      value: cdktf.stringToHclTerraform(struct!.trust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_proto: {
      value: cdktf.stringToHclTerraform(struct!.vlanProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_qo_s: {
      value: cdktf.numberToHclTerraform(struct!.vlanQoS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._ipam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipam = this._ipam;
    }
    if (this._linkState !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkState = this._linkState;
    }
    if (this._logFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFile = this._logFile;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTxRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTxRate = this._maxTxRate;
    }
    if (this._metaPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaPlugins = this._metaPlugins;
    }
    if (this._minTxRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTxRate = this._minTxRate;
    }
    if (this._networkNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkNamespace = this._networkNamespace;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._spoofChk !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofChk = this._spoofChk;
    }
    if (this._trust !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanProto = this._vlanProto;
    }
    if (this._vlanQoS !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanQoS = this._vlanQoS;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._ipam = undefined;
      this._linkState = undefined;
      this._logFile = undefined;
      this._logLevel = undefined;
      this._maxTxRate = undefined;
      this._metaPlugins = undefined;
      this._minTxRate = undefined;
      this._networkNamespace = undefined;
      this._resourceName = undefined;
      this._spoofChk = undefined;
      this._trust = undefined;
      this._vlan = undefined;
      this._vlanProto = undefined;
      this._vlanQoS = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._ipam = value.ipam;
      this._linkState = value.linkState;
      this._logFile = value.logFile;
      this._logLevel = value.logLevel;
      this._maxTxRate = value.maxTxRate;
      this._metaPlugins = value.metaPlugins;
      this._minTxRate = value.minTxRate;
      this._networkNamespace = value.networkNamespace;
      this._resourceName = value.resourceName;
      this._spoofChk = value.spoofChk;
      this._trust = value.trust;
      this._vlan = value.vlan;
      this._vlanProto = value.vlanProto;
      this._vlanQoS = value.vlanQoS;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string; 
  public get capabilities() {
    return this.getStringAttribute('capabilities');
  }
  public set capabilities(value: string) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // ipam - computed: false, optional: true, required: false
  private _ipam?: string; 
  public get ipam() {
    return this.getStringAttribute('ipam');
  }
  public set ipam(value: string) {
    this._ipam = value;
  }
  public resetIpam() {
    this._ipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamInput() {
    return this._ipam;
  }

  // link_state - computed: false, optional: true, required: false
  private _linkState?: string; 
  public get linkState() {
    return this.getStringAttribute('link_state');
  }
  public set linkState(value: string) {
    this._linkState = value;
  }
  public resetLinkState() {
    this._linkState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateInput() {
    return this._linkState;
  }

  // log_file - computed: false, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this.getStringAttribute('log_file');
  }
  public set logFile(value: string) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_tx_rate - computed: false, optional: true, required: false
  private _maxTxRate?: number; 
  public get maxTxRate() {
    return this.getNumberAttribute('max_tx_rate');
  }
  public set maxTxRate(value: number) {
    this._maxTxRate = value;
  }
  public resetMaxTxRate() {
    this._maxTxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTxRateInput() {
    return this._maxTxRate;
  }

  // meta_plugins - computed: false, optional: true, required: false
  private _metaPlugins?: string; 
  public get metaPlugins() {
    return this.getStringAttribute('meta_plugins');
  }
  public set metaPlugins(value: string) {
    this._metaPlugins = value;
  }
  public resetMetaPlugins() {
    this._metaPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaPluginsInput() {
    return this._metaPlugins;
  }

  // min_tx_rate - computed: false, optional: true, required: false
  private _minTxRate?: number; 
  public get minTxRate() {
    return this.getNumberAttribute('min_tx_rate');
  }
  public set minTxRate(value: number) {
    this._minTxRate = value;
  }
  public resetMinTxRate() {
    this._minTxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTxRateInput() {
    return this._minTxRate;
  }

  // network_namespace - computed: false, optional: true, required: false
  private _networkNamespace?: string; 
  public get networkNamespace() {
    return this.getStringAttribute('network_namespace');
  }
  public set networkNamespace(value: string) {
    this._networkNamespace = value;
  }
  public resetNetworkNamespace() {
    this._networkNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNamespaceInput() {
    return this._networkNamespace;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // spoof_chk - computed: false, optional: true, required: false
  private _spoofChk?: string; 
  public get spoofChk() {
    return this.getStringAttribute('spoof_chk');
  }
  public set spoofChk(value: string) {
    this._spoofChk = value;
  }
  public resetSpoofChk() {
    this._spoofChk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofChkInput() {
    return this._spoofChk;
  }

  // trust - computed: false, optional: true, required: false
  private _trust?: string; 
  public get trust() {
    return this.getStringAttribute('trust');
  }
  public set trust(value: string) {
    this._trust = value;
  }
  public resetTrust() {
    this._trust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_proto - computed: false, optional: true, required: false
  private _vlanProto?: string; 
  public get vlanProto() {
    return this.getStringAttribute('vlan_proto');
  }
  public set vlanProto(value: string) {
    this._vlanProto = value;
  }
  public resetVlanProto() {
    this._vlanProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanProtoInput() {
    return this._vlanProto;
  }

  // vlan_qo_s - computed: false, optional: true, required: false
  private _vlanQoS?: number; 
  public get vlanQoS() {
    return this.getNumberAttribute('vlan_qo_s');
  }
  public set vlanQoS(value: number) {
    this._vlanQoS = value;
  }
  public resetVlanQoS() {
    this._vlanQoS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanQoSInput() {
    return this._vlanQoS;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_v1_manifest}
*/
export class DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sriovnetwork_openshift_io_sriov_network_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest to import
  * @param importFromId The id of the existing DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSriovnetworkOpenshiftIoSriovNetworkV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sriovnetwork_openshift_io_sriov_network_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/sriovnetwork_openshift_io_sriov_network_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sriovnetwork_openshift_io_sriov_network_v1_manifest',
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
  private _metadata = new DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec) {
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
      metadata: dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
