// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#metadata DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata;
  /**
  * SriovNetworkPoolConfigSpec defines the desired state of SriovNetworkPoolConfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#spec DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#spec}
  */
  readonly spec?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec;
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#annotations DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#labels DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#namespace DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadataToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#key DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#operator DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#values DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#match_expressions DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#match_labels DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsList",
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

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig {
  /**
  * Name is mandatory and must be unique. On Kubernetes: Name is the name of OvsHardwareOffloadConfig On OpenShift: Name is the name of MachineConfigPool to be enabled with OVS hardware offload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfigToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfigToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec {
  /**
  * maxUnavailable defines either an integer number or percentage of nodes in the pool that can go Unavailable during an update. A value larger than 1 will mean multiple nodes going unavailable during the update, which may affect your workload stress on the remaining nodes. Drain will respect Pod Disruption Budgets (PDBs) such as etcd quorum guards, even if maxUnavailable is greater than one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#max_unavailable DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * nodeSelector specifies a label selector for Nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#node_selector DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector;
  /**
  * OvsHardwareOffloadConfig describes the OVS HWOL configuration for selected Nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#ovs_hardware_offload_config DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest#ovs_hardware_offload_config}
  */
  readonly ovsHardwareOffloadConfig?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig;
}

export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    node_selector: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
    ovs_hardware_offload_config: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfigToTerraform(struct!.ovsHardwareOffloadConfig),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector",
    },
    ovs_hardware_offload_config: {
      value: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfigToHclTerraform(struct!.ovsHardwareOffloadConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._ovsHardwareOffloadConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovsHardwareOffloadConfig = this._ovsHardwareOffloadConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._nodeSelector.internalValue = undefined;
      this._ovsHardwareOffloadConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._ovsHardwareOffloadConfig.internalValue = value.ovsHardwareOffloadConfig;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // ovs_hardware_offload_config - computed: false, optional: true, required: false
  private _ovsHardwareOffloadConfig = new DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfigOutputReference(this, "ovs_hardware_offload_config");
  public get ovsHardwareOffloadConfig() {
    return this._ovsHardwareOffloadConfig;
  }
  public putOvsHardwareOffloadConfig(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOvsHardwareOffloadConfig) {
    this._ovsHardwareOffloadConfig.internalValue = value;
  }
  public resetOvsHardwareOffloadConfig() {
    this._ovsHardwareOffloadConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovsHardwareOffloadConfigInput() {
    return this._ovsHardwareOffloadConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest}
*/
export class DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest k8s_sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sriovnetwork_openshift_io_sriov_network_pool_config_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec) {
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
      metadata: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovNetworkPoolConfigV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
