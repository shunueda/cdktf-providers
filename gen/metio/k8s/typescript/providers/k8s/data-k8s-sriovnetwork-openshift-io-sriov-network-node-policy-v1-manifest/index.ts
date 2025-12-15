// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#metadata DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#metadata}
  */
  readonly metadata: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata;
  /**
  * SriovNetworkNodePolicySpec defines the desired state of SriovNetworkNodePolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#spec DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#spec}
  */
  readonly spec?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec;
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#annotations DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#labels DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#namespace DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadataToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadataToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge {
  /**
  * configure datapath_type field in the Bridge table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#datapath_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#datapath_type}
  */
  readonly datapathType?: string;
  /**
  * IDs to inject to external_ids field in the Bridge table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#external_i_ds DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#external_i_ds}
  */
  readonly externalIDs?: { [key: string]: string };
  /**
  * additional options to inject to other_config field in the bridge table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#other_config DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#other_config}
  */
  readonly otherConfig?: { [key: string]: string };
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridgeToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datapath_type: cdktf.stringToTerraform(struct!.datapathType),
    external_i_ds: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalIDs),
    other_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.otherConfig),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridgeToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datapath_type: {
      value: cdktf.stringToHclTerraform(struct!.datapathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_i_ds: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalIDs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    other_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.otherConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datapathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datapathType = this._datapathType;
    }
    if (this._externalIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIDs = this._externalIDs;
    }
    if (this._otherConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfig = this._otherConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datapathType = undefined;
      this._externalIDs = undefined;
      this._otherConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datapathType = value.datapathType;
      this._externalIDs = value.externalIDs;
      this._otherConfig = value.otherConfig;
    }
  }

  // datapath_type - computed: false, optional: true, required: false
  private _datapathType?: string; 
  public get datapathType() {
    return this.getStringAttribute('datapath_type');
  }
  public set datapathType(value: string) {
    this._datapathType = value;
  }
  public resetDatapathType() {
    this._datapathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathTypeInput() {
    return this._datapathType;
  }

  // external_i_ds - computed: false, optional: true, required: false
  private _externalIDs?: { [key: string]: string }; 
  public get externalIDs() {
    return this.getStringMapAttribute('external_i_ds');
  }
  public set externalIDs(value: { [key: string]: string }) {
    this._externalIDs = value;
  }
  public resetExternalIDs() {
    this._externalIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIDsInput() {
    return this._externalIDs;
  }

  // other_config - computed: false, optional: true, required: false
  private _otherConfig?: { [key: string]: string }; 
  public get otherConfig() {
    return this.getStringMapAttribute('other_config');
  }
  public set otherConfig(value: { [key: string]: string }) {
    this._otherConfig = value;
  }
  public resetOtherConfig() {
    this._otherConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigInput() {
    return this._otherConfig;
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface {
  /**
  * external_ids field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#external_i_ds DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#external_i_ds}
  */
  readonly externalIDs?: { [key: string]: string };
  /**
  * options field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#options DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * other_config field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#other_config DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#other_config}
  */
  readonly otherConfig?: { [key: string]: string };
  /**
  * type field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterfaceToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_i_ds: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalIDs),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    other_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.otherConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterfaceToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_i_ds: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalIDs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    other_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.otherConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIDs = this._externalIDs;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._otherConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfig = this._otherConfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIDs = undefined;
      this._options = undefined;
      this._otherConfig = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIDs = value.externalIDs;
      this._options = value.options;
      this._otherConfig = value.otherConfig;
      this._type = value.type;
    }
  }

  // external_i_ds - computed: false, optional: true, required: false
  private _externalIDs?: { [key: string]: string }; 
  public get externalIDs() {
    return this.getStringMapAttribute('external_i_ds');
  }
  public set externalIDs(value: { [key: string]: string }) {
    this._externalIDs = value;
  }
  public resetExternalIDs() {
    this._externalIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIDsInput() {
    return this._externalIDs;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // other_config - computed: false, optional: true, required: false
  private _otherConfig?: { [key: string]: string }; 
  public get otherConfig() {
    return this.getStringMapAttribute('other_config');
  }
  public set otherConfig(value: { [key: string]: string }) {
    this._otherConfig = value;
  }
  public resetOtherConfig() {
    this._otherConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigInput() {
    return this._otherConfig;
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink {
  /**
  * contains settings for PF interface in the OVS bridge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#interface}
  */
  readonly interface?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterfaceToTerraform(struct!.interface),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface.internalValue = value.interface;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs {
  /**
  * contains bridge level settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#bridge DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#bridge}
  */
  readonly bridge?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge;
  /**
  * contains settings for uplink (PF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#uplink DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#uplink}
  */
  readonly uplink?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridgeToTerraform(struct!.bridge),
    uplink: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkToTerraform(struct!.uplink),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridgeToHclTerraform(struct!.bridge),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge",
    },
    uplink: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkToHclTerraform(struct!.uplink),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge?.internalValue;
    }
    if (this._uplink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge.internalValue = undefined;
      this._uplink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge.internalValue = value.bridge;
      this._uplink.internalValue = value.uplink;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridgeOutputReference(this, "bridge");
  public get bridge() {
    return this._bridge;
  }
  public putBridge(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsBridge) {
    this._bridge.internalValue = value;
  }
  public resetBridge() {
    this._bridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge.internalValue;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplinkOutputReference(this, "uplink");
  public get uplink() {
    return this._uplink;
  }
  public putUplink(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsUplink) {
    this._uplink.internalValue = value;
  }
  public resetUplink() {
    this._uplink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink.internalValue;
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge {
  /**
  * contains configuration for the OVS bridge,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#ovs DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#ovs}
  */
  readonly ovs?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ovs: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsToTerraform(struct!.ovs),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ovs: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsToHclTerraform(struct!.ovs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ovs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovs = this._ovs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ovs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ovs.internalValue = value.ovs;
    }
  }

  // ovs - computed: false, optional: true, required: false
  private _ovs = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvsOutputReference(this, "ovs");
  public get ovs() {
    return this._ovs;
  }
  public putOvs(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOvs) {
    this._ovs.internalValue = value;
  }
  public resetOvs() {
    this._ovs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovsInput() {
    return this._ovs.internalValue;
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector {
  /**
  * The device hex code of SR-IoV device. Allowed value '0d58', '1572', '158b', '1013', '1015', '1017', '101b'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#device_id DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#device_id}
  */
  readonly deviceId?: string;
  /**
  * Infrastructure Networking selection filter. Allowed value 'openstack/NetworkID:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#net_filter DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#net_filter}
  */
  readonly netFilter?: string;
  /**
  * Name of SR-IoV PF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#pf_names DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#pf_names}
  */
  readonly pfNames?: string[];
  /**
  * PCI address of SR-IoV PF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#root_devices DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#root_devices}
  */
  readonly rootDevices?: string[];
  /**
  * The vendor hex code of SR-IoV device. Allowed value '8086', '15b3'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#vendor DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#vendor}
  */
  readonly vendor?: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelectorToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    net_filter: cdktf.stringToTerraform(struct!.netFilter),
    pf_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pfNames),
    root_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootDevices),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelectorToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_filter: {
      value: cdktf.stringToHclTerraform(struct!.netFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pf_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pfNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    root_devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootDevices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._netFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.netFilter = this._netFilter;
    }
    if (this._pfNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfNames = this._pfNames;
    }
    if (this._rootDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDevices = this._rootDevices;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._netFilter = undefined;
      this._pfNames = undefined;
      this._rootDevices = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._netFilter = value.netFilter;
      this._pfNames = value.pfNames;
      this._rootDevices = value.rootDevices;
      this._vendor = value.vendor;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // net_filter - computed: false, optional: true, required: false
  private _netFilter?: string; 
  public get netFilter() {
    return this.getStringAttribute('net_filter');
  }
  public set netFilter(value: string) {
    this._netFilter = value;
  }
  public resetNetFilter() {
    this._netFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netFilterInput() {
    return this._netFilter;
  }

  // pf_names - computed: false, optional: true, required: false
  private _pfNames?: string[]; 
  public get pfNames() {
    return this.getListAttribute('pf_names');
  }
  public set pfNames(value: string[]) {
    this._pfNames = value;
  }
  public resetPfNames() {
    this._pfNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfNamesInput() {
    return this._pfNames;
  }

  // root_devices - computed: false, optional: true, required: false
  private _rootDevices?: string[]; 
  public get rootDevices() {
    return this.getListAttribute('root_devices');
  }
  public set rootDevices(value: string[]) {
    this._rootDevices = value;
  }
  public resetRootDevices() {
    this._rootDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDevicesInput() {
    return this._rootDevices;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec {
  /**
  * contains bridge configuration for matching PFs, valid only for eSwitchMode==switchdev
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#bridge DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#bridge}
  */
  readonly bridge?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge;
  /**
  * The driver type for configured VFs. Allowed value 'netdevice', 'vfio-pci'. Defaults to netdevice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#device_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#device_type}
  */
  readonly deviceType?: string;
  /**
  * NIC Device Mode. Allowed value 'legacy','switchdev'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#e_switch_mode DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#e_switch_mode}
  */
  readonly eSwitchMode?: string;
  /**
  * Exclude device's NUMA node when advertising this resource by SRIOV network device plugin. Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#exclude_topology DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#exclude_topology}
  */
  readonly excludeTopology?: boolean | cdktf.IResolvable;
  /**
  * don't create the virtual function only allocated them to the device plugin. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#externally_managed DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#externally_managed}
  */
  readonly externallyManaged?: boolean | cdktf.IResolvable;
  /**
  * RDMA mode. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#is_rdma DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#is_rdma}
  */
  readonly isRdma?: boolean | cdktf.IResolvable;
  /**
  * NIC Link Type. Allowed value 'eth', 'ETH', 'ib', and 'IB'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#link_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#link_type}
  */
  readonly linkType?: string;
  /**
  * MTU of VF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#mtu DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#mtu}
  */
  readonly mtu?: number;
  /**
  * mount vhost-net device. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#need_vhost_net DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#need_vhost_net}
  */
  readonly needVhostNet?: boolean | cdktf.IResolvable;
  /**
  * NicSelector selects the NICs to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#nic_selector DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#nic_selector}
  */
  readonly nicSelector: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector;
  /**
  * NodeSelector selects the nodes to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#node_selector DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#node_selector}
  */
  readonly nodeSelector: { [key: string]: string };
  /**
  * Number of VFs for each PF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#num_vfs DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#num_vfs}
  */
  readonly numVfs: number;
  /**
  * Priority of the policy, higher priority policies can override lower ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#priority DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * SRIOV Network device plugin endpoint resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#resource_name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#resource_name}
  */
  readonly resourceName: string;
  /**
  * VDPA device type. Allowed value 'virtio', 'vhost'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#vdpa_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest#vdpa_type}
  */
  readonly vdpaType?: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeToTerraform(struct!.bridge),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    e_switch_mode: cdktf.stringToTerraform(struct!.eSwitchMode),
    exclude_topology: cdktf.booleanToTerraform(struct!.excludeTopology),
    externally_managed: cdktf.booleanToTerraform(struct!.externallyManaged),
    is_rdma: cdktf.booleanToTerraform(struct!.isRdma),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    need_vhost_net: cdktf.booleanToTerraform(struct!.needVhostNet),
    nic_selector: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelectorToTerraform(struct!.nicSelector),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    num_vfs: cdktf.numberToTerraform(struct!.numVfs),
    priority: cdktf.numberToTerraform(struct!.priority),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    vdpa_type: cdktf.stringToTerraform(struct!.vdpaType),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeToHclTerraform(struct!.bridge),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_switch_mode: {
      value: cdktf.stringToHclTerraform(struct!.eSwitchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_topology: {
      value: cdktf.booleanToHclTerraform(struct!.excludeTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    externally_managed: {
      value: cdktf.booleanToHclTerraform(struct!.externallyManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_rdma: {
      value: cdktf.booleanToHclTerraform(struct!.isRdma),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    need_vhost_net: {
      value: cdktf.booleanToHclTerraform(struct!.needVhostNet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nic_selector: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelectorToHclTerraform(struct!.nicSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    num_vfs: {
      value: cdktf.numberToHclTerraform(struct!.numVfs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdpa_type: {
      value: cdktf.stringToHclTerraform(struct!.vdpaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge?.internalValue;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._eSwitchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.eSwitchMode = this._eSwitchMode;
    }
    if (this._excludeTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTopology = this._excludeTopology;
    }
    if (this._externallyManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.externallyManaged = this._externallyManaged;
    }
    if (this._isRdma !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRdma = this._isRdma;
    }
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._needVhostNet !== undefined) {
      hasAnyValues = true;
      internalValueResult.needVhostNet = this._needVhostNet;
    }
    if (this._nicSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicSelector = this._nicSelector?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._numVfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVfs = this._numVfs;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._vdpaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdpaType = this._vdpaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge.internalValue = undefined;
      this._deviceType = undefined;
      this._eSwitchMode = undefined;
      this._excludeTopology = undefined;
      this._externallyManaged = undefined;
      this._isRdma = undefined;
      this._linkType = undefined;
      this._mtu = undefined;
      this._needVhostNet = undefined;
      this._nicSelector.internalValue = undefined;
      this._nodeSelector = undefined;
      this._numVfs = undefined;
      this._priority = undefined;
      this._resourceName = undefined;
      this._vdpaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge.internalValue = value.bridge;
      this._deviceType = value.deviceType;
      this._eSwitchMode = value.eSwitchMode;
      this._excludeTopology = value.excludeTopology;
      this._externallyManaged = value.externallyManaged;
      this._isRdma = value.isRdma;
      this._linkType = value.linkType;
      this._mtu = value.mtu;
      this._needVhostNet = value.needVhostNet;
      this._nicSelector.internalValue = value.nicSelector;
      this._nodeSelector = value.nodeSelector;
      this._numVfs = value.numVfs;
      this._priority = value.priority;
      this._resourceName = value.resourceName;
      this._vdpaType = value.vdpaType;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridgeOutputReference(this, "bridge");
  public get bridge() {
    return this._bridge;
  }
  public putBridge(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecBridge) {
    this._bridge.internalValue = value;
  }
  public resetBridge() {
    this._bridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge.internalValue;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // e_switch_mode - computed: false, optional: true, required: false
  private _eSwitchMode?: string; 
  public get eSwitchMode() {
    return this.getStringAttribute('e_switch_mode');
  }
  public set eSwitchMode(value: string) {
    this._eSwitchMode = value;
  }
  public resetESwitchMode() {
    this._eSwitchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eSwitchModeInput() {
    return this._eSwitchMode;
  }

  // exclude_topology - computed: false, optional: true, required: false
  private _excludeTopology?: boolean | cdktf.IResolvable; 
  public get excludeTopology() {
    return this.getBooleanAttribute('exclude_topology');
  }
  public set excludeTopology(value: boolean | cdktf.IResolvable) {
    this._excludeTopology = value;
  }
  public resetExcludeTopology() {
    this._excludeTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTopologyInput() {
    return this._excludeTopology;
  }

  // externally_managed - computed: false, optional: true, required: false
  private _externallyManaged?: boolean | cdktf.IResolvable; 
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
  }
  public set externallyManaged(value: boolean | cdktf.IResolvable) {
    this._externallyManaged = value;
  }
  public resetExternallyManaged() {
    this._externallyManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externallyManagedInput() {
    return this._externallyManaged;
  }

  // is_rdma - computed: false, optional: true, required: false
  private _isRdma?: boolean | cdktf.IResolvable; 
  public get isRdma() {
    return this.getBooleanAttribute('is_rdma');
  }
  public set isRdma(value: boolean | cdktf.IResolvable) {
    this._isRdma = value;
  }
  public resetIsRdma() {
    this._isRdma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRdmaInput() {
    return this._isRdma;
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // need_vhost_net - computed: false, optional: true, required: false
  private _needVhostNet?: boolean | cdktf.IResolvable; 
  public get needVhostNet() {
    return this.getBooleanAttribute('need_vhost_net');
  }
  public set needVhostNet(value: boolean | cdktf.IResolvable) {
    this._needVhostNet = value;
  }
  public resetNeedVhostNet() {
    this._needVhostNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needVhostNetInput() {
    return this._needVhostNet;
  }

  // nic_selector - computed: false, optional: false, required: true
  private _nicSelector = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelectorOutputReference(this, "nic_selector");
  public get nicSelector() {
    return this._nicSelector;
  }
  public putNicSelector(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecNicSelector) {
    this._nicSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicSelectorInput() {
    return this._nicSelector.internalValue;
  }

  // node_selector - computed: false, optional: false, required: true
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // num_vfs - computed: false, optional: false, required: true
  private _numVfs?: number; 
  public get numVfs() {
    return this.getNumberAttribute('num_vfs');
  }
  public set numVfs(value: number) {
    this._numVfs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numVfsInput() {
    return this._numVfs;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // vdpa_type - computed: false, optional: true, required: false
  private _vdpaType?: string; 
  public get vdpaType() {
    return this.getStringAttribute('vdpa_type');
  }
  public set vdpaType(value: string) {
    this._vdpaType = value;
  }
  public resetVdpaType() {
    this._vdpaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdpaTypeInput() {
    return this._vdpaType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest}
*/
export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest to import
  * @param importFromId The id of the existing DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sriovnetwork_openshift_io_sriov_network_node_policy_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec) {
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
      metadata: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodePolicyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
