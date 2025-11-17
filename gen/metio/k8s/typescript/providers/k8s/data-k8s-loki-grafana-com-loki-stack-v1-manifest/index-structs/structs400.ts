import * as cdktf from 'cdktf';
import { DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactor,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactorToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactorToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactorOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributor,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributorToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributorToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributorOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGateway,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGatewayToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGatewayToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGatewayOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGateway,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGatewayToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGatewayToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGatewayOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngester,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngesterToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngesterToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngesterOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerier,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerierToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerierToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerierOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontend,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontendToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontendToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontendOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRing,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRingToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRingToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRingOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecLimits,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecLimitsToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecLimitsToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecLimitsOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecProxy,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecProxyToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecProxyToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecProxyOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecReplication,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecReplicationToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecReplicationToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecReplicationOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecRules,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecRulesToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecRulesToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecRulesOutputReference,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecStorage,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecStorageToTerraform,
dataK8SLokiGrafanaComLokiStackV1ManifestSpecStorageToHclTerraform,
DataK8SLokiGrafanaComLokiStackV1ManifestSpecStorageOutputReference } from './structs0'
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#key DataK8SLokiGrafanaComLokiStackV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#values DataK8SLokiGrafanaComLokiStackV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#match_expressions DataK8SLokiGrafanaComLokiStackV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#match_labels DataK8SLokiGrafanaComLokiStackV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#label_selector DataK8SLokiGrafanaComLokiStackV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#namespace_selector DataK8SLokiGrafanaComLokiStackV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#namespaces DataK8SLokiGrafanaComLokiStackV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#topology_key DataK8SLokiGrafanaComLokiStackV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    namespace_selector: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#pod_affinity_term DataK8SLokiGrafanaComLokiStackV1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#weight DataK8SLokiGrafanaComLokiStackV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#key DataK8SLokiGrafanaComLokiStackV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#values DataK8SLokiGrafanaComLokiStackV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#match_expressions DataK8SLokiGrafanaComLokiStackV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#match_labels DataK8SLokiGrafanaComLokiStackV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#key DataK8SLokiGrafanaComLokiStackV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#values DataK8SLokiGrafanaComLokiStackV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#match_expressions DataK8SLokiGrafanaComLokiStackV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#match_labels DataK8SLokiGrafanaComLokiStackV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#label_selector DataK8SLokiGrafanaComLokiStackV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#namespace_selector DataK8SLokiGrafanaComLokiStackV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#namespaces DataK8SLokiGrafanaComLokiStackV1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#topology_key DataK8SLokiGrafanaComLokiStackV1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    namespace_selector: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SLokiGrafanaComLokiStackV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SLokiGrafanaComLokiStackV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#effect DataK8SLokiGrafanaComLokiStackV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#key DataK8SLokiGrafanaComLokiStackV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#operator DataK8SLokiGrafanaComLokiStackV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#toleration_seconds DataK8SLokiGrafanaComLokiStackV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#value DataK8SLokiGrafanaComLokiStackV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable): any {
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


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable): any {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler {
  /**
  * NodeSelector defines the labels required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#node_selector DataK8SLokiGrafanaComLokiStackV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodAntiAffinity defines the pod anti affinity scheduling rules to schedule pods of a component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#pod_anti_affinity DataK8SLokiGrafanaComLokiStackV1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity;
  /**
  * Replicas defines the number of replica pods of the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#replicas DataK8SLokiGrafanaComLokiStackV1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Tolerations defines the tolerations required by a node to schedule the component onto it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#tolerations DataK8SLokiGrafanaComLokiStackV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_anti_affinity: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityToTerraform(struct!.podAntiAffinity),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._podAntiAffinity.internalValue = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
    }
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

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate {
  /**
  * Compactor defines the compaction component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#compactor DataK8SLokiGrafanaComLokiStackV1Manifest#compactor}
  */
  readonly compactor?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactor;
  /**
  * Distributor defines the distributor component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#distributor DataK8SLokiGrafanaComLokiStackV1Manifest#distributor}
  */
  readonly distributor?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributor;
  /**
  * Gateway defines the lokistack gateway component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#gateway DataK8SLokiGrafanaComLokiStackV1Manifest#gateway}
  */
  readonly gateway?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGateway;
  /**
  * IndexGateway defines the index gateway component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#index_gateway DataK8SLokiGrafanaComLokiStackV1Manifest#index_gateway}
  */
  readonly indexGateway?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGateway;
  /**
  * Ingester defines the ingester component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#ingester DataK8SLokiGrafanaComLokiStackV1Manifest#ingester}
  */
  readonly ingester?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngester;
  /**
  * Querier defines the querier component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#querier DataK8SLokiGrafanaComLokiStackV1Manifest#querier}
  */
  readonly querier?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerier;
  /**
  * QueryFrontend defines the query frontend component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#query_frontend DataK8SLokiGrafanaComLokiStackV1Manifest#query_frontend}
  */
  readonly queryFrontend?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontend;
  /**
  * Ruler defines the ruler component spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#ruler DataK8SLokiGrafanaComLokiStackV1Manifest#ruler}
  */
  readonly ruler?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compactor: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactorToTerraform(struct!.compactor),
    distributor: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributorToTerraform(struct!.distributor),
    gateway: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGatewayToTerraform(struct!.gateway),
    index_gateway: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGatewayToTerraform(struct!.indexGateway),
    ingester: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngesterToTerraform(struct!.ingester),
    querier: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerierToTerraform(struct!.querier),
    query_frontend: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontendToTerraform(struct!.queryFrontend),
    ruler: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerToTerraform(struct!.ruler),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compactor: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactorToHclTerraform(struct!.compactor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactor",
    },
    distributor: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributorToHclTerraform(struct!.distributor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributor",
    },
    gateway: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGateway",
    },
    index_gateway: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGatewayToHclTerraform(struct!.indexGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGateway",
    },
    ingester: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngesterToHclTerraform(struct!.ingester),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngester",
    },
    querier: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerierToHclTerraform(struct!.querier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerier",
    },
    query_frontend: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontendToHclTerraform(struct!.queryFrontend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontend",
    },
    ruler: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerToHclTerraform(struct!.ruler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactor = this._compactor?.internalValue;
    }
    if (this._distributor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributor = this._distributor?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._indexGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexGateway = this._indexGateway?.internalValue;
    }
    if (this._ingester?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingester = this._ingester?.internalValue;
    }
    if (this._querier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querier = this._querier?.internalValue;
    }
    if (this._queryFrontend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFrontend = this._queryFrontend?.internalValue;
    }
    if (this._ruler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruler = this._ruler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactor.internalValue = undefined;
      this._distributor.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._indexGateway.internalValue = undefined;
      this._ingester.internalValue = undefined;
      this._querier.internalValue = undefined;
      this._queryFrontend.internalValue = undefined;
      this._ruler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactor.internalValue = value.compactor;
      this._distributor.internalValue = value.distributor;
      this._gateway.internalValue = value.gateway;
      this._indexGateway.internalValue = value.indexGateway;
      this._ingester.internalValue = value.ingester;
      this._querier.internalValue = value.querier;
      this._queryFrontend.internalValue = value.queryFrontend;
      this._ruler.internalValue = value.ruler;
    }
  }

  // compactor - computed: false, optional: true, required: false
  private _compactor = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactorOutputReference(this, "compactor");
  public get compactor() {
    return this._compactor;
  }
  public putCompactor(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateCompactor) {
    this._compactor.internalValue = value;
  }
  public resetCompactor() {
    this._compactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactorInput() {
    return this._compactor.internalValue;
  }

  // distributor - computed: false, optional: true, required: false
  private _distributor = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributorOutputReference(this, "distributor");
  public get distributor() {
    return this._distributor;
  }
  public putDistributor(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateDistributor) {
    this._distributor.internalValue = value;
  }
  public resetDistributor() {
    this._distributor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributorInput() {
    return this._distributor.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // index_gateway - computed: false, optional: true, required: false
  private _indexGateway = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGatewayOutputReference(this, "index_gateway");
  public get indexGateway() {
    return this._indexGateway;
  }
  public putIndexGateway(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIndexGateway) {
    this._indexGateway.internalValue = value;
  }
  public resetIndexGateway() {
    this._indexGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexGatewayInput() {
    return this._indexGateway.internalValue;
  }

  // ingester - computed: false, optional: true, required: false
  private _ingester = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngesterOutputReference(this, "ingester");
  public get ingester() {
    return this._ingester;
  }
  public putIngester(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateIngester) {
    this._ingester.internalValue = value;
  }
  public resetIngester() {
    this._ingester.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingesterInput() {
    return this._ingester.internalValue;
  }

  // querier - computed: false, optional: true, required: false
  private _querier = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerierOutputReference(this, "querier");
  public get querier() {
    return this._querier;
  }
  public putQuerier(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQuerier) {
    this._querier.internalValue = value;
  }
  public resetQuerier() {
    this._querier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier.internalValue;
  }

  // query_frontend - computed: false, optional: true, required: false
  private _queryFrontend = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontendOutputReference(this, "query_frontend");
  public get queryFrontend() {
    return this._queryFrontend;
  }
  public putQueryFrontend(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateQueryFrontend) {
    this._queryFrontend.internalValue = value;
  }
  public resetQueryFrontend() {
    this._queryFrontend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrontendInput() {
    return this._queryFrontend.internalValue;
  }

  // ruler - computed: false, optional: true, required: false
  private _ruler = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRulerOutputReference(this, "ruler");
  public get ruler() {
    return this._ruler;
  }
  public putRuler(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateRuler) {
    this._ruler.internalValue = value;
  }
  public resetRuler() {
    this._ruler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulerInput() {
    return this._ruler.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa {
  /**
  * Key is the data key of a ConfigMap containing a CA certificate. It needs to be in the same namespace as the LokiStack custom resource. If empty, it defaults to 'service-ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#ca_key DataK8SLokiGrafanaComLokiStackV1Manifest#ca_key}
  */
  readonly caKey?: string;
  /**
  * CA is the name of a ConfigMap containing a CA certificate. It needs to be in the same namespace as the LokiStack custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#ca_name DataK8SLokiGrafanaComLokiStackV1Manifest#ca_name}
  */
  readonly caName: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCaToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_key: cdktf.stringToTerraform(struct!.caKey),
    ca_name: cdktf.stringToTerraform(struct!.caName),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCaToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_key: {
      value: cdktf.stringToHclTerraform(struct!.caKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_name: {
      value: cdktf.stringToHclTerraform(struct!.caName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.caKey = this._caKey;
    }
    if (this._caName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caName = this._caName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caKey = undefined;
      this._caName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caKey = value.caKey;
      this._caName = value.caName;
    }
  }

  // ca_key - computed: false, optional: true, required: false
  private _caKey?: string; 
  public get caKey() {
    return this.getStringAttribute('ca_key');
  }
  public set caKey(value: string) {
    this._caKey = value;
  }
  public resetCaKey() {
    this._caKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caKeyInput() {
    return this._caKey;
  }

  // ca_name - computed: false, optional: false, required: true
  private _caName?: string; 
  public get caName() {
    return this.getStringAttribute('ca_name');
  }
  public set caName(value: string) {
    this._caName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caNameInput() {
    return this._caName;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls {
  /**
  * CA defines the spec for the custom CA for tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#ca DataK8SLokiGrafanaComLokiStackV1Manifest#ca}
  */
  readonly ca: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCaToTerraform(struct!.ca),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
    }
  }

  // ca - computed: false, optional: false, required: true
  private _ca = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsCa) {
    this._ca.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa {
  /**
  * Key is the data key of a ConfigMap containing a CA certificate. It needs to be in the same namespace as the LokiStack custom resource. If empty, it defaults to 'service-ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#ca_key DataK8SLokiGrafanaComLokiStackV1Manifest#ca_key}
  */
  readonly caKey?: string;
  /**
  * CA is the name of a ConfigMap containing a CA certificate. It needs to be in the same namespace as the LokiStack custom resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#ca_name DataK8SLokiGrafanaComLokiStackV1Manifest#ca_name}
  */
  readonly caName: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCaToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_key: cdktf.stringToTerraform(struct!.caKey),
    ca_name: cdktf.stringToTerraform(struct!.caName),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCaToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_key: {
      value: cdktf.stringToHclTerraform(struct!.caKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_name: {
      value: cdktf.stringToHclTerraform(struct!.caName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.caKey = this._caKey;
    }
    if (this._caName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caName = this._caName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caKey = undefined;
      this._caName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caKey = value.caKey;
      this._caName = value.caName;
    }
  }

  // ca_key - computed: false, optional: true, required: false
  private _caKey?: string; 
  public get caKey() {
    return this.getStringAttribute('ca_key');
  }
  public set caKey(value: string) {
    this._caKey = value;
  }
  public resetCaKey() {
    this._caKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caKeyInput() {
    return this._caKey;
  }

  // ca_name - computed: false, optional: false, required: true
  private _caName?: string; 
  public get caName() {
    return this.getStringAttribute('ca_name');
  }
  public set caName(value: string) {
    this._caName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caNameInput() {
    return this._caName;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret {
  /**
  * Name of a secret in the namespace configured for tenant secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#name DataK8SLokiGrafanaComLokiStackV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecretToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecretToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable): any {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc {
  /**
  * Group claim field from ID Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#group_claim DataK8SLokiGrafanaComLokiStackV1Manifest#group_claim}
  */
  readonly groupClaim?: string;
  /**
  * IssuerCA defines the spec for the issuer CA for tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#issuer_ca DataK8SLokiGrafanaComLokiStackV1Manifest#issuer_ca}
  */
  readonly issuerCa?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa;
  /**
  * IssuerURL defines the URL for issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#issuer_url DataK8SLokiGrafanaComLokiStackV1Manifest#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * RedirectURL defines the URL for redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#redirect_url DataK8SLokiGrafanaComLokiStackV1Manifest#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Secret defines the spec for the clientID and clientSecret for tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#secret DataK8SLokiGrafanaComLokiStackV1Manifest#secret}
  */
  readonly secret: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret;
  /**
  * User claim field from ID Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#username_claim DataK8SLokiGrafanaComLokiStackV1Manifest#username_claim}
  */
  readonly usernameClaim?: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_claim: cdktf.stringToTerraform(struct!.groupClaim),
    issuer_ca: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCaToTerraform(struct!.issuerCa),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    secret: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecretToTerraform(struct!.secret),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_ca: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCaToHclTerraform(struct!.issuerCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupClaim = this._groupClaim;
    }
    if (this._issuerCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerCa = this._issuerCa?.internalValue;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupClaim = undefined;
      this._issuerCa.internalValue = undefined;
      this._issuerUrl = undefined;
      this._redirectUrl = undefined;
      this._secret.internalValue = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupClaim = value.groupClaim;
      this._issuerCa.internalValue = value.issuerCa;
      this._issuerUrl = value.issuerUrl;
      this._redirectUrl = value.redirectUrl;
      this._secret.internalValue = value.secret;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // group_claim - computed: false, optional: true, required: false
  private _groupClaim?: string; 
  public get groupClaim() {
    return this.getStringAttribute('group_claim');
  }
  public set groupClaim(value: string) {
    this._groupClaim = value;
  }
  public resetGroupClaim() {
    this._groupClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimInput() {
    return this._groupClaim;
  }

  // issuer_ca - computed: false, optional: true, required: false
  private _issuerCa = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCaOutputReference(this, "issuer_ca");
  public get issuerCa() {
    return this._issuerCa;
  }
  public putIssuerCa(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcIssuerCa) {
    this._issuerCa.internalValue = value;
  }
  public resetIssuerCa() {
    this._issuerCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCaInput() {
    return this._issuerCa.internalValue;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication {
  /**
  * TLSConfig defines the spec for the mTLS tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#m_tls DataK8SLokiGrafanaComLokiStackV1Manifest#m_tls}
  */
  readonly mTls?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls;
  /**
  * OIDC defines the spec for the OIDC tenant's authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#oidc DataK8SLokiGrafanaComLokiStackV1Manifest#oidc}
  */
  readonly oidc?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc;
  /**
  * TenantID defines the id of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#tenant_id DataK8SLokiGrafanaComLokiStackV1Manifest#tenant_id}
  */
  readonly tenantId: string;
  /**
  * TenantName defines the name of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#tenant_name DataK8SLokiGrafanaComLokiStackV1Manifest#tenant_name}
  */
  readonly tenantName: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    m_tls: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsToTerraform(struct!.mTls),
    oidc: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcToTerraform(struct!.oidc),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    m_tls: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsToHclTerraform(struct!.mTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls",
    },
    oidc: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mTls = this._mTls?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mTls.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._tenantId = undefined;
      this._tenantName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mTls.internalValue = value.mTls;
      this._oidc.internalValue = value.oidc;
      this._tenantId = value.tenantId;
      this._tenantName = value.tenantName;
    }
  }

  // m_tls - computed: false, optional: true, required: false
  private _mTls = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTlsOutputReference(this, "m_tls");
  public get mTls() {
    return this._mTls;
  }
  public putMTls(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationMTls) {
    this._mTls.internalValue = value;
  }
  public resetMTls() {
    this._mTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mTlsInput() {
    return this._mTls.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa {
  /**
  * URL defines the third-party endpoint for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#url DataK8SLokiGrafanaComLokiStackV1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpaToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpaToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects {
  /**
  * SubjectKind is a kind of LokiStack Gateway RBAC subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#kind DataK8SLokiGrafanaComLokiStackV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#name DataK8SLokiGrafanaComLokiStackV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
    }
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

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#name DataK8SLokiGrafanaComLokiStackV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#roles DataK8SLokiGrafanaComLokiStackV1Manifest#roles}
  */
  readonly roles: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#subjects DataK8SLokiGrafanaComLokiStackV1Manifest#subjects}
  */
  readonly subjects: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    subjects: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToTerraform, false)(struct!.subjects),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable): any {
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
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subjects: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsToHclTerraform, false)(struct!.subjects),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roles = undefined;
      this._subjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roles = value.roles;
      this._subjects.internalValue = value.subjects;
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // subjects - computed: false, optional: false, required: true
  private _subjects = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjectsList(this, "subjects", false);
  public get subjects() {
    return this._subjects;
  }
  public putSubjects(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsSubjects[] | cdktf.IResolvable) {
    this._subjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects.internalValue;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#name DataK8SLokiGrafanaComLokiStackV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#permissions DataK8SLokiGrafanaComLokiStackV1Manifest#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#resources DataK8SLokiGrafanaComLokiStackV1Manifest#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#tenants DataK8SLokiGrafanaComLokiStackV1Manifest#tenants}
  */
  readonly tenants: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenants),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
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
    tenants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenants),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._tenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
      this._resources = undefined;
      this._tenants = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
      this._resources = value.resources;
      this._tenants = value.tenants;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // tenants - computed: false, optional: false, required: true
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesOutputReference {
    return new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization {
  /**
  * OPA defines the spec for the third-party endpoint for tenant's authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#opa DataK8SLokiGrafanaComLokiStackV1Manifest#opa}
  */
  readonly opa?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa;
  /**
  * RoleBindings defines configuration to bind a set of roles to a set of subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#role_bindings DataK8SLokiGrafanaComLokiStackV1Manifest#role_bindings}
  */
  readonly roleBindings?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable;
  /**
  * Roles defines a set of permissions to interact with a tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#roles DataK8SLokiGrafanaComLokiStackV1Manifest#roles}
  */
  readonly roles?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opa: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpaToTerraform(struct!.opa),
    role_bindings: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsToTerraform, false)(struct!.roleBindings),
    roles: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesToTerraform, false)(struct!.roles),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opa: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpaToHclTerraform(struct!.opa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa",
    },
    role_bindings: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsToHclTerraform, false)(struct!.roleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsList",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opa = this._opa?.internalValue;
    }
    if (this._roleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBindings = this._roleBindings?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._opa.internalValue = undefined;
      this._roleBindings.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._opa.internalValue = value.opa;
      this._roleBindings.internalValue = value.roleBindings;
      this._roles.internalValue = value.roles;
    }
  }

  // opa - computed: false, optional: true, required: false
  private _opa = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpaOutputReference(this, "opa");
  public get opa() {
    return this._opa;
  }
  public putOpa(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOpa) {
    this._opa.internalValue = value;
  }
  public resetOpa() {
    this._opa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaInput() {
    return this._opa.internalValue;
  }

  // role_bindings - computed: false, optional: true, required: false
  private _roleBindings = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
  public putRoleBindings(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoleBindings[] | cdktf.IResolvable) {
    this._roleBindings.internalValue = value;
  }
  public resetRoleBindings() {
    this._roleBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingsInput() {
    return this._roleBindings.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift {
  /**
  * AdminGroups defines a list of groups, whose members are considered to have admin-privileges by the Loki Operator. Setting this to an empty array disables admin groups. By default the following groups are considered admin-groups: - system:cluster-admins - cluster-admin - dedicated-admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#admin_groups DataK8SLokiGrafanaComLokiStackV1Manifest#admin_groups}
  */
  readonly adminGroups?: string[];
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshiftToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroups),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshiftToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroups = this._adminGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminGroups = value.adminGroups;
    }
  }

  // admin_groups - computed: false, optional: true, required: false
  private _adminGroups?: string[]; 
  public get adminGroups() {
    return this.getListAttribute('admin_groups');
  }
  public set adminGroups(value: string[]) {
    this._adminGroups = value;
  }
  public resetAdminGroups() {
    this._adminGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupsInput() {
    return this._adminGroups;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants {
  /**
  * Authentication defines the lokistack-gateway component authentication configuration spec per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#authentication DataK8SLokiGrafanaComLokiStackV1Manifest#authentication}
  */
  readonly authentication?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable;
  /**
  * Authorization defines the lokistack-gateway component authorization configuration spec per tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#authorization DataK8SLokiGrafanaComLokiStackV1Manifest#authorization}
  */
  readonly authorization?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization;
  /**
  * Mode defines the mode in which lokistack-gateway component will be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#mode DataK8SLokiGrafanaComLokiStackV1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Openshift defines the configuration specific to Openshift modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#openshift DataK8SLokiGrafanaComLokiStackV1Manifest#openshift}
  */
  readonly openshift?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationToTerraform, false)(struct!.authentication),
    authorization: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationToTerraform(struct!.authorization),
    mode: cdktf.stringToTerraform(struct!.mode),
    openshift: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshiftToTerraform(struct!.openshift),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationToHclTerraform, false)(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationList",
    },
    authorization: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openshift: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshiftToHclTerraform(struct!.openshift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._openshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshift = this._openshift?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._mode = undefined;
      this._openshift.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._authorization.internalValue = value.authorization;
      this._mode = value.mode;
      this._openshift.internalValue = value.openshift;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // openshift - computed: false, optional: true, required: false
  private _openshift = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshiftOutputReference(this, "openshift");
  public get openshift() {
    return this._openshift;
  }
  public putOpenshift(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOpenshift) {
    this._openshift.internalValue = value;
  }
  public resetOpenshift() {
    this._openshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftInput() {
    return this._openshift.internalValue;
  }
}
export interface DataK8SLokiGrafanaComLokiStackV1ManifestSpec {
  /**
  * HashRing defines the spec for the distributed hash ring configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#hash_ring DataK8SLokiGrafanaComLokiStackV1Manifest#hash_ring}
  */
  readonly hashRing?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRing;
  /**
  * Limits defines the limits to be applied to log stream processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#limits DataK8SLokiGrafanaComLokiStackV1Manifest#limits}
  */
  readonly limits?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecLimits;
  /**
  * ManagementState defines if the CR should be managed by the operator or not. Default is managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#management_state DataK8SLokiGrafanaComLokiStackV1Manifest#management_state}
  */
  readonly managementState?: string;
  /**
  * Proxy defines the spec for the object proxy to configure cluster proxy information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#proxy DataK8SLokiGrafanaComLokiStackV1Manifest#proxy}
  */
  readonly proxy?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecProxy;
  /**
  * Replication defines the configuration for Loki data replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#replication DataK8SLokiGrafanaComLokiStackV1Manifest#replication}
  */
  readonly replication?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecReplication;
  /**
  * Deprecated: Please use replication.factor instead. This field will be removed in future versions of this CRD. ReplicationFactor defines the policy for log stream replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#replication_factor DataK8SLokiGrafanaComLokiStackV1Manifest#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Rules defines the spec for the ruler component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#rules DataK8SLokiGrafanaComLokiStackV1Manifest#rules}
  */
  readonly rules?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecRules;
  /**
  * Size defines one of the support Loki deployment scale out sizes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#size DataK8SLokiGrafanaComLokiStackV1Manifest#size}
  */
  readonly size: string;
  /**
  * Storage defines the spec for the object storage endpoint to store logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#storage DataK8SLokiGrafanaComLokiStackV1Manifest#storage}
  */
  readonly storage: DataK8SLokiGrafanaComLokiStackV1ManifestSpecStorage;
  /**
  * Storage class name defines the storage class for ingester/querier PVCs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#storage_class_name DataK8SLokiGrafanaComLokiStackV1Manifest#storage_class_name}
  */
  readonly storageClassName: string;
  /**
  * Template defines the resource/limits/tolerations/nodeselectors per component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#template DataK8SLokiGrafanaComLokiStackV1Manifest#template}
  */
  readonly template?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate;
  /**
  * Tenants defines the per-tenant authentication and authorization spec for the lokistack-gateway component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_loki_stack_v1_manifest#tenants DataK8SLokiGrafanaComLokiStackV1Manifest#tenants}
  */
  readonly tenants?: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants;
}

export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecToTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_ring: dataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRingToTerraform(struct!.hashRing),
    limits: dataK8SLokiGrafanaComLokiStackV1ManifestSpecLimitsToTerraform(struct!.limits),
    management_state: cdktf.stringToTerraform(struct!.managementState),
    proxy: dataK8SLokiGrafanaComLokiStackV1ManifestSpecProxyToTerraform(struct!.proxy),
    replication: dataK8SLokiGrafanaComLokiStackV1ManifestSpecReplicationToTerraform(struct!.replication),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    rules: dataK8SLokiGrafanaComLokiStackV1ManifestSpecRulesToTerraform(struct!.rules),
    size: cdktf.stringToTerraform(struct!.size),
    storage: dataK8SLokiGrafanaComLokiStackV1ManifestSpecStorageToTerraform(struct!.storage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    template: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateToTerraform(struct!.template),
    tenants: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsToTerraform(struct!.tenants),
  }
}


export function dataK8SLokiGrafanaComLokiStackV1ManifestSpecToHclTerraform(struct?: DataK8SLokiGrafanaComLokiStackV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_ring: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRingToHclTerraform(struct!.hashRing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRing",
    },
    limits: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecLimits",
    },
    management_state: {
      value: cdktf.stringToHclTerraform(struct!.managementState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecProxy",
    },
    replication: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecReplicationToHclTerraform(struct!.replication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecReplication",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecRules",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecStorage",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate",
    },
    tenants: {
      value: dataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsToHclTerraform(struct!.tenants),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComLokiStackV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComLokiStackV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashRing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashRing = this._hashRing?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._managementState !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementState = this._managementState;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._replication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replication = this._replication?.internalValue;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._tenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashRing.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._managementState = undefined;
      this._proxy.internalValue = undefined;
      this._replication.internalValue = undefined;
      this._replicationFactor = undefined;
      this._rules.internalValue = undefined;
      this._size = undefined;
      this._storage.internalValue = undefined;
      this._storageClassName = undefined;
      this._template.internalValue = undefined;
      this._tenants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashRing.internalValue = value.hashRing;
      this._limits.internalValue = value.limits;
      this._managementState = value.managementState;
      this._proxy.internalValue = value.proxy;
      this._replication.internalValue = value.replication;
      this._replicationFactor = value.replicationFactor;
      this._rules.internalValue = value.rules;
      this._size = value.size;
      this._storage.internalValue = value.storage;
      this._storageClassName = value.storageClassName;
      this._template.internalValue = value.template;
      this._tenants.internalValue = value.tenants;
    }
  }

  // hash_ring - computed: false, optional: true, required: false
  private _hashRing = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRingOutputReference(this, "hash_ring");
  public get hashRing() {
    return this._hashRing;
  }
  public putHashRing(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecHashRing) {
    this._hashRing.internalValue = value;
  }
  public resetHashRing() {
    this._hashRing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashRingInput() {
    return this._hashRing.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // management_state - computed: false, optional: true, required: false
  private _managementState?: string; 
  public get managementState() {
    return this.getStringAttribute('management_state');
  }
  public set managementState(value: string) {
    this._managementState = value;
  }
  public resetManagementState() {
    this._managementState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStateInput() {
    return this._managementState;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // replication - computed: false, optional: true, required: false
  private _replication = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecReplicationOutputReference(this, "replication");
  public get replication() {
    return this._replication;
  }
  public putReplication(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecReplication) {
    this._replication.internalValue = value;
  }
  public resetReplication() {
    this._replication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication.internalValue;
  }

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // storage_class_name - computed: false, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants = new DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenantsOutputReference(this, "tenants");
  public get tenants() {
    return this._tenants;
  }
  public putTenants(value: DataK8SLokiGrafanaComLokiStackV1ManifestSpecTenants) {
    this._tenants.internalValue = value;
  }
  public resetTenants() {
    this._tenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants.internalValue;
  }
}
