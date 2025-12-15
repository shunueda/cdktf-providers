import * as cdktf from 'cdktf';
import { DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinity,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinityToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinityToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinityOutputReference,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinity,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinityToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinityToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinityOutputReference,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstances,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstancesToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstancesToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstancesList,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuer,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuerToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuerToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuerOutputReference,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResources,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResourcesToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResourcesToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResourcesOutputReference } from './structs800'
import { DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigs,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigsToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigsToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigsList,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnv,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnvToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnvToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnvList,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecs,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecsToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecsToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecsList,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicy,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicyToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicyToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicyOutputReference } from './structs400'
import { DataK8SAppsKubeblocksIoClusterV1ManifestSpecBackup,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecBackupToTerraform,
dataK8SAppsKubeblocksIoClusterV1ManifestSpecBackupToHclTerraform,
DataK8SAppsKubeblocksIoClusterV1ManifestSpecBackupOutputReference } from './structs0'
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#label_selector DataK8SAppsKubeblocksIoClusterV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_label_keys DataK8SAppsKubeblocksIoClusterV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#mismatch_label_keys DataK8SAppsKubeblocksIoClusterV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#namespace_selector DataK8SAppsKubeblocksIoClusterV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#namespaces DataK8SAppsKubeblocksIoClusterV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#topology_key DataK8SAppsKubeblocksIoClusterV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SAppsKubeblocksIoClusterV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SAppsKubeblocksIoClusterV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#node_affinity DataK8SAppsKubeblocksIoClusterV1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pod_affinity DataK8SAppsKubeblocksIoClusterV1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pod_anti_affinity DataK8SAppsKubeblocksIoClusterV1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#effect DataK8SAppsKubeblocksIoClusterV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#operator DataK8SAppsKubeblocksIoClusterV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#toleration_seconds DataK8SAppsKubeblocksIoClusterV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#value DataK8SAppsKubeblocksIoClusterV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#operator DataK8SAppsKubeblocksIoClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#values DataK8SAppsKubeblocksIoClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_expressions DataK8SAppsKubeblocksIoClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_labels DataK8SAppsKubeblocksIoClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#label_selector DataK8SAppsKubeblocksIoClusterV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_label_keys DataK8SAppsKubeblocksIoClusterV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#max_skew DataK8SAppsKubeblocksIoClusterV1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. This is a beta field and requires the MinDomainsInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#min_domains DataK8SAppsKubeblocksIoClusterV1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#node_affinity_policy DataK8SAppsKubeblocksIoClusterV1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#node_taints_policy DataK8SAppsKubeblocksIoClusterV1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#topology_key DataK8SAppsKubeblocksIoClusterV1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#when_unsatisfiable DataK8SAppsKubeblocksIoClusterV1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy {
  /**
  * Specifies a group of affinity scheduling rules of the Cluster, including NodeAffinity, PodAffinity, and PodAntiAffinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#affinity DataK8SAppsKubeblocksIoClusterV1Manifest#affinity}
  */
  readonly affinity?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity;
  /**
  * NodeName is a request to schedule this Pod onto a specific node. If it is non-empty, the scheduler simply schedules this Pod onto that node, assuming that it fits resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#node_name DataK8SAppsKubeblocksIoClusterV1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * NodeSelector is a selector which must be true for the Pod to fit on a node. Selector which must match a node's labels for the Pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#node_selector DataK8SAppsKubeblocksIoClusterV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, the Pod will be dispatched by specified scheduler. If not specified, the Pod will be dispatched by default scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#scheduler_name DataK8SAppsKubeblocksIoClusterV1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Allows Pods to be scheduled onto nodes with matching taints. Each toleration in the array allows the Pod to tolerate node taints based on specified 'key', 'value', 'effect', and 'operator'. - The 'key', 'value', and 'effect' identify the taint that the toleration matches. - The 'operator' determines how the toleration matches the taint. Pods with matching tolerations are allowed to be scheduled on tainted nodes, typically reserved for specific purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#tolerations DataK8SAppsKubeblocksIoClusterV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints describes how a group of Pods ought to spread across topology domains. Scheduler will schedule Pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#topology_spread_constraints DataK8SAppsKubeblocksIoClusterV1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityToTerraform(struct!.affinity),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    tolerations: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._schedulerName = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._schedulerName = value.schedulerName;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential {
  /**
  * The name of the Component where the credential resides in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#component DataK8SAppsKubeblocksIoClusterV1Manifest#component}
  */
  readonly component: string;
  /**
  * The name of the credential (SystemAccount) to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredentialToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredentialToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._name = value.name;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs {
  /**
  * The name of the Component where the pods reside in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#component DataK8SAppsKubeblocksIoClusterV1Manifest#component}
  */
  readonly component: string;
  /**
  * The role of the pods to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#role DataK8SAppsKubeblocksIoClusterV1Manifest#role}
  */
  readonly role?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._role = value.role;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService {
  /**
  * The name of the Component where the Service resides in. It is required when referencing a Component's Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#component DataK8SAppsKubeblocksIoClusterV1Manifest#component}
  */
  readonly component?: string;
  /**
  * The port name of the Service to be referenced. If there is a non-zero node-port exist for the matched Service port, the node-port will be selected first. If the referenced Service is of pod-service type (a Service per Pod), there will be multiple Service objects matched, and the resolved value will be presented in the following format: service1.name:port1,service2.name:port2...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#port DataK8SAppsKubeblocksIoClusterV1Manifest#port}
  */
  readonly port?: string;
  /**
  * The name of the Service to be referenced. Leave it empty to reference the default Service. Set it to 'headless' to reference the default headless Service. If the referenced Service is of pod-service type (a Service per Pod), there will be multiple Service objects matched, and the resolved value will be presented in the following format: service1.name,service2.name...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service DataK8SAppsKubeblocksIoClusterV1Manifest#service}
  */
  readonly service: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorServiceToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    port: cdktf.stringToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorServiceToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector {
  /**
  * The name of the Cluster being referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#cluster DataK8SAppsKubeblocksIoClusterV1Manifest#cluster}
  */
  readonly cluster: string;
  /**
  * Specifies the SystemAccount to authenticate and establish a connection with the referenced Cluster. The SystemAccount should be defined in 'componentDefinition.spec.systemAccounts' of the Component providing the service in the referenced Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#credential DataK8SAppsKubeblocksIoClusterV1Manifest#credential}
  */
  readonly credential?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pod_fqd_ns DataK8SAppsKubeblocksIoClusterV1Manifest#pod_fqd_ns}
  */
  readonly podFqdNs?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs;
  /**
  * Identifies a ClusterService from the list of Services defined in 'cluster.spec.services' of the referenced Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service DataK8SAppsKubeblocksIoClusterV1Manifest#service}
  */
  readonly service?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    credential: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredentialToTerraform(struct!.credential),
    pod_fqd_ns: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNsToTerraform(struct!.podFqdNs),
    service: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorServiceToTerraform(struct!.service),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential",
    },
    pod_fqd_ns: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNsToHclTerraform(struct!.podFqdNs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs",
    },
    service: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._podFqdNs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podFqdNs = this._podFqdNs?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._credential.internalValue = undefined;
      this._podFqdNs.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._credential.internalValue = value.credential;
      this._podFqdNs.internalValue = value.podFqdNs;
      this._service.internalValue = value.service;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // credential - computed: false, optional: true, required: false
  private _credential = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorCredential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // pod_fqd_ns - computed: false, optional: true, required: false
  private _podFqdNs = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNsOutputReference(this, "pod_fqd_ns");
  public get podFqdNs() {
    return this._podFqdNs;
  }
  public putPodFqdNs(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorPodFqdNs) {
    this._podFqdNs.internalValue = value;
  }
  public resetPodFqdNs() {
    this._podFqdNs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podFqdNsInput() {
    return this._podFqdNs.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs {
  /**
  * Specifies the name of the KubeBlocks Cluster being referenced. This is used when services from another KubeBlocks Cluster are consumed. By default, the referenced KubeBlocks Cluster's 'clusterDefinition.spec.connectionCredential' will be utilized to bind to the current Component. This credential should include: 'endpoint', 'port', 'username', and 'password'. Note: - The 'ServiceKind' and 'ServiceVersion' specified in the service reference within the ClusterDefinition are not validated when using this approach. - If both 'cluster' and 'serviceDescriptor' are present, 'cluster' will take precedence. Deprecated since v0.9 since 'clusterDefinition.spec.connectionCredential' is deprecated, use 'clusterServiceSelector' instead. This field is maintained for backward compatibility and its use is discouraged. Existing usage should be updated to the current preferred approach to avoid compatibility issues in future releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#cluster DataK8SAppsKubeblocksIoClusterV1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * References a service provided by another KubeBlocks Cluster. It specifies the ClusterService and the account credentials needed for access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#cluster_service_selector DataK8SAppsKubeblocksIoClusterV1Manifest#cluster_service_selector}
  */
  readonly clusterServiceSelector?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector;
  /**
  * Specifies the identifier of the service reference declaration. It corresponds to the serviceRefDeclaration name defined in either: - 'componentDefinition.spec.serviceRefDeclarations[*].name' - 'clusterDefinition.spec.componentDefs[*].serviceRefDeclarations[*].name' (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the namespace of the referenced Cluster or the namespace of the referenced ServiceDescriptor object. If not provided, the referenced Cluster and ServiceDescriptor will be searched in the namespace of the current Cluster by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#namespace DataK8SAppsKubeblocksIoClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the name of the ServiceDescriptor object that describes a service provided by external sources. When referencing a service provided by external sources, a ServiceDescriptor object is required to establish the service binding. The 'serviceDescriptor.spec.serviceKind' and 'serviceDescriptor.spec.serviceVersion' should match the serviceKind and serviceVersion declared in the definition. If both 'cluster' and 'serviceDescriptor' are specified, the 'cluster' takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service_descriptor DataK8SAppsKubeblocksIoClusterV1Manifest#service_descriptor}
  */
  readonly serviceDescriptor?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    cluster_service_selector: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorToTerraform(struct!.clusterServiceSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_descriptor: cdktf.stringToTerraform(struct!.serviceDescriptor),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_service_selector: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorToHclTerraform(struct!.clusterServiceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector",
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
    service_descriptor: {
      value: cdktf.stringToHclTerraform(struct!.serviceDescriptor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._clusterServiceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterServiceSelector = this._clusterServiceSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDescriptor = this._serviceDescriptor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._clusterServiceSelector.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serviceDescriptor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._clusterServiceSelector.internalValue = value.clusterServiceSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serviceDescriptor = value.serviceDescriptor;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // cluster_service_selector - computed: false, optional: true, required: false
  private _clusterServiceSelector = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelectorOutputReference(this, "cluster_service_selector");
  public get clusterServiceSelector() {
    return this._clusterServiceSelector;
  }
  public putClusterServiceSelector(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsClusterServiceSelector) {
    this._clusterServiceSelector.internalValue = value;
  }
  public resetClusterServiceSelector() {
    this._clusterServiceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterServiceSelectorInput() {
    return this._clusterServiceSelector.internalValue;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // service_descriptor - computed: false, optional: true, required: false
  private _serviceDescriptor?: string; 
  public get serviceDescriptor() {
    return this.getStringAttribute('service_descriptor');
  }
  public set serviceDescriptor(value: string) {
    this._serviceDescriptor = value;
  }
  public resetServiceDescriptor() {
    this._serviceDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptorInput() {
    return this._serviceDescriptor;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices {
  /**
  * If ServiceType is LoadBalancer, cloud provider related parameters can be put here. More info: https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#annotations DataK8SAppsKubeblocksIoClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * References the ComponentService name defined in the 'componentDefinition.spec.services[*].name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Indicates whether to generate individual Services for each Pod. If set to true, a separate Service will be created for each Pod in the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pod_service DataK8SAppsKubeblocksIoClusterV1Manifest#pod_service}
  */
  readonly podService?: boolean | cdktf.IResolvable;
  /**
  * Determines how the Service is exposed. Valid options are 'ClusterIP', 'NodePort', and 'LoadBalancer'. - 'ClusterIP' allocates a Cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, they are determined by manual construction of an Endpoints object or EndpointSlice objects. - 'NodePort' builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the ClusterIP. - 'LoadBalancer' builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the ClusterIP. Note: although K8s Service type allows the 'ExternalName' type, it is not a valid option for ClusterComponentService. For more info, see: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service_type DataK8SAppsKubeblocksIoClusterV1Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    name: cdktf.stringToTerraform(struct!.name),
    pod_service: cdktf.booleanToTerraform(struct!.podService),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_service: {
      value: cdktf.booleanToHclTerraform(struct!.podService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podService !== undefined) {
      hasAnyValues = true;
      internalValueResult.podService = this._podService;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._name = undefined;
      this._podService = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._name = value.name;
      this._podService = value.podService;
      this._serviceType = value.serviceType;
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

  // pod_service - computed: false, optional: true, required: false
  private _podService?: boolean | cdktf.IResolvable; 
  public get podService() {
    return this.getBooleanAttribute('pod_service');
  }
  public set podService(value: boolean | cdktf.IResolvable) {
    this._podService = value;
  }
  public resetPodService() {
    this._podService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podServiceInput() {
    return this._podService;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig {
  /**
  * The length of the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#length DataK8SAppsKubeblocksIoClusterV1Manifest#length}
  */
  readonly length?: number;
  /**
  * The case of the letters in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#letter_case DataK8SAppsKubeblocksIoClusterV1Manifest#letter_case}
  */
  readonly letterCase?: string;
  /**
  * The number of digits in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#num_digits DataK8SAppsKubeblocksIoClusterV1Manifest#num_digits}
  */
  readonly numDigits?: number;
  /**
  * The number of symbols in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#num_symbols DataK8SAppsKubeblocksIoClusterV1Manifest#num_symbols}
  */
  readonly numSymbols?: number;
  /**
  * Seed to generate the account's password. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#seed DataK8SAppsKubeblocksIoClusterV1Manifest#seed}
  */
  readonly seed?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfigToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    letter_case: cdktf.stringToTerraform(struct!.letterCase),
    num_digits: cdktf.numberToTerraform(struct!.numDigits),
    num_symbols: cdktf.numberToTerraform(struct!.numSymbols),
    seed: cdktf.stringToTerraform(struct!.seed),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    letter_case: {
      value: cdktf.stringToHclTerraform(struct!.letterCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_digits: {
      value: cdktf.numberToHclTerraform(struct!.numDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_symbols: {
      value: cdktf.numberToHclTerraform(struct!.numSymbols),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seed: {
      value: cdktf.stringToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._letterCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.letterCase = this._letterCase;
    }
    if (this._numDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDigits = this._numDigits;
    }
    if (this._numSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSymbols = this._numSymbols;
    }
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._letterCase = undefined;
      this._numDigits = undefined;
      this._numSymbols = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._letterCase = value.letterCase;
      this._numDigits = value.numDigits;
      this._numSymbols = value.numSymbols;
      this._seed = value.seed;
    }
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // letter_case - computed: false, optional: true, required: false
  private _letterCase?: string; 
  public get letterCase() {
    return this.getStringAttribute('letter_case');
  }
  public set letterCase(value: string) {
    this._letterCase = value;
  }
  public resetLetterCase() {
    this._letterCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get letterCaseInput() {
    return this._letterCase;
  }

  // num_digits - computed: false, optional: true, required: false
  private _numDigits?: number; 
  public get numDigits() {
    return this.getNumberAttribute('num_digits');
  }
  public set numDigits(value: number) {
    this._numDigits = value;
  }
  public resetNumDigits() {
    this._numDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDigitsInput() {
    return this._numDigits;
  }

  // num_symbols - computed: false, optional: true, required: false
  private _numSymbols?: number; 
  public get numSymbols() {
    return this.getNumberAttribute('num_symbols');
  }
  public set numSymbols(value: number) {
    this._numSymbols = value;
  }
  public resetNumSymbols() {
    this._numSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSymbolsInput() {
    return this._numSymbols;
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef {
  /**
  * The unique identifier of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * The namespace where the secret is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#namespace DataK8SAppsKubeblocksIoClusterV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts {
  /**
  * The name of the system account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the policy for generating the account's password. This field is immutable once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#password_config DataK8SAppsKubeblocksIoClusterV1Manifest#password_config}
  */
  readonly passwordConfig?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig;
  /**
  * Refers to the secret from which data will be copied to create the new account. This field is immutable once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password_config: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfigToTerraform(struct!.passwordConfig),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts | cdktf.IResolvable): any {
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
    password_config: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfigToHclTerraform(struct!.passwordConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passwordConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordConfig = this._passwordConfig?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._passwordConfig.internalValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._passwordConfig.internalValue = value.passwordConfig;
      this._secretRef.internalValue = value.secretRef;
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

  // password_config - computed: false, optional: true, required: false
  private _passwordConfig = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfigOutputReference(this, "password_config");
  public get passwordConfig() {
    return this._passwordConfig;
  }
  public putPasswordConfig(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsPasswordConfig) {
    this._passwordConfig.internalValue = value;
  }
  public resetPasswordConfig() {
    this._passwordConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConfigInput() {
    return this._passwordConfig.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#limits DataK8SAppsKubeblocksIoClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#requests DataK8SAppsKubeblocksIoClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResourcesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResourcesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec {
  /**
  * Contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#access_modes DataK8SAppsKubeblocksIoClusterV1Manifest#access_modes}
  */
  readonly accessModes?: { [key: string]: string };
  /**
  * Represents the minimum resources the volume should have. If the RecoverVolumeExpansionFailure feature is enabled, users are allowed to specify resource requirements that are lower than the previous value but must still be higher than the capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#resources DataK8SAppsKubeblocksIoClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources;
  /**
  * The name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#storage_class_name DataK8SAppsKubeblocksIoClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * Defines what type of volume is required by the claim, either Block or Filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_mode DataK8SAppsKubeblocksIoClusterV1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.accessModes),
    resources: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResourcesToTerraform(struct!.resources),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.accessModes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._resources.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._resources.internalValue = value.resources;
      this._storageClassName = value.storageClassName;
      this._volumeMode = value.volumeMode;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: { [key: string]: string }; 
  public get accessModes() {
    return this.getStringMapAttribute('access_modes');
  }
  public set accessModes(value: { [key: string]: string }) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates {
  /**
  * Refers to the name of a volumeMount defined in either: - 'componentDefinition.spec.runtime.containers[*].volumeMounts' - 'clusterDefinition.spec.componentDefs[*].podSpec.containers[*].volumeMounts' (deprecated) The value of 'name' must match the 'name' field of a volumeMount specified in the corresponding 'volumeMounts' array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Defines the desired characteristics of a PersistentVolumeClaim that will be created for the volume with the mount name specified in the 'name' field. When a Pod is created for this ClusterComponent, a new PVC will be created based on the specification defined in the 'spec' field. The PVC will be associated with the volume mount specified by the 'name' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#spec DataK8SAppsKubeblocksIoClusterV1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    spec: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecToTerraform(struct!.spec),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates | cdktf.IResolvable): any {
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
    spec: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._spec.internalValue = value.spec;
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

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#partition DataK8SAppsKubeblocksIoClusterV1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_id DataK8SAppsKubeblocksIoClusterV1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStoreToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStoreToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk {
  /**
  * cachingMode is the Host Caching mode: None, Read Only, Read Write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#caching_mode DataK8SAppsKubeblocksIoClusterV1Manifest#caching_mode}
  */
  readonly cachingMode?: string;
  /**
  * diskName is the Name of the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#disk_name DataK8SAppsKubeblocksIoClusterV1Manifest#disk_name}
  */
  readonly diskName: string;
  /**
  * diskURI is the URI of data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#disk_uri DataK8SAppsKubeblocksIoClusterV1Manifest#disk_uri}
  */
  readonly diskUri: string;
  /**
  * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * kind expected values are Shared: multiple blob disks per storage account Dedicated: single blob disk per storage account Managed: azure managed data disk (only in managed availability set). defaults to shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#kind DataK8SAppsKubeblocksIoClusterV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDiskToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_uri: cdktf.stringToTerraform(struct!.diskUri),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDiskToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_mode: {
      value: cdktf.stringToHclTerraform(struct!.cachingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_uri: {
      value: cdktf.stringToHclTerraform(struct!.diskUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMode = this._cachingMode;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUri = this._diskUri;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachingMode = undefined;
      this._diskName = undefined;
      this._diskUri = undefined;
      this._fsType = undefined;
      this._kind = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachingMode = value.cachingMode;
      this._diskName = value.diskName;
      this._diskUri = value.diskUri;
      this._fsType = value.fsType;
      this._kind = value.kind;
      this._readOnly = value.readOnly;
    }
  }

  // caching_mode - computed: false, optional: true, required: false
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  public resetCachingMode() {
    this._cachingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode;
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_uri - computed: false, optional: false, required: true
  private _diskUri?: string; 
  public get diskUri() {
    return this.getStringAttribute('disk_uri');
  }
  public set diskUri(value: string) {
    this._diskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUriInput() {
    return this._diskUri;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile {
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of secret that contains Azure Storage Account Name and Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_name DataK8SAppsKubeblocksIoClusterV1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * shareName is the azure share Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#share_name DataK8SAppsKubeblocksIoClusterV1Manifest#share_name}
  */
  readonly shareName: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFileToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFileToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnly = undefined;
      this._secretName = undefined;
      this._shareName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
      this._shareName = value.shareName;
    }
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs {
  /**
  * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#monitors DataK8SAppsKubeblocksIoClusterV1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path?: string;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_file DataK8SAppsKubeblocksIoClusterV1Manifest#secret_file}
  */
  readonly secretFile?: string;
  /**
  * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef;
  /**
  * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#user DataK8SAppsKubeblocksIoClusterV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_file: {
      value: cdktf.stringToHclTerraform(struct!.secretFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFile = this._secretFile;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitors = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretFile = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitors = value.monitors;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretFile = value.secretFile;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef;
  /**
  * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_id DataK8SAppsKubeblocksIoClusterV1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRefToTerraform(struct!.secretRef),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#mode DataK8SAppsKubeblocksIoClusterV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#default_mode DataK8SAppsKubeblocksIoClusterV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#items DataK8SAppsKubeblocksIoClusterV1Manifest#items}
  */
  readonly items?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#optional DataK8SAppsKubeblocksIoClusterV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsList",
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi {
  /**
  * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#driver DataK8SAppsKubeblocksIoClusterV1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType to mount. Ex. 'ext4', 'xfs', 'ntfs'. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#node_publish_secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef;
  /**
  * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_attributes DataK8SAppsKubeblocksIoClusterV1Manifest#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    node_publish_secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_publish_secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRefToHclTerraform(struct!.nodePublishSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.volumeAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._nodePublishSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublishSecretRef = this._nodePublishSecretRef?.internalValue;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributes = this._volumeAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._nodePublishSecretRef.internalValue = undefined;
      this._readOnly = undefined;
      this._volumeAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._nodePublishSecretRef.internalValue = value.nodePublishSecretRef;
      this._readOnly = value.readOnly;
      this._volumeAttributes = value.volumeAttributes;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiNodePublishSecretRef) {
    this._nodePublishSecretRef.internalValue = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef.internalValue;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string }; 
  public get volumeAttributes() {
    return this.getStringMapAttribute('volume_attributes');
  }
  public set volumeAttributes(value: { [key: string]: string }) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#api_version DataK8SAppsKubeblocksIoClusterV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#field_path DataK8SAppsKubeblocksIoClusterV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#container_name DataK8SAppsKubeblocksIoClusterV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#divisor DataK8SAppsKubeblocksIoClusterV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#resource DataK8SAppsKubeblocksIoClusterV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#field_ref DataK8SAppsKubeblocksIoClusterV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#mode DataK8SAppsKubeblocksIoClusterV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#resource_field_ref DataK8SAppsKubeblocksIoClusterV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#default_mode DataK8SAppsKubeblocksIoClusterV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Items is a list of downward API volume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#items DataK8SAppsKubeblocksIoClusterV1Manifest#items}
  */
  readonly items?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#medium DataK8SAppsKubeblocksIoClusterV1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#size_limit DataK8SAppsKubeblocksIoClusterV1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDirToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDirToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#annotations DataK8SAppsKubeblocksIoClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#finalizers DataK8SAppsKubeblocksIoClusterV1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#labels DataK8SAppsKubeblocksIoClusterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#namespace DataK8SAppsKubeblocksIoClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
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
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#api_group DataK8SAppsKubeblocksIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#kind DataK8SAppsKubeblocksIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#api_group DataK8SAppsKubeblocksIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#kind DataK8SAppsKubeblocksIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#namespace DataK8SAppsKubeblocksIoClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#limits DataK8SAppsKubeblocksIoClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#requests DataK8SAppsKubeblocksIoClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#operator DataK8SAppsKubeblocksIoClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#values DataK8SAppsKubeblocksIoClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_expressions DataK8SAppsKubeblocksIoClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_labels DataK8SAppsKubeblocksIoClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#access_modes DataK8SAppsKubeblocksIoClusterV1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#data_source DataK8SAppsKubeblocksIoClusterV1Manifest#data_source}
  */
  readonly dataSource?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#data_source_ref DataK8SAppsKubeblocksIoClusterV1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#resources DataK8SAppsKubeblocksIoClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#selector DataK8SAppsKubeblocksIoClusterV1Manifest#selector}
  */
  readonly selector?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#storage_class_name DataK8SAppsKubeblocksIoClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_attributes_class_name DataK8SAppsKubeblocksIoClusterV1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_mode DataK8SAppsKubeblocksIoClusterV1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_name DataK8SAppsKubeblocksIoClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#metadata DataK8SAppsKubeblocksIoClusterV1Manifest#metadata}
  */
  readonly metadata?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata;
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#spec DataK8SAppsKubeblocksIoClusterV1Manifest#spec}
  */
  readonly spec: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata",
    },
    spec: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_claim_template DataK8SAppsKubeblocksIoClusterV1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#lun DataK8SAppsKubeblocksIoClusterV1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#target_ww_ns DataK8SAppsKubeblocksIoClusterV1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#wwids DataK8SAppsKubeblocksIoClusterV1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFcToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetWwNs),
    wwids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wwids),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFcToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ww_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetWwNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wwids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wwids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    if (this._wwids !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwids = this._wwids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
      this._wwids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
      this._wwids = value.wwids;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // target_ww_ns - computed: false, optional: true, required: false
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  public resetTargetWwNs() {
    this._targetWwNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }

  // wwids - computed: false, optional: true, required: false
  private _wwids?: string[]; 
  public get wwids() {
    return this.getListAttribute('wwids');
  }
  public set wwids(value: string[]) {
    this._wwids = value;
  }
  public resetWwids() {
    this._wwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwidsInput() {
    return this._wwids;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#driver DataK8SAppsKubeblocksIoClusterV1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#options DataK8SAppsKubeblocksIoClusterV1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#dataset_name DataK8SAppsKubeblocksIoClusterV1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#dataset_uuid DataK8SAppsKubeblocksIoClusterV1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlockerToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlockerToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_uuid: {
      value: cdktf.stringToHclTerraform(struct!.datasetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#partition DataK8SAppsKubeblocksIoClusterV1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pd_name DataK8SAppsKubeblocksIoClusterV1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDiskToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pd_name: {
      value: cdktf.stringToHclTerraform(struct!.pdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#directory DataK8SAppsKubeblocksIoClusterV1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#repository DataK8SAppsKubeblocksIoClusterV1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#revision DataK8SAppsKubeblocksIoClusterV1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepoToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepoToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#endpoints DataK8SAppsKubeblocksIoClusterV1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#type DataK8SAppsKubeblocksIoClusterV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPathToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPathToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#chap_auth_discovery DataK8SAppsKubeblocksIoClusterV1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#chap_auth_session DataK8SAppsKubeblocksIoClusterV1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#initiator_name DataK8SAppsKubeblocksIoClusterV1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#iqn DataK8SAppsKubeblocksIoClusterV1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#iscsi_interface DataK8SAppsKubeblocksIoClusterV1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#lun DataK8SAppsKubeblocksIoClusterV1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#portals DataK8SAppsKubeblocksIoClusterV1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#target_portal DataK8SAppsKubeblocksIoClusterV1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_auth_discovery: cdktf.booleanToTerraform(struct!.chapAuthDiscovery),
    chap_auth_session: cdktf.booleanToTerraform(struct!.chapAuthSession),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    portals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portals),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chap_auth_session: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_interface: {
      value: cdktf.stringToHclTerraform(struct!.iscsiInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef",
    },
    target_portal: {
      value: cdktf.stringToHclTerraform(struct!.targetPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthDiscovery = this._chapAuthDiscovery;
    }
    if (this._chapAuthSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthSession = this._chapAuthSession;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = undefined;
      this._chapAuthSession = undefined;
      this._fsType = undefined;
      this._initiatorName = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._portals = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._targetPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = value.chapAuthDiscovery;
      this._chapAuthSession = value.chapAuthSession;
      this._fsType = value.fsType;
      this._initiatorName = value.initiatorName;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._portals = value.portals;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._targetPortal = value.targetPortal;
    }
  }

  // chap_auth_discovery - computed: false, optional: true, required: false
  private _chapAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get chapAuthDiscovery() {
    return this.getBooleanAttribute('chap_auth_discovery');
  }
  public set chapAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._chapAuthDiscovery = value;
  }
  public resetChapAuthDiscovery() {
    this._chapAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthDiscoveryInput() {
    return this._chapAuthDiscovery;
  }

  // chap_auth_session - computed: false, optional: true, required: false
  private _chapAuthSession?: boolean | cdktf.IResolvable; 
  public get chapAuthSession() {
    return this.getBooleanAttribute('chap_auth_session');
  }
  public set chapAuthSession(value: boolean | cdktf.IResolvable) {
    this._chapAuthSession = value;
  }
  public resetChapAuthSession() {
    this._chapAuthSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthSessionInput() {
    return this._chapAuthSession;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // initiator_name - computed: false, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string[]; 
  public get portals() {
    return this.getListAttribute('portals');
  }
  public set portals(value: string[]) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#server DataK8SAppsKubeblocksIoClusterV1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#claim_name DataK8SAppsKubeblocksIoClusterV1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pd_id DataK8SAppsKubeblocksIoClusterV1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_id: {
      value: cdktf.stringToHclTerraform(struct!.pdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_id DataK8SAppsKubeblocksIoClusterV1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolumeToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolumeToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#operator DataK8SAppsKubeblocksIoClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#values DataK8SAppsKubeblocksIoClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_expressions DataK8SAppsKubeblocksIoClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#match_labels DataK8SAppsKubeblocksIoClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle {
  /**
  * Select all ClusterTrustBundles that match this label selector. Only has effect if signerName is set. Mutually-exclusive with name. If unset, interpreted as 'match nothing'. If set but empty, interpreted as 'match everything'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#label_selector DataK8SAppsKubeblocksIoClusterV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Select a single ClusterTrustBundle by object name. Mutually-exclusive with signerName and labelSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available. If using name, then the named ClusterTrustBundle is allowed not to exist. If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#optional DataK8SAppsKubeblocksIoClusterV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Relative path from the volume root to write the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
  /**
  * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name. The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#signer_name DataK8SAppsKubeblocksIoClusterV1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector",
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._path = undefined;
      this._signerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._optional = value.optional;
      this._path = value.path;
      this._signerName = value.signerName;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#mode DataK8SAppsKubeblocksIoClusterV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#items DataK8SAppsKubeblocksIoClusterV1Manifest#items}
  */
  readonly items?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#optional DataK8SAppsKubeblocksIoClusterV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#api_version DataK8SAppsKubeblocksIoClusterV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#field_path DataK8SAppsKubeblocksIoClusterV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#container_name DataK8SAppsKubeblocksIoClusterV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#divisor DataK8SAppsKubeblocksIoClusterV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#resource DataK8SAppsKubeblocksIoClusterV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#field_ref DataK8SAppsKubeblocksIoClusterV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#mode DataK8SAppsKubeblocksIoClusterV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#resource_field_ref DataK8SAppsKubeblocksIoClusterV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#items DataK8SAppsKubeblocksIoClusterV1Manifest#items}
  */
  readonly items?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#mode DataK8SAppsKubeblocksIoClusterV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#items DataK8SAppsKubeblocksIoClusterV1Manifest#items}
  */
  readonly items?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#optional DataK8SAppsKubeblocksIoClusterV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#audience DataK8SAppsKubeblocksIoClusterV1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#expiration_seconds DataK8SAppsKubeblocksIoClusterV1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#cluster_trust_bundle DataK8SAppsKubeblocksIoClusterV1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#config_map DataK8SAppsKubeblocksIoClusterV1Manifest#config_map}
  */
  readonly configMap?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#downward_api DataK8SAppsKubeblocksIoClusterV1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret DataK8SAppsKubeblocksIoClusterV1Manifest#secret}
  */
  readonly secret?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service_account_token DataK8SAppsKubeblocksIoClusterV1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTrustBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTrustBundle = this._clusterTrustBundle?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = value.clusterTrustBundle;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // cluster_trust_bundle - computed: false, optional: true, required: false
  private _clusterTrustBundle = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesClusterTrustBundle) {
    this._clusterTrustBundle.internalValue = value;
  }
  public resetClusterTrustBundle() {
    this._clusterTrustBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrustBundleInput() {
    return this._clusterTrustBundle.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#default_mode DataK8SAppsKubeblocksIoClusterV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#sources DataK8SAppsKubeblocksIoClusterV1Manifest#sources}
  */
  readonly sources?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#group DataK8SAppsKubeblocksIoClusterV1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#registry DataK8SAppsKubeblocksIoClusterV1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#tenant DataK8SAppsKubeblocksIoClusterV1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#user DataK8SAppsKubeblocksIoClusterV1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume DataK8SAppsKubeblocksIoClusterV1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyteToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyteToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._tenant = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._tenant = value.tenant;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#image DataK8SAppsKubeblocksIoClusterV1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#keyring DataK8SAppsKubeblocksIoClusterV1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#monitors DataK8SAppsKubeblocksIoClusterV1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pool DataK8SAppsKubeblocksIoClusterV1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#user DataK8SAppsKubeblocksIoClusterV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    image: cdktf.stringToTerraform(struct!.image),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    pool: cdktf.stringToTerraform(struct!.pool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    keyring: {
      value: cdktf.stringToHclTerraform(struct!.keyring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._image = undefined;
      this._keyring = undefined;
      this._monitors = undefined;
      this._pool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._image = value.image;
      this._keyring = value.keyring;
      this._monitors = value.monitors;
      this._pool = value.pool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#gateway DataK8SAppsKubeblocksIoClusterV1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#protection_domain DataK8SAppsKubeblocksIoClusterV1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#ssl_enabled DataK8SAppsKubeblocksIoClusterV1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#storage_mode DataK8SAppsKubeblocksIoClusterV1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#storage_pool DataK8SAppsKubeblocksIoClusterV1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#system DataK8SAppsKubeblocksIoClusterV1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_name DataK8SAppsKubeblocksIoClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._gateway = undefined;
      this._protectionDomain = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._sslEnabled = undefined;
      this._storageMode = undefined;
      this._storagePool = undefined;
      this._system = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._gateway = value.gateway;
      this._protectionDomain = value.protectionDomain;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._sslEnabled = value.sslEnabled;
      this._storageMode = value.storageMode;
      this._storagePool = value.storagePool;
      this._system = value.systemAttribute;
      this._volumeName = value.volumeName;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#key DataK8SAppsKubeblocksIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#mode DataK8SAppsKubeblocksIoClusterV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#path DataK8SAppsKubeblocksIoClusterV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#default_mode DataK8SAppsKubeblocksIoClusterV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#items DataK8SAppsKubeblocksIoClusterV1Manifest#items}
  */
  readonly items?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#optional DataK8SAppsKubeblocksIoClusterV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_name DataK8SAppsKubeblocksIoClusterV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#read_only DataK8SAppsKubeblocksIoClusterV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_name DataK8SAppsKubeblocksIoClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_namespace DataK8SAppsKubeblocksIoClusterV1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeName = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeName = value.volumeName;
      this._volumeNamespace = value.volumeNamespace;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_namespace - computed: false, optional: true, required: false
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  public resetVolumeNamespace() {
    this._volumeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fs_type DataK8SAppsKubeblocksIoClusterV1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#storage_policy_id DataK8SAppsKubeblocksIoClusterV1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#storage_policy_name DataK8SAppsKubeblocksIoClusterV1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_path DataK8SAppsKubeblocksIoClusterV1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolumeToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolumeToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._storagePolicyId = undefined;
      this._storagePolicyName = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._storagePolicyId = value.storagePolicyId;
      this._storagePolicyName = value.storagePolicyName;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#aws_elastic_block_store DataK8SAppsKubeblocksIoClusterV1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#azure_disk DataK8SAppsKubeblocksIoClusterV1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#azure_file DataK8SAppsKubeblocksIoClusterV1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#cephfs DataK8SAppsKubeblocksIoClusterV1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#cinder DataK8SAppsKubeblocksIoClusterV1Manifest#cinder}
  */
  readonly cinder?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#config_map DataK8SAppsKubeblocksIoClusterV1Manifest#config_map}
  */
  readonly configMap?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#csi DataK8SAppsKubeblocksIoClusterV1Manifest#csi}
  */
  readonly csi?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#downward_api DataK8SAppsKubeblocksIoClusterV1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#empty_dir DataK8SAppsKubeblocksIoClusterV1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#ephemeral DataK8SAppsKubeblocksIoClusterV1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#fc DataK8SAppsKubeblocksIoClusterV1Manifest#fc}
  */
  readonly fc?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#flex_volume DataK8SAppsKubeblocksIoClusterV1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#flocker DataK8SAppsKubeblocksIoClusterV1Manifest#flocker}
  */
  readonly flocker?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#gce_persistent_disk DataK8SAppsKubeblocksIoClusterV1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#git_repo DataK8SAppsKubeblocksIoClusterV1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#glusterfs DataK8SAppsKubeblocksIoClusterV1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#host_path DataK8SAppsKubeblocksIoClusterV1Manifest#host_path}
  */
  readonly hostPath?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#iscsi DataK8SAppsKubeblocksIoClusterV1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#nfs DataK8SAppsKubeblocksIoClusterV1Manifest#nfs}
  */
  readonly nfs?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#persistent_volume_claim DataK8SAppsKubeblocksIoClusterV1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#photon_persistent_disk DataK8SAppsKubeblocksIoClusterV1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#portworx_volume DataK8SAppsKubeblocksIoClusterV1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#projected DataK8SAppsKubeblocksIoClusterV1Manifest#projected}
  */
  readonly projected?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#quobyte DataK8SAppsKubeblocksIoClusterV1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#rbd DataK8SAppsKubeblocksIoClusterV1Manifest#rbd}
  */
  readonly rbd?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#scale_io DataK8SAppsKubeblocksIoClusterV1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#secret DataK8SAppsKubeblocksIoClusterV1Manifest#secret}
  */
  readonly secret?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#storageos DataK8SAppsKubeblocksIoClusterV1Manifest#storageos}
  */
  readonly storageos?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#vsphere_volume DataK8SAppsKubeblocksIoClusterV1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs",
    },
    cinder: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder",
    },
    config_map: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap",
    },
    csi: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi",
    },
    downward_api: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral",
    },
    fc: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc",
    },
    flex_volume: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath",
    },
    iscsi: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected",
    },
    quobyte: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte",
    },
    rbd: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd",
    },
    scale_io: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo",
    },
    secret: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret",
    },
    storageos: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephfs = this._cephfs?.internalValue;
    }
    if (this._cinder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._ephemeral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral?.internalValue;
    }
    if (this._fc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    if (this._glusterfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._iscsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._photonPersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._portworxVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portworxVolume = this._portworxVolume?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._quobyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._scaleIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIo = this._scaleIo?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._storageos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageos = this._storageos?.internalValue;
    }
    if (this._vsphereVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephfs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._ephemeral.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._gitRepo.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._name = undefined;
      this._nfs.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._portworxVolume.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._scaleIo.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._storageos.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephfs.internalValue = value.cephfs;
      this._cinder.internalValue = value.cinder;
      this._configMap.internalValue = value.configMap;
      this._csi.internalValue = value.csi;
      this._downwardApi.internalValue = value.downwardApi;
      this._emptyDir.internalValue = value.emptyDir;
      this._ephemeral.internalValue = value.ephemeral;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._gitRepo.internalValue = value.gitRepo;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._iscsi.internalValue = value.iscsi;
      this._name = value.name;
      this._nfs.internalValue = value.nfs;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._portworxVolume.internalValue = value.portworxVolume;
      this._projected.internalValue = value.projected;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._scaleIo.internalValue = value.scaleIo;
      this._secret.internalValue = value.secret;
      this._storageos.internalValue = value.storageos;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // cephfs - computed: false, optional: true, required: false
  private _cephfs = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCephfs) {
    this._cephfs.internalValue = value;
  }
  public resetCephfs() {
    this._cephfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephfsInput() {
    return this._cephfs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesEphemeral) {
    this._ephemeral.internalValue = value;
  }
  public resetEphemeral() {
    this._ephemeral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
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

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // portworx_volume - computed: false, optional: true, required: false
  private _portworxVolume = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesPortworxVolume) {
    this._portworxVolume.internalValue = value;
  }
  public resetPortworxVolume() {
    this._portworxVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portworxVolumeInput() {
    return this._portworxVolume.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // scale_io - computed: false, optional: true, required: false
  private _scaleIo = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesScaleIo) {
    this._scaleIo.internalValue = value;
  }
  public resetScaleIo() {
    this._scaleIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleIoInput() {
    return this._scaleIo.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // storageos - computed: false, optional: true, required: false
  private _storageos = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesStorageos) {
    this._storageos.internalValue = value;
  }
  public resetStorageos() {
    this._storageos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageosInput() {
    return this._storageos.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate {
  /**
  * Specifies Annotations to override or add for underlying Pods, PVCs, Account & TLS Secrets, Services Owned by Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#annotations DataK8SAppsKubeblocksIoClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Specifies the ComponentDefinition custom resource (CR) that defines the Component's characteristics and behavior. Supports three different ways to specify the ComponentDefinition: - the regular expression - recommended - the full name - recommended - the name prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#component_def DataK8SAppsKubeblocksIoClusterV1Manifest#component_def}
  */
  readonly componentDef?: string;
  /**
  * Specifies the configuration content of a config template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#configs DataK8SAppsKubeblocksIoClusterV1Manifest#configs}
  */
  readonly configs?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigs[] | cdktf.IResolvable;
  /**
  * Determines whether metrics exporter information is annotated on the Component's headless Service. If set to true, the following annotations will not be patched into the Service: - 'monitor.kubeblocks.io/path' - 'monitor.kubeblocks.io/port' - 'monitor.kubeblocks.io/scheme' These annotations allow the Prometheus installed by KubeBlocks to discover and scrape metrics from the exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#disable_exporter DataK8SAppsKubeblocksIoClusterV1Manifest#disable_exporter}
  */
  readonly disableExporter?: boolean | cdktf.IResolvable;
  /**
  * List of environment variables to add. These environment variables will be placed after the environment variables declared in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#env DataK8SAppsKubeblocksIoClusterV1Manifest#env}
  */
  readonly env?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnv[] | cdktf.IResolvable;
  /**
  * Allows for the customization of configuration values for each instance within a Component. An instance represent a single replica (Pod and associated K8s resources like PVCs, Services, and ConfigMaps). While instances typically share a common configuration as defined in the ClusterComponentSpec, they can require unique settings in various scenarios: For example: - A database Component might require different resource allocations for primary and secondary instances, with primaries needing more resources. - During a rolling upgrade, a Component may first update the image for one or a few instances, and then update the remaining instances after verifying that the updated instances are functioning correctly. InstanceTemplate allows for specifying these unique configurations per instance. Each instance's name is constructed using the pattern: $(component.name)-$(template.name)-$(ordinal), starting with an ordinal of 0. It is crucial to maintain unique names for each InstanceTemplate to avoid conflicts. The sum of replicas across all InstanceTemplates should not exceed the total number of replicas specified for the Component. Any remaining replicas will be generated using the default template and will follow the default naming rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#instances DataK8SAppsKubeblocksIoClusterV1Manifest#instances}
  */
  readonly instances?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstances[] | cdktf.IResolvable;
  /**
  * Specifies the configuration for the TLS certificates issuer. It allows defining the issuer name and the reference to the secret containing the TLS certificates and key. The secret should contain the CA certificate, TLS certificate, and private key in the specified keys. Required when TLS is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#issuer DataK8SAppsKubeblocksIoClusterV1Manifest#issuer}
  */
  readonly issuer?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuer;
  /**
  * Specifies Labels to override or add for underlying Pods, PVCs, Account & TLS Secrets, Services Owned by Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#labels DataK8SAppsKubeblocksIoClusterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the Component's name. It's part of the Service DNS name and must comply with the IANA service naming rule. The name is optional when ClusterComponentSpec is used as a template (e.g., in 'clusterSharding'), but required otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specifies the names of instances to be transitioned to offline status. Marking an instance as offline results in the following: 1. The associated Pod is stopped, and its PersistentVolumeClaim (PVC) is retained for potential future reuse or data recovery, but it is no longer actively used. 2. The ordinal number assigned to this instance is preserved, ensuring it remains unique and avoiding conflicts with new instances. Setting instances to offline allows for a controlled scale-in process, preserving their data and maintaining ordinal consistency within the Cluster. Note that offline instances and their associated resources, such as PVCs, are not automatically deleted. The administrator must manually manage the cleanup and removal of these resources when they are no longer needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#offline_instances DataK8SAppsKubeblocksIoClusterV1Manifest#offline_instances}
  */
  readonly offlineInstances?: string[];
  /**
  * Controls the concurrency of pods during initial scale up, when replacing pods on nodes, or when scaling down. It only used when 'PodManagementPolicy' is set to 'Parallel'. The default Concurrency is 100%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#parallel_pod_management_concurrency DataK8SAppsKubeblocksIoClusterV1Manifest#parallel_pod_management_concurrency}
  */
  readonly parallelPodManagementConcurrency?: string;
  /**
  * PodUpdatePolicy indicates how pods should be updated - 'StrictInPlace' indicates that only allows in-place upgrades. Any attempt to modify other fields will be rejected. - 'PreferInPlace' indicates that we will first attempt an in-place upgrade of the Pod. If that fails, it will fall back to the ReCreate, where pod will be recreated. Default value is 'PreferInPlace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#pod_update_policy DataK8SAppsKubeblocksIoClusterV1Manifest#pod_update_policy}
  */
  readonly podUpdatePolicy?: string;
  /**
  * Specifies the desired number of replicas in the Component for enhancing availability and durability, or load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#replicas DataK8SAppsKubeblocksIoClusterV1Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * Specifies the resources required by the Component. It allows defining the CPU, memory requirements and limits for the Component's containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#resources DataK8SAppsKubeblocksIoClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResources;
  /**
  * Specifies the scheduling policy for the Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#scheduling_policy DataK8SAppsKubeblocksIoClusterV1Manifest#scheduling_policy}
  */
  readonly schedulingPolicy?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy;
  /**
  * Specifies the name of the ServiceAccount required by the running Component. This ServiceAccount is used to grant necessary permissions for the Component's Pods to interact with other Kubernetes resources, such as modifying Pod labels or sending events. Defaults: To perform certain operational tasks, agent sidecars running in Pods require specific RBAC permissions. The service account will be bound to a default role named 'kubeblocks-cluster-pod-role' which is installed together with KubeBlocks. If not specified, KubeBlocks automatically assigns a default ServiceAccount named 'kb-{cluster.name}' Future Changes: Future versions might change the default ServiceAccount creation strategy to one per Component, potentially revising the naming to 'kb-{cluster.name}-{component.name}'. Users can override the automatic ServiceAccount assignment by explicitly setting the name of an existed ServiceAccount in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service_account_name DataK8SAppsKubeblocksIoClusterV1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Defines a list of ServiceRef for a Component, enabling access to both external services and Services provided by other Clusters. Types of services: - External services: Not managed by KubeBlocks or managed by a different KubeBlocks operator; Require a ServiceDescriptor for connection details. - Services provided by a Cluster: Managed by the same KubeBlocks operator; identified using Cluster, Component and Service names. ServiceRefs with identical 'serviceRef.name' in the same Cluster are considered the same. Example: ```yaml serviceRefs: - name: 'redis-sentinel' serviceDescriptor: name: 'external-redis-sentinel' - name: 'postgres-cluster' clusterServiceSelector: cluster: 'my-postgres-cluster' service: component: 'postgresql' ``` The example above includes ServiceRefs to an external Redis Sentinel service and a PostgreSQL Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service_refs DataK8SAppsKubeblocksIoClusterV1Manifest#service_refs}
  */
  readonly serviceRefs?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs[] | cdktf.IResolvable;
  /**
  * ServiceVersion specifies the version of the Service expected to be provisioned by this Component. The version should follow the syntax and semantics of the 'Semantic Versioning' specification (http://semver.org/). If no version is specified, the latest available version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#service_version DataK8SAppsKubeblocksIoClusterV1Manifest#service_version}
  */
  readonly serviceVersion?: string;
  /**
  * Overrides services defined in referenced ComponentDefinition and expose endpoints that can be accessed by clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#services DataK8SAppsKubeblocksIoClusterV1Manifest#services}
  */
  readonly services?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices[] | cdktf.IResolvable;
  /**
  * Stop the Component. If set, all the computing resources will be released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#stop DataK8SAppsKubeblocksIoClusterV1Manifest#stop}
  */
  readonly stop?: boolean | cdktf.IResolvable;
  /**
  * Overrides system accounts defined in referenced ComponentDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#system_accounts DataK8SAppsKubeblocksIoClusterV1Manifest#system_accounts}
  */
  readonly systemAccounts?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts[] | cdktf.IResolvable;
  /**
  * A boolean flag that indicates whether the Component should use Transport Layer Security (TLS) for secure communication. When set to true, the Component will be configured to use TLS encryption for its network connections. This ensures that the data transmitted between the Component and its clients or other Components is encrypted and protected from unauthorized access. If TLS is enabled, the Component may require additional configuration, such as specifying TLS certificates and keys, to properly set up the secure communication channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#tls DataK8SAppsKubeblocksIoClusterV1Manifest#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies a list of PersistentVolumeClaim templates that represent the storage requirements for the Component. Each template specifies the desired characteristics of a persistent volume, such as storage class, size, and access modes. These templates are used to dynamically provision persistent volumes for the Component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volume_claim_templates DataK8SAppsKubeblocksIoClusterV1Manifest#volume_claim_templates}
  */
  readonly volumeClaimTemplates?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates[] | cdktf.IResolvable;
  /**
  * List of volumes to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#volumes DataK8SAppsKubeblocksIoClusterV1Manifest#volumes}
  */
  readonly volumes?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    component_def: cdktf.stringToTerraform(struct!.componentDef),
    configs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigsToTerraform, false)(struct!.configs),
    disable_exporter: cdktf.booleanToTerraform(struct!.disableExporter),
    env: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnvToTerraform, false)(struct!.env),
    instances: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstancesToTerraform, false)(struct!.instances),
    issuer: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuerToTerraform(struct!.issuer),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    offline_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.offlineInstances),
    parallel_pod_management_concurrency: cdktf.stringToTerraform(struct!.parallelPodManagementConcurrency),
    pod_update_policy: cdktf.stringToTerraform(struct!.podUpdatePolicy),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResourcesToTerraform(struct!.resources),
    scheduling_policy: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyToTerraform(struct!.schedulingPolicy),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    service_refs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsToTerraform, false)(struct!.serviceRefs),
    service_version: cdktf.stringToTerraform(struct!.serviceVersion),
    services: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesToTerraform, false)(struct!.services),
    stop: cdktf.booleanToTerraform(struct!.stop),
    system_accounts: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsToTerraform, false)(struct!.systemAccounts),
    tls: cdktf.booleanToTerraform(struct!.tls),
    volume_claim_templates: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesToTerraform, false)(struct!.volumeClaimTemplates),
    volumes: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate | cdktf.IResolvable): any {
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
    component_def: {
      value: cdktf.stringToHclTerraform(struct!.componentDef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigsToHclTerraform, false)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigsList",
    },
    disable_exporter: {
      value: cdktf.booleanToHclTerraform(struct!.disableExporter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnvList",
    },
    instances: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstancesToHclTerraform, false)(struct!.instances),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstancesList",
    },
    issuer: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuerToHclTerraform(struct!.issuer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuer",
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
    offline_instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.offlineInstances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parallel_pod_management_concurrency: {
      value: cdktf.stringToHclTerraform(struct!.parallelPodManagementConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_update_policy: {
      value: cdktf.stringToHclTerraform(struct!.podUpdatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResources",
    },
    scheduling_policy: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyToHclTerraform(struct!.schedulingPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_refs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsToHclTerraform, false)(struct!.serviceRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsList",
    },
    service_version: {
      value: cdktf.stringToHclTerraform(struct!.serviceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesList",
    },
    stop: {
      value: cdktf.booleanToHclTerraform(struct!.stop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_accounts: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsToHclTerraform, false)(struct!.systemAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsList",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_claim_templates: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesToHclTerraform, false)(struct!.volumeClaimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._componentDef !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDef = this._componentDef;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    if (this._disableExporter !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableExporter = this._disableExporter;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._offlineInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineInstances = this._offlineInstances;
    }
    if (this._parallelPodManagementConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelPodManagementConcurrency = this._parallelPodManagementConcurrency;
    }
    if (this._podUpdatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.podUpdatePolicy = this._podUpdatePolicy;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingPolicy = this._schedulingPolicy?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._serviceRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRefs = this._serviceRefs?.internalValue;
    }
    if (this._serviceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVersion = this._serviceVersion;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._stop !== undefined) {
      hasAnyValues = true;
      internalValueResult.stop = this._stop;
    }
    if (this._systemAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAccounts = this._systemAccounts?.internalValue;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._volumeClaimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplates = this._volumeClaimTemplates?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._componentDef = undefined;
      this._configs.internalValue = undefined;
      this._disableExporter = undefined;
      this._env.internalValue = undefined;
      this._instances.internalValue = undefined;
      this._issuer.internalValue = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._offlineInstances = undefined;
      this._parallelPodManagementConcurrency = undefined;
      this._podUpdatePolicy = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._schedulingPolicy.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._serviceRefs.internalValue = undefined;
      this._serviceVersion = undefined;
      this._services.internalValue = undefined;
      this._stop = undefined;
      this._systemAccounts.internalValue = undefined;
      this._tls = undefined;
      this._volumeClaimTemplates.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._componentDef = value.componentDef;
      this._configs.internalValue = value.configs;
      this._disableExporter = value.disableExporter;
      this._env.internalValue = value.env;
      this._instances.internalValue = value.instances;
      this._issuer.internalValue = value.issuer;
      this._labels = value.labels;
      this._name = value.name;
      this._offlineInstances = value.offlineInstances;
      this._parallelPodManagementConcurrency = value.parallelPodManagementConcurrency;
      this._podUpdatePolicy = value.podUpdatePolicy;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._schedulingPolicy.internalValue = value.schedulingPolicy;
      this._serviceAccountName = value.serviceAccountName;
      this._serviceRefs.internalValue = value.serviceRefs;
      this._serviceVersion = value.serviceVersion;
      this._services.internalValue = value.services;
      this._stop = value.stop;
      this._systemAccounts.internalValue = value.systemAccounts;
      this._tls = value.tls;
      this._volumeClaimTemplates.internalValue = value.volumeClaimTemplates;
      this._volumes.internalValue = value.volumes;
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

  // component_def - computed: false, optional: true, required: false
  private _componentDef?: string; 
  public get componentDef() {
    return this.getStringAttribute('component_def');
  }
  public set componentDef(value: string) {
    this._componentDef = value;
  }
  public resetComponentDef() {
    this._componentDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefInput() {
    return this._componentDef;
  }

  // configs - computed: false, optional: true, required: false
  private _configs = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }

  // disable_exporter - computed: false, optional: true, required: false
  private _disableExporter?: boolean | cdktf.IResolvable; 
  public get disableExporter() {
    return this.getBooleanAttribute('disable_exporter');
  }
  public set disableExporter(value: boolean | cdktf.IResolvable) {
    this._disableExporter = value;
  }
  public resetDisableExporter() {
    this._disableExporter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableExporterInput() {
    return this._disableExporter;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // instances - computed: false, optional: true, required: false
  private _instances = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  public resetInstances() {
    this._instances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateIssuer) {
    this._issuer.internalValue = value;
  }
  public resetIssuer() {
    this._issuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
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

  // offline_instances - computed: false, optional: true, required: false
  private _offlineInstances?: string[]; 
  public get offlineInstances() {
    return this.getListAttribute('offline_instances');
  }
  public set offlineInstances(value: string[]) {
    this._offlineInstances = value;
  }
  public resetOfflineInstances() {
    this._offlineInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineInstancesInput() {
    return this._offlineInstances;
  }

  // parallel_pod_management_concurrency - computed: false, optional: true, required: false
  private _parallelPodManagementConcurrency?: string; 
  public get parallelPodManagementConcurrency() {
    return this.getStringAttribute('parallel_pod_management_concurrency');
  }
  public set parallelPodManagementConcurrency(value: string) {
    this._parallelPodManagementConcurrency = value;
  }
  public resetParallelPodManagementConcurrency() {
    this._parallelPodManagementConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelPodManagementConcurrencyInput() {
    return this._parallelPodManagementConcurrency;
  }

  // pod_update_policy - computed: false, optional: true, required: false
  private _podUpdatePolicy?: string; 
  public get podUpdatePolicy() {
    return this.getStringAttribute('pod_update_policy');
  }
  public set podUpdatePolicy(value: string) {
    this._podUpdatePolicy = value;
  }
  public resetPodUpdatePolicy() {
    this._podUpdatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podUpdatePolicyInput() {
    return this._podUpdatePolicy;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduling_policy - computed: false, optional: true, required: false
  private _schedulingPolicy = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicyOutputReference(this, "scheduling_policy");
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }
  public putSchedulingPolicy(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSchedulingPolicy) {
    this._schedulingPolicy.internalValue = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // service_refs - computed: false, optional: true, required: false
  private _serviceRefs = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefsList(this, "service_refs", false);
  public get serviceRefs() {
    return this._serviceRefs;
  }
  public putServiceRefs(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServiceRefs[] | cdktf.IResolvable) {
    this._serviceRefs.internalValue = value;
  }
  public resetServiceRefs() {
    this._serviceRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRefsInput() {
    return this._serviceRefs.internalValue;
  }

  // service_version - computed: false, optional: true, required: false
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  public resetServiceVersion() {
    this._serviceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // stop - computed: false, optional: true, required: false
  private _stop?: boolean | cdktf.IResolvable; 
  public get stop() {
    return this.getBooleanAttribute('stop');
  }
  public set stop(value: boolean | cdktf.IResolvable) {
    this._stop = value;
  }
  public resetStop() {
    this._stop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInput() {
    return this._stop;
  }

  // system_accounts - computed: false, optional: true, required: false
  private _systemAccounts = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccountsList(this, "system_accounts", false);
  public get systemAccounts() {
    return this._systemAccounts;
  }
  public putSystemAccounts(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateSystemAccounts[] | cdktf.IResolvable) {
    this._systemAccounts.internalValue = value;
  }
  public resetSystemAccounts() {
    this._systemAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAccountsInput() {
    return this._systemAccounts.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // volume_claim_templates - computed: false, optional: true, required: false
  private _volumeClaimTemplates = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplatesList(this, "volume_claim_templates", false);
  public get volumeClaimTemplates() {
    return this._volumeClaimTemplates;
  }
  public putVolumeClaimTemplates(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumeClaimTemplates[] | cdktf.IResolvable) {
    this._volumeClaimTemplates.internalValue = value;
  }
  public resetVolumeClaimTemplates() {
    this._volumeClaimTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplatesInput() {
    return this._volumeClaimTemplates.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings {
  /**
  * Represents the common parent part of all shard names. This identifier is included as part of the Service DNS name and must comply with IANA service naming rules. It is used to generate the names of underlying Components following the pattern '$(clusterSharding.name)-$(ShardID)'. ShardID is a random string that is appended to the Name to generate unique identifiers for each shard. For example, if the sharding specification name is 'my-shard' and the ShardID is 'abc', the resulting Component name would be 'my-shard-abc'. Note that the name defined in Component template('clusterSharding.template.name') will be disregarded when generating the Component names of the shards. The 'clusterSharding.name' field takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#name DataK8SAppsKubeblocksIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the ShardingDefinition custom resource (CR) that defines the sharding's characteristics and behavior. The full name or regular expression is supported to match the ShardingDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#sharding_def DataK8SAppsKubeblocksIoClusterV1Manifest#sharding_def}
  */
  readonly shardingDef?: string;
  /**
  * Specifies the desired number of shards. Users can declare the desired number of shards through this field. KubeBlocks dynamically creates and deletes Components based on the difference between the desired and actual number of shards. KubeBlocks provides lifecycle management for sharding, including: - Executing the shardProvision Action defined in the ShardingDefinition when the number of shards increases. This allows for custom actions to be performed after a new shard is provisioned. - Executing the shardTerminate Action defined in the ShardingDefinition when the number of shards decreases. This enables custom cleanup or data migration tasks to be executed before a shard is terminated. Resources and data associated with the corresponding Component will also be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#shards DataK8SAppsKubeblocksIoClusterV1Manifest#shards}
  */
  readonly shards?: number;
  /**
  * The template for generating Components for shards, where each shard consists of one Component. This field is of type ClusterComponentSpec, which encapsulates all the required details and definitions for creating and managing the Components. KubeBlocks uses this template to generate a set of identical Components of shards. All the generated Components will have the same specifications and definitions as specified in the 'template' field. This allows for the creation of multiple Components with consistent configurations, enabling sharding and distribution of workloads across Components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#template DataK8SAppsKubeblocksIoClusterV1Manifest#template}
  */
  readonly template: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sharding_def: cdktf.stringToTerraform(struct!.shardingDef),
    shards: cdktf.numberToTerraform(struct!.shards),
    template: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateToTerraform(struct!.template),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings | cdktf.IResolvable): any {
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
    sharding_def: {
      value: cdktf.stringToHclTerraform(struct!.shardingDef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shards: {
      value: cdktf.numberToHclTerraform(struct!.shards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shardingDef !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardingDef = this._shardingDef;
    }
    if (this._shards !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._shardingDef = undefined;
      this._shards = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._shardingDef = value.shardingDef;
      this._shards = value.shards;
      this._template.internalValue = value.template;
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

  // sharding_def - computed: false, optional: true, required: false
  private _shardingDef?: string; 
  public get shardingDef() {
    return this.getStringAttribute('sharding_def');
  }
  public set shardingDef(value: string) {
    this._shardingDef = value;
  }
  public resetShardingDef() {
    this._shardingDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingDefInput() {
    return this._shardingDef;
  }

  // shards - computed: false, optional: true, required: false
  private _shards?: number; 
  public get shards() {
    return this.getNumberAttribute('shards');
  }
  public set shards(value: number) {
    this._shards = value;
  }
  public resetShards() {
    this._shards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterV1ManifestSpec {
  /**
  * Specifies the backup configuration of the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#backup DataK8SAppsKubeblocksIoClusterV1Manifest#backup}
  */
  readonly backup?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecBackup;
  /**
  * Specifies the name of the ClusterDefinition to use when creating a Cluster. This field enables users to create a Cluster based on a specific ClusterDefinition. Which, in conjunction with the 'topology' field, determine: - The Components to be included in the Cluster. - The sequences in which the Components are created, updated, and terminate. This facilitates multiple-components management with predefined ClusterDefinition. Users with advanced requirements can bypass this general setting and specify more precise control over the composition of the Cluster by directly referencing specific ComponentDefinitions for each component within 'componentSpecs[*].componentDef'. If this field is not provided, each component must be explicitly defined in 'componentSpecs[*].componentDef'. Note: Once set, this field cannot be modified; it is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#cluster_def DataK8SAppsKubeblocksIoClusterV1Manifest#cluster_def}
  */
  readonly clusterDef?: string;
  /**
  * Specifies a list of ClusterComponentSpec objects used to define the individual Components that make up a Cluster. This field allows for detailed configuration of each Component within the Cluster. Note: 'shardings' and 'componentSpecs' cannot both be empty; at least one must be defined to configure a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#component_specs DataK8SAppsKubeblocksIoClusterV1Manifest#component_specs}
  */
  readonly componentSpecs?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecs[] | cdktf.IResolvable;
  /**
  * Specifies runtimeClassName for all Pods managed by this Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#runtime_class_name DataK8SAppsKubeblocksIoClusterV1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * Specifies the scheduling policy for the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#scheduling_policy DataK8SAppsKubeblocksIoClusterV1Manifest#scheduling_policy}
  */
  readonly schedulingPolicy?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicy;
  /**
  * Defines a list of additional Services that are exposed by a Cluster. This field allows Services of selected Components, either from 'componentSpecs' or 'shardings' to be exposed, alongside Services defined with ComponentService. Services defined here can be referenced by other clusters using the ServiceRefClusterSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#services DataK8SAppsKubeblocksIoClusterV1Manifest#services}
  */
  readonly services?: { [key: string]: string };
  /**
  * Specifies a list of ClusterSharding objects that manage the sharding topology for Cluster Components. Each ClusterSharding organizes components into shards, with each shard corresponding to a Component. Components within a shard are all based on a common ClusterComponentSpec template, ensuring uniform configurations. This field supports dynamic resharding by facilitating the addition or removal of shards through the 'shards' field in ClusterSharding. Note: 'shardings' and 'componentSpecs' cannot both be empty; at least one must be defined to configure a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#shardings DataK8SAppsKubeblocksIoClusterV1Manifest#shardings}
  */
  readonly shardings?: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings[] | cdktf.IResolvable;
  /**
  * Specifies the behavior when a Cluster is deleted. It defines how resources, data, and backups associated with a Cluster are managed during termination. Choose a policy based on the desired level of resource cleanup and data preservation: - 'DoNotTerminate': Prevents deletion of the Cluster. This policy ensures that all resources remain intact. - 'Delete': Deletes all runtime resources belong to the Cluster. - 'WipeOut': An aggressive policy that deletes all Cluster resources, including volume snapshots and backups in external storage. This results in complete data removal and should be used cautiously, primarily in non-production environments to avoid irreversible data loss. Warning: Choosing an inappropriate termination policy can result in data loss. The 'WipeOut' policy is particularly risky in production environments due to its irreversible nature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#termination_policy DataK8SAppsKubeblocksIoClusterV1Manifest#termination_policy}
  */
  readonly terminationPolicy: string;
  /**
  * Specifies the name of the ClusterTopology to be used when creating the Cluster. This field defines which set of Components, as outlined in the ClusterDefinition, will be used to construct the Cluster based on the named topology. The ClusterDefinition may list multiple topologies under 'clusterdefinition.spec.topologies[*]', each tailored to different use cases or environments. If 'topology' is not specified, the Cluster will use the default topology defined in the ClusterDefinition. Note: Once set during the Cluster creation, the 'topology' field cannot be modified. It establishes the initial composition and structure of the Cluster and is intended for one-time configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_kubeblocks_io_cluster_v1_manifest#topology DataK8SAppsKubeblocksIoClusterV1Manifest#topology}
  */
  readonly topology?: string;
}

export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: dataK8SAppsKubeblocksIoClusterV1ManifestSpecBackupToTerraform(struct!.backup),
    cluster_def: cdktf.stringToTerraform(struct!.clusterDef),
    component_specs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecsToTerraform, false)(struct!.componentSpecs),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduling_policy: dataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicyToTerraform(struct!.schedulingPolicy),
    services: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.services),
    shardings: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsToTerraform, false)(struct!.shardings),
    termination_policy: cdktf.stringToTerraform(struct!.terminationPolicy),
    topology: cdktf.stringToTerraform(struct!.topology),
  }
}


export function dataK8SAppsKubeblocksIoClusterV1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecBackup",
    },
    cluster_def: {
      value: cdktf.stringToHclTerraform(struct!.clusterDef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_specs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecsToHclTerraform, false)(struct!.componentSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecsList",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_policy: {
      value: dataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicyToHclTerraform(struct!.schedulingPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicy",
    },
    services: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.services),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    shardings: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsToHclTerraform, false)(struct!.shardings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsList",
    },
    termination_policy: {
      value: cdktf.stringToHclTerraform(struct!.terminationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._clusterDef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDef = this._clusterDef;
    }
    if (this._componentSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentSpecs = this._componentSpecs?.internalValue;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingPolicy = this._schedulingPolicy?.internalValue;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._shardings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardings = this._shardings?.internalValue;
    }
    if (this._terminationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationPolicy = this._terminationPolicy;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup.internalValue = undefined;
      this._clusterDef = undefined;
      this._componentSpecs.internalValue = undefined;
      this._runtimeClassName = undefined;
      this._schedulingPolicy.internalValue = undefined;
      this._services = undefined;
      this._shardings.internalValue = undefined;
      this._terminationPolicy = undefined;
      this._topology = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup.internalValue = value.backup;
      this._clusterDef = value.clusterDef;
      this._componentSpecs.internalValue = value.componentSpecs;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulingPolicy.internalValue = value.schedulingPolicy;
      this._services = value.services;
      this._shardings.internalValue = value.shardings;
      this._terminationPolicy = value.terminationPolicy;
      this._topology = value.topology;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // cluster_def - computed: false, optional: true, required: false
  private _clusterDef?: string; 
  public get clusterDef() {
    return this.getStringAttribute('cluster_def');
  }
  public set clusterDef(value: string) {
    this._clusterDef = value;
  }
  public resetClusterDef() {
    this._clusterDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDefInput() {
    return this._clusterDef;
  }

  // component_specs - computed: false, optional: true, required: false
  private _componentSpecs = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecsList(this, "component_specs", false);
  public get componentSpecs() {
    return this._componentSpecs;
  }
  public putComponentSpecs(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecComponentSpecs[] | cdktf.IResolvable) {
    this._componentSpecs.internalValue = value;
  }
  public resetComponentSpecs() {
    this._componentSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentSpecsInput() {
    return this._componentSpecs.internalValue;
  }

  // runtime_class_name - computed: false, optional: true, required: false
  private _runtimeClassName?: string; 
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }
  public set runtimeClassName(value: string) {
    this._runtimeClassName = value;
  }
  public resetRuntimeClassName() {
    this._runtimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassNameInput() {
    return this._runtimeClassName;
  }

  // scheduling_policy - computed: false, optional: true, required: false
  private _schedulingPolicy = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicyOutputReference(this, "scheduling_policy");
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }
  public putSchedulingPolicy(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecSchedulingPolicy) {
    this._schedulingPolicy.internalValue = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services?: { [key: string]: string }; 
  public get services() {
    return this.getStringMapAttribute('services');
  }
  public set services(value: { [key: string]: string }) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // shardings - computed: false, optional: true, required: false
  private _shardings = new DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardingsList(this, "shardings", false);
  public get shardings() {
    return this._shardings;
  }
  public putShardings(value: DataK8SAppsKubeblocksIoClusterV1ManifestSpecShardings[] | cdktf.IResolvable) {
    this._shardings.internalValue = value;
  }
  public resetShardings() {
    this._shardings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingsInput() {
    return this._shardings.internalValue;
  }

  // termination_policy - computed: false, optional: false, required: true
  private _terminationPolicy?: string; 
  public get terminationPolicy() {
    return this.getStringAttribute('termination_policy');
  }
  public set terminationPolicy(value: string) {
    this._terminationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPolicyInput() {
    return this._terminationPolicy;
  }

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }
}
