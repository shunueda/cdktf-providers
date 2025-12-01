import * as cdktf from 'cdktf';
import { DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadata,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadataToTerraform,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadataToHclTerraform,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadataOutputReference,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSets,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSetsToTerraform,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSetsToHclTerraform,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSetsList } from './structs400'
import { DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuth,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuthToTerraform,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuthToHclTerraform,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuthOutputReference,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttp,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttpToTerraform,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttpToHclTerraform,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttpOutputReference,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoring,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoringToTerraform,
dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoringToHclTerraform,
DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoringOutputReference } from './structs0'
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#key DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#operator DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#values DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#match_expressions DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#match_labels DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsList",
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec {
  /**
  * An eviction is allowed if at most 'maxUnavailable' pods selected by 'selector' are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with 'minAvailable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#max_unavailable DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * An eviction is allowed if at least 'minAvailable' pods selected by 'selector' will still be available after the eviction, i.e. even in the absence of the evicted pod. So for example you can prevent all voluntary evictions by specifying '100%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#min_available DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#min_available}
  */
  readonly minAvailable?: string;
  /**
  * Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#selector DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#selector}
  */
  readonly selector?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector;
  /**
  * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type='Ready',status='True'. Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy. IfHealthyBudget policy means that running pods (status.phase='Running'), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction. AlwaysAllow policy means that all running pods (status.phase='Running'), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction. Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field. This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#unhealthy_pod_eviction_policy DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#unhealthy_pod_eviction_policy}
  */
  readonly unhealthyPodEvictionPolicy?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
    selector: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorToTerraform(struct!.selector),
    unhealthy_pod_eviction_policy: cdktf.stringToTerraform(struct!.unhealthyPodEvictionPolicy),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec | cdktf.IResolvable): any {
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
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector",
    },
    unhealthy_pod_eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyPodEvictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._unhealthyPodEvictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyPodEvictionPolicy = this._unhealthyPodEvictionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
      this._selector.internalValue = undefined;
      this._unhealthyPodEvictionPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._minAvailable = value.minAvailable;
      this._selector.internalValue = value.selector;
      this._unhealthyPodEvictionPolicy = value.unhealthyPodEvictionPolicy;
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

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: string; 
  public get minAvailable() {
    return this.getStringAttribute('min_available');
  }
  public set minAvailable(value: string) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // unhealthy_pod_eviction_policy - computed: false, optional: true, required: false
  private _unhealthyPodEvictionPolicy?: string; 
  public get unhealthyPodEvictionPolicy() {
    return this.getStringAttribute('unhealthy_pod_eviction_policy');
  }
  public set unhealthyPodEvictionPolicy(value: string) {
    this._unhealthyPodEvictionPolicy = value;
  }
  public resetUnhealthyPodEvictionPolicy() {
    this._unhealthyPodEvictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyPodEvictionPolicyInput() {
    return this._unhealthyPodEvictionPolicy;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget {
  /**
  * ObjectMeta is the metadata of the PDB. The name and namespace provided here are managed by ECK and will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#metadata DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#metadata}
  */
  readonly metadata?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadata;
  /**
  * Spec is the specification of the PDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#spec DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#spec}
  */
  readonly spec?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadataToTerraform(struct!.metadata),
    spec: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecToTerraform(struct!.spec),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadata",
    },
    spec: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetMetadata) {
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
  private _spec = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetSpec) {
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
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef {
  /**
  * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#namespace DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#service_name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRefToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRefToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef | cdktf.IResolvable): any {
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
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef | cdktf.IResolvable | undefined {
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
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serviceName = undefined;
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
      this._serviceName = value.serviceName;
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

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters {
  /**
  * ElasticsearchRef is a reference to an Elasticsearch cluster running within the same k8s cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#elasticsearch_ref DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#elasticsearch_ref}
  */
  readonly elasticsearchRef?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef;
  /**
  * Name is the name of the remote cluster as it is set in the Elasticsearch settings. The name is expected to be unique for each remote clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elasticsearch_ref: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRefToTerraform(struct!.elasticsearchRef),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elasticsearch_ref: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRefToHclTerraform(struct!.elasticsearchRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef",
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticsearchRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchRef = this._elasticsearchRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elasticsearchRef.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elasticsearchRef.internalValue = value.elasticsearchRef;
      this._name = value.name;
    }
  }

  // elasticsearch_ref - computed: false, optional: true, required: false
  private _elasticsearchRef = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRefOutputReference(this, "elasticsearch_ref");
  public get elasticsearchRef() {
    return this._elasticsearchRef;
  }
  public putElasticsearchRef(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersElasticsearchRef) {
    this._elasticsearchRef.internalValue = value;
  }
  public resetElasticsearchRef() {
    this._elasticsearchRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchRefInput() {
    return this._elasticsearchRef.internalValue;
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersOutputReference {
    return new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries {
  /**
  * Key is the key contained in the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#key DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#key}
  */
  readonly key: string;
  /**
  * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any '..' components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#path DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries | cdktf.IResolvable): any {
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesOutputReference {
    return new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings {
  /**
  * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#entries DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#entries}
  */
  readonly entries?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries[] | cdktf.IResolvable;
  /**
  * SecretName is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#secret_name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesToTerraform, false)(struct!.entries),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesList",
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries.internalValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries.internalValue = value.entries;
      this._secretName = value.secretName;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
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
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsOutputReference {
    return new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#annotations DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#finalizers DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#labels DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#namespace DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadataToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata | cdktf.IResolvable): any {
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


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadataToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata | cdktf.IResolvable): any {
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts {
  /**
  * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either: * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names). * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior- * 'kubernetes.io/ws' - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455 * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#app_protocol DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#name}
  */
  readonly name?: string;
  /**
  * The port on each node on which this service is exposed when type is NodePort or LoadBalancer. Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail. If not specified, a port will be allocated if this Service requires one. If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#node_port DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#node_port}
  */
  readonly nodePort?: number;
  /**
  * The port that will be exposed by this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#port DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Supports 'TCP', 'UDP', and 'SCTP'. Default is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#protocol DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#target_port DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#target_port}
  */
  readonly targetPort?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    node_port: cdktf.numberToTerraform(struct!.nodePort),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
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
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
      this._nodePort = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._nodePort = value.nodePort;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
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

  // node_port - computed: false, optional: true, required: false
  private _nodePort?: number; 
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }
  public set nodePort(value: number) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsOutputReference {
    return new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp {
  /**
  * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == 'ClientIP'. Default value is 10800(for 3 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#timeout_seconds DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIpToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig {
  /**
  * clientIP contains the configurations of Client IP based session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#client_ip DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#client_ip}
  */
  readonly clientIp?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIpToTerraform(struct!.clientIp),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct!.clientIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIpOutputReference(this, "client_ip");
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigClientIp) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec {
  /**
  * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer. Default is 'true'. It may be set to 'false' if the cluster load-balancer does not rely on NodePorts. If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#allocate_load_balancer_node_ports DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#allocate_load_balancer_node_ports}
  */
  readonly allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable;
  /**
  * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above). Valid values are 'None', empty string (''), or a valid IP address. Setting this to 'None' makes a 'headless service' (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. If this field is not specified, it will be initialized from the clusterIP field. If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value. This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#cluster_i_ps DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#cluster_i_ps}
  */
  readonly clusterIPs?: string[];
  /**
  * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above). Valid values are 'None', empty string (''), or a valid IP address. Setting this to 'None' makes a 'headless service' (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#cluster_ip DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#cluster_ip}
  */
  readonly clusterIp?: string;
  /**
  * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service. These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP. A common example is external load-balancers that are not part of the Kubernetes system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#external_i_ps DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#external_i_ps}
  */
  readonly externalIPs?: string[];
  /**
  * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved. Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires 'type' to be 'ExternalName'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#external_name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#external_name}
  */
  readonly externalName?: string;
  /**
  * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's 'externally-facing' addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to 'Local', the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, 'Cluster', uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get 'Cluster' semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#external_traffic_policy DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used. If not specified, a value will be automatically allocated. External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not. If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#health_check_node_port DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#health_check_node_port}
  */
  readonly healthCheckNodePort?: number;
  /**
  * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to 'Local', the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, 'Cluster', uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#internal_traffic_policy DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#internal_traffic_policy}
  */
  readonly internalTrafficPolicy?: string;
  /**
  * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are 'IPv4' and 'IPv6'. This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to 'headless' services. This field will be wiped when updating a Service to type ExternalName. This field may hold a maximum of two entries (dual-stack families, in either order). These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#ip_families DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#ip_families}
  */
  readonly ipFamilies?: string[];
  /**
  * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#ip_family_policy DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#ip_family_policy}
  */
  readonly ipFamilyPolicy?: string;
  /**
  * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. 'internal-vip' or 'example.com/internal-vip'. Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#load_balancer_class DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#load_balancer_class}
  */
  readonly loadBalancerClass?: string;
  /**
  * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#load_balancer_ip DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
  /**
  * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature.' More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#load_balancer_source_ranges DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string[];
  /**
  * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#ports DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#ports}
  */
  readonly ports?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts[] | cdktf.IResolvable;
  /**
  * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered 'ready' even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#publish_not_ready_addresses DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#publish_not_ready_addresses}
  */
  readonly publishNotReadyAddresses?: boolean | cdktf.IResolvable;
  /**
  * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#selector DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Supports 'ClientIP' and 'None'. Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#session_affinity DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * sessionAffinityConfig contains the configurations of session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#session_affinity_config DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#session_affinity_config}
  */
  readonly sessionAffinityConfig?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig;
  /**
  * TrafficDistribution offers a way to express preferences for how traffic is distributed to Service endpoints. Implementations can use this field as a hint, but are not required to guarantee strict adherence. If the field is not set, the implementation will apply its default routing strategy. If set to 'PreferClose', implementations should prioritize endpoints that are topologically close (e.g., same zone). This is an alpha field and requires enabling ServiceTrafficDistribution feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#traffic_distribution DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#traffic_distribution}
  */
  readonly trafficDistribution?: string;
  /**
  * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. 'ClusterIP' allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is 'None', no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. 'NodePort' builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. 'LoadBalancer' builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. 'ExternalName' aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#type DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_load_balancer_node_ports: cdktf.booleanToTerraform(struct!.allocateLoadBalancerNodePorts),
    cluster_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIPs),
    cluster_ip: cdktf.stringToTerraform(struct!.clusterIp),
    external_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalIPs),
    external_name: cdktf.stringToTerraform(struct!.externalName),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    health_check_node_port: cdktf.numberToTerraform(struct!.healthCheckNodePort),
    internal_traffic_policy: cdktf.stringToTerraform(struct!.internalTrafficPolicy),
    ip_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFamilies),
    ip_family_policy: cdktf.stringToTerraform(struct!.ipFamilyPolicy),
    load_balancer_class: cdktf.stringToTerraform(struct!.loadBalancerClass),
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
    load_balancer_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSourceRanges),
    ports: cdktf.listMapper(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsToTerraform, false)(struct!.ports),
    publish_not_ready_addresses: cdktf.booleanToTerraform(struct!.publishNotReadyAddresses),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_config: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigToTerraform(struct!.sessionAffinityConfig),
    traffic_distribution: cdktf.stringToTerraform(struct!.trafficDistribution),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_load_balancer_node_ports: {
      value: cdktf.booleanToHclTerraform(struct!.allocateLoadBalancerNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_ip: {
      value: cdktf.stringToHclTerraform(struct!.clusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_name: {
      value: cdktf.stringToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_node_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.internalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFamilies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_family_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFamilyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_class: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsList",
    },
    publish_not_ready_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.publishNotReadyAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity_config: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigToHclTerraform(struct!.sessionAffinityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig",
    },
    traffic_distribution: {
      value: cdktf.stringToHclTerraform(struct!.trafficDistribution),
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateLoadBalancerNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateLoadBalancerNodePorts = this._allocateLoadBalancerNodePorts;
    }
    if (this._clusterIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIPs = this._clusterIPs;
    }
    if (this._clusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIp = this._clusterIp;
    }
    if (this._externalIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIPs = this._externalIPs;
    }
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._healthCheckNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckNodePort = this._healthCheckNodePort;
    }
    if (this._internalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalTrafficPolicy = this._internalTrafficPolicy;
    }
    if (this._ipFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilies = this._ipFamilies;
    }
    if (this._ipFamilyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilyPolicy = this._ipFamilyPolicy;
    }
    if (this._loadBalancerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerClass = this._loadBalancerClass;
    }
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._publishNotReadyAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishNotReadyAddresses = this._publishNotReadyAddresses;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._sessionAffinityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityConfig = this._sessionAffinityConfig?.internalValue;
    }
    if (this._trafficDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDistribution = this._trafficDistribution;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = undefined;
      this._clusterIPs = undefined;
      this._clusterIp = undefined;
      this._externalIPs = undefined;
      this._externalName = undefined;
      this._externalTrafficPolicy = undefined;
      this._healthCheckNodePort = undefined;
      this._internalTrafficPolicy = undefined;
      this._ipFamilies = undefined;
      this._ipFamilyPolicy = undefined;
      this._loadBalancerClass = undefined;
      this._loadBalancerIp = undefined;
      this._loadBalancerSourceRanges = undefined;
      this._ports.internalValue = undefined;
      this._publishNotReadyAddresses = undefined;
      this._selector = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityConfig.internalValue = undefined;
      this._trafficDistribution = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = value.allocateLoadBalancerNodePorts;
      this._clusterIPs = value.clusterIPs;
      this._clusterIp = value.clusterIp;
      this._externalIPs = value.externalIPs;
      this._externalName = value.externalName;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._healthCheckNodePort = value.healthCheckNodePort;
      this._internalTrafficPolicy = value.internalTrafficPolicy;
      this._ipFamilies = value.ipFamilies;
      this._ipFamilyPolicy = value.ipFamilyPolicy;
      this._loadBalancerClass = value.loadBalancerClass;
      this._loadBalancerIp = value.loadBalancerIp;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
      this._ports.internalValue = value.ports;
      this._publishNotReadyAddresses = value.publishNotReadyAddresses;
      this._selector = value.selector;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityConfig.internalValue = value.sessionAffinityConfig;
      this._trafficDistribution = value.trafficDistribution;
      this._type = value.type;
    }
  }

  // allocate_load_balancer_node_ports - computed: false, optional: true, required: false
  private _allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable; 
  public get allocateLoadBalancerNodePorts() {
    return this.getBooleanAttribute('allocate_load_balancer_node_ports');
  }
  public set allocateLoadBalancerNodePorts(value: boolean | cdktf.IResolvable) {
    this._allocateLoadBalancerNodePorts = value;
  }
  public resetAllocateLoadBalancerNodePorts() {
    this._allocateLoadBalancerNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLoadBalancerNodePortsInput() {
    return this._allocateLoadBalancerNodePorts;
  }

  // cluster_i_ps - computed: false, optional: true, required: false
  private _clusterIPs?: string[]; 
  public get clusterIPs() {
    return this.getListAttribute('cluster_i_ps');
  }
  public set clusterIPs(value: string[]) {
    this._clusterIPs = value;
  }
  public resetClusterIPs() {
    this._clusterIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIPsInput() {
    return this._clusterIPs;
  }

  // cluster_ip - computed: false, optional: true, required: false
  private _clusterIp?: string; 
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }
  public set clusterIp(value: string) {
    this._clusterIp = value;
  }
  public resetClusterIp() {
    this._clusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInput() {
    return this._clusterIp;
  }

  // external_i_ps - computed: false, optional: true, required: false
  private _externalIPs?: string[]; 
  public get externalIPs() {
    return this.getListAttribute('external_i_ps');
  }
  public set externalIPs(value: string[]) {
    this._externalIPs = value;
  }
  public resetExternalIPs() {
    this._externalIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIPsInput() {
    return this._externalIPs;
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // health_check_node_port - computed: false, optional: true, required: false
  private _healthCheckNodePort?: number; 
  public get healthCheckNodePort() {
    return this.getNumberAttribute('health_check_node_port');
  }
  public set healthCheckNodePort(value: number) {
    this._healthCheckNodePort = value;
  }
  public resetHealthCheckNodePort() {
    this._healthCheckNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckNodePortInput() {
    return this._healthCheckNodePort;
  }

  // internal_traffic_policy - computed: false, optional: true, required: false
  private _internalTrafficPolicy?: string; 
  public get internalTrafficPolicy() {
    return this.getStringAttribute('internal_traffic_policy');
  }
  public set internalTrafficPolicy(value: string) {
    this._internalTrafficPolicy = value;
  }
  public resetInternalTrafficPolicy() {
    this._internalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTrafficPolicyInput() {
    return this._internalTrafficPolicy;
  }

  // ip_families - computed: false, optional: true, required: false
  private _ipFamilies?: string[]; 
  public get ipFamilies() {
    return this.getListAttribute('ip_families');
  }
  public set ipFamilies(value: string[]) {
    this._ipFamilies = value;
  }
  public resetIpFamilies() {
    this._ipFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamiliesInput() {
    return this._ipFamilies;
  }

  // ip_family_policy - computed: false, optional: true, required: false
  private _ipFamilyPolicy?: string; 
  public get ipFamilyPolicy() {
    return this.getStringAttribute('ip_family_policy');
  }
  public set ipFamilyPolicy(value: string) {
    this._ipFamilyPolicy = value;
  }
  public resetIpFamilyPolicy() {
    this._ipFamilyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyPolicyInput() {
    return this._ipFamilyPolicy;
  }

  // load_balancer_class - computed: false, optional: true, required: false
  private _loadBalancerClass?: string; 
  public get loadBalancerClass() {
    return this.getStringAttribute('load_balancer_class');
  }
  public set loadBalancerClass(value: string) {
    this._loadBalancerClass = value;
  }
  public resetLoadBalancerClass() {
    this._loadBalancerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerClassInput() {
    return this._loadBalancerClass;
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string[]; 
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string[]) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // publish_not_ready_addresses - computed: false, optional: true, required: false
  private _publishNotReadyAddresses?: boolean | cdktf.IResolvable; 
  public get publishNotReadyAddresses() {
    return this.getBooleanAttribute('publish_not_ready_addresses');
  }
  public set publishNotReadyAddresses(value: boolean | cdktf.IResolvable) {
    this._publishNotReadyAddresses = value;
  }
  public resetPublishNotReadyAddresses() {
    this._publishNotReadyAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishNotReadyAddressesInput() {
    return this._publishNotReadyAddresses;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_config - computed: false, optional: true, required: false
  private _sessionAffinityConfig = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfigOutputReference(this, "session_affinity_config");
  public get sessionAffinityConfig() {
    return this._sessionAffinityConfig;
  }
  public putSessionAffinityConfig(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecSessionAffinityConfig) {
    this._sessionAffinityConfig.internalValue = value;
  }
  public resetSessionAffinityConfig() {
    this._sessionAffinityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityConfigInput() {
    return this._sessionAffinityConfig.internalValue;
  }

  // traffic_distribution - computed: false, optional: true, required: false
  private _trafficDistribution?: string; 
  public get trafficDistribution() {
    return this.getStringAttribute('traffic_distribution');
  }
  public set trafficDistribution(value: string) {
    this._trafficDistribution = value;
  }
  public resetTrafficDistribution() {
    this._trafficDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionInput() {
    return this._trafficDistribution;
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
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService {
  /**
  * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#metadata DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#metadata}
  */
  readonly metadata?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata;
  /**
  * Spec is the specification of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#spec DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#spec}
  */
  readonly spec?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadataToTerraform(struct!.metadata),
    spec: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecToTerraform(struct!.spec),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata",
    },
    spec: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceMetadata) {
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
  private _spec = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceSpec) {
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
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate {
  /**
  * SecretName is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#secret_name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
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
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#config_map_name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#config_map_name}
  */
  readonly configMapName?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthoritiesToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthoritiesToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthoritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapName = value.configMapName;
    }
  }

  // config_map_name - computed: false, optional: true, required: false
  private _configMapName?: string; 
  public get configMapName() {
    return this.getStringAttribute('config_map_name');
  }
  public set configMapName(value: string) {
    this._configMapName = value;
  }
  public resetConfigMapName() {
    this._configMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapNameInput() {
    return this._configMapName;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates {
  /**
  * Disabled indicates that provisioning of the self-signed certificates should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#disabled DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificatesToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificatesToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames {
  /**
  * DNS is the DNS name of the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#dns DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#dns}
  */
  readonly dns?: string;
  /**
  * IP is the IP address of the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#ip DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._ip = value.ip;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesOutputReference {
    return new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls {
  /**
  * Certificate is a reference to a Kubernetes secret that contains the CA certificate and private key for generating node certificates. The referenced secret should contain the following: - 'ca.crt': The CA certificate in PEM format. - 'ca.key': The private key for the CA certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#certificate DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#certificate}
  */
  readonly certificate?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate;
  /**
  * CertificateAuthorities is a reference to a config map that contains one or more x509 certificates for trusted authorities in PEM format. The certificates need to be in a file called 'ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#certificate_authorities DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#certificate_authorities}
  */
  readonly certificateAuthorities?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities;
  /**
  * OtherNameSuffix when defined will be prefixed with the Pod name and used as the common name, and the first DNSName, as well as an OtherName required by Elasticsearch in the Subject Alternative Name extension of each Elasticsearch node's transport TLS certificate. Example: if set to 'node.cluster.local', the generated certificate will have its otherName set to '<pod_name>.node.cluster.local'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#other_name_suffix DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#other_name_suffix}
  */
  readonly otherNameSuffix?: string;
  /**
  * SelfSignedCertificates allows configuring the self-signed certificate generated by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#self_signed_certificates DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#self_signed_certificates}
  */
  readonly selfSignedCertificates?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates;
  /**
  * SubjectAlternativeNames is a list of SANs to include in the generated node transport TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#subject_alt_names DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames[] | cdktf.IResolvable;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateToTerraform(struct!.certificate),
    certificate_authorities: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthoritiesToTerraform(struct!.certificateAuthorities),
    other_name_suffix: cdktf.stringToTerraform(struct!.otherNameSuffix),
    self_signed_certificates: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificatesToTerraform(struct!.selfSignedCertificates),
    subject_alt_names: cdktf.listMapper(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate",
    },
    certificate_authorities: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthoritiesToHclTerraform(struct!.certificateAuthorities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities",
    },
    other_name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.otherNameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_signed_certificates: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificatesToHclTerraform(struct!.selfSignedCertificates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._certificateAuthorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorities = this._certificateAuthorities?.internalValue;
    }
    if (this._otherNameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherNameSuffix = this._otherNameSuffix;
    }
    if (this._selfSignedCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfSignedCertificates = this._selfSignedCertificates?.internalValue;
    }
    if (this._subjectAltNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._certificateAuthorities.internalValue = undefined;
      this._otherNameSuffix = undefined;
      this._selfSignedCertificates.internalValue = undefined;
      this._subjectAltNames.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._certificateAuthorities.internalValue = value.certificateAuthorities;
      this._otherNameSuffix = value.otherNameSuffix;
      this._selfSignedCertificates.internalValue = value.selfSignedCertificates;
      this._subjectAltNames.internalValue = value.subjectAltNames;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // certificate_authorities - computed: false, optional: true, required: false
  private _certificateAuthorities = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthoritiesOutputReference(this, "certificate_authorities");
  public get certificateAuthorities() {
    return this._certificateAuthorities;
  }
  public putCertificateAuthorities(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsCertificateAuthorities) {
    this._certificateAuthorities.internalValue = value;
  }
  public resetCertificateAuthorities() {
    this._certificateAuthorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthoritiesInput() {
    return this._certificateAuthorities.internalValue;
  }

  // other_name_suffix - computed: false, optional: true, required: false
  private _otherNameSuffix?: string; 
  public get otherNameSuffix() {
    return this.getStringAttribute('other_name_suffix');
  }
  public set otherNameSuffix(value: string) {
    this._otherNameSuffix = value;
  }
  public resetOtherNameSuffix() {
    this._otherNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNameSuffixInput() {
    return this._otherNameSuffix;
  }

  // self_signed_certificates - computed: false, optional: true, required: false
  private _selfSignedCertificates = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificatesOutputReference(this, "self_signed_certificates");
  public get selfSignedCertificates() {
    return this._selfSignedCertificates;
  }
  public putSelfSignedCertificates(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSelfSignedCertificates) {
    this._selfSignedCertificates.internalValue = value;
  }
  public resetSelfSignedCertificates() {
    this._selfSignedCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfSignedCertificatesInput() {
    return this._selfSignedCertificates.internalValue;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNamesList(this, "subject_alt_names", false);
  public get subjectAltNames() {
    return this._subjectAltNames;
  }
  public putSubjectAltNames(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsSubjectAltNames[] | cdktf.IResolvable) {
    this._subjectAltNames.internalValue = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames.internalValue;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport {
  /**
  * Service defines the template for the associated Kubernetes Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#service DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#service}
  */
  readonly service?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService;
  /**
  * TLS defines options for configuring TLS on the transport layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#tls DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#tls}
  */
  readonly tls?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceToTerraform(struct!.service),
    tls: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsToTerraform(struct!.tls),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService",
    },
    tls: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service.internalValue = value.service;
      this._tls.internalValue = value.tls;
    }
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget {
  /**
  * MaxSurge is the maximum number of new Pods that can be created exceeding the original number of Pods defined in the specification. MaxSurge is only taken into consideration when scaling up. Setting a negative value will disable the restriction. Defaults to unbounded if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#max_surge DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * MaxUnavailable is the maximum number of Pods that can be unavailable (not ready) during the update due to circumstances under the control of the operator. Setting a negative value will disable this restriction. Defaults to 1 if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#max_unavailable DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudgetToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudgetToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy {
  /**
  * ChangeBudget defines the constraints to consider when applying changes to the Elasticsearch cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#change_budget DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#change_budget}
  */
  readonly changeBudget?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_budget: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudgetToTerraform(struct!.changeBudget),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_budget: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudgetToHclTerraform(struct!.changeBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeBudget = this._changeBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changeBudget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changeBudget.internalValue = value.changeBudget;
    }
  }

  // change_budget - computed: false, optional: true, required: false
  private _changeBudget = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudgetOutputReference(this, "change_budget");
  public get changeBudget() {
    return this._changeBudget;
  }
  public putChangeBudget(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyChangeBudget) {
    this._changeBudget.internalValue = value;
  }
  public resetChangeBudget() {
    this._changeBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeBudgetInput() {
    return this._changeBudget.internalValue;
  }
}
export interface DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpec {
  /**
  * Auth contains user authentication and authorization security settings for Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#auth DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#auth}
  */
  readonly auth?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuth;
  /**
  * HTTP holds HTTP layer settings for Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#http DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#http}
  */
  readonly http?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttp;
  /**
  * Image is the Elasticsearch Docker image to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#image DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#image}
  */
  readonly image?: string;
  /**
  * Monitoring enables you to collect and ship log and monitoring data of this Elasticsearch cluster. See https://www.elastic.co/guide/en/elasticsearch/reference/current/monitor-elasticsearch-cluster.html. Metricbeat and Filebeat are deployed in the same Pod as sidecars and each one sends data to one or two different Elasticsearch monitoring clusters running in the same Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#monitoring DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoring;
  /**
  * NodeSets allow specifying groups of Elasticsearch nodes sharing the same configuration and Pod templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#node_sets DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#node_sets}
  */
  readonly nodeSets: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSets[] | cdktf.IResolvable;
  /**
  * PodDisruptionBudget provides access to the default Pod disruption budget for the Elasticsearch cluster. The default budget doesn't allow any Pod to be removed in case the cluster is not green or if there is only one node of type 'data' or 'master'. In all other cases the default PodDisruptionBudget sets 'minUnavailable' equal to the total number of nodes minus 1. To disable, set 'PodDisruptionBudget' to the empty value ('{}' in YAML).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#pod_disruption_budget DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget;
  /**
  * RemoteClusters enables you to establish uni-directional connections to a remote Elasticsearch cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#remote_clusters DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#remote_clusters}
  */
  readonly remoteClusters?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters[] | cdktf.IResolvable;
  /**
  * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#revision_history_limit DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#secure_settings DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#secure_settings}
  */
  readonly secureSettings?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings[] | cdktf.IResolvable;
  /**
  * ServiceAccountName is used to check access from the current resource to a resource (for ex. a remote Elasticsearch cluster) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#service_account_name DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Transport holds transport layer settings for Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#transport DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#transport}
  */
  readonly transport?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport;
  /**
  * UpdateStrategy specifies how updates to the cluster should be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#update_strategy DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy;
  /**
  * Version of Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#version DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#version}
  */
  readonly version: string;
  /**
  * VolumeClaimDeletePolicy sets the policy for handling deletion of PersistentVolumeClaims for all NodeSets. Possible values are DeleteOnScaledownOnly and DeleteOnScaledownAndClusterDeletion. Defaults to DeleteOnScaledownAndClusterDeletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elasticsearch_k8s_elastic_co_elasticsearch_v1_manifest#volume_claim_delete_policy DataK8SElasticsearchK8SElasticCoElasticsearchV1Manifest#volume_claim_delete_policy}
  */
  readonly volumeClaimDeletePolicy?: string;
}

export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecToTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuthToTerraform(struct!.auth),
    http: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttpToTerraform(struct!.http),
    image: cdktf.stringToTerraform(struct!.image),
    monitoring: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    node_sets: cdktf.listMapper(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSetsToTerraform, false)(struct!.nodeSets),
    pod_disruption_budget: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    remote_clusters: cdktf.listMapper(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersToTerraform, false)(struct!.remoteClusters),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    secure_settings: cdktf.listMapper(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsToTerraform, false)(struct!.secureSettings),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    transport: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportToTerraform(struct!.transport),
    update_strategy: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyToTerraform(struct!.updateStrategy),
    version: cdktf.stringToTerraform(struct!.version),
    volume_claim_delete_policy: cdktf.stringToTerraform(struct!.volumeClaimDeletePolicy),
  }
}


export function dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecToHclTerraform(struct?: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuth",
    },
    http: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttp",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoring",
    },
    node_sets: {
      value: cdktf.listMapperHcl(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSetsToHclTerraform, false)(struct!.nodeSets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSetsList",
    },
    pod_disruption_budget: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget",
    },
    remote_clusters: {
      value: cdktf.listMapperHcl(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersToHclTerraform, false)(struct!.remoteClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersList",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_settings: {
      value: cdktf.listMapperHcl(dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsToHclTerraform, false)(struct!.secureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport",
    },
    update_strategy: {
      value: dataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_claim_delete_policy: {
      value: cdktf.stringToHclTerraform(struct!.volumeClaimDeletePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._nodeSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSets = this._nodeSets?.internalValue;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._remoteClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteClusters = this._remoteClusters?.internalValue;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._secureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureSettings = this._secureSettings?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._volumeClaimDeletePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimDeletePolicy = this._volumeClaimDeletePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._http.internalValue = undefined;
      this._image = undefined;
      this._monitoring.internalValue = undefined;
      this._nodeSets.internalValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._remoteClusters.internalValue = undefined;
      this._revisionHistoryLimit = undefined;
      this._secureSettings.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._transport.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
      this._version = undefined;
      this._volumeClaimDeletePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._http.internalValue = value.http;
      this._image = value.image;
      this._monitoring.internalValue = value.monitoring;
      this._nodeSets.internalValue = value.nodeSets;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._remoteClusters.internalValue = value.remoteClusters;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._secureSettings.internalValue = value.secureSettings;
      this._serviceAccountName = value.serviceAccountName;
      this._transport.internalValue = value.transport;
      this._updateStrategy.internalValue = value.updateStrategy;
      this._version = value.version;
      this._volumeClaimDeletePolicy = value.volumeClaimDeletePolicy;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // node_sets - computed: false, optional: false, required: true
  private _nodeSets = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSetsList(this, "node_sets", false);
  public get nodeSets() {
    return this._nodeSets;
  }
  public putNodeSets(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecNodeSets[] | cdktf.IResolvable) {
    this._nodeSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSetsInput() {
    return this._nodeSets.internalValue;
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // remote_clusters - computed: false, optional: true, required: false
  private _remoteClusters = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClustersList(this, "remote_clusters", false);
  public get remoteClusters() {
    return this._remoteClusters;
  }
  public putRemoteClusters(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecRemoteClusters[] | cdktf.IResolvable) {
    this._remoteClusters.internalValue = value;
  }
  public resetRemoteClusters() {
    this._remoteClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteClustersInput() {
    return this._remoteClusters.internalValue;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // secure_settings - computed: false, optional: true, required: false
  private _secureSettings = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettingsList(this, "secure_settings", false);
  public get secureSettings() {
    return this._secureSettings;
  }
  public putSecureSettings(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecSecureSettings[] | cdktf.IResolvable) {
    this._secureSettings.internalValue = value;
  }
  public resetSecureSettings() {
    this._secureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSettingsInput() {
    return this._secureSettings.internalValue;
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

  // transport - computed: false, optional: true, required: false
  private _transport = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SElasticsearchK8SElasticCoElasticsearchV1ManifestSpecUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // volume_claim_delete_policy - computed: false, optional: true, required: false
  private _volumeClaimDeletePolicy?: string; 
  public get volumeClaimDeletePolicy() {
    return this.getStringAttribute('volume_claim_delete_policy');
  }
  public set volumeClaimDeletePolicy(value: string) {
    this._volumeClaimDeletePolicy = value;
  }
  public resetVolumeClaimDeletePolicy() {
    this._volumeClaimDeletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimDeletePolicyInput() {
    return this._volumeClaimDeletePolicy;
  }
}
