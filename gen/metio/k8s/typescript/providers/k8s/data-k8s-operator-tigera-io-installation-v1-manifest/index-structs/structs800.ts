import * as cdktf from 'cdktf';
import { DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinity,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinityToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinityToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinityOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadata,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadataToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadataToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadataOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategy,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategyToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategyToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategyOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadata,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadataToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadataToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadataOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSet,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSetToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSetToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSetOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSet,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSetToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSetToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSetOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagement,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagementToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagementToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagementOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCni,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCniToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCniToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCniOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResources,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResourcesToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResourcesToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResourcesList,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerations,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerationsToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerationsToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerationsList,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSet,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSetToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSetToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSetOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecrets,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecretsToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecretsList,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecLogging,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecLoggingToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecLoggingToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecLoggingOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategy,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategyToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategyToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategyOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinity,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinityToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinityToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinityOutputReference } from './structs400'
import { DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeployment,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeploymentToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeploymentToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeploymentOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetwork,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetworkToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetworkToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetworkOutputReference,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSet,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSetToTerraform,
dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSetToHclTerraform,
DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSetOutputReference } from './structs0'
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#label_selector DataK8SOperatorTigeraIoInstallationV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#mismatch_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespace_selector DataK8SOperatorTigeraIoInstallationV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespaces DataK8SOperatorTigeraIoInstallationV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#topology_key DataK8SOperatorTigeraIoInstallationV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
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
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#pod_affinity_term DataK8SOperatorTigeraIoInstallationV1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#weight DataK8SOperatorTigeraIoInstallationV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#values DataK8SOperatorTigeraIoInstallationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_expressions DataK8SOperatorTigeraIoInstallationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_labels DataK8SOperatorTigeraIoInstallationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#values DataK8SOperatorTigeraIoInstallationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_expressions DataK8SOperatorTigeraIoInstallationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_labels DataK8SOperatorTigeraIoInstallationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#label_selector DataK8SOperatorTigeraIoInstallationV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#mismatch_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespace_selector DataK8SOperatorTigeraIoInstallationV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespaces DataK8SOperatorTigeraIoInstallationV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#topology_key DataK8SOperatorTigeraIoInstallationV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
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
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SOperatorTigeraIoInstallationV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SOperatorTigeraIoInstallationV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#values DataK8SOperatorTigeraIoInstallationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_expressions DataK8SOperatorTigeraIoInstallationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_labels DataK8SOperatorTigeraIoInstallationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#values DataK8SOperatorTigeraIoInstallationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_expressions DataK8SOperatorTigeraIoInstallationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_labels DataK8SOperatorTigeraIoInstallationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#label_selector DataK8SOperatorTigeraIoInstallationV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#mismatch_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespace_selector DataK8SOperatorTigeraIoInstallationV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespaces DataK8SOperatorTigeraIoInstallationV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#topology_key DataK8SOperatorTigeraIoInstallationV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
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
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#pod_affinity_term DataK8SOperatorTigeraIoInstallationV1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#weight DataK8SOperatorTigeraIoInstallationV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#values DataK8SOperatorTigeraIoInstallationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_expressions DataK8SOperatorTigeraIoInstallationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_labels DataK8SOperatorTigeraIoInstallationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#values DataK8SOperatorTigeraIoInstallationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_expressions DataK8SOperatorTigeraIoInstallationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_labels DataK8SOperatorTigeraIoInstallationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#label_selector DataK8SOperatorTigeraIoInstallationV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#mismatch_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespace_selector DataK8SOperatorTigeraIoInstallationV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#namespaces DataK8SOperatorTigeraIoInstallationV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#topology_key DataK8SOperatorTigeraIoInstallationV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
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
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SOperatorTigeraIoInstallationV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SOperatorTigeraIoInstallationV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#node_affinity DataK8SOperatorTigeraIoInstallationV1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#pod_affinity DataK8SOperatorTigeraIoInstallationV1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#pod_anti_affinity DataK8SOperatorTigeraIoInstallationV1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity | cdktf.IResolvable | undefined) {
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
  private _nodeAffinity = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityNodeAffinity) {
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
  private _podAffinity = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAffinity) {
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
  private _podAntiAffinity = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityPodAntiAffinity) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#name DataK8SOperatorTigeraIoInstallationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#claims DataK8SOperatorTigeraIoInstallationV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#limits DataK8SOperatorTigeraIoInstallationV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#requests DataK8SOperatorTigeraIoInstallationV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsList",
    },
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
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
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the typha Deployment container by name. Supported values are: calico-typha
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#name DataK8SOperatorTigeraIoInstallationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named typha Deployment container's resources. If omitted, the typha Deployment will use its default value for this container's resources. If used in conjunction with the deprecated ComponentResources, then this value takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#resources DataK8SOperatorTigeraIoInstallationV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#name DataK8SOperatorTigeraIoInstallationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#claims DataK8SOperatorTigeraIoInstallationV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#limits DataK8SOperatorTigeraIoInstallationV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#requests DataK8SOperatorTigeraIoInstallationV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsList",
    },
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
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
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the typha Deployment init container by name. Supported values are: typha-certs-key-cert-provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#name DataK8SOperatorTigeraIoInstallationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named typha Deployment init container's resources. If omitted, the typha Deployment will use its default value for this init container's resources. If used in conjunction with the deprecated ComponentResources, then this value takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#resources DataK8SOperatorTigeraIoInstallationV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#effect DataK8SOperatorTigeraIoInstallationV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#toleration_seconds DataK8SOperatorTigeraIoInstallationV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#value DataK8SOperatorTigeraIoInstallationV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#key DataK8SOperatorTigeraIoInstallationV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#operator DataK8SOperatorTigeraIoInstallationV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#values DataK8SOperatorTigeraIoInstallationV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_expressions DataK8SOperatorTigeraIoInstallationV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_labels DataK8SOperatorTigeraIoInstallationV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#label_selector DataK8SOperatorTigeraIoInstallationV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#match_label_keys DataK8SOperatorTigeraIoInstallationV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#max_skew DataK8SOperatorTigeraIoInstallationV1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. This is a beta field and requires the MinDomainsInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#min_domains DataK8SOperatorTigeraIoInstallationV1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#node_affinity_policy DataK8SOperatorTigeraIoInstallationV1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#node_taints_policy DataK8SOperatorTigeraIoInstallationV1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#topology_key DataK8SOperatorTigeraIoInstallationV1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#when_unsatisfiable DataK8SOperatorTigeraIoInstallationV1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector",
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsLabelSelector) {
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

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsOutputReference {
    return new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec {
  /**
  * Affinity is a group of affinity scheduling rules for the typha pods. If specified, this overrides any affinity that may be set on the typha Deployment. If omitted, the typha Deployment will use its default value for affinity. If used in conjunction with the deprecated TyphaAffinity, then this value takes precedence. WARNING: Please note that this field will override the default calico-typha Deployment affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#affinity DataK8SOperatorTigeraIoInstallationV1Manifest#affinity}
  */
  readonly affinity?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity;
  /**
  * Containers is a list of typha containers. If specified, this overrides the specified typha Deployment containers. If omitted, the typha Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#containers DataK8SOperatorTigeraIoInstallationV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of typha init containers. If specified, this overrides the specified typha Deployment init containers. If omitted, the typha Deployment will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#init_containers DataK8SOperatorTigeraIoInstallationV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * NodeSelector is the calico-typha pod's scheduling constraints. If specified, each of the key/value pairs are added to the calico-typha Deployment nodeSelector provided the key does not already exist in the object's nodeSelector. If omitted, the calico-typha Deployment will use its default value for nodeSelector. WARNING: Please note that this field will modify the default calico-typha Deployment nodeSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#node_selector DataK8SOperatorTigeraIoInstallationV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#termination_grace_period_seconds DataK8SOperatorTigeraIoInstallationV1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Tolerations is the typha pod's tolerations. If specified, this overrides any tolerations that may be set on the typha Deployment. If omitted, the typha Deployment will use its default value for tolerations. WARNING: Please note that this field will override the default calico-typha Deployment tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#tolerations DataK8SOperatorTigeraIoInstallationV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#topology_spread_constraints DataK8SOperatorTigeraIoInstallationV1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityToTerraform(struct!.affinity),
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._containers.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeSelector = undefined;
      this._terminationGracePeriodSeconds = undefined;
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
      this._containers.internalValue = value.containers;
      this._initContainers.internalValue = value.initContainers;
      this._nodeSelector = value.nodeSelector;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
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

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate {
  /**
  * Metadata is a subset of a Kubernetes object's metadata that is added to the pod's metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#metadata DataK8SOperatorTigeraIoInstallationV1Manifest#metadata}
  */
  readonly metadata?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadata;
  /**
  * Spec is the typha Deployment's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#spec DataK8SOperatorTigeraIoInstallationV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateSpec) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec {
  /**
  * MinReadySeconds is the minimum number of seconds for which a newly created Deployment pod should be ready without any of its container crashing, for it to be considered available. If specified, this overrides any minReadySeconds value that may be set on the typha Deployment. If omitted, the typha Deployment will use its default value for minReadySeconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#min_ready_seconds DataK8SOperatorTigeraIoInstallationV1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * The deployment strategy to use to replace existing pods with new ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#strategy DataK8SOperatorTigeraIoInstallationV1Manifest#strategy}
  */
  readonly strategy?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategy;
  /**
  * Template describes the typha Deployment pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#template DataK8SOperatorTigeraIoInstallationV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    strategy: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategyToTerraform(struct!.strategy),
    template: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategy",
    },
    template: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minReadySeconds = undefined;
      this._strategy.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minReadySeconds = value.minReadySeconds;
      this._strategy.internalValue = value.strategy;
      this._template.internalValue = value.template;
    }
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment {
  /**
  * Metadata is a subset of a Kubernetes object's metadata that is added to the Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#metadata DataK8SOperatorTigeraIoInstallationV1Manifest#metadata}
  */
  readonly metadata?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadata;
  /**
  * Spec is the specification of the typha Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#spec DataK8SOperatorTigeraIoInstallationV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadataToTerraform(struct!.metadata),
    spec: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadata",
    },
    spec: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentSpec) {
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
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes {
  /**
  * CNIBinDir is the path to the CNI binaries directory on Windows, it must match what is used as 'bin_dir' under [plugins] [plugins.'io.containerd.grpc.v1.cri'] [plugins.'io.containerd.grpc.v1.cri'.cni] on the containerd 'config.toml' file on the Windows nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#cni_bin_dir DataK8SOperatorTigeraIoInstallationV1Manifest#cni_bin_dir}
  */
  readonly cniBinDir?: string;
  /**
  * CNIConfigDir is the path to the CNI configuration directory on Windows, it must match what is used as 'conf_dir' under [plugins] [plugins.'io.containerd.grpc.v1.cri'] [plugins.'io.containerd.grpc.v1.cri'.cni] on the containerd 'config.toml' file on the Windows nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#cni_config_dir DataK8SOperatorTigeraIoInstallationV1Manifest#cni_config_dir}
  */
  readonly cniConfigDir?: string;
  /**
  * CNILogDir is the path to the Calico CNI logs directory on Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#cni_log_dir DataK8SOperatorTigeraIoInstallationV1Manifest#cni_log_dir}
  */
  readonly cniLogDir?: string;
  /**
  * VXLANAdapter is the Network Adapter used for VXLAN, leave blank for primary NIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#vxlan_adapter DataK8SOperatorTigeraIoInstallationV1Manifest#vxlan_adapter}
  */
  readonly vxlanAdapter?: string;
  /**
  * VXLANMACPrefix is the prefix used when generating MAC addresses for virtual NICs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#vxlan_mac_prefix DataK8SOperatorTigeraIoInstallationV1Manifest#vxlan_mac_prefix}
  */
  readonly vxlanMacPrefix?: string;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodesToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cni_bin_dir: cdktf.stringToTerraform(struct!.cniBinDir),
    cni_config_dir: cdktf.stringToTerraform(struct!.cniConfigDir),
    cni_log_dir: cdktf.stringToTerraform(struct!.cniLogDir),
    vxlan_adapter: cdktf.stringToTerraform(struct!.vxlanAdapter),
    vxlan_mac_prefix: cdktf.stringToTerraform(struct!.vxlanMacPrefix),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodesToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cni_bin_dir: {
      value: cdktf.stringToHclTerraform(struct!.cniBinDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cni_config_dir: {
      value: cdktf.stringToHclTerraform(struct!.cniConfigDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cni_log_dir: {
      value: cdktf.stringToHclTerraform(struct!.cniLogDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vxlan_adapter: {
      value: cdktf.stringToHclTerraform(struct!.vxlanAdapter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vxlan_mac_prefix: {
      value: cdktf.stringToHclTerraform(struct!.vxlanMacPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cniBinDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniBinDir = this._cniBinDir;
    }
    if (this._cniConfigDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniConfigDir = this._cniConfigDir;
    }
    if (this._cniLogDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniLogDir = this._cniLogDir;
    }
    if (this._vxlanAdapter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanAdapter = this._vxlanAdapter;
    }
    if (this._vxlanMacPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanMacPrefix = this._vxlanMacPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cniBinDir = undefined;
      this._cniConfigDir = undefined;
      this._cniLogDir = undefined;
      this._vxlanAdapter = undefined;
      this._vxlanMacPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cniBinDir = value.cniBinDir;
      this._cniConfigDir = value.cniConfigDir;
      this._cniLogDir = value.cniLogDir;
      this._vxlanAdapter = value.vxlanAdapter;
      this._vxlanMacPrefix = value.vxlanMacPrefix;
    }
  }

  // cni_bin_dir - computed: false, optional: true, required: false
  private _cniBinDir?: string; 
  public get cniBinDir() {
    return this.getStringAttribute('cni_bin_dir');
  }
  public set cniBinDir(value: string) {
    this._cniBinDir = value;
  }
  public resetCniBinDir() {
    this._cniBinDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniBinDirInput() {
    return this._cniBinDir;
  }

  // cni_config_dir - computed: false, optional: true, required: false
  private _cniConfigDir?: string; 
  public get cniConfigDir() {
    return this.getStringAttribute('cni_config_dir');
  }
  public set cniConfigDir(value: string) {
    this._cniConfigDir = value;
  }
  public resetCniConfigDir() {
    this._cniConfigDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniConfigDirInput() {
    return this._cniConfigDir;
  }

  // cni_log_dir - computed: false, optional: true, required: false
  private _cniLogDir?: string; 
  public get cniLogDir() {
    return this.getStringAttribute('cni_log_dir');
  }
  public set cniLogDir(value: string) {
    this._cniLogDir = value;
  }
  public resetCniLogDir() {
    this._cniLogDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniLogDirInput() {
    return this._cniLogDir;
  }

  // vxlan_adapter - computed: false, optional: true, required: false
  private _vxlanAdapter?: string; 
  public get vxlanAdapter() {
    return this.getStringAttribute('vxlan_adapter');
  }
  public set vxlanAdapter(value: string) {
    this._vxlanAdapter = value;
  }
  public resetVxlanAdapter() {
    this._vxlanAdapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanAdapterInput() {
    return this._vxlanAdapter;
  }

  // vxlan_mac_prefix - computed: false, optional: true, required: false
  private _vxlanMacPrefix?: string; 
  public get vxlanMacPrefix() {
    return this.getStringAttribute('vxlan_mac_prefix');
  }
  public set vxlanMacPrefix(value: string) {
    this._vxlanMacPrefix = value;
  }
  public resetVxlanMacPrefix() {
    this._vxlanMacPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanMacPrefixInput() {
    return this._vxlanMacPrefix;
  }
}
export interface DataK8SOperatorTigeraIoInstallationV1ManifestSpec {
  /**
  * CalicoKubeControllersDeployment configures the calico-kube-controllers Deployment. If used in conjunction with the deprecated ComponentResources, then these overrides take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#calico_kube_controllers_deployment DataK8SOperatorTigeraIoInstallationV1Manifest#calico_kube_controllers_deployment}
  */
  readonly calicoKubeControllersDeployment?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeployment;
  /**
  * CalicoNetwork specifies networking configuration options for Calico.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#calico_network DataK8SOperatorTigeraIoInstallationV1Manifest#calico_network}
  */
  readonly calicoNetwork?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetwork;
  /**
  * CalicoNodeDaemonSet configures the calico-node DaemonSet. If used in conjunction with the deprecated ComponentResources, then these overrides take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#calico_node_daemon_set DataK8SOperatorTigeraIoInstallationV1Manifest#calico_node_daemon_set}
  */
  readonly calicoNodeDaemonSet?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSet;
  /**
  * CalicoNodeWindowsDaemonSet configures the calico-node-windows DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#calico_node_windows_daemon_set DataK8SOperatorTigeraIoInstallationV1Manifest#calico_node_windows_daemon_set}
  */
  readonly calicoNodeWindowsDaemonSet?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSet;
  /**
  * Deprecated. The CalicoWindowsUpgradeDaemonSet is deprecated and will be removed from the API in the future. CalicoWindowsUpgradeDaemonSet configures the calico-windows-upgrade DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#calico_windows_upgrade_daemon_set DataK8SOperatorTigeraIoInstallationV1Manifest#calico_windows_upgrade_daemon_set}
  */
  readonly calicoWindowsUpgradeDaemonSet?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSet;
  /**
  * CertificateManagement configures pods to submit a CertificateSigningRequest to the certificates.k8s.io/v1beta1 API in order to obtain TLS certificates. This feature requires that you bring your own CSR signing and approval process, otherwise pods will be stuck during initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#certificate_management DataK8SOperatorTigeraIoInstallationV1Manifest#certificate_management}
  */
  readonly certificateManagement?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagement;
  /**
  * CNI specifies the CNI that will be used by this installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#cni DataK8SOperatorTigeraIoInstallationV1Manifest#cni}
  */
  readonly cni?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCni;
  /**
  * Deprecated. Please use CalicoNodeDaemonSet, TyphaDeployment, and KubeControllersDeployment. ComponentResources can be used to customize the resource requirements for each component. Node, Typha, and KubeControllers are supported for installations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#component_resources DataK8SOperatorTigeraIoInstallationV1Manifest#component_resources}
  */
  readonly componentResources?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResources[] | cdktf.IResolvable;
  /**
  * ControlPlaneNodeSelector is used to select control plane nodes on which to run Calico components. This is globally applied to all resources created by the operator excluding daemonsets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#control_plane_node_selector DataK8SOperatorTigeraIoInstallationV1Manifest#control_plane_node_selector}
  */
  readonly controlPlaneNodeSelector?: { [key: string]: string };
  /**
  * ControlPlaneReplicas defines how many replicas of the control plane core components will be deployed. This field applies to all control plane components that support High Availability. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#control_plane_replicas DataK8SOperatorTigeraIoInstallationV1Manifest#control_plane_replicas}
  */
  readonly controlPlaneReplicas?: number;
  /**
  * ControlPlaneTolerations specify tolerations which are then globally applied to all resources created by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#control_plane_tolerations DataK8SOperatorTigeraIoInstallationV1Manifest#control_plane_tolerations}
  */
  readonly controlPlaneTolerations?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerations[] | cdktf.IResolvable;
  /**
  * CSINodeDriverDaemonSet configures the csi-node-driver DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#csi_node_driver_daemon_set DataK8SOperatorTigeraIoInstallationV1Manifest#csi_node_driver_daemon_set}
  */
  readonly csiNodeDriverDaemonSet?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSet;
  /**
  * FIPSMode uses images and features only that are using FIPS 140-2 validated cryptographic modules and standards. Only supported for Variant=Calico. Default: Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#fips_mode DataK8SOperatorTigeraIoInstallationV1Manifest#fips_mode}
  */
  readonly fipsMode?: string;
  /**
  * FlexVolumePath optionally specifies a custom path for FlexVolume. If not specified, FlexVolume will be enabled by default. If set to 'None', FlexVolume will be disabled. The default is based on the kubernetesProvider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#flex_volume_path DataK8SOperatorTigeraIoInstallationV1Manifest#flex_volume_path}
  */
  readonly flexVolumePath?: string;
  /**
  * ImagePath allows for the path part of an image to be specified. If specified then the specified value will be used as the image path for each image. If not specified or empty, the default for each image will be used. A special case value, UseDefault, is supported to explicitly specify the default image path will be used for each image. Image format: '<registry><imagePath>/<imagePrefix><imageName>:<image-tag>' This option allows configuring the '<imagePath>' portion of the above format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#image_path DataK8SOperatorTigeraIoInstallationV1Manifest#image_path}
  */
  readonly imagePath?: string;
  /**
  * ImagePrefix allows for the prefix part of an image to be specified. If specified then the given value will be used as a prefix on each image. If not specified or empty, no prefix will be used. A special case value, UseDefault, is supported to explicitly specify the default image prefix will be used for each image. Image format: '<registry><imagePath>/<imagePrefix><imageName>:<image-tag>' This option allows configuring the '<imagePrefix>' portion of the above format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#image_prefix DataK8SOperatorTigeraIoInstallationV1Manifest#image_prefix}
  */
  readonly imagePrefix?: string;
  /**
  * ImagePullSecrets is an array of references to container registry pull secrets to use. These are applied to all images to be pulled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#image_pull_secrets DataK8SOperatorTigeraIoInstallationV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * KubeletVolumePluginPath optionally specifies enablement of Calico CSI plugin. If not specified, CSI will be enabled by default. If set to 'None', CSI will be disabled. Default: /var/lib/kubelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#kubelet_volume_plugin_path DataK8SOperatorTigeraIoInstallationV1Manifest#kubelet_volume_plugin_path}
  */
  readonly kubeletVolumePluginPath?: string;
  /**
  * KubernetesProvider specifies a particular provider of the Kubernetes platform and enables provider-specific configuration. If the specified value is empty, the Operator will attempt to automatically determine the current provider. If the specified value is not empty, the Operator will still attempt auto-detection, but will additionally compare the auto-detected value to the specified value to confirm they match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#kubernetes_provider DataK8SOperatorTigeraIoInstallationV1Manifest#kubernetes_provider}
  */
  readonly kubernetesProvider?: string;
  /**
  * Logging Configuration for Components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#logging DataK8SOperatorTigeraIoInstallationV1Manifest#logging}
  */
  readonly logging?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecLogging;
  /**
  * NodeMetricsPort specifies which port calico/node serves prometheus metrics on. By default, metrics are not enabled. If specified, this overrides any FelixConfiguration resources which may exist. If omitted, then prometheus metrics may still be configured through FelixConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#node_metrics_port DataK8SOperatorTigeraIoInstallationV1Manifest#node_metrics_port}
  */
  readonly nodeMetricsPort?: number;
  /**
  * NodeUpdateStrategy can be used to customize the desired update strategy, such as the MaxUnavailable field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#node_update_strategy DataK8SOperatorTigeraIoInstallationV1Manifest#node_update_strategy}
  */
  readonly nodeUpdateStrategy?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategy;
  /**
  * NonPrivileged configures Calico to be run in non-privileged containers as non-root users where possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#non_privileged DataK8SOperatorTigeraIoInstallationV1Manifest#non_privileged}
  */
  readonly nonPrivileged?: string;
  /**
  * Registry is the default Docker registry used for component Docker images. If specified then the given value must end with a slash character ('/') and all images will be pulled from this registry. If not specified then the default registries will be used. A special case value, UseDefault, is supported to explicitly specify the default registries will be used. Image format: '<registry><imagePath>/<imagePrefix><imageName>:<image-tag>' This option allows configuring the '<registry>' portion of the above format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#registry DataK8SOperatorTigeraIoInstallationV1Manifest#registry}
  */
  readonly registry?: string;
  /**
  * Kubernetes Service CIDRs. Specifying this is required when using Calico for Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#service_cidrs DataK8SOperatorTigeraIoInstallationV1Manifest#service_cidrs}
  */
  readonly serviceCidrs?: string[];
  /**
  * Deprecated. Please use Installation.Spec.TyphaDeployment instead. TyphaAffinity allows configuration of node affinity characteristics for Typha pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#typha_affinity DataK8SOperatorTigeraIoInstallationV1Manifest#typha_affinity}
  */
  readonly typhaAffinity?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinity;
  /**
  * TyphaDeployment configures the typha Deployment. If used in conjunction with the deprecated ComponentResources or TyphaAffinity, then these overrides take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#typha_deployment DataK8SOperatorTigeraIoInstallationV1Manifest#typha_deployment}
  */
  readonly typhaDeployment?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment;
  /**
  * TyphaMetricsPort specifies which port calico/typha serves prometheus metrics on. By default, metrics are not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#typha_metrics_port DataK8SOperatorTigeraIoInstallationV1Manifest#typha_metrics_port}
  */
  readonly typhaMetricsPort?: number;
  /**
  * Variant is the product to install - one of Calico or TigeraSecureEnterprise Default: Calico
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#variant DataK8SOperatorTigeraIoInstallationV1Manifest#variant}
  */
  readonly variant?: string;
  /**
  * Windows Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_installation_v1_manifest#windows_nodes DataK8SOperatorTigeraIoInstallationV1Manifest#windows_nodes}
  */
  readonly windowsNodes?: DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes;
}

export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calico_kube_controllers_deployment: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeploymentToTerraform(struct!.calicoKubeControllersDeployment),
    calico_network: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetworkToTerraform(struct!.calicoNetwork),
    calico_node_daemon_set: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSetToTerraform(struct!.calicoNodeDaemonSet),
    calico_node_windows_daemon_set: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSetToTerraform(struct!.calicoNodeWindowsDaemonSet),
    calico_windows_upgrade_daemon_set: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSetToTerraform(struct!.calicoWindowsUpgradeDaemonSet),
    certificate_management: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagementToTerraform(struct!.certificateManagement),
    cni: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCniToTerraform(struct!.cni),
    component_resources: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResourcesToTerraform, false)(struct!.componentResources),
    control_plane_node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.controlPlaneNodeSelector),
    control_plane_replicas: cdktf.numberToTerraform(struct!.controlPlaneReplicas),
    control_plane_tolerations: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerationsToTerraform, false)(struct!.controlPlaneTolerations),
    csi_node_driver_daemon_set: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSetToTerraform(struct!.csiNodeDriverDaemonSet),
    fips_mode: cdktf.stringToTerraform(struct!.fipsMode),
    flex_volume_path: cdktf.stringToTerraform(struct!.flexVolumePath),
    image_path: cdktf.stringToTerraform(struct!.imagePath),
    image_prefix: cdktf.stringToTerraform(struct!.imagePrefix),
    image_pull_secrets: cdktf.listMapper(dataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    kubelet_volume_plugin_path: cdktf.stringToTerraform(struct!.kubeletVolumePluginPath),
    kubernetes_provider: cdktf.stringToTerraform(struct!.kubernetesProvider),
    logging: dataK8SOperatorTigeraIoInstallationV1ManifestSpecLoggingToTerraform(struct!.logging),
    node_metrics_port: cdktf.numberToTerraform(struct!.nodeMetricsPort),
    node_update_strategy: dataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategyToTerraform(struct!.nodeUpdateStrategy),
    non_privileged: cdktf.stringToTerraform(struct!.nonPrivileged),
    registry: cdktf.stringToTerraform(struct!.registry),
    service_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceCidrs),
    typha_affinity: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinityToTerraform(struct!.typhaAffinity),
    typha_deployment: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentToTerraform(struct!.typhaDeployment),
    typha_metrics_port: cdktf.numberToTerraform(struct!.typhaMetricsPort),
    variant: cdktf.stringToTerraform(struct!.variant),
    windows_nodes: dataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodesToTerraform(struct!.windowsNodes),
  }
}


export function dataK8SOperatorTigeraIoInstallationV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoInstallationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calico_kube_controllers_deployment: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeploymentToHclTerraform(struct!.calicoKubeControllersDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeployment",
    },
    calico_network: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetworkToHclTerraform(struct!.calicoNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetwork",
    },
    calico_node_daemon_set: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSetToHclTerraform(struct!.calicoNodeDaemonSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSet",
    },
    calico_node_windows_daemon_set: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSetToHclTerraform(struct!.calicoNodeWindowsDaemonSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSet",
    },
    calico_windows_upgrade_daemon_set: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSetToHclTerraform(struct!.calicoWindowsUpgradeDaemonSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSet",
    },
    certificate_management: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagementToHclTerraform(struct!.certificateManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagement",
    },
    cni: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCniToHclTerraform(struct!.cni),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCni",
    },
    component_resources: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResourcesToHclTerraform, false)(struct!.componentResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResourcesList",
    },
    control_plane_node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.controlPlaneNodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    control_plane_replicas: {
      value: cdktf.numberToHclTerraform(struct!.controlPlaneReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_plane_tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerationsToHclTerraform, false)(struct!.controlPlaneTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerationsList",
    },
    csi_node_driver_daemon_set: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSetToHclTerraform(struct!.csiNodeDriverDaemonSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSet",
    },
    fips_mode: {
      value: cdktf.stringToHclTerraform(struct!.fipsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flex_volume_path: {
      value: cdktf.stringToHclTerraform(struct!.flexVolumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_path: {
      value: cdktf.stringToHclTerraform(struct!.imagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_prefix: {
      value: cdktf.stringToHclTerraform(struct!.imagePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecretsList",
    },
    kubelet_volume_plugin_path: {
      value: cdktf.stringToHclTerraform(struct!.kubeletVolumePluginPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_provider: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecLogging",
    },
    node_metrics_port: {
      value: cdktf.numberToHclTerraform(struct!.nodeMetricsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_update_strategy: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategyToHclTerraform(struct!.nodeUpdateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategy",
    },
    non_privileged: {
      value: cdktf.stringToHclTerraform(struct!.nonPrivileged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    typha_affinity: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinityToHclTerraform(struct!.typhaAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinity",
    },
    typha_deployment: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentToHclTerraform(struct!.typhaDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment",
    },
    typha_metrics_port: {
      value: cdktf.numberToHclTerraform(struct!.typhaMetricsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    variant: {
      value: cdktf.stringToHclTerraform(struct!.variant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_nodes: {
      value: dataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodesToHclTerraform(struct!.windowsNodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoInstallationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoInstallationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calicoKubeControllersDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoKubeControllersDeployment = this._calicoKubeControllersDeployment?.internalValue;
    }
    if (this._calicoNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoNetwork = this._calicoNetwork?.internalValue;
    }
    if (this._calicoNodeDaemonSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoNodeDaemonSet = this._calicoNodeDaemonSet?.internalValue;
    }
    if (this._calicoNodeWindowsDaemonSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoNodeWindowsDaemonSet = this._calicoNodeWindowsDaemonSet?.internalValue;
    }
    if (this._calicoWindowsUpgradeDaemonSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoWindowsUpgradeDaemonSet = this._calicoWindowsUpgradeDaemonSet?.internalValue;
    }
    if (this._certificateManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateManagement = this._certificateManagement?.internalValue;
    }
    if (this._cni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cni = this._cni?.internalValue;
    }
    if (this._componentResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentResources = this._componentResources?.internalValue;
    }
    if (this._controlPlaneNodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneNodeSelector = this._controlPlaneNodeSelector;
    }
    if (this._controlPlaneReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneReplicas = this._controlPlaneReplicas;
    }
    if (this._controlPlaneTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneTolerations = this._controlPlaneTolerations?.internalValue;
    }
    if (this._csiNodeDriverDaemonSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiNodeDriverDaemonSet = this._csiNodeDriverDaemonSet?.internalValue;
    }
    if (this._fipsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipsMode = this._fipsMode;
    }
    if (this._flexVolumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolumePath = this._flexVolumePath;
    }
    if (this._imagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePath = this._imagePath;
    }
    if (this._imagePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePrefix = this._imagePrefix;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._kubeletVolumePluginPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletVolumePluginPath = this._kubeletVolumePluginPath;
    }
    if (this._kubernetesProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesProvider = this._kubernetesProvider;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._nodeMetricsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMetricsPort = this._nodeMetricsPort;
    }
    if (this._nodeUpdateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeUpdateStrategy = this._nodeUpdateStrategy?.internalValue;
    }
    if (this._nonPrivileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPrivileged = this._nonPrivileged;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._serviceCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidrs = this._serviceCidrs;
    }
    if (this._typhaAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typhaAffinity = this._typhaAffinity?.internalValue;
    }
    if (this._typhaDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typhaDeployment = this._typhaDeployment?.internalValue;
    }
    if (this._typhaMetricsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.typhaMetricsPort = this._typhaMetricsPort;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    if (this._windowsNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodes = this._windowsNodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calicoKubeControllersDeployment.internalValue = undefined;
      this._calicoNetwork.internalValue = undefined;
      this._calicoNodeDaemonSet.internalValue = undefined;
      this._calicoNodeWindowsDaemonSet.internalValue = undefined;
      this._calicoWindowsUpgradeDaemonSet.internalValue = undefined;
      this._certificateManagement.internalValue = undefined;
      this._cni.internalValue = undefined;
      this._componentResources.internalValue = undefined;
      this._controlPlaneNodeSelector = undefined;
      this._controlPlaneReplicas = undefined;
      this._controlPlaneTolerations.internalValue = undefined;
      this._csiNodeDriverDaemonSet.internalValue = undefined;
      this._fipsMode = undefined;
      this._flexVolumePath = undefined;
      this._imagePath = undefined;
      this._imagePrefix = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._kubeletVolumePluginPath = undefined;
      this._kubernetesProvider = undefined;
      this._logging.internalValue = undefined;
      this._nodeMetricsPort = undefined;
      this._nodeUpdateStrategy.internalValue = undefined;
      this._nonPrivileged = undefined;
      this._registry = undefined;
      this._serviceCidrs = undefined;
      this._typhaAffinity.internalValue = undefined;
      this._typhaDeployment.internalValue = undefined;
      this._typhaMetricsPort = undefined;
      this._variant = undefined;
      this._windowsNodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calicoKubeControllersDeployment.internalValue = value.calicoKubeControllersDeployment;
      this._calicoNetwork.internalValue = value.calicoNetwork;
      this._calicoNodeDaemonSet.internalValue = value.calicoNodeDaemonSet;
      this._calicoNodeWindowsDaemonSet.internalValue = value.calicoNodeWindowsDaemonSet;
      this._calicoWindowsUpgradeDaemonSet.internalValue = value.calicoWindowsUpgradeDaemonSet;
      this._certificateManagement.internalValue = value.certificateManagement;
      this._cni.internalValue = value.cni;
      this._componentResources.internalValue = value.componentResources;
      this._controlPlaneNodeSelector = value.controlPlaneNodeSelector;
      this._controlPlaneReplicas = value.controlPlaneReplicas;
      this._controlPlaneTolerations.internalValue = value.controlPlaneTolerations;
      this._csiNodeDriverDaemonSet.internalValue = value.csiNodeDriverDaemonSet;
      this._fipsMode = value.fipsMode;
      this._flexVolumePath = value.flexVolumePath;
      this._imagePath = value.imagePath;
      this._imagePrefix = value.imagePrefix;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._kubeletVolumePluginPath = value.kubeletVolumePluginPath;
      this._kubernetesProvider = value.kubernetesProvider;
      this._logging.internalValue = value.logging;
      this._nodeMetricsPort = value.nodeMetricsPort;
      this._nodeUpdateStrategy.internalValue = value.nodeUpdateStrategy;
      this._nonPrivileged = value.nonPrivileged;
      this._registry = value.registry;
      this._serviceCidrs = value.serviceCidrs;
      this._typhaAffinity.internalValue = value.typhaAffinity;
      this._typhaDeployment.internalValue = value.typhaDeployment;
      this._typhaMetricsPort = value.typhaMetricsPort;
      this._variant = value.variant;
      this._windowsNodes.internalValue = value.windowsNodes;
    }
  }

  // calico_kube_controllers_deployment - computed: false, optional: true, required: false
  private _calicoKubeControllersDeployment = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeploymentOutputReference(this, "calico_kube_controllers_deployment");
  public get calicoKubeControllersDeployment() {
    return this._calicoKubeControllersDeployment;
  }
  public putCalicoKubeControllersDeployment(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoKubeControllersDeployment) {
    this._calicoKubeControllersDeployment.internalValue = value;
  }
  public resetCalicoKubeControllersDeployment() {
    this._calicoKubeControllersDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoKubeControllersDeploymentInput() {
    return this._calicoKubeControllersDeployment.internalValue;
  }

  // calico_network - computed: false, optional: true, required: false
  private _calicoNetwork = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetworkOutputReference(this, "calico_network");
  public get calicoNetwork() {
    return this._calicoNetwork;
  }
  public putCalicoNetwork(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNetwork) {
    this._calicoNetwork.internalValue = value;
  }
  public resetCalicoNetwork() {
    this._calicoNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoNetworkInput() {
    return this._calicoNetwork.internalValue;
  }

  // calico_node_daemon_set - computed: false, optional: true, required: false
  private _calicoNodeDaemonSet = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSetOutputReference(this, "calico_node_daemon_set");
  public get calicoNodeDaemonSet() {
    return this._calicoNodeDaemonSet;
  }
  public putCalicoNodeDaemonSet(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeDaemonSet) {
    this._calicoNodeDaemonSet.internalValue = value;
  }
  public resetCalicoNodeDaemonSet() {
    this._calicoNodeDaemonSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoNodeDaemonSetInput() {
    return this._calicoNodeDaemonSet.internalValue;
  }

  // calico_node_windows_daemon_set - computed: false, optional: true, required: false
  private _calicoNodeWindowsDaemonSet = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSetOutputReference(this, "calico_node_windows_daemon_set");
  public get calicoNodeWindowsDaemonSet() {
    return this._calicoNodeWindowsDaemonSet;
  }
  public putCalicoNodeWindowsDaemonSet(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoNodeWindowsDaemonSet) {
    this._calicoNodeWindowsDaemonSet.internalValue = value;
  }
  public resetCalicoNodeWindowsDaemonSet() {
    this._calicoNodeWindowsDaemonSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoNodeWindowsDaemonSetInput() {
    return this._calicoNodeWindowsDaemonSet.internalValue;
  }

  // calico_windows_upgrade_daemon_set - computed: false, optional: true, required: false
  private _calicoWindowsUpgradeDaemonSet = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSetOutputReference(this, "calico_windows_upgrade_daemon_set");
  public get calicoWindowsUpgradeDaemonSet() {
    return this._calicoWindowsUpgradeDaemonSet;
  }
  public putCalicoWindowsUpgradeDaemonSet(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCalicoWindowsUpgradeDaemonSet) {
    this._calicoWindowsUpgradeDaemonSet.internalValue = value;
  }
  public resetCalicoWindowsUpgradeDaemonSet() {
    this._calicoWindowsUpgradeDaemonSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoWindowsUpgradeDaemonSetInput() {
    return this._calicoWindowsUpgradeDaemonSet.internalValue;
  }

  // certificate_management - computed: false, optional: true, required: false
  private _certificateManagement = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagementOutputReference(this, "certificate_management");
  public get certificateManagement() {
    return this._certificateManagement;
  }
  public putCertificateManagement(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCertificateManagement) {
    this._certificateManagement.internalValue = value;
  }
  public resetCertificateManagement() {
    this._certificateManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagementInput() {
    return this._certificateManagement.internalValue;
  }

  // cni - computed: false, optional: true, required: false
  private _cni = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCniOutputReference(this, "cni");
  public get cni() {
    return this._cni;
  }
  public putCni(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCni) {
    this._cni.internalValue = value;
  }
  public resetCni() {
    this._cni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni.internalValue;
  }

  // component_resources - computed: false, optional: true, required: false
  private _componentResources = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResourcesList(this, "component_resources", false);
  public get componentResources() {
    return this._componentResources;
  }
  public putComponentResources(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecComponentResources[] | cdktf.IResolvable) {
    this._componentResources.internalValue = value;
  }
  public resetComponentResources() {
    this._componentResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentResourcesInput() {
    return this._componentResources.internalValue;
  }

  // control_plane_node_selector - computed: false, optional: true, required: false
  private _controlPlaneNodeSelector?: { [key: string]: string }; 
  public get controlPlaneNodeSelector() {
    return this.getStringMapAttribute('control_plane_node_selector');
  }
  public set controlPlaneNodeSelector(value: { [key: string]: string }) {
    this._controlPlaneNodeSelector = value;
  }
  public resetControlPlaneNodeSelector() {
    this._controlPlaneNodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodeSelectorInput() {
    return this._controlPlaneNodeSelector;
  }

  // control_plane_replicas - computed: false, optional: true, required: false
  private _controlPlaneReplicas?: number; 
  public get controlPlaneReplicas() {
    return this.getNumberAttribute('control_plane_replicas');
  }
  public set controlPlaneReplicas(value: number) {
    this._controlPlaneReplicas = value;
  }
  public resetControlPlaneReplicas() {
    this._controlPlaneReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneReplicasInput() {
    return this._controlPlaneReplicas;
  }

  // control_plane_tolerations - computed: false, optional: true, required: false
  private _controlPlaneTolerations = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerationsList(this, "control_plane_tolerations", false);
  public get controlPlaneTolerations() {
    return this._controlPlaneTolerations;
  }
  public putControlPlaneTolerations(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecControlPlaneTolerations[] | cdktf.IResolvable) {
    this._controlPlaneTolerations.internalValue = value;
  }
  public resetControlPlaneTolerations() {
    this._controlPlaneTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneTolerationsInput() {
    return this._controlPlaneTolerations.internalValue;
  }

  // csi_node_driver_daemon_set - computed: false, optional: true, required: false
  private _csiNodeDriverDaemonSet = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSetOutputReference(this, "csi_node_driver_daemon_set");
  public get csiNodeDriverDaemonSet() {
    return this._csiNodeDriverDaemonSet;
  }
  public putCsiNodeDriverDaemonSet(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecCsiNodeDriverDaemonSet) {
    this._csiNodeDriverDaemonSet.internalValue = value;
  }
  public resetCsiNodeDriverDaemonSet() {
    this._csiNodeDriverDaemonSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiNodeDriverDaemonSetInput() {
    return this._csiNodeDriverDaemonSet.internalValue;
  }

  // fips_mode - computed: false, optional: true, required: false
  private _fipsMode?: string; 
  public get fipsMode() {
    return this.getStringAttribute('fips_mode');
  }
  public set fipsMode(value: string) {
    this._fipsMode = value;
  }
  public resetFipsMode() {
    this._fipsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsModeInput() {
    return this._fipsMode;
  }

  // flex_volume_path - computed: false, optional: true, required: false
  private _flexVolumePath?: string; 
  public get flexVolumePath() {
    return this.getStringAttribute('flex_volume_path');
  }
  public set flexVolumePath(value: string) {
    this._flexVolumePath = value;
  }
  public resetFlexVolumePath() {
    this._flexVolumePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumePathInput() {
    return this._flexVolumePath;
  }

  // image_path - computed: false, optional: true, required: false
  private _imagePath?: string; 
  public get imagePath() {
    return this.getStringAttribute('image_path');
  }
  public set imagePath(value: string) {
    this._imagePath = value;
  }
  public resetImagePath() {
    this._imagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePathInput() {
    return this._imagePath;
  }

  // image_prefix - computed: false, optional: true, required: false
  private _imagePrefix?: string; 
  public get imagePrefix() {
    return this.getStringAttribute('image_prefix');
  }
  public set imagePrefix(value: string) {
    this._imagePrefix = value;
  }
  public resetImagePrefix() {
    this._imagePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePrefixInput() {
    return this._imagePrefix;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // kubelet_volume_plugin_path - computed: false, optional: true, required: false
  private _kubeletVolumePluginPath?: string; 
  public get kubeletVolumePluginPath() {
    return this.getStringAttribute('kubelet_volume_plugin_path');
  }
  public set kubeletVolumePluginPath(value: string) {
    this._kubeletVolumePluginPath = value;
  }
  public resetKubeletVolumePluginPath() {
    this._kubeletVolumePluginPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletVolumePluginPathInput() {
    return this._kubeletVolumePluginPath;
  }

  // kubernetes_provider - computed: false, optional: true, required: false
  private _kubernetesProvider?: string; 
  public get kubernetesProvider() {
    return this.getStringAttribute('kubernetes_provider');
  }
  public set kubernetesProvider(value: string) {
    this._kubernetesProvider = value;
  }
  public resetKubernetesProvider() {
    this._kubernetesProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesProviderInput() {
    return this._kubernetesProvider;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // node_metrics_port - computed: false, optional: true, required: false
  private _nodeMetricsPort?: number; 
  public get nodeMetricsPort() {
    return this.getNumberAttribute('node_metrics_port');
  }
  public set nodeMetricsPort(value: number) {
    this._nodeMetricsPort = value;
  }
  public resetNodeMetricsPort() {
    this._nodeMetricsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetricsPortInput() {
    return this._nodeMetricsPort;
  }

  // node_update_strategy - computed: false, optional: true, required: false
  private _nodeUpdateStrategy = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategyOutputReference(this, "node_update_strategy");
  public get nodeUpdateStrategy() {
    return this._nodeUpdateStrategy;
  }
  public putNodeUpdateStrategy(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecNodeUpdateStrategy) {
    this._nodeUpdateStrategy.internalValue = value;
  }
  public resetNodeUpdateStrategy() {
    this._nodeUpdateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUpdateStrategyInput() {
    return this._nodeUpdateStrategy.internalValue;
  }

  // non_privileged - computed: false, optional: true, required: false
  private _nonPrivileged?: string; 
  public get nonPrivileged() {
    return this.getStringAttribute('non_privileged');
  }
  public set nonPrivileged(value: string) {
    this._nonPrivileged = value;
  }
  public resetNonPrivileged() {
    this._nonPrivileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPrivilegedInput() {
    return this._nonPrivileged;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // service_cidrs - computed: false, optional: true, required: false
  private _serviceCidrs?: string[]; 
  public get serviceCidrs() {
    return this.getListAttribute('service_cidrs');
  }
  public set serviceCidrs(value: string[]) {
    this._serviceCidrs = value;
  }
  public resetServiceCidrs() {
    this._serviceCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrsInput() {
    return this._serviceCidrs;
  }

  // typha_affinity - computed: false, optional: true, required: false
  private _typhaAffinity = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinityOutputReference(this, "typha_affinity");
  public get typhaAffinity() {
    return this._typhaAffinity;
  }
  public putTyphaAffinity(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaAffinity) {
    this._typhaAffinity.internalValue = value;
  }
  public resetTyphaAffinity() {
    this._typhaAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typhaAffinityInput() {
    return this._typhaAffinity.internalValue;
  }

  // typha_deployment - computed: false, optional: true, required: false
  private _typhaDeployment = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeploymentOutputReference(this, "typha_deployment");
  public get typhaDeployment() {
    return this._typhaDeployment;
  }
  public putTyphaDeployment(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecTyphaDeployment) {
    this._typhaDeployment.internalValue = value;
  }
  public resetTyphaDeployment() {
    this._typhaDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typhaDeploymentInput() {
    return this._typhaDeployment.internalValue;
  }

  // typha_metrics_port - computed: false, optional: true, required: false
  private _typhaMetricsPort?: number; 
  public get typhaMetricsPort() {
    return this.getNumberAttribute('typha_metrics_port');
  }
  public set typhaMetricsPort(value: number) {
    this._typhaMetricsPort = value;
  }
  public resetTyphaMetricsPort() {
    this._typhaMetricsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typhaMetricsPortInput() {
    return this._typhaMetricsPort;
  }

  // variant - computed: false, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }

  // windows_nodes - computed: false, optional: true, required: false
  private _windowsNodes = new DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodesOutputReference(this, "windows_nodes");
  public get windowsNodes() {
    return this._windowsNodes;
  }
  public putWindowsNodes(value: DataK8SOperatorTigeraIoInstallationV1ManifestSpecWindowsNodes) {
    this._windowsNodes.internalValue = value;
  }
  public resetWindowsNodes() {
    this._windowsNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodesInput() {
    return this._windowsNodes.internalValue;
  }
}
