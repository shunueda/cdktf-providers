// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#metadata DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#metadata}
  */
  readonly metadata: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata;
  /**
  * SriovNetworkNodeStateSpec defines the desired state of SriovNetworkNodeState
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#spec DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#spec}
  */
  readonly spec?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec;
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#annotations DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#labels DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#namespace DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadataToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadataToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge {
  /**
  * configure datapath_type field in the Bridge table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#datapath_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#datapath_type}
  */
  readonly datapathType?: string;
  /**
  * IDs to inject to external_ids field in the Bridge table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#external_i_ds DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#external_i_ds}
  */
  readonly externalIDs?: { [key: string]: string };
  /**
  * additional options to inject to other_config field in the bridge table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#other_config DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#other_config}
  */
  readonly otherConfig?: { [key: string]: string };
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridgeToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridgeToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface {
  /**
  * external_ids field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#external_i_ds DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#external_i_ds}
  */
  readonly externalIDs?: { [key: string]: string };
  /**
  * options field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#options DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * other_config field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#other_config DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#other_config}
  */
  readonly otherConfig?: { [key: string]: string };
  /**
  * type field in the Interface table in OVSDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterfaceToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterfaceToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks {
  /**
  * configuration from the Interface OVS table for the PF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#interface}
  */
  readonly interface?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface;
  /**
  * name of the PF interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#name}
  */
  readonly name?: string;
  /**
  * pci address of the PF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#pci_address DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#pci_address}
  */
  readonly pciAddress: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterfaceToTerraform(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    pci_address: cdktf.stringToTerraform(struct!.pciAddress),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pci_address: {
      value: cdktf.stringToHclTerraform(struct!.pciAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pciAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciAddress = this._pciAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface.internalValue = undefined;
      this._name = undefined;
      this._pciAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface.internalValue = value.interface;
      this._name = value.name;
      this._pciAddress = value.pciAddress;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
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

  // pci_address - computed: false, optional: false, required: true
  private _pciAddress?: string; 
  public get pciAddress() {
    return this.getStringAttribute('pci_address');
  }
  public set pciAddress(value: string) {
    this._pciAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pciAddressInput() {
    return this._pciAddress;
  }
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksList extends cdktf.ComplexList {
  public internalValue? : DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksOutputReference {
    return new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs {
  /**
  * bridge-level configuration for the bridge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#bridge DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#bridge}
  */
  readonly bridge?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge;
  /**
  * name of the bridge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#name}
  */
  readonly name: string;
  /**
  * uplink-level bridge configuration for each uplink(PF). currently must contain only one element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#uplinks DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#uplinks}
  */
  readonly uplinks?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks[] | cdktf.IResolvable;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridgeToTerraform(struct!.bridge),
    name: cdktf.stringToTerraform(struct!.name),
    uplinks: cdktf.listMapper(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksToTerraform, false)(struct!.uplinks),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridgeToHclTerraform(struct!.bridge),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplinks: {
      value: cdktf.listMapperHcl(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksToHclTerraform, false)(struct!.uplinks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uplinks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinks = this._uplinks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge.internalValue = undefined;
      this._name = undefined;
      this._uplinks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge.internalValue = value.bridge;
      this._name = value.name;
      this._uplinks.internalValue = value.uplinks;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridgeOutputReference(this, "bridge");
  public get bridge() {
    return this._bridge;
  }
  public putBridge(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsBridge) {
    this._bridge.internalValue = value;
  }
  public resetBridge() {
    this._bridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge.internalValue;
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

  // uplinks - computed: false, optional: true, required: false
  private _uplinks = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinksList(this, "uplinks", false);
  public get uplinks() {
    return this._uplinks;
  }
  public putUplinks(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsUplinks[] | cdktf.IResolvable) {
    this._uplinks.internalValue = value;
  }
  public resetUplinks() {
    this._uplinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinksInput() {
    return this._uplinks.internalValue;
  }
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsOutputReference {
    return new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#ovs DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#ovs}
  */
  readonly ovs?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs[] | cdktf.IResolvable;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ovs: cdktf.listMapper(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsToTerraform, false)(struct!.ovs),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ovs: {
      value: cdktf.listMapperHcl(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsToHclTerraform, false)(struct!.ovs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges | cdktf.IResolvable | undefined) {
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
  private _ovs = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvsList(this, "ovs", false);
  public get ovs() {
    return this._ovs;
  }
  public putOvs(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOvs[] | cdktf.IResolvable) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#device_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#is_rdma DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#is_rdma}
  */
  readonly isRdma?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#mtu DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#policy_name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#resource_name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#vdpa_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#vdpa_type}
  */
  readonly vdpaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#vf_range DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#vf_range}
  */
  readonly vfRange?: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    is_rdma: cdktf.booleanToTerraform(struct!.isRdma),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    vdpa_type: cdktf.stringToTerraform(struct!.vdpaType),
    vf_range: cdktf.stringToTerraform(struct!.vfRange),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_rdma: {
      value: cdktf.booleanToHclTerraform(struct!.isRdma),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
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
    vdpa_type: {
      value: cdktf.stringToHclTerraform(struct!.vdpaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vf_range: {
      value: cdktf.stringToHclTerraform(struct!.vfRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._isRdma !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRdma = this._isRdma;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._vdpaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdpaType = this._vdpaType;
    }
    if (this._vfRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.vfRange = this._vfRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceType = undefined;
      this._isRdma = undefined;
      this._mtu = undefined;
      this._policyName = undefined;
      this._resourceName = undefined;
      this._vdpaType = undefined;
      this._vfRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceType = value.deviceType;
      this._isRdma = value.isRdma;
      this._mtu = value.mtu;
      this._policyName = value.policyName;
      this._resourceName = value.resourceName;
      this._vdpaType = value.vdpaType;
      this._vfRange = value.vfRange;
    }
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

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
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

  // vf_range - computed: false, optional: true, required: false
  private _vfRange?: string; 
  public get vfRange() {
    return this.getStringAttribute('vf_range');
  }
  public set vfRange(value: string) {
    this._vfRange = value;
  }
  public resetVfRange() {
    this._vfRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vfRangeInput() {
    return this._vfRange;
  }
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsOutputReference {
    return new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#e_switch_mode DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#e_switch_mode}
  */
  readonly eSwitchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#externally_managed DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#externally_managed}
  */
  readonly externallyManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#link_type DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#link_type}
  */
  readonly linkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#mtu DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#num_vfs DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#num_vfs}
  */
  readonly numVfs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#pci_address DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#pci_address}
  */
  readonly pciAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#vf_groups DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#vf_groups}
  */
  readonly vfGroups?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups[] | cdktf.IResolvable;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    e_switch_mode: cdktf.stringToTerraform(struct!.eSwitchMode),
    externally_managed: cdktf.booleanToTerraform(struct!.externallyManaged),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    num_vfs: cdktf.numberToTerraform(struct!.numVfs),
    pci_address: cdktf.stringToTerraform(struct!.pciAddress),
    vf_groups: cdktf.listMapper(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsToTerraform, false)(struct!.vfGroups),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    e_switch_mode: {
      value: cdktf.stringToHclTerraform(struct!.eSwitchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    externally_managed: {
      value: cdktf.booleanToHclTerraform(struct!.externallyManaged),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vfs: {
      value: cdktf.numberToHclTerraform(struct!.numVfs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pci_address: {
      value: cdktf.stringToHclTerraform(struct!.pciAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vf_groups: {
      value: cdktf.listMapperHcl(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsToHclTerraform, false)(struct!.vfGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eSwitchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.eSwitchMode = this._eSwitchMode;
    }
    if (this._externallyManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.externallyManaged = this._externallyManaged;
    }
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numVfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVfs = this._numVfs;
    }
    if (this._pciAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciAddress = this._pciAddress;
    }
    if (this._vfGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vfGroups = this._vfGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eSwitchMode = undefined;
      this._externallyManaged = undefined;
      this._linkType = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._numVfs = undefined;
      this._pciAddress = undefined;
      this._vfGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eSwitchMode = value.eSwitchMode;
      this._externallyManaged = value.externallyManaged;
      this._linkType = value.linkType;
      this._mtu = value.mtu;
      this._name = value.name;
      this._numVfs = value.numVfs;
      this._pciAddress = value.pciAddress;
      this._vfGroups.internalValue = value.vfGroups;
    }
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

  // num_vfs - computed: false, optional: true, required: false
  private _numVfs?: number; 
  public get numVfs() {
    return this.getNumberAttribute('num_vfs');
  }
  public set numVfs(value: number) {
    this._numVfs = value;
  }
  public resetNumVfs() {
    this._numVfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVfsInput() {
    return this._numVfs;
  }

  // pci_address - computed: false, optional: false, required: true
  private _pciAddress?: string; 
  public get pciAddress() {
    return this.getStringAttribute('pci_address');
  }
  public set pciAddress(value: string) {
    this._pciAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pciAddressInput() {
    return this._pciAddress;
  }

  // vf_groups - computed: false, optional: true, required: false
  private _vfGroups = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroupsList(this, "vf_groups", false);
  public get vfGroups() {
    return this._vfGroups;
  }
  public putVfGroups(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesVfGroups[] | cdktf.IResolvable) {
    this._vfGroups.internalValue = value;
  }
  public resetVfGroups() {
    this._vfGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vfGroupsInput() {
    return this._vfGroups.internalValue;
  }
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesOutputReference {
    return new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec {
  /**
  * Bridges contains list of bridges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#bridges DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#bridges}
  */
  readonly bridges?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#interfaces DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest#interfaces}
  */
  readonly interfaces?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces[] | cdktf.IResolvable;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridges: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesToTerraform(struct!.bridges),
    interfaces: cdktf.listMapper(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesToTerraform, false)(struct!.interfaces),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridges: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesToHclTerraform(struct!.bridges),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridges = this._bridges?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridges.internalValue = undefined;
      this._interfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridges.internalValue = value.bridges;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // bridges - computed: false, optional: true, required: false
  private _bridges = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridgesOutputReference(this, "bridges");
  public get bridges() {
    return this._bridges;
  }
  public putBridges(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecBridges) {
    this._bridges.internalValue = value;
  }
  public resetBridges() {
    this._bridges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgesInput() {
    return this._bridges.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest}
*/
export class DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest to import
  * @param importFromId The id of the existing DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sriovnetwork_openshift_io_sriov_network_node_state_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec) {
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
      metadata: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkNodeStateV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
