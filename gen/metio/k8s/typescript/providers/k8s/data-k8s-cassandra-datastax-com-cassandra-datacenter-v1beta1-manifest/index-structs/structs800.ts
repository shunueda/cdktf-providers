import * as cdktf from 'cdktf';
import { DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinity,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinityToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinityToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinityOutputReference,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpec,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpecToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpecToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpecOutputReference } from './structs400'
import { DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfig,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfigToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfigToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfigOutputReference,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdc,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdcToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdcToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdcOutputReference,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResources,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResourcesToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResourcesToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResourcesOutputReference,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloads,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloadsToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloadsToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloadsOutputReference,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuth,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuthToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuthToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuthOutputReference,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworking,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworkingToTerraform,
dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworkingToHclTerraform,
DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworkingOutputReference } from './structs0'
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#label_selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_label_keys DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mismatch_label_keys DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespace_selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespaces DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#topology_key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pod_affinity_term DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#weight DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#label_selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_label_keys DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mismatch_label_keys DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespace_selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespaces DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#topology_key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#node_affinity DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pod_affinity DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pod_anti_affinity DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity | cdktf.IResolvable | undefined) {
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
  private _nodeAffinity = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityNodeAffinity) {
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
  private _podAffinity = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAffinity) {
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
  private _podAntiAffinity = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityPodAntiAffinity) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks {
  /**
  * Affinity rules to set for this rack only. Merged with values from PodTemplateSpec Affinity as well as NodeAffinityLabels. If you wish to override all the default PodAntiAffinity rules, set allowMultipleWorkers to true, otherwise defaults are applied and then these Affinity settings are merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#affinity DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#affinity}
  */
  readonly affinity?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity;
  /**
  * The rack name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * NodeAffinityLabels to pin the rack, using node affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#node_affinity_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#node_affinity_labels}
  */
  readonly nodeAffinityLabels?: { [key: string]: string };
  /**
  * Deprecated. Use nodeAffinityLabels instead. DeprecatedZone name to pin the rack, using node affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#zone DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityToTerraform(struct!.affinity),
    name: cdktf.stringToTerraform(struct!.name),
    node_affinity_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinityLabels),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_affinity_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinityLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeAffinityLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityLabels = this._nodeAffinityLabels;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._name = undefined;
      this._nodeAffinityLabels = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._name = value.name;
      this._nodeAffinityLabels = value.nodeAffinityLabels;
      this._zone = value.zone;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
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

  // node_affinity_labels - computed: false, optional: true, required: false
  private _nodeAffinityLabels?: { [key: string]: string }; 
  public get nodeAffinityLabels() {
    return this.getStringMapAttribute('node_affinity_labels');
  }
  public set nodeAffinityLabels(value: { [key: string]: string }) {
    this._nodeAffinityLabels = value;
  }
  public resetNodeAffinityLabels() {
    this._nodeAffinityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityLabelsInput() {
    return this._nodeAffinityLabels;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#claims DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#limits DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#requests DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_group DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#kind DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_group DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#kind DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespace DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#limits DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#requests DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResourcesToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResourcesToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#access_modes DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#data_source DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#data_source_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resources DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_class_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_attributes_class_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef",
    },
    resources: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources",
    },
    selector: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSource) {
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
  private _dataSourceRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecDataSourceRef) {
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
  private _resources = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecResources) {
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
  private _selector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecSelector) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#partition DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_id DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStoreToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStoreToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk {
  /**
  * cachingMode is the Host Caching mode: None, Read Only, Read Write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#caching_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#caching_mode}
  */
  readonly cachingMode?: string;
  /**
  * diskName is the Name of the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#disk_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#disk_name}
  */
  readonly diskName: string;
  /**
  * diskURI is the URI of data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#disk_uri DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#disk_uri}
  */
  readonly diskUri: string;
  /**
  * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * kind expected values are Shared: multiple blob disks per storage account Dedicated: single blob disk per storage account Managed: azure managed data disk (only in managed availability set). defaults to shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#kind DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDiskToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDiskToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile {
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of secret that contains Azure Storage Account Name and Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * shareName is the azure share Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#share_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#share_name}
  */
  readonly shareName: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFileToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFileToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs {
  /**
  * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#monitors DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_file DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_file}
  */
  readonly secretFile?: string;
  /**
  * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef;
  /**
  * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#user DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef;
  /**
  * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_id DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRefToTerraform(struct!.secretRef),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#default_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#items DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#optional DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi {
  /**
  * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#driver DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType to mount. Ex. 'ext4', 'xfs', 'ntfs'. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#node_publish_secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef;
  /**
  * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_attributes DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    node_publish_secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRefToHclTerraform(struct!.nodePublishSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi | cdktf.IResolvable | undefined) {
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
  private _nodePublishSecretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiNodePublishSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_version DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#field_path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#container_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#divisor DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resource DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#field_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resource_field_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef",
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsResourceFieldRef) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#default_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Items is a list of downward API volume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#items DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#medium DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#size_limit DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDirToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDirToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#annotations DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#finalizers DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespace DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadataToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadataToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_group DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#kind DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_group DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#kind DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespace DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#limits DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#requests DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#access_modes DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#data_source DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#data_source_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resources DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_class_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_attributes_class_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource) {
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
  private _dataSourceRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef) {
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
  private _resources = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecResources) {
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
  private _selector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecSelector) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#metadata DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata;
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#spec DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata",
    },
    spec: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateMetadata) {
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
  private _spec = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_claim_template DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral | cdktf.IResolvable | undefined) {
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
  private _volumeClaimTemplate = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralVolumeClaimTemplate) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#lun DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#target_ww_ns DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#wwids DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFcToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFcToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#driver DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#options DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#dataset_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#dataset_uuid DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlockerToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlockerToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#partition DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pd_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDiskToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDiskToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#directory DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#repository DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#revision DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepoToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepoToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#endpoints DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPathToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPathToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#chap_auth_discovery DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#chap_auth_session DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#initiator_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#iqn DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#iscsi_interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#lun DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#portals DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#target_portal DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi | cdktf.IResolvable): any {
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
    secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#server DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#claim_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaimToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaimToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pd_id DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDiskToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDiskToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_id DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolumeToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolumeToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle {
  /**
  * Select all ClusterTrustBundles that match this label selector. Only has effect if signerName is set. Mutually-exclusive with name. If unset, interpreted as 'match nothing'. If set but empty, interpreted as 'match everything'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#label_selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Select a single ClusterTrustBundle by object name. Mutually-exclusive with signerName and labelSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available. If using name, then the named ClusterTrustBundle is allowed not to exist. If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#optional DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Relative path from the volume root to write the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name. The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#signer_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#items DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#optional DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_version DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#field_path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#container_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#divisor DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resource DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#field_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resource_field_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#items DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#items DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#optional DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#audience DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#expiration_seconds DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#cluster_trust_bundle DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#config_map DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#downward_api DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#service_account_token DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources | cdktf.IResolvable | undefined) {
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
  private _clusterTrustBundle = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesClusterTrustBundle) {
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
  private _configMap = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesServiceAccountToken) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#default_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#sources DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#sources}
  */
  readonly sources?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#group DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#registry DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#tenant DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#user DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyteToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyteToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#image DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#keyring DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#monitors DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pool DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#user DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#gateway DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#protection_domain DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#ssl_enabled DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_pool DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#system DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#default_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#items DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#items}
  */
  readonly items?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#optional DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_namespace DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosSecretRef) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fs_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_policy_id DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_policy_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolumeToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolumeToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#aws_elastic_block_store DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#azure_disk DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#azure_file DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#cephfs DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#cinder DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#cinder}
  */
  readonly cinder?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#config_map DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#csi DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#csi}
  */
  readonly csi?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#downward_api DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#empty_dir DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#ephemeral DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#fc DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#fc}
  */
  readonly fc?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#flex_volume DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#flocker DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#flocker}
  */
  readonly flocker?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#gce_persistent_disk DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#git_repo DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#glusterfs DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#host_path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#host_path}
  */
  readonly hostPath?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#iscsi DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#nfs DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#nfs}
  */
  readonly nfs?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#persistent_volume_claim DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#photon_persistent_disk DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#portworx_volume DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#projected DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#projected}
  */
  readonly projected?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#quobyte DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#rbd DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#rbd}
  */
  readonly rbd?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#scale_io DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storageos DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storageos}
  */
  readonly storageos?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#vsphere_volume DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderToTerraform(struct!.cinder),
    config_map: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapToTerraform(struct!.configMap),
    csi: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiToTerraform(struct!.csi),
    downward_api: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFcToTerraform(struct!.fc),
    flex_volume: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiToTerraform(struct!.iscsi),
    nfs: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedToTerraform(struct!.projected),
    quobyte: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdToTerraform(struct!.rbd),
    scale_io: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretToTerraform(struct!.secret),
    storageos: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk",
    },
    azure_file: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile",
    },
    cephfs: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs",
    },
    cinder: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder",
    },
    config_map: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap",
    },
    csi: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi",
    },
    downward_api: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi",
    },
    empty_dir: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir",
    },
    ephemeral: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral",
    },
    fc: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc",
    },
    flex_volume: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume",
    },
    flocker: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo",
    },
    glusterfs: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs",
    },
    host_path: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath",
    },
    iscsi: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi",
    },
    nfs: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs",
    },
    persistent_volume_claim: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume",
    },
    projected: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected",
    },
    quobyte: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte",
    },
    rbd: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd",
    },
    scale_io: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo",
    },
    secret: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret",
    },
    storageos: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos",
    },
    vsphere_volume: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureDisk) {
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
  private _azureFile = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceAzureFile) {
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
  private _cephfs = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCephfs) {
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
  private _cinder = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCinder) {
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
  private _configMap = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceConfigMap) {
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
  private _csi = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceCsi) {
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
  private _downwardApi = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceDownwardApi) {
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
  private _emptyDir = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEmptyDir) {
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
  private _ephemeral = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceEphemeral) {
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
  private _fc = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFc) {
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
  private _flexVolume = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlexVolume) {
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
  private _flocker = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceFlocker) {
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
  private _gcePersistentDisk = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGcePersistentDisk) {
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
  private _gitRepo = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGitRepo) {
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
  private _glusterfs = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceGlusterfs) {
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
  private _hostPath = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceHostPath) {
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
  private _iscsi = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceNfs) {
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
  private _persistentVolumeClaim = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourcePortworxVolume) {
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
  private _projected = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceProjected) {
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
  private _quobyte = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceQuobyte) {
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
  private _rbd = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceRbd) {
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
  private _scaleIo = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceScaleIo) {
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
  private _secret = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceSecret) {
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
  private _storageos = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceStorageos) {
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
  private _vsphereVolume = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceVsphereVolume) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes {
  /**
  * Mount path into cassandra container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#mount_path DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Name of the pvc / volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * PVCSpec is a persistent volume claim spec. Either this or VolumeSource is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pvc_spec DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pvc_spec}
  */
  readonly pvcSpec?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec;
  /**
  * VolumeSource to mount the volume from (such as ConfigMap / Secret). This or PVCSpec is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_source DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_source}
  */
  readonly volumeSource?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    pvc_spec: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecToTerraform(struct!.pvcSpec),
    volume_source: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceToTerraform(struct!.volumeSource),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    pvc_spec: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecToHclTerraform(struct!.pvcSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec",
    },
    volume_source: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceToHclTerraform(struct!.volumeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pvcSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcSpec = this._pvcSpec?.internalValue;
    }
    if (this._volumeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSource = this._volumeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._pvcSpec.internalValue = undefined;
      this._volumeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._pvcSpec.internalValue = value.pvcSpec;
      this._volumeSource.internalValue = value.volumeSource;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // pvc_spec - computed: false, optional: true, required: false
  private _pvcSpec = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpecOutputReference(this, "pvc_spec");
  public get pvcSpec() {
    return this._pvcSpec;
  }
  public putPvcSpec(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesPvcSpec) {
    this._pvcSpec.internalValue = value;
  }
  public resetPvcSpec() {
    this._pvcSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcSpecInput() {
    return this._pvcSpec.internalValue;
  }

  // volume_source - computed: false, optional: true, required: false
  private _volumeSource = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSourceOutputReference(this, "volume_source");
  public get volumeSource() {
    return this._volumeSource;
  }
  public putVolumeSource(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesVolumeSource) {
    this._volumeSource.internalValue = value;
  }
  public resetVolumeSource() {
    this._volumeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSourceInput() {
    return this._volumeSource.internalValue;
  }
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_group DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#kind DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#api_group DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#kind DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#namespace DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRefToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRefToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#limits DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#requests DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResourcesToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResourcesToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#values DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_expressions DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#match_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#access_modes DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#data_source DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#data_source_ref DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resources DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_class_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_attributes_class_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_mode DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#volume_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec | cdktf.IResolvable): any {
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
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef",
    },
    resources: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources",
    },
    selector: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSource) {
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
  private _dataSourceRef = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecDataSourceRef) {
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
  private _resources = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecResources) {
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
  private _selector = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecSelector) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#additional_volumes DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#additional_volumes}
  */
  readonly additionalVolumes?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes[] | cdktf.IResolvable;
  /**
  * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#cassandra_data_volume_claim_spec DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#cassandra_data_volume_claim_spec}
  */
  readonly cassandraDataVolumeClaimSpec?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_volumes: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesToTerraform, false)(struct!.additionalVolumes),
    cassandra_data_volume_claim_spec: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecToTerraform(struct!.cassandraDataVolumeClaimSpec),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_volumes: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesToHclTerraform, false)(struct!.additionalVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesList",
    },
    cassandra_data_volume_claim_spec: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecToHclTerraform(struct!.cassandraDataVolumeClaimSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVolumes = this._additionalVolumes?.internalValue;
    }
    if (this._cassandraDataVolumeClaimSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cassandraDataVolumeClaimSpec = this._cassandraDataVolumeClaimSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalVolumes.internalValue = undefined;
      this._cassandraDataVolumeClaimSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalVolumes.internalValue = value.additionalVolumes;
      this._cassandraDataVolumeClaimSpec.internalValue = value.cassandraDataVolumeClaimSpec;
    }
  }

  // additional_volumes - computed: false, optional: true, required: false
  private _additionalVolumes = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumesList(this, "additional_volumes", false);
  public get additionalVolumes() {
    return this._additionalVolumes;
  }
  public putAdditionalVolumes(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigAdditionalVolumes[] | cdktf.IResolvable) {
    this._additionalVolumes.internalValue = value;
  }
  public resetAdditionalVolumes() {
    this._additionalVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVolumesInput() {
    return this._additionalVolumes.internalValue;
  }

  // cassandra_data_volume_claim_spec - computed: false, optional: true, required: false
  private _cassandraDataVolumeClaimSpec = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpecOutputReference(this, "cassandra_data_volume_claim_spec");
  public get cassandraDataVolumeClaimSpec() {
    return this._cassandraDataVolumeClaimSpec;
  }
  public putCassandraDataVolumeClaimSpec(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigCassandraDataVolumeClaimSpec) {
    this._cassandraDataVolumeClaimSpec.internalValue = value;
  }
  public resetCassandraDataVolumeClaimSpec() {
    this._cassandraDataVolumeClaimSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraDataVolumeClaimSpecInput() {
    return this._cassandraDataVolumeClaimSpec.internalValue;
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#claims DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#limits DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#requests DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsList",
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#effect DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#key DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#operator DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#toleration_seconds DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#value DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#secret_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#superuser DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#superuser}
  */
  readonly superuser: boolean | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    superuser: cdktf.booleanToTerraform(struct!.superuser),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers | cdktf.IResolvable): any {
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
    superuser: {
      value: cdktf.booleanToHclTerraform(struct!.superuser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._superuser !== undefined) {
      hasAnyValues = true;
      internalValueResult.superuser = this._superuser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
      this._superuser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
      this._superuser = value.superuser;
    }
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

  // superuser - computed: false, optional: false, required: true
  private _superuser?: boolean | cdktf.IResolvable; 
  public get superuser() {
    return this.getBooleanAttribute('superuser');
  }
  public set superuser(value: boolean | cdktf.IResolvable) {
    this._superuser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get superuserInput() {
    return this._superuser;
  }
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersOutputReference {
    return new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpec {
  /**
  * Additional Annotations allows to define additional labels that will be included in all objects created by the operator. Note, user can override values set by default from the cass-operator and doing so could break cass-operator functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#additional_annotations DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#additional_annotations}
  */
  readonly additionalAnnotations?: { [key: string]: string };
  /**
  * Additional Labels allows to define additional labels that will be included in all objects created by the operator. Note, user can override values set by default from the cass-operator and doing so could break cass-operator functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#additional_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#additional_seeds DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#additional_seeds}
  */
  readonly additionalSeeds?: string[];
  /**
  * AdditionalServiceConfig allows to define additional parameters that are included in the created Services. Note, user can override values set by cass-operator and doing so could break cass-operator functionality. Avoid label 'cass-operator' and anything that starts with 'cassandra.datastax.com/'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#additional_service_config DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#additional_service_config}
  */
  readonly additionalServiceConfig?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfig;
  /**
  * Turning this option on allows multiple server pods to be created on a k8s worker node, by removing the default pod anti affinity rules. By default the operator creates just one server pod per k8s worker node. Using custom affinity rules might require turning this option on in which case the defaults are not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#allow_multiple_nodes_per_worker DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#allow_multiple_nodes_per_worker}
  */
  readonly allowMultipleNodesPerWorker?: boolean | cdktf.IResolvable;
  /**
  * Indicates that configuration and container image changes should only be pushed to the first rack of the datacenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#canary_upgrade DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#canary_upgrade}
  */
  readonly canaryUpgrade?: boolean | cdktf.IResolvable;
  /**
  * The number of nodes that will be updated when CanaryUpgrade is true. Note that the value is either 0 or greater than the rack size, then all nodes in the rack will get updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#canary_upgrade_count DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#canary_upgrade_count}
  */
  readonly canaryUpgradeCount?: number;
  /**
  * CDC allows configuration of the change data capture agent which can run within the Management API container. Use it to send data to Pulsar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#cdc DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#cdc}
  */
  readonly cdc?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdc;
  /**
  * The name by which CQL clients and instances will know the cluster. If the same cluster name is shared by multiple Datacenters in the same Kubernetes namespace, they will join together in a multi-datacenter cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#cluster_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Config for the server, in YAML format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#config DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#config}
  */
  readonly config?: string;
  /**
  * Container image for the config builder init container. Overrides value from ImageConfig ConfigBuilderImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#config_builder_image DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#config_builder_image}
  */
  readonly configBuilderImage?: string;
  /**
  * Kubernetes resource requests and limits per server config initialization container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#config_builder_resources DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#config_builder_resources}
  */
  readonly configBuilderResources?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResources;
  /**
  * ConfigSecret is the name of a secret that contains configuration for Cassandra. The secret is expected to have a property named config whose value should be a JSON formatted string that should look like this: config: |- { 'cassandra-yaml': { 'read_request_timeout_in_ms': 10000 }, 'jmv-options': { 'max_heap_size': 1024M } } ConfigSecret is mutually exclusive with Config. ConfigSecret takes precedence and will be used exclusively if both properties are set. The operator sets a watch such that an update to the secret will trigger an update of the StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#config_secret DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#config_secret}
  */
  readonly configSecret?: string;
  /**
  * DatacenterName allows to override the name of the Cassandra datacenter. Kubernetes objects will be named after a sanitized version of it if set, and if not metadata.name. In Cassandra the DC name will be overridden by this value. It may generate some confusion as objects created for the DC will have a different name than the CasandraDatacenter object itself. This setting can create conflicts if multiple DCs coexist in the same namespace if metadata.name for a DC with no override is set to the same value as the override name of another DC. Use cautiously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#datacenter_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#datacenter_name}
  */
  readonly datacenterName?: string;
  /**
  * Configuration for disabling the simple log tailing sidecar container. Our default is to have it enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#disable_system_logger_sidecar DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#disable_system_logger_sidecar}
  */
  readonly disableSystemLoggerSidecar?: boolean | cdktf.IResolvable;
  /**
  * DEPRECATED This setting does nothing and defaults to true. Use SecurityContext instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#docker_image_runs_as_cassandra DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#docker_image_runs_as_cassandra}
  */
  readonly dockerImageRunsAsCassandra?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#dse_workloads DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#dse_workloads}
  */
  readonly dseWorkloads?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloads;
  /**
  * Rack names in this list are set to the latest StatefulSet configuration even if Cassandra nodes are down. Use this to recover from an upgrade that couldn't roll out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#force_upgrade_racks DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#force_upgrade_racks}
  */
  readonly forceUpgradeRacks?: string[];
  /**
  * Config for the Management API certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#management_api_auth DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#management_api_auth}
  */
  readonly managementApiAuth?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuth;
  /**
  * MinReadySeconds sets the minimum number of seconds for which a newly created pod should be ready without any of its containers crashing, for it to be considered available. Defaults to 5 seconds and is set in the StatefulSet spec. Setting to 0 might cause multiple Cassandra pods to restart at the same time despite PodDisruptionBudget settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#min_ready_seconds DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#networking DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#networking}
  */
  readonly networking?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworking;
  /**
  * NodeAffinityLabels to pin the Datacenter, using node affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#node_affinity_labels DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#node_affinity_labels}
  */
  readonly nodeAffinityLabels?: { [key: string]: string };
  /**
  * A map of label keys and values to restrict Cassandra node scheduling to k8s workers with matchiing labels. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#node_selector DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the cassandra pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#pod_template_spec DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#pod_template_spec}
  */
  readonly podTemplateSpec?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpec;
  /**
  * A list of the named racks in the datacenter, representing independent failure domains. The number of racks should match the replication factor in the keyspaces you plan to create, and the number of racks cannot easily be changed once a datacenter is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#racks DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#racks}
  */
  readonly racks?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks[] | cdktf.IResolvable;
  /**
  * ReadOnlyRootFilesystem makes the cassandra container to be run with a read-only root filesystem. Currently only functional when used with the new k8ssandra-client config builder (Cassandra 4.1 and newer and HCD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#read_only_root_filesystem DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Deprecated Use CassandraTask replacenode to achieve correct node replacement. A list of pod names that need to be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#replace_nodes DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#replace_nodes}
  */
  readonly replaceNodes?: string[];
  /**
  * Kubernetes resource requests and limits, per pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#resources DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources;
  /**
  * Deprecated. Use CassandraTask for rolling restarts. Whether to do a rolling restart at the next opportunity. The operator will set this back to false once the restart is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#rolling_restart_requested DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#rolling_restart_requested}
  */
  readonly rollingRestartRequested?: boolean | cdktf.IResolvable;
  /**
  * Cassandra server image name. Use of ImageConfig to match ServerVersion is recommended instead of this value. This value will override anything set in the ImageConfig matching the ServerVersion More info: https://kubernetes.io/docs/concepts/containers/images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#server_image DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#server_image}
  */
  readonly serverImage?: string;
  /**
  * Server type: 'cassandra', 'dse' or 'hcd'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#server_type DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#server_type}
  */
  readonly serverType: string;
  /**
  * Version string for config builder, used to generate Cassandra server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#server_version DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#server_version}
  */
  readonly serverVersion: string;
  /**
  * Deprecated DeprecatedServiceAccount Use ServiceAccountName instead, which takes precedence. The k8s service account to use for the server pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#service_account DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * ServiceAccountName is the Kubernetes service account to use for the server pods. This takes presedence over DeprecatedServiceAccount and both take precedence over setting it in the PodTemplateSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#service_account_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Desired number of Cassandra server nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#size DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#size}
  */
  readonly size: number;
  /**
  * A stopped CassandraDatacenter will have no running server pods, like using 'stop' with traditional System V init scripts. Other Kubernetes resources will be left intact, and volumes will re-attach when the CassandraDatacenter workload is resumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#stopped DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
  /**
  * StorageConfig describes the persistent storage request of each server node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#storage_config DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#storage_config}
  */
  readonly storageConfig: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig;
  /**
  * This secret defines the username and password for the Cassandra server superuser. If it is omitted, we will generate a secret instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#superuser_secret_name DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#superuser_secret_name}
  */
  readonly superuserSecretName?: string;
  /**
  * Container image for the log tailing sidecar container. Overrides value from ImageConfig SystemLoggerImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#system_logger_image DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#system_logger_image}
  */
  readonly systemLoggerImage?: string;
  /**
  * Kubernetes resource requests and limits per system logger container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#system_logger_resources DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#system_logger_resources}
  */
  readonly systemLoggerResources?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources;
  /**
  * Tolerations applied to the Cassandra pod. Note that these cannot be overridden with PodTemplateSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#tolerations DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * Cassandra users to bootstrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cassandra_datastax_com_cassandra_datacenter_v1beta1_manifest#users DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1Manifest#users}
  */
  readonly users?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecToTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalAnnotations),
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
    additional_seeds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalSeeds),
    additional_service_config: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfigToTerraform(struct!.additionalServiceConfig),
    allow_multiple_nodes_per_worker: cdktf.booleanToTerraform(struct!.allowMultipleNodesPerWorker),
    canary_upgrade: cdktf.booleanToTerraform(struct!.canaryUpgrade),
    canary_upgrade_count: cdktf.numberToTerraform(struct!.canaryUpgradeCount),
    cdc: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdcToTerraform(struct!.cdc),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    config: cdktf.stringToTerraform(struct!.config),
    config_builder_image: cdktf.stringToTerraform(struct!.configBuilderImage),
    config_builder_resources: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResourcesToTerraform(struct!.configBuilderResources),
    config_secret: cdktf.stringToTerraform(struct!.configSecret),
    datacenter_name: cdktf.stringToTerraform(struct!.datacenterName),
    disable_system_logger_sidecar: cdktf.booleanToTerraform(struct!.disableSystemLoggerSidecar),
    docker_image_runs_as_cassandra: cdktf.booleanToTerraform(struct!.dockerImageRunsAsCassandra),
    dse_workloads: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloadsToTerraform(struct!.dseWorkloads),
    force_upgrade_racks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forceUpgradeRacks),
    management_api_auth: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuthToTerraform(struct!.managementApiAuth),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    networking: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworkingToTerraform(struct!.networking),
    node_affinity_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinityLabels),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_template_spec: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpecToTerraform(struct!.podTemplateSpec),
    racks: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksToTerraform, false)(struct!.racks),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    replace_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replaceNodes),
    resources: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    rolling_restart_requested: cdktf.booleanToTerraform(struct!.rollingRestartRequested),
    server_image: cdktf.stringToTerraform(struct!.serverImage),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    server_version: cdktf.stringToTerraform(struct!.serverVersion),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    size: cdktf.numberToTerraform(struct!.size),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
    storage_config: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigToTerraform(struct!.storageConfig),
    superuser_secret_name: cdktf.stringToTerraform(struct!.superuserSecretName),
    system_logger_image: cdktf.stringToTerraform(struct!.systemLoggerImage),
    system_logger_resources: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesToTerraform(struct!.systemLoggerResources),
    tolerations: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    users: cdktf.listMapper(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    additional_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    additional_seeds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalSeeds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_service_config: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfigToHclTerraform(struct!.additionalServiceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfig",
    },
    allow_multiple_nodes_per_worker: {
      value: cdktf.booleanToHclTerraform(struct!.allowMultipleNodesPerWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    canary_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.canaryUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    canary_upgrade_count: {
      value: cdktf.numberToHclTerraform(struct!.canaryUpgradeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cdc: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdcToHclTerraform(struct!.cdc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdc",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_builder_image: {
      value: cdktf.stringToHclTerraform(struct!.configBuilderImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_builder_resources: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResourcesToHclTerraform(struct!.configBuilderResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResources",
    },
    config_secret: {
      value: cdktf.stringToHclTerraform(struct!.configSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_name: {
      value: cdktf.stringToHclTerraform(struct!.datacenterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_system_logger_sidecar: {
      value: cdktf.booleanToHclTerraform(struct!.disableSystemLoggerSidecar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_image_runs_as_cassandra: {
      value: cdktf.booleanToHclTerraform(struct!.dockerImageRunsAsCassandra),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dse_workloads: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloadsToHclTerraform(struct!.dseWorkloads),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloads",
    },
    force_upgrade_racks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forceUpgradeRacks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    management_api_auth: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuthToHclTerraform(struct!.managementApiAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuth",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    networking: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworking",
    },
    node_affinity_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinityLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_template_spec: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpecToHclTerraform(struct!.podTemplateSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpec",
    },
    racks: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksToHclTerraform, false)(struct!.racks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksList",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replaceNodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources",
    },
    rolling_restart_requested: {
      value: cdktf.booleanToHclTerraform(struct!.rollingRestartRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_image: {
      value: cdktf.stringToHclTerraform(struct!.serverImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_version: {
      value: cdktf.stringToHclTerraform(struct!.serverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stopped: {
      value: cdktf.booleanToHclTerraform(struct!.stopped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_config: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigToHclTerraform(struct!.storageConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig",
    },
    superuser_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.superuserSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_logger_image: {
      value: cdktf.stringToHclTerraform(struct!.systemLoggerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_logger_resources: {
      value: dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesToHclTerraform(struct!.systemLoggerResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsList",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAnnotations = this._additionalAnnotations;
    }
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    if (this._additionalSeeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSeeds = this._additionalSeeds;
    }
    if (this._additionalServiceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalServiceConfig = this._additionalServiceConfig?.internalValue;
    }
    if (this._allowMultipleNodesPerWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMultipleNodesPerWorker = this._allowMultipleNodesPerWorker;
    }
    if (this._canaryUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryUpgrade = this._canaryUpgrade;
    }
    if (this._canaryUpgradeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryUpgradeCount = this._canaryUpgradeCount;
    }
    if (this._cdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdc = this._cdc?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._configBuilderImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.configBuilderImage = this._configBuilderImage;
    }
    if (this._configBuilderResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configBuilderResources = this._configBuilderResources?.internalValue;
    }
    if (this._configSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSecret = this._configSecret;
    }
    if (this._datacenterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterName = this._datacenterName;
    }
    if (this._disableSystemLoggerSidecar !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSystemLoggerSidecar = this._disableSystemLoggerSidecar;
    }
    if (this._dockerImageRunsAsCassandra !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImageRunsAsCassandra = this._dockerImageRunsAsCassandra;
    }
    if (this._dseWorkloads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dseWorkloads = this._dseWorkloads?.internalValue;
    }
    if (this._forceUpgradeRacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUpgradeRacks = this._forceUpgradeRacks;
    }
    if (this._managementApiAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementApiAuth = this._managementApiAuth?.internalValue;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    if (this._nodeAffinityLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityLabels = this._nodeAffinityLabels;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podTemplateSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTemplateSpec = this._podTemplateSpec?.internalValue;
    }
    if (this._racks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.racks = this._racks?.internalValue;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._replaceNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceNodes = this._replaceNodes;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rollingRestartRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingRestartRequested = this._rollingRestartRequested;
    }
    if (this._serverImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverImage = this._serverImage;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._serverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverVersion = this._serverVersion;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._stopped !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopped = this._stopped;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._superuserSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.superuserSecretName = this._superuserSecretName;
    }
    if (this._systemLoggerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLoggerImage = this._systemLoggerImage;
    }
    if (this._systemLoggerResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLoggerResources = this._systemLoggerResources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAnnotations = undefined;
      this._additionalLabels = undefined;
      this._additionalSeeds = undefined;
      this._additionalServiceConfig.internalValue = undefined;
      this._allowMultipleNodesPerWorker = undefined;
      this._canaryUpgrade = undefined;
      this._canaryUpgradeCount = undefined;
      this._cdc.internalValue = undefined;
      this._clusterName = undefined;
      this._config = undefined;
      this._configBuilderImage = undefined;
      this._configBuilderResources.internalValue = undefined;
      this._configSecret = undefined;
      this._datacenterName = undefined;
      this._disableSystemLoggerSidecar = undefined;
      this._dockerImageRunsAsCassandra = undefined;
      this._dseWorkloads.internalValue = undefined;
      this._forceUpgradeRacks = undefined;
      this._managementApiAuth.internalValue = undefined;
      this._minReadySeconds = undefined;
      this._networking.internalValue = undefined;
      this._nodeAffinityLabels = undefined;
      this._nodeSelector = undefined;
      this._podTemplateSpec.internalValue = undefined;
      this._racks.internalValue = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._replaceNodes = undefined;
      this._resources.internalValue = undefined;
      this._rollingRestartRequested = undefined;
      this._serverImage = undefined;
      this._serverType = undefined;
      this._serverVersion = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountName = undefined;
      this._size = undefined;
      this._stopped = undefined;
      this._storageConfig.internalValue = undefined;
      this._superuserSecretName = undefined;
      this._systemLoggerImage = undefined;
      this._systemLoggerResources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAnnotations = value.additionalAnnotations;
      this._additionalLabels = value.additionalLabels;
      this._additionalSeeds = value.additionalSeeds;
      this._additionalServiceConfig.internalValue = value.additionalServiceConfig;
      this._allowMultipleNodesPerWorker = value.allowMultipleNodesPerWorker;
      this._canaryUpgrade = value.canaryUpgrade;
      this._canaryUpgradeCount = value.canaryUpgradeCount;
      this._cdc.internalValue = value.cdc;
      this._clusterName = value.clusterName;
      this._config = value.config;
      this._configBuilderImage = value.configBuilderImage;
      this._configBuilderResources.internalValue = value.configBuilderResources;
      this._configSecret = value.configSecret;
      this._datacenterName = value.datacenterName;
      this._disableSystemLoggerSidecar = value.disableSystemLoggerSidecar;
      this._dockerImageRunsAsCassandra = value.dockerImageRunsAsCassandra;
      this._dseWorkloads.internalValue = value.dseWorkloads;
      this._forceUpgradeRacks = value.forceUpgradeRacks;
      this._managementApiAuth.internalValue = value.managementApiAuth;
      this._minReadySeconds = value.minReadySeconds;
      this._networking.internalValue = value.networking;
      this._nodeAffinityLabels = value.nodeAffinityLabels;
      this._nodeSelector = value.nodeSelector;
      this._podTemplateSpec.internalValue = value.podTemplateSpec;
      this._racks.internalValue = value.racks;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._replaceNodes = value.replaceNodes;
      this._resources.internalValue = value.resources;
      this._rollingRestartRequested = value.rollingRestartRequested;
      this._serverImage = value.serverImage;
      this._serverType = value.serverType;
      this._serverVersion = value.serverVersion;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountName = value.serviceAccountName;
      this._size = value.size;
      this._stopped = value.stopped;
      this._storageConfig.internalValue = value.storageConfig;
      this._superuserSecretName = value.superuserSecretName;
      this._systemLoggerImage = value.systemLoggerImage;
      this._systemLoggerResources.internalValue = value.systemLoggerResources;
      this._tolerations.internalValue = value.tolerations;
      this._users.internalValue = value.users;
    }
  }

  // additional_annotations - computed: false, optional: true, required: false
  private _additionalAnnotations?: { [key: string]: string }; 
  public get additionalAnnotations() {
    return this.getStringMapAttribute('additional_annotations');
  }
  public set additionalAnnotations(value: { [key: string]: string }) {
    this._additionalAnnotations = value;
  }
  public resetAdditionalAnnotations() {
    this._additionalAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAnnotationsInput() {
    return this._additionalAnnotations;
  }

  // additional_labels - computed: false, optional: true, required: false
  private _additionalLabels?: { [key: string]: string }; 
  public get additionalLabels() {
    return this.getStringMapAttribute('additional_labels');
  }
  public set additionalLabels(value: { [key: string]: string }) {
    this._additionalLabels = value;
  }
  public resetAdditionalLabels() {
    this._additionalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLabelsInput() {
    return this._additionalLabels;
  }

  // additional_seeds - computed: false, optional: true, required: false
  private _additionalSeeds?: string[]; 
  public get additionalSeeds() {
    return this.getListAttribute('additional_seeds');
  }
  public set additionalSeeds(value: string[]) {
    this._additionalSeeds = value;
  }
  public resetAdditionalSeeds() {
    this._additionalSeeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSeedsInput() {
    return this._additionalSeeds;
  }

  // additional_service_config - computed: false, optional: true, required: false
  private _additionalServiceConfig = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfigOutputReference(this, "additional_service_config");
  public get additionalServiceConfig() {
    return this._additionalServiceConfig;
  }
  public putAdditionalServiceConfig(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecAdditionalServiceConfig) {
    this._additionalServiceConfig.internalValue = value;
  }
  public resetAdditionalServiceConfig() {
    this._additionalServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalServiceConfigInput() {
    return this._additionalServiceConfig.internalValue;
  }

  // allow_multiple_nodes_per_worker - computed: false, optional: true, required: false
  private _allowMultipleNodesPerWorker?: boolean | cdktf.IResolvable; 
  public get allowMultipleNodesPerWorker() {
    return this.getBooleanAttribute('allow_multiple_nodes_per_worker');
  }
  public set allowMultipleNodesPerWorker(value: boolean | cdktf.IResolvable) {
    this._allowMultipleNodesPerWorker = value;
  }
  public resetAllowMultipleNodesPerWorker() {
    this._allowMultipleNodesPerWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleNodesPerWorkerInput() {
    return this._allowMultipleNodesPerWorker;
  }

  // canary_upgrade - computed: false, optional: true, required: false
  private _canaryUpgrade?: boolean | cdktf.IResolvable; 
  public get canaryUpgrade() {
    return this.getBooleanAttribute('canary_upgrade');
  }
  public set canaryUpgrade(value: boolean | cdktf.IResolvable) {
    this._canaryUpgrade = value;
  }
  public resetCanaryUpgrade() {
    this._canaryUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryUpgradeInput() {
    return this._canaryUpgrade;
  }

  // canary_upgrade_count - computed: false, optional: true, required: false
  private _canaryUpgradeCount?: number; 
  public get canaryUpgradeCount() {
    return this.getNumberAttribute('canary_upgrade_count');
  }
  public set canaryUpgradeCount(value: number) {
    this._canaryUpgradeCount = value;
  }
  public resetCanaryUpgradeCount() {
    this._canaryUpgradeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryUpgradeCountInput() {
    return this._canaryUpgradeCount;
  }

  // cdc - computed: false, optional: true, required: false
  private _cdc = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdcOutputReference(this, "cdc");
  public get cdc() {
    return this._cdc;
  }
  public putCdc(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecCdc) {
    this._cdc.internalValue = value;
  }
  public resetCdc() {
    this._cdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcInput() {
    return this._cdc.internalValue;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // config_builder_image - computed: false, optional: true, required: false
  private _configBuilderImage?: string; 
  public get configBuilderImage() {
    return this.getStringAttribute('config_builder_image');
  }
  public set configBuilderImage(value: string) {
    this._configBuilderImage = value;
  }
  public resetConfigBuilderImage() {
    this._configBuilderImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configBuilderImageInput() {
    return this._configBuilderImage;
  }

  // config_builder_resources - computed: false, optional: true, required: false
  private _configBuilderResources = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResourcesOutputReference(this, "config_builder_resources");
  public get configBuilderResources() {
    return this._configBuilderResources;
  }
  public putConfigBuilderResources(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecConfigBuilderResources) {
    this._configBuilderResources.internalValue = value;
  }
  public resetConfigBuilderResources() {
    this._configBuilderResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configBuilderResourcesInput() {
    return this._configBuilderResources.internalValue;
  }

  // config_secret - computed: false, optional: true, required: false
  private _configSecret?: string; 
  public get configSecret() {
    return this.getStringAttribute('config_secret');
  }
  public set configSecret(value: string) {
    this._configSecret = value;
  }
  public resetConfigSecret() {
    this._configSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSecretInput() {
    return this._configSecret;
  }

  // datacenter_name - computed: false, optional: true, required: false
  private _datacenterName?: string; 
  public get datacenterName() {
    return this.getStringAttribute('datacenter_name');
  }
  public set datacenterName(value: string) {
    this._datacenterName = value;
  }
  public resetDatacenterName() {
    this._datacenterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterNameInput() {
    return this._datacenterName;
  }

  // disable_system_logger_sidecar - computed: false, optional: true, required: false
  private _disableSystemLoggerSidecar?: boolean | cdktf.IResolvable; 
  public get disableSystemLoggerSidecar() {
    return this.getBooleanAttribute('disable_system_logger_sidecar');
  }
  public set disableSystemLoggerSidecar(value: boolean | cdktf.IResolvable) {
    this._disableSystemLoggerSidecar = value;
  }
  public resetDisableSystemLoggerSidecar() {
    this._disableSystemLoggerSidecar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSystemLoggerSidecarInput() {
    return this._disableSystemLoggerSidecar;
  }

  // docker_image_runs_as_cassandra - computed: false, optional: true, required: false
  private _dockerImageRunsAsCassandra?: boolean | cdktf.IResolvable; 
  public get dockerImageRunsAsCassandra() {
    return this.getBooleanAttribute('docker_image_runs_as_cassandra');
  }
  public set dockerImageRunsAsCassandra(value: boolean | cdktf.IResolvable) {
    this._dockerImageRunsAsCassandra = value;
  }
  public resetDockerImageRunsAsCassandra() {
    this._dockerImageRunsAsCassandra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageRunsAsCassandraInput() {
    return this._dockerImageRunsAsCassandra;
  }

  // dse_workloads - computed: false, optional: true, required: false
  private _dseWorkloads = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloadsOutputReference(this, "dse_workloads");
  public get dseWorkloads() {
    return this._dseWorkloads;
  }
  public putDseWorkloads(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecDseWorkloads) {
    this._dseWorkloads.internalValue = value;
  }
  public resetDseWorkloads() {
    this._dseWorkloads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dseWorkloadsInput() {
    return this._dseWorkloads.internalValue;
  }

  // force_upgrade_racks - computed: false, optional: true, required: false
  private _forceUpgradeRacks?: string[]; 
  public get forceUpgradeRacks() {
    return this.getListAttribute('force_upgrade_racks');
  }
  public set forceUpgradeRacks(value: string[]) {
    this._forceUpgradeRacks = value;
  }
  public resetForceUpgradeRacks() {
    this._forceUpgradeRacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpgradeRacksInput() {
    return this._forceUpgradeRacks;
  }

  // management_api_auth - computed: false, optional: true, required: false
  private _managementApiAuth = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuthOutputReference(this, "management_api_auth");
  public get managementApiAuth() {
    return this._managementApiAuth;
  }
  public putManagementApiAuth(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecManagementApiAuth) {
    this._managementApiAuth.internalValue = value;
  }
  public resetManagementApiAuth() {
    this._managementApiAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementApiAuthInput() {
    return this._managementApiAuth.internalValue;
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

  // networking - computed: false, optional: true, required: false
  private _networking = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecNetworking) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // node_affinity_labels - computed: false, optional: true, required: false
  private _nodeAffinityLabels?: { [key: string]: string }; 
  public get nodeAffinityLabels() {
    return this.getStringMapAttribute('node_affinity_labels');
  }
  public set nodeAffinityLabels(value: { [key: string]: string }) {
    this._nodeAffinityLabels = value;
  }
  public resetNodeAffinityLabels() {
    this._nodeAffinityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityLabelsInput() {
    return this._nodeAffinityLabels;
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

  // pod_template_spec - computed: false, optional: true, required: false
  private _podTemplateSpec = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpecOutputReference(this, "pod_template_spec");
  public get podTemplateSpec() {
    return this._podTemplateSpec;
  }
  public putPodTemplateSpec(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecPodTemplateSpec) {
    this._podTemplateSpec.internalValue = value;
  }
  public resetPodTemplateSpec() {
    this._podTemplateSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTemplateSpecInput() {
    return this._podTemplateSpec.internalValue;
  }

  // racks - computed: false, optional: true, required: false
  private _racks = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacksList(this, "racks", false);
  public get racks() {
    return this._racks;
  }
  public putRacks(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecRacks[] | cdktf.IResolvable) {
    this._racks.internalValue = value;
  }
  public resetRacks() {
    this._racks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get racksInput() {
    return this._racks.internalValue;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // replace_nodes - computed: false, optional: true, required: false
  private _replaceNodes?: string[]; 
  public get replaceNodes() {
    return this.getListAttribute('replace_nodes');
  }
  public set replaceNodes(value: string[]) {
    this._replaceNodes = value;
  }
  public resetReplaceNodes() {
    this._replaceNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceNodesInput() {
    return this._replaceNodes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // rolling_restart_requested - computed: false, optional: true, required: false
  private _rollingRestartRequested?: boolean | cdktf.IResolvable; 
  public get rollingRestartRequested() {
    return this.getBooleanAttribute('rolling_restart_requested');
  }
  public set rollingRestartRequested(value: boolean | cdktf.IResolvable) {
    this._rollingRestartRequested = value;
  }
  public resetRollingRestartRequested() {
    this._rollingRestartRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingRestartRequestedInput() {
    return this._rollingRestartRequested;
  }

  // server_image - computed: false, optional: true, required: false
  private _serverImage?: string; 
  public get serverImage() {
    return this.getStringAttribute('server_image');
  }
  public set serverImage(value: string) {
    this._serverImage = value;
  }
  public resetServerImage() {
    this._serverImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverImageInput() {
    return this._serverImage;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // server_version - computed: false, optional: false, required: true
  private _serverVersion?: string; 
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }
  public set serverVersion(value: string) {
    this._serverVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVersionInput() {
    return this._serverVersion;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // stopped - computed: false, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }

  // storage_config - computed: false, optional: false, required: true
  private _storageConfig = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // superuser_secret_name - computed: false, optional: true, required: false
  private _superuserSecretName?: string; 
  public get superuserSecretName() {
    return this.getStringAttribute('superuser_secret_name');
  }
  public set superuserSecretName(value: string) {
    this._superuserSecretName = value;
  }
  public resetSuperuserSecretName() {
    this._superuserSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superuserSecretNameInput() {
    return this._superuserSecretName;
  }

  // system_logger_image - computed: false, optional: true, required: false
  private _systemLoggerImage?: string; 
  public get systemLoggerImage() {
    return this.getStringAttribute('system_logger_image');
  }
  public set systemLoggerImage(value: string) {
    this._systemLoggerImage = value;
  }
  public resetSystemLoggerImage() {
    this._systemLoggerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLoggerImageInput() {
    return this._systemLoggerImage;
  }

  // system_logger_resources - computed: false, optional: true, required: false
  private _systemLoggerResources = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResourcesOutputReference(this, "system_logger_resources");
  public get systemLoggerResources() {
    return this._systemLoggerResources;
  }
  public putSystemLoggerResources(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecSystemLoggerResources) {
    this._systemLoggerResources.internalValue = value;
  }
  public resetSystemLoggerResources() {
    this._systemLoggerResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLoggerResourcesInput() {
    return this._systemLoggerResources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SCassandraDatastaxComCassandraDatacenterV1Beta1ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
